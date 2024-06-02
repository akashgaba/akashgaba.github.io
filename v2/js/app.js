import myJson from '../../data/data.json' assert {type: 'json'};
let app = Vue.createApp({
    data: function () {
        let transformedSkills = myJson.skillsV2.map(skill => ({
            name: skill.name,
            items: skill.items.join(', ')
        }));
        return {
            name: myJson.name,
            phone_numbers: myJson.phone_numbers.join(', '),
            emails: myJson.emails.join(', '),
            summary: myJson.summary,
            work_experiences: myJson.work_experiences,
            education_experiences: myJson.education_experiences,
            skills: transformedSkills
        }
    }
});
app.mount('#app');
