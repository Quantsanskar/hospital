import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Admin = () => {
    const [queries, setQueries] = useState([]);
    const [patients, setPatients] = useState([]);
    const [selectedPatientId, setSelectedPatientId] = useState('');
    const [patientDetails, setPatientDetails] = useState(null);
    const [error, setError] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    useEffect(() => {
        const username = localStorage.getItem('username');
        if (!username) {
            router.push('/');
        } else {
            fetch('http://127.0.0.1:8000/queries')
                .then(response => response.json())
                .then(data => setQueries(data))
                .catch(error => console.error('Error fetching queries:', error));

            fetch('http://127.0.0.1:8000/patient')
                .then(response => response.json())
                .then(data => setPatients(data))
                .catch(error => console.error('Error fetching patients:', error));
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('username');
        router.push('/');
    };

    const handlePatientChange = async (event) => {
        const patientId = event.target.value;
        setSelectedPatientId(patientId);

        try {
            const response = await fetch('http://127.0.0.1:8000/patient', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },

            });

            if (response.ok) {
                const datas = await response.json();
                const data = datas.find((patient) => patient.patientId === patientId);
                if (data) {
                    setPatientDetails(data);
                    setError(null);
                } else {
                    setPatientDetails(null);
                    setError('Patient data does not match selected patient ID');
                }
            } else {
                const errorData = await response.json();
                setPatientDetails(null);
                setError(errorData.error || 'Error fetching patient data');
            }
        } catch (error) {
            console.error('Error fetching patient data:', error);
            setPatientDetails(null);
            setError('An error occurred while fetching patient data');
        }
    };

    const handleNewPatientRegistration = async (e) => {
        e.preventDefault();
        setError(null);

        const newPatientDetails = {
            firstName,
            lastName,
            email,
            phone,
            address,
            password,
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/patient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPatientDetails),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Registration successful:', data);
                // Clear form fields after successful registration
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhone('');
                setAddress('');
                setPassword('');
                
            } else {
                setError('Registration failed. Please try again.');
            }
            
        } catch (error) {
            console.error('Error registering:', error);
            setError('An error occurred while registering. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-md py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <div className="flex items-center cursor-pointer">
                        <h1 className="text-2xl font-bold text-blue-600">Admin Panel</h1>
                    </div>
                    <ul className="flex space-x-4">
                        <li><Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
                        <li><Link href="/admin" className="text-gray-600 hover:text-blue-600">Queries</Link></li>
                        <li><button onClick={handleLogout} className="text-gray-600 hover:text-blue-600">Logout</button></li>
                    </ul>
                </div>
            </nav>

            <div className="container mx-auto mt-8 px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">User Queries</h2>
                <div className="overflow-x-auto mb-8">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">First Name</th>
                                <th className="py-2 px-4 border-b">Last Name</th>
                                <th className="py-2 px-4 border-b">Email</th>
                                <th className="py-2 px-4 border-b">Phone Number</th>
                                <th className="py-2 px-4 border-b">Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {queries.map((query, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="py-2 px-4 border-b">{query.FirstName}</td>
                                    <td className="py-2 px-4 border-b">{query.LastName}</td>
                                    <td className="py-2 px-4 border-b">{query.Email}</td>
                                    <td className="py-2 px-4 border-b">{query.PhoneNumber}</td>
                                    <td className="py-2 px-4 border-b">{query.Message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">Patient Details</h2>
                <div className="mb-4">
                    <select
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        value={selectedPatientId}
                        onChange={handlePatientChange}
                    >
                        <option value="">Select a patient</option>
                        {patients.map((patient) => (
                            <option key={patient.patientId} value={patient.patientId}>
                                {patient.firstName} {patient.lastName} ({patient.patientId})
                            </option>
                        ))}
                    </select>
                </div>

                {error && (
                    <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
                        <p>{error}</p>
                    </div>
                )}

                {patientDetails && (
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">Patient Information</h3>
                        <div className="space-y-6">
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h4 className="text-lg font-semibold text-gray-700">Patient ID:</h4>
                                <p className="text-gray-600">{patientDetails.patientId}</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h4 className="text-lg font-semibold text-gray-700">First Name:</h4>
                                <p className="text-gray-600">{patientDetails.firstName}</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h4 className="text-lg font-semibold text-gray-700">Last Name:</h4>
                                <p className="text-gray-600">{patientDetails.lastName}</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h4 className="text-lg font-semibold text-gray-700">Email:</h4>
                                <p className="text-gray-600">{patientDetails.email}</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h4 className="text-lg font-semibold text-gray-700">Phone:</h4>
                                <p className="text-gray-600">{patientDetails.phone}</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h4 className="text-lg font-semibold text-gray-700">Password:</h4>
                                <p className="text-gray-600">{patientDetails.password}</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h4 className="text-lg font-semibold text-gray-700">Address:</h4>
                                <p className="text-gray-600">{patientDetails.address}</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h4 className="text-lg font-semibold text-gray-700">Disease:</h4>
                                <p className="text-gray-600">{patientDetails.disease}</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h4 className="text-lg font-semibold text-gray-700">Doctor Assigned:</h4>
                                <p className="text-gray-600">{patientDetails.doctor_assigned}</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h4 className="text-lg font-semibold text-gray-700">Treatment Start Date:</h4>
                                <p className="text-gray-600">{patientDetails.treatment_start_date}</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h4 className="text-lg font-semibold text-gray-700">Treatment End Date:</h4>
                                <p className="text-gray-600">{patientDetails.treatment_end_date}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <form onSubmit={handleNewPatientRegistration} className="mt-4">
                <h2 className="text-2xl font-bold mb-4 text-center">New Patient Registration</h2>
                {error && <p className="text-red-500">{error}</p>}
                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-gray-700">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700">Address</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
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
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                        required
                    />
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-green-600 text-white px-4 py-2 rounded-lg"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Admin;
