import githubIcon from '../assets/394187_github_icon.png';
import linkedinIcon from '../assets/317725_linkedin_social_icon.png'
import leetcodeIcon from '../assets/LeetCodeIcon.png'

function Footer () {
    return (
        <footer className="d-flex justify-content-center align-items-end">
            <a href = "https://github.com/libbyou"><img src={githubIcon} className="icon rounded" alt="github icon"/></a>
            <a href = "https://www.linkedin.com/"><img src={linkedinIcon} className="icon rounded" alt="linkedin icon"/></a>
            <a href = "https://leetcode.com/"><img src={leetcodeIcon} className="icon rounded" alt="linkedin icon"/></a>
        </footer>
)}

export default Footer;