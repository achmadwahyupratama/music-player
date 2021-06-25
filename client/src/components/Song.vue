<template>
<div class="card mt-1">
    <iframe :src="embedCode" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
</div>
</template>

<script>
export default {
    name: "Song",
    props: ["embedCode"]

}
</script>

<style>

</style>