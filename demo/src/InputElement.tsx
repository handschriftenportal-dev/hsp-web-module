import React from 'react'
import InputAdornment from '@material-ui/core/InputAdornment'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import SearchIcon from '@material-ui/icons/Search'
import { OutlinedInput } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  itemIcon: { minWidth: 'auto' },
  outlineInput: {
    backgroundColor: 'white',
  },
}))

export function InputElement() {
  const cls = useStyles()

  return (
    <>
      <h4>Input</h4>
      <code>
        @material-ui/core/OutlinedInput endAdornment=InputAdornment
        icon=ListItemIcon
      </code>
      <div>
        <OutlinedInput
          className={cls.outlineInput}
          endAdornment={
            <InputAdornment position="end">
              {
                <ListItemIcon
                  className={cls.itemIcon}
                  tabIndex={0}
                  role="button"
                >
                  <SearchIcon />
                </ListItemIcon>
              }
            </InputAdornment>
          }
        />
      </div>
    </>
  )
}
