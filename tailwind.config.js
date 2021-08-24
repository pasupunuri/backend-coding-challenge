module.exports = {
  purge: {
    enabled: false,
    content: [
      './app/vue/**/*.vue',
      './app/vue/**/*.ts',
      './app/vue/**/*.js',
    ],
    options: {
      whitelist: [],
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000000',
        white: '#ffffff',
        text: '#1F2D3F',
        blue: {
          default: '#0AAFFF',
          'border-100': '#E5E9F1',
          'border-200': '#c2ccd9',
          100: '#e7f7ff',
          200: '#c2ccd9',
        },
        bg: {
          100: '#F9FAFC',
          200: 'rgba(31, 45, 63, 0.2)',
        },
        gray: {
          100: '#ecedef',
        },
        navy: {
          300: '#8592A3',
          800: '#3E4856',
        },
        red: {
          default: '#eb5757',
          100: 'rgba(235, 87, 87, 0.1)',
        },
        green: {
          default: '#2ecc80',
          100: '#ebfaf3',
        },
        orange: {
          default: '#ff7d51',
          100: 'rgba(255, 125, 81, 0.1)',
        },
        yellow: {
          default: '#ffc212',
        },
      },
      height: {
        3.5: '0.875rem',
        7.5: '1.875rem',
        9: '2.25rem',
        9.5: '2.375rem',
        15: '3.75rem',
        19: '4.75rem',
        '11/12': '90%',
      },
      width: {
        3.5: '0.875rem',
        7: '2rem',
        10.5: '2.625rem',
        19: '4.75rem',
        25: '5.25rem',
        27.5: '6.875rem',
        30: '7.5rem',
        65: '16.25rem',
        75: '18.75rem',
        125: '31.25rem',
        160: '40rem',
        161.5: '40.375rem',
        '30pct': '30%',
        '13pct': '13%',
        '9pct': '9%',
        '18pct': '18%',
        '15pct': '15%',
      },
      maxWidth: {
        50: '12rem',
        160: '40rem',
      },
      spacing: {
        2.5: '0.625rem',
      },
      borderRadius: {
        xl: '0.625rem',
        '6px': '6px',
        '30px': '30px',
      },
      fontSize: {
        xxs: '0.625rem',
      },
      scale: {
        99: '.99',
      },
      boxShadow: {
        default: '0px 4px 40px rgba(28, 30, 36, 0.1)',
      },
      customForms: (theme) => ({
        default: {
          radio: {
            borderColor: theme('colors.blue.200'),
            '&:focus': {
              boxShadow: undefined,
              borderColor: undefined,
            },
          },
        },
      }),
    },
  },
  variants: {},
  plugins: [],
}
