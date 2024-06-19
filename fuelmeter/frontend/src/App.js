import React, { useEffect, useState } from 'react';
import keycloak from './keycloak';

const App = () => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
            setAuthenticated(authenticated);
        }).catch(error => {
            console.error('Failed to initialize Keycloak', error);
        });
    }, []);

    if (!authenticated) {
        return <div>Loading...</div>;
    }

    return (
        <div className="App">
            <h1>Welcome to React</h1>
        </div>
    );
}

export default App;
