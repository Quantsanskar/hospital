import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby, faSyringe, faStethoscope, faBook, faUserMd, faStar } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false; // Prevent fontawesome from adding its CSS

const Pediatrics = () => {
    const pediatricians = [
        {
            name: "Dr. Priya Sharma",
            specialty: "General Pediatrics",
            image: "/DrPriyaSharma.png",
            description: "Dr. Priya Sharma provides compassionate care for children of all ages with a focus on preventive health and wellness.",
        },
        {
            name: "Dr. Neha Singh",
            specialty: "Pediatric Immunology",
            image: "/DrNehaSingh.png",
            description: "Dr. Neha Singh specializes in pediatric immunology, providing comprehensive care for children with immunodeficiency disorders.",
        },
        {
            name: "Dr. Aarushi Gupta",
            specialty: "Pediatric Oncology",
            image: "/DrAarushiGupta.png",
            description: "Dr. Aarushi Gupta is dedicated to providing advanced care for children with cancer and blood disorders.",
        },
        {
            name: "Dr. Kavya Reddy",
            specialty: "Pediatric Surgery",
            image: "/DrKavyaReddy.png",
            description: "Dr. Kavya Reddy is an expert in pediatric surgery, specializing in minimally invasive procedures for children.",
        },
        {
            name: "Dr. Ravi Kumar",
            specialty: "Neonatology",
            image: "/DrRaviKumar.png",
            description: "Dr. Ravi Kumar specializes in neonatology, providing care for newborns with special health needs.",
        },
        {
            name: "Dr. Ananya Verma",
            specialty: "Pediatric Neurology",
            image: "/DrAnanyaVerma.png",
            description: "Dr. Ananya Verma is a pediatric neurologist known for her expertise in treating neurological disorders in children.",
        },
        {
            name: "Dr. Mohit Gupta",
            specialty: "Pediatric Cardiology",
            image: "/DrMohitGupta.png",
            description: "Dr. Mohit Gupta is a pediatric cardiologist dedicated to providing comprehensive care for children with heart conditions.",
        },
        {
            name: "Dr. Meera Patel",
            specialty: "Pediatric Gastroenterology",
            image: "/DrMeeraPatel.png",
            description: "Dr. Meera Patel specializes in pediatric gastroenterology, providing care for children with digestive disorders.",
        },
        {
            name: "Dr. Siddharth Jain",
            specialty: "Pediatric Pulmonology",
            image: "/DrSiddharthJain.png",
            description: "Dr. Siddharth Jain focuses on pediatric pulmonology, treating children with respiratory disorders and lung conditions.",
        }
    ];

    return (
        <div className="container mx-auto my-8 p-4">
            <header className="text-center mb-12">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">Pediatrics Services</h1>
                <p className="text-lg text-gray-600">Compassionate care for your little ones.</p>
            </header>

            <div className="row mb-12">
                <div className="col-md-6 mb-4">
                    <img src="/child.png" alt="Pediatrics" className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="col-md-6 flex flex-col justify-center">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
                    <p className="text-gray-600 mb-4">
                        Our pediatricians are dedicated to providing the best care for your children. We offer a range of services from routine checkups to specialized care for complex conditions.
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                        <li className="mb-2">Comprehensive well-child exams</li>
                        <li className="mb-2">Vaccinations and immunizations</li>
                        <li className="mb-2">Treatment for acute and chronic illnesses</li>
                        <li className="mb-2">Pediatric surgery and specialized procedures</li>
                        <li className="mb-2">Patient and parent education</li>
                    </ul>
                </div>
            </div>

            <section className="mt-12">
                <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">Our Services</h2>
                <div className="row">
                    {[
                        { title: "Well-Child Exams", description: "Regular checkups to monitor your child's growth and development.", icon: faBaby },
                        { title: "Vaccinations", description: "Recommended immunizations to protect against infectious diseases.", icon: faSyringe },
                        { title: "Pediatric Consultations", description: "Expert consultations for diagnosis and treatment of childhood illnesses.", icon: faStethoscope },
                        { title: "Parent Education", description: "Guidance and resources to help parents make informed decisions about their child's health.", icon: faBook }
                    ].map((service, index) => (
                        <div key={index} className="col-lg-6 mb-4">
                            <div className="bg-white p-6 rounded-lg shadow-lg h-full transform hover:scale-105 transition-transform duration-300 text-center">
                                <div className="flex items-center justify-center mb-4 text-blue-600">
                                    <FontAwesomeIcon icon={service.icon} size="3x" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-12">
                <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">Our Pediatricians</h2>
                <div className="row">
                    {pediatricians.map((pediatrician, index) => (
                        <div key={index} className="col-lg-4 mb-4">
                            <div className="bg-white p-6 rounded-lg shadow-lg h-full transform hover:scale-105 transition-transform duration-300 text-center">
                                <div className="flex items-center justify-center mb-4">
                                    <img src={pediatrician.image} alt={pediatrician.name} className="rounded-full w-24 h-24 object-cover shadow-md" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{pediatrician.name}</h3>
                                <p className="text-blue-600 mb-2"><FontAwesomeIcon icon={faUserMd} /> {pediatrician.specialty}</p>
                                <p className="text-gray-600 mb-4">{pediatrician.description}</p>
                                <div className="text-yellow-500">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Pediatrics;
