<script>
export default {
    data() {
        return {
            navbar: [{
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg/1200px-Yu-Gi-Oh%21_%28Logo%29.jpg',
                title: 'Yu-Gi-Oh Api'
            }]


        }
    }
}


</script>


<template>
    <header>
        <nav>
            <div class="row">
                <div class="col" v-for="item in navbar">
                    <img :src="item.image" alt="">
                    <span>{{ item.title }}</span>
                </div>

            </div>
        </nav>
    </header>
</template>



<style lang="scss" scoped>
nav {
    padding: 1rem 0;
}

img {
    height: 40px;
    padding-bottom: 15px;
}

span {
    font-size: 3rem;
}
</style>