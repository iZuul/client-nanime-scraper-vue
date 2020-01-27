<template>
    <div class="row justify-content-center">
        <div class="col-12 col-sm-4">
            <ul class="pagination justify-content-center" id="pagination">
                <li v-for="(item, index) in getPages" :key="index">
                    <router-link :to="{name: 'pages', params:{ anime_name:getAnimeSearch ,page:item.page_number }}" class="page-link">{{item.title_number}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'pagination',
    computed:{
        ...mapGetters([
            'getPages',
            'getAnimeSearch'
        ])
    },
    methods: {
    
    },
}
</script>