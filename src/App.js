import React, {useState} from 'react'
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ContactForm from "./components/Contact"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"



function App() {
    const [page,setPage] = useState("About me")
    const [categories] = useState([
        {name:"About"},
        {name: "Portfolio"},
        {name:"Contact",},
        {ame:"Resume",},
    ])


    const currentPage = () => {
        switch (page) {
            case "Portfolio":
                return <Portfolio/>
            case "Contact":
                return <ContactForm/>
            default:
                return <About/>
        }
    }


    return (
        <div>
            <Header 
            categories = {categories}
            page={page}
            setPage={setPage}
            > 
            </Header>
            <main>
                <div>{currentPage(page)}</div>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default App