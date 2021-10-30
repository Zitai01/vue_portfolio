<template>
    <header>
        <img src="../assets/cv_resume2.png" alt="">
        <div class="links">
            <button v-scroll-to="'#app'" > <strong>Intro</strong> </button>
            
            <button v-scroll-to="'.about'" ><strong>About</strong> </button>
            <button v-scroll-to="'.work'"><strong>Work</strong> </button>
            <!-- <button v-scroll-to="'#hobby'" > <strong>Blog</strong> </button>  -->
            <button v-scroll-to="'.contact'" > <strong>Contact Me</strong> </button>
            <a href="https://docs.google.com/document/d/1WwANQjrzeuyCfMqZWLKAV7oulQj4F6yHhX7g-0Vum0k/edit?usp=sharing" target="_blank" tag="button"> <button id="resume"  >Resume</button></a>
            

        </div>
        
    </header>
</template>

<script>
export default {
    name:'Nav'
}
</script>