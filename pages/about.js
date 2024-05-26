// pages/about.js
import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold text-blue-600">About S&S Hospital</h1>
                    <p className="text-gray-600 mt-4">
                        Committed to providing the best healthcare experience.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center justify-center">
                        <img
                            src="/SShospital.png"
                            alt="Hospital Building"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                        <p className="text-gray-600 mb-4">
                            At S&S Hospital, our mission is to provide exceptional healthcare services with compassion, respect, and excellence. We strive to enhance the well-being of our patients and their families through comprehensive and personalized care.
                        </p>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Compassion: We treat everyone with empathy and kindness.</li>
                            <li>Excellence: We pursue the highest standards in healthcare.</li>
                            <li>Integrity: We act with honesty and transparency.</li>
                            <li>Innovation: We embrace new ideas and technologies.</li>
                            <li>Collaboration: We work together to achieve the best outcomes.</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
                    <p className="text-gray-600 mb-4">
                        Our team of dedicated professionals includes experienced doctors, nurses, and support staff who are committed to providing exceptional care. We are proud of our diverse team that brings together a wealth of knowledge and expertise to ensure the best possible outcomes for our patients.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <img
                                src="/DrShaurya.jpg"
                                alt="Doctor 1"
                                className="rounded-full mx-auto mb-4 shadow-lg"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">Dr. Shaurya Bhardwaj</h3>
                            <p className="text-gray-600">Chief Medical Officer</p>
                        </div>
                        <div className="text-center">
                            <img
                                src="/DrJaneSmith.png"
                                alt="Doctor 2"
                                className="rounded-full mx-auto mb-4 shadow-lg"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">Dr. Jane Smith</h3>
                            <p className="text-gray-600">Head of Surgery</p>
                        </div>
                        <div className="text-center">
                            <img
                                src="/DrAliceJohnson.png"
                                alt="Doctor 3"
                                className="rounded-full mx-auto mb-4 shadow-lg"
                                width="2000px"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">Dr. Alice Johnson</h3>
                            <p className="text-gray-600">Chief of Pediatrics</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
