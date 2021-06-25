<template>
  <div>
    <div class="container dropdown">
        <br/>
        <div class="row justify-content-center">
              <div class="col-12 col-md-10 col-lg-8">
                  <form class="card card-sm">
                    <select class="form-select" aria-label="Default select example" @change="onChange($event)" >
                        <option selected disabled>--Select Genre--</option>
                        <option value="Pop">Pop</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Jazz">Jazz</option>
                        <option value="Rock">Rock</option>
                        <option value="All">All</option>
                    </select>
                  </form>
              </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'GenreOption',
    data(){
        return {
            selectedGenre: ''
        }
    },
    methods: {
        onChange(event) {
            this.$emit('changeGenre', event.target.value)
            // console.log(event.target.value)
        }
    }

}
</script>

<style>

</style>