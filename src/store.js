import { reactive } from 'vue'

export const store = reactive({

    searchURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0",
    loading: true,
    data: null,
    meta: null,
    archetype: ''
})