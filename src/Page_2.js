import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { getTime } from './services/getTime';
import LineChart from './components/LineChart';

function Page_2() {
  const [timeData, setTimeDatas] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setTimeDatas(await getTime());
    }
    fetchData();
  }, []); 
  
  return (
    <>
      <Header />
      <header className="header">
        <Typography variant="h6">Pagina de teste 2</Typography>
        <Typography variant="body1">Description</Typography>
      </header>
      <Grid container className="root">
        <Grid item xs={12} sm={8}> 
          <LineChart timeData={timeData} />
        </Grid>
      </Grid>
    </>
  );
}

export default Page_2;
