<script>
export default {
    name: 'SearchBox'
}
</script>


<template>
    <div class="searchbox">
        <div class="input-group ">
            <input type="text" class="form-control" placeholder="Search" @keyup="$emit('makeSearch')">
            <button class="btn btn-outline-secondary" type="button" @click="$event => $emit('makeSearch')">Search</button>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.searchbox {
    width: 30%;
    padding: 1rem 0;
}
</style>