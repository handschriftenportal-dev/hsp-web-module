import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles(theme => ({
  paper: {
    height: 200,
    width: 400,
    padding: theme.spacing(2),
    margin: theme.spacing(4),
  },
}))


export function Shadows() {
  const cls = useStyles()

  return (
    <div>
      <h1>Shadows</h1>
      <code>@material-ui/core/Paper elevation=24</code>
      <Paper
        elevation={24}
        className={cls.paper}
      >
        <Typography variant="body1">
          Hello
        </Typography>
      </Paper>
    </div>
  )
}