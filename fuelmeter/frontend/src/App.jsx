import React, { useEffect, useState } from 'react';
import keycloak from './keycloak';
import axios from 'axios';
import { getAccessToken } from './authService';

const App = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [apiData, setApiData] = useState('');

    useEffect(() => {
        keycloak.init({ onLoad: 'login-required' }).then(async auth => {
            setAuthenticated(auth);

            if (auth) {
                await fetchProtectedData();
            }
        }).catch(error => {
            console.error('Failed to initialize Keycloak', error);
        });

        const interval = setInterval(() => {
            keycloak.updateToken(30).catch(() => {
                console.log('Failed to refresh token');
            });
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    const fetchProtectedData = async () => {
        try {
            const token = await getAccessToken();
            const response = await axios.get('http://localhost:5000/fuel/logs', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setApiData(response.data);
        } catch (error) {
            console.error('Failed to fetch protected data', error);
        }
    }

    if (!authenticated) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-bluegrey-200">
            <header className='flex items-center h-16 w-auto p-5 bg-dark text-white'>
                <div className='size-5 w-52'></div>
                <div className='size-5 w-52'></div>
                <div className='size-5 w-60'>
                    <h1 className="font-serif text-3xl align-middle">Welcome to React</h1>
                </div>
            </header>
            {apiData && (
                <div>
                    <h2>Protected Data</h2>
                    <pre>{JSON.stringify(apiData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default App;
