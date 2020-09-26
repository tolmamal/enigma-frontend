import React from 'react';
import clsx from 'clsx';
import { withStyles } from "@material-ui/core";
import { TableCell, Paper, Card, CardHeader, CardContent } from "@material-ui/core";
import { AutoSizer, Column, Table } from "react-virtualized";
import DataHeader from './DataHeader/DataHeader';

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

class MuiVirtualizedTable extends React.PureComponent {
    static defaultProps = {
        headerHeight: 48,
        rowHeight: 48,
    };

    getRowClassName = ({ index }) => {
        const { classes, onRowClick } = this.props;

        return clsx(classes.tableRow, classes.flexContainer, {
            [classes.tableRowHover]: index !== -1 && onRowClick != null,
        });
    };

    cellRenderer = ({ cellData, columnIndex }) => {
        const { columns, classes, rowHeight, onRowClick } = this.props;
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

    headerRenderer = ({ label, columnIndex }) => {
        const { headerHeight, columns, classes } = this.props;

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
        const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
        return (
            <AutoSizer>
                {({ height, width }) => (
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
                        {columns.map(({ dataKey, ...other }, index) => {
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
    ['B2C2', '2.125', '0', '0', '0', '11413', '0', '1000000.36', '01/07/2020'],
    ['Alameda', '0', '0', '0', '0', '0', '0', '0', '01/07/2020'],
    ['Kaplerk', '0', '0', '0', '0', '0', '0', '0', '01/07/2020'],
    ['Bitcoin Of America', '0', '0', '0', '0', '0', '0', '0', '01/07/2020'],
    ['Sygnum', '0', '0', '0', '0', '0', '0', '0', '01/07/2020'],
    ['Conlnsourse', '0', '0', '0', '0', '0', '0', '0', '01/07/2020'],
    ['I Trust Capital', '0', '0', '0', '0', '0', '0', '0', '01/07/2020'],
    ['B2C2', '0', '0', '0', '0', '0', '0', '0', '01/07/2020'],
    ['Alameda', '0', '0', '0', '0', '0', '0', '0', '01/07/2020'],

];

function createData(id, counterParty, btc, eth, xrp, eur, usd, gbr, netExposure, lastCalculationDate) {
    return { id, counterParty, btc, eth, xrp, eur, usd, gbr, netExposure, lastCalculationDate };
}

const rows = [];

for (let i = 0; i < 100; i += 1) {
    const randomSelection = sample[Math.floor(Math.random() * sample.length)];
    rows.push(createData(i, ...randomSelection));
}

export default function DataTable () {

    return (
        <Paper>
            <Card>
                <CardHeader title="data-table-header" component={() => <DataHeader />}>

                </CardHeader>
                <CardContent style={{ height: 400, padding: 0, backgroundColor: '#252c36' }}>
                    <VirtualizedTable
                        rowCount={rows.length}
                        rowGetter={({ index }) => rows[index]}
                        style={{ width: "100%" }}
                        columns={[
                            {
                                minWidth: "11%",
                                width: 11,
                                label: 'COUNTERPARTY',
                                dataKey: 'counterparty',
                            },
                            {
                                minWidth: "11%",
                                width: 11,
                                label: 'BTC',
                                dataKey: 'btc',
                            },
                            {
                                minWidth: "11%",
                                width: 11,
                                label: 'ETH',
                                dataKey: 'eth',
                            },
                            {
                                minWidth: "11%",
                                width: 11,
                                label: 'XRP',
                                dataKey: 'xrp',
                            },
                            {
                                minWidth: "11%",
                                width: 11,
                                label: 'EUR',
                                dataKey: 'eur',
                            },
                            {
                                minWidth: "11%",
                                width: 11,
                                label: 'USD',
                                dataKey: 'usd',
                            },
                            {
                                minWidth: "11%",
                                width: 11,
                                label: 'GBR',
                                dataKey: 'gbr',
                            },
                            {
                                minWidth: "11%",
                                width: 11,
                                label: 'NET EXPOSURE',
                                dataKey: 'netExposure',
                            },
                            {
                                minWidth: "11%",
                                width: 11,
                                label: 'LAST CALCULATION DATE',
                                dataKey: 'lastCalculationDate',
                            },

                        ]}
                    />

                </CardContent>
            </Card>

        </Paper>
    );

    return (
        <Paper style={{ height: 400, width: '100%' }}>
            <VirtualizedTable
                rowCount={rows.length}
                rowGetter={({ index }) => rows[index]}
                style={{width: "100%"}}
                columns={[
                    {
                        minWidth: "12%",
                        width: 12,
                        label: 'COUNTERPARTY',
                        dataKey: 'counterparty',
                    },
                    {
                        minWidth: "12%",
                        width: 12,
                        label: 'BTC',
                        dataKey: 'btc',
                    },
                    {
                        minWidth: "12%",
                        width: 12,
                        label: 'ETH',
                        dataKey: 'eth',
                    },
                    {
                        minWidth: "12%",
                        width: 12,
                        label: 'XRP',
                        dataKey: 'xrp',
                    },
                    {
                        minWidth: "12%",
                        width: 12,
                        label: 'EUR',
                        dataKey: 'eur',
                    },
                    {
                        minWidth: "12%",
                        width: 12,
                        label: 'USD',
                        dataKey: 'usd',
                    },
                    {
                        minWidth: "12%",
                        width: 12,
                        label: 'GBR',
                        dataKey: 'gbr',
                    },
                    {
                        minWidth: "12%",
                        width: 12,
                        label: 'NET EXPOSURE',
                        dataKey: 'netExposure',
                    },
                    {
                        minWidth: "12%",
                        width: 12,
                        label: 'LAST CALCULATION DATE',
                        dataKey: 'lastCalculationDate',
                    },

                ]}
            />
        </Paper>
    );
}


