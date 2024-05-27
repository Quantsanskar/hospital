import React, { useState } from 'react';
import { useRouter } from 'next/router';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Link from 'next/link';

const Index = () => {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    const doctors = [
        { name: 'Dr. Shaurya Bhardwaj', specialty: 'Neurology', experience: '1 years', image: '/DrShaurya.jpg' },
        { name: 'Dr. John Doe', specialty: 'Cardiology', experience: '10 years', image: '/hospital1.png' },
        { name: 'Dr. Jane Smith', specialty: 'Neurology', experience: '8 years', image: '/doctor1.png' },
        { name: 'Dr. Emily Johnson', specialty: 'Pediatrics', experience: '12 years', image: '/doctor3.png' },
        { name: 'Dr. Michael Brown', specialty: 'Orthopedics', experience: '7 years', image: '/doctor4.png' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <nav className="bg-white shadow-md py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <div className="flex items-center cursor-pointer" onClick={() => router.push('/')}>
                        <img src="/logo.png" alt="Hospital Logo" className="w-12 h-12"/>
                        <h1 className="text-2xl font-bold text-blue-600 ml-2">S & S Hospital</h1>
                    </div>
                    <button className="md:hidden text-gray-600 hover:text-blue-600" onClick={() => setMenuOpen(!menuOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
                        </svg>
                    </button>
                    <ul className={`md:flex md:space-x-4 ${menuOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>
                        <li><Link href="/" className="block py-2 px-4 text-gray-600 hover:text-blue-600">Home</Link></li>
                        <li><Link href="/about" className="block py-2 px-4 text-gray-600 hover:text-blue-600">About Us</Link></li>
                        <li><Link href="/adminlogin" className="block py-2 px-4 text-gray-600 hover:text-blue-600">Admin Portal</Link></li>
                        <li><Link href="/services" className="block py-2 px-4 text-gray-600 hover:text-blue-600">Services</Link></li>
                        <li><Link href="/contact" className="block py-2 px-4 text-gray-600 hover:text-blue-600">Contact</Link></li>
                        <li><Link href="/patientportal" className="block py-2 px-4 text-gray-600 hover:text-blue-600">Patient Portal</Link></li>
                    </ul>
                </div>
            </nav>

            <div className="container mx-auto mt-8 px-4">
                <div className="mb-8">
                    <Slider {...settings}>
                        <div>
                            <img src="/hospital1.png" alt="Slide 1" className="w-full h-auto rounded-lg shadow-md" />
                        </div>
                        <div>
                            <img src="/hospital2.png" alt="Slide 2" className="w-full h-auto rounded-lg shadow-md" />
                        </div>
                        <div>
                            <img src="/hospital3.png" alt="Slide 3" className="w-full h-auto rounded-lg shadow-md" />
                        </div>
                        <div>
                            <img src="/hospital4.png" alt="Slide 4" className="w-full h-auto rounded-lg shadow-md" />
                        </div>
                    </Slider>
                </div>

                <section className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Doctors Working with Us</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Profile</th>
                                    <th className="py-2 px-4 border-b">Name</th>
                                    <th className="py-2 px-4 border-b">Specialty</th>
                                    <th className="py-2 px-4 border-b">Experience</th>
                                </tr>
                            </thead>
                            <tbody>
                                {doctors.map((doctor, index) => (
                                    <tr key={index} className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b text-center">
                                            <img src={doctor.image} alt={`${doctor.name}'s profile`} className="w-16 h-16 rounded-full mx-auto" />
                                        </td>
                                        <td className="py-2 px-4 border-b text-center">{doctor.name}</td>
                                        <td className="py-2 px-4 border-b text-center">{doctor.specialty}</td>
                                        <td className="py-2 px-4 border-b text-center">{doctor.experience}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Index;
