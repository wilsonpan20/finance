<template>
  <div>
    <app-toobar v-model="drawer" />
    <app-menu v-model="drawer" />
  </div>
</template> 

<script>
import AppMenu from './AppMenu.vue'
import AppToobar from './AppToobar.vue'
export default {
  name: 'AppLayout',
  components: { AppToobar, AppMenu },
  data: () => ({
    drawer: false
  })
}

</script> 