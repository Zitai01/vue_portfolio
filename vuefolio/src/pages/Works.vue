<template>
    <div  class="work">
        <h1>My Projects</h1>
        <div class="projects" >
        <div  :key="project.id" v-for="project in projects" >
            <ProjectCard :project="project" />
        </div>
        </div>
        </div>
</template>


<script>
import ProjectCard from '../components/ProjectCard.vue'
const projectarray = [
    {
        id:0,
        name:'Trackday Cars',
        skills:['React','Express','MongoDB','Mongoose'],
        pic:'trackdaycar.png',
        detail:'Full-stack MERN project.'
    },
    {
        id:1,
        name:'The Wingman bot',
        skills:['Express','Vue.js','Discord.js','Sequeilze','PostgreSQL','Oauth2'],
        pic:'wingmanbot.png',
        detail:'Full-stack PEVN project with oauth2 Authentication.'
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