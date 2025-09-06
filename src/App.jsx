import './App.css';
import Home from './home/Home';
import AboutInfo from './AboutInfo';
import Projects from './project/Projects';
import Header from './header/Header';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import useToggle from './hooks/usetoggle';
import Loader from './loader/Loader';
import { useContext, useEffect, useState } from 'react'; 
import {DataContext} from './contexts/DataContext';
function App() {
  const [isLoading, setLoading] = useToggle(true);
  const { state } = useContext(DataContext);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400); 
    return () => clearTimeout(timer); 
  }, [state.dataLoaded]);
  return (
    <ThemeProvider>
      {isLoading ? <Loader /> :
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<AboutInfo/>} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<h1>Error Not Found</h1>} />
          </Routes>
        </>
      }
    </ThemeProvider>
  );
}

export default App;
