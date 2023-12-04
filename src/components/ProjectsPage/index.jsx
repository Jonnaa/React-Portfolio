import { useState } from "react"
import "./styles.css"

export default function ProjectsPage(){
    const [tempoCount, setTempoCount] = useState(1)
    let tempoImg = <>
        <img src="tempoScreenshots/Home.jpg" alt="" className="projectImg"/>
    </>

    function handlePrev(event){
        let projName = event.target.className
        switch(projName){
            case 'tempoBtn':
                console.log("Tempo")
                break
            default:
                console.log("No such project")
        }
    }

    function handleNext(event){
        let projName = event.target.className
        switch(projName){
            case 'tempoBtn':
                console.log("Tempo")
                break
            default:
                console.log("No such project")
        }
    }
    return (
        <div className="projDiv">
            <h1>Projects Page</h1>

            <div className="projectsDiv">
                <div className="tempo">
                    <h2>Tempo</h2>
                    <div className="tempoPics">
                        <button onClick={handlePrev} className="tempoBtn">Prev</button>
                        {tempoImg}
                        <button onClick={handleNext} className="tempoBtn">Next</button>

                    </div>
                </div>
                <div className="kdramas">

                </div>
                <div className="kit">

                </div>
            </div>
        </div>
    )
}