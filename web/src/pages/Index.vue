<template>
  <Layout>
   
    <Hizmet/>
    <!-- List posts -->
    <div class="posts">
      <post-card
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
        :metadata="$page.metadata"
      />
    </div>
  </Layout>
</template>

<page-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  posts: allSanityPost(sortBy: "publishedAt") {
    edges {
      node {
        id
        title
        slug {
          current
        }
        categories {
          id
          title
        }
        publishedAt(format: "D. MMMM YYYY")
        _rawExcerpt
        mainImage {
          asset {
            _id
            url
          }
          caption
          alt
          hotspot {
            x
            y
            height
            width
          }
          crop {
            top
            bottom
            left
            right
          }
        }
      }
    }
  }
}

</page-query>

<script>
import PostCard from '~/components/PostCard'
import Hizmet from '~/components/Hizmet'

export default {
  components: {
    PostCard,
    Hizmet
  },
  metaInfo: {
    title: 'Anasayfa'
  }
}
</script>
