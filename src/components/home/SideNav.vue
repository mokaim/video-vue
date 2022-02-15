<template>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-lg-block " id="side-nav"
       style="display: none">
    <div class="d-flex flex-column flex-shrink-0 text-white bg-dark ps-3 pe-3 pb-3 me-0"
         id="side-nav-container">

      <div class="row justify-content-start">
        <div class="col-auto">
          <a href="#" class="navbar-brand">
            <i class='bx bx-play-circle bx-md'></i>
            <span class="h3">VideoProject</span>
          </a>
        </div>
      </div>
      <hr class="mt-5">
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="#" class="nav-link active" aria-current="page">
            <i class='bx bxs-home me-2'></i>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white">
            <i class='bx bxs-message-rounded-dots me-2' ></i>
            <span>Messages</span>

          </a>
        </li>

      </ul>
      <hr>
      <div class="nav-link text-white">
        <!--      <a href="#" class="d-flex align-items-center text-white text-decoration-none">
              </a>-->
        <a href="#" class="text-white text-decoration-none">
          <i class='bx bxs-log-out nav-side-logo-icon me-2'></i>
          <span>SIGN OUT</span>
        </a>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  name: "SideNav"
}
</script>

<style scoped>
#side-nav {
  position: fixed;
  width: 260px;
  top: 0;
  bottom: 0;
}

.nav-link.active {
  color: #2f2f2f !important;
  background-color: #fff !important;
}

#side-nav-container i {
  font-size: 1.5rem;
  vertical-align: -0.125em;
}

.layout_test {
  border-style: solid;
  border-color : white;
  border-width: 1px;
}

</style>