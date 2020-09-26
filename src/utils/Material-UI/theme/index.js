import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
        // MuiInputBase: {
        //     input: {
        //         "&::placeholder": {
        //             color: "white"
        //         },
        //         color: "white",
        //     },
        // },
        // MuiInputBase: {root: {padding: 0}},
        // MuiOutlinedInput: {root: {padding: 0}},
        // MuiAutocomplete: {inputRoot: {padding: 0}},
        // MuiOutlinedInput: {
        //     root: {
        //         padding: 0
        //     }
        // },
        // MuiAutocomplete: {
        //     inputRoot: {
        //         padding: 0
        //     }
        // }
    },
    palette: {
        type: "dark",
        primary: {
            main: '#252c36'
            // main: '#24292e'
        },
        secondary: {
            main: '#2f3b4b'
        },
        warning: {
            main: '#d02b3f'
        },
        success: {
            main: '#9dd89d'
        },
        text: {
            main: '#FFFFFF'
        },
        background: {
            main: '#151c26'
        },
        secondary_red: {
            main: '#DC143C',
        },
        secondary_green: {
            main: '#32CD32',
        },
        textSecondary: {
            main: 'rgba(0, 0, 0, 0.57)',
        },
    },
});

export default theme;
