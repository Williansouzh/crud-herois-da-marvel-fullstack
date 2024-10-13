import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 300px;
  margin: 50px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza o conteúdo na vertical */
  align-items: center;
  border: 1px solid #ebebeb;

  @media (max-width: 600px) {
    padding: 15px;
    margin: 20px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  background-color: #f9f9f9;
  transition: all 0.3s ease;

  &:focus {
    border-color: #4e73df;
    background-color: #fff;
    outline: none;
    box-shadow: 0 0 5px rgba(78, 115, 223, 0.5);
  }

  &::placeholder {
    color: #6c757d;
    opacity: 0.8;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #4e73df;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #375aee;
    transform: scale(1.05);
  }

  &:active {
    background-color: #2a47bb;
  }
`;

export const ErrorMessage = styled.p`
  color: #e74c3c;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
  font-weight: 600;
`;

export const InputFocusAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: rgba(78, 115, 223, 0.1);
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Input}:focus ~ & {
    opacity: 1;
  }
`;
