/* eslint-disable react/prop-types */
import visit from '../assets/visit.svg';
import img1 from '../img/Profile-Project.png';
import img2 from '../img/avhira-cafe.png';
import img3 from '../img/aroma-bumi.png';
import img4 from '../img/Elemes-id.png';
import img5 from '../img/movie.png';
import img7 from '../img/leren.png';
import img8 from '../img/avhira-foods.png';
import img9 from '../img/Pokemon-API.png';
import img10 from '../img/progate-ninja.png';
import img11 from '../img/summer-exploring.png';
import img12 from '../img/weddings.jpg';
import img13 from '../img/webfilm.png';

export default function Cards() {
  const projects = [
    { image: img2, title: 'Avhira Cafe', technologies: ['html', 'css', 'Javascript'], link: 'https://avhira.github.io/avhira-cafe' },
    { image: img12, title: 'Avhira Wedding', technologies: ['React', 'Bootstrap', 'Javascript', 'vite'], link: 'https://avhira-wedding.vercel.app/' },
    { image: img13, title: 'Avhira Film', technologies: ['React', 'css', 'Javascript', 'vite'], link: 'https://webfilm-theta.vercel.app/' },
    { image: img3, title: 'Aroma Bumi Project', technologies: ['React', 'css', 'Javascript', 'vite'], link: 'https://avhira.github.io/aroma-bumi/' },
    { image: img1, title: 'Profile Project', technologies: ['html', 'Tailwind', 'Javascript'], link: 'https://avhira.github.io/portfolio-tailwindcss/' },
    { image: img4, title: 'Elemes Project', technologies: ['React', 'css', 'Javascript', 'vite'], link: 'https://avhira.github.io/Elemes/' },
    { image: img5, title: 'Movies Cool', technologies: ['React', 'css', 'Javascript', 'vite', 'API'], link: 'https://avhira.github.io/avhira-movies/' },
    { image: img11, title: 'Summer Exploring', technologies: ['React', 'Tailwind', 'Javascript', 'vite'], link: 'https://avhira.github.io/summer-exploring/' },
    { image: img7, title: 'LEREN Project', technologies: ['html', 'css', 'Javascript'], link: 'https://avhira.github.io/project-leren/' },
    { image: img8, title: 'Foods Fun', technologies: ['React', 'Tailwind', 'Javascript', 'vite'], link: 'https://avhira.github.io/order-foods/' },
    { image: img9, title: 'Pokemon Cards', technologies: ['html', 'css', 'Javascript', 'API'], link: 'https://avhira.github.io/pokemon-cards/' },
    { image: img10, title: 'Progate Ninja', technologies: ['html', 'css'], link: 'https://avhira.github.io/progate-ninja/' },
  ];

  const Project = ({ title, image, technologies, link }) => (
    <div className="card">
      <img src={image} alt={title} className="banner" />
      <div className="card-data">
        <h2>{title}</h2>
        <div className="tech ">
          {technologies.map((tech, i) => (
            <span key={i} className={`txt-white ${tech}`}>
              {tech}
            </span>
          ))}
        </div>
        <a href={link} className="card-btn" target="_blank" rel="noreferrer">
          <span>KUNJUNGI</span>
          <img src={visit} alt="visit" />
        </a>
      </div>
    </div>
  );

  return (
    <div className="wrap-card">
      {projects.map((project, i) => (
        <Project key={i} {...project} />
      ))}
    </div>
  );
}
