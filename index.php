<!DOCTYPE html>
<html>
  <head>
	  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Guess Whom?</title>
    <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="//connect.facebook.net/en_US/sdk.js"></script>

    <script src="scripts/social.js"></script>
    <script src="scripts/core.js"></script>
    <script
    src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"
    type="text/javascript"></script>
    <script src="scripts/ui.js"></script>
    <!--<script src="scripts/game.js"></script>-->
    <link href="style/style.css" rel="stylesheet" type="text/css">
	  <link rel="stylesheet" type="text/css" href="style/screen.css" />
    <link href='//fonts.googleapis.com/css?family=Dancing+Script' rel='stylesheet' type='text/css'>

    <!--[if IE]><script src="scripts/excanvas.js"></script><![endif]-->
  </head>

  <body>
    <div id="fb-root"></div>

    <section id="home" class="container hidden">
      <h1>Guess Whom?</h1>
      <h2>Welcome <span class="first_name">Player</span>. Choose a friend to
      play with!</h2>
      <div class="sidebar">
        <ul class="nav">
          <li><a href="#">New game</a></li>
          <li><a href="#">Active games</a></li>
        </ul>
      </div>
      <div class="panel">
        <div class="content">
          <div class="nofriends">
            <p>Guess Whom! is better with friends! Click here to see your friends' scores</p>
            <button class="friendPermissions">Grant user_friends</button>
          </div>
          <div class="friends">
            <h3>Friends already playing "Guess Whom?":</h3>
            <ul class="faces" id="playing-friends-list">
              <li class="loading">Loading...</li>
              <li class="template">
                <a href="#"><img class="profile" 
                data-toggle="tooltip" title="" width="80px"></a>
                <!--<a href="#" class="guess"></a>-->
              </li>
            </ul>
            <h3>Invite friends to play:</h3>
            <ul class="faces" id="invitee-list">
              <li class="template">
                <a href="#"><img class="profile" 
                data-toggle="tooltip" title="" width="80px"></a>
                <!--<a href="#" class="guess"></a>-->
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="game" class="container hidden">
      <h1>Guess Whom?</h1>
      <h2>Playing against <strong>Egor Larionov</strong></h2>
      <div class="sidebar">
        <!--<div class="points">500</div>-->
        <ul class="nav">
          <li><a href="#">New game</a></li>
          <li><a href="#">Active games</a></li>
        </ul>
      </div>
      <div class="panel">
        <div class="content">
          <ul class="faces" id="friends-list">
            <li>
              <a href="#"><img src="img/resources/egor.jpg"
              data-toggle="tooltip" title="<b>Tooltip on left</b>" width="80px"></a>
              <!--<a href="#" class="guess"></a>-->
            </li>
            <li class="inactive">
              <a href="#"><img src="img/resources/egor.jpg" width="80px"></a>
            </li>
          </ul>
        </div>
      </div>
      <form>
        <input type="text" name="question" id="question" placeholder="Ask Egor a question!">
        <a id="ask" href="#">Ask</a>
      </form>
    </section>
  </body>
</html>

<!-- Monocle from http://opengameart.org/content/monocle-and-a-moustache -->
