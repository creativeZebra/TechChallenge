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
                'Nearly zero-energy building'
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
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Annual Energy Costs for Heating and Domestic Hot Water',
            data: [10, 7, 5]
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
            name: 'Wall',
            data: [100000, 0],
        }, {
            name: 'Floor',
            data: [20000, 0],
        }, {
            name: 'Window',
            data: [50000, 0],
        }, {
            name: 'Roof',
            data: [5000, 0],
        }, {
            name: 'Heating',
            data: [35000, 0],
        }, {
            name: 'Hot Water',
            data: [20000, 0],
        }, {
            name: 'Ventilation',
            data: [5000, 0],
        }, {
            name: 'Electricity Generation',
            data: [80000, 0],
        }, {
            name: 'Demolition Costs',
            data: [0, 20000],
        }, {
            name: 'Initial Building Costs',
            data: [0, 450000],
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
                                        {"After"}
                                    </Typography>
                                    <Typography variant="h6">
                                        <strong>28.5  years</strong>
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        a new construction will be more sustainable than a renovation
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
                                        {"After"}
                                    </Typography>
                                    <Typography variant="h6">
                                        <strong>28.5  years</strong>
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        a new construction will be more sustainable than a renovation
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