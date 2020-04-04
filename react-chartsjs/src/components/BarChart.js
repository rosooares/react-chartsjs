import React from 'react';
import { Typography } from '@material-ui/core'
import { Bar } from 'react-chartjs-2';

import '../css/BarChart.css';


function BarChart({ anualResult }) {
    const labels = anualResult.length > 0 && anualResult.map(i => i.label.substr(0,3));
    const data = anualResult.length > 0 && anualResult.map(i => i.value);

    const initialState = {
        labels: labels,
        datasets: [
            {
                label: 'Month',
                backgroundColor: 'rgb(35,54,110)',
                data: data,
            }
        ]
    };
    
    return (
        <>
            <Typography variant="h6">BAR CHART</Typography>
            <Bar data={initialState} className="bar_chart" />
        </>
    )
};

export default BarChart;