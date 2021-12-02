<template>
  <header>
    <nav>                  
        <router-link class="logo" to="/">
        <div>
        <img src="../assets/img/logo-cloud.jpg" alt="">
        </div>        
        <div class="logo-txt">niabnb</div>               
        </router-link>     
      <div class="header-right">
        <router-link to="/stay">Explore</router-link>
        <router-link to="/stay/edit/:id">Become a Host</router-link>       
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