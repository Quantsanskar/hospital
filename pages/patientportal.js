import React, { useState } from 'react';
import { useRouter } from 'next/router';

const PatientPortal = () => {
    const [isNewPatient, setIsNewPatient] = useState(null);
    const [patientId, setPatientId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const router = useRouter();

    const handleExistingPatientLogin = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch('http://127.0.0.1:8000/patient', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const users = await response.json();
                const validUser = users.some(user => user.patientId === patientId && user.password === password);

                if (validUser) {
                    localStorage.setItem('username', patientId);
                    router.push('/patientdashboard');
                } else {
                    setError('Wrong credentials');
                }
            } else {
                setError('Server error. Please try again later.');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('An error occurred while logging in. Please try again.');
        }
    };

    const handleNewPatientClick = () => {
        router.push('/contact');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
            <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2 lg:w-1/3">
                {isNewPatient === null && (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">Welcome to S & S Hospital</h2>
                        <p className="mb-4">Are you an existing patient or a new patient?</p>
                        <button
                            onClick={() => setIsNewPatient(false)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-2"
                        >
                            Existing Patient
                        </button>
                        <button
                            onClick={handleNewPatientClick}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg"
                        >
                            New Patient
                        </button>
                    </div>
                )}

                {isNewPatient === false && (
                    <form onSubmit={handleExistingPatientLogin} className="mt-4">
                        <h2 className="text-2xl font-bold mb-4 text-center">Existing Patient Login</h2>
                        {error && <p className="text-red-500">{error}</p>}
                        <div className="mb-4">
                            <label htmlFor="patientId" className="block text-gray-700">Patient ID</label>
                            <input
                                type="text"
                                id="patientId"
                                value={patientId}
                                onChange={(e) => setPatientId(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default PatientPortal;
