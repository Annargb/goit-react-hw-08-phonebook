import styled from 'styled-components';

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserMenuText = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  color: #0e294b;
`;

export const UserMenuButton = styled.button`
  width: 80px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  border-radius: 25px;
  background-color: #fff;
  border: 2px solid #0047ab;
  color: #0047ab;
  padding: 6px;

  &:hover,
  &:focus {
    background-color: #0047ab;
    color: #fff;
  }
`;
