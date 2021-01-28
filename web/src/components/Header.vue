<template>
  
    <nav class="flex justify-between items-center max-h-28 bg-maincolor p-10">
            <HeaderLogo />
        <ul class="flex flex-row">
            <g-link to="/" class="pr-5 text-white">Ana Sayfa</g-link>
            <g-link to="/hakkimizda/" class="pr-5 text-white">Hakkımızda</g-link>
            <g-link to="/isler/" class="pr-5 text-white">İşler</g-link>
            <g-link to="/iletisim/" class="text-white">İletişim</g-link>
        </ul>
    </nav>
</template>

<script>
import HeaderLogo from '~/components/HeaderLogo'

export default {
  components: {
    HeaderLogo
  },
}
</script>