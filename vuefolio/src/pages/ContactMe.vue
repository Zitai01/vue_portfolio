<template>
    <div class="contact">
        <h1>Contact Me</h1>
        <div>Don't worry, I'm fully vaccined.</div>
        <div class="forms">
            <div>
            
            <div class="socials">
                <a href="https://www.linkedin.com/in/zitai-huang/">
            <img class="icon" src="../assets/linkedin-logo-2.png" alt="icon">
            Linkedin
            </a>
            </div>
            <div class="socials" >
                <a href="https://github.com/Zitai01">
                <img class="icon" src="../assets/github.png" alt="icon">
                Github
            </a>
            </div>
            <div class="socials">
            <img class="icon" src="../assets/email.png" alt="icon">
            E-mail: zpassiont@gmail.com
            </div>
            
            
             </div>
        <form @submit.prevent="sendEmail" ref="form"   >
           
            <div class="inputs">
                <input placeholder="Enter your name" type="text"  name="name">
                <input placeholder="Your e-mail address" type="email" name="email">
            </div>
            
            <input placeholder="Ttile" type="title" class="input_title"  name="title">
            <textarea placeholder="Message"  id="" cols="30" rows="10" name="message" ></textarea>
            <button>Send me a message</button>
        </form>
        </div>
    </div>
</template>
<script>
import emailjs from 'emailjs-com'

export default {
    name:'ContactMe',
    methods:{
        sendEmail() {
            emailjs.sendForm('service_xhmelzd', 'template_u70c3pq', this.$refs.form, 'user_wJoZQDCawq8BU2WLgQOYV')
                .then((result) => {
                    console.log('SUCCESS!', result.text);
                    alert('Message sent, thank you.')


                }, (error) => {
                    console.log('FAILED...', error.text);
                });
            this.$refs.form.title.value=''
            this.$refs.form.name.value=''
            this.$refs.form.email.value=''
            this.$refs.form.message.value=''


    }
    }
}
</script>