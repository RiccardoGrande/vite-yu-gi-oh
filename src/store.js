import { reactive } from 'vue'

export const store = reactive({
    searchText: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    loading: true,
})