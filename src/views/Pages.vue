<template>
  <main class="container">
    <form id="searchForm" @submit="searchingAnime" action="/">
      <div class="form-group">
        <label class="col-form-label" for="search">Search</label>
        <input
          type="text"
          class="form-control"
          placeholder="Search for anime...."
          id="search"
          v-model="search"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <Loading v-if="loading" />
    <ListAnimes />
    <Pagination />
  </main>
</template>

<script>
import SearchBox from "../components/SearchBox.vue";
import Loading from "../components/Loading.vue";
import ListAnimes from "../components/ListAnimes.vue";
import Pagination from "../components/Pagination.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    SearchBox,
    Loading,
    ListAnimes,
    Pagination
  },
  computed: {
    ...mapState({
      loading: false,
      anime_search: "anime_search"
    }),
    ...mapGetters(["getAnimeSearch"])
  },
  data() {
    return {
      search: "",
      statusFetch: null,
    };
  },
  watch: {
    "$route.params.page": function(val) {
      console.log("page change ", this.$route.params.page);
      if (this.$route.params.page === undefined) {
        console.log("undefined clicked");
        this.$store.dispatch("retrieveAnimes", this.getAnimeSearch);
      } else {
        this.$store.dispatch("retrieveAnimesPerPage", {
          anime_name: this.anime_search,
          page: this.$route.params.page
        });
      }
    }
  },
  created() {
    this.$store.dispatch("retrieveAnimesPerPage", {
      anime_name: this.anime_search,
      page: this.$route.params.page
    })
  },
  methods: {
    searchingAnime() {
      let data = this.$store.dispatch("retrieveAnimes", this.search)
      this.loading = true
      console.log(data)
      this.loading = false
    }
  }
};
</script>
