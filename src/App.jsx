import Header from "./components/header/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from "./components/main/Main";
import Project from "./components/proyecto/Project";
import Skill from "./components/Skills/Skill";
import Contact from "./components/contacto/Contact";
import BannerPrincipal from "./components/informacion/BannerPrincipal";
import Footer from "./components/footer/Footer";
import React from 'react'
function App() {
    return (
        <div>
            <Header/>
            <Router>

                <div className="p-3">
              
                    <Routes>
                        <Route path='/'
                            element={<Main/>}/>
                        <Route path='/home'
                            element={<Main/>}/>
                        <Route path='/project'
                            element={<Project/>}/>
                        <Route path='/contact'
                            element={<Contact/>}/>
                        <Route path="/skill"
                            element={<Skill/>}/>
                    </Routes>
                </div>


            </Router>
            <Footer/>
        </div>


    );

}

export default App;
