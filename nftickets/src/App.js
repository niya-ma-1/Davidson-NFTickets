import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Home from './Pages/Home';
import Create from './Pages/Create';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
          <CssBaseline/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
