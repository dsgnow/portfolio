import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import Layout from './components/Layout/Layout'
import NotFound from './pages/404/404'
import Welcome from './pages/Welcome/Welcome'
import Navigation from './pages/Navigation/Navigation'
import { ThemeProvider } from 'styled-components'
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  responsiveFontSizes
} from '@material-ui/core/styles'

let theme = createTheme({
  typography: {
    htmlFontSize: 10,
    allVariants: {
      color: 'black'
    },
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontSize: '5rem',
      fontWeight: 700
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 500
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 500
    },
    h4: {
      fontSize: '1.8rem',
      fontWeight: 200
    },
    h5: {
      fontSize: '1.4rem',
      fontWeight: 200
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 200
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 600
    },
    subtitle2: {
      fontSize: '0.7rem',
      fontWeight: 'normal'
    }
  },
  palette: {
    // background: {
    //   default: '#ffffff'
    // },
    primary: {
      light: '#003c77',
      main: '#ff3000',
      dark: '#000e1c',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#fc4783',
      main: '#ff2362',
      dark: '#bd1a48',
      contrastText: '#ffffff'
    },
    mainGradient: {
      main: 'linear-gradient(to right, #002046, #004c8b)',
      darken: 'linear-gradient(to right, #021b79, #0575e6)'
    },
    grey: {
      main: '#fafafa'
    },
    shadow: {
      main: 'rgba(0, 0, 0, 0.1) -4px 9px 25px -6px'
    }
  }
})
theme = responsiveFontSizes(theme)
theme.typography.h5 = {
  fontSize: '1.3rem',
  fontWeight: 200,
  '@media (orientation: landscape)': {
    fontSize: '0.8rem'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2rem',
    fontWeight: 200
  }
}

function App() {
  const header = <div></div>
  const content = (
    <main>
      <Suspense fallback={<p>Ładowanie...</p>}>
        <Routes>
          <Route path="/welcome" element={<Welcome speed={0.25} />} />
          <Route path="/navigation" element={<Navigation speed={0} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  )

  return (
    <div className="App">
      <Router>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout header={header} content={content} />
          </ThemeProvider>
        </MuiThemeProvider>
      </Router>
    </div>
  )
}

export default App
