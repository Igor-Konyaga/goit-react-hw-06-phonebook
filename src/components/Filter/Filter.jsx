
import css from './Filter.module.css';

export const Filter = ({ filter }) => {
  const handleFilter = e => {
    filter(e.target.value);
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input className={css.input} onChange={handleFilter} type="text" />
    </label>
  );
};
