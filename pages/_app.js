import "../styles/globals.scss";
import { createTheme, ThemeProvider } from "@mui/material";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

function MyApp({ Component, pageProps }) {
    const breakpoints = createBreakpoints({});
    const theme = createTheme({
        palette: {
            primary: {
                main: "#4318FF",
            },
            secondary: {
                main: "#f50057",
            },
            background: {
                default: "#F4F7FE",
            },
            text: {
                primary: "#A3AED0",
                dark: "#1B2559",
            },
            error: {
                main: "#EE5D50",
            },
            success: {
                main: "#05CD99",
            },
        },
        typography: {
            fontSize: 16,
            fontFamily: "'DM Sans', sans-serif",
            p: {
                color: "#A3AED0",
                fontSize: "16px",
            },
            dim: {
                color: "#A3AED0",
                fontSize: "14px",
                fontFamily: "'DM Sans', sans-serif",
            },
            h1: {
                fontSize: 34,
                lineHeight: "42px",
                [breakpoints.down("xs")]: {
                    fontSize: 26,
                    lineHeight: 1,
                },
                fontWeight: 600,
                color: "#1B2559",
                letterSpacing: "-1px",
            },
            h2: {
                fontSize: 24,
                [breakpoints.down("xs")]: {
                    fontSize: 20,
                },
                fontWeight: 600,
                color: "#1B2559",
                letterSpacing: "-1px",
            },
            h3: {
                fontSize: 20,
                [breakpoints.down("xs")]: {
                    fontSize: 16,
                },
                fontWeight: 600,
                color: "#1B2559",
                letterSpacing: "-1px",
            },
            h4: {
                fontSize: 14,
                fontWeight: 600,
                color: "#1B2559",
                letterSpacing: "-1px",
            },
            h5: {
                fontSize: 14,
                fontWeight: 600,
                color: "#1B2559",
                letterSpacing: "-1px",
            },
            h6: {
                fontSize: 14,
                fontWeight: 600,
                color: "#1B2559",
                letterSpacing: "-1px",
            },
        },
        shape: {
            borderRadius: 20,
        },
        components: {
            // Name of the component
            MuiButton: {
                styleOverrides: {
                    // Name of the slot
                    root: {
                        textTransform: "none",
                        padding: "11px 30px",
                        fontSize: 14,
                        borderRadius: "20px",
                        minWidth: "168px",
                        fontWeight: "400",
                        [breakpoints.down("xs")]: {
                            minWidth: "unset",
                            padding: "10px 20px",
                        },
                    },
                },
            },
            MuiInput: {
                input: {
                    "&::placeholder": {
                        color: "#8F9BBA",
                    },
                },
            },
            MuiChip: {
                styleOverrides: {
                    root: {
                        padding: "5px 8px",
                        height: "24px",
                        borderRadius: "7px",
                        ".MuiChip-label": {
                            padding: 0,
                            fontSize: "12px",
                            fontWeight: 700,
                        },
                    },
                    filledSuccess: {
                        backgroundColor: "rgba(5, 205, 153, 0.1)",
                        color: "#05CD99",
                    },
                    filledError: {
                        backgroundColor: "rgba(238, 93, 80, 0.1)",
                        color: "#EE5D50",
                    },
                },
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
