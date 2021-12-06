<template>
  <div id="app main-layout">
    <user-msg/>
    <app-header />
    <router-view/>
  </div>
</template>

<script>

import appHeader from './cmps/app-header'
import appFooter from './cmps/app-footer'
import userMsg from './cmps/user-msg'

export default {
    created() {
    this.$store.dispatch({ type: "loadStays" });
  },
  components: {
    appHeader,
    appFooter,
    userMsg
  }
}
</script>

