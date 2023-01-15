import React, { useEffect, useState, useContext } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { render } from "react-dom";
import Card from '@mui/material/Card';
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { Grid, Typography } from '@mui/material';


function ComparisonInfoTab1() {
    const [chartOptions1, setChartOptions1] = useState({
        chart: {
            type: 'column',
            style: {
                fontFamily: "'Roboto', sans-serif",
            }
        },
        title: {
            text: 'Energy Need For Heating'
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
                text: 'kWh / (m²a)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' kWh / (m²a)'
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
            name: '(Net / Gross) Energy Need For heating',
            data: [116.6, 47.9]
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
            text: 'Energy Carriers'
        },
        xAxis: {
            categories: [
                'Your House',
                'Improved Standard'
            ],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'kWh / (m²a)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' kWh / (m²a)'
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Electricity',
            data: [2.4, 7.4],
            color: '#C0CA33'
        }, {
            name: 'Fossil Fuels',
            data: [231.9, 62],
            color: '#78909C'
        },]
    });

    const [chartOptions3, setChartOptions3] = useState({
        chart: {
            type: 'column',
            style: {
                fontFamily: "'Roboto', sans-serif",
            }
        },
        title: {
            text: 'Total Primary Energy Demand'
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
                text: 'kWh / (m²a)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' kWh / (m²a)'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            },
            series: {
                color: '#009688'
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Total Primary Energy Demand For Heating And Domestic Hot Water',
            data: [200.8, 62.6]
        }]
    });

    const [chartOptions4, setChartOptions4] = useState({
        chart: {
            type: 'column',
            style: {
                fontFamily: "'Roboto', sans-serif",
            }
        },
        title: {
            text: 'Carbon Dioxide Emissions'
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
                text: 'kg / (m²a)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' kg / (m²a)'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            },
            series: {
                color: '#004D40'
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Carbon Dioxide Emissions For Heating And Hot Water',
            data: [52.9, 16.2]
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
                                        <strong>68,7 kWh/(m²a)</strong>
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        (net/gross) energy need for heating with an improved standard
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
                                        <strong>162,5 kWh/(m²a)</strong>
                                    </Typography>
                                    <Typography variant="subtitle1">
                                    fossil fuels by replacing the energy carriers and adding a photovoltaic system
                                    </Typography>
                                </Box>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12} lg={8}>

                        <HighchartsReact highcharts={Highcharts} options={chartOptions3} />
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
                                        <strong>138,2 kWh/(m²a)</strong>
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        total primary energy demand with an improved standard
                                    </Typography>
                                </Box>
                            </Card>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={12} lg={8}>

                        <HighchartsReact highcharts={Highcharts} options={chartOptions4} />
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
                                        <strong>36,7 kg/(m²a)</strong>
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        carbon dioxide emissions with an improved standard
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

export default ComparisonInfoTab1;