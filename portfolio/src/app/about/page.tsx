import React from 'react';

const AboutPage: React.FC = () => {
    const name = 'Leonel';
    const age = 23;
    const location = 'McAllen, TX';
    const occupation = 'Web Developer';
    const hobbies = ['Soccer', 'Music', 'Web Development'];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-t from-gray-600 via-gray-800 to-black text-white font-mono">
            <h1 className="text-4xl mb-4">About Me</h1>
            <p className="text-lg mb-4">
                My name is {name} and I'm {age} years old. I currently live in {location} and work as a {occupation}.
            </p>
            <h2 className="text-2xl mb-2">Hobbies</h2>
            <ul className="list-disc list-inside">
                {hobbies.map((hobby, index) => (
                    <li key={index} className="mb-1">{hobby}</li>
                ))}
            </ul>
        </div>
    );
};

export default AboutPage;