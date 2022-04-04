import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import Home from './Pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
