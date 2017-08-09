<?php
date_default_timezone_set('Europe/Stockholm');
include 'common.library.php';
include 'header.php';
?>

<div class="container">
  <div class="jumbotron">
    <h3 class="text-center">Search movie</h3>
    <form id="searchForm">
      <input type="text" class="form-control" id="searchText" placeholder="Search movie">
    </form>
  </div>
</div>
<div class="container">
  <div id="movie" class="well"></div>
</div>
  <script> getMovie() </script>
</body>
</html>
