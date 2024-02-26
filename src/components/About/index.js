import React from "react"
import PortfolioImage from "../../assets/avatar.png"
import {DiJqueryLogo,DiMongodb} from "react-icons/di"
import {
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaBootstrap,
    FaNode,
    FaReact,
    FaNpm,
} from "react-icons/fa"
import {
    SiMysql,
    SiHeroku,
    SiWebpack,
    SiRedux,
    SiReactrouter,
    SiGraphql,
  } from "react-icons/si"

function About () {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img 
                    src={PortfolioImage}
                    className="my-2"
                    style={{width: "60%"}}
                    alt="cover">
                    </img>
                </div>

                <div className="col-6">
                    <h1 id="about">About Me</h1>
                    <h6 style={{width:"80%",justifyContent:"center"}}id="about">
                        Hello, My name is Joseph Vasquez. I am a full stack
                        software engineer. I attended the University of Texas at 
                        Austin's full stack software development program. I 
                        specialize in object-oriented programming and progressive web 
                        applications using MongoDb,Express,React, NodeJs,and Javascript 
                        stack.
                    </h6>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h4>Technical Skill Set</h4>
                    <h2>
                        <FaHtml5 />
                        <FaCss3Alt />
                        <FaJsSquare />
                        <DiJqueryLogo />
                        <FaReact />
                        <SiRedux />
                        <FaBootstrap />
                        <FaNode />
                        <SiMysql />
                        <DiMongodb />
                        <SiGraphql />
                    </h2>
                </div>
            </div>
        </div>
    )
}
