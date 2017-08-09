<?php
date_default_timezone_set('Europe/Stockholm');
include 'common.library.php';
include 'header.php';
?>

<div class="container">
  <div class="jumbotron">
    <h3 class="text-center">You should watch this:</h3>
  </div>
</div>
<div class="container">
  <div id="movies" class="row"></div>
</div>
<script> randomMovie() </script>
</body>
</html>
