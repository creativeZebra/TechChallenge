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
            data: [83, 45]
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
            name: 'Fossil Fuels',
            data: [61, 57],
            color: '#78909C'
        }, {
            name: 'Biomass',
            data: [84, 41],
            color: '#4C7542'
        }, {
            name: 'Electricity',
            data: [46, 36],
            color: '#C0CA33'
        }, {
            name: 'District Heating',
            data: [16, 10],
            color: '#FF9800'
        }, {
            name: 'Other',
            data: [9, 7],
            color: '#FF8A65'
        }, {
            name: 'Produced Electricity',
            data: [0, 10],
            color: '#FFEB3B'
        }]
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
            data: [84, 58]
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
            data: [32, 15]
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

export default ComparisonInfoTab1;