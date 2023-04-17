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
        apiCall() {
            //console.log(store.searchText)
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0')
                .then((response) => {
                    console.log(response);
                }, (error) => {
                    console.log(error);
                });
        }
    },
    mounted() {
        this.apiCall();
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
                    <div class="col">
                        <div class="card" style="width: 18rem;">
                            <img src="..." class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title" v-for="item in store">{{ item.name }}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                    of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
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