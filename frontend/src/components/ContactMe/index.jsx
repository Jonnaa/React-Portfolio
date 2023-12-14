export default function ContactMe(){

    return (
        <div className="footerDiv">
            <div className="links">
                {/* GitHub Link */}
                <a href="https://github.com/Jonnaa" rel="noreferrer" target="_blank" id="gitHub">
                    <img src="icons/github-logo.png" alt="dark github logo" id="darkGit" />
                    <img src="icons/github-mark-white.png" alt="light github logo" id="lightGit" />
                </a>

                {/* Resume Link */}
                <a href="https://docs.google.com/document/d/1Ax3boPILXauHVPWhFwN68AZ32XCmoPduiGOSoLN0tVo/edit?usp=sharing" rel="noreferrer" target="_blank" id="resume">
                    <button className="resumeBtn">
                        Resume
                    </button>
                </a>
                

                {/* LinkedIn Link */}
                <a href="https://www.linkedin.com/in/jonathannavarroswe/" rel="noreferrer" target="_blank" id="linkedIn">
                    <img src="icons/linkedInLogo.png" alt="LinkedIn logo" id="darkLi" />
                    <img src="icons/In-White-128.png" alt="LinkedIn logo" id="lightLi" />
                </a>
            </div>
        </div>
    )
}