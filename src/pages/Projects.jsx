import noteTaker from '../assets/projectImg/NoteTaker.png'
import BoardGame from '../assets/projectImg/boardGameCabinet.png'
import WatchTogethr from '../assets/projectImg/WatchTogethrHome.png'
import BreweryExperience from '../assets/projectImg/breweryExperience.png'
import WorkdayScheduler from '../assets/projectImg/WorkdayScheduler.png'
import PasswordGenerator from '../assets/projectImg/PasswordGenerator.png'
// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Projects() {
  return (
    <>
      <h1 className="d-flex justify-content-start m-1">Projects</h1>
      <ul className="list-group mt-5 pt-5">
        <li className="list-group-item container">
          <div className="row align-items-start">
            <div className="col">
              <h3 className="proficiencies">WatchTogethr</h3>
              <div className="project-details p-2">
                <a href="https://github.com/MikeTritsch/watchtogethr">
                  <img src={WatchTogethr} alt='WatchTogethr' className="project-image mt-2 mb-2"/>
                </a>
                <h5>Github Repo:<a href="https://github.com/MikeTritsch/watchtogethr" className="project-link"> https://github.com/MikeTritsch/watchtogethr</a></h5>
                <h5>Deployed Site: <a href="https://watchtogethr-aeeae66b60e6.herokuapp.com/" className="project-link">https://watchtogethr-aeeae66b60e6.herokuapp.com/</a></h5>
                <p>MongoDB/Express/React/Node</p>
              </div>
            </div>
          </div>
        </li>
        <li className="list-group-item container">
          <div className="row align-items-start">
            <div className="col">
              <h3 className="proficiencies">Board Game Cabinet</h3>
              <div className="project-details p-2">
                <a href="https://board-game-cabinet-project-2-a7bf951a2669.herokuapp.com">
                  <img src={BoardGame} alt='boardGameCabinet' className="project-image mt-2 mb-2"/>
                </a>
                <h5>Github Repo:<a href="https://github.com/Estevan-Gonzales/project-2-board-game-cabinet" className="project-link"> https://github.com/Estevan-Gonzales/project-2-board-game-cabinet</a></h5>
                <h5>Deployed Site: <a href="https://board-game-cabinet-project-2-a7bf951a2669.herokuapp.com" className="project-link">https://board-game-cabinet-project-2-a7bf951a2669.herokuapp.com</a></h5>
                <p>Handlebars/MySql/Sequelize</p>
              </div>
            </div>
          </div>
        </li>
        <li className="list-group-item container">
          <div className="row align-items-start">
            <div className="col">
              <h3 className="proficiencies">Brewery Experience</h3>
              <div className="project-details p-2">
                <a href="https://bitstuck.github.io/brewery-experience/">
                  <img src={BreweryExperience} alt='breweryExperience' className="project-image mt-2 mb-2"/>
                </a>
                <h5>Github Repo:<a href="https://github.com/BitsTuck/brewery-experience" className="project-link"> https://github.com/BitsTuck/brewery-experience</a></h5>
                <h5>Deployed Site: <a href="https://bitstuck.github.io/brewery-experience/" className="project-link">https://bitstuck.github.io/brewery-experience/</a></h5>
                <p>HTML/CSS/JavaScript</p>
              </div>
            </div>
          </div>
        </li>
        <li className="list-group-item container">
          <div className="row align-items-start">
            <div className="col">
              <h3 className="proficiencies">Workday Scheduler</h3>
              <div className="project-details p-2">
                <a href="https://libbyou.github.io/work-day-scheduler/">
                  <img src={WorkdayScheduler} alt='workdayScheduler' className="project-image mt-2 mb-2"/>
                </a>
                <h5>Github Repo:<a href="https://github.com/libbyou/work-day-scheduler" className="project-link"> https://github.com/libbyou/work-day-scheduler</a></h5>
                <h5>Deployed Site: <a href="https://libbyou.github.io/work-day-scheduler/" className="project-link">https://libbyou.github.io/work-day-scheduler/</a></h5>
                <p>HTML/CSS/JavaScript</p>
              </div>
            </div>
          </div>
        </li>
        <li className="list-group-item container">
          <div className="row align-items-start">
            <div className="col">
              <h3 className="proficiencies">Password Generator</h3>
              <div className="project-details p-2">
                <a href="https://libbyou.github.io/work-day-scheduler/">
                  <img src={PasswordGenerator} alt='passwordGenerator' className="project-image mt-2 mb-2"/>
                </a>
                <h5>Github Repo:<a href="https://github.com/libbyou/password-generator" className="project-link"> https://github.com/libbyou/password-generator</a></h5>
                <h5>Deployed Site: <a href="https://libbyou.github.io/password-generator/" className="project-link">https://libbyou.github.io/password-generator/</a></h5>
                <p>HTML/CSS/JavaScript</p>
              </div>
            </div>
          </div>
        </li>
        <li className="list-group-item container">
          <div className="row align-items-start">
            <div className="col">
              <h3 className="proficiencies">Note Taker</h3>
              <div className="project-details p-2">
                <a href="https://note-taker-lyou-d2ec1363746b.herokuapp.com/">
                  <img src={noteTaker} alt='noteTaker' className="project-image mt-2 mb-2" />
                </a>
                <h5>Github Repo:<a href="https://github.com/libbyou/note-taker" className="project-link"> https://github.com/libbyou/note-taker</a></h5>
                <h5>Deployed Site: <a href="https://note-taker-lyou-d2ec1363746b.herokuapp.com/" className="project-link">https://note-taker-lyou-d2ec1363746b.herokuapp.com/</a></h5>
                <p>Node/Express</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}

export default Projects;