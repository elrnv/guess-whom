FB.init({
  appId: appId,
  frictionlessRequests: true,
  status: true,
  version: 'v0.1'
});

FB.Event.subscribe('auth.authResponseChange', onAuthResponseChange);
FB.Event.subscribe('auth.statusChange', onStatusChange);
