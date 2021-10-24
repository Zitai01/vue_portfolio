<template>
    <header>
        <img src="../assets/cv_resume2.png" alt="">
        <div class="links">
            <button v-scroll-to="'#app'" > <strong>Intro</strong> </button>
            
            <button v-scroll-to="'.about'" ><strong>About</strong> </button>
            <button v-scroll-to="'.work'"><strong>Work</strong> </button>
            <!-- <button v-scroll-to="'#hobby'" > <strong>Blog</strong> </button>  -->
            <button v-scroll-to="'.contact'" > <strong>Contact Me</strong> </button>

        </div>
        
    </header>
</template>

<script>
export default {
    name:'Nav'
}
</script>