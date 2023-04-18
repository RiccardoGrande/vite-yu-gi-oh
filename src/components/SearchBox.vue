<script>
export default {
    name: 'SearchBox'
}
</script>


<template>
    <div class="searchbox">
        <div class="input-group ">
            <select name="text" class="form-control" id="" @keyup="$emit('makeSearch')"></select>


        </div>
    </div>
</template>



<style lang="scss" scoped>
.searchbox {
    width: 30%;
    padding: 1rem 0;
}
</style>