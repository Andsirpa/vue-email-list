const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'Generate Random Mail',
            mailList: [],
            requiredMails: 10,

        };
    },

    methods: {},

    mounted() {
        // uso un for per generare più mail
        for (let i = 0; i < this.requiredMails; i++) {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                const mail = response.data.response;
                this.mailList.push(mail);
            });
        }
    },

});
app.mount('#app');