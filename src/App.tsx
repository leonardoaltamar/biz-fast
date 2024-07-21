import { ThemeProvider } from "styled-components"
import { AppRouter } from "./app.routes"
import { theme } from "./styles/themes/theme"




function App() {


  return (
    <ThemeProvider theme={theme}>
      <AppRouter />          
    </ThemeProvider>
  )
}

export default App
