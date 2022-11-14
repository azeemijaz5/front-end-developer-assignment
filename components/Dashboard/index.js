import {
    Backdrop,
    Box,
    Button,
    ClickAwayListener,
    Divider,
    Drawer,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Step,
    StepButton,
    StepLabel,
    Stepper,
    styled,
    SwipeableDrawer,
    Typography,
} from "@mui/material";
import * as styles from "./dashboard.module.scss";
import PropTypes from "prop-types";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import React, { useState } from "react";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import LanguageIcon from "@mui/icons-material/Language";
import InterestsIcon from "@mui/icons-material/Interests";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Image from "next/legacy/image";
import Dashboard from "./Dashboard";
import Activity from "./Activity";
import Library from "./Library";
import Security from "./Security";
import Schedules from "./Schedules";
import Payouts from "./Payouts";
import Settings from "./Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));
const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    // ...(ownerState.active && {
    //     backgroundImage:
    //         "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    //     boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    // }),
    // ...(ownerState.completed && {
    //     backgroundImage:
    //         "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    // }),
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <DashboardIcon className={styles.sidebarMenuIcon} />,
        2: <ShowChartIcon className={styles.sidebarMenuIcon} />,
        3: <LocalLibraryOutlinedIcon className={styles.sidebarMenuIcon} />,
        4: <SecurityOutlinedIcon className={styles.sidebarMenuIcon} />,
        5: <CalendarTodayOutlinedIcon className={styles.sidebarMenuIcon} />,
        6: (
            <AccountBalanceWalletOutlinedIcon
                className={styles.sidebarMenuIcon}
            />
        ),
        7: <SettingsOutlinedIcon className={styles.sidebarMenuIcon} />,
    };

    return (
        <ColorlibStepIconRoot
            ownerState={{ completed, active }}
            className={className}
        >
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

const steps = [
    "Dashboard",
    "Activity",
    "Library",
    "Securiy",
    "Scheduals",
    "Payouts",
    "Settings",
];

function ResumeBuilderStepper(props) {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [resumeData, setResumeData] = useState(null);

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
        handleDrawerClose();
    };

    return (
        <>
            <Grid container sx={{ position: "relative", overflow: "hidden" }}>
                <Grid item lg={12} xs={12}>
                    <Grid container position="relative" sx={{ height: "100%" }}>
                        <Grid
                            item
                            xs="auto"
                            sx={{
                                position: {
                                    md: "static",
                                    xs: "absolute",
                                },
                                left: "0",
                                top: "0",
                                zIndex: "2",
                                height: "100%",
                            }}
                        >
                            <ClickAwayListener onClickAway={handleDrawerClose}>
                                <Drawer
                                    variant="permanent"
                                    open={open}
                                    sx={{
                                        transition: "all .3s ease",
                                        width: {
                                            md: "auto",
                                            xs: open ? "100%" : "60px",
                                        },
                                        height: "100%",
                                        ".MuiPaper-root": {
                                            position: "static",
                                            overflow: "hidden",
                                            borderRight: "none",
                                        },
                                        backgroundColor: "#fff",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: {
                                                md: "space-between",
                                                md: "flex-start",
                                            },
                                            height: "100%",
                                        }}
                                    >
                                        <Box>
                                            <DrawerHeader
                                                sx={{
                                                    display: {
                                                        md: "none",
                                                    },
                                                }}
                                            >
                                                <IconButton
                                                    color="inherit"
                                                    aria-label="open drawer"
                                                    onClick={handleDrawerOpen}
                                                    edge="start"
                                                    sx={{
                                                        float: {
                                                            md: "right",
                                                        },
                                                        ...(open && {
                                                            display: "none",
                                                        }),
                                                    }}
                                                >
                                                    <ChevronRightIcon />
                                                </IconButton>
                                                <IconButton
                                                    onClick={handleDrawerClose}
                                                    sx={{
                                                        ...(!open && {
                                                            display: "none",
                                                        }),
                                                    }}
                                                >
                                                    <ChevronLeftIcon />
                                                </IconButton>
                                            </DrawerHeader>
                                            <Box
                                                sx={{
                                                    padding: {
                                                        lg: "50px 50px 0 50px",
                                                        md: "30px 30px 0 30px",
                                                    },
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: {
                                                            md: "143px",
                                                            xs: "75% !important",
                                                        },
                                                        margin: {
                                                            md: "unset",
                                                            xs: "auto",
                                                        },
                                                    }}
                                                >
                                                    <Image
                                                        src="/logo.png"
                                                        alt="Logo"
                                                        className="image"
                                                        width={143}
                                                        height={44}
                                                        layout="responsive"
                                                    />
                                                </Box>
                                            </Box>
                                            <Divider
                                                sx={{
                                                    my: {
                                                        md: 3,
                                                        xs: 1,
                                                    },
                                                }}
                                            />
                                            <Stepper
                                                nonLinear
                                                activeStep={activeStep}
                                                className={styles.sidebarMenus}
                                                sx={{
                                                    flexDirection: "column",
                                                    alignItems: "flex-start",
                                                    padding: {
                                                        lg: "0 50px 50px 50px",
                                                        md: "0 30px 30px 30px",
                                                        xs: "12px",
                                                    },
                                                }}
                                            >
                                                {steps.map((label, index) => (
                                                    <Step
                                                        key={label}
                                                        completed={
                                                            completed[index]
                                                        }
                                                        className={`${
                                                            activeStep ==
                                                                index &&
                                                            styles.active
                                                        } ${
                                                            styles.sidebarMenu
                                                        }`}
                                                        sx={{
                                                            p: {
                                                                md: "10px 15px",
                                                                xs: "5px 8px",
                                                            },
                                                            width: "100%",
                                                            minWidth: {
                                                                xs: "unset",
                                                                md: "150px",
                                                                lg: "214px",
                                                            },
                                                        }}
                                                    >
                                                        <StepButton
                                                            color="inherit"
                                                            onClick={handleStep(
                                                                index
                                                            )}
                                                            sx={{
                                                                justifyContent:
                                                                    "flex-start",
                                                                p: {
                                                                    md: "10px 15px",
                                                                    xs: "5px 8px",
                                                                },
                                                                m: {
                                                                    md: "-10px -15px",
                                                                    xs: "-5px -8px",
                                                                },
                                                            }}
                                                        >
                                                            <StepLabel
                                                                StepIconComponent={
                                                                    ColorlibStepIcon
                                                                }
                                                                sx={{
                                                                    ".MuiStepLabel-labelContainer":
                                                                        {
                                                                            transition:
                                                                                "all .3s ease",
                                                                            opacity:
                                                                                {
                                                                                    md: 1,
                                                                                    xs: open
                                                                                        ? "1"
                                                                                        : "0",
                                                                                },
                                                                            paddingLeft:
                                                                                {
                                                                                    md: "8px",
                                                                                    xs: open
                                                                                        ? "8px"
                                                                                        : "0",
                                                                                },
                                                                            ".MuiStepLabel-label":
                                                                                {
                                                                                    whiteSpace:
                                                                                        "nowrap",
                                                                                    color:
                                                                                        activeStep ==
                                                                                        index
                                                                                            ? "#fff"
                                                                                            : "#A3AED0",
                                                                                },
                                                                        },
                                                                    ".MuiStepLabel-iconContainer":
                                                                        {
                                                                            transition:
                                                                                "all 300ms ease",
                                                                            paddingRight:
                                                                                "0",
                                                                            ">div": {
                                                                                width: {
                                                                                    md: "20px",
                                                                                    xs: "20px",
                                                                                },
                                                                                height: {
                                                                                    md: "20px",
                                                                                    xs: "20px",
                                                                                },
                                                                            },
                                                                            ".MuiSvgIcon-root":
                                                                                {
                                                                                    fontSize:
                                                                                        {
                                                                                            md: "1.5rem",
                                                                                            xs: "1rem",
                                                                                        },
                                                                                },
                                                                        },
                                                                }}
                                                            >
                                                                {label}
                                                            </StepLabel>
                                                        </StepButton>
                                                    </Step>
                                                ))}
                                            </Stepper>
                                        </Box>
                                        <Box
                                            sx={{
                                                padding: {
                                                    md: "20px 20px 40px",
                                                    xs: 0,
                                                },
                                            }}
                                        >
                                            <Button
                                                variant="standard"
                                                startIcon={
                                                    <LoginOutlinedIcon />
                                                }
                                                sx={{
                                                    minWidth: "unset",
                                                    padding: "8px 15px",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        whiteSpace: "nowrap",
                                                        transition:
                                                            "all .3s ease",
                                                        opacity: {
                                                            md: 1,
                                                            xs: open
                                                                ? "1"
                                                                : "0",
                                                        },
                                                        paddingLeft: {
                                                            md: "8px",
                                                            xs: open
                                                                ? "8px"
                                                                : "0",
                                                        },
                                                    }}
                                                >
                                                    Log Out
                                                </Box>
                                            </Button>
                                        </Box>
                                    </Box>
                                </Drawer>
                            </ClickAwayListener>
                        </Grid>
                        <Grid item xs>
                            <Backdrop
                                open={open}
                                onClick={handleDrawerClose}
                                sx={{ zIndex: 1 }}
                            ></Backdrop>
                            <Box
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    minHeight: "100vh",
                                    py: {
                                        md: 5,
                                        xs: 3,
                                    },
                                    px: {
                                        xs: 3,
                                        md: 3,
                                        lg: 5,
                                    },
                                    pl: {
                                        xs: 10,
                                    },
                                }}
                            >
                                <React.Fragment>
                                    {(() => {
                                        switch (activeStep) {
                                            case 0:
                                                return (
                                                    <>
                                                        <Dashboard />
                                                    </>
                                                );
                                            case 1:
                                                return <Activity />;
                                            case 2:
                                                return <Library />;
                                            case 3:
                                                return <Security />;
                                            case 4:
                                                return <Schedules />;
                                            case 5:
                                                return <Payouts />;
                                            case 6:
                                                return <Settings />;
                                        }
                                    })()}
                                </React.Fragment>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

ResumeBuilderStepper.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResumeBuilderStepper;

export async function getServerSideProps(ctx) {
    const { id } = ctx.params;
    console.log("prams from props", ctx);
    return {
        props: {},
    };
}
