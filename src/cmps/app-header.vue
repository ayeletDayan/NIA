<template>
  <header>
    <nav>
      <div>
        <router-link to="/">
          <img alt="logo" src="../assets/img/logo-bed.jpg" />
          <h2>NIAb&b</h2>
        </router-link>
      </div>
      <div class="header-right">
        <router-link to="/stay/edit/:id">Become a host</router-link> |
        <router-link to="/stay">Explore</router-link> |
        <router-link to="/login">Login/Signup</router-link>
      </div>
    </nav>
    <section class="loggedin-user" v-if="loggedInUser">
      <router-link :to="`/user/${loggedInUser._id}`">
        {{ loggedInUser.fullname }}
      </router-link>
      <span>{{ loggedInUser.score }}</span>
    </section>
  </header>
</template>
<script>
export default {
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
  }
};
</script>