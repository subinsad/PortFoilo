// MainPage.js
import React, { useState, useEffect } from 'react';
import { RiHeart3Fill } from 'react-icons/ri';
import { GrFormNextLink } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import './main.css';

const MainPage = () => {
    const [greeting, setGreeting] = useState('Hello');
    const navigate = useNavigate(); // useNavigate 훅 사용

    useEffect(() => {
        const intervalId = setInterval(() => {
            setGreeting((prevGreeting) => {
                switch (prevGreeting) {
                    case 'Hello':
                        return '안녕하세요';
                    case '안녕하세요':
                        return 'こんにちは';
                    case 'こんにちは':
                        return 'Hello';
                    default:
                        return 'Hello';
                }
            });
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const handleNextClick = () => {
        // GrFormNextLink를 클릭했을 때 페이지 이동
        navigate('/profile'); // 이동할 페이지의 경로로 변경
    };

    return (
        <section className="MainPage">
            <div className="MainPage__contents">
                <p className="heart">
                    {' '}
                    MADE WITH <RiHeart3Fill />{' '}
                </p>
                <h1>{greeting}</h1>
                <div className="name-box">
                    <span> FrontEnd </span>
                    <span className="line"></span>
                    <span> SuBin </span>
                </div>
            </div>

            <GrFormNextLink className="next" onClick={handleNextClick} />
        </section>
    );
};

export default MainPage;
