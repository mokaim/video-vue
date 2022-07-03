<template>
  <div class="container-md">

    <div class="modal modal-signin position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSignin">
      <div class="modal-dialog" role="document">
        <div class="modal-content rounded-4 shadow">
          <div class="modal-header p-5 pb-4 border-bottom-0">
            <!-- <h5 class="modal-title">Modal title</h5> -->
            <h2 class="fw-bold mb-0">Sign up for free</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body p-5 pt-0">
            <form class="">
              <div class="form-floating mb-3">
                <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
              </div>
              <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
              <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
              <hr class="my-4">
              <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
              <button class="w-100 py-2 mb-2 btn btn-outline-dark rounded-3" type="submit">
                <svg class="bi me-1" width="16" height="16"><use xlink:href="#twitter"/></svg>
                Sign up with Twitter
              </button>
              <div class="py-2 mb-2 text-center">
                <a @click="loginWithKakao"><img class="w-50" :src="kakao_img"></a>
              </div>


            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      kakao_img : "./img/kakao.png",
      kakao_authorization: "https://www.naver.com"
    }
  },
  created() {

  },

  methods: {
    loginWithKakao() {
      this.$kakao.Auth.login({
        success: function(authObj) {
          let access_token = authObj.access_token;
          let refresh_token = authObj.refresh_token;

          console.log('accessToken : ' + access_token);
          console.log('refreshToken : ' + refresh_token);
        },
        fail: function(err) {
          alert(JSON.stringify(err))
        },
      })
    }
  }
}
</script>

<style scoped>

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

</style>