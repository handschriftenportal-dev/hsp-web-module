import React from 'react'
import ReactDom from 'react-dom'
import { useTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { HspThemeProvider } from '../../src/index'
import { Colors } from './Colors'
import { Buttons } from './Buttons'
import { Icons } from './Icons'
import { Breakpoints } from './Breakpoints'
import { Typo } from './Typo'
import { Shadows } from './Shadows'
import { InputAndSelectElements } from './InputAndSelectElements'
import { AdditionalFocus } from './AdditionalFocus'
import { SelfHostedFont } from './SelfHostedFont'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
  },
}))

function App() {
  const cls = useStyles()

  // For conventient inspection of the effective theme value.
  console.log(useTheme())

  return (
    <div className={cls.root}>
      <Colors />
      <Breakpoints />
      <Typo />
      <Buttons />
      <Icons />
      <Shadows />
      <InputAndSelectElements />
      <AdditionalFocus />
      <SelfHostedFont />
    </div>
  )
}

ReactDom.render(
  <HspThemeProvider>
    <App />
  </HspThemeProvider>,
  document.getElementById('app')
)
