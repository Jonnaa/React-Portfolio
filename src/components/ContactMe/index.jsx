export default function ContactMe(){

    return (
        <div className="footerDiv">
            <div className="links">
                {/* GitHub Link */}
                <a href="https://github.com/Jonnaa" rel="noreferrer" target="_blank" id="gitHub">
                    <img src="icons/github-logo.png" alt="dark github logo" id="darkGit" />
                    <img src="icons/github-mark-white.png" alt="light github logo" id="lightGit" />
                </a>
                {/* LinkedIn Link */}
                <a href="https://www.linkedin.com/in/jonathannavarroswe/" id="linkedIn">
                    <img src="icons/linkedInLogo.png" alt="LinkedIn logo" id="darkLi" />
                    <img src="icons/In-White-128.png" alt="LinkedIn logo" id="lightLi" />
                </a>
            </div>
        </div>
    )
}