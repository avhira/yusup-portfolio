import Back from '@/component/utilities/Back.jsx';
import { projects } from '@/data/projects.js';
import Card from '@/component/Card.jsx';

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
