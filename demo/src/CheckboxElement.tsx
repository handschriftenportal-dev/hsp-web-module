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
