import React ,{useState ,useEffect} from "react";
import necleo from '../images/Nucleo.png';
import app from '../images/app.png';
import collapse from '../images/collapse.png';
import help from '../images/help.png';
import feedback from '../images/feedback.png';
import project from '../images/project.png';
import sample from '../images/sample.png';
import intro from '../images/intro.png';
import menu from '../images/menu.png';
import { NavLink } from 'react-router-dom';;
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMyProjectsActive, setIsMyProjectsActive] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
    setIsMyProjectsActive(!isOpen);
  };
    const menuItem=[
        {
            path:"/my-projects",
            name:"My Projects",
            img:<img src={project}/>
        },
        {
            path:"/sample-projects",
            name:"Sample Projects",
            img:<img src={sample}/>
        },
        {
            path:"/apps",
            name:"Apps",
            img:<img src={app}/>
        },
        {
            path:"/intro-to-necleo",
            name:"Intro to necleo",
            img:<img src={intro}/>
        },
        {
            path:"/help",
            name:"Help & Support",
            img:<img src={help}/>
        },
        {
            path:"/feedback",
            name:"Feedback",
            img:<img src={feedback}/>
        },
        {
            path:"/collapse",
            name:"Collapse",
            img:<img src={collapse}/>
        },
       ];

    return(
                
                <div className="container">
                <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
                 {/* <h1 className="logo"><img src={necleo}/></h1>  */}
                    <div className="top_section">
                        
                        <div style={{marginLeft: isOpen ? "0px" : "0px"}} className="bars">
                            <img src={menu} onClick={toggle}/>
                        </div>
                        
                    </div>
                    <div><h1 style={{display: isOpen ? "block" : "none"}} className="logo" ><img src={necleo}/></h1></div>
                         {
                            
                        menuItem.map((item, index)=>(
                            <NavLink to={item.path} key={index} className="link" activeClassName={isOpen ? "active" : ""}>
                                
                                <div style={{display: isOpen ? "flex" : "none"}} className="link_text">
                                    
                                    <div className="icon">{item.img}</div>
                                    <div className="text">{item.name}</div>
                                </div>
                            </NavLink> 
                      
                        ))}
                </div>
                <main>{children}</main>
             </div>
         );
};
export default Sidebar;