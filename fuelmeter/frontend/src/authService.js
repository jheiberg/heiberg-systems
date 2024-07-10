import axios from 'axios';

const keycloakUrl = process.env.REACT_APP_TOKEN_URL;
const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

const getAccessToken = async () => {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', clientId);
    params.append('client_secret', clientSecret);

    try {
        const response = await axios.post(keycloakUrl, params);
        return response.data.access_token;
    } catch (error) {
        console.error('Failed to obtain access token', error);
        throw error;
    }
};

export { getAccessToken };
