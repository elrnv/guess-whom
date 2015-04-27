<!DOCTYPE html>
<html>
  <head>
    <title>Guess Whom?</title>
    <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="//connect.facebook.net/en_US/sdk.js"></script>

    <script src="scripts/social.js"></script>
    <script src="scripts/core.js"></script>
    <script src="scripts/ui.js"></script>
    <!--<script src="scripts/game.js"></script>-->
    <link href="layout/style.css" rel="stylesheet" type="text/css">

    <!--[if IE]><script src="scripts/excanvas.js"></script><![endif]-->
  </head>

  <body>
    <div id="fb-root"></div>
    <section id="home" class="hidden">
      <div id="welcome">
        <h1>Welcome <span class="first_name">Player</span></h1>
        <img class="profile" src="images/profile.png" />
        <h1>Your Friend, <span class="friend_name">Friend</span></h1>
        <img class="frd_profile" src="images/profile.png" />
      </div>
      <div class="hidden" id="fs">
        <div class="nofriends">
          <p>Guess Whom! is better with friends! Click here to see your friends' scores</p>
          <button class"friendPermissions">Grant user_friends</button>
        </div>
        <div class="friends">
          <h1>Leaderboard</h1>
          <ul class="scrollable_list">
            <li class="loading">Loading...</li>
            <li class="template">
              <img src="images/profile.png" class="profile small" />
              <div class="namecontainer">
                <span class="rank">1</span>. <span class="name">Ali</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="hidden" id="mf">
        <div class="nofriends">
          <p>Guess Whom! is better with friends! Click here to see your friends' scores</p>
          <button class"friendPermissions">Grant user_friends</button>
        </div>
        <div class="friends">
          <h1>Mutual Friends</h1>
          <ul class="scrollable_list">
            <li class="loading">Loading...</li>
            <li class="template">
              <img src="images/profile.png" class="profile small" />
              <div class="namecontainer">
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </body>
</html>
