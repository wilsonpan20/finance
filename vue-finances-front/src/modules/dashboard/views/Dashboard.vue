<template>
  <div>
    <app-layout>
      <router-view />
    </app-layout>
  </div>
</template>

<script>
import AppLayout from '../components/AppLayout.vue'
export default {
  name: 'Dashboard',
  components: { AppLayout }
}
</script>
