<template>
    <div id="msg">
        <p>{{msg}}</p>
    </div>

</template>

<script>
export default {
    data () {
        return {
            msg: 'all rights reserved. have some fun: code yourself ;)'
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
    #msg {
        @extend .panels;
        border-radius: 10px;
        padding: 0px 30px;
        margin: auto;
        font-variant: small-caps;
        text-align: center;
    }
</style>