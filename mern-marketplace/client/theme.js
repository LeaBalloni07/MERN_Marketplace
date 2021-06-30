import { createMuiTheme } from '@material-ui/core/styles'
import { blueGrey, lightGreen } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#7EB185', //lightGreen 
      main: '#002642',  //deepBlue
      dark: '#3A4144',  //darkGray
      contrastText: '#7EB185',  //lightGreen
    },
    secondary: {
      light: '#840032', //burgandy
      main: '#cea2ac',  //lightPink
      dark: '#8eacbb',  //paleBlue
      contrastText: '#000', //black
    },
      openTitle: "#840032", //burgandy
      protectedTitle: "#840032",  //burgandy
      type: 'light'
    }
  })

  export default theme