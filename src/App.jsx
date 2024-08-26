import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import styles from './App.module.css';
import {HomePage} from './components/HomePage/HomePage';
import {AboutPage} from './components/AboutPage/AboutPage';
import {ProjectsPage} from './components/ProjectsPage/ProjectsPage';
import {ResumePage} from './components/ResumePage/ResumePage';
import {EnsoPage} from './components/ProjectPages/Enso/EnsoPage';
import {DxMMLPage} from './components/ProjectPages/DxMML/DxMMLPage';
import {ManyShotPage} from './components/ProjectPages/ManyShot/ManyShotPage';
import {PWMPage} from './components/ProjectPages/PWM/PWMPage';
import {BlockscapesPage} from './components/ProjectPages/Blockscapes/BlockscapesPage';
import {IsomorphsPage} from './components/ProjectPages/Isomorphs/IsomorphsPage';
import { QuadSievePage } from './components/ProjectPages/QuadSieve/QuadSievePage';

function App() {  
  return (
      <Router>
        <div className={styles.App}>
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects/Enso" element={<EnsoPage />} />
          <Route path="/projects/DxMML" element={<DxMMLPage />} />
          <Route path="/projects/ManyShot" element={<ManyShotPage />} />
          <Route path="/projects/PWManager" element={<PWMPage />} />
          <Route path="/projects/Blockscapes" element={<BlockscapesPage />} />
          <Route path="/projects/Isomorphisms" element={<IsomorphsPage />} />
          <Route path="/projects/QuadSieve" element={<QuadSievePage />} />
        </Routes>
      </Router>
  );
}

export default App;