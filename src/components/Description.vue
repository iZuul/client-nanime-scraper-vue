<template>
    <div>
        <div class="row">
            <div class="col-12" id="header-page"><h1>{{getAnime.title_page}}</h1></div>
        </div>

        <div class="row pt-5">
            <div class="col-sm-3 col-12" id="image-cover">
                <img :src="getAnime.image" class="rounded mx-auto d-block">
            </div>
            
            <div class="col-sm-9 col-12" id="description">
                <dl class="row">
                    <dt class="col-sm-3">Nama Anime</dt>
                    <dd class="col-sm-9">{{getAnime.title}}</dd>
                    <dt class="col-sm-3">Tahun</dt>
                    <dd class="col-sm-9">{{getAnime.year}}</dd>
                    <dt class="col-sm-3">Status</dt>
                    <dd class="col-sm-9">{{getAnime.status}}</dd>
                    <dt class="col-sm-3">Sinopsis</dt>
                    <dd class="col-sm-9">{{getAnime.sinopsis}}</dd>
                    <dt class="col-sm-3">Genre</dt>
                    <dd class="col-sm-9">
                        <span class="badge badge-primary mx-1" v-for="(genre, index) in getAnime.genre" :key="index">{{genre}}</span>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name:'description',
    computed:{
        ...mapGetters([
            'getAnime'
        ]),
    },
}
</script>