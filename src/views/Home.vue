<template>
  <main class="container">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <SearchBox />
    <Loading v-if="loading"/>
    <ListAnimes/>
    <Pagination/>
  </main>
</template>

<script>
import SearchBox from '../components/SearchBox.vue'
import Loading from '../components/Loading.vue'
import ListAnimes from '../components/ListAnimes.vue'
import Pagination from '../components/Pagination.vue'
import {mapState, mapGetters} from 'vuex'

export default {
  name: 'home',
  components: {
      SearchBox,
      Loading,
      ListAnimes,
      Pagination
  },
  computed:{
    ...mapState({
      animes:'animes',
      anime_search:'anime_search',
      loading:'loading',
    }),
    ...mapGetters([
      'getAnimeSearch'
    ])
  },
  watch:{
  },
  beforeCreate(){
  },
  created(){
  },
  mounted(){
    this.$store.dispatch('retrieveAnimes', this.anime_search )
  },
  beforeDestroy(){
  },
  methods: {
  },
};
</script>
