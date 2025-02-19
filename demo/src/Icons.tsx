import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'


export function Icons() {
  return (
    <div>
      <h1>Icons</h1>
      <code>@material-ui/icons/Home</code>
      <p>
        <HomeIcon />
      </p>
      <code>@material-ui/core/IconButton</code>
      <p>
        <IconButton>
          <HomeIcon/>
        </IconButton>
      </p>
      <code>
        @material-ui/core/ListItemIcon button=true with @material-ui/core/ListItemIcon and
      </code>
      <List>
        <ListItem button={true}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>
            Home
          </ListItemText>
        </ListItem>
      </List>
    </div>
  )
}

