import { useState } from "react"
import "./styles.css"

export default function ProjectsPage(){
    const [tempoCount, setTempoCount] = useState(1)
    const [kdramasCount, setKdramasCount] = useState(1)
    const [kitCount, setKitCount] = useState(1)
    let tempoImg = <></>, kdramasImg=<></>, kitImg=<></>

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
    switch(kitCount){
        case 1:
            kitImg = <><img src="kitScreenshots/Landing Page.jpg" alt="" className="projectImg"/></>
            break
        case 2:
            kitImg = <><img src="kitScreenshots/Post Details.jpg" alt="" className="projectImg"/></>
            break
        case 3:
            kitImg = <><img src="kitScreenshots/Login.jpg" alt="" className="projectImg"/></>
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
                case 'kitBtn btn':
                    if(kitCount>=2){
                        setKitCount(kitCount-1)
                    }
                    else{
                        setKitCount(3)
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
            case 'kitBtn btn':
                if(kitCount<=2){
                    setKitCount(kitCount+1)
                }
                else{
                    setKitCount(1)
                }
                break
            default:
                console.log("No such project")
        }
    }
    return (
        <div className="projDiv">
            <h1>Projects</h1>

            <div className="projectsDiv">
                <div className="tempo">
                    <h2> <a href="https://tempoproject-1ccff4d917c0.herokuapp.com/home/" rel="noreferrer" target="_blank">Tempo</a></h2>
                    <div className="projPics">
                        <button onClick={handlePrev} className="tempoBtn btn">p<br/>r<br/>e<br/>v</button>
                        {tempoImg}
                        <button onClick={handleNext} className="tempoBtn btn">n<br/>e<br/>x<br/>t</button>
                    </div>
                    <p className="projDesc">
                        Full-stack application that utilizes Spotify's API to display artists, top tracks, and lets users play songs. <br /><br />
                        Built with: Python, Django, PSQL <br /><br />
                        <div className="projGit">
                            | <a href="https://github.com/amerazo/spotify_clone" rel="noreferrer" target="_blank">GitHub</a> | <a href="https://tempoproject-1ccff4d917c0.herokuapp.com/home/" rel="noreferrer" target="_blank">Website</a> |
                        </div>
                    </p>
                </div>
                <div className="line"></div>
                <div className="kdramas">
                    <h2><a href="https://kdramas-4e345146c0e4.herokuapp.com" rel="noreferrer" target="_blank">K-Dramas</a></h2>
                    <div className="projPics">
                        <button onClick={handlePrev} className="kdramasBtn btn">p<br/>r<br/>e<br/>v</button>
                        {kdramasImg}
                        <button onClick={handleNext} className="kdramasBtn btn">n<br/>e<br/>x<br/>t</button>
                    </div>
                    <p className="projDesc">
                        Full-stack application that displays K-Dramas with reviews, and allows the user to add K-Dramas to a watchlist. <br /><br />
                        Built with: MongoDB, Express.js, Node.js (MEN stack) <br /> <br />
                        <div className="projGit">
                            | <a href="https://github.com/Jonnaa/KDramaWatchList" rel="noreferrer" target="_blank">GitHub</a> | <a href="https://kdramas-4e345146c0e4.herokuapp.com/" rel="noreferrer" target="_blank">Website</a> |
                        </div>
                    </p>
                </div>
                <div className="line"></div>
                <div className="kit">
                    <h2><a href="https://keepintouch-8d0a86903f9e.herokuapp.com/" rel="noreferrer" target="_blank">KIT</a></h2>
                    <div className="projPics">
                        <button onClick={handlePrev} className="kitBtn btn">p<br/>r<br/>e<br/>v</button>
                        {kitImg}
                        <button onClick={handleNext} className="kitBtn btn">n<br/>e<br/>x<br/>t</button>
                    </div>
                    <p className="projDesc">
                        KIT is a full-stack application that allows users to... Keep In Touch!
                        Users can sign up, upload pictures, and comment on pictures. <br /><br />
                        Built with: MongoDB, Express.js, React, Node.js (MERN stack) <br /><br />
                        <div className="projGit">
                            | <a href="https://github.com/Jonnaa/KIT" rel="noreferrer" target="_blank">GitHub</a> | <a href="https://keepintouch-8d0a86903f9e.herokuapp.com/" rel="noreferrer" target="_blank">Website</a> |
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}