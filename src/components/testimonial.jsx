import React from 'react';
import { FaStar, FaGoogle } from 'react-icons/fa';

const testimonialsData = [
  {
    quote: "My truck needed the hood, roof, and side panel painted. The team did a fantastic job for a terrific price. Mary is very professional and kept me informed. I highly recommend them!",
    name: "Fred Souza",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXbc1tPYkeNqGSuwfPR7ebINGs1zxW0tgsainR2KDtR7AqqRkVfmQ=w36-h36-p-rp-mo-br100",
    rating: 5,
  },
  {
    quote: "I wish I could give more than 5 stars! The best car related experience of my life! The owners were SO kind, so quick, and were even able to fix the existing bumper flawlessly!",
    name: "Kaela O",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXb9L_dnUxTPOEL4fZbMhMOFdU6p6x6VD5L4qNO30vo0gOOu9SA=w36-h36-p-rp-mo-br100",
    rating: 5,
  },
  {
    quote: "The staff was professional and friendly, and the service was top-notch. They went above and beyond to ensure that my car was repaired to perfection. The quality of workmanship is outstanding.",
    name: "Rasoul Bisokhan",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXw3tBKj72_h_o_ZcnVs8nopvKNVTPajWwGACTqMkpJZve6YdOy=w36-h36-p-rp-mo-br100",
    rating: 5,
  },
  {
    quote: "I took my 2013 Cadillac Escalade to Five Star Paint and Body for hail damage and I must say that I’m very pleased with the work, timing, and courtesy received. They all were so nice and respectable. Especially Mrs. Mary, every time I spoke with her was a pleasure. Thank you guys for your hard work and I definitely appreciate it thank you again.",
    name: "Brandon Matthews",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXg7C-17r1uN9R8YqofOkB7hG5IWRYuvznGQSfpdYYGj4JYqRs=w36-h36-p-rp-mo-br100",
    rating: 5,
  },
  {
    quote: "I would like to take a moment to express my sincere gratitude for the outstanding service I received from Mary and the team. Her thorough explanations and attentive approach made me feel comfortable throughout the entire process. I was particularly impressed by the efficiency with which my car was returned to me. The turn around time was remarkably quick, and the quality of the work exceeded my expectations. My vehicle now looks as good as new, and I couldn't be happier with the results. Thank you once again for making my car looks brand new again!",
    name: "Bella Moncada",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW1Eqa75cBYwPPNQMTbVu_QQpyltE8ScwlhrvY157DoQXn1Ih1Y0w=w36-h36-p-rp-mo-br100",
    rating: 5,
  },
];

const TestimonialCard = ({ quote, name, avatar, rating }) => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col h-full">
    <div className="flex items-center text-yellow-400 gap-1 mb-4">
      {[...Array(rating)].map((_, i) => <FaStar key={i} />)}
    </div>
    <blockquote className="text-gray-300 leading-relaxed flex-grow">"{quote}"</blockquote>
    <figcaption className="flex items-center gap-4 mt-6">
      <img
        className="w-12 h-12 rounded-full object-cover"
        src={avatar}
        alt={`Avatar of ${name}`}
        loading="lazy"
      />
      <div>
        <div className="font-bold text-white">{name}</div>
        <div className="text-sm text-gray-400">Verified Google Review</div>
      </div>
    </figcaption>
  </div>
);

const Testimonials = () => {
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <section className="bg-neutral-950 text-white py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Title and CTA */}
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight">
              Trusted by Drivers Across Garland
            </h2>
            <p className="mt-6 text-lg text-gray-400 max-w-lg">
              We're proud of our 5-star rating. But don't just take our word for it—see what our satisfied customers have to say about their experience.
            </p>
            <a
              href="https://www.google.com/maps/place/Texas+Five+Star+Paint+%26+Body/@32.9202014,-96.6320146,16.25z/data=!4m8!3m7!1s0x864c1d1967da4713:0x2a5fdb5d453210e!8m2!3d32.9210903!4d-96.6327826!9m1!1b1!16s%2Fg%2F11rndn42mm?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-md text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50"
            >
              Read All Reviews
              <FaGoogle />
            </a>
          </div>

          {/* Right Column: Scrolling Testimonials */}
          <div className="relative h-[600px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
            <div className="animate-marquee-vertical space-y-6">
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
