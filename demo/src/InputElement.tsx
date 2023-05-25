/*
 * MIT License
 *
 * Copyright (c) 2023 Staatsbibliothek zu Berlin - Preußischer Kulturbesitz
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

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
