import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 40px;
  background-color: #f4f7fb;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1,
  h2 {
    font-size: 32px;
    color: #333;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const HeroSection = styled.div`
  width: 100%;
  max-width: 1000px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  color: #4e73df;
  margin-bottom: 20px;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  background-color: #4e73df;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #375aee;
  }

  &:active {
    background-color: #2a47bb;
  }

  &:disabled {
    background-color: #d3d9e2;
    cursor: not-allowed;
  }
`;
