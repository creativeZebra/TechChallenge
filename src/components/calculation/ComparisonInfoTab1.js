import React, { useEffect, useState, useContext } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { render } from "react-dom";
import Card from '@mui/material/Card';
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { Grid } from '@mui/material';


function ComparisonInfoTab1({ gridChange }) {
    const [chartOptions1, setChartOptions1] = useState({
        chart: {
            type: 'bar',
            style: {
                fontFamily: "'Roboto', sans-serif",
            }
        },
        title: {
            text: 'Energy Need For Heating'
        },
        xAxis: {
            categories: [
                'National Minimum Requirement',
                'Improved Standard',
                'Ambitious Standard / NZEB'
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
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '(Net / Gross) Energy Need For heating',
            data: [83, 70, 45]
        }]
    });

    const [chartOptions2, setChartOptions2] = useState({
        chart: {
            type: 'bar',
            style: {
                fontFamily: "'Roboto', sans-serif",
            }
        },
        title: {
            text: 'Energy Carriers'
        },
        xAxis: {
            categories: [
                'National Minimum Requirement',
                'Improved Standard',
                'Ambitious Standard / NZEB'
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
            data: [61, 57, 42]
        }, {
            name: 'Biomass',
            data: [84, 41, 27]
        }, {
            name: 'Electricity',
            data: [46, 36, 25]
        }, {
            name: 'District Heating',
            data: [16, 10, 5]
        }, {
            name: 'Other',
            data: [9, 7, 2]
        }, {
            name: 'Produced Electricity',
            data: [0, 0, 10]
        }]
    });

    const [chartOptions3, setChartOptions3] = useState({
        chart: {
            type: 'bar',
            style: {
                fontFamily: "'Roboto', sans-serif",
            }
        },
        title: {
            text: 'Total Primary Energy Demand'
        },
        xAxis: {
            categories: [
                'National Minimum Requirement',
                'Improved Standard',
                'Ambitious Standard / NZEB'
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
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Total Primary Energy Demand For Heating And Domestic Hot Water',
            data: [121, 84, 58]
        }]
    });

    const [chartOptions4, setChartOptions4] = useState({
        chart: {
            type: 'bar',
            style: {
                fontFamily: "'Roboto', sans-serif",
            }
        },
        title: {
            text: 'Carbon Dioxide Emissions'
        },
        xAxis: {
            categories: [
                'National Minimum Requirement',
                'Improved Standard',
                'Ambitious Standard / NZEB'
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
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Carbon Dioxide Emissions For Heating And Hot Water',
            data: [32, 22, 15]
        }]
    });

    const [chartOptions5, setChartOptions5] = useState({
        chart: {
            type: 'bar',
            style: {
                fontFamily: "'Roboto', sans-serif",
            }
        },
        title: {
            text: 'Energy Costs'
        },
        xAxis: {
            categories: [
                'National Minimum Requirement',
                'Improved Standard',
                'Ambitious Standard / NZEB'
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
                    <Grid item xs={12} md={12} lg={8}>

                        <HighchartsReact highcharts={Highcharts} options={chartOptions2} />
                        <Box m={2}>
                            <Divider />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12} lg={8}>

                        <HighchartsReact highcharts={Highcharts} options={chartOptions3} />
                        <Box m={2}>
                            <Divider />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12} lg={8}>

                        <HighchartsReact highcharts={Highcharts} options={chartOptions4} />
                        <Box m={2}>
                            <Divider />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12} lg={8}>

                        <HighchartsReact highcharts={Highcharts} options={chartOptions5} />
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default ComparisonInfoTab1;