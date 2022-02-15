<template>
  <!--  TOP 네비게이션 -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between flex-nowrap" id="top-nav">

    <div class="d-lg-block" style="display: none">
    </div>

    <div class="d-block ms-3 ms-lg-0">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navSearchBar"
              aria-controls="navSearchBar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <form class="d-lg-block" style="display: none; width: 550px">
        <i class='bx bx-search-alt text-white h3 search-icon'></i>
        <input class="form-control search-bar" type="search" placeholder="Search" aria-label="Search"
               data-toggle="collapse">
      </form>

    </div>
    <div class="d-lg-none">
      <a href="#" class="navbar-brand">
        <i class='bx bx-play-circle bx-sm'></i>
        <span class="h3">VideoProject</span>
      </a>
    </div>

    <div class="d-flex align-items-center me-3">
      <a href="#" class="navbar-notification me-3" style="">
        <i class='bx bxs-bell'></i>
      </a>
      <a href="#">
        <img src="/img/java.png" alt="ddwq" width="32" height="32" class="img-thumbnail rounded-circle">
      </a>
    </div>


  </nav>
</template>

<script>

export default {
  name: "TopNav",
  data: function() {
    return {
      testPath : 'http://bootdey.com/img/Content/avatar/avatar1.png'

    }
  }
}
</script>

<style scoped>


#top-nav {
  background-color: var(--navbar-color) !important;
  position: fixed;
  top: 0;
  left: 0px;
  right: 0px;
  flex-direction: row;

}


@media (min-width: 992px) {
  #top-nav {
    background-color:#ddd;
    position: fixed;
    top: 0;
    left: 260px;
    right: 0px;
  }
}

</style>