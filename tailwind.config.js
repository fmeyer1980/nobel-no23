module.exports = {
  mode: 'jit',
  important: false,
  theme: {
    fluidSpacing: {
      '10': 'var(--size-xxs)',
      '25': 'var(--size-xs)',
      '50': 'var(--size-sm)',
      '100': 'var(--size-100)',
      '150': 'calc(var(--size-100) * 1.1)',
      '200': 'var(--size-200)',
      '250': 'calc(var(--size-200) * 1.25)',
      '300': 'var(--size-300)',
      '400': 'var(--size-400)',
      '450': 'calc(var(--size-400) * 1.1)',
      '500': 'var(--size-500)',
      '600': 'var(--size-600)',
      '650': 'calc(var(--size-600) * 1.1)',
      '700': 'var(--size-700)',
      '800': 'var(--size-800)',
      '900': 'var(--size-900)',
      '1000': 'var(--size-lg)',
      '1100': 'var(--size-xl)',
      '1200': 'calc(var(--size-xl) * 1.2)',
      '1300': 'calc(var(--size-xl) * 1.5)',
      '1400': 'calc(var(--size-xl) * 2.5)',
      'gutter': 'var(--gutter)',
      'container': 'var(--container-padding)',
      '2/3': '66.666667%',
      '10/12': '83.333333%',
      '1/1': '100%',
      '16/9': '56.25%',
      '4/3': '75%',
      '52': '13rem',
      '76': '19rem',
      '96': '24rem',
      'em-0.4': '.4em',
      'em-0.5': '.5em',
      'em-0.6': '.6em',
      'em-0.8': '.8em',
      'em-0.9': '.9em',
      'em-1': '1em',
      'em-1.2': '1.2em',
      'em-1.4': '1.4em',
      'em-1.6': '1.6em',
      'em-1.8': '1.8em',
      'em-2': '2em',
      'em-2.5': '2.5em',
      'em-3': '3em',
      'em-3.5': '3.5em',
      'em-4': '4em',
    },
    extend: {
      padding: theme => theme('fluidSpacing'),
      margin: theme => theme('fluidSpacing'),
      spacing: theme => theme('fluidSpacing'),
      gap: theme => theme('fluidSpacing'),
      fontSize: theme => theme('fluidSpacing'),
      flexGrow: {
        '9': '9999'
      },
      minWidth: {
        '10': '10rem',
        '15': '15rem',
        '20': '20rem',
        '25': '25rem',
        '30': '30rem',
        '40': '40rem',
        '50': '50rem',
        '60': '60rem',
        '70': '70rem',
        '80': '80rem',
        '90': '90rem'
      },
      maxWidth: {
        '10': '10rem',
        '15': '15rem',
        '20': '20rem',
        '25': '25rem',
        '30': '30rem',
        '40': '40rem',
        '50': '50rem',
        '60': '60rem',
        '70': '70rem',
        '80': '80rem',
        '90': '90rem'
      },
      colors: {
        'primary': {
          DEFAULT: '#C89170',
          '100': '#FCF7F3',
          '200': '#EFDBCF',
          '300': '#E7CEC0',
          '400': '#D1A082',
          '500': '#C89170',
        },
        'secondary': {
          '600': '#4C5770',
          '700': '#253048',
          '800': '#0B1727',
          '900': '#10141D',
        },
        'dark': '#36241D',
        'dark-glare': '#453027',
        'dark-shade': '#2E1B1B',
        'light': '#EFDBCF',
        'light-glare': '#FCF7F3',
        'light-shade': '#E7CEC0',
      },
      lineHeight: {
        'flat': '1.1'
      },
      fontFamily: {
        base: ['Helvetica-neue','Helvetica','Arial','Lucida','sans-serif'],
        heading: ['Poppins','Helvetica','Arial','Lucida','sans-serif'],
      },
      borderWidth: {
        '6': '6px',
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
  