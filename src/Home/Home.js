import React from "react";
import Navbar from './Navbar';
import Slider from './slider';
import About from "./About";
import BestServices from "./BestServices";
import GuaranteeSection from './GuaranteeSection';
import AdvantagesPage from "./AdvantagesPage";
import ServicesPage from './ServicesPage';
import Contact from './Contact';
import "./Home.css";

function Home() {
    return (
        <div className="Home">
            <Navbar />
            <section id="Slider">
                <Slider />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="best-services">
                <BestServices />
            </section>
            <section id="guarantee">
                <GuaranteeSection />
            </section>
            <section id="advantages">
                <AdvantagesPage />
            </section>
            <section id="services">
                <ServicesPage />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
}

export default Home;
