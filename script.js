const { createApp } = Vue

createApp({
    data() {
        return {
            couples: [
                "Ιάσων και Μήδεια", "Ηρώ και Λέανδρος", "Ορφέας και Ευρυδίκη", "Περσέας και Ανδρομέδα",
                "Θησέας και Αριάδνη", "Περικλής και Ασπασία", "Λεωνίδας και Γοργώ", "Αλέξανδρος και Ρωξάνη",
                "Πάρις και Ελένη", "Αγαμέμνων και Κλυταιμνήστρα", "Μενέλαος και Ελένη", "Οδυσσέας και Πηνελόπη",
                "Άδμητος και Άλκηστη", "Απόλλων και Δάφνη", "Ζευς και Ήρα"
            ],
            stories: {
                "Ιάσων και Μήδεια": "Ο Ιάσων... (Your Iason and Medea story)",
                "Ηρώ και Λέανδρος": "Η Ηρώ... (Your Hero and Leander story)",
                // ... (All your other stories here)
                "Ζευς και Ήρα": "Ο Δίας... (Your Zeus and Hera story)"
            },
            currentStory: null // Initially no story is shown
        }
    },
    methods: {
        showStory(couple) {
            this.currentStory = couple;
        }
    }
}).mount('#app')
