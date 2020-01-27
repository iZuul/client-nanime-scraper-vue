<template>
    <main class="container">
        <template v-if="loading">
            <Loading/>
        </template>

        <template v-else>
            <div class="row sticky-top" id="box-breadcrumb">
                <ol class="col-12 breadcrumb">
                    <li class="breadcrumb-item"><router-link :to="{name: 'home'}">Home</router-link></li>
                    <li class="breadcrumb-item"><router-link :to="{name: 'animes', params:{ type: 'anime', link_name:'/'}}">{{getAnime.title}}</router-link></li>
                    <li class="breadcrumb-item active">{{getEpisode.title}}</li>
                </ol>
            </div>

            <div class="row pt-3 justify-content-center">
                <div class="col-12 box-iframe" id="box-iframe">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" :src="getEpisode.link_video"></iframe>
                    </div>
                </div>
            </div>

            <!-- <div class="row justify-content-center">
                <div class="col-12 pt-3">
                    <ul class="pagination justify-content-center" id="pagination">
                        <li>
                            <router-link :to="{name: 'anime', params:{type: getAnime.type, link_name:getAnime.link_name}}">List Semua Episode</router-link>
                        </li>
                    </ul>
                </div>
            </div> -->
        </template>
    </main>
</template>

<script>
import Loading from '../components/Loading.vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import {mapState, mapGetters} from 'vuex'

export default {
    name: 'watch-episode',
    components:{
        Loading,
        Breadcrumb
    },
    computed:{
        ...mapState({
            loading:'loading',
            episode:'episode'
        }),
        ...mapGetters([
            'getEpisode',
            'getAnime'
        ])
    },
    watch:{
        episode: function(val){
            this.$store.dispatch('changeLoading', false)
        }
    },
    created() {
        this.$store.dispatch('retrieveEpisode', this.$route.params.episode)
    },
}
</script>