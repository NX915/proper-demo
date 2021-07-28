import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from '../../Components/Navbar';
import ContentContainer from '../../Components/ContentContainer';
import Footer from '../../Components/Footer';

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <ContentContainer />
      <Footer />
    </React.Fragment>
  );
}
