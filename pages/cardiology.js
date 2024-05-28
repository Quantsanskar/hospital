import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCamera, faStethoscope, faProcedures, faAmbulance, faBook, faUserMd, faStar } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false; // Prevent fontawesome from adding its CSS

const Cardiology = () => {
    const cardiologists = [
        {
            name: "Dr. Ajay K Gopal",
            specialty: "Interventional Cardiology",
            image: "/DrAjayKGopal.png",
            description: "Dr. Ajay K Gopal specializes in interventional cardiology with over 20 years of experience.",
        },
        {
            name: "Dr. Maitri Chaudhary",
            specialty: "Pediatric Cardiology",
            image: "/DrMaitriChaudhary.png",
            description: "Dr. Maitri Chaudhary is a renowned pediatric cardiologist known for her compassionate care.",
        },
        {
            name: "Dr. Vanita Arora",
            specialty: "Cardiac Electrophysiology",
            image: "/DrVanitaArora.png",
            description: "Dr. Vanita Arora has a keen interest in cardiac electrophysiology and arrhythmias.",
        }
    ];

    return (
        <div className="container mx-auto my-8 p-4">
            <header className="text-center mb-12">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">Cardiology Services</h1>
                <p className="text-lg text-gray-600">Providing comprehensive care for all your heart health needs.</p>
            </header>

            <div className="row mb-12">
                <div className="col-md-6 mb-4">
                    <img src="/heart.png" alt="Cardiology" className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="col-md-6 flex flex-col justify-center">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
                    <p className="text-gray-600 mb-4">
                        Our team of experienced cardiologists and healthcare professionals are dedicated to providing the best care for your heart. We offer a range of services from diagnostics to treatment and rehabilitation.
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                        <li className="mb-2">Advanced diagnostics and imaging</li>
                        <li className="mb-2">Personalized treatment plans</li>
                        <li className="mb-2">Minimally invasive procedures</li>
                        <li className="mb-2">Comprehensive rehabilitation programs</li>
                        <li className="mb-2">Patient education and support</li>
                    </ul>
                </div>
            </div>

            <section className="mt-12">
                <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">Our Services</h2>
                <div className="row">
                    {[
                        { title: "Heart Checkup", description: "Regular checkups to monitor and maintain your heart health.", icon: faHeart },
                        { title: "Diagnostic Imaging", description: "State-of-the-art imaging technology for accurate diagnosis.", icon: faCamera },
                        { title: "Interventional Cardiology", description: "Minimally invasive procedures to treat heart conditions.", icon: faStethoscope },
                        { title: "Cardiac Rehabilitation", description: "Comprehensive rehab programs to help you recover and thrive.", icon: faProcedures },
                        { title: "Emergency Care", description: "24/7 emergency care for urgent heart health issues.", icon: faAmbulance },
                        { title: "Patient Education", description: "Empowering you with knowledge to take control of your heart health.", icon: faBook }
                    ].map((service, index) => (
                        <div key={index} className="col-lg-4 mb-4">
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
                <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">Our Cardiologists</h2>
                <div className="row">
                    {cardiologists.map((cardiologist, index) => (
                        <div key={index} className="col-lg-4 mb-4">
                            <div className="bg-white p-6 rounded-lg shadow-lg h-full transform hover:scale-105 transition-transform duration-300 text-center">
                                <div className="flex items-center justify-center mb-4">
                                    <img src={cardiologist.image} alt={cardiologist.name} className="rounded-full w-24 h-24 object-cover shadow-md" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{cardiologist.name}</h3>
                                <p className="text-blue-600 mb-2"><FontAwesomeIcon icon={faUserMd} /> {cardiologist.specialty}</p>
                                <p className="text-gray-600 mb-4">{cardiologist.description}</p>
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

export default Cardiology;
