import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiTool, FiDroplet, FiStar, FiShield, FiCheck } from 'react-icons/fi';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

// Image imports
import heroBg from "../assets/img/10.jpg";
import collisionImg from "../assets/img/11.jpg";
import paintImg from "../assets/img/12.jpg";
import restorationImg from "../assets/img/9.jpg";
import pdrImg from "../assets/img/13.jpg";

const servicesData = [
  {
    icon: FiTool,
    title: 'Collision Repair',
    description: 'Our I-CAR Gold Class certified technicians use state-of-the-art equipment to restore your vehicle to its pre-accident condition, ensuring both structural integrity and a flawless finish.',
    image: collisionImg,
    details: ['Frame Straightening', 'Panel Replacement', 'Bumper & Fender Repair'],
  },
  {
    icon: FiDroplet,
    title: 'Custom Paint & Refinishing',
    description: 'From factory color matching with our computerized system to full custom paint jobs, we use premium materials to deliver a stunning, durable finish that stands out.',
    image: paintImg,
    details: ['Factory Color Matching', 'Custom Colors & Finishes', 'Paint Correction & Polishing'],
  },
  {
    icon: FiStar,
    title: 'Auto Restoration',
    description: 'We have a passion for bringing classic and modern vehicles back to their former glory. Our meticulous restoration process covers everything from bodywork to the final polish.',
    image: restorationImg,
    details: ['Classic & Muscle Cars', 'Frame-Off Restorations', 'Period-Correct Finishing'],
  },
  {
    icon: FiShield,
    title: 'Paintless Dent Repair (PDR)',
    description: 'The perfect solution for hail damage, door dings, and minor dents. PDR is a fast, affordable, and effective way to repair your vehicle while preserving its original paint.',
    image: pdrImg,
    details: ['Hail Damage Specialists', 'Minor Dent & Ding Removal', 'Maintains Factory Finish'],
  },
];

const cosmeticServices = [
    "Paint Protection Film (PPF)",
    "Ceramic & Graphene Coatings",
    "Vinyl Wraps & Graphics",
    "Suspension Lifts & Lowering",
    "Headlight Restoration",
    "Lease Return Reconditioning"
];

const ServiceCard = ({ icon: Icon, title, description, image, details }) => (
  <div className="bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl group transition-all duration-300 hover:scale-105 hover:shadow-red-900/50">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-4 left-4 flex items-center gap-3">
        <div className="bg-red-600 p-3 rounded-full">
          <Icon className="text-white" size={24} />
        </div>
        <h3 className="text-2xl font-bold text-white drop-shadow-lg">{title}</h3>
      </div>
    </div>
    <div className="p-6">
      <p className="text-gray-400 mb-4">{description}</p>
      <ul className="space-y-2">
        {details.map((detail, i) => (
          <li key={i} className="flex items-center gap-3 text-gray-300">
            <FiCheck className="text-red-500" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-neutral-950 text-white pt-24">
        {/* Announcement Banner */}
        <div className="bg-red-600">
          <div className="max-w-[85rem] px-4 py-3 sm:px-6 lg:px-8 mx-auto">
            <p className="text-white text-center font-semibold">
              Up to $500 Deductible Forgiveness - Ask Us How!
            </p>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
          <img src={heroBg} alt="Expert auto body work in progress" className="absolute inset-0 w-full h-full object-cover animate-ken-burns" />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-tight">
              Five-Star Quality, Down to the Last Detail
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              From complex collision repairs to showroom-quality finishes, our certified experts combine advanced technology with decades of hands-on experience to deliver unparalleled results.
            </p>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {servicesData.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Cosmetic & Other Services */}
        <section className="bg-neutral-900 py-16 sm:py-24 lg:py-32">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Cosmetic & Specialty Services</h2>
              <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                  Elevate your vehicle's appearance and protection with our range of specialty cosmetic services.
              </p>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
                  {cosmeticServices.map((service, i) => (
                      <div key={i} className="bg-neutral-800 p-4 rounded-lg flex items-center gap-3">
                          <FiCheck className="text-red-500 flex-shrink-0" />
                          <span className="text-gray-200">{service}</span>
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

export default ServicesPage;
