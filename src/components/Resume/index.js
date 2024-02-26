import React from "react"
/* TODO: import resume /add actual resume to assets */
import DevResume from "xxxxxxxxxxxxxxxx"
import { DiJqueryLogo, DiMongodb } from "react-icons/di";
import {Container,Row,Col} from "react-bootstrap"
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
  } from "react-icons/fa";
  import {
    SiMysql,
    SiHeroku,
    SiWebpack,
    SiRedux,
    SiReactrouter,
    SiGraphql,
  } from "react-icons/si";



function Resume () {
    return (
        <Container className="container my-5">
            <h1>Proficiencies</h1>
            <br></br>
            <br></br>
            <Row>
            <br></br>
                <Col>
                <h5>• Github <FaGithub/></h5>
                <h5>• Git <FaGitAlt/></h5>
                <h5>• Heroku <SiHeroku/></h5>
                <h5>• WebPack <SiWebpack/></h5>
            <br></br>
                <a href={DevResume} target="_blank" rel="noreferrer">
                    <h5>View My Resume</h5>
                </a>
                </Col>

                <Col>
                <h3 id="resume">Front-End:</h3>
            <br></br> 
                <h5>• HTML <FaHtml5/></h5>
                <h5>• CSS <FaCss3Alt/></h5>
                <h5>• Javascript <FaJsSquare/></h5>
                <h5>• JQuery <DiJqueryLogo/></h5>
                <h5>• Responsive Design</h5>
                <h5>• React <FaReact/><SiReactrouter/><SiRedux/></h5>
                <h5>• bootstrap <FaBootstrap/></h5>
                </Col>

                <Col>
                <h3 id="resume">Back-End:</h3>
            <br></br>
                <h5>• APIs/Rest</h5>
                <h5>• Express</h5>
                <h5>• MySQL/Sequelize <SiMysql/></h5>
                <h5>• MongoDB/Mongoose <DiMongodb/></h5>
                <h5>• GraphQL <SiGraphql/></h5>
                </Col>
            </Row>



        <script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js">
        </script>

        <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" 
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" 
        crossorigin="anonymous">
        </script>


        </Container>
    )
}