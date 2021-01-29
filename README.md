# Change Material-UI default color

## Material-UI
React components for faster and easier web development. Build your own design system, or start with Material Design.

### Installation
1. Via VPN: `npm install @material-ui/core`
2. Use a CDN: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />`

### Usage
#### 1. Determine the colors in an independent file
For example,

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

#### 2. Import the path to the file which you want to use your setting
like below:

    import theme from '../../../theme'

#### 3. Use the setting in the style information element
like below: 

    <p style={{color:theme.palette.secondary.main}}></p>

## Reference
[Material-UI](https://material-ui.com/)


