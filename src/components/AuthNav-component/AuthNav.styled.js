import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

export const AuthLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  color: #0e294b;

  &.active {
    color: #0047ab;
    text-decoration: underline;
  }

  &:hover,
  &:focus {
    color: #0047ab;
    text-decoration: underline;
  }
`;
