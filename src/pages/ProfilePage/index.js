import React from 'react';
import { GrFormNextLink } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import './main.css';

const ProfilePage = () => {
    const navigate = useNavigate();

    const handleNextClick1 = () => {
        navigate('/'); // Change the path as needed
    };

    const handleNextClick2 = () => {
        navigate('/link'); // Change the path as needed
    };

    return (
        <section className="Profile">
            <GrFormNextLink className="next left" onClick={handleNextClick1} />
            <div className="content">
                <p className="icon-box">
                    Hello there <span className="move">👋 </span> I'm
                </p>
                <h1>Subin</h1>
                <p className="sub-title">Frontend Developer</p>

                <img src="/image/icon_2.png" alt="Subin's Profile" />

                <p className="page-text">
                    This page is my created portfolio page{' '}
                </p>
            </div>

            <GrFormNextLink className="next" onClick={handleNextClick2} />
        </section>
    );
};

export default ProfilePage;
