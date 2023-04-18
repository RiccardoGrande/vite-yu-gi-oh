<script>
import axios from 'axios'
import { store } from '../store.js'

export default {
    name: "AppMain",
    data() {
        return {
            store
        }
    },
    methods: {
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

                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12"></div>
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
}
</style>