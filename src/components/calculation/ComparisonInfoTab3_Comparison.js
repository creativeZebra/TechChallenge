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
        value: 11.3, // Value of where the line will appear
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
      name: 'Renovated Building',
      data: [36668,
        130763,
        224858,
        318953,
        413048,
        507143,
        601238,
        695333,
        789428,
        883523,
        977618,
        1071713,
        1165808,
        1259903,
        1353998,
        1448093,
        1542188,
        1636283,
        1730378,
        1824473,
        1918568,
        2012663,
        2106758,
        2200853,
        2294948,
        2389043,
        2483138,
        2577233,
        2671328,
        2765423,
        2859518,
        2953613,
        3047708,
        3141803,
        3235898,
        3329993,
        3424088,
        3518183,
        3612278,
      ],
      color: '#43A047'
    }, {
      name: 'New Building',
      data: [770018,
        799352,
        828686,
        858020,
        887354,
        916688,
        946022,
        975356,
        1004690,
        1034024,
        1063358,
        1092692,
        1122026,
        1151360,
        1180694,
        1210028,
        1239362,
        1268696,
        1298030,
        1327364,
        1356698,
        1386032,
        1415366,
        1444700,
        1474034,
        1503368,
        1532702,
        1562036,
        1591370,
        1620704,
        1650038,
        1679372,
        1708706,
        1738040,
        1767374,
        1796708,
        1826042,
        1855376,
        1884710
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
        value: 26.6, // Value of where the line will appear
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
      name: 'Renovated Building',
      data: [562320,
        593842,
        625364,
        656886,
        688408,
        719930,
        751452,
        782974,
        814496,
        846018,
        877540,
        909062,
        940584,
        972106,
        1003628,
        1035150,
        1066672,
        1098194,
        1129716,
        1161238,
        1192760,
        1224282,
        1255804,
        1287326,
        1318848,
        1350370,
        1381892,
        1413414,
        1444936,
        1476458,
        1507980,
        1539502,
        1571024,
        1602546,
        1634068,
        1665590,
        1697112,
        1728634,
        1760156,
      ],
      color: '#43A047'
    }, {
      name: 'New Building',
      data: [1143000,
        1152827,
        1162654,
        1172481,
        1182308,
        1192135,
        1201962,
        1211789,
        1221616,
        1231443,
        1241270,
        1251097,
        1260924,
        1270751,
        1280578,
        1290405,
        1300232,
        1310059,
        1319886,
        1329713,
        1339540,
        1349367,
        1359194,
        1369021,
        1378848,
        1388675,
        1398502,
        1408329,
        1418156,
        1427983,
        1437810,
        1447637,
        1457464,
        1467291,
        1477118,
        1486945,
        1496772,
        1506599,
        1516426,
      ],
      color: '#00695C'
    }, {
      name: 'Your Building - Running Costs',
      data: [31522,
        63044,
        94566,
        126088,
        157610,
        189132,
        220654,
        252176,
        283698,
        315220,
        346742,
        378264,
        409786,
        441308,
        472830,
        504352,
        535874,
        567396,
        598918,
        630440,
        661962,
        693484,
        725006,
        756528,
        788050,
        819572,
        851094,
        882616,
        914138,
        945660,
        977182,
        1008704,
        1040226,
        1071748,
        1103270,
        1134792,
        1166314,
        1197836,
        1229358,

      ],
      color: '#BDBDBD'
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
                    <strong>26.6  years</strong>
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
                    <strong>11.3  years</strong>
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