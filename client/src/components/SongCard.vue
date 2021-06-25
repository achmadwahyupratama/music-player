<template>
    <div class="card-container overflow-auto">
        <Song
            v-for="song in songs"
            :key="song.id"
            :embedCode="song.embedCode"
        ></Song>
        <!-- <Song></Song> -->
    </div>
</template>

<script>
import Song from "./Song"
export default {
    name: 'SongCard',
    props: ["songs"],
    components: {
        Song
    }
}
</script>

<style scoped>
.card-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 50px;
    margin-bottom: 50px;
    max-height: 750px;
}
</style>