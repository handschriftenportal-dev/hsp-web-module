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
import Typography from '@material-ui/core/Typography'

export function Typo() {
  return (
    <div>
      <h1>Typography (by mockup names)</h1>
      <code>@material-ui/core/Typography variant=h1</code>
      <Typography variant="h1">H1 Maintitle</Typography>
      <br/>
      <code>@material-ui/core/Typography variant=h2</code>
      <Typography variant="h2">H2 Link</Typography>
      <br/>
      <code>@material-ui/core/Typography variant=subtitle1</code>
      <Typography variant="subtitle1">Main Navigation</Typography>
      <br/>
      <code>@material-ui/core/Typography variant=subtitle2</code>
      <Typography variant="subtitle2">Sub Navigation</Typography>
      <br/>
      <code>@material-ui/core/Typography variant=body1</code>
      <Typography variant="body1">Body</Typography>
      <br/>
      <code>@material-ui/core/Typography variant=body2</code>
      <Typography variant="body2">Body Fett</Typography>
      <br/>
      <code>@material-ui/core/Typography variant=caption</code><br/>
      <Typography variant="caption">Dropdown</Typography>
      <br/><br/>
      <code>@material-ui/core/Typography variant=button</code><br/>
      <Typography variant="button">Suchen</Typography>
      <br/><br/>
      <code>Text that was not wrapped with Typography</code><br/>
      <p>Lorem ipsum dolor sit amet</p>
    </div>
  )
}