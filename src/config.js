export default {
    authUrl: 'https://aqueous-reef-70776.herokuapp.com/authenticate/',
    clientId: process.env.VUE_APP_GITHUB_CLIENT_ID,
    redirectUri: 'https://localhost:8080/github/login-callback',
};
