<template>
  
<div class="container mx-auto p-5">
    <nav class="flex justify-between items-center max-h-28">
            <HeaderLogo />
        <ul class="flex flex-row">
            <g-link to="/" class="pr-5">Ana Sayfa</g-link>
            <g-link to="/isler/" class="pr-5">İşler</g-link>
            <g-link to="/iletisim/">İletişim</g-link>
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