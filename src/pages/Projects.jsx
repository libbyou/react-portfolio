import noteTaker from '../assets/projectImg/NoteTaker.png'
import BoardGame from '../assets/projectImg/boardGameCabinet.png'
import WatchTogethr from '../assets/projectImg/WatchTogethrHome.png'
import BreweryExperience from '../assets/projectImg/breweryExperience.png'
import WorkdayScheduler from '../assets/projectImg/WorkdayScheduler.png'
import PasswordGenerator from '../assets/projectImg/PasswordGenerator.png'
// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Projects() {
  return (
    <ul className="list-group">
      <li className="list-group-item container">
        <div className="row align-items-start">
          <div className="col">
            <h3>WatchTogethr</h3>
            <a href="https://github.com/MikeTritsch/watchtogethr">
              <img src={WatchTogethr} alt='WatchTogethr' />
            </a>
            <h4>Github Repo:<a href="https://github.com/MikeTritsch/watchtogethr"> https://github.com/MikeTritsch/watchtogethr</a></h4>
            <h4>Deployed Site: Still in Development</h4>
            <p>MongoDB/Express/React/Node</p>
          </div>
        </div>
      </li>
      <li className="list-group-item container">
        <div className="row align-items-start">
          <div className="col">
            <h3>Board Game Cabinet</h3>
            <a href="https://board-game-cabinet-project-2-a7bf951a2669.herokuapp.com">
              <img src={BoardGame} alt='boardGameCabinet' />
            </a>
            <h4>Github Repo:<a href="https://github.com/MikeTritsch/watchtogethr"> https://github.com/Estevan-Gonzales/project-2-board-game-cabinet</a></h4>
            <h4>Deployed Site: <a href="https://board-game-cabinet-project-2-a7bf951a2669.herokuapp.com">https://board-game-cabinet-project-2-a7bf951a2669.herokuapp.com</a></h4>
            <p>Handlebars/MySql/Sequelize</p>
          </div>
        </div>
      </li>
      <li className="list-group-item container">
        <div className="row align-items-start">
          <div className="col">
            <h3>Brewery Experience</h3>
            <a href="https://bitstuck.github.io/brewery-experience/">
              <img src={BreweryExperience} alt='breweryExperience' />
            </a>
            <h4>Github Repo:<a href="https://github.com/BitsTuck/brewery-experience"> https://github.com/BitsTuck/brewery-experience</a></h4>
            <h4>Deployed Site: <a href="https://bitstuck.github.io/brewery-experience/">https://bitstuck.github.io/brewery-experience/</a></h4>
            <p>HTML/CSS/JavaScript</p>
          </div>
        </div>
      </li>
      <li className="list-group-item container">
        <div className="row align-items-start">
          <div className="col">
            <h3>Workday Scheduler</h3>
            <a href="https://libbyou.github.io/work-day-scheduler/">
              <img src={WorkdayScheduler} alt='workdayScheduler' />
            </a>
            <h4>Github Repo:<a href="https://github.com/libbyou/work-day-scheduler"> https://github.com/libbyou/work-day-scheduler</a></h4>
            <h4>Deployed Site: <a href="https://libbyou.github.io/work-day-scheduler/">https://libbyou.github.io/work-day-scheduler/</a></h4>
            <p>HTML/CSS/JavaScript</p>
          </div>
        </div>
      </li>
      <li className="list-group-item container">
        <div className="row align-items-start">
          <div className="col">
            <h3>Password Generator</h3>
            <a href="https://libbyou.github.io/work-day-scheduler/">
              <img src={PasswordGenerator} alt='passwordGenerator' />
            </a>
            <h4>Github Repo:<a href="https://github.com/libbyou/password-generator"> https://github.com/libbyou/password-generator</a></h4>
            <h4>Deployed Site: <a href="https://libbyou.github.io/password-generator/">https://libbyou.github.io/password-generator/</a></h4>
            <p>HTML/CSS/JavaScript</p>
          </div>
        </div>
      </li>
      <li className="list-group-item container">
        <div className="row align-items-start">
          <div className="col">
            <h3>Note Taker</h3>
            <a href="https://note-taker-lyou-d2ec1363746b.herokuapp.com/">
              <img src={noteTaker} alt='noteTaker' />
            </a>
            <h4>Github Repo:<a href="https://github.com/libbyou/note-taker"> https://github.com/libbyou/note-taker</a></h4>
            <h4>Deployed Site: <a href="https://note-taker-lyou-d2ec1363746b.herokuapp.com/">https://note-taker-lyou-d2ec1363746b.herokuapp.com/</a></h4>
            <p>Node/Express</p>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default Projects;