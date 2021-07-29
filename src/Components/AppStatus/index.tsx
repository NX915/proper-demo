import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

export default function AppStatus() {
  const status = useSelector((state: { status: StatusState }) => state.status);

  return (
    <div>
      {status.loading && (
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          <Loader type="Puff" color="#bee4dd" height={100} width={100} />
          Loading
        </Typography>
      )}
      {status.message && status.message !== '' && (
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          <Loader type="Triangle" color="#e84144" height={100} width={100} />
          {status.message}
        </Typography>
      )}
    </div>
  );
}
