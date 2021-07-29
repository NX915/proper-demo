import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from '../../Components/Navbar';
import ContentContainer from '../../Components/ContentContainer';
import Footer from '../../Components/Footer';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  content: {
    minHeight: '100vh',
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.content}>
        <CssBaseline />
        <NavBar />
        <ContentContainer />
      </Box>
      <Footer />
    </React.Fragment>
  );
}
