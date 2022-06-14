import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getAcronyms } from '@services';
import { Hero, Form } from '@home';

function Home() {
  const { data } = useQuery('acronyms', getAcronyms);

  return (
    <main className="flex-1">
      <Hero />
      <Form />
      <ul>
        {data.map((acronym: string) => (
          <li key={acronym}>
            <Link to={`acronym/${acronym}`}>{acronym}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Home;
