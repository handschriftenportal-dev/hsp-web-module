import React from 'react'
import Select from '@material-ui/core/Select'
import NativeSelect from '@material-ui/core/NativeSelect'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  select: {
    backgroundColor: 'white',
  },
}))

export function SelectElement() {
  const cls = useStyles()

  return (
    <>
      <h4>Select</h4>
      <code>@material-ui/core/Select with @material-ui/core/MenuItem</code>
      <div>
        <Select
          className={cls.select}
          disableUnderline
          label="Alles"
          value={'Alles'}
        >
          <MenuItem value="Alles"> Alles </MenuItem>
          <MenuItem value="Volltext">Volltext</MenuItem>
          <MenuItem value="Signatur">Signatur</MenuItem>
        </Select>
      </div>
      <h4>Native Select</h4>
      <code>@material-ui/code/NativeSelect</code>
      <div>
        <NativeSelect value={'Signatur'} name="Signatur">
          <option value="Signatur"> Sortiert nach Signatur </option>
          <option value="Relevanz">Sortiert nach Relevanz</option>
          <option value="Entstehungszeit">Sortiert nach Enstehungszeit</option>
        </NativeSelect>
      </div>
    </>
  )
}
