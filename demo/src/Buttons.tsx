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
