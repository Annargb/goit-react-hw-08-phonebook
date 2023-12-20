import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  gap: 20px;
`;

export const HeaderLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  color: #0e294b;

  &.active {
    color: #0047ab;
  }
`;
