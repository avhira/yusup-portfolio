import Avhira from '../../img/man.png';
import Download from '../../img/assets/download.png';

export default function DataDescription() {
  return (
    <div className="data-wrap">
      <div className="data">
        <h3>Who is Yusup ?</h3>
        <h4>
          Hi, I am Yusup a Frontend Engineer with web development skills. Currently concentrating on ReactJS with JavaScript, but willing to learn new technical skills. proficient in HTML, CSS, and JavaScript as well as some libraries like
          Tailwind, Bootstrap, and React.
          <br />
          So, Let&apos;s connect on LinkedIn or you can contact me at my email.
        </h4>
        <button>
          <span>Resume</span>
          <img src={Download} alt="download" />
        </button>
      </div>
      <img src={Avhira} alt="avhira" />
    </div>
  );
}
