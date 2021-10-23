<template>
    <header>
        <h2>Logo</h2>
        <div class="links">
            <button v-scroll-to="'#app'" >Introduction</button>
            
            <button v-scroll-to="'.about'" >About</button>
            <button v-scroll-to="'.projects'">Work</button>
            <button v-scroll-to="'#hobby'" >Blog</button> 
            <button v-scroll-to="'.contact'" >Contact Me</button>

        </div>
        
    </header>
</template>

<script>
export default {
    name:'Nav'
}
</script>