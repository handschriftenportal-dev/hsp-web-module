import React from 'react'
import Button from '@material-ui/core/Button'
import ArrowForward from '@material-ui/icons/ArrowForward'
import { FabButton } from './FabButton'
import { BtnGroup } from './BtnGroup'

export function Buttons() {
  return (
    <div>
      <h1>Buttons</h1>
      <code>@material-ui/core/Button variant=contained color=primary</code>
      <p>
        <Button variant="contained" color="primary">
          suchen
        </Button>
      </p>
      <code>@material-ui/core/Button variant=contained color=secondary</code>
      <p>
        <Button variant="contained" color="secondary">
          suchen
        </Button>
      </p>
      <code>@material-ui/core/Button variant=contained color=default</code>
      <p>
        <Button variant="contained">erweiterte suche</Button>
      </p>
      <code>
        @material-ui/core/Button variant=contained color=primary
        endIcon=ArrowForward
      </code>
      <p>
        <Button variant="contained" color="primary" endIcon={<ArrowForward />}>
          weiter
        </Button>
      </p>
      <FabButton />
      <BtnGroup />
    </div>
  )
}
