module.exports = {
  // mode: 'jit',
  //  purge: [
  //   './*.html'
  // ],

	darkMode: false, //you can set it to media(uses prefers-color-scheme) or class(better for toggling modes via a button)

  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
  
      'xl': {'max': '1169px'},
      // => @media (max-width: 1169px) { ... }
  
      'lg': {'max': '1049px'},
      // => @media (max-width: 1049px) { ... }
  
      'md': {'max': '899px'},
      // => @media (max-width: 899px) { ... }
  
      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        'shingo-debold': ['shingo-debold'],
        'shingo-heavy': ['shingo-heavy'],
        'shingo-medium': ['shingo-medium'],
        'myriadpro-bold': ['myriadpro-bold'],
        'myriadpro-semibold': ['myriadpro-semibold'],
        'genjyuu-bold': ['genjyuu-bold'],
      },
      textColor: {
        'green': '#3d8900',
        'brown': '#814516',
        'light-yellow': '#fff600',
        'red': '#ed1d1c',
        'grey': '#524a4a',
        'green-2': '#26a822',
      },
    },
  },
	variants: {
  },
	plugins: [],
  corePlugins: {
    container: false,
  }
}