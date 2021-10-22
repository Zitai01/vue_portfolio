<template>
  <div id="app">
    <Nav />
    <a href="#hobby">Hobby</a>
    <Home />
    <Works />
    <button v-scroll-to="'#app'" >Back Top</button>
    <main>
      
      <div id="hobby">come here</div>
    </main>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import Nav from './components/Nav.vue'
import Works from './pages/Works.vue'
export default {
  name: 'App',
  components: {
    Nav,Home,Works
  }
}
</script>

<style>

</style>
