import { nanoid } from 'nanoid';
import { Input } from './Filter.styled';

const Filter = ({ handleFilter }) => {
  const filterInputId = nanoid();
  return (
    <>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <Input onChange={handleFilter} id={filterInputId} type="text" />
    </>
  );
};

export default Filter;
