import React from 'react'
import Slider from '@material-ui/core/Slider'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  slider: {
    width: 300,
  },
}))

export function SliderElement() {
  const [value, setValue] = React.useState([2, 50])
  const cls = useStyles()
  return (
    <>
      <h4>Slider</h4>
      <code>@material-ui/core/Slider </code>
      <Slider
        className={cls.slider}
        value={value}
        aria-labelledby="range-slider"
      />
    </>
  )
}
