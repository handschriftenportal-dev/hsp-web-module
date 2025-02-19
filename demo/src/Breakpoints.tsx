import React from 'react'
import { useTheme, makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles(theme => ({
  bold: {
    fontWeight: 'bold',
    color: theme.palette.primary.main
  }
}))

export function Breakpoints() {
  const theme = useTheme()
  const cls = useStyles()

  const isXs = useMediaQuery(theme.breakpoints.only('xs'), { noSsr: true })
  const isSm = useMediaQuery(theme.breakpoints.only('sm'), { noSsr: true })
  const isMd = useMediaQuery(theme.breakpoints.only('md'), { noSsr: true })
  const isLg = useMediaQuery(theme.breakpoints.only('lg'), { noSsr: true })
  const isXl = useMediaQuery(theme.breakpoints.only('xl'), { noSsr: true })

  return (
    <div>
      <h1>Breakpoints</h1>
      <p className={isXs ? cls.bold : undefined}>
        xs: {theme.breakpoints.values.xs}
      </p>
      <p className={isSm ? cls.bold : undefined}>
        sm: {theme.breakpoints.values.sm}
      </p>
      <p className={isMd ? cls.bold : undefined}>
        md: {theme.breakpoints.values.md}
      </p>
      <p className={isLg ? cls.bold : undefined}>
        lg: {theme.breakpoints.values.lg}
      </p>
      <p className={isXl ? cls.bold : undefined}>
        xl: {theme.breakpoints.values.xl}
      </p>
    </div>
  )
}