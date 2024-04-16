/* eslint-disable react/prop-types */
export default function Cards({ projects }) {
  return (
    <>
      <div className="wrap-card">
        {projects.map((project, i) => (
          <div key={i} className="card">
            <div className="image_container">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="technology">
              {project.technologies.map((tech, i) => (
                <div key={i}>
                  <img src={tech} />
                </div>
              ))}
            </div>
            <div className="title">
              <span>{project.title}</span>
            </div>
            <a href={project.link} className="cart-button" target="_blank" rel="noreferrer">
              <span>See More</span>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
