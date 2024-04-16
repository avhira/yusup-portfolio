import Html from '../../img/technology/html.png';
import Css from '../../img/technology/css.png';
import Javascript from '../../img/technology/javascript.png';
import Reacts from '../../img/technology/react.png';
import Tailwind from '../../img/technology/tailwind.png';
import Bootstrap from '../../img/technology/bootstrap.png';
import Sass from '../../img/technology/sass.png';
import Nodejs from '../../img/technology/nodejs.png';
import Express from '../../img/technology/express.png';
import Nextjs from '../../img/technology/nextjs.png';
import Typescript from '../../img/technology/typescript.png';
import Mysql from '../../img/technology/mysql.png';
import Mongodb from '../../img/technology/mongodb.png';
import Firebase from '../../img/technology/firebase.png';
import Redux from '../../img/technology/redux.png';

export default function Technology() {
  return (
    <div className="tech-wrap">
      <h1>Technology</h1>
      <div className="tech">
        <img src={Html} alt="html" />
        <img src={Css} alt="css" />
        <img src={Javascript} alt="javascript" />
        <img src={Reacts} alt="react" />
        <img src={Redux} alt="redux" />
        <img src={Tailwind} alt="tailwind" />
        <img src={Bootstrap} alt="bootsrtap" />
        <img src={Sass} alt="sass" />
        <img src={Nodejs} alt="nodejs" />
        <img src={Express} alt="express" />
        <img src={Nextjs} alt="nextjs" />
        <img src={Typescript} alt="typescript" />
        <img src={Mysql} alt="msql" />
        <img src={Mongodb} alt="mongodb" />
        <img src={Firebase} alt="firebase" />
      </div>
    </div>
  );
}
