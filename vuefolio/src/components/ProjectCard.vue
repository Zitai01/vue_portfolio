<template>
    <div class="projectcard" v-if="img">
        <h2>{{project.name}}</h2>
        <p>{{project.detail}}</p>
        <img class="projectpic" :src="require(`../assets/${this.img}`)" alt="img">
        <div class="skill_list">
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