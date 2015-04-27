var renderOpponents = function() {
  var plist = $('.content #playing-friends-list');
  plist.children().remove('.item');
  var template = plist.find('.template');
  for( var i = 0; i < friendCache.friends.length; i++ ) {
    var item = template.clone().removeClass('template').addClass('item');
    item.attr('data-id',friendCache.friends[i].id);
    item.find('.profile').attr('title',friendCache.friends[i].name);
    item.find('.profile').attr('src',friendCache.friends[i].picture.data.url);
    plist.append(item);
  }
  plist.children().remove('.template');

  var ilist = $('.content #invitee-list');
  ilist.children().remove('.item');
  template = ilist.find('.template');
  for( var i = 0; i < friendCache.invitable_friends.length; i++ ) {
    var item = template.clone().removeClass('template').addClass('item');
    item.attr('data-id',friendCache.invitable_friends[i].id);
    item.find('.profile').attr('title',friendCache.invitable_friends[i].name);
    item.find('.profile').attr('src',friendCache.invitable_friends[i].picture.data.url);
    ilist.append(item);
  }
  plist.children().remove('.loading');
  ilist.children().remove('.template');
  $('[data-toggle="tooltip"]').tooltip({placement : "auto", html : true})
}

var renderWelcome = function() {
  var welcome = $('#home');
  welcome.find('.first_name').html(friendCache.me.first_name);
  welcome.find('.profile').attr('src',friendCache.me.picture.data.url);
}

var showHome = function() {
  $('section').addClass('hidden');
  $('#home').removeClass('hidden');
}
