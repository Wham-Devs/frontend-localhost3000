import { useState } from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import ConcertGoEdit from "./pages/ConcertGoEdit";
import ConcertGoIndex from "./pages/ConcertGoIndex";
import ConcertGoNew from "./pages/ConcertGoNew";
import ConcertGoProtectedIndex from "./pages/ConcertGoProtectedIndex";
import ConcertGoShow from "./pages/ConcertGoShow";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import ConcertGoFAQ from "./pages/ConcertGoFAQ";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import mockEvents from "./mockEvents";
import mockUsers from "./mockUsers";


function App() {

  const [currentEvent, setCurrentEvent] = useState(mockEvents)

  const updateEvent = (event, id) => {
    console.log("event:", event)
    console.log("id:", id)
  }

  
  return (
   <>
   <Header />
   <Routes>
    <Route path="/signin" element={ <SignIn /> } />
    <Route path="/signup" element={ <SignUp /> } />
    <Route path="/" element={ <Home /> } />
    <Route path="/concertgoedit/:id" element={ <ConcertGoEdit currentEvent={currentEvent} updateEvent = {updateEvent} /> } />
    <Route path="/concertgoindex" element={ <ConcertGoIndex currentEvent={ currentEvent }/> } />
    <Route path="/concertgoprotectedindex" element={ <ConcertGoProtectedIndex /> } />
    <Route path="/concertgonew" element={ <ConcertGoNew /> } />
    <Route path="/concertgoshow/:id" element={ <ConcertGoShow currentEvent={currentEvent} /> } />
    <Route path="/aboutus" element={ <AboutUs /> } />
    <Route path="/concertgofaqs" element={ <ConcertGoFAQ /> } />
    <Route path="/*" element={ <NotFound /> } />
   </Routes>   
   <Footer />
   </>
  )
}

export default App;