<template>
  <header>
    <div class="main-layout">
      <nav>
        <router-link class="logo" to="/">
          <div>
            <img src="../assets/img/logo-cloud.jpg" alt="" />
          </div>
          <div class="logo-txt">niabnb</div>
        </router-link>
        <div class="header-right">
          <router-link class="hover" to="/stay">Explore</router-link>
          <router-link class="hover" to="/stay/edit/:id"
            >Become a Host</router-link
          >
          <router-link to="/login">
            <div class="login-btn">
              <div class="bar">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </div>
              <div class="user-img">
                <img
                  src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_100,h_100,g_face/v1638252722/cats/nmlj2xgdlobdsrf7q22y.jpg"
                  alt=""
                />
              </div>
            </div>
          </router-link>
        </div>
      </nav>
      <section class="loggedin-user" v-if="loggedInUser">
        <router-link :to="`/user/${loggedInUser._id}`">
          {{ loggedInUser.fullname }}
        </router-link>
        <span>{{ loggedInUser.score }}</span>
      </section>
    </div>
  </header>
</template>
<script>
export default {
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },
};
</script>