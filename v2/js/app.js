async function fetchData() {
    let data;
    try {
        // Try to fetch local data.json
        data = await import('../../data/data.json', { assert: { type: 'json' } });
        return data.default;
    } catch (error) {
        console.warn('Local data.json not found, fetching from external URL');
        // Fetch data from external URL
        const response = await fetch('https://akashgaba.github.io/data/data.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data from external URL');
        }
        data = await response.json();
        return data;
    }
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
                work_experiences: myJson.work_experiences,
                education_experiences: myJson.education_experiences,
                skills: transformedSkills
            }
        }
    });

    app.mount('#app');
}).catch(error => {
    console.error('Error fetching data:', error);
});
