import React from "react"
import {IconContext} from "react-icons"
import {FaGithub,FaEnvelope,FaLinkedin,FaStackOverFlow} from "react-icons/fa"
import {Container,Row,Col} from 'react-bootstrap'

function Footer() {
    return (
        <Container>
            <IconContext.Provider value= {{size:"3em"}}>
                <footer>
                    <Row>
                        <col md={{span:4,offset:10}} style={{width:"20rem",marginBottom:"5rem"}}>
                        <a href="mailto:joey03v@gmail.com"><FaEnvelope/></a>
                        <a href="https://github.com/Joseph03V"><FaGithub/></a>
                        <a href="https://www.linkedin.com/in/joseph-v-a15259290/"><FaLinkedin/></a>
                        <a href="https://stackoverflow.com/users/23486805/joseph-v"><FaStackOverFlow/></a>
                        </col>
                    </Row>
                </footer>
            </IconContext.Provider>
        </Container>
    )
}


export default Footer