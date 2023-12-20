import { Formik } from 'formik';
import {
  Form,
  Field,
  FormGroup,
  ErrorMessage,
  AddContactButton,
  LabelText,
} from './ContactsForm.styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must contain at least 2 characters')
    .max(40, 'Too long name')
    .required('Name is required!'),
  number: Yup.string()
    .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, {
      message: 'Invalid Phone Number!',
      excludeEmptyString: false,
    })
    .required('Phone number is required!')
    .max(15, 'Invalid phone number!'),
});

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        const contactAlreadyExist = contacts.some(
          contact => contact.name.toLowerCase() === values.name.toLowerCase()
        );

        contactAlreadyExist
          ? alert(`${values.name} is already in contacts!`)
          : dispatch(addContact(values));
      }}
    >
      <Form>
        <FormGroup>
          <LabelText>Name</LabelText>
          <Field name="name" type="text" placeholder="Kate Simpson" />
          <ErrorMessage name="name" component="span" required />
        </FormGroup>

        <FormGroup>
          <LabelText>Number</LabelText>
          <Field name="number" type="tel" placeholder="+XX..." />
          <ErrorMessage name="number" component="span" required />
        </FormGroup>

        <AddContactButton type="submit">Add contact</AddContactButton>
      </Form>
    </Formik>
  );
};
