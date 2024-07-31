import Keycloak from 'keycloak-js';

const keycloakConfig = {
    url: 'http://localhost:8080', // Replace with your Keycloak server URL
    realm: 'heiberg', // Replace with your Keycloak realm name
    clientId: 'react-client', // Replace with your React client ID
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;