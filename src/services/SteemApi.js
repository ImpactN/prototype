const sc2 = require('steemconnect');

// init steemconnect
const api = sc2.Initialize({
    app: 'vadkuhtin',
    callbackURL: 'http://localhost:3000',
    accessToken: 'access_token',
    scope: ['vote', 'comment', 'delete_comment', 'custom_json'],
});
// get login URL
export const loginURL = api.getLoginURL();

// acquire access_token and username after authorization
export let access_token = new URLSearchParams(document.location.search).get(
    'access_token'
);
export let username = new URLSearchParams(document.location.search).get('username');

export const isLoggedIn = access_token && username;

export const logOut = () => api.revokeToken(function (err, res) {
    if (res && res.success) {
        access_token = null;
        document.location.href = '/';
    }
});

export default api;