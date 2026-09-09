import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/homePage";
import Events from "./pages/events/eventsPage";
import Contact from "./pages/contact/contactPage";
import AboutPage from "./pages/about/aboutPage";
import Layout from "./components/layout";
import CoursePage from "./pages/courses/coursePage";
import CoursesList from "./pages/courses/coursesList";

function App(){
    return(
        <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/cursos" element={<CoursesList/>}/>
                <Route path="/cursos/:slug" element={<CoursePage/>}/>
                <Route path="/eventos" element={<Events/>}/>
                <Route path="/contato" element={<Contact/>}/>
                <Route path="/quem-somos" element={<AboutPage/>}/>
            </Routes>
        </Layout>
        </BrowserRouter>
    );
}

export default App;