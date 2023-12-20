import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 60px;
  text-align: center;
  color: #0e294b;
`;

export const AccentHomeTitle = styled.span`
  color: #0047ab;
`;

export const HomeText = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  color: #0e294b;
  margin-bottom: 10px;
`;

export const MainWrapper = styled.div`
  padding-top: 60px;
`;

export const HomeImg = styled.img`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
`;

export const HomeNavLink = styled(Link)`
  color: #0e294b;

  &:hover,
  &:focus {
    color: #0047ab;
    text-decoration: underline;
  }
`;
