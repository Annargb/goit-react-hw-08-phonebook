import { AuthWrapper, AuthLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthWrapper>
      <AuthLink to="/login">Log in</AuthLink>
      <AuthLink to="/register">Sign up</AuthLink>
    </AuthWrapper>
  );
};
