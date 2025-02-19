import React from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

export function BtnGroup() {
  return (
    <div>
      <h4>Toggle Button Group</h4>
      <code>
        @material-ui/lab/ToggleButton @material-ui/lab/ToggleButtonGroup
      </code>
      <div>
        <ToggleButtonGroup color="primary" size="small" exclusive value="all">
          <ToggleButton value="finished">finished</ToggleButton>
          <ToggleButton value="all">all</ToggleButton>
          <ToggleButton value="running">running</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  )
}
