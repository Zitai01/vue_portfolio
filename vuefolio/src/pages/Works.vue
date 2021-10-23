<template>
    <div class="projects">
        <h1>My Servics</h1>
        <div :key="project.id" v-for="project in projects" >
            <ProjectCard :project="project" />
        </div>
        </div>
</template>


<script>
import ProjectCard from '../components/ProjectCard.vue'
export default {
    name:'Works',
    data:()=>({
        projects:[]
    }),
    components:{
        ProjectCard
    }
}
</script>