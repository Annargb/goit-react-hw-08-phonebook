import { ContactsList } from 'components/ContactsList-component/ContactsList';
import { Filter } from 'components/Filter-component/Filter';
import { InfoMessage } from 'components/InfoMessage-component/InfoMessage';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectVisibleContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';

export const GroupComponent = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const visibleContacts = useSelector(selectVisibleContacts);

  const variantOfText = () => {
    if (!contacts.length && !isLoading) {
      return (
        <InfoMessage text="There are no contacts here 😲" $variant="primary" />
      );
    } else if (contacts.length && !visibleContacts.length) {
      return (
        <>
          <Filter />
          <InfoMessage
            text="Sorry, we didn't find any contacts for this request 😢"
            $variant="secondary"
          />
        </>
      );
    } else {
      return (
        <>
          <Filter />
          <ContactsList />
        </>
      );
    }
  };

  return variantOfText();
};
