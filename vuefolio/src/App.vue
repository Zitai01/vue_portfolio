<template>
  <div id="app">
    <Nav />
    <!-- <a href="#hobby">Hobby</a> -->
    <Home />
    
    <AboutMe />
    <Works />
    <ContactMe />
    <button v-scroll-to="'#app'" >Back Top</button>
    <main>
      
      <div id="hobby"></div>
    </main>
  </div>
</template>

<script>
import ContactMe from './pages/ContactMe.vue'
import AboutMe from './pages/AboutMe.vue'
import Home from './pages/Home.vue'
import Nav from './components/Nav.vue'
import Works from './pages/Works.vue'
export default {
  name: 'App',
  components: {
    Nav,Home,Works,AboutMe,ContactMe
  },
  data:()=>({
    posY:null
  }),

methods:{
  updatePos(){
    this.posY = window.scrollY
    console.log(this.posY)
  }
},
mounted(){
  window.addEventListener('scroll', this.updatePos)
  console.log(window.innerHeight)
},
destroyed(){
  window.removeEventListener('scroll', this.updatePos)
}
}
</script>

<style>

</style>
