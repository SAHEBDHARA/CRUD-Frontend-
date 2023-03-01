import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
// import { fetchDataFromMongoDB } from './api';
import {allUser} from '../../service/api'
import Allusers from "./Allusers"

const Preloader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = styled.div`
  width: 64px;
  height: 64px;
  position: relative;

  div {
    position: absolute;
    width: 5px;
    height: 5px;
    background: #333;
    border-radius: 50%;
    animation: ${keyframes`
      0% {
        top: 32px;
        left: 32px;
        width: 0;
        height: 0;
        opacity: 1;
      }
      100% {
        top: 0;
        left: 0;
        width: 64px;
        height: 64px;
        opacity: 0;
      }
    `} 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  div:nth-child(2) {
    animation-delay: -0.75s;
  }
`;

const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await allUser();
      setData(result);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader>
          <Spinner>
            <div></div>
            <div></div>
          </Spinner>
        </Preloader>
      ) : (
        <div>
          
          <Allusers/>
        </div>
      )}
    </>
  );
};

export default MyComponent;
