<template>
<div>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">My Music Player</h1>
            <p class="lead">Welcome to my simple music player featuring spotify.</p>
        </div>
    </div>
    <SearchBar
        @onSearch="onSearch"
    ></SearchBar>
    <GenreOption
        @changeGenre="changeGenre"
    ></GenreOption>
    <SongCard
        v-if="searchOn === false"
        :songs="songs"
    ></SongCard>
    <div v-else>
        <h1>
            By Artist :
        </h1>
        <SongCard
            :songs="filteredArtistSongs"
        ></SongCard>
            <!-- <p>{{filteredArtistSongs}}</p> -->
        <h1>
            By Title :
        </h1>
        <SongCard
            :songs="filteredTitleSongs"
        ></SongCard>
            <!-- <p>{{filteredTitleSongs}}</p> -->
    </div>
</div>
</template>

<script>
import SearchBar from "./components/SearchBar";
import GenreOption from "./components/DropdownGenres";
import SongCard from "./components/SongCard";
import axios from "./api/server.js";
export default {
  data() {
    return {
        songs: [],
        searchOn: false,
        searchKey: ''
    };
  },
  methods: {
      fetchAllSongs(){
          axios({
              method: 'GET',
              url: '/songs'
          })
          .then(({data})=>{
            //   console.log(data);
              this.songs = data
          })
          .catch(err => {
              console.log(err);
          })
      },
      onSearch(searchText){
          this.searchKey = searchText
          if (searchText) {
              this.searchOn= true
          } else {
              this.searchOn = false
          }
      },
      changeGenre(selectedGenre){
        //   console.log(selectedGenre, 'dari app');
        if (selectedGenre !== 'All') {
            axios({
                method: 'GET',
                url: '/genres/'
            })
            .then(({data})=>{
                let fetchedGenre = data.filter(genre => genre.genreName === selectedGenre)
                this.songs = fetchedGenre[0].Songs
            })
            .catch(err => {
                console.log(err);
            })        
        } else {
            this.fetchAllSongs()
        }
      }
  },
  components: {
      SearchBar,
      SongCard,
      GenreOption
  },
  created(){
      this.fetchAllSongs()
  },
  computed: {
      filteredArtistSongs : function(){
          if (this.searchOn === true) {
              return this.songs.filter(song => song.artist.toLowerCase().includes(this.searchKey.toLowerCase()))
            //   return this.searchKey
          }
      },
      filteredTitleSongs : function(){
          if (this.searchOn === true) {
              return this.songs.filter(song => song.songTitle.toLowerCase().includes(this.searchKey.toLowerCase()))
            //   return this.searchKey
          }
      }
  }
}
</script>

<style>

</style>