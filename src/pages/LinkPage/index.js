import React from 'react';
import { GrFormNextLink } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';
import './main.css';

const LinkPage = () => {
    const navigate = useNavigate();

    const handleNextClick1 = () => {
        navigate('/profile'); // Change the path as needed
    };

    const handleNextClick2 = () => {
        navigate('/'); // Change the path as needed
    };

    return (
        <section className="LinkPage">
            <GrFormNextLink className="next left" onClick={handleNextClick1} />
            <div className="content">
                <h1 className="link-title">My Profile Link</h1>
                <div className="link-box">
                    <a href="https://github.com/subinsad">
                        <FaGithub />
                    </a>
                    <a href="https://velog.io/@subinsad/posts">
                        <SiVelog />
                    </a>
                </div>
                <p className="page-text">
                    This page is my created portfolio page{' '}
                </p>
            </div>

            <GrFormNextLink className="next" onClick={handleNextClick2} />
        </section>
    );
};

export default LinkPage;
