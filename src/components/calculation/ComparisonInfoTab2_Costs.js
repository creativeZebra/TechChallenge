import React, { useEffect, useState, useContext } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { render } from "react-dom";
import Card from '@mui/material/Card';
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { Grid, Typography } from '@mui/material';

Highcharts.setOptions({
    lang: {
        thousandsSep: '.'
    },
})

function ComparisonInfoTab2() {

    const [chartOptions1, setChartOptions1] = useState({
        chart: {
            type: 'column',
            style: {
                fontFamily: "'Roboto', sans-serif",
            }
        },
        title: {
            text: 'Energy Costs'
        },
        xAxis: {
            categories: [
                'Your House',
                'Improved Standard',
            ],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '€ / (m²a)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' € / (m²a)'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            },
            series: {
                color: '#00796B'
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Annual Energy Costs for Heating and Domestic Hot Water',
            data: [15.4, 5.1],
        }]
    });

    const [chartOptions2, setChartOptions2] = useState({
        chart: {
            type: 'column',
            style: {
                fontFamily: "'Roboto', sans-serif",
            }
        },
        title: {
            text: 'One-time costs'
        },
        xAxis: {
            categories: ['Renovated Building', 'New Building']
        },
        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'One-time investment costs in €'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y:,.0f} €</b><br/>Total Investment: <b>{point.stackTotal:,.0f} €',
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Ventilation',
            data: [10000, 0],
            color: '#512DA8'
        }, {
            name: 'Floor',
            data: [70000, 0],
            color: '#9575CD',
            dataSorting: {
                enabled: true,
            },
        }, {
            name: 'Heating',
            data: [75320, 0],
            color: '#FF7043'
        }, {
            name: 'Hot Water',
            data: [83000, 0],
            color: '#90CAF9'
        }, {
            name: 'Wall',
            data: [91000, 0],
            color: '#1E88E5',
            dataSorting: {
                enabled: true,
            },
        }, {
            name: 'Window',
            data: [100000, 0],
            color: '#00796B'
        }, {
            name: 'Roof',
            data: [133000, 0],
            color: '#FDD835'
        }, {
            name: 'Demolition Costs',
            data: [0, 50000],
            color: '#FF7043'
        }, {
            name: 'Initial Building Costs',
            data: [0, 1093000],
            color: '#546E7A'
        }]
    });

    return (
        <>
            <div>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={4}
                >
                    <Grid item xs={12} md={12} lg={8}>
                        <HighchartsReact highcharts={Highcharts} options={chartOptions1} />
                        <Box m={2}>
                            <Divider />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12} lg={4}>
                        <Box width="100%" textAlign="center">
                            <Card sx={{
                                backgroundColor: "#F5F5F5",
                            }}>
                                <Box m={6}>
                                    <Typography variant="subtitle1">
                                        {"You could save"}
                                    </Typography>
                                    <Typography variant="h6">
                                        <strong>10,3 €/(m²a)</strong>
                                    </Typography>
                                    <Typography variant="subtitle1">
                                       energy costs by improving your building
                                    </Typography>
                                </Box>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12} lg={8}>
                        <HighchartsReact highcharts={Highcharts} options={chartOptions2} />
                        <Box m={2}>
                            <Divider />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12} lg={4}>
                        <Box width="100%" textAlign="center">
                            <Card sx={{
                                backgroundColor: "#F5F5F5",
                            }}>
                                <Box m={6}>
                                    <Typography variant="subtitle1">
                                        {"You could save"}
                                    </Typography>
                                    <Typography variant="h6">
                                        <strong> 580.680€</strong>
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        one-time investment costs by refurbishing your building
                                    </Typography>
                                </Box>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default ComparisonInfoTab2;