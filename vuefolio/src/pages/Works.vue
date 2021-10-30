<template>
    <div  class="work">
        <h1>My Projects</h1>
        <div class="projects" >
        <div  :key="project.id" v-for="project in projects" >
            <ProjectCard :project="project" />
            
        </div>
        <!-- <div class="projectcard" >
            <h2>Sudoku.ZH</h2>
            <p>A vanilla JavaScript sudoku game only using JavaScript, CSS and HTML.</p>
            //<img class="projectpic" src="../assets/sudoku.png" alt="">
            <a href="./static/js_sudoku/index.html" target="_blank">Play it now</a>
            
        </div> -->
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
        detail:'Full-stack MERN project.',
        links:'https://murmuring-sands-34948.herokuapp.com/',
        comments:'Links',
        github:'https://github.com/Zitai01/TrackdayCar'
    },
    {
        id:1,
        name:'The Wingman bot',
        skills:['Express','Vue.js','Discord.js','Sequeilze','PostgreSQL','Oauth2'],
        pic:'wingmanbot.png',
        detail:'Full-stack PEVN project with oauth2 Authentication.',
        github:'https://github.com/Zitai01/The_WingmanBot'

    },
    {
        id:2,
        name:'Sudoku.ZH',
        skills:['JavaScript','CSS','HTML'],
        pic:'sudoku.png',
        detail:'A vanilla JavaScript sudoku game.',
        links:'/static/sudoku/index.html',
        comments:'Play it now!',
        github:'https://github.com/Zitai01/js_sudoku'
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