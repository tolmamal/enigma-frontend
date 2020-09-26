import React from 'react';
import {Paper, Card, CardContent, CardHeader} from "@material-ui/core";
import {
    Chart, ArgumentAxis, ValueAxis, LineSeries, AreaSeries, SplineSeries, Title
} from "@devexpress/dx-react-chart-material-ui";
import {curveCatmullRom, area} from 'd3-shape';
import {ArgumentScale, ValueScale, Animation} from "@devexpress/dx-react-chart";
import {scaleTime} from "d3-scale";
import moment from 'moment';
import ChartHeader from '../../containers/DataChart/ChartHeader/ChartHeader';

const modifyDomain = () => [11.600, 11.750];
const data = [
    {time: new Date(2015, 10, 15, 15, 0), value: 11.640},
    {time: new Date(2015, 10, 15, 15, 3), value: 11.635},
    { time: new Date(2015, 10, 15, 15, 7), value: 11.630 },
    { time: new Date(2015, 10, 15, 15, 10), value: 11.640 },
    { time: new Date(2015, 10, 15, 15, 12), value: 11.620 },
    { time: new Date(2015, 10, 15, 15, 15), value: 11.618 },
    { time: new Date(2015, 10, 15, 15, 17), value: 11.627 },
    { time: new Date(2015, 10, 15, 15, 20), value: 11.645 },
    { time: new Date(2015, 10, 15, 15, 23), value: 11.670 },
    { time: new Date(2015, 10, 15, 15, 24), value: 11.660 },
    { time: new Date(2015, 10, 15, 15, 28), value: 11.650 },
    { time: new Date(2015, 10, 15, 15, 30), value: 11.630 },
    { time: new Date(2015, 10, 15, 15, 45), value: 11.620 },
    { time: new Date(2015, 10, 15, 15, 47), value: 11.610 },
    { time: new Date(2015, 10, 15, 15, 50), value: 11.700 },
    { time: new Date(2015, 10, 15, 15, 52), value: 11.690 },
    { time: new Date(2015, 10, 15, 15, 58), value: 11.680 },
    { time: new Date(2015, 10, 15, 16, 0), value: 11.660 },
];

const Area = props => (
    <AreaSeries.Path
        {...props}
        path={area()
            .x(({arg}) => arg)
            .y1(({val}) => val)
            .y0(({startVal}) => startVal)
            .curve(curveCatmullRom)}
    />
);

const format = () => tick => tick;

const ArgumentLabel = props => {
    const { text } = props;
    const minutes = parseInt(text.split(':')[1], 10);
    if(minutes % 15 === 0 || isNaN(minutes)) {
        return (
            <ArgumentAxis.Label
                {...props}
            />

        );
    }
    return null;
};

export default class DataChart extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: data
        };
    }

    render() {
        const {data: chartData} = this.state;
        return (
            <Paper>
                <Card style={{ backgroundColor: '#252c36' }}>
                    <CardHeader id="chart-header" component={() => <ChartHeader/>}>
                    </CardHeader>
                    <CardContent>
                        <Chart data={chartData} style={{maxHeight: "20vh"}}>
                            <ArgumentScale factory={scaleTime}/>
                            <ValueScale modifyDomain={modifyDomain}/>
                            <ArgumentAxis labelComponent={ArgumentLabel}/>
                            <ValueAxis tickFormat={format}/>
                            <AreaSeries
                                valueField="value"
                                argumentField="time"
                                // seriesComponent={Area}
                            />
                            <Animation/>
                        </Chart>
                    </CardContent>
                </Card>
            </Paper>
        );
    }
}
