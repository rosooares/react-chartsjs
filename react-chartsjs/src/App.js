import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Grid from '@material-ui/core/Grid';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import { Typography } from '@material-ui/core';
import { getAnual, getAnualPercentage } from './services/getAnual';
// import { getTime } from './services/getTime';
import './App.css';

function App() {
  const [anualResult, setAnualResults] = useState([]);
  const [anualPercentage, setAnualPercentage] = useState([]);
  // const [timeData, setTimeDatas] = useState([]);


  useEffect(() => {
    async function fetchData() {
      setAnualResults(await getAnual());
      setAnualPercentage(await getAnualPercentage());
      // setTimeDatas(await getTime());
    }
    fetchData();
  }, []); 

  return (
    <>
      <Header />
      <header className="header">
        <Typography variant="h6">Pagina de teste 1</Typography>
        <Typography variant="body1">Description</Typography>
      </header>
      <Grid container className="root">
        <Grid item xs={12} sm={5}> 
          <BarChart anualResult={anualResult} />
        </Grid>
        <Grid item xs={12} sm={5} >
          <PieChart anualPercentage={anualPercentage} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
