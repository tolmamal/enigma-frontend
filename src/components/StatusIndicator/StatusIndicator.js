import React from 'react';
import { RadioButtonChecked } from '@material-ui/icons';

const StatusIndicator = ({status}) => {
    const style = {
        color: status === 'Active' ? "#32CD32":"#DC143C",
        display: "flex",
        alignItems: "center",
    };
    return (
        <div style={style}>
            <RadioButtonChecked style={{margin: "0 3px"}}/>
            <label>{status}</label>
        </div>
    );
};

export default StatusIndicator;
