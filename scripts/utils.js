const ARROW_DOWN = `<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7075 4.01476L8.7643 10.9579C8.56966 11.1526 8.31715 11.2551 8.06201 11.2657C8.03132 11.2665 8.00064 11.2665 7.96907 11.2657C7.71393 11.2551 7.4623 11.1526 7.26765 10.9579L0.323616 4.01476C-0.0867132 3.60355 -0.0867132 2.93721 0.323616 2.52688L1.8115 1.039C2.22271 0.627789 2.88905 0.627789 3.29938 1.039L8.01554 5.75515L12.7317 1.039C13.1429 0.627789 13.8093 0.627789 14.2196 1.039L15.7075 2.52688C16.1187 2.93721 16.1187 3.60355 15.7075 4.01476Z" fill="currentColor"/>
</svg>`
const LOCATION_PIN = `<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.95487 0.526367C3.39294 0.526367 0.5 3.41328 0.5 6.98124C0.5 11.8751 6.95487 17.1065 6.95487 17.1065C6.95487 17.1065 13.4158 12.3211 13.4158 6.98124C13.4158 3.41328 10.5228 0.526367 6.95487 0.526367ZM6.95487 10.2057C5.17692 10.2057 3.73045 8.76522 3.73045 6.98124C3.73045 5.19726 5.17692 3.75079 6.95487 3.75079C8.73283 3.75079 10.1853 5.19726 10.1853 6.98124C10.1853 8.76522 8.73885 10.2057 6.95487 10.2057Z" fill="#D8504A"/>
</svg>`

const config = {
	overall: {
    order: 10,
		icon: `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
    <path d="M9.45313 4.00077C9.19533 4.02654 8.99903 4.25537 9 4.52853V5.05629H6.5C6.48438 5.05526 6.46875 5.05526 6.45313 5.05629C6.19533 5.08206 5.99903 5.31089 6 5.58405V7.03539C6 8.92068 7.2959 10.4988 9 10.812V10.8615C9 13.5972 10.9746 15.8475 13.5 16.1143V19.8334H10C9.17773 19.8334 8.5 20.5488 8.5 21.4167V22.4722C8.5 22.764 8.72364 23 9 23H19C19.2764 23 19.5 22.764 19.5 22.4722V21.4167C19.5 20.5488 18.8223 19.8334 18 19.8334H14.5V16.1143C17.0255 15.8473 19 13.5971 19 10.8615V10.812C20.7041 10.4987 22 8.91952 22 7.03539V5.58405C22 5.29233 21.7764 5.05629 21.5 5.05629H19V4.52853C19 4.23681 18.7764 4.00077 18.5 4.00077H9.5C9.48438 3.99974 9.46875 3.99974 9.45313 4.00077ZM10 5.05629H18V10.8617C18 13.2098 16.2246 15.0837 14 15.0837C11.7754 15.0837 10 13.2098 10 10.8617V5.05629ZM7 6.11181H9V9.7238C7.84765 9.43208 7 8.35287 7 7.03539V6.11181ZM19 6.11181H21V7.03539C21 8.35171 20.1524 9.43918 19 9.73198V6.11181ZM10 20.8891H18C18.2861 20.8891 18.5 21.1148 18.5 21.4169V21.9446H9.5V21.4169C9.5 21.1148 9.71387 20.8891 10 20.8891Z" fill="#372E3E"/>
  </svg>`,
		rankField: 'Rank for beginners',
		label: 'Overall rank',
	},
	vertical_rise: {
    order: 1,
		icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" viewBox="0 0 26 16" fill="none">
      <g clip-path="url(#clip0_386_2518)">
        <path d="M24.5545 0.000975295C25.0831 0.0620047 25.4826 0.556169 25.4799 1.14413V8.00308C25.4839 8.30822 25.3763 8.60294 25.1826 8.82174C24.989 9.03906 24.724 9.1626 24.447 9.1626C24.1699 9.1626 23.905 9.03906 23.7113 8.82174C23.5176 8.60293 23.41 8.30819 23.414 8.00308V3.91858C21.0416 6.58446 17.9991 10.0749 16.259 12.1947V12.1932C16.0048 12.5058 15.6161 12.6382 15.2476 12.5385L8.82424 10.7642C8.80138 10.7821 8.78389 10.794 8.75968 10.8119C8.51894 10.992 8.21093 11.2167 7.84514 11.4787C7.11214 12.0012 6.16799 12.6561 5.24132 13.3006C3.38665 14.5896 1.58307 15.8251 1.58307 15.8251C1.0989 16.1615 0.460041 15.9977 0.157431 15.4619C-0.14518 14.926 0.00141907 14.2205 0.485596 13.8841C0.485596 13.8841 2.29723 12.6427 4.14385 11.3596C5.06783 10.7181 5.99584 10.0632 6.71541 9.54963C7.07586 9.29361 7.38787 9.07035 7.60847 8.90661C7.71876 8.82474 7.80887 8.76222 7.8667 8.71608C7.86939 8.71311 7.87477 8.71906 7.87746 8.71608C7.92722 8.66101 7.93932 8.6491 7.93125 8.65654V8.65803C8.1841 8.41243 8.52976 8.31866 8.85658 8.40796L15.1725 10.1584C16.9949 7.96442 19.7559 4.78369 21.9726 2.28742H18.2499C17.9729 2.29188 17.7066 2.1728 17.5102 1.95846C17.3125 1.74412 17.2022 1.4509 17.2022 1.14427C17.2022 0.837638 17.3125 0.544413 17.5102 0.330071C17.7066 0.115729 17.9729 -0.00334964 18.2499 0.00111629H24.4475C24.4838 -0.000372098 24.5187 -0.000372098 24.5551 0.00111629L24.5545 0.000975295Z" fill="#372E3E"/>
      </g>
      <defs>
        <clipPath id="clip0_386_2518">
          <rect width="26" height="16" fill="white"/>
        </clipPath>
      </defs>
    </svg>`,
		rankField: 'Rank easy',
		fieldName: 'Vertical Rise (m)',
		format: v => v + 'm',
		label: 'Vertical rise',
	},
	paths: {
    order: 2,
		icon: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
    <path d="M16.7325 23.0897H16.6973L8.51479 22.9999C8.32046 22.997 8.13394 22.9169 7.99917 22.7753C7.8644 22.6347 7.79116 22.4452 7.79799 22.2499C7.79213 22.0546 7.86928 21.8671 8.00795 21.7304C8.1476 21.5946 8.33803 21.5224 8.53238 21.5321L16.7121 21.6298H16.7356C18.3381 21.6269 19.6408 20.3329 19.6526 18.7303V17.8074C19.6614 16.2 18.3703 14.8874 16.7628 14.8699L8.28032 14.8025C6.99224 14.7928 5.76182 14.2723 4.85832 13.3553C3.95402 12.4383 3.45207 11.2 3.46282 9.91202C3.47551 8.63272 3.99212 7.40902 4.90129 6.50777C5.80949 5.60542 7.03704 5.0986 8.31729 5.0947H16.0498C16.4355 5.11716 16.7373 5.43747 16.7373 5.8242C16.7373 6.20995 16.4355 6.53025 16.0498 6.55272H8.31729C6.45304 6.55663 4.93829 8.05857 4.91779 9.92272C4.90998 10.8241 5.26154 11.6913 5.89337 12.3338C6.52617 12.9764 7.38849 13.3407 8.28984 13.3475L16.7723 13.413V13.412C17.9325 13.4227 19.0419 13.8934 19.8563 14.7206C20.6698 15.5477 21.1229 16.6639 21.1151 17.8251V18.7479V18.747C21.1054 19.9032 20.6386 21.0077 19.8183 21.8212C18.997 22.6347 17.8878 23.0907 16.7325 23.0897Z" fill="#372E3E"/>
    <path d="M21.4179 2.95225L22.6376 1.90927L18.5576 1.91025C18.3799 1.91025 18.21 1.98056 18.085 2.10654C17.959 2.23252 17.8896 2.40244 17.8896 2.58016V6.21991C17.8896 6.71991 19.3623 6.71991 19.3623 6.21991V4.00019H22.6378L21.4179 2.95225Z" fill="#372E3E"/>
    <path d="M7.3174 16.7627C6.1836 15.6289 4.34565 15.6289 3.2129 16.7627C2.0791 17.8965 2.0791 19.7345 3.2129 20.8672L5.26562 22.92L7.31835 20.8672H7.31737C8.45017 19.7334 8.4502 17.8965 7.3174 16.7627ZM5.26467 20.3252C4.59572 20.3262 3.99122 19.9239 3.7344 19.3047C3.47757 18.6866 3.61819 17.9747 4.09182 17.501C4.56447 17.0264 5.2764 16.8848 5.89552 17.1407C6.5137 17.3965 6.91797 18.0001 6.91797 18.67C6.91797 19.5831 6.17777 20.3233 5.26467 20.3252Z" fill="#372E3E"/>
  </svg>`,
		rankField: 'Rank Total no. of paths',
		label: 'Running paths',
		fieldName: 'Total no. of paths',
	},
	rainy_days: {
    order: 3,
		icon: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
    <g clip-path="url(#clip0_386_2525)">
      <path d="M15.2365 3.33712C14.8394 3.33712 14.4194 3.38388 14.0462 3.4536C13.1832 1.86711 11.5033 0.770432 9.56647 0.770432C6.74302 0.770432 4.47964 3.05754 4.47964 5.88015C2.05309 5.88015 0.0925293 7.86367 0.0925293 10.2902C0.0925293 12.7166 2.05225 14.7002 4.47964 14.7002H15.5868C18.5496 14.5131 20.9065 12.0399 20.9065 9.00726C20.9065 5.88015 18.3865 3.33712 15.2365 3.33712ZM15.517 13.5566H4.47962C2.70611 13.5566 1.2599 12.0866 1.2599 10.3131C1.2599 8.51662 2.70692 7.06966 4.47962 7.06966H5.64611V5.90317C5.64611 3.73345 7.39583 1.96 9.56639 1.96C11.0134 1.96 12.3432 2.75323 13.0198 4.03703L13.4398 4.80731L14.3028 4.62028C14.6063 4.55055 14.9328 4.52676 15.2593 4.52676C17.7325 4.52676 19.7627 6.55704 19.7627 9.05331C19.7398 11.4339 17.8965 13.4173 15.5168 13.5568L15.517 13.5566Z" fill="#372E3E"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.76025 16.1003C4.90052 15.75 5.29674 15.5638 5.64702 15.6803C5.9973 15.8206 6.1835 16.2168 6.06702 16.567L4.90053 19.7399C4.76026 20.0902 4.36404 20.2764 4.01376 20.1599C3.66348 20.0197 3.47728 19.6235 3.59376 19.2732L4.76025 16.1003Z" fill="#372E3E"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.65332 16.1003C7.79359 15.75 8.1898 15.5638 8.54008 15.6803C8.89036 15.8206 9.07657 16.2168 8.96008 16.567L7.7936 19.7399C7.65332 20.0902 7.25711 20.2764 6.90683 20.1599C6.55655 20.0197 6.37034 19.6235 6.48683 19.2732L7.65332 16.1003Z" fill="#372E3E"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5469 16.1003C10.6871 15.75 11.0834 15.5638 11.4336 15.6803C11.7839 15.8206 11.9701 16.2168 11.8536 16.567L10.6872 19.7399C10.5469 20.0902 10.1507 20.2764 9.80038 20.1599C9.4501 20.0197 9.2639 19.6235 9.38038 19.2732L10.5469 16.1003Z" fill="#372E3E"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4399 16.1003C13.5802 15.75 13.9764 15.5638 14.3267 15.6803C14.677 15.8206 14.8632 16.2168 14.7467 16.567L13.5802 19.7399C13.4399 20.0902 13.0437 20.2764 12.6934 20.1599C12.3432 20.0197 12.157 19.6235 12.2734 19.2732L13.4399 16.1003Z" fill="#372E3E"/>
    </g>
    <defs>
      <clipPath id="clip0_386_2525">
        <rect width="21" height="21" fill="white"/>
      </clipPath>
    </defs>
  </svg>`,
		rankField: 'Rank Rainy Days',
		label: 'Rainy days',
		fieldName: 'Rainy Days (2022)',
	},
	wind: {
    order: 4,
		icon: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
    <path d="M15.75 11.1562H1.74976C1.39129 11.1562 1.09351 10.8585 1.09351 10.5C1.09351 10.1415 1.39129 9.84374 1.74976 9.84374H15.75C17.316 9.84374 18.5941 8.56652 18.5941 6.99971C18.5941 5.91443 17.7106 5.03096 16.6253 5.03096C15.54 5.03096 14.6566 5.91443 14.6566 6.99971C14.6566 7.35818 14.3588 7.65596 14.0003 7.65596C13.6418 7.65596 13.3441 7.35818 13.3441 6.99971C13.3441 5.18846 14.8141 3.71846 16.6253 3.71846C18.4366 3.71846 19.9066 5.18846 19.9066 6.99971C19.9066 9.29249 18.0428 11.1562 15.75 11.1562Z" fill="#372E3E"/>
    <path d="M9.62476 8.53125H1.74976C1.39129 8.53125 1.09351 8.23347 1.09351 7.875C1.09351 7.51652 1.39129 7.21874 1.74976 7.21874H9.62476C10.71 7.21874 11.5935 6.33527 11.5935 5.24999C11.5935 4.64624 11.1038 4.15652 10.5 4.15652C9.89629 4.15652 9.40657 4.64624 9.40657 5.24999C9.40657 5.60846 9.10879 5.90624 8.75032 5.90624C8.39185 5.90624 8.09407 5.60846 8.09407 5.24999C8.09407 3.92027 9.17032 2.84402 10.5 2.84402C11.8298 2.84402 12.906 3.92027 12.906 5.24999C12.906 7.06124 11.436 8.53125 9.62476 8.53125Z" fill="#372E3E"/>
    <path d="M13.125 18.156C11.7953 18.156 10.7191 17.0797 10.7191 15.75C10.7191 15.3915 11.0168 15.0938 11.3753 15.0938C11.7338 15.0938 12.0316 15.3915 12.0316 15.75C12.0316 16.3538 12.5213 16.8435 13.125 16.8435C13.7288 16.8435 14.2185 16.3538 14.2185 15.75C14.2185 14.6647 13.335 13.7812 12.2498 13.7812H1.74976C1.39129 13.7812 1.09351 13.4835 1.09351 13.125C1.09351 12.7665 1.39129 12.4688 1.74976 12.4688H12.2498C14.061 12.4688 15.531 13.9388 15.531 15.75C15.531 17.0797 14.4548 18.156 13.125 18.156Z" fill="#372E3E"/>
  </svg>`,
		rankField: 'Rank Average Wind Speed Knots',
		label: 'Wind speed',
		format: v => v + 'kts',
		fieldName: 'Average Wind Speed Knots (2022)',
	},
	easy: {
    order: 5,
		icon: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
    <path d="M15.7507 2.565C14.535 2.375 13.3757 3.09716 12.9763 4.21785C12.482 4.2557 11.9884 4.3507 11.532 4.52216L12.0263 5.87146C12.3113 5.77646 12.5963 5.70076 12.9006 5.66216C13.1284 6.63146 13.9263 7.41 14.9712 7.56216C16.3398 7.79 17.6506 6.84 17.8598 5.47216C18.0691 4.085 17.1191 2.79278 15.7504 2.56497L15.7507 2.565Z" fill="#372E3E"/>
    <path d="M6.15562 13.585C6.00347 12.5022 5.16777 11.6094 4.02781 11.4194C2.65996 11.2101 1.34919 12.1601 1.14 13.528C0.930691 14.9152 1.88069 16.2074 3.24938 16.4158C4.38938 16.5865 5.47219 15.9787 5.92876 14.9908C6.09946 15.0101 6.28945 15.0101 6.4416 15.0101C6.85945 15.0101 7.25876 14.9723 7.60091 14.8773L7.25801 13.4901C6.95445 13.5851 6.57445 13.6044 6.15586 13.5851L6.15562 13.585Z" fill="#372E3E"/>
    <path d="M7.80933 13.2622L8.62648 14.4593C9.21578 14.06 9.63363 13.4522 9.84217 12.6922L8.45502 12.3122C8.32217 12.73 8.11287 13.0529 7.80933 13.2622Z" fill="#372E3E"/>
    <path d="M8.45508 10.0506V10.1078C8.53078 10.5256 8.55008 10.9249 8.55008 11.2856C8.55008 11.3999 8.55008 11.4949 8.53078 11.6085L9.95578 11.7035C9.95578 11.5706 9.97508 11.4378 9.97508 11.2856C9.97508 10.8485 9.93723 10.3928 9.86078 9.87993L8.45508 10.0506Z" fill="#372E3E"/>
    <path d="M8.37939 9.10062H9.8237C9.8237 8.60632 9.8994 8.15062 10.0709 7.73277L8.74085 7.20062C8.49296 7.78993 8.37939 8.43562 8.37939 9.10062Z" fill="#372E3E"/>
    <path d="M9.19556 6.3272L10.3734 7.14435C10.6391 6.76435 10.9627 6.46005 11.3806 6.21365L10.6399 4.95935C10.0506 5.32005 9.57556 5.77576 9.19556 6.3272Z" fill="#372E3E"/>
  </svg>`,
		rankField: 'Rank Number of easy runs',
		label: 'Easy routes',
		fieldName: 'Number of easy runs',
	},
	hard: {
    order: 6,
		icon: `<svg xmlns="http://www.w3.org/2000/svg" width="27" height="20" viewBox="0 0 27 20" fill="none">
    <g clip-path="url(#clip0_386_2537)">
      <path d="M26.9835 16.2436L20.2372 5.73919C20.0421 5.44701 19.5885 5.44701 19.3934 5.73919L17.0256 9.44586L12.2266 1.15447C12.129 0.991872 11.9669 0.894058 11.8047 0.894058C11.6096 0.894058 11.4474 0.991872 11.3828 1.15447L1.71891 17.7067C1.62136 17.8693 1.62136 18.0649 1.71891 18.2275C1.81646 18.3571 1.97863 18.4549 2.17245 18.4549H21.4052C21.6966 18.4549 21.9246 18.2275 21.9246 17.9341C21.9246 17.8045 21.8917 17.7067 21.8271 17.6089L21.5028 17.0563H26.5943C26.8857 17.0563 27.1138 16.8289 27.1138 16.5354C27.0808 16.4389 27.0479 16.3411 26.9833 16.2432L26.9835 16.2436ZM19.8165 6.97529L21.1138 9.02433L20.7566 8.79694C20.5615 8.69913 20.3347 8.69913 20.1725 8.86173L19.4909 9.51213L18.6155 8.86173L19.8165 6.97529ZM11.773 2.42244L13.9786 6.19545L13.4592 6.55369L11.8376 6.29328C11.74 6.26025 11.6108 6.29328 11.5132 6.35806L9.95623 7.17107L9.46975 6.39111L11.773 2.42244ZM3.048 17.4465L8.91891 7.36521L9.37245 8.11343C9.47 8.27603 9.63216 8.34082 9.79433 8.34082C9.85894 8.34082 9.95649 8.30779 10.0211 8.27603L11.8378 7.33347L13.5241 7.59388C13.6533 7.62691 13.7838 7.59388 13.8813 7.49607L14.497 7.07304L16.443 10.3898L17.0258 11.3654L19.7496 16.0477L20.3323 17.0893L20.5274 17.4476L3.048 17.4465ZM20.8858 16.0809L17.6108 10.423L18.0973 9.6748L19.2654 10.5526C19.4605 10.6822 19.7189 10.6822 19.8811 10.5196L20.5943 9.83611L22.2806 10.8448L25.6529 16.1127L20.8856 16.114L20.8858 16.0809Z" fill="#372E3E"/>
    </g>
    <defs>
      <clipPath id="clip0_386_2537">
        <rect width="27" height="20" fill="white"/>
      </clipPath>
    </defs>
  </svg>`,
		label: 'Expert routes',
		rankField: 'Rank Number of expert runs',
		fieldName: 'Number of expert runs',
	},
}

//----------- PROTOTYPE FUNCTIONS  ----------------------
d3.selection.prototype.patternify = function (params) {
	var container = this
	var selector = params.selector
	var elementTag = params.tag
	var data = params.data || [selector]

	// Pattern in action
	var selection = container.selectAll('.' + selector).data(data, (d, i) => {
		if (typeof d === 'object') {
			if (d.id) {
				return d.id
			}
		}
		return i
	})
	selection.exit().remove()
	selection = selection.enter().append(elementTag).merge(selection)
	selection.attr('class', selector)
	return selection
}

const globals = {
	Android: function () {
		return navigator.userAgent.match(/Android/i)
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i)
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i)
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i)
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i)
	},
	any: function () {
		return (
			globals.Android() ||
			globals.BlackBerry() ||
			globals.iOS() ||
			globals.Opera() ||
			globals.Windows()
		)
	},
	get isMobile() {
		return window.innerWidth <= 576
	},
	get device() {
		return window.innerWidth <= 576 ? 'mobile' : 'desktop'
	},
}

function ordinal_suffix_of(i) {
	var j = i % 10,
		k = i % 100
	if (j == 1 && k != 11) {
		return i + 'st'
	}
	if (j == 2 && k != 12) {
		return i + 'nd'
	}
	if (j == 3 && k != 13) {
		return i + 'rd'
	}
	return i + 'th'
}

function parseNumber(str) {
	return parseInt(
		String(str)
			.trim()
			.replaceAll('%', '')
			.replaceAll(',', '')
			.replaceAll('$', '')
	)
}

function formatThousand(num) {
	if (typeof num === 'number') {
		return d3.format(',')(num)
	}

	return num
}

function formatSi(num) {
	if (typeof num === 'number') {
		return d3.format('s')(num)
	}

	return num
}

function formatNumber(v) {
	const num = parseNumber(v)

	// if (num > 1000000) {
	//   return Math.round(num / 1000000) + "M";
	// }

	return Math.round(num / 1000) + 'K'
}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

function getRandomId() {
	return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

function initDropdown({ list, id, cb, placeholder, ...rest }) {
	const select = document.querySelector(id)
	const options = list.slice()

	const choice = new Choices(select, {
		choices: [
			...(placeholder
				? [{ selected: true, disabled: true, value: '', label: placeholder }]
				: []),
			...options,
		],
		position: 'bottom',
		shouldSort: false,
		itemSelectText: '',
		placeholder: false,
		searchResultLimit: options.length,
		searchEnabled: false,
		...rest,
	})

	select.addEventListener(
		'change',
		function (event) {
			const value = event.detail.value
			cb(value)
		},
		false
	)

	return choice
}

function getRankValue(rank, isSame) {
	return (isSame ? '=' : '') + (rank < 10 ? '0' + rank : rank)
}

const isVisible = function (ele, container) {
	const eleTop = ele.offsetTop
	const eleBottom = eleTop + ele.clientHeight

	const containerTop = container.scrollTop
	const containerBottom = containerTop + container.clientHeight

	// The element is fully visible in the container
	return (
		eleTop >= containerTop && eleBottom <= containerBottom
		// ||
		// // Some part of the element is visible in the container
		// (eleTop < containerTop && containerTop < eleBottom) ||
		// (eleTop < containerBottom && containerBottom < eleBottom)
	)
}

function isDescendant(parent, child) {
	var node = child.parentNode
	while (node != null) {
		if (node == parent) {
			return true
		}
		node = node.parentNode
	}
	return false
}

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1

		// And swap it with the current element.
		temporaryValue = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = temporaryValue
	}

	return array
}

function updateCssVar(varName, value) {
	const root = document.documentElement
	root.style.setProperty(varName, value)
}

function sanitize(str) {
	str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, '')
	return str.trim().split(' ').join('')
}

function loadSvg(url) {
	const xhr = new XMLHttpRequest()

	xhr.open('GET', url, true)

	xhr.overrideMimeType('text/plain')

	return new Promise((res, rej) => {
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					res(xhr.responseText)
				} else {
					rej(new Error('Error'))
				}
			}
		}

		xhr.send()
	})
}

function initTooltip(node, content, options) {
	let tip = node._tippy

	if (tip) {
		tip.destroy()
	}

	if (content) {
		return tippy(node, {
			content,
			allowHTML: true,
			maxWidth: 350,
			arrow: true,
			theme: 'light',
			animation: 'scale',
			duration: 0,
			trigger: 'mouseenter click',
			popperOptions: {
				modifiers: [
					{
						name: 'computeStyles',
						options: {
							gpuAcceleration: false, // true by default
						},
					},
				],
			},
			...(options || {}),
		})
	}

	return null
}
