var appId = '1127270453965128';
var appNamespace = 'guess-whom-egor';
var appCenterURL = 'https:://www.facebook.com/appcenter/' + appNamespace;

var friendCache = {
  me: {},
  user: {},
  permissions: [],
  friends: [],
  initable_friends: [],
  apprequests: [],
  scores: [],
  games: [],
  reRequests: {},
  mutual_friends: []
};

var getMe = function(callback) {
  FB.api('/me', {fields: 'id,name,first_name,picture.width(120).height(120)'},
      function(response){
    if( !response.error ) {
      friendCache.me = response;
      callback();
    } else {
      console.error('/me', response);
    }
  });
}

var login = function(callback) {
    FB.login(callback);
}

var loginCallback = function(response) {
  console.log('loginCallback',response);
  if( response.status != 'connected' ) {
    top.location.href = appCenterURL;
  }
}

// respond to the FB API callbacks
var onStatusChange = function(response) {
  if( response.status != 'connected' ) {
    login(loginCallback);
  } else {
    getMe(function() {
      renderWelcome();
      showHome();
    });
  }
}

var onAuthResponseChange = function(response) {
    console.log('onAuthResponseChange', response);
}

var getMutualFriends(id, callback) = function(callback) {
  FB.api(String(id), { fields: 'context.fields(mutual_friends)' }, function(response) {
    if ( response.error ) {
      console.error('getMutualFriends', response.error);
      return;
    }
    if(callback) callback(response);
  });
}
