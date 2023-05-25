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
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import '../../src/index'

const useStyles = makeStyles(theme => ({
  box: {
    width: 100,
    height: 50,
    display: 'block'
  },
  border: {
    border: '1px solid #aaa',
  },
  primary: {
    background: theme.palette.primary.main,
  },
  secondary: {
    background: theme.palette.secondary.main,
  },
  black: {
    background: theme.palette.black.main,
  },
  darkTerracotta: {
    background: theme.palette.darkTerracotta.main
  },
  electricBlue: {
    background: theme.palette.electricBlue.main
  },
  liver: {
    background: theme.palette.liver.main
  },
  platinum: {
    background: theme.palette.platinum.main
  },
  thunder: {
    background: theme.palette.thunder.main,
  },
  turquoise: {
    background: theme.palette.turquoise.main
  },
  white: {
    background: theme.palette.white.main,
  },
  whiteSmoke: {
    background: theme.palette.whiteSmoke.main
  }
  
}))

export function Colors() {
  const cls = useStyles()

  return (
    <div>
      <h1>Colors</h1>
      <code>theme.palette.primary</code>
      <p>
        <span className={clsx(cls.box, cls.primary)} />
      </p>
      <code>theme.palette.secondary</code>
      <p>
        <span className={clsx(cls.box, cls.secondary)} />
      </p>
      <code>theme.palette.black</code>
      <p>
        <span className={clsx(cls.box, cls.black)} />
      </p>
      <code>theme.palette.liver</code>
      <p>
        <span className={clsx(cls.box, cls.liver)} />
      </p>
      <code>theme.palette.thunder</code>
      <p>
        <span className={clsx(cls.box, cls.thunder)} />
      </p>
      <code>theme.palette.darkTerracotta (same as theme.palette.primary)</code>
      <p>
        <span className={clsx(cls.box, cls.darkTerracotta)} />
      </p>
      <code>theme.palette.turquoise (same as theme.palette.secondary)</code>
      <p>
        <span className={clsx(cls.box, cls.turquoise)} />
      </p>
      <code>theme.palette.electricBlue</code>
      <p>
        <span className={clsx(cls.box, cls.electricBlue)} />
      </p>
      <code>theme.palette.platinum</code>
      <p>
        <span className={clsx(cls.box, cls.platinum)} />
      </p>
      <code>theme.palette.whiteSmoke (same as theme.palette.background)</code>
      <p>
        <span className={clsx(cls.box, cls.border, cls.whiteSmoke)} />
      </p>
      <code>theme.palette.white</code>
      <p>
        <span className={clsx(cls.box, cls.white)} />
      </p>
    </div>
  )
}
