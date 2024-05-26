import React from 'react';
import Link from 'next/link';

const Services = () => {
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src="/service1.jpg" alt="Service 1" className="w-full h-64 object-cover object-center" />
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Cardiology</h2>
                        <p className="text-gray-700">Our cardiology department offers comprehensive care for heart-related conditions.</p>
                        <Link href="/services/cardiology" className="text-blue-600 hover:underline mt-2 inline-block">
                            Learn more
                        </Link>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src="/service2.jpg" alt="Service 2" className="w-full h-64 object-cover object-center" />
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Neurology</h2>
                        <p className="text-gray-700">Our neurology department provides expert care for neurological disorders and conditions.</p>
                        <Link href="/services/neurology" className="text-blue-600 hover:underline mt-2 inline-block">
                            Learn more
                        </Link>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src="/service3.jpg" alt="Service 3" className="w-full h-64 object-cover object-center" />
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Pediatrics</h2>
                        <p className="text-gray-700">Our pediatrics department offers compassionate care for children of all ages.</p>
                        <Link href="/services/pediatrics" className="text-blue-600 hover:underline mt-2 inline-block">
                            Learn more
                        </Link>
                    </div>
                </div>

                {/* Add more service cards as needed */}
            </div>
        </div>
    );
};

export default Services;
