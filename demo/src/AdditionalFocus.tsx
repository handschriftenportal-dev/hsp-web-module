import React from 'react'
import MuiTooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
  div: { width: 250, height: 100, backgroundColor: 'white' },
}))

export function AdditionalFocus() {
  const cls = useStyles()
  return (
    <>
      <h1>Additional focusable content with tooltip</h1>
      <code>@material-ui/core/tooltip className="addFocusable"</code>
      <div>
        <MuiTooltip title="tooltip" arrow={true}>
          <div tabIndex={0} className={clsx(cls.div, 'addFocusable')}>
            children
          </div>
        </MuiTooltip>
      </div>
    </>
  )
}
