<template>
    <div  class="work">
        <div class="gap" ></div>
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
        id:2,
        name:'Sudoku.ZH',
        skills:['JavaScript','CSS','HTML'],
        pic:'sudoku.png',
        detail:'A responsive and fun vanilla JavaScript weekend project.',
        links:'https://ztsudoku.surge.sh/',
        comments:'Play it now!',
        github:'https://github.com/Zitai01/js_sudoku'
    },
    {
        id:1,
        name:'The Wingman bot',
        skills:['Express','Vue.js','Discord.js','Sequeilze','PostgreSQL','Oauth2'],
        pic:'wingmanbot.png',
        detail:"The wingman bot is a discord bot with it's own full-stack PEVN website,it is my biggest personal project, after authurize it to your discord guild, you can use it by typing commands like 'wb joke', then the bot will tell a random joke in the same channel.\n I also utilized oauth2 authentication to improve the safety of the website and simplize the login process. ",
        github:'https://github.com/Zitai01/The_WingmanBot',
        links:'https://wingmanbot.herokuapp.com/',
        comments:'Visit(You will need a discord account to sign in.)'

    },
    {
        id:0,
        name:'Trackday Cars',
        skills:['React','Express','MongoDB','Mongoose'],
        pic:'trackdaycar.png',
        detail:'Trackday Cars is a Full-stack MERN project that helps people understand more about cars that used on both road and racetrack.',
        links:'https://murmuring-sands-34948.herokuapp.com/',
        comments:'Visit',
        github:'https://github.com/Zitai01/TrackdayCar'
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