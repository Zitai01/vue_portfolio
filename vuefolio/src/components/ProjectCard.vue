<template>
    <div class="projectcard" v-if="img" 
    
          >
          <!-- :style="{'background-image':'url(' + require(`../assets/${this.img}`)+')'}"  -->
        <h2>{{project.name}}</h2>
        <a class="projectlinks" :href="project.links" target="_blank">{{project.comments}}</a>
        <p>{{project.detail}}</p>
        <a :href="project.github" class="github" target="_blank">
            <img src="../assets/github.png" alt="github_link">
        </a>
        <img class="projectpic" :src="require(`../assets/${this.img}`)" alt="img">

        <div class="skill_list project_skill">
        <div :key="skill" class="skill" v-for="skill in project.skills" >
            {{skill}}
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'ProjectCard',
    data:()=>({
        img:null
    }),
    props:[
        'project'
    ],
    methods:{
        link(){
            
            this.img = this.project.pic 
        }
    },
    mounted(){
        this.link()
    }
}
</script>