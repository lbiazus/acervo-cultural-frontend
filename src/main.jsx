import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import PaginaFilme from './filme/index.jsx'
import { createTheme, ThemeProvider } from '@mui/material'
import { lime } from '@mui/material/colors';

const tema = createTheme({
  palette: {
    primary: {
      main: "#00FFFF"
    }
  },
  typography: {

  }
});
console.log("Tema: ", tema)

createRoot(document.getElementById('react-page')).render(
  <StrictMode>
    <ThemeProvider theme={tema}>
      <PaginaFilme />
    </ThemeProvider>
  </StrictMode>,
)
