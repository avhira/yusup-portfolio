import { Link } from 'react-router-dom';
import Backs from '../img/assets/back.svg';

export default function Back() {
  return (
    <>
      <Link to="/" className="back">
        <img src={Backs} alt={Backs} />
        <span>Back</span>
      </Link>
    </>
  );
}
