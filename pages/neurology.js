import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faMicroscope, faNotesMedical, faProcedures, faAmbulance, faBook, faUserMd, faStar } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false; // Prevent fontawesome from adding its CSS

const Neurology = () => {
    const neurologists = [
        {
            name: "Dr. Rajiv Anand",
            specialty: "Neurophysiology",
            image: "/DrRajivAnand.png",
            description: "Dr. Rajiv Anand specializes in neurophysiology with extensive research in brain functions.",
        },
        {
            name: "Dr. Aruna Choudhary",
            specialty: "Pediatric Neurology",
            image: "/DrArunaChoudhary.png",
            description: "Dr. Aruna Choudhary is a renowned pediatric neurologist known for her dedication to child neurology.",
        },
        {
            name: "Dr. Shaurya Bhardwaj",
            specialty: "Epileptology",
            image: "/DrShaurya.jpg",
            description: "Dr. Shaurya Bhardwaj focuses on epilepsy and seizure disorders with innovative treatment approaches.",
        },
        {
            name: "Dr. Sneha Kapoor",
            specialty: "Neuroimmunology",
            image: "/DrSnehaKapoor.png",
            description: "Dr. Sneha Kapoor is an expert in neuroimmunology, specializing in the treatment of autoimmune neurological disorders.",
        },
        {
            name: "Dr. Priya Sharma",
            specialty: "Neurosurgery",
            image: "/DrPriyaSharma.png",
            description: "Dr. Priya Sharma is a skilled neurosurgeon with a focus on minimally invasive surgical techniques.",
        },
        {
            name: "Dr. Naina Reddy",
            specialty: "Neuro-Oncology",
            image: "/DrNainaReddy.png",
            description: "Dr. Naina Reddy specializes in neuro-oncology, providing compassionate care to patients with brain tumors.",
        }
    ];

    return (
        <div className="container mx-auto my-8 p-4">
            <header className="text-center mb-12">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">Neurology Services</h1>
                <p className="text-lg text-gray-600">Comprehensive care for all your neurological needs.</p>
            </header>

            <div className="row mb-12">
                <div className="col-md-6 mb-4">
                    <img src="/brain.png" alt="Neurology" className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="col-md-6 flex flex-col justify-center">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
                    <p className="text-gray-600 mb-4">
                        Our team of experienced neurologists and healthcare professionals are committed to providing the best neurological care. We offer a range of services from diagnostics to treatment and rehabilitation.
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
                        { title: "Neurological Checkup", description: "Regular checkups to monitor and maintain your neurological health.", icon: faBrain },
                        { title: "Diagnostic Imaging", description: "State-of-the-art imaging technology for accurate diagnosis.", icon: faMicroscope },
                        { title: "Neurophysiology", description: "Advanced studies and treatment of nervous system functions.", icon: faNotesMedical },
                        { title: "Rehabilitation", description: "Comprehensive rehab programs to help you recover and thrive.", icon: faProcedures },
                        { title: "Emergency Care", description: "24/7 emergency care for urgent neurological issues.", icon: faAmbulance },
                        { title: "Patient Education", description: "Empowering you with knowledge to take control of your neurological health.", icon: faBook }
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
                <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">Our Neurologists</h2>
                <div className="row">
                    {neurologists.map((neurologist, index) => (
                        <div key={index} className="col-lg-4 mb-4">
                            <div className="bg-white p-6 rounded-lg shadow-lg h-full transform hover:scale-105 transition-transform duration-300 text-center">
                                <div className="flex items-center justify-center mb-4">
                                    <img src={neurologist.image} alt={neurologist.name} className="rounded-full w-24 h-24 object-cover shadow-md" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{neurologist.name}</h3>
                                <p className="text-blue-600 mb-2"><FontAwesomeIcon icon={faUserMd} /> {neurologist.specialty}</p>
                                <p className="text-gray-600 mb-4">{neurologist.description}</p>
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
export default Neurology;