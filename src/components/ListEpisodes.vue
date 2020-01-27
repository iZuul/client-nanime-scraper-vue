<template>
   <div class="row pt-5 pb-5">
        <div class="col-12" id="header-list-episodes"
            ><h3>List Episode</h3>
        </div>
        <div class="col-12 scroll-box" id="list-episodes">
            <ul class="list-group" v-for="(episode, index) in getAnime.list_episodes" :key="index">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                     <router-link :to="{ name: 'episode', params: { episode: episode.link }}">{{episode.title}}</router-link>
                    <!-- <a href="/episode.html?episode=boku-no-hero-academia-4th-season-episode-014">{{episode.title}}</a> -->
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'list-episode',
    computed:{
        ...mapGetters([
            'getAnime'
        ])
    }
}
</script>