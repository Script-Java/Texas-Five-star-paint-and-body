import Navbar from "../components/navbar"
import Footer from "../components/footer"
import LandingBanner from "../components/landingBanner"
import Testimonials from "../components/testimonial"
import BeforeAfter from "../components/beforeAfter"

const Homepage = ()=> {

    return (
        <div className="">
            <Navbar></Navbar>
            <LandingBanner></LandingBanner>
            <Testimonials></Testimonials>
            <BeforeAfter></BeforeAfter>
            <Footer></Footer>
        </div>
    )
}

export default Homepage