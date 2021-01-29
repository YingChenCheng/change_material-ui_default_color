import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#8561c5',
			main: '#673ab7',
			dark: '#482880',
			contrastText: '#eeeeee',
		},
		secondary: {
			light: '#ffa733',
			main: '#ff9100',
			dark: '#b26500',
			contrastText: '#202020',
    },
	},
});

export default theme;