<template>
    <main class="container">

        <template v-if="loading">
            <Loading/>
        </template>

        <template v-else>
           <div class="row sticky-top" id="box-breadcrumb">
                <ol class="col-12 breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active">{{getAnime.title}}</li>
                </ol>
            </div>

            <Description/>
            <ListEpisodes/>
        </template>
    </main>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb.vue'
import ListEpisodes from '../components/ListEpisodes.vue'
import Loading from '../components/Loading.vue'
import Description from '../components/Description.vue'
import {mapState, mapGetters} from 'vuex'

export default {
    name: 'animes',
    components:{
        Breadcrumb,
        ListEpisodes,
        Loading,
        Description
    },
    computed:{
        ...mapState({
            loading:'loading',
            anime:'anime'
        }),
        ...mapGetters([
            'getAnime'
        ])
    },
    watch:{
        anime: function(val){
            this.$store.dispatch('changeLoading', false)
        }
    },
    created() {
        // console.log(this.$route.params.type)
        this.$store.dispatch('retrieveAnime', {
            type: this.$route.params.type,
            link_name: this.$route.params.link_name
        })
    },
}
</script>