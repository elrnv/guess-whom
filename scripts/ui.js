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
}

var onLeaderboard = function() {
  renderInvitableFriends();
  $('#fs').removeClass('hidden');
}

var showHome = function() {
  $('section').addClass('hidden');
  $('#home').removeClass('hidden');
}
