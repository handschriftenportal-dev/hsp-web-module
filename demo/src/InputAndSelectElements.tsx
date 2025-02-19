import React from 'react'
import { CheckboxElement } from './CheckboxElement'

import { InputElement } from './InputElement'
import { SelectElement } from './SelectElement'
import { SliderElement } from './SliderElement'
import { PagingElement } from './PagingElement'

/*
anchor elements: at the moment a wrapped standart anchor is used
*/

export function InputAndSelectElements() {
  return (
    <>
      <h1>Input and Select elements</h1>
      <InputElement />
      <SelectElement />
      <CheckboxElement />
      <SliderElement />
      <PagingElement />
    </>
  )
}
