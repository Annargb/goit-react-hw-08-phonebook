import { AuthNav } from 'components/AuthNav-component/AuthNav';
import { Navigation } from 'components/Navigation-component/Navigation';
import { UserMenu } from 'components/UserMenu-component/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
