import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPropertyList } from './Redux/actions';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './Components/Navbar';
import ContentContainer from './Components/ContentContainer';
import PropertyList from './Components/PropertyList';
import Footer from './Components/Footer';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPropertyList());
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <ContentContainer />
      <PropertyList />
      <Footer />
    </React.Fragment>
  );
}
