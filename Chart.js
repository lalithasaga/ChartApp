import React from 'react';
import ChartBar from './ChartBar'
import './Chart.css';
    const Chart = props => {
        const datapoint = props.datapoint;
        return ( <div className="Chart">
             key={datapoint.label}
        {props.datapoints.map((datapoint) =>( 
        <ChartBar value={datapoint.value} 
        maxValue={null} 
        label={datapoint.label} 
        />
        ))}
        </div>
        );
    };
    export default Chart;