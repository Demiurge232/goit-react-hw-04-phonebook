import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel htmlFor="">
      Find contacts by name
      <FilterInput type="text" onChange={onChange} value={value} />
    </FilterLabel>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
