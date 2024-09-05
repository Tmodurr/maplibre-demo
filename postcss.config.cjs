module.exports = {
    plugins: {
      'postcss-preset-mantine': {
        autoRem: true, // casts pixels to rems in all files (rems used everywhere, em in media queries)
      },
      'postcss-simple-vars': {
        variables: {
          'mantine-breakpoint-xs': '36em',
          'mantine-breakpoint-sm': '48em',
          'mantine-breakpoint-md': '62em',
          'mantine-breakpoint-lg': '75em',
          'mantine-breakpoint-xl': '88em',
        },
      },
    },
  };