import styled from "styled-components";

export const HeroDetailContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 40px;
  background-color: #f4f7fb;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

export const HeroDetailHeader = styled.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
`;
export const BackButton = styled.button`
  background-color: #dcdde1;
  color: #333;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin-bottom: 30px;

  &:hover {
    background-color: #ccc;
  }

  &:active {
    background-color: #bbb;
  }
`;
