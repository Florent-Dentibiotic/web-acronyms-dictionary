import { Link } from 'react-router-dom';
import links from './footerLinks';

function Footer() {
  return (
    <footer>
      <p>Made by Cyril Tiger in 2022.</p>
      <ul>
        {links.map(({ url, title, external }) => (
          <li key={title}>
            {external ? (
              <a href={url} target="_blank" rel="noreferrer">
                {title}
              </a>
            ) : (
              <Link to={url}>{title}</Link>
            )}
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
