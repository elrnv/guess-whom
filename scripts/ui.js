var renderOpponents = function() {
  var list = $('.content #invitee-list');
  list.children().remove('.item');
  var template = list.find('.template');
  for( var i = 0; i < friendCache.friends.length; i++ ) {
    var item = template.clone().removeClass('template').addClass('item');
    item.attr('data-id',friendCache.friends[i].id);
    item.find('.profile').attr('title',friendCache.friends[i].name);
    item.find('.profile').attr('src',friendCache.friends[i].picture.data.url);
    list.append(item);
  }
  for( var i = 0; i < friendCache.invitable_friends.length; i++ ) {
    var item = template.clone().removeClass('template').addClass('item');
    item.attr('data-id',friendCache.invitable_friends[i].id);
    item.find('.profile').attr('title',friendCache.invitable_friends[i].name);
    item.find('.profile').attr('src',friendCache.invitable_friends[i].picture.data.url);
    list.append(item);
  }
  list.children().remove('.loading');
  list.children().remove('.template');
  $('[data-toggle="tooltip"]').tooltip({placement : "auto", html : true})
}

var renderWelcome = function() {
  var welcome = $('#home');
  welcome.find('.first_name').html(friendCache.me.first_name);
  welcome.find('.profile').attr('src',friendCache.me.picture.data.url);
  welcome.find('.friend_name').html(friendCache.friends[0].first_name);
  welcome.find('.frd_profile').attr('src',friendCache.friends[0].picture.data.url);
}

var showHome = function() {
  $('section').addClass('hidden');
  $('#home').removeClass('hidden');
}
