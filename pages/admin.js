import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Admin = () => {
    const [queries, setQueries] = useState([]);
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
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('username');
        router.push('/');
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
                <div className="overflow-x-auto">
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
            </div>
        </div>
    );
};

export default Admin;
