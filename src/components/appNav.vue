<template>
<div>
    <ul>
        <li class="linav"><router-link to="/" exact>Show Projects</router-link></li>
        <li class="linav"><router-link to="/addproject" exact>Add Project</router-link></li>
        <li class="linav"><router-link to="/addtrack" exact>Add Track</router-link></li><br>
        <!-- <li class="tempo"><router-link to="/showtrack" exact>Just a temporary 'Show Tracks' button</router-link></li> -->
    </ul>
</div> 
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>

@import "../main";

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

}

.linav {
    @extend .panels;
    width: 180px;
    display: inline-block;
    border-radius: 10px;
    padding: 10px;
    margin: 15px auto 0px auto;
    text-align: center;
    }

.tempo {
    @extend .linav;
    width: 600px;
    }


a {
    color: white;
    text-decoration: none;
}



</style>