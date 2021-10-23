<template>
    <div class="projects">
        <h1>My Projects</h1>
        <div :key="project.id" v-for="project in projects" >
            <ProjectCard :project="project" />
        </div>
        </div>
</template>


<script>
import ProjectCard from '../components/ProjectCard.vue'
const projectarray = [
    {
        id:0,
        name:'Trackday Cars'
    },
    {
        id:1,
        name:'The Wingman bot'
    }
]

export default {
    name:'Works',
    data:()=>({
        projects:[]
    }),
    components:{
        ProjectCard
    },
    mounted(){
        this.projects = projectarray
    }
}
</script>