import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import Home from './Pages/Home';
import Create from './Pages/Create';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
