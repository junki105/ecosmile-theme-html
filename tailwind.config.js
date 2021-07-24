module.exports = {
	purge: {
		content: [
		],
	},
	darkMode: false, //you can set it to media(uses prefers-color-scheme) or class(better for toggling modes via a button)

  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
  
      'xl': {'max': '1169px'},
      // => @media (max-width: 1279px) { ... }
  
      'lg': {'max': '1049px'},
      // => @media (max-width: 1023px) { ... }
  
      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
  
      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        'shingo-debold': ['shingo-debold'],
        'shingo-bold': ['shingo-bold'],
        'shingo-exlight': ['shingo-exlight'],
        'shingo-heavy': ['shingo-heavy'],
        'shingo-light': ['shingo-light'],
        'shingo-medium': ['shingo-medium'],
        'shingo-regular': ['shingo-regular'],
        'myriadpro-bold': ['myriadpro-bold'],
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