import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const PatientDashboard = () => {
    const [patientData, setPatientData] = useState(null);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchPatientData = async () => {
            const patientId = localStorage.getItem('username');
            try {
                const response = await fetch('http://127.0.0.1:8000/patient/details', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ patientId }),
                });

                if (response.ok) {
                    const data = await response.json();
                    setPatientData(data);
                } else {
                    const errorData = await response.json();
                    setError(errorData.error || 'Error fetching patient data');
                }
            } catch (error) {
                console.error('Error fetching patient data:', error);
                setError('An error occurred while fetching patient data');
            }
        };

        fetchPatientData();
    }, []);

    if (error) {
        return (
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
                <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2 lg:w-1/3 text-center">
                    <h2 className="text-2xl font-bold mb-4">Error</h2>
                    <p className="text-red-500">{error}</p>
                </div>
            </div>
        );
    }

    if (!patientData) {
        return (
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
                <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2 lg:w-1/3 text-center">
                    <h2 className="text-2xl font-bold mb-4">Loading...</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 flex flex-col justify-center items-center p-4">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-1/2 lg:w-1/3">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Patient Dashboard</h2>
                <div className="space-y-6">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-700">Patient ID:</h3>
                        <p className="text-gray-600">{patientData.patientId}</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-700">First Name:</h3>
                        <p className="text-gray-600">{patientData.firstName}</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-700">Last Name:</h3>
                        <p className="text-gray-600">{patientData.lastName}</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-700">Email:</h3>
                        <p className="text-gray-600">{patientData.email}</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-700">Phone:</h3>
                        <p className="text-gray-600">{patientData.phone}</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-700">Address:</h3>
                        <p className="text-gray-600">{patientData.address}</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-700">Disease:</h3>
                        <p className="text-gray-600">{patientData.disease}</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-700">Doctor Assigned:</h3>
                        <p className="text-gray-600">{patientData.doctor_assigned}</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-700">Treatment Start Date:</h3>
                        <p className="text-gray-600">{patientData.treatment_start_date}</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-700">Treatment End Date:</h3>
                        <p className="text-gray-600">{patientData.treatment_end_date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientDashboard;
