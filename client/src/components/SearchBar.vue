<template>
    <div class="container search">
        <br/>
        <div class="row justify-content-center">
              <div class="col-12 col-md-10 col-lg-8">
                  <form class="card card-sm">
                      <div class="card-body row no-gutters align-items-center">
                          <div class="col-auto">
                              <i class="fas fa-search h4 text-body"></i>
                          </div>
                          <!--end of col-->
                          <div class="col">
                              <input v-model="searchText" @keyup="searchArtistAndTitle" class="form-control form-control-lg form-control-borderless" type="text" placeholder="Search by artist or title">
                          </div>
                          <!--end of col-->
                      </div>
                  </form>
              </div>
              <!--end of col-->
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
export default {
    name: 'SearchBar',
    data(){
        return {
            searchText: ''
        }
    },
    methods: {
        searchArtistAndTitle: _.debounce(function () {
            this.$emit('onSearch', this.searchText)
            // console.log(this.searchText);
        }, 500)
    }
}
</script>

<style>

</style>