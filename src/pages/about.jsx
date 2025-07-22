import React from 'react';
import { Link } from 'react-router-dom';
import { FiAward, FiUsers, FiShield, FiArrowUpRight } from 'react-icons/fi';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

// Image imports from the gallery to be used on this page
import aboutHeroImg from "../assets/img/gallery/7.jpg";
import storyImg from "../assets/img/gallery/4.jpg";
import teamImg from "../assets/img/gallery/5.jpg";

const stats = [
  { icon: FiAward, value: '15+', label: 'Years of Experience' },
  { icon: FiUsers, value: '1000+', label: 'Satisfied Customers' },
  { icon: FiShield, value: 'I-CAR Gold', label: 'Certified Technicians' },
];

const values = [
    { name: 'Craftsmanship', description: 'We treat every vehicle as a work of art, applying meticulous attention to detail from start to finish.' },
    { name: 'Integrity', description: 'Honest advice, transparent pricing, and a commitment to doing what’s right for our customers.' },
    { name: 'Innovation', description: 'We invest in the latest technology and training to ensure we’re always delivering the best possible results.' },
];

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-neutral-950 text-white pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
          <img src={aboutHeroImg} alt="A restored vintage truck showcasing craftsmanship" className="absolute inset-0 w-full h-full object-cover animate-ken-burns" />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-tight">
              Driven by Passion, Defined by Quality.
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              Learn the story behind Texas Five Star Paint & Body—a local business built on a foundation of family, expertise, and an unwavering commitment to automotive perfection.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-neutral-900 py-16 sm:py-20">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-4">
                            <stat.icon className="text-red-600 mx-auto mb-4" size={48} />
                            <p className="text-4xl font-bold">{stat.value}</p>
                            <p className="text-gray-400 mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-right">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Our Story: From a Small Garage to Garland's Go-To Shop</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Founded over 15 years ago with a simple mission—to provide dealership-quality repairs with the care and integrity of a local, family-owned business—Texas Five Star Paint & Body has grown into one of the most trusted names in the DFW area.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our journey began with a passion for automotive excellence. We saw a need for a body shop that didn't just fix cars, but restored them with an artist's touch. Today, our state-of-the-art facility is equipped with the industry's best technology, but our core values remain the same: honest work, transparent communication, and a five-star finish, every time.
              </p>
            </div>
            <div className="animate-fade-in-left">
              <img src={storyImg} alt="A classic American muscle car with a new custom red paint finish" className="rounded-2xl shadow-2xl w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="bg-neutral-900 py-16 sm:py-24 lg:py-32">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Core Values</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                    These principles guide every decision we make and every vehicle we repair.
                </p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {values.map((value, i) => (
                        <div key={i} className="bg-neutral-800 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-white mb-2">{value.name}</h3>
                            <p className="text-gray-400">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter">
              Experience the Five-Star Difference
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Ready to work with a team that truly cares about your vehicle? Contact us today for a free, no-obligation estimate and let us show you why we're Garland's top choice.
            </p>
            <a
              href="https://www.google.com/maps/place/Texas+Five+Star+Paint+%26+Body/@32.9210948,-96.6353575,16z/data=!3m1!4b1!4m6!3m5!1s0x864c1d1967da4713:0x2a5fdb5d453210e!8m2!3d32.9210903!4d-96.6327826!16s%2Fg%2F11rndn42mm?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-md text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50"
            >
              Get Directions
              <FiArrowUpRight />
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
