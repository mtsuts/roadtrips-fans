class App {
	constructor() {
		this.zoomExtent = [0.9, 8]
		this.currentScale = 1
		this.zoomStep = 0.5

		this.loadDataAndInit()

		let timer = null

		d3.select(window).on('resize.map', () => {
			if (timer) clearTimeout(timer)
			timer = setTimeout(() => {
				this.map?.resize()
			}, 100)
		})
	}

	async loadDataAndInit() {
		try {
			const [mapjson, data] = await Promise.all([
				d3.json('./data/uk-outline-topo.json'),
				d3.csv('./data/football-data.csv', d3.autoType),
			])

			this.data = data

			this.choice = initDropdown({
				placeholder: 'FIND YOUR CLUB',
				list: data
					.slice()
					.sort((a, b) => {
						return d3.ascending(a.Team, b.Team)
					})
					.map(d => {
						return {
							label: d.Team,
							value: d.Team,
						}
					}),
				id: '#city_select',
				cb: team => {
					this.map.highlightPin(x => x.Team === team)
				},
				searchEnabled: true,
			})

			this.map = new MercatorMap({
				container: '#map',
				basemap: mapjson,
				data: this.data,
				zoomExtent: this.zoomExtent,
				layer: data.map((d, i) => {
					const [Latitude, Longitude] = d.Coord.split(';').map(d => +d.trim())
					return {
						...d,
						rank: d['Rank for beginners'],
						Latitude,
						Longitude,
					}
				}),
				getTooltipHtml: d => {
					return `
					<div class="tooltip-div">
						<h3 class="tooltip-title">${d.Team}</h3>

						<div>
						<div class='FC-rank'> 
            <div> Rank </div>
						</div>

							<table class="table table-sm">
								<thead>
									<tr>
										<th>Factors</th>
										<th>Rank</th>
										<th> <th>
									</tr>
								</thead>
								<tbody>
									${Object.values(config)
							.sort((a, b) => a.order - b.order)
							.map(conf => {
								console.log(conf)
								return `
												<tr>
													<td>
														<div class="d-flex align-items-center">
															<div class="icon">${conf.icon}</div>
															<div class="field-Team">${conf.label}</div>
														</div>
													</td>
													<td class="col-2">
														${conf.format ? conf.format(d[conf.fieldTeam] || '') : d[conf.fieldTeam] || ''}
													</td>
													<td class="col-3">
														${ordinal_suffix_of(d[conf.rankField])}
													</td>
												</tr>
											`
							}).join('')}
								</tbody>
							</table>
						
						</div>
					</div>`
				},
				beforeRender: container => {
					const isMobile = window.innerWidth < 576
					const g = container
						.patternify({
							tag: 'g',
							selector: 'backgrounds',
						})
						.attr(
							'transform',
							`translate(${isMobile ? 35 : 80}, ${isMobile ? -30 : 0})`
						)

					g.patternify({
						tag: 'g',
						selector: 'img',
						data: [
							'./images/desktop-map-background.svg',
							'./images/mobile-map-background.svg',
						],
					})
						.classed('d-mobile', d => {
							return d.includes('mobile')
						})
						.classed('d-desktop', d => {
							return d.includes('desktop')
						})
						.each(function (d) {
							loadSvg(d).then(res => d3.select(this).html(res))
						})
				},
				onPinClick: d => {
					this.choice.setChoiceByValue(d.Team)
					this.map.highlightPin(x => x.Team === d.Team)
				},
			})

			this.fillModal()
			this.initZoomBtns()
		} catch (e) {
			console.error(e)
		}
	}

	updateZoomBtns() {
		if (this.map) {
			d3.select('#zoom_in').property(
				'disabled',
				this.currentScale >= this.zoomExtent[1]
			)
			d3.select('#zoom_out').property(
				'disabled',
				this.currentScale <= this.zoomExtent[0]
			)
		}
	}

	initZoomBtns() {
		this.updateZoomBtns()

		d3.select('#zoom_in').on('click', () => {
			this.currentScale = Math.min(
				this.zoomExtent[1],
				this.currentScale + this.zoomStep
			)
			this.map && this.map.scale(this.currentScale)
			this.updateZoomBtns()
		})

		d3.select('#zoom_out').on('click', () => {
			this.currentScale = Math.max(
				this.zoomExtent[0],
				this.currentScale - this.zoomStep
			)

			this.map && this.map.scale(this.currentScale)
			this.updateZoomBtns()
		})

		d3.selectAll('.money-toggle').on('click', e => {
			const target = e.target.getAttribute('data-target')
			const field =
				target === 'with_money' ? 'RANK WITH BUDGET' : 'RANK NO BUDGET'

			this.rankField = field
			this.map && this.map.setColorBy(this.rankField)

			d3.selectAll('.money-toggle').classed('btn-active', false)
			d3.select(e.target).classed('btn-active', true)

			if (this.currentCountry) {
				this.selectCountry(this.currentCountry)
			}
		})
	}

	fillModal() {
		const table = d3.select('#table')

		const fill = conf => {
			table.html(`
				<thead>
					<tr>
						<th>Rank</th>
						<th>Club</th>
				${conf.fieldTeam ? `<th>${conf.label}</th>` : ''}
					</tr>
				</thead>
				<tbody>
					${this.data
					.slice()
					.sort((a, b) => {
						return a[conf.rankField] - b[conf.rankField]
					})
					.map(d => {
						return `
								<tr>
									<td>${ordinal_suffix_of(d[conf.rankField])}</td>

				

									<td>${d.Team}</td>
									${conf.fieldTeam ? `<td>${d[conf.fieldTeam]}</td>` : ''} 
								</tr>
							`
					})
					.join('')}
				</tbody>
			`)
		}

		fill(config.miles)

		d3.selectAll('.rank-btn').on('click', (e, d) => {
			console.log(config)
			const target = e.target.getAttribute('data-target')
			d3.selectAll('.rank-btn').classed('btn-active', false)
			d3.select('.table-desc-heading').text(config[target].tableText)
			d3.select(e.target).classed('btn-active', true)
			fill(config[target])
		})
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const app = new App()
	window.app = app
})
