const sc2 = require ('steemconnect');
const dsteem = require ('dsteem');

const client = new dsteem.Client ('https://api.steemit.com');

// init steemconnect
const api = sc2.Initialize ({
  app: 'vadkuhtin',
  callbackURL: 'http://localhost:3000',
  accessToken: 'access_token',
  scope: ['vote', 'comment', 'offline', 'custom_json'],
});
// get login URL
export const loginURL = api.getLoginURL ();

// acquire access_token and username after authorization
let access_token = new URLSearchParams (document.location.search).get (
  'access_token'
);
let username = new URLSearchParams (document.location.search).get (
  'username'
);

access_token &&
  localStorage.setItem('steem_ac', access_token);
username && localStorage.setItem ('steem_user', username);

export const steem_ac = access_token
  ? null : localStorage.getItem ('steem_ac')
export const steem_user = username
  ? null : localStorage.getItem ('steem_user')

const filter = 'blog';
const query = {
  tag: 'impactn-projects',
  limit: 50,
};

export const isLoggedIn = steem_ac && steem_user;
console.log(isLoggedIn);

export const logOut = () =>
  api.revokeToken (function (err, res) {
    if (res && res.success) {
      access_token = null;
      document.location.href = '/';
    }
  });

  export const getLoggedUserInfo = () => {
      return api.me();
  }

export const getProjects = () => {
  return client.database.getDiscussions(filter, query).then (result => {
    return result.filter(post => post.author === query.tag);
  });
};

export const getProjectDetails = (permlink) => {
    return client.database.call('get_content', [query.tag, permlink]);
}

// export const voteOnPost = (permlink, weight) => {
//         //create vote object
//         const vote = {
//             voter: steem_user,
//             author: query.tag,
//             permlink,
//             weight, //needs to be an integer for the vote function
//         };
    
//         //broadcast the vote
//         client.broadcast.vote(vote)
// }

export default api;
