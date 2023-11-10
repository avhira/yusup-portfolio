import Instagram from '../assets/instagram.svg';
import Linkedin from '../assets/linkedin.svg';
import Github from '../assets/github.svg';
import Projects from '../assets/project.svg';
import logo from '../img/Avhira.png';
import { Link } from 'react-router-dom';

export default function Home() {
  const data = [
    { id: 1, name: 'Projects', url: '/linktree/project', img: Projects },
    { id: 2, name: 'Github', url: 'https://github.com/avhira', img: Github },
    { id: 3, name: 'Linkedin', url: 'https://www.linkedin.com/in/yusup-abdillah', img: Linkedin },
    { id: 4, name: 'Instagram', url: 'https://www.instagram.com/avhira_id/', img: Instagram },
  ];

  const items = data.map((item) => (
    <div key={item.id} className="wrap-home_btn">
      <Link to={item.url} className="home-btn">
        <img src={item.img} alt={item.name} />
        <h1>{item.name}</h1>
      </Link>
    </div>
  ));

  return (
    <div className="container">
      <img src={logo} alt={logo} className="logo" />
      <h1 className="home-title"> Hi 👋 I&apos;m Yusup a Frontend Developer</h1>
      <div className="wrap-home_item">{items}</div>
      <section>
        <div className="air air1"></div>
        <div className="air air2"></div>
        <div className="air air3"></div>
        <div className="air air4"></div>
      </section>
    </div>
  );
}
