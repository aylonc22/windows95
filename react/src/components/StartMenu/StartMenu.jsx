import './StartMenu.scss';

// 🔧 Mock icons (replace with real paths later)
import windowsIcon from '../../assets/images/sidebar-image.png';
import linkedinIcon from  '../../assets/svg/LinkedIn.svg';// '../../assets/images/linkedin.png';
import githubIcon from  '../../assets/svg/GitHub.svg';//'../../assets/images/github.png';
import resumeIcon from '../../assets/images/resume.png';
import shutdownIcon from  '../../assets/images/sidebar-image.png';//'../../assets/images/shutdown.png';

export const StartMenu = () => {
  return (
    <div className="start-menu">
      <div className="start-menu__sidebar">
        <img src={windowsIcon} alt="Windows Logo" />
      </div>
      <div className="start-menu__list">
        <div className="start-menu__item">
          <img src={linkedinIcon} alt="LinkedIn" />
          <span>LinkedIn</span>
        </div>
        <div className="start-menu__item">
          <img src={githubIcon} alt="GitHub" />
          <span>GitHub</span>
        </div>
        <div className="start-menu__item">
          <img src={resumeIcon} alt="Resume" />
          <span>Resume</span>
        </div>
        <div className="start-menu__item">
          <img src={shutdownIcon} alt="Shut Down" />
          <span>Shut Down</span>
        </div>
      </div>
    </div>
  );
};
