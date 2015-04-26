var renderWelcome = function() {
  var welcome = $('#welcome');
  welcome.find('.first_name').html(friendCache.me.first_name);
  welcome.find('.profile').attr('src',friendCache.me.picture.data.url);
  welcome.find('.friend_name').html(friendCache.friends[0].first_name);
  welcome.find('frd_profile').attr('src',friendCache.friends[0].picture.data.url);
}
