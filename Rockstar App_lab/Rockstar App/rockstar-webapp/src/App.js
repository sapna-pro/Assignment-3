import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Song from './pages/Song'
// import Create from './pages/Create'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { indigo} from '@material-ui/core/colors'
import Layout from './components/Layout'

const theme = createTheme({
  palette: {
    primary: {
      light: indigo[100],
      main: indigo[500],
      dark: '#002984'
    }
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/"/>
            <Route exact path="/sugar">
              <Song songName="Sugar"/>
            </Route>
            <Route path="/raatanLambiyan">
              <Song songName="Raatan Lambiyan"/>
            </Route>
            <Route path="/despacito">
              <Song songName="Despacito"/>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
