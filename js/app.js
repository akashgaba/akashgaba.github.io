import myJson from '../data/data.json' assert {type: 'json'};
let app = Vue.createApp({
    data: function () {
        return {
            name: myJson.name,
            profession: myJson.profession,
            emails: myJson.emails.join(', '),
            phone_numbers: myJson.phone_numbers.join(', '),
            work_experiences : myJson.work_experiences
        }
    }
});
app.mount('#app');