<template>
  
    <nav class="mx-auto flex flex-wrap lg:flex-col	justify-between items-center py-8 px-5 bg-maincolor">
            <HeaderLogo />
        <div class="block lg:hidden">
          <button @click="toggle" class="flex items-center px-3 py-2 border rounded border-white hover:text-white hover:border-white">
            <svg class="current-color h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="white" /></svg>
          </button>
        </div>
        <ul :class="isOpen ? 'block': 'hidden'" class="bg-maincolor flex flex-col w-full lg:w-auto lg:block">
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
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>