<template>
    <div class="row justify-content-center pt-5" id="results">
        <div class="col-6 col-md-4 col-lg-3" id="b47f5fbd378d798161c79c129d56f003" v-for="anime in getAnimes" v-bind:key="anime.id">
            <div class="card mb-3 text-white bg-dark">
                <img :src="anime.image" :alt="anime.title" style="display: block; width: 100%; height: 300px;">
                <div class="card-body height-100">
                    <router-link :to="{ name: 'animes', params: { type:anime.type, link_name:anime.link_name }}" class="card-link font-12">{{anime.title}}</router-link>
                </div>
            </div>
        </div>  
    </div>
</template>
v-bind:key="anime.id"
<script>
import {mapGetters} from 'vuex'

export default {
    name: 'list-animes',
    computed:{
        ...mapGetters([
            'getAnimes'
        ]),
        animes(){
            return getAnimes
        }
    }
}
</script>