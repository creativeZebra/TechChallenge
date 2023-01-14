import { StandardDropdown2 } from "components/standardComponents/StandardDropdown2";
import StandardNumericField2 from "components/standardComponents/StandardNumericfield2.js";
import { StandardTextField } from "components/standardComponents/StandardTextfield";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

function BuildingInfoTab2() {
  const wallMaterials = [
    {
      value: "1",
      label: "Sandstone",
    },
    {
      value: "2",
      label: "Clay Brick",
    },
    {
      value: "3",
      label: "Concrete",
    },
    {
      value: "4",
      label: "Full Bricks",
    },
    {
      value: "5",
      label: "Mud Bricks",
    },
    {
      value: "6",
      label: "Wood",
    },
  ];

  const wallMaterials2 = [
    {
      value: "1",
      label: "Mineral Wool",
    },
    {
      value: "2",
      label: "Wool Fiber",
    },
    {
      value: "3",
      label: "Ceramic Tiles",
    },
    {
      value: "4",
      label: "Plaster",
    },
    {
      value: "5",
      label: "Natural Stone",
    },
  ];
  const wallMaterials3 = [
    {
      value: "1",
      label: "Mineral Wool",
    },
    {
      value: "2",
      label: "Wool Fiber",
    },
    {
      value: "3",
      label: "Ceramic Tiles",
    },
    {
      value: "4",
      label: "Plaster",
    },
    {
      value: "5",
      label: "Natural Stone",
    },
  ];

  const doorMaterials1 = [
    {
      value: "1",
      label: "Sandstone",
    },
    {
      value: "2",
      label: "Clay Brick",
    },
    {
      value: "3",
      label: "Concrete",
    },
    {
      value: "4",
      label: "Full Bricks",
    },
    {
      value: "5",
      label: "Mud Bricks",
    },
    {
      value: "6",
      label: "Wood",
    },
  ];

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex"
      alignItems="center"
      sx={{ mt: -1 }}
    >
      <Grid item xs={12}>
        <Card sx={{ mt: 1, border: 1, borderColor: "#d2d6d2" }}>
          <Box
            sx={{
              minHeight: "370px",
              minWidth: "510px",
              mt: 1,
            }}
            textAlign="start"
            justifyContent="flex"
            alignItems="start"
          >
            <Box width="100%" textAlign="center">
              <Typography variant="h6">Exterior Wall</Typography>
            </Box>
            <Box width="100%" textAlign="start" sx={{ mb: 2, ml: 3, mt: 1 }}>
              <Divider textAlign="left" sx={{ mr: 6 }}>
                <Typography variant="subtitle2">
                  Load-Bearing Exterior Wall
                </Typography>
              </Divider>
            </Box>
            <Grid
              container
              direction="row"
              justifyContent="center"
              spacing={0.5}
            >
              <Grid item xs={6}>
                <StandardDropdown2
                  heading={"Material"}
                  label={"Material"}
                  data={wallMaterials}
                  value={2}
                ></StandardDropdown2>
              </Grid>
              <Grid item xs={6}>
                <StandardNumericField2
                  value={"17,5"}
                  label={"Thickness"}
                  InputAdornmentType="CentiMeter"
                  DecimalScaleType="Percentage"
                ></StandardNumericField2>
              </Grid>
            </Grid>
            <Box width="100%" textAlign="start" sx={{ mb: 2, ml: 3, mt: 2 }}>
              <Divider textAlign="left" sx={{ mr: 6 }}>
                <Typography variant="subtitle2">Cladding Outside</Typography>
              </Divider>
            </Box>
            <Grid
              container
              direction="row"
              justifyContent="center"
              spacing={0.5}
            >
              <Grid item xs={6}>
                <StandardDropdown2
                  heading={"Material"}
                  label={"Material"}
                  data={wallMaterials2}
                  value={2}
                ></StandardDropdown2>
              </Grid>
              <Grid item xs={6}>
                <StandardNumericField2
                  value={"13,0"}
                  label={"Thickness"}
                  InputAdornmentType="CentiMeter"
                  DecimalScaleType="Percentage"
                ></StandardNumericField2>
              </Grid>
            </Grid>
            <Box width="100%" textAlign="start" sx={{ mb: 2, ml: 3, mt: 2 }}>
              <Divider textAlign="left" sx={{ mr: 6 }}>
                <Typography variant="subtitle2">Finishing Inside</Typography>
              </Divider>
            </Box>
            <Grid
              container
              direction="row"
              justifyContent="center"
              spacing={0.5}
            >
              <Grid item xs={6}>
                <StandardDropdown2
                  heading={"Material"}
                  label={"Material"}
                  data={wallMaterials3}
                  value={5}
                ></StandardDropdown2>
              </Grid>
              <Grid item xs={6}>
                <StandardNumericField2
                  value={"1,0"}
                  label={"Thickness"}
                  InputAdornmentType="CentiMeter"
                  DecimalScaleType="Percentage"
                ></StandardNumericField2>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              sx={{ mt: 2 }}
            >
              <Grid item xs={12}>
                <Box
                  width="100%"
                  minHeight="50px"
                  sx={{
                    backgroundColor: "#eff7ed",
                    borderTop: 1,
                    borderColor: "#d2d6d2",
                  }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="start"
                    textAlign="center"
                  >
                    <Grid item xs={6} sx={{ mt: 0.6 }}>
                      <Typography sx={{ ml: -0.9 }} variant="body2">
                        Total Area: 3.181,57 m²  
                      </Typography>
                      <Typography variant="body2">
                        Total Thickness: 23,2 cm
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ mt: 2 }}>
                      <Typography variant="body2">
                        U-Value: 0,24 W/(m²*K)
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mt: 3, border: 1, borderColor: "#d2d6d2" }}>
          <Box
            sx={{
              minHeight: "370px",
              minWidth: "510px",
              mt: 1,
            }}
            textAlign="start"
            justifyContent="flex"
            alignItems="start"
          >
            <Box width="100%" textAlign="center">
              <Typography variant="h6">Exterior Doors and Windows</Typography>
            </Box>
            <Box width="100%" textAlign="start" sx={{ mb: 2, ml: 3, mt: 1 }}>
              <Divider textAlign="left" sx={{ mr: 6 }}>
                <Typography variant="subtitle2">
                  Load-Bearing Exterior Wall
                </Typography>
              </Divider>
            </Box>
            <Grid
              container
              direction="row"
              justifyContent="center"
              spacing={0.5}
            >
              <Grid item xs={6}>
                <StandardDropdown2
                  heading={"Material"}
                  label={"Material"}
                  data={doorMaterials1}
                  value={5}
                ></StandardDropdown2>
              </Grid>
              <Grid item xs={6}>
                <StandardNumericField2
                  value={"17,5"}
                  label={"Thickness"}
                  InputAdornmentType="CentiMeter"
                  DecimalScaleType="Percentage"
                ></StandardNumericField2>
              </Grid>
            </Grid>
            <Box width="100%" textAlign="start" sx={{ mb: 2, ml: 3, mt: 2 }}>
              <Divider textAlign="left" sx={{ mr: 6 }}>
                <Typography variant="subtitle2">Cladding Outside</Typography>
              </Divider>
            </Box>
            <Grid
              container
              direction="row"
              justifyContent="center"
              spacing={0.5}
            >
              <Grid item xs={6}>
                <StandardDropdown2
                  heading={"Material"}
                  label={"Material"}
                  data={wallMaterials}
                  value={2}
                ></StandardDropdown2>
              </Grid>
              <Grid item xs={6}>
                <StandardNumericField2
                  value={"216"}
                  label={"Thickness"}
                  InputAdornmentType="CentiMeter"
                  DecimalScaleType="Percentage"
                ></StandardNumericField2>
              </Grid>
            </Grid>
            <Box width="100%" textAlign="start" sx={{ mb: 2, ml: 3, mt: 2 }}>
              <Divider textAlign="left" sx={{ mr: 6 }}>
                <Typography variant="subtitle2">Finishing Inside</Typography>
              </Divider>
            </Box>
            <Grid
              container
              direction="row"
              justifyContent="center"
              spacing={0.5}
            >
              <Grid item xs={6}>
                <StandardDropdown2
                  heading={"Material"}
                  label={"Material"}
                  data={wallMaterials}
                  value={2}
                ></StandardDropdown2>
              </Grid>
              <Grid item xs={6}>
                <StandardNumericField2
                  value={"216"}
                  label={"Thickness"}
                  InputAdornmentType="CentiMeter"
                  DecimalScaleType="Percentage"
                ></StandardNumericField2>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              sx={{ mt: 2 }}
            >
              <Grid item xs={12}>
                <Box
                  width="100%"
                  minHeight="50px"
                  sx={{
                    backgroundColor: "#eff7ed",
                    borderTop: 1,
                    borderColor: "#d2d6d2",
                  }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="start"
                    textAlign="center"
                  >
                    <Grid item xs={6} sx={{ mt: 0.6 }}>
                      <Typography variant="body2">
                        Total Area: 3.181,57 m²
                      </Typography>
                      <Typography variant="body2">
                        Total Thickness: 23,2 cm
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ mt: 2 }}>
                      <Typography variant="body2">
                        U-Value: 0,24 W/(m²*K)
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mt: 3, border: 1, borderColor: "#d2d6d2" }}>
          <Box
            sx={{
              minHeight: "370px",
              minWidth: "510px",
              mt: 1,
            }}
            textAlign="start"
            justifyContent="flex"
            alignItems="start"
          >
            <Box width="100%" textAlign="center">
              <Typography variant="h6">Roof</Typography>
            </Box>
            <Box width="100%" textAlign="start" sx={{ mb: 2, ml: 3, mt: 1 }}>
              <Divider textAlign="left" sx={{ mr: 6 }}>
                <Typography variant="subtitle2">
                  Load-Bearing Exterior Wall
                </Typography>
              </Divider>
            </Box>
            <Grid
              container
              direction="row"
              justifyContent="center"
              spacing={0.5}
            >
              <Grid item xs={6}>
                <StandardDropdown2
                  heading={"Material"}
                  label={"Material"}
                  data={wallMaterials}
                  value={2}
                ></StandardDropdown2>
              </Grid>
              <Grid item xs={6}>
                <StandardNumericField2
                  value={"17,5"}
                  label={"Thickness"}
                  InputAdornmentType="CentiMeter"
                  DecimalScaleType="Percentage"
                ></StandardNumericField2>
              </Grid>
            </Grid>
            <Box width="100%" textAlign="start" sx={{ mb: 2, ml: 3, mt: 2 }}>
              <Divider textAlign="left" sx={{ mr: 6 }}>
                <Typography variant="subtitle2">Cladding Outside</Typography>
              </Divider>
            </Box>
            <Grid
              container
              direction="row"
              justifyContent="center"
              spacing={0.5}
            >
              <Grid item xs={6}>
                <StandardDropdown2
                  heading={"Material"}
                  label={"Material"}
                  data={wallMaterials}
                  value={2}
                ></StandardDropdown2>
              </Grid>
              <Grid item xs={6}>
                <StandardNumericField2
                  value={"216"}
                  label={"Thickness"}
                  InputAdornmentType="CentiMeter"
                  DecimalScaleType="Percentage"
                ></StandardNumericField2>
              </Grid>
            </Grid>
            <Box width="100%" textAlign="start" sx={{ mb: 2, ml: 3, mt: 2 }}>
              <Divider textAlign="left" sx={{ mr: 6 }}>
                <Typography variant="subtitle2">Finishing Inside</Typography>
              </Divider>
            </Box>
            <Grid
              container
              direction="row"
              justifyContent="center"
              spacing={0.5}
            >
              <Grid item xs={6}>
                <StandardDropdown2
                  heading={"Material"}
                  label={"Material"}
                  data={wallMaterials}
                  value={2}
                ></StandardDropdown2>
              </Grid>
              <Grid item xs={6}>
                <StandardNumericField2
                  value={"216"}
                  label={"Thickness"}
                  InputAdornmentType="CentiMeter"
                  DecimalScaleType="Percentage"
                ></StandardNumericField2>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              sx={{ mt: 2 }}
            >
              <Grid item xs={12}>
                <Box
                  width="100%"
                  minHeight="50px"
                  sx={{
                    backgroundColor: "#eff7ed",
                    borderTop: 1,
                    borderColor: "#d2d6d2",
                  }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="start"
                    textAlign="center"
                  >
                    <Grid item xs={6} sx={{ mt: 0.6 }}>
                      <Typography variant="body2">
                        Total Area: 3.181,57 m²
                      </Typography>
                      <Typography variant="body2">
                        Total Thickness: 23,2 cm
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ mt: 2 }}>
                      <Typography variant="body2">
                        U-Value: 0,24 W/(m²2*K)
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mt: 3, border: 1, borderColor: "#d2d6d2" }}>
          <Box
            sx={{
              minHeight: "370px",
              minWidth: "510px",
              mt: 1,
            }}
            textAlign="start"
            justifyContent="flex"
            alignItems="start"
          >
            <Box width="100%" textAlign="center">
              <Typography variant="h6">Floor</Typography>
            </Box>
            <Box width="100%" textAlign="start" sx={{ mb: 2, ml: 3, mt: 1 }}>
              <Divider textAlign="left" sx={{ mr: 6 }}>
                <Typography variant="subtitle2">
                  Load-Bearing Exterior Wall
                </Typography>
              </Divider>
            </Box>
            <Grid
              container
              direction="row"
              justifyContent="center"
              spacing={0.5}
            >
              <Grid item xs={6}>
                <StandardDropdown2
                  heading={"Material"}
                  label={"Material"}
                  data={wallMaterials}
                  value={2}
                ></StandardDropdown2>
              </Grid>
              <Grid item xs={6}>
                <StandardNumericField2
                  value={"17,5"}
                  label={"Thickness"}
                  InputAdornmentType="CentiMeter"
                  DecimalScaleType="Percentage"
                ></StandardNumericField2>
              </Grid>
            </Grid>
            <Box width="100%" textAlign="start" sx={{ mb: 2, ml: 3, mt: 2 }}>
              <Divider textAlign="left" sx={{ mr: 6 }}>
                <Typography variant="subtitle2">Cladding Outside</Typography>
              </Divider>
            </Box>
            <Grid
              container
              direction="row"
              justifyContent="center"
              spacing={0.5}
            >
              <Grid item xs={6}>
                <StandardDropdown2
                  heading={"Material"}
                  label={"Material"}
                  data={wallMaterials}
                  value={2}
                ></StandardDropdown2>
              </Grid>
              <Grid item xs={6}>
                <StandardNumericField2
                  value={"216"}
                  label={"Thickness"}
                  InputAdornmentType="CentiMeter"
                  DecimalScaleType="Percentage"
                ></StandardNumericField2>
              </Grid>
            </Grid>
            <Box width="100%" textAlign="start" sx={{ mb: 2, ml: 3, mt: 2 }}>
              <Divider textAlign="left" sx={{ mr: 6 }}>
                <Typography variant="subtitle2">Finishing Inside</Typography>
              </Divider>
            </Box>
            <Grid
              container
              direction="row"
              justifyContent="center"
              spacing={0.5}
            >
              <Grid item xs={6}>
                <StandardDropdown2
                  heading={"Material"}
                  label={"Material"}
                  data={wallMaterials}
                  value={2}
                ></StandardDropdown2>
              </Grid>
              <Grid item xs={6}>
                <StandardNumericField2
                  value={"216"}
                  label={"Thickness"}
                  InputAdornmentType="CentiMeter"
                  DecimalScaleType="Percentage"
                ></StandardNumericField2>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              sx={{ mt: 2 }}
            >
              <Grid item xs={12}>
                <Box
                  width="100%"
                  minHeight="50px"
                  sx={{
                    backgroundColor: "#eff7ed",
                    borderTop: 1,
                    borderColor: "#d2d6d2",
                  }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="start"
                    textAlign="center"
                  >
                    <Grid item xs={6} sx={{ mt: 0.6 }}>
                      <Typography variant="body2">
                        Total Area: 3.181,57 m²
                      </Typography>
                      <Typography variant="body2">
                        Total Thickness: 23,2 cm
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ mt: 2 }}>
                      <Typography variant="body2">
                        U-Value: 0,24 W/(m²*K)
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default BuildingInfoTab2;
