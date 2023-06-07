import React from 'react';
import './ChartBar.css';
const ChartBar = props => {
    let barFillHeight = '0%';
    if(props.max >0){
        barFillHeight = Math.round((props.value/props.maxValue)*100) + '%';
    }
    return (
    <div className="Chart-bar">
    <div classNAme='Chart-bar_inner'>
    <div className='chart-fill' style={{height: barFillHeight,backgroundColor:'red'}}></div>
         </div>
         <div className='chart-bar_label'>{props.label}</div>
         </div>
    );
};
export default ChartBar;