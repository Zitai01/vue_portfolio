<template>
    <header>
        <h2>Logo</h2>
        <div class="links">
            <button v-scroll-to="'#app'" >Introduction</button>
            <button v-scroll-to="'#hobby'" >Hobby</button>
            <button>About</button>
            <button>Work</button> 
            <button>Contact Me</button>

        </div>
        
    </header>
</template>

<script>
export default {
    name:'Nav'
}
</script>