import { useState } from "react"
import "./styles.css"

export default function ProjectsPage(){
    const [tempoCount, setTempoCount] = useState(1)
    const [kdramasCount, setKdramasCount] = useState(1)
    let tempoImg = <></>, kdramasImg=<></>

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
    switch(kdramasCount){
        case 1:
            kdramasImg = <><img src="kdramasScreenshots/Home Page.jpg" alt="" className="projectImg"/></>
            break
        case 2:
            kdramasImg = <><img src="kdramasScreenshots/Reviews.jpg" alt="" className="projectImg"/></>
            break
        case 3:
            kdramasImg = <><img src="kdramasScreenshots/Review Details.jpg" alt="" className="projectImg"/></>
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
                case 'kdramasBtn btn':
                    if(kdramasCount>=2){
                        setKdramasCount(kdramasCount-1)
                    }
                    else{
                        setKdramasCount(3)
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
            case 'kdramasBtn btn':
                if(kdramasCount<=2){
                    setKdramasCount(kdramasCount+1)
                }
                else{
                    setKdramasCount(1)
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
                    <div className="projPics">
                        <button onClick={handlePrev} className="tempoBtn btn">P<br/>r<br/>e<br/>v</button>
                        {tempoImg}
                        <button onClick={handleNext} className="tempoBtn btn">N<br/>e<br/>x<br/>t</button>
                    </div>
                </div>
                <div className="kdramas">
                    <h2><a href="https://kdramas-4e345146c0e4.herokuapp.com" rel="noreferrer" target="_blank">K-Dramas</a></h2>
                    <div className="projPics">
                        <button onClick={handlePrev} className="kdramasBtn btn">P<br/>r<br/>e<br/>v</button>
                        {kdramasImg}
                        <button onClick={handleNext} className="kdramasBtn btn">N<br/>e<br/>x<br/>t</button>
                    </div>
                </div>
                <div className="kit">

                </div>
            </div>
        </div>
    )
}