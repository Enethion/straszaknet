<template>
  <article>
    <p-heading icon="clipboard-text">Profil</p-heading>
    <div class="text-xs-justify" v-html="profile" />
  </article>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('profile', [
      'profile'
    ])
  },
  methods: {
    ...mapActions('profile', ['fetchProfile'])
  },
  mounted () {
    this.fetchProfile()
  }
}
</script>

<style lang="scss" scoped>
  div{
    font-weight: 300;
  }
</style>
