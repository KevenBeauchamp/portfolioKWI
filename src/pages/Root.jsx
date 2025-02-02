import { Outlet } from "react-router-dom";
import MainNavigation from "../component/MainNavigation";
import igPicture from "../assets/instagram.png";
import linkedinPicture from "../assets/linkedin.png";
import githubPicture from "../assets/github.png";
import classes from "../css/Root.module.css"
export default function RootPage(){
    return(
        <>
            <div className={classes.content}>
                <div className={classes.left}>
                    
                    <div className={classes.name}>
                        <h2>Keven </h2>
                    </div>
                    <div className={classes.navigation}>
                        <MainNavigation />
                    </div>
                    <div className={classes.social}>
                        <span><a href="http://"><img src={igPicture} alt="" srcset="" width="25px" /></a></span>
                        <span><a href="https://www.linkedin.com/in/keven-beauchamp-276551298" target="_blank"><img src={linkedinPicture} alt="" srcset="" width="25px"/></a></span>
                        <span><a href="https://github.com/KevenBeauchamp" target="_blank"><img src={githubPicture} alt="" srcset="" width="25px" /></a></span>
                    </div>
                </div>
                <div className={classes.showcontent}>
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
            
        </>
    )
}