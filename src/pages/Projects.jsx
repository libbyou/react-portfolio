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
          <li className="list-group-item">
            <img src={WatchTogethr} alt='WatchTogethr' className='100%'/>
            <h4>WatchTogethr</h4>
          </li>
          <li className="list-group-item">
            <img src={BoardGame}className='100%'/>
            <h4>WatchTogethr</h4>
          </li>
          <li className="list-group-item">
            <img src={BreweryExperience}className='100%'/>
            <h4>WatchTogethr</h4>
          </li>
          <li className="list-group-item">
            <img src={WorkdayScheduler}className='100%'/>
            <h4>WatchTogethr</h4>
          </li>
          <li className="list-group-item">
            <img src={PasswordGenerator}className='100%'/>
            <h4>WatchTogethr</h4>
          </li>
          <li className="list-group-item">
            <img src={noteTaker}className='100%'/>
            <h4>WatchTogethr</h4>
          </li>
      </ul>
    );
  }
  
  export default Projects;