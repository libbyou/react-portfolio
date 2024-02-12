import myResume from '../assets/ResumeLibbyYou.pdf';

function Resume() {
    return (
        <>
            <div className="d-flex flex-column">
                <h2 className="d-flex justify-content-start m-1">Resume</h2>
                <div className="mt-5 pt-5">
                    <h3 className="proficiencies">Front-End Proficiencies</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>Responsive Design</li>
                        <li>BootStrap</li>
                    </ul>
                    <h3 className="proficiencies">Back-End Proficiencies</h3>
                    <ul>
                        <li>Express</li>
                        <li>Node</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>APIs</li>
                        <li>GraphQL</li>
                        <li>REST</li>
                    </ul>
                    <iframe src="https://drive.google.com/file/d/12_Aav2vAc3whaclBzCIcNBNZ-L2uATDa/preview" width="100%" height="700px" allow="autoplay" id="embedResume">
                    </iframe>
                    <br></br>
                    <a href={myResume}download='ResumeLibbyYou.pdf' className="project-link">Click here to download my resume</a>
                </div>
            </div>
        </>
    )
}

export default Resume