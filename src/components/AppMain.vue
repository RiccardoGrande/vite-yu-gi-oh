<script>
import axios from 'axios'
import { store } from '../store.js'
import SearchBox from './SearchBox.vue'

export default {
    name: "AppMain",
    components: {
        SearchBox
    },
    data() {
        return {
            store
        }
    },
    methods: {
        performSearch() {
            console.log(store.searchURL)
            const url = store.searchURL + `?name=${store.searchURL}`
            console.log(url)


        },
        apiCards() {
            //console.log(store.searchText)
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0')
                .then((response) => {
                    console.log(response.data);
                    store.cards = response.data.data
                    store.meta = response.data.meta
                }, (error) => {
                    console.log(error);
                });
        }
    },
    mounted() {

        this.apiCards()

    }


}
</script>

<template>
    <main>
        <section>
            <div class="container">
                <div class="row">
                    <SearchBox @makeSearch="performSearch()"></SearchBox>


                </div>
            </div>
            <div class="container">
                <div class="row content">
                    <div class="col-12">Founded {{ this.store.searchURL.lenght }} cards.</div>
                    <div class="col" v-for="card in store.cards">
                        <div class="card">
                            <img :src="card.card_images[0].image_url" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">{{ card.name }}</h5>
                                <p class="card-text">{{ card.archetype }}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>



<style lang="scss" scoped>
section {
    background-color: #d48f38;

    .content {
        background-color: #fff;
    }
}
</style>