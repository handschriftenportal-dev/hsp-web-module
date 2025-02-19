import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { PaletteColorOptions } from '@material-ui/core/styles/createPalette'
import {
  ThemeProvider,
  createTheme,
  ThemeOptions,
} from '@material-ui/core/styles'
import type {} from '@material-ui/lab/themeAugmentation'

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    black: PaletteColor
    darkTerracotta: PaletteColor
    electricBlue: PaletteColor
    liver: PaletteColor
    platinum: PaletteColor
    turquoise: PaletteColor
    warmGrey: PaletteColor
    white: PaletteColor
    whiteSmoke: PaletteColor
  }
  interface PaletteOptions {
    black?: PaletteColorOptions
    darkTerracotta?: PaletteColorOptions
    electricBlue?: PaletteColorOptions
    liver?: PaletteColorOptions
    platinum?: PaletteColorOptions
    turquoise?: PaletteColorOptions
    warmGrey: PaletteColorOptions
    white?: PaletteColorOptions
    whiteSmoke?: PaletteColorOptions
  }
}

// The light and dark colors were calculated by https://material.io/resources/color

const black: PaletteColorOptions = {
  main: '#000000',
}

const darkTerracotta: PaletteColorOptions = {
  main: '#d65151',
  dark: '#9f1c28',
  light: '#ff827d',
}

const electricBlue: PaletteColorOptions = {
  main: '#19efdb',
  dark: '#4ac6bc',
  light: '#b8ffff',
}

const liver: PaletteColorOptions = {
  main: '#4f4d4a',
  light: '#7b7976',
  dark: '#272522',
}

const platinum: PaletteColorOptions = {
  main: '#e9e7e4',
  light: '#ffffff',
  dark: '#b7b5b2',
}

const warmGrey: PaletteColorOptions = {
  main: '#dedad5',
  dark: '#aca8a4',
  light: '#ffffff',
}

const turquoise: PaletteColorOptions = {
  main: '#1dcfbe',
  dark: '#009d8e',
  light: '#69fff0',
}

const white: PaletteColorOptions = {
  main: '#ffffff',
}

const whiteSmoke: PaletteColorOptions = {
  main: '#f6f4f2',
  dark: '#c3c1bf',
  light: '#ffffff',
}

const important = (value: string | number) => value + ' !important'

const outline = { outline: important(`4px solid ${liver.main}`) }
const outlineWhite = { outline: important(`4px solid ${white.main}`) }

export const hspTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1560,
    },
  },
  palette: {
    primary: darkTerracotta,
    secondary: turquoise,
    background: {
      default: whiteSmoke.main,
    },
    black,
    darkTerracotta,
    electricBlue,
    liver,
    platinum,
    turquoise,
    warmGrey,
    white,
    whiteSmoke,
  },
  mixins: {
    toolbar: {
      minHeight: 80,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          {
            fontFamily: 'Junicode-2-Regular',
            sizeAdjust: '120%',
            src: `url('./fonts/Junicode-Regular.ttf') format('truetype')`,
          },
        ],
        body: {
          fontWeight: 400,
          // if an element is additionally focusable (e.g. skiplinks with tabIndex= -1 )
          // it can receive styling through adding className={'addFocusable'}
          '& .addFocusable': {
            '&:focus-visible': {
              ...outline,
            },
          },
          '& .addFocusableWhite': {
            '&:focus-visible': {
              ...outlineWhite,
            },
          },
          '& .addFocusableWithOutline': {
            '&:focus-visible': {
              ...outline,
              outlineOffset: '2px',
            },
          },
          '& .addFocusableWithWhiteOutline': {
            '&:focus-visible': {
              ...outlineWhite,
              outlineOffset: '-2px',
            },
          },
        },
      },
    },
    MuiButton: {
      root: {
        borderRadius: 2,
        '&:focus-visible': {
          ...outline,
        },
      },
      contained: {
        backgroundColor: whiteSmoke.main,
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: whiteSmoke.dark,
          boxShadow: 'none',
        },
      },
    },
    MuiButtonBase: {
      root: {
        '&:focus-visible': {
          ...outline,
        },
      },
    },
    MuiCheckbox: {
      root: {
        '&.Mui-focusVisible input+img': {
          ...outline,
          outlineOffset: '2px',
        },
      },
    },
    MuiFab: {
      root: {
        '&:focus-visible': {
          ...outline,
          outlineOffset: '2px',
        },
      },
    },
    MuiIconButton: {
      root: {
        color: black.main,
        '&:focus-visible': {
          ...outline,
        },
      },
    },
    MuiListItemIcon: {
      root: {
        color: black.main,
        '&:focus-visible': {
          ...outline,
        },
      },
    },
    MuiInput: {
      underline: {
        '&:after': {
          content: 'none',
        },
      },
    },
    MuiInputBase: {
      root: {
        maxHeight: '40px',
        '&.Mui-focusVisible': {
          ...outline,
          outlineOffset: '2px',
        },
      },
    },
    MuiLink: {
      root: {
        '&.Mui-focusVisible': {
          ...outline,
          outlineOffset: '2px',
        },
      },
    },
    MuiMenuItem: {
      root: {
        '&:focus-visible': {
          ...outline,
        },
      },
    },
    MuiNativeSelect: {
      root: {
        '&:focus-visible': {
          ...outline,
        },
      },
    },
    MuiPaginationItem: {
      root: {
        '&.Mui-selected': {
          backgroundColor: important(white.main),
          fontWeight: important(700),
          '&:focus-visible': {
            ...outline,
          },
        },
        '&:focus-visible': {
          ...outline,
        },
      },
    },
    MuiSelect: {
      root: {
        '&:focus-visible': {
          ...outline,
        },
      },
    },
    MuiSlider: {
      root: {
        '& .MuiSlider-thumb': {
          backgroundColor: 'white',
          height: '16px',
          width: '16px',
          '&:focus-visible': {
            ...outline,
            outlineOffset: '4px',
          },
        },
        '& .MuiSlider-rail': {
          backgroundColor: '#000',
          height: '4px',
        },
        '& .MuiSlider-track': {
          height: '4px',
          width: '4px',
        },
      },
    },
    MuiSwitch: {
      root: {
        '&&:focus-within': {
          ...outline,
        },
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: '1em',
        padding: '8px',
      },
    },
  },
  typography: {
    fontFamily:
      '"Roboto", "Helvetica", "Arial", sans-serif, "Junicode", "Junicode-Regular"',
  },
})

// MUI provides 25 shadow variants.
// We override the last of them to set our custom shadow
hspTheme.shadows[24] = '0px 2px 7px -1px rgba(0,0,0,0.2)'

hspTheme.typography.h1 = {
  color: hspTheme.palette.black.main,
  fontWeight: 400, // regular
  [hspTheme.breakpoints.only('xs')]: {
    fontSize: '20px',
  },
  [hspTheme.breakpoints.only('sm')]: {
    fontSize: '20px',
  },
  [hspTheme.breakpoints.only('md')]: {
    fontSize: '24px',
  },
  [hspTheme.breakpoints.only('lg')]: {
    fontSize: '26px',
  },
  [hspTheme.breakpoints.only('xl')]: {
    fontSize: '26px',
  },
}

hspTheme.typography.h2 = {
  color: hspTheme.palette.black.main,
  fontWeight: 400, // regular
  [hspTheme.breakpoints.only('xs')]: {
    fontSize: '18px',
  },
  [hspTheme.breakpoints.only('sm')]: {
    fontSize: '18px',
  },
  [hspTheme.breakpoints.only('md')]: {
    fontSize: '20px',
  },
  [hspTheme.breakpoints.only('lg')]: {
    fontSize: '22px',
  },
  [hspTheme.breakpoints.only('xl')]: {
    fontSize: '22px',
  },
}

hspTheme.typography.subtitle1 = {
  color: '#424242',
  fontWeight: 400, // regular
  [hspTheme.breakpoints.only('xs')]: {
    fontSize: '18px',
  },
  [hspTheme.breakpoints.only('sm')]: {
    fontSize: '16px',
  },
  [hspTheme.breakpoints.only('md')]: {
    fontSize: '16px',
  },
  [hspTheme.breakpoints.only('lg')]: {
    fontSize: '16px',
  },
  [hspTheme.breakpoints.only('xl')]: {
    fontSize: '16px',
  },
}

hspTheme.typography.subtitle2 = {
  color: '#808080',
  fontWeight: 400, // regular
  [hspTheme.breakpoints.only('xs')]: {
    fontSize: '14px',
  },
  [hspTheme.breakpoints.only('sm')]: {
    fontSize: '14px',
  },
  [hspTheme.breakpoints.only('md')]: {
    fontSize: '14px',
  },
  [hspTheme.breakpoints.only('lg')]: {
    fontSize: '14px',
  },
  [hspTheme.breakpoints.only('xl')]: {
    fontSize: '14px',
  },
}

hspTheme.typography.body1 = {
  color: '#202020',
  fontWeight: 400, // regular
  [hspTheme.breakpoints.only('xs')]: {
    fontSize: '14px',
  },
  [hspTheme.breakpoints.only('sm')]: {
    fontSize: '14px',
  },
  [hspTheme.breakpoints.only('md')]: {
    fontSize: '14px',
  },
  [hspTheme.breakpoints.only('lg')]: {
    fontSize: '16px',
  },
  [hspTheme.breakpoints.only('xl')]: {
    color: '#424242',
    fontSize: '16px',
  },
}

hspTheme.typography.body2 = {
  color: '#202020',
  fontWeight: 500, // medium
  [hspTheme.breakpoints.only('xs')]: {
    fontSize: '14px',
  },
  [hspTheme.breakpoints.only('sm')]: {
    fontSize: '14px',
  },
  [hspTheme.breakpoints.only('md')]: {
    fontSize: '14px',
  },
  [hspTheme.breakpoints.only('lg')]: {
    fontSize: '16px',
  },
  [hspTheme.breakpoints.only('xl')]: {
    fontSize: '16px',
  },
}

hspTheme.typography.caption = {
  color: hspTheme.palette.black.main,
  fontWeight: 400, // regular
  [hspTheme.breakpoints.only('xs')]: {
    fontSize: '13px',
  },
  [hspTheme.breakpoints.only('sm')]: {
    fontSize: '13px',
  },
  [hspTheme.breakpoints.only('md')]: {
    fontSize: '13px',
  },
  [hspTheme.breakpoints.only('lg')]: {
    fontSize: '13px',
  },
  [hspTheme.breakpoints.only('xl')]: {
    fontSize: '13px',
  },
}

hspTheme.typography.button = {
  fontSize: 14,
  fontWeight: 700, // regular
  letterSpacing: 1,
}

interface Props {
  themeOptions?: ThemeOptions
  children: React.ReactNode
}

export function HspThemeProvider(props: Readonly<Props>) {
  let theme = createTheme(hspTheme, props.themeOptions || {})

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  )
}
