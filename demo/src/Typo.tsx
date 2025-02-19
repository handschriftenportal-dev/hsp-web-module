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