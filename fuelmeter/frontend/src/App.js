import React, { useEffect, useState } from 'react';
import keycloak from './keycloak';
import axios from 'axios';
import querystring from 'querystring';

const App = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        keycloak.init({ onLoad: 'login-required' }).then(auth => {
            setAuthenticated(auth);

            if (auth) {
                keycloak.loadUserProfile().then(profile => {
                    console.log('User profile', profile);
                });

                axios.post('http://localhost:8080/realms/heiberg/protocol/openid-connect/token',
                    querystring.stringify({
                        grant_type: 'client_credentials', //gave the values directly for testing
                        client_id: 'flask-api',
                        client_secret: 'zdejNttWWYZz8fbawDdc5Y02tHlJdg73'
                    }), {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
                    .then(token => {
                        axios.get('http://localhost:5000/fuel/logs', {
                            headers: {
                                'Authorization': `Bearer ${token.data.access_token}`
                            }
                        })
                            .then(response => {
                                setMessage(JSON.stringify(response.data));
                            })
                            .catch(error => {
                                console.error('Failed to fetch protected resource', error);
                            });
                    })
                    .catch(error => {
                        console.error('Failed to fetch token', error);
                    });
            };
        })
    }, []);

    if (!authenticated) {
        return <div>Loading...</div>;
    }

    return (
        <div className="App">
            <h1>Welcome to React</h1>
            <div>{message}</div>
        </div>
    );
}

export default App;
