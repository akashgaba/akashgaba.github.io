async function fetchData() {
    let data;
    const origin = window.location.origin;
    const response = await fetch(`${origin}/data/data.json`);
        if (!response.ok) {
            throw new Error('Failed to fetch data from external URL');
        }
        data = await response.json();
        return data;
}

fetchData().then((myJson) => {
    let transformedSkills = myJson.skillsV2.map(skill => ({
        name: skill.name,
        items: skill.items.join(', ')
    }));

    let app = Vue.createApp({
        data: function () {
            return {
                name: myJson.name,
                phone_numbers: myJson.phone_numbers.join(', '),
                emails: myJson.emails.join(', '),
                summary: myJson.summary,
                work_experiences: myJson.work_experiences2,
                education_experiences: myJson.education_experiences,
                skills: transformedSkills
            }
        }
    });

    app.mount('#app');
}).catch(error => {
    console.error('Error fetching data:', error);
});
