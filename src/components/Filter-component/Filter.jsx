import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setContactsFilter } from 'redux/contacts/filterSlice';
import {
  FilterField,
  FilterLabel,
  FilterInput,
  FilterWrapper,
  FilterIcon,
} from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = event => dispatch(setContactsFilter(event.target.value));

  return (
    <FilterField>
      <FilterLabel>Find Contacts by name</FilterLabel>
      <FilterWrapper>
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={changeFilter}
        ></FilterInput>
        <FilterIcon />
      </FilterWrapper>
    </FilterField>
  );
};
