import { createTheme } from '@material-ui/core/styles';

export default createTheme({
    palette: {
        primary: {
            main: '#0A6FB8'
        },
        secondary: {
            main: '#4A96D2'
        },
        error: {
            main: '#F5222D'
        },
        success: {
            main: '#52C41A'
        },
        text: {
            primary: '#4F4F4F',
            secondary: '#828282'
        },
        background: {
            default: "#FBFBFB",
            border: "#D9D9D9"
        }
    },
    typography: {
        fontFamily: [
            'Inter',
            '-apple-system',
            'Roboto',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
        fontSize: 14
    },
    props: {
        MuiTypography: {
            variantMapping: {
                body2: 'span',
            },
        },
    },
    overrides: {
        MuiTypography: {
            h1: {
                fontSize: '1.7rem',
                lineHeight: '130%',
                fontWeight: 600,
                '@media (min-width: 0px) and (max-width: 840px)': {
                    fontSize: '1.5rem'
                }
            },
            h2: {
                fontSize: '1.5rem',
                lineHeight: '150%',
                fontWeight: 500,
                '@media (min-width: 0px) and (max-width: 840px)': {
                    fontSize: '1.2rem'
                }
            },
            h3: {
                fontSize: '1.2rem',
                lineHeight: '160%',
                fontWeight: 500,
                '@media (min-width: 0px) and (max-width: 840px)': {
                    fontWeight: 600
                }
            },
            h4: {
                fontSize: '1.1rem',
                lineHeight: '160%',
                fontWeight: 500,
                '@media (min-width: 0px) and (max-width: 840px)': {
                    fontSize: '1.1rem'
                }
            },
            h5: {
                fontSize: '0.9rem',
                lineHeight: '100%',
                fontWeight: 600
            },
            h6: {
                fontSize: '0.8rem',
                lineHeight: '150%',
                fontWeight: 600
            },
        }
    }
});