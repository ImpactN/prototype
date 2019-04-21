const sc2 = require('steemconnect');
const dsteem = require('dsteem');

const client = new dsteem.Client('https://api.steemit.com');

// init steemconnect
const api = sc2.Initialize({
  app: 'vadkuhtin',
  callbackURL: 'http://localhost:3000',
  accessToken: 'access_token',
  scope: ['vote', 'comment', 'offline', 'custom_json'],
});
// get login URL
export const loginURL = api.getLoginURL();

// acquire access_token and username after authorization
const access_token = new URLSearchParams(document.location.search).get(
  'access_token'
);
const username = new URLSearchParams(document.location.search).get(
  'username'
);

if (access_token) {
  localStorage.setItem('steem_ac', JSON.stringify(access_token));
  localStorage.setItem('steem_user', JSON.stringify(username));
}

export const steem_ac = JSON.parse(localStorage.getItem('steem_ac'));
export const steem_user = JSON.parse(localStorage.getItem('steem_user'));

const filter = 'blog';
const query = {
  tag: 'impactn-projects',
  limit: 50,
};

export const isLoggedIn = steem_ac && steem_user;

export const logOut = () => {
  if (steem_ac) {
    api.setAccessToken(steem_ac);
    api.revokeToken(function (err, res) {
      if (res && res.success) {
        localStorage.setItem('steem_ac', null);
        localStorage.setItem('steem_user', null);
        document.location.href = '/';
      }
    });
  }
}

export const getLoggedUserInfo = () => {
  if (steem_ac) {
    api.setAccessToken(steem_ac);
    return api.me().then(info => info);
  }
}

export const getProjects = () => {
  return client.database.getDiscussions(filter, query).then(result => {
    return result.filter(post => post.author === query.tag);
  });
};

export const getProjectDetails = (permlink) => {
  return client.database.call('get_content', [query.tag, permlink]);
}

export const getProjectComments = (permlink) => {
  return client.database.call('get_content_replies', [query.tag, permlink]);
}

export const getProjectUpdates = (name) => {
  return client.database.call('get_state', [`@${name}`]).then(state => {
    return Object.values(state.content).filter(post => post.author === name);
  });
}

export const voteOnPost = (permlink) => {
  api.setAccessToken(steem_ac);
  const weight = 10000;
  return api.vote(steem_user, query.tag, permlink, weight).then(data => {
    return data;
  })
}

export const submitUpdate = (tagsString, title, body) => {
  api.setAccessToken(steem_ac);
  const defaultTags = ['impactn-test', `${steem_user}`];
  const allTags = defaultTags.concat(tagsString.split(','));

  var parentPermlink = allTags[0];
  var permlink = title.replace(/ /g, "-");
  permlink = permlink.toLowerCase();

  return getLoggedUserInfo().then(info => {
    const json_metadata = info.account.json_metadata;
    return api.comment('', parentPermlink, steem_user, permlink, title, body, json_metadata);
  })
}

export const commentOnPost = (projectPermlink, title, body) => {
  api.setAccessToken(steem_ac);
  return getLoggedUserInfo().then(info => {
    const json_metadata = info.account.json_metadata;
    const permlink = new Date().toISOString().replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
    return api.comment(query.tag, projectPermlink, steem_user, permlink, title, body, json_metadata).then(data => {
      return data;
    })
  })
}

export const deleteCommentOnPost = (permlink) => {
  api.setAccessToken(steem_ac);
  return api.deleteComment(steem_user, permlink).then(data => {
    return data;
  })
}

export default api;
