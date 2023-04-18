<script>
export default {
    name: 'SearchBox'
}
</script>


<template>
    <div class="searchbox">
        <div class="input-group ">
            <select name="text" class="form-control" @change="store.apiCards(store.searchURL)"
                v-model="this.store.cards.archetype">
                <options value="">Select Archetype</options>
                <options value="Alien">Alien</options>
                <options value="Noble Knight">Noble Knight</options>
                <options value="Melodius">Melodius</options>
            </select>


        </div>
    </div>
</template>



<style lang="scss" scoped>
.searchbox {
    width: 30%;
    padding: 1rem 0;
}
</style>