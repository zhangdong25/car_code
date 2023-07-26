<template>
  <div id="app">
    <!-- <Sidebar></Sidebar> -->
    <!-- <Order></Order> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Order from './pages/Order'

export default {
  name: 'App',
  components: {
    Sidebar,
    Order
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  margin: 0;
  padding: 0;
}
</style>
