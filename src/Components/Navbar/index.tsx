import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  toolBar: {
    backgroundColor: '#0f6250',
  },
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar className={classes.toolBar}>
        <HomeWorkIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Proper Demo
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
