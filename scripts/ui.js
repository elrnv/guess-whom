var renderScores = function() {
  var list = $('#leaderboard .scrollable_list');
  list.children().remove('.item');
  var template = list.find('.template');
  for( var i = 0; i < friendCache.scores.length; i++ ) {
    var item = template.clone().removeClass('template').addClass('item');
    item.attr('data-id',friendCache.scores[i].user.id);
    item.attr('data-first-name',friendCache.scores[i].user.first_name);
    item.find('.rank').html(i+1);
    item.find('.score').html(friendCache.scores[i].score);
    item.find('.name').html(friendCache.scores[i].user.name);
    item.find('.profile').attr('src',friendCache.scores[i].user.picture.data.url);
    list.append(item);
  }
}

var renderFriends = function() {
  var list = $('#fs .scrollable_list');
  list.children().remove('.item');
  var template = list.find('.template');
  debugger;
  for( var i = 0; i < friendCache.invitable_friends.length; i++ ) {
    var item = template.clone().removeClass('template').addClass('item');
    item.attr('data-id',friendCache.friends[i].id);
    item.find('.name').html(friendCache.friends[i].name);
    item.find('.profile').attr('src',friendCache.friends[i].picture.data.url);
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
  renderFriends();
  $('#fs').removeClass('hidden');
}

var showHome = function() {
  $('section').addClass('hidden');
  $('#home').removeClass('hidden');
}
