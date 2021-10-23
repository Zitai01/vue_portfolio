<template>
    <div class="projectcard">
        <h2>{{project.name}}</h2>
    </div>
</template>

<script>
export default {
    name:'ProjectCard',
    props:[
        'project'
    ]
}
</script>