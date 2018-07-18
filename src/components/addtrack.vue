<template>

    <div class="mypanel">
    <form @submit.prevent="addTrack(titleOfTrack, timeMinutes, timeSeconds, trackDesc, checkBoxReady, checkBoxMix, checkBoxMaster, parentproject, trackURL)">
    <input type="text" v-model="titleOfTrack" placeholder="Title of track" required>
    <input type="text" v-model="timeMinutes" placeholder="Minutes" size="7"><input type="text" v-model="timeSeconds" placeholder="Seconds" size="7"><br>
    
    <p class="inlineclass">Ready <input type="checkbox" value="ready" v-model="checkBoxReady"></p>
    <p class="inlineclass">Mixed <input type="checkbox" value="mixed" v-model="checkBoxMix"></p>
    <p class="inlineclass">Mastered <input type="checkbox" value="mastered" v-model="checkBoxMaster"></p><br>
    <input type="text" v-model="trackDesc" size="46" placeholder="Short track info"><br>

    <p class="inlineclass">This track will be part of:</p>
    <select v-model="parentproject">
        <option :value="project" v-for="
        (project, key) of projects" v-bind:key="key" selected>
        {{project.title}}      
        </option>   
          
    </select>
    <!-- <p><input type="text" v-model="parentproject.id" size="46" placeholder="Link to your track on clyp"></p> -->
    <input type="text" v-model="trackURL" size="46" placeholder="Link to your track on soundcloud"><br>

    <br>
    <button class="myButton" type="submit">Add To Project</button>
    <br>
</form>
    </div>
</template>

<script>

// let spp = projects.selected.title;

import { db } from '../main' 

export default {
    data () {
        return {
            // selectedParentProject: (projects.selected.title),
            projects: [],
            singletracks: [],
            checkBoxReady: false,
            checkBoxMix: false,
            checkBoxMaster: false,
            titleOfTrack: '',
            trackDesc: '',
            timeMinutes: '',
            timeSeconds: '',
            'project.id': '',
            parentproject: '',
            trackURL : '',
            id: ''
    }
    },
    firestore () {
        return {
            singletracks: db.collection('singletracks'),
            projects: db.collection('projects')
        }
    },
    methods: {
        addTrack(titleOfTrack, timeMinutes, timeSeconds, trackDesc, checkBoxReady, checkBoxMix, checkBoxMaster, parentproject, trackURL) {
            db.collection('projects').doc(parentproject.id).collection('tracks').doc(titleOfTrack).set({
                        titleOfTrack, 
                        timeMinutes, 
                        timeSeconds, 
                        trackDesc, 
                        checkBoxReady, 
                        checkBoxMix, 
                        checkBoxMaster, 
                        parentproject, 
                        trackURL
                    }
                    ).then(console.log(parentproject.id));
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../main";
.mypanel {
    @extend .panels;
    background: $defaultBgkColor * 1.2;
    text-align: center;
}
</style>