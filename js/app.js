import myJson from '../data/data.json' assert {type: 'json'};
let app = Vue.createApp({
    data: function () {
        let transformedSkills = myJson.skills.map(skill => ({
            name: skill.name,
            items: skill.items.join(', ')
        }));
        return {
            name: myJson.name,
            profession: myJson.profession,
            emails: myJson.emails.join(', '),
            phone_numbers: myJson.phone_numbers.join(', '),
            work_experiences : myJson.work_experiences,
            education_experiences : myJson.education_experiences,
            skills : transformedSkills
        }
    }
});
app.mount('#app');
// In your main Vue component (e.g., App.vue)
mounted() {
    // Emit a custom event when the Vue component is mounted and rendered
    document.dispatchEvent(new Event('vue-rendered'));
}
