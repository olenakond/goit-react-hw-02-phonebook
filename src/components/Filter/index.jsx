import { nanoid } from 'nanoid';

const Filter = ({ handleFilter }) => {
  const filterInputId = nanoid();
  return (
    <>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input onChange={handleFilter} id={filterInputId} type="text" />
    </>
  );
};

export default Filter;
