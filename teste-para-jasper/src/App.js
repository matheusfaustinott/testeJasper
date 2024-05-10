import { ThemeProvider } from '@mui/material';
import theme from './theme';
import Home from './componentes/paginas/home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
