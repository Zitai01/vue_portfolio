<template>
  <div id="app">
    <Nav />
    <Home />
    <AboutMe />
    <Services />
    <Works />
    <ContactMe />
    <button v-scroll-to="'#app'" >Back To Top</button>
    <main>
      
      <div id="hobby"></div>
    </main>
  </div>
</template>

<script>
import Services from './pages/Services.vue'
import ContactMe from './pages/ContactMe.vue'
import AboutMe from './pages/AboutMe.vue'
import Home from './pages/Home.vue'
import Nav from './components/Nav.vue'
import Works from './pages/Works.vue'
export default {
  name: 'App',
  components: {
    Nav,Home,Works,AboutMe,ContactMe,Services
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
