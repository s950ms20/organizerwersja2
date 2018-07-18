<template>
    <div class="myPanelProject">
    <p class="inlineclass">Choose project: 
        <select v-model="parentproject" @click="showTracks(), totalTime()">
            <option :value="project" v-for="
            (project, key) of projects" :key="key">
              {{project.title}}      
            </option>
        </select>
        <br>
        <span v-if="parentproject"><br>
           {{parentproject.title}}({{parentproject.deadline}})<br><br>
           <span class="shortinfo">{{parentproject.shortDesc}}<br>
           Total Time of project: {{totalTimeMinutes}} minutes and {{totalTimeseconds}} seconds.</span>
           <br><br>
           <ol v-for="(track, idx) in selectedTracks" :key='idx'>
               <strong>{{idx+1}}. {{track.titleOfTrack}}</strong> 
                <span class="shortinfo" v-show="track.checkBoxReady">Ready</span>
                <span class="shortinfo" v-show="track.checkBoxMix">Mixed</span>
                <span class="shortinfo" v-show="track.checkBoxMaster">Mastered</span>
                <strong>{{track.timeMinutes}}:{{track.timeSeconds}}</strong>
                <br><span class="shortinfo">{{track.trackDesc}}</span>
                <br>
           </ol>
           <!-- <button class="myButton" @click="totalTime()">totalTime</button> -->
           </span>
        <span v-else>
            Choose interesting project, to read more.
        </span>
    </p>
</div>
</template>

<script>
import { db } from '../main';
// import { QuerySnapshot } from '@firebase/firestore-types';

export default {
    data () {
        return {
            projects: [],
            actualsign:'+',
            plusminus: true,
            totalTimeMinutes: '',
            totalTimeseconds: '',
            trackURL: '',
            id: '',
            parentproject: false,
            tracks: db.collection('projects').doc('parentproject').collection('tracks'),
            checkBoxReady: '',
            checkBoxMix: '',
            checkBoxMaster: '',
            titleOfTrack: '',
            trackDesc: '',
            timeMinutes: '',
            timeSeconds: '',
            track: '',
            actualTracks: this.parentproject,
            selectedTracks: []
        }
    },
    created() {

    },
    
    firestore () {
        return {
            projects: db.collection('projects'),
            actualTracklist: db.collection('projects').doc('parentproject').collection('tracks')
    }
  },

  methods: {
        remove (id) {
        db.collection('projects').doc(id).delete()
    },
        totalTime () {
            setTimeout (
                () => {
                let sumMins = 0;
                let sumSecs = 0;
                for (let track of this.selectedTracks) {
                    sumMins += parseInt(track.timeMinutes);
                    sumSecs += parseInt(track.timeSeconds);
                }
                let result = ((sumMins * 60) + sumSecs );
                this.totalTimeMinutes = parseInt(result / 60);
                this.totalTimeseconds = result - (parseInt(result / 60) * 60);
                },
                1500);
            },
        showTracks () {
            setTimeout
            ( () => {
            this.selectedTracks.length = 0;
            db.collection('projects').doc(this.parentproject.id).collection('tracks')
            .get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.selectedTracks.push(doc.data());
                }
                )
                })
            },
            1000);
        }

        }
}

</script>

<style lang="scss" scoped>
@import "../main";

.myPanelProject {

    @extend .panels;
    background: $defaultBgkColor * 1.2;
    
    .myButton {
        padding: 10px 15px;
        margin: 35px 0px;
        }
    }
</style>