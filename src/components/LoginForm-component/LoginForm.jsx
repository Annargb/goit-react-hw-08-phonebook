import { Formik } from 'formik';
import {
  Form,
  Field,
  FormGroup,
  ErrorMessage,
  LogInButton,
  LabelText,
} from './LoginForm.styled';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email!')
    .min(8, 'Email must contain at least 8 characters')
    .max(40, 'Too long email')
    .required('Email is required!'),
  password: Yup.string()
    .min(8, 'Password must contain at least 8 characters')
    .max(40, 'Too long password')
    .required('Password is required!'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        dispatch(logIn(values));
      }}
    >
      <Form>
        <FormGroup>
          <LabelText>Email</LabelText>
          <Field name="email" type="email" placeholder="katesimpson@mail.com" />
          <ErrorMessage name="email" component="span" required />
        </FormGroup>

        <FormGroup>
          <LabelText>Password</LabelText>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="span" required />
        </FormGroup>

        <LogInButton type="submit">Log in</LogInButton>
      </Form>
    </Formik>
  );
};
