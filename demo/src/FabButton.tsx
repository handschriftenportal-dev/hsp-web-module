import React from 'react'
import Fab from '@material-ui/core/Fab'
import CheckIcon from '@material-ui/icons/Check'
import AddIcon from '@material-ui/icons/Add'

export function FabButton() {
  return (
    <>
      <h4>Fab Buttons</h4>
      <code>
        @material-ui/core/Fab size="medium" color="primary" or none
        @material-ui/icons/
      </code>
      <div>
        <Fab size="medium">
          <CheckIcon />
        </Fab>
      </div>
      <br />
      <div>
        <Fab size="medium" color="primary">
          <AddIcon />
        </Fab>
      </div>
    </>
  )
}
