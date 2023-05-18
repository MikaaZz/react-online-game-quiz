import { createTheme} from '@mui/material/styles';


export const theme = createTheme({
 palette: {
  mode: 'light',
  primary: {
    main: '#99da21',
    contrastText: '#006c1a',
  },
  secondary: {
    main: '#ffffff',
  },
  text: {
    primary: 'rgba(255,255,255,0.87)',
    disabled: 'rgba(255,255,255,0.6)',
  },
  background: {
    paper: 'rgba(12,12,12,0.2)',
    default: '#293591',
  },
  error: {
    main: '#c76363',
  },
  success: {
    main: '#63c791',
  },
  divider: '#ffffff',
},
})