<script>
import { store } from '../store.js'

export default {
    data() {
        return {
            store
        }
    },
    methods: {
        apiCall() {
            console.log(store.searchText)
            axios.post('/store', {
                card_images: 'image_url',
                name: '',
                archetype: ''
            })
                .then((response) => {
                    console.log(response);
                }, (error) => {
                    console.log(error);
                });
        }
    }


}
</script>

<template>
    <main>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12"></div>
                    <div class="col">
                        <div class="card" style="width: 18rem;">
                            <img src="..." class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">{{ store.name }}</h5>
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



<style lang="scss" scoped></style>