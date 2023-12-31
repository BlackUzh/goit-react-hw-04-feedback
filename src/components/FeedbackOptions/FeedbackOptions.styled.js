import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;
export const ButtonFeedBack = styled.button`
  border-radius: 4px;
  padding: 5px 10px;
  background: transparent;
  color: white;
  font-size: 18px;
  text-transform: capitalize;

  :hover {
    cursor: pointer;
    background: #44728f;
  }
`;
