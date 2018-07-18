<template>
    <div class="myPanelTrack">
    <p v-for="(track, index) in projects" v-bind:key="index">
        <strong>0{{index+1}}. {{track.titleOfTrack}}</strong> 
        
        <span v-show="track.checkBoxReady">Ready</span>
        <span v-show="track.checkBoxMix">Mixed</span>
        <span v-show="track.checkBoxMaster">Mastered</span>
        <strong>{{track.timeMinutes}}:{{track.timeSeconds}}</strong>
                      
        <button class="myButton" @click="remove(track.id)">Delete</button>
        <button class="myButton" @click="showid(track.id)">show</button>
        <br>
        
        <span class="shortinfo">{{track.trackDesc}}</span>

        <br><span>{{track.trackURL}}</span> 
    </p>
</div>
</template>

<script>

import { db } from '../main' 

export default {
    data () {
        return {
            
            projects: [],
            actualsign:'+',
            plusminus: true,
            singletracks: [],
            trackSRC: ''
        }
    },
    firestore () {
        return {
            projects: db.collection('projects'),
            singletracks: db.collection('singletracks'),

    }
  },
  methods: {
        remove (id) {
        db.collection('projects').doc(id).delete()
    },
        showid (id) {
      
      db.collection("projects")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            // console.log(`{{doc.id}}  => {{doc.data()}}`);
            
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });


    },
        changesign(actualsign) {
            this.plusminus = !this.plusminus;
            if (this.plusminus) {
                this.actualsign = "+"
            } else {
                this.actualsign = "-"
            }
        }
  }
}
</script>

<style lang="scss" scoped>

@import "../main";

.myPanelTrack {
    @extend .panels;
    // background: rgb(255, 94, 0);
}

</style>