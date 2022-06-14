import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="p-4">
      <Link to="/">
        <h1 className="text-3xl font-semibold underline decoration-4 underline-offset-2">
          WDA
        </h1>
      </Link>
    </header>
  );
}

export default Header;
