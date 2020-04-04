import React from 'react';
import { Typography } from '@material-ui/core'
import { Pie } from 'react-chartjs-2';

function PieChart({ anualPercentage }) {
    const labels = anualPercentage.length > 0 && anualPercentage.map(i => i.label);
    const data = anualPercentage.length > 0 && anualPercentage.map(i => i.value);

    const pieChartData = {
        labels: labels,
        datasets: [{
            backgroundColor: ["#035a27", "#2a8aca", "#abe1fa"],
            data: data,
        }]
    };

    return (
        <>
            <Typography variant="h6">PIE CHART</Typography>
            <Pie data={pieChartData} className="bar_chart" />
        </>
    )
};

export default PieChart;