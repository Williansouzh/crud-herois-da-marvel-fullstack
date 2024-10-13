import styled from "styled-components";
export const HeroListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px; // Adds space between each HeroItem
  padding: 20px;
  max-width: 800px; // Optional: restricts the width of the list
  margin: 0 auto; // Centers the list in the container
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
