import "./styles.css"

export default function AboutMePage(){

    return (
        <div className="aboutmeDiv">
            <h1>About Me</h1>
            <p id="aboutMeP">
                Hello! I am a software engineer with an educational background in computer science and a hands-on experience at a full-stack bootcamp.<br /><br />

                I have successfully created full-stack applications within one-week timeframes and deployed them onto a cloud platform. Additionally, I implemented authorization and authentication, utilizing Spotify's API, in a group project that also had a one-week timeframe.<br /><br />

                I am a dedicated, hard-working, quick learner who always aims to exceed expectations. Fueled by an unwavering love for problem-solving, a passion for excellence, and a relentless pursuit of improvement to every project.<br /><br />

                My past includes three years of pursuing a computer science degree, earning around 80 credits. Recognizing my need for a more hands-on learning environment to learn a specific set of skills, I chose to enroll in a coding bootcamp. I have also worked in movie theaters for a total of three years and was a highly valued team member at each location. I received the team member of the month award during the opening month of a movie theater, which at the time had around 70 employees. <br /><br />

                Beyond my professional life, my hobbies include playing video games, watching movies and shows, and bouldering.
            </p>
            <div className="line"></div>
            <h2 className="skillsH2">Skills</h2>
            <div className="iconsDiv">
                <div className="icon">
                    <img src="skillsIcons/react.svg" alt="" className="iconImg" title="React"/>
                    <p className="iconP">React</p>
                </div>
                <div className="icon">
                    <img src="skillsIcons/python-removebg-preview.png" alt="" className="iconImg" />
                    <p className="iconP">Python</p>
                </div>
                <div className="icon">
                    <img src="skillsIcons/js.png" alt="" className="iconImg" />
                    <p className="iconP">JavaScript</p>
                </div>
                <div className="icon">
                    <img src="skillsIcons/html.png" alt="" className="iconImg" />
                    <p className="iconP">HTML</p>
                </div>
                <div className="icon">
                    <img src="skillsIcons/css-removebg-preview.png" alt="" className="iconImg" />
                    <p className="iconP">CSS</p>
                </div>
                <div className="icon">
                    <img src="skillsIcons/mdb.svg" alt="" className="iconImg" />
                    <p className="iconP">MongoDB</p>
                </div>
                <div className="icon">
                    <img src="skillsIcons/nodejs.png" alt="" className="iconImg ex" />
                    <p className="iconP">NodeJS</p>
                </div>
                <div className="icon">
                    <img src="skillsIcons/tailwind.png" alt="" className="iconImg" />
                    <p className="iconP">Tailwind</p>
                </div>
                <div className="icon">
                    <img src="skillsIcons/ejs.png" alt="" className="iconImg ex" />
                    <p className="iconP">ExpressJS</p>
                </div>
                <div className="icon">
                    <img src="skillsIcons/psql.png" alt="" className="iconImg" />
                    <p className="iconP">PostgreSQL</p>
                </div>
            </div>
        </div>
    )
}