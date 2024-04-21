import Avhira from '@/img/man.png';
import Download from '@/img/assets/download.png';
import DownladCv from '../DownloadCv.jsx';

export default function DataDescription() {
  return (
    <div className="data-wrap">
      <div className="data">
        <div className="animate__animated animate__fadeInLeft">
          <h3>Who is Yusup ?</h3>
        </div>
        <div className="animate__animated animate__fadeInLeft animate__delay-1s">
          <h4>
            Hi, I am Yusup a Frontend Engineer with web development skills. Currently concentrating on ReactJS with JavaScript, but willing to learn new technical skills. proficient in HTML, CSS, and JavaScript as well as some libraries
            like Tailwind, Bootstrap, and React.
            <br />
            So, Let&apos;s connect on LinkedIn or you can contact me at my email.
          </h4>
        </div>
        <div className="animate__animated animate__fadeInLeft animate__delay-1s">
          <DownladCv text={'Resume'} img={Download} />
        </div>
      </div>
      <div className="animate__animated animate__fadeInRight">
        <img src={Avhira} alt="avhira" />
      </div>
    </div>
  );
}
