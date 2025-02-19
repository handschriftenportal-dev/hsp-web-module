import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

export function CheckboxElement() {
  return (
    <>
      <h4>Checkbox</h4>
      <code>
        @material-ui/core/Checkbox with @material-ui/core/FormControlLabel and
        own icon
      </code>
      <div>
        <FormControlLabel
          label={'checkbox unchecked'}
          control={
            <Checkbox
              color="primary"
              checked={false}
              icon={<img src="/img/checkbox_unchecked.svg" />}
            />
          }
        />
        <br />
        <FormControlLabel
          label={'checkbox checked'}
          control={
            <Checkbox
              color="primary"
              checked={true}
              checkedIcon={<img src="/img/checkbox_checked.svg" />}
            />
          }
        />
      </div>
    </>
  )
}
