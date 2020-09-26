import React from 'react';
import clsx from 'clsx';
import { Card, CardHeader, CardContent } from "@material-ui/core";
import {TableCell, Paper} from "@material-ui/core";
import {AutoSizer, Column, Table} from "react-virtualized";
import { withStyles } from "@material-ui/styles";
import FilterHeader from './FillterHeader/FilterHeader';
import {makeStyles} from "@material-ui/core/styles";
import StatusIndicator from "../../components/StatusIndicator/StatusIndicator";

const styles = (theme) => ({
    flexContainer: {
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
    },
    table: {
        '& .ReactVirtualized__Table__headerRow': {
            flip: false,
            paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined,
        },
    },
    tableRow: {
        cursor: 'pointer',
    },
    tableRowHover: {
        '&:hover': {
            backgroundColor: theme.palette.grey[200],
        },
    },
    tableCell: {
        flex: 1,
    },
    noClick: {
        cursor: 'initial',
    },


});

const useStyles = makeStyles((theme) => ({
    title: {
        flex: '1 1 100%',
    }
}));

class MuiVirtualizedTable extends React.PureComponent {
    static defaultProps = {
        headerHeight: 48,
        rowHeight: 48,
    };

    getRowClassName = ({index}) => {
        const {classes, onRowClick} = this.props;

        return clsx(classes.tableRow, classes.flexContainer, {
            [classes.tableRowHover]: index !== -1 && onRowClick != null,
        });
    };

    cellRenderer = (cellProps) => {
        let {cellData, columnIndex} = cellProps;
        const {columns, classes, rowHeight, onRowClick} = this.props;

        switch (cellProps.dataKey) {
            case "status":
                cellData = <StatusIndicator status={cellData}/>;
            break;
            default:
                break;
        }

        return (
            <TableCell
                component="div"
                className={clsx(classes.tableCell, classes.flexContainer, {
                    [classes.noClick]: onRowClick == null,
                })}
                variant="body"
                style={{ height: rowHeight }}
                align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
            >
                {cellData}
            </TableCell>
        );
    };

    headerRenderer = ({label, columnIndex}) => {
        const {headerHeight, columns, classes} = this.props;

        return (
            <TableCell
                component="div"
                className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
                variant="head"
                style={{ height: headerHeight }}
                align={columns[columnIndex].numeric || false ? 'right' : 'left'}
            >
                <span>{label}</span>
            </TableCell>
        );
    };

    render() {
        const {classes, columns, rowHeight, headerHeight, ...tableProps} = this.props;
        return (
            <AutoSizer>
                {({height, width}) => (
                    <Table
                        height={height}
                        width={width}
                        rowHeight={rowHeight}
                        gridStyle={{
                            direction: 'inherit',
                        }}
                        headerHeight={headerHeight}
                        className={classes.table}
                        {...tableProps}
                        rowClassName={this.getRowClassName}
                    >
                        {columns.map(({dataKey, ...other}, index) => {
                            return (
                                <Column
                                    key={dataKey}
                                    headerRenderer={(headerProps) =>
                                        this.headerRenderer({
                                            ...headerProps,
                                            columnIndex: index,
                                        })
                                    }
                                    className={classes.flexContainer}
                                    cellRenderer={this.cellRenderer}
                                    dataKey={dataKey}
                                    {...other}
                                />
                            );
                        })}
                    </Table>
                )}
            </AutoSizer>
        );
    }
}

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

const sample = [
    ['Keplerk', 'BTC_EUR', '30 Apr 2020 17:09', 'Active'],
    ['Enigma', 'BTC_EUR', '30 Apr 2020 17:09', 'Active'],
    ['I Trust Capital', 'BTC_EUR', '30 Apr 2020 17:09', 'Active'],
    ['Keplerk', 'ETH_EUR', '30 Apr 2020 17:09', 'Active'],
    ['Enigma', 'ETH_EUR', '30 Apr 2020 17:09', 'Active'],
    ['I Trust Capital', 'ETH_EUR', '30 Apr 2020 17:09', 'Canceled'],
    ['Keplerk', 'BTC_EUR', '30 Apr 2020 17:09', 'Canceled'],
    ['Enigma', 'BTC_EUR', '30 Apr 2020 17:09', 'Active'],
    ['I Trust Capital', 'BTC_EUR', '30 Apr 2020 17:09', 'Canceled'],
];

function createData(id, companyName, product, sent_at, status) {
    return {id, companyName, product, sent_at, status};
}

const rows = [];

for (let i = 0; i < 200; i += 1) {
    const randomSelection = sample[Math.floor(Math.random() * sample.length)];
    rows.push(createData(i, ...randomSelection));
}



export default function ReactVirtualizedTable() {
    // const classes = useStyles();
const classes = {};
    return (
        <Paper>
            <Card>
                <CardHeader title="filtered-table-header" component={() => <FilterHeader/>}>
                </CardHeader>

                <CardContent style={{ height: 400, padding: 0, backgroundColor: '#252c36' }}>
                    <VirtualizedTable
                        rowCount={rows.length}
                        rowGetter={({index}) => rows[index]}
                        style={{width: "100%"}}
                        columns={[
                            {
                                minWidth: "30%",
                                width: 30,
                                label: 'COMPANY NAME',
                                dataKey: 'companyName',
                            },
                            {
                                minWidth: "15%",
                                width: 15,
                                label: 'PRODUCT',
                                dataKey: 'product',
                            },
                            {
                                minWidth: "32%",
                                width: 32,
                                label: 'SENT AT',
                                dataKey: 'sent_at',
                            },
                            {
                                minWidth: "23%",
                                width: 23,
                                label: 'STATUS',
                                dataKey: 'status',
                                component: () => <label>Test</label>
                            },

                        ]}
                    />

                </CardContent>
            </Card>
        </Paper>
    );


    return (
        <Paper style={{ height: 400 }}>
            <VirtualizedTable
                rowCount={rows.length}
                rowGetter={({index}) => rows[index]}
                columns={[
                    {
                        width: 120,
                        label: 'COMPANY NAME',
                        dataKey: 'companyName',
                    },
                    {
                        width: 120,
                        label: 'PRODUCT',
                        dataKey: 'product',
                    },
                    {
                        width: 200,
                        label: 'SENT AT',
                        dataKey: 'sent_at',
                    },
                    {
                        width: 120,
                        label: 'STATUS',
                        dataKey: 'status',
                    },

                ]}
            />
        </Paper>
    );



    // return (
    //     <Container>
    //         <div>Filter Bar</div>
    //         <Paper style={{height: 400, width: '100%'}}>
    //             <VirtualizedTable
    //                 rowCount={rows.length}
    //                 rowGetter={({index}) => rows[index]}
    //                 columns={[
    //                     {
    //                         width: 120,
    //                         label: 'COMPANY NAME',
    //                         dataKey: 'companyName',
    //                     },
    //                     {
    //                         width: 120,
    //                         label: 'PRODUCT',
    //                         dataKey: 'product',
    //                     },
    //                     {
    //                         width: 200,
    //                         label: 'SENT AT',
    //                         dataKey: 'sent_at',
    //                     },
    //                     {
    //                         width: 120,
    //                         label: 'STATUS',
    //                         dataKey: 'status',
    //                     },
    //
    //                 ]}
    //             />
    //         </Paper>
    //     </Container>
    // );
}


