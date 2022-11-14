import { alpha, Grid, styled, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Spent from "./Spent";
import Earnings from "./Earnings";
import Clients from "./Clients";
import Activity from "./Activity";
import CardInfo from "./CardInfo";
import CardSecurity from "./CardSecurity";
import EarningsGraph from "./EarningsGraph";
import TransferHistory from "./TransferHistory";
import Profile from "./Profile";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

function index() {
    return (
        <>
            <Grid container>
                <Grid item xs={12} md={12} lg={12} sx={{ pb: 2 }}>
                    <Grid container>
                        <Grid item xs>
                            <Typography
                                sx={{
                                    color: "#707EAE",
                                    fontWeight: "bold",
                                    fontSize: "14px",
                                }}
                            >
                                Hi Andrei,
                            </Typography>
                            <Typography
                                variant="h1"
                                color="#2B3674"
                                sx={{
                                    mb: {
                                        xs: 2,
                                    },
                                }}
                            >
                                Welcome to Venus!
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs="auto"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Search
                                sx={{
                                    ".MuiInputBase-root": {
                                        minWidth: {
                                            lg: "341px",
                                            md: "250px",
                                            xs: "200px",
                                        },
                                        backgroundColor: "#fff",
                                        borderRadius: "10px",
                                        height: "46px",
                                    },
                                    ".MuiInputBase-input": {
                                        fontSize: "12px",
                                    },
                                }}
                            >
                                <SearchIconWrapper
                                    sx={{
                                        zIndex: 1,
                                    }}
                                >
                                    <svg
                                        width="11"
                                        height="12"
                                        viewBox="0 0 11 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="5"
                                            cy="5"
                                            r="4.3"
                                            stroke="#1B2559"
                                            strokeWidth="1.4"
                                        />
                                        <line
                                            x1="10.0101"
                                            y1="11"
                                            x2="8"
                                            y2="8.98995"
                                            stroke="#1B2559"
                                            strokeWidth="1.4"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search"
                                    inputProps={{ "aria-label": "search" }}
                                />
                            </Search>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} lg={3}>
                            <Spent />
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <Earnings />
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <Clients />
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <Activity />
                        </Grid>
                        <Grid item lg={8} xs={12}>
                            <CardInfo />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <CardSecurity />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <EarningsGraph />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <TransferHistory />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <Profile />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default index;
