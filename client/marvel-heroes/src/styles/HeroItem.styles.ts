import styled from "styled-components";
export const HeroCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeroName = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 8px;
`;

export const HeroDetails = styled.div`
  margin-bottom: 16px;
  p {
    font-size: 1rem;
    color: #555;
    margin: 4px 0;
  }
  strong {
    color: #333;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  justify-content: flex-end;
`;

export const EditButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

export const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e53935;
  }
`;
