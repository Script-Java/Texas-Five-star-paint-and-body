import Navbar from "../components/navbar"
import Footer from "../components/footer"
import LandingBanner from "../components/landingBanner"
import Testimonials from "../components/testimonial"
import BeforeAfter from "../components/beforeAfter"


const Homepage = ()=> {

    return (
        <div className="">
            <Navbar/>
            <LandingBanner/>
            <Testimonials/>
            <BeforeAfter/>
            <Footer/>
        </div>
    )
}

export default Homepage