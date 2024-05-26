import { useState } from 'react';
import { useRouter } from 'next/router';

const AdminLogin = () => {
    const [enteredUserID, setEnteredUserID] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        // Fetch the user data from the backend
        const response = await fetch('http://127.0.0.1:8000/adminuser', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const users = await response.json();

            // Check each user to see if there's a match
            let validUser = false;
            for (let user of users) {
                console.log(user.UserID, user.Password);
                if (user.UserID === enteredUserID && user.Password === enteredPassword) {
                    validUser = true;
                    break;
                }
            }

            if (validUser) {
                localStorage.setItem('username', enteredUserID);
                router.push('/admin');
            } else {
                setError('Wrong credentials');
            }
        } else {
            setError('Server error. Please try again later.');
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="container py-5">
                <div className="flex flex-wrap items-center justify-center">
                    <div className="w-full md:w-1/2 lg:w-2/5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="img-fluid" alt="Phone image" />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-2/5">
                        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="mb-4">
                                <label htmlFor="userID" className="form-label block mb-2 text-gray-600">UserID</label>
                                <input
                                    type="text"
                                    id="userID"
                                    className="form-control block w-full p-3 rounded border border-gray-300"
                                    value={enteredUserID}
                                    onChange={(e) => setEnteredUserID(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="form-label block mb-2 text-gray-600">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control block w-full p-3 rounded border border-gray-300"
                                    value={enteredPassword}
                                    onChange={(e) => setEnteredPassword(e.target.value)}
                                />
                            </div>
                            {error && <p className="text-red-500 mb-4">{error}</p>}
                            <button type="submit" className="btn btn-primary btn-lg btn-block w-full p-3 mb-4 bg-blue-600 text-white rounded-lg">
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminLogin;
