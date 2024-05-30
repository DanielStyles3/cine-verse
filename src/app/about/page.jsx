import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About CineVerse</h2>
        <p className="text-lg leading-relaxed mb-6">
          Welcome to CineVerse, your ultimate destination for everything movies! From the latest blockbusters to timeless classics, we bring you an extensive collection of films from around the globe. At CineVerse, we believe in the power of storytelling and the magic of cinema.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Our platform is designed for movie enthusiasts by movie enthusiasts. Whether you're a fan of action, drama, comedy, or indie films, we've got something for everyone. Dive deep into our comprehensive database, read reviews, watch trailers, and stay updated with the latest news and releases in the movie world.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          At CineVerse, we are committed to providing you with a seamless and enjoyable experience. Our user-friendly interface and personalized recommendations ensure that you find the perfect movie for any mood or occasion. Join our community of movie lovers and explore the universe of cinema with us!
        </p>
        <div className="flex justify-center mt-8">
          <a href="/contact" className="bg-coquelicot hover:bg-red-700 text-white font-bold py-3 px-6 rounded">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
