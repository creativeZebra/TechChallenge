import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Tooltip from '@mui/material/Tooltip';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';



function createData(type, primaryEnergy, transHeat, maxCredit) {
    return { type, primaryEnergy, transHeat, maxCredit };
}

const rows = [
    createData('Efficiency House 40', "40 %", "55 %", "120.000 € with 20% repayment subsidy"),
    createData(
        ['Efficiency House 40 ',
            <br></br>,
            <i>Renewable energy class </i>,
            <Tooltip
                title={
                    <>
                        <Typography> Information</Typography>
                        <Typography variant="subtitle2">
                            You can claim the higher subsidy for the renewable energy class if you install
                            a new heating system based on renewable energies in the course of the renovation
                            to an efficiency house and this covers at least 65% of the building's energy requirements.
                            <br /><br />
                            You will also receive the higher subsidy if at least 65% of the building's energy
                            needs are met in part or in full by unavoidable waste heat.
                        </Typography>
                        <Typography variant="subtitle2">

                        </Typography>
                    </>}

            >
                <HelpOutlineIcon
                    sx={{ mt: -0.3, color: "#757575" }}
                    fontSize='small'
                />
            </Tooltip>]
        , "40 %", "55 %", "120.000 € with 25% repayment subsidy"),
    createData('Efficiency House 55', "55 %", "70 %", "120.000 € with 15% repayment subsidy"),
    createData(['Efficiency House 55', <br></br>,
        <i>Renewable energy class </i>,
        <Tooltip
            title={
                <>
                    <Typography> Information</Typography>
                    <Typography variant="subtitle2">
                        You can claim the higher subsidy for the renewable energy class if you install
                        a new heating system based on renewable energies in the course of the renovation
                        to an efficiency house and this covers at least 65% of the building's energy requirements.
                        <br /><br />
                        You will also receive the higher subsidy if at least 65% of the building's energy
                        needs are met in part or in full by unavoidable waste heat.
                    </Typography>
                    <Typography variant="subtitle2">

                    </Typography>
                </>}
        >
            <HelpOutlineIcon
                sx={{ mt: -0.3, color: "#757575" }}
                fontSize='small'
            />
        </Tooltip>], "55 %", "70 %", "120.000 € with 20% repayment subsidy"),
    createData('Efficiency House 70', "70 %", "85 %", "120.000 € with 10% repayment subsidy"),
    createData(['Efficiency House 70', <br></br>,
        <i>Renewable energy class </i>,
        <Tooltip
            title={
                <>
                    <Typography> Information</Typography>
                    <Typography variant="subtitle2">
                        You can claim the higher subsidy for the renewable energy class if you install
                        a new heating system based on renewable energies in the course of the renovation
                        to an efficiency house and this covers at least 65% of the building's energy requirements.
                        <br /><br />
                        You will also receive the higher subsidy if at least 65% of the building's energy
                        needs are met in part or in full by unavoidable waste heat.
                    </Typography>
                    <Typography variant="subtitle2">
                    </Typography>
                </>}
        >
            <HelpOutlineIcon
                sx={{ mt: -0.3, color: "#757575" }}
                fontSize='small'
            />
        </Tooltip>], "70 %", "85 %", "150.000 € with 15% repayment subsidy"),
    createData('Efficiency House 85', "85 %", "100 %", "120.000 € with 5% repayment subsidy"),
    createData(['Efficiency House 85', <br></br>,
        <i>Renewable energy class </i>,
        <Tooltip
            title={
                <>
                    <Typography> Information</Typography>
                    <Typography variant="subtitle2">
                        You can claim the higher subsidy for the renewable energy class if you install
                        a new heating system based on renewable energies in the course of the renovation
                        to an efficiency house and this covers at least 65% of the building's energy requirements.
                        <br /><br />
                        You will also receive the higher subsidy if at least 65% of the building's energy
                        needs are met in part or in full by unavoidable waste heat.
                    </Typography>
                    <Typography variant="subtitle2">
                    </Typography>
                </>}
        >
            <HelpOutlineIcon
                sx={{ mt: -0.3, color: "#757575" }}
                fontSize='small'
            />
        </Tooltip>], "85 %", "100 %", "150.000 € with 10% repayment subsidy"),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#C8E6C9",
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


function ComparisonInfoTab4() {
    return (
        <>
            <Box width="100%" textAlign="center">
                <Typography variant="h5">Efficiency house levels and funding at a glance</Typography>
            </Box>
            <Box mt={2} mb={2}  textAlign="center">
                <Typography>{"If you renovate a residential building into an efficiency house or buy a freshly renovated efficiency house, the "}
                    <Link
                        href="https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestehende-Immobilie/Energieeffizient-sanieren/Das-Effizienzhaus/"
                        underline="hover"
                        color="#388E3C">
                        KfW
                    </Link>
                    {" will support you with a loan with a repayment subsidy."}
                </Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell ><strong>Efficiency House</strong></StyledTableCell>
                            <StyledTableCell align="right"><strong>Primary Energy Demand</strong></StyledTableCell>
                            <StyledTableCell align="right"><strong>Transmission heat loss</strong></StyledTableCell>
                            <StyledTableCell align="right"><strong>Maximum loan amount per housing unit</strong></StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <StyledTableCell component="th" scope="row">
                                    {row.type}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.primaryEnergy}</StyledTableCell>
                                <StyledTableCell align="right">{row.transHeat}</StyledTableCell>
                                <StyledTableCell align="right">{row.maxCredit}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ComparisonInfoTab4;