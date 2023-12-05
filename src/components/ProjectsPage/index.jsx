import { useState } from "react"
import "./styles.css"

export default function ProjectsPage(){
    const [tempoCount, setTempoCount] = useState(1)
    let tempoImg = <>
        {/* <img src="tempoScreenshots/Home.jpg" alt="" className="projectImg"/> */}
    </>

    switch(tempoCount){
        case 1:
            tempoImg = <><img src="tempoScreenshots/Home.jpg" alt="" className="projectImg"/></>
            break
        case 2:
            tempoImg = <><img src="tempoScreenshots/ArtistIndex.jpg" alt="" className="projectImg"/></>
            break
        case 3:
            tempoImg = <><img src="tempoScreenshots/ArtistDetail.jpg" alt="" className="projectImg"/></>
            break
    }
    function handlePrev(event){
        let projName = event.target.className
        switch(projName){
            case 'tempoBtn btn':
                if(tempoCount>=2){
                    setTempoCount(tempoCount-1)
                }
                else{
                    setTempoCount(3)
                }
                break
            default:
                console.log("No such project")
        }
    }

    function handleNext(event){
        let projName = event.target.className
        // console.log(projName)
        switch(projName){
            case 'tempoBtn btn':
                if(tempoCount<=2){
                    setTempoCount(tempoCount+1)
                }
                else{
                    setTempoCount(1)
                }
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
                    <h2> <a href="https://tempoproject-1ccff4d917c0.herokuapp.com/home/" rel="noreferrer" target="_blank">Tempo</a></h2>
                    <div className="tempoPics">
                        <button onClick={handlePrev} className="tempoBtn btn">P<br/>r<br/>e<br/>v</button>
                        {tempoImg}
                        <button onClick={handleNext} className="tempoBtn btn">N<br/>e<br/>x<br/>t</button>
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