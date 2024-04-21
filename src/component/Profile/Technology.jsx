import { technologys } from '@/data/technology';

export default function Technology() {
  return (
    <div className="tech-wrap">
      <h1>Technology</h1>
      <div className="tech">
        {technologys.map((data, i) => (
          <div key={i} className="animate__animated animate__flipInX">
            <img src={data.img} alt={data.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
