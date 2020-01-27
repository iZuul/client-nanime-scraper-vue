<template>
    <form id="searchForm" @submit.prevent="searchingAnime">
        <div class="form-group">
            <label class="col-form-label" for="search">Search</label>
            <input type="text" class="form-control" placeholder="Search for anime...." id="search" v-model="search">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>

export default {
    name: 'search-box',
    data() {
        return {
            search:''
        }
    },
    methods: {    
        searchingAnime() {
            console.log('clicked', this.search)
            this.$store.dispatch('retrieveAnimes', this.search)
        }
    },
    watch:{
    }
}
</script>