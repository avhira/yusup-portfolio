import Back from '../component/Back.jsx';
import Card from '../component/Cards.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <>
      <Back />
      <div className="container">
        <h1 className="title-project">Portfolio</h1>
        <Card projects={projects} />
      </div>
    </>
  );
}
