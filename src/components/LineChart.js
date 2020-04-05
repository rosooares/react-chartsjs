import React from 'react';
import { Typography } from '@material-ui/core'
import { Line } from 'react-chartjs-2';

function LineChart({ timeData }) {
    const { today, yesterday } = timeData;
    const labels = today && timeData.today.length > 0 && timeData.today.map(i => i.label);
    const dataToday = today && timeData.today.length > 0 && timeData.today.map(i => i.value);
    const dataYesterday = yesterday && timeData.yesterday.length > 0 && timeData.yesterday.map(i => i.value);

    const lineChart = {
        labels: labels,
        datasets: [{ 
            data: dataToday,
            label: "Today",
            borderColor: "#035a27",
            fill: false
          }, { 
            data: dataYesterday,
            label: "Yesterday",
            borderColor: "#38b1ff",
            fill: false
          }
        ]
    };
    
    return (
        <>
            <Typography variant="h6">LINE CHART</Typography>
            <Line data={lineChart} />
        </>
    )
};

export default LineChart;