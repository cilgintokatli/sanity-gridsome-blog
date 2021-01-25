<template>
  
<div class="container mx-auto p-5">
    <nav class="flex justify-between items-center max-h-28">
            <HeaderLogo />
        <ul class="flex flex-row">
            <li class="pr-5"><a> Services </a></li>
            <li class="pr-5"><a>Porfolio</a></li>
            <li class="pr-5"><a>About</a></li>
            <li><a>Contact</a></li>
        </ul>
    </nav>
</div>
</template>

<script>
import HeaderLogo from '~/components/HeaderLogo'

export default {
  components: {
    HeaderLogo
  },
}
</script>

<style>

</style>