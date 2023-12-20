import { Formik } from 'formik';
import {
  Form,
  Field,
  FormGroup,
  ErrorMessage,
  RegisterButton,
  LabelText,
} from './RegisterForm.styled';
import * as Yup from 'yup';
import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must contain at least 2 characters')
    .max(40, 'Too long name')
    .required('Name is required!'),
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

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormGroup>
          <LabelText>Name</LabelText>
          <Field name="name" type="text" placeholder="Kate Simpson" />
          <ErrorMessage name="name" component="span" required />
        </FormGroup>

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

        <RegisterButton type="submit">Sign up</RegisterButton>
      </Form>
    </Formik>
  );
};
