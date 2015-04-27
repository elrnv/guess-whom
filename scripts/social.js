var appId = '1127268377298669';
var appNamespace = 'guess-whom-eddie';
var appCenterURL = 'https:://www.facebook.com/appcenter/' + appNamespace;

var friendCache = {
  me: {},
  user: {},
  permissions: [],
  friends: [],
  invitable_friends: [],
  apprequests: [],
  scores: [],
  games: [],
  reRequests: {},
  mutual_friends: []
};


var getFriendCacheData = function(endpoint, callback, options) {
  if(endpoint) {
    var url = '/';
    if(endpoint == 'me') {
      url += endpoint;
    } else if(endpoint == 'scores') {
      url += appId + '/' + endpoint;
    } else {
      url += 'me/' + endpoint;
    }
    FB.api(url, options, function(response) {
      if( !response.error ) {
        console.log('getFriendCacheData', endpoint, response);
        friendCache[endpoint] = response.data ? response.data : response;
        if(callback) callback();
      } else {
        console.error('getFriendCacheData',endpoint, response)
      }
    });
  } else {
    getMe(function() {
      getPermissions(function() {
        getInvitableFriends(function() {
          getFriends(function() {
            getScores(callback);
          });
        });
      });
    });
  }
}

var getMe = function(callback) {
  getFriendCacheData('me', callback, {fields: 'id,name,first_name,picture.width(120).height(120)'});
}


var getPermissions = function(callback) {
  getFriendCacheData('permissions', callback);
}

var getFriends = function(callback) {
  getFriendCacheData('friends', callback, {fields: 'id,name,first_name,picture.width(120).height(120)',limit: 8});
}

var getInvitableFriends = function(callback) {
  getFriendCacheData('invitable_friends', callback, {fields: 'id,name,first_name,picture.width(120).height(120)',limit: 8});
}

var getScores = function(callback) {
  getFriendCacheData('scores', callback, {fields: 'score,user.fields(first_name,name,picture.width(120).height(120))'});
}

var getRequestInfo = function(id, callback) {
  FB.api(String(id), {fields: 'from{id,name,picture}' }, function(response){
    if( response.error ) {
      console.error('getRequestSenderInfo', response.error);
      return;
    }
    if(callback) callback(response);
  });
}

var hasPermission = function(permission) {
  for( var i in friendCache.permissions ) {
    console.log(i + " " + friendCache.permissions[i].permission + " : " +
        friendCache.permissions[i].status);
    if(
      friendCache.permissions[i].permission == permission
      && friendCache.permissions[i].status == 'granted' )
      return true;
  }
  return false;
}

var login = function(callback) {
    FB.login(callback, {scope: 'user_friends'});
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
      getPermissions(function() {
        if( hasPermission('user_friends') ) {
          getInvitableFriends(function() {
            getFriends(function() {
              renderWelcome();
              renderOpponents();
              getMutualFriends(friendCache.friends[0].id); 
              showHome();
            });
          });
        } else {
          renderWelcome();
          showHome();
        }
      });
    });
  }
}

var onAuthResponseChange = function(response) {
    console.log('onAuthResponseChange', response);
}

var getMutualFriends = function(id, callback) {
  FB.api('/' + String(id)  , { 'fields': 'context.fields(mutual_friends)'}, function(response) {
    if ( response.error ) {
      return;
    } else {
      friendCache['mutual_friends'] = response.data ? response.data : response;
    }
    if(callback) callback(response);
  });
  console.log(friendCache['mutual_friends']);
}
