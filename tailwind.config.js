/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
            DEFAULT: '#558784',
            50: '#FFE5F9',
            100: '#FFCCF4',
            200: '#FF99E9',
            300: '#FF66DE',
            400: '#FF33D3',
            500: '#FF00C7',
            600: '#CC00A0',
            700: '#990078',
            800: '#660050',
            900: '#330028',
        },
        text: {
            DEFAULT: '#060606',
            100: '#060606',
            200: '#060606',
            300: '#060606',
            400: '#060606',
            500: '#060606',
            600: '#060606',
            700: '#060606',
            800: '#060606',
            900: '#060606',
        },
        principal: '#558784',
        primaryOpacity: '#fffba3',
        secondary: '#00A09D',
        tertiary: '#6B0000',
        slider:'#548F93',
        sliderSelect:'#6AA1A1',
    },
    animation: {
        'slide-transition': 'slide-transition 2s ease-in-out forwards',
        'slide-down': 'slide-down 500ms ease-in-out forwards',
        'slide-up': 'slide-up 500ms ease-in-out forwards',
        appear: 'appear 700ms ease-in-out forwards',
        shake: 'shake 700ms ease-in-out     ',
        appeartop: 'appeartop 700ms ease-in-out forwards',
        disappear: 'disappear 2s ease-in-out forwards',
        appeardelayed: 'appear 700ms 700ms ease-in-out forwards',
        draw: 'draw 3s 500ms ease-in-out forwards',
        redraw: 'draw 3s 2s ease-in-out alternate infinite ',
        'bounce-x': 'bounce-x 1s ease-in-out infinite',
      },
      keyframes: {
          appear: {
              '0%': { opacity: 0 },
              '100%': { opacity: 1 },
          },
          appeartop: {
              '0%': { opacity: 0, transform: 'translateY(-100px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' },
          },
          disappear: {
              '60%': { opacity: 0 },
              '100%': { opacity: 1 },
          },
          shake: {
              '0%': { transform: 'rotate(0deg)' },
              '20%': { transform: 'rotate(-0.5deg)' },
              '40%': { transform: 'rotate(0.5deg)' },
              '100%': { transform: 'rotate(0deg)' },
          },
          draw: {
              to: { strokeDashoffset: 0 },
          },
          redraw: {
              '0%': { strokeDashoffset: 0 },
              '25%': { strokeDashoffset: 1500 },
              '50%': { strokeDashoffset: 0 },
          },
          'slide-down': {
              '0%': { bottom: '100%' },
              '100%': { bottom: '0%' },
          },
          'slide-up': {
              '0%': { bottom: '0%' },
              '100%': { bottom: '100%' },
          },
          'slide-transition': {
              '0% , 100%': { bottom: '100%' },
              '20% , 80% ': { bottom: '0%' },
          },
          'bounce-x': {
              '0%, 100%': { transform: 'translateX(-5%)' },
              '50%': { transform: 'translateX(0)' },
          },
      },
      rotate: {
          135: '135deg',
      },
      letterSpacing: {
          ultratight: '-0.09em',
      },
    },
    fontFamily:{
        'principal':['Arial']
    },
    fontSize: {
        xxs: ['0.65rem', '0.75rem'],
    },
    zIndex: {
        1: '1',
        2: '2',
    },
  },
  plugins: [
   
  ],
}

