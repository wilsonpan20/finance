<template>
  <div>
    <app-toobar v-model="drawer" />
    <app-menu v-model="drawer" />
    <v-container>
      <v-layout grid-list-md>
        <v-flex xs12>
          <slot />
        </v-flex>
      </v-layout>
    </v-container>

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
