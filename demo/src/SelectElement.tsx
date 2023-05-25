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
