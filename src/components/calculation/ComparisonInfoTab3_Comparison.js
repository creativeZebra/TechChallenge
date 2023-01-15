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

function ComparisonInfoTab3() {

    const [chartOptions1, setChartOptions1] = useState({
        chart: {
            style: {
                fontFamily: "'Roboto', sans-serif",
            }
        },
        title: {
            text: 'Sustainability Comparison'
        },

        credits: {
            enabled: false
        },

        yAxis: {
            title: {
                text: 'cumulated energy consumption in kWh'
            }
        },

        xAxis: {
            title: {
                text: 'Years'
            },
            plotLines: [{
                color: '', // Color value
                dashStyle: 'dot', // Style of the plot line. Default to solid
                value: 28.5, // Value of where the line will appear
                width: 2 // Width of the line    
            }]
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 0,
            },
        },
        tooltip: {
            pointFormat: '{series.name}<br/>Cumulated kWh in Year <b>{point.x:,.0f}: {point.y:,.0f}</b> kWh',
        },
        series: [{
            name: 'Renovation',
            data: [200000,
                209500,
                219000,
                228500,
                238000,
                247500,
                257000,
                266500,
                276000,
                285500,
                295000,
                304500,
                314000,
                323500,
                333000,
                342500,
                352000,
                361500,
                371000,
                380500,
                390000,
                399500,
                409000,
                418500,
                428000,
                437500,
                447000,
                456500,
                466000,
                475500,
                485000,
                494500,
                504000,
                513500,
                523000,
                532500,
                542000,
                551500,
                561000,
            ],
            color: '#43A047'
        }, {
            name: 'New Building',
            data: [410000,
                412200,
                414400,
                416600,
                418800,
                421000,
                423200,
                425400,
                427600,
                429800,
                432000,
                434200,
                436400,
                438600,
                440800,
                443000,
                445200,
                447400,
                449600,
                451800,
                454000,
                456200,
                458400,
                460600,
                462800,
                465000,
                467200,
                469400,
                471600,
                473800,
                476000,
                478200,
                480400,
                482600,
                484800,
                487000,
                489200,
                491400,
                493600,
            ],
            color: '#00695C'
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    });

    const [chartOptions2, setChartOptions2] = useState({
        chart: {
            style: {
                fontFamily: "'Roboto', sans-serif",
            }
        },
        title: {
            text: 'Cost Comparison'
        },

        credits: {
            enabled: false
        },

        yAxis: {
            title: {
                text: 'cumulated costs (one-time and running costs) in €'
            }
        },

        xAxis: {
            title: {
                text: 'Years'
            },
            plotLines: [{
                color: '', // Color value
                dashStyle: 'dot', // Style of the plot line. Default to solid
                value: 18.5, // Value of where the line will appear
                width: 2 // Width of the line    
            }]
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 0
            }
        },
        tooltip: {
            pointFormat: '{series.name}<br/>Cumulated Costs in Year <b>{point.x:,.0f}: {point.y:,.0f}</b> €',
        },
        series: [{
            name: 'Renovation',
            data: [315000,
                324500,
                334000,
                343500,
                353000,
                362500,
                372000,
                381500,
                391000,
                400500,
                410000,
                419500,
                429000,
                438500,
                448000,
                457500,
                467000,
                476500,
                486000,
                495500,
                505000,
                514500,
                524000,
                533500,
                543000,
                552500,
                562000,
                571500,
                581000,
                590500,
                600000,
                609500,
                619000,
                628500,
                638000,
                647500,
                657000,
                666500,
                676000,
            ],
            color: '#43A047'
        }, {
            name: 'New Building',
            data: [450000,
                452200,
                454400,
                456600,
                458800,
                461000,
                463200,
                465400,
                467600,
                469800,
                472000,
                474200,
                476400,
                478600,
                480800,
                483000,
                485200,
                487400,
                489600,
                491800,
                494000,
                496200,
                498400,
                500600,
                502800,
                505000,
                507200,
                509400,
                511600,
                513800,
                516000,
                518200,
                520400,
                522600,
                524800,
                527000,
                529200,
                531400,
                533600,
            ],
            color: '#00695C'
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
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
                                        <strong>18.4  years</strong>
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        a new construction will be cheaper than a renovation
                                    </Typography>
                                </Box>
                            </Card>
                        </Box>
                    </Grid>
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
                </Grid>
            </div>
        </>
    );
}

export default ComparisonInfoTab3;