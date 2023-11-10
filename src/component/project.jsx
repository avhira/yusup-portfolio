import Cards from './cards';
import Back from '../assets/back.svg';
import { Link } from 'react-router-dom';

export default function Project() {
  return (
    <>
      <div className="container">
        <h1 className="title-project">Portfolio</h1>
        <Link to="/linktree" className="back">
          <img src={Back} alt={Back} />
          <span>Back</span>
        </Link>
        <Cards />
      </div>
    </>
  );
}
