<template>
    <div>
        resume
        <pdf src="/resume_zitai.pdf"></pdf>
    </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
    name:'Resume',
    components:{
        pdf
    }
}
</script>