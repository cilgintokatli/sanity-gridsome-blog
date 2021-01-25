<template>
  <g-link class="logo" to="/">
    <g-image
      alt="boapost"
      :src="$urlForImage($static.settings.logo.asset.url, $static.metadata.sanityOptions).height(180).url()"
      class="align-middle"
    />
  </g-link> 
</template>

<static-query>
query {
  metadata {
    siteName
    sanityOptions{
      projectId
      dataset
    }
  }
  settings: sanitySiteSettings(id: "siteSettings") {
    title
    description
    logo {
      asset {
        url
      }
    }
  }
}
</static-query>

<style lang="scss">
.logo {
  text-decoration: none;
  color: var(--body-color) !important;
  font-size: 0.9em;

  &__image {
    vertical-align: middle;
    border-radius: 99px;
    height: 40px;
    width: 40px;
    margin-right: 0.5em;
  }
}
</style>
