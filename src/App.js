// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import LinkPage from './pages/LinkPage';

const App = () => {
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setCurrentPage(1);
            } else {
                setCurrentPage(0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* 두 개의 Route를 다르게 설정 */}
                    <Route path="/" element={<MainPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/link" element={<LinkPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
