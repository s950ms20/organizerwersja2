<template>
    <div class="mypaneladdProject">
    <form @submit.prevent="addProject(title, shortDesc, deadline)">
    <input v-model="title" placeholder="Title of project" required>
    <input v-model="deadline" placeholder="Your Deadline"><br>
    <input v-model="shortDesc" size="46" placeholder="Short description">
    <br/><br/>
    <button class="myButton" type="submit">Add New Project</button>
    <br>
</form>
    </div>
</template>

<script>

import { db } from '../main' 

export default {
    data () {
        return {
            projects: [],
            title: '',
            shortDesc: '',
            deadline: ''
        }
    },
    firestore () {
        return {
            projects: db.collection('projects')
        }
    },
    methods: {
        addProject (title, shortDesc, deadline) {
            db.collection('projects').add({title, shortDesc, deadline});
        }
    }
}
</script>

<style lang="scss" scoped>

@import "../main";

.mypaneladdProject {
    @extend .panels;
    background: $defaultBgkColor * 1.2;
    text-align: center;
}

</style>