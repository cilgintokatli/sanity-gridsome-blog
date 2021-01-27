<template>
  <client-only>
  <vimeo-player ref="player" :video-id="videoID"/>
</client-only>	
</template>

<script>
import urlParser from "js-video-url-parser/lib/base"
import "js-video-url-parser/lib/provider/vimeo"


export default {
    data(){
        return {
            videoID: urlParser.parse(this.url)?.id
        }
    },
    props: {
        url: {
            type: String,
            default: () => ""
        }
    }
}
</script>

<style>

</style>