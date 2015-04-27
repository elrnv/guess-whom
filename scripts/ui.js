var renderInvitableFriends = function() {
  var list = $('#fs .scrollable_list');
  list.children().remove('.item');
  var template = list.find('.template');
  for( var i = 0; i < friendCache.invitable_friends.length; i++ ) {
    var item = template.clone().removeClass('template').addClass('item');
    item.attr('data-id',friendCache.invitable_friends[i].id);
    item.find('.name').html(friendCache.invitable_friends[i].name);
    item.find('.profile').attr('src',friendCache.invitable_friends[i].picture.data.url);
    list.append(item);
  }
  list.children().remove('.loading');
  list.children().remove('.template');
}

var renderWelcome = function() {
  var welcome = $('#welcome');
  welcome.find('.first_name').html(friendCache.me.first_name);
  welcome.find('.profile').attr('src',friendCache.me.picture.data.url);
  welcome.find('.friend_name').html(friendCache.friends[0].first_name);
  welcome.find('.frd_profile').attr('src',friendCache.friends[0].picture.data.url);
}

var onLeaderboard = function() {
  renderInvitableFriends();
  $('#fs').removeClass('hidden');
}

var onMutualFriends = function() {
  renderMutualFriends();
  $('#mf').removeClass('hidden');
}

var renderMutualFriends = function() {
  var list = $('#mf .scrollable_list');
  list.children().remove('.item');
  var template = list.find('.template');
  for( var i = 0; i < friendCache.mutual_friends.length; i++ ) {
    var item = template.clone().removeClass('template').addClass('item');
    item.attr('data-id',friendCache.mutual_friends[i].id);
    item.find('.name').html(friendCache.mutual_friends[i].name);
    item.find('.profile').attr('src',friendCache.mutual_friends[i].picture.data.url);
    list.append(item);
  }
  list.children().remove('.loading');
  list.children().remove('.template');
  console.log('renderMutualFriends');
}

var showHome = function() {
  $('section').addClass('hidden');
  $('#home').removeClass('hidden');
}
