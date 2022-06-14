import { FormEvent, SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate(`acronym/${searchTerm}`);
  };

  return (
    <form>
      <label htmlFor="acronymSearch">
        <span>Search an acronym</span>
        <input
          type="text"
          id="acronymSearch"
          name="acronymSearch"
          placeholder="Search"
          autoComplete="acronyms"
          onChange={handleChange}
        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
}

export default Form;
