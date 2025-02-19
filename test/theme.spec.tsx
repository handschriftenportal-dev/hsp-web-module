import React from 'react'
import { screen, render } from '@testing-library/react'
import { HspThemeProvider } from '../src/theme'

test('renders HspThemeProvider', function () {
  render(
    <HspThemeProvider>
      <p>Hello</p>
    </HspThemeProvider>,
  )
  screen.getByText('Hello')
})
