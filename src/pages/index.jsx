import { Link } from 'react-router-dom';
import data from '@/data/link-home.js';
import Wave from '@/component/Wave.jsx';
import LogoHome from '@/component/LogoHome.jsx';

export default function Home() {
  const items = data.map((item) => (
    <div key={item.id} className="wrap-home_btn">
      <Link to={item.url} target={item.id === 1 || item.id === 2 ? '' : '_blank'} className="home-btn">
        <img src={item.img} alt={item.name} />
        <h1>{item.name}</h1>
      </Link>
    </div>
  ));

  return (
    <div className="container">
      <LogoHome />
      <div className="wrap-home_item">{items}</div>
      <Wave />
    </div>
  );
}
