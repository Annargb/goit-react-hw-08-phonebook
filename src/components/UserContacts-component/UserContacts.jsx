import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import {
  MainTitle,
  Section,
  ContactsTitle,
  AccentMainTitle,
} from './UserContacts.styled';
import { InfoMessage } from 'components/InfoMessage-component/InfoMessage';
import { GroupComponent } from 'components/Group-component/GroupComponent';
import { ContactsForm } from 'components/ContactsForm-component/ContactsForm';

export const UserContacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        <MainTitle>
          Phone<AccentMainTitle>book</AccentMainTitle>
        </MainTitle>
        <ContactsForm />
      </Section>
      <Section>
        <ContactsTitle>Contacts</ContactsTitle>
        {isLoading && !error && (
          <InfoMessage text="Request in progress..." $variant="primary" />
        )}
        {error && (
          <InfoMessage
            text="Something went wrong. Try reloading the page 🥺"
            $variant="secondary"
          />
        )}
        {!isLoading && !error && <GroupComponent />}
      </Section>
    </>
  );
};
