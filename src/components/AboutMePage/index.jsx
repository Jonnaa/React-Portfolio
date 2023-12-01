import "./styles.css"

export default function AboutMePage(){

    return (
        <div className="aboutmeDiv">
            <h1>About Me</h1>
            <p>
                Hello! I am a software engineer with an educational background in computer science and a hands-on full-stack bootcamp. <br /><br />

                My past includes going to college for 3 years for a computer science degree. I decided to learn a specific set of skills rather than the basics of many topics, so I decided to seek a coding bootcamp. I have also worked in movie theaters for 3 years and was a highly valued team member. I received team member of the month for the opening month of a movie theater. <br /><br />

                I am sharp and can pick things up surprisingly quickly. I am dedicated and hard-working.<br /><br />

                My hobbies include playing video games, watching movies/shows/videos, and bouldering.
            </p>

            <h2>Skills</h2>
            <div className="iconsDiv">
                <div className="icon">
                    <img src="skillsIcons/react.svg" alt="" className="iconImg" title="React"/>
                    <p>React</p>
                </div>
                <div className="icon">
                    <img src="skillsIcons/python-removebg-preview.png" alt="" className="iconImg" />
                    <p>Python</p>
                </div>
                <div className="icon">
                    <img src="skillsIcons/js.png" alt="" className="iconImg" />
                    <p>JavaScript</p>
                </div>
                <div className="icon">
                    <img src="skillsIcons/html.png" alt="" className="iconImg" />
                    <p>HTML</p>
                </div>
                <div className="icon">
                    <img src="skillsIcons/css-removebg-preview.png" alt="" className="iconImg" />
                    <p>CSS</p>
                </div>
                <div className="icon">
                    <img src="skillsIcons/mdb.svg" alt="" className="iconImg" />
                    <p>MongoDB</p>
                </div>
                <div className="icon">
                    <img src="skillsIcons/nodejs.png" alt="" className="iconImg ex" />
                    <p>NodeJS</p>
                </div>
                <div className="icon">
                    <img src="skillsIcons/tailwind.png" alt="" className="iconImg" />
                    <p>Tailwind</p>
                </div>
                <div className="icon">
                    <img src="skillsIcons/ejs.png" alt="" className="iconImg ex" />
                    <p>ExpressJS</p>
                </div>
                <div className="icon">
                    <img src="skillsIcons/psql.png" alt="" className="iconImg" />
                    <p>PostgreSQL</p>
                </div>
            </div>
        </div>
    )
}