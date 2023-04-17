<script >
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {

  name: 'App',

  components: {
    AppHeader,
    AppMain

  }

}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
