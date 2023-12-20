import {
  HomeTitle,
  AccentHomeTitle,
  HomeText,
  MainWrapper,
  HomeImg,
  HomeNavLink,
} from './Greeting.styled';
import logo from '../../images/phonebook1.png';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Greeting = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <MainWrapper>
      <HomeText>Welcome to</HomeText>
      <HomeTitle>
        Phone<AccentHomeTitle>book</AccentHomeTitle>
      </HomeTitle>
      <HomeImg src={logo} alt="Phonebook" width="500" />
      <HomeText>Now you can keep your contacts safe!</HomeText>
      {!isLoggedIn && (
        <HomeText>
          <HomeNavLink to="/register">Sign up</HomeNavLink> or{' '}
          <HomeNavLink to="/login">Log in</HomeNavLink> to try it out!
        </HomeText>
      )}
    </MainWrapper>
  );
};
