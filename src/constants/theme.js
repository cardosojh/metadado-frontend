export const MUI_THEME = {
    palette: {
        type: 'light',
        primary: {
            main: '#00a2d5',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: "Open Sans",
        button: {
            fontWeight: "bold",
            fontFamily: "Montserrat",
        },
        headline: {
            fontFamily: "Montserrat",
            fontSize: 20,
            lineHeight: "28px",
        },
        title: {
            fontFamily: "Montserrat",
            fontSize: 16,
            lineHeight: "24px",
            fontWeight: "normal"
        },
        subheading: {
            fontFamily: "Montserrat",
            fontSize: 14,
            lineHeight: "24px",
        },
        body1: {
            fontSize: 16,
            lineHeight: "24px",
        }
    },
    overrides: {
        MuiInput: {
            inkbar: {
                '&:after': {
                    backgroundColor: "#00a2d5",
                }
            }
        },
        MuiButton: {
            root: {
                color: "rgba(0, 0, 0, 0.54)",
            },
            raised: {
                boxShadow: "initial",
                "&:hover": {
                    boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px"
                }
            },
            sizeSmall: {
                fontSize: "0.875rem"
            }
        },
        MuiFormHelperText: {
            root: {
                fontFamily: "Montserrat",
                fontSize: 12,
                lineHeight: "20px",
                color: "#ac2b37"
            }
        }
    },
    appRoot: {
        maxWidth: 960,
        margin: "0 auto",
    },
    root: {
        flexGrow: 1,
        margin: "0 8px",
    },
    tag: {
        root: {
            height: "24px",
            borderRadius: "2px",
            fontFamily: "Montserrat",
            fontSize: 12,
            lineHeight: 1.67,
            padding: "2px 4px 2px 4px"
        },
        default: {
            border: "solid 1px #fd9812",
            color: "#e47e1a",
        },
        red: {
            border: "solid 1px #d0021b",
            color: "#d0021b",
        },
    },
    grayColor: {
        color: "rgba(0, 0, 0, 0.54)"
    },
    linkButton: {
        textTransform: 'none',
        margin: "8px 0",
    },
    centeredRoot: {
        display: "flex",
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto"
    },
};