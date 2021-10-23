<template>
    <div class="contact">
        <h1>Contact Me</h1>
        <form @submit.prevent>
            <div>
                <input placeholder="Enter your name" type="text">
                <input placeholder="Your e-mail address" type="email">
            </div>
            
            <input placeholder="Ttile" type="title" class="input_title">
            <textarea placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
            <button>Send</button>
        </form>
    </div>
</template>
<script>
export default {
    name:'ContactMe'
}
</script>