import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { HeaderLink, NavContainer } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavContainer>
      <HeaderLink to="/">Home</HeaderLink>
      {isLoggedIn && <HeaderLink to="/contacts">Contacts</HeaderLink>}
    </NavContainer>
  );
};
