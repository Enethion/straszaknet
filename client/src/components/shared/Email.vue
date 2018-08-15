<template>
  <span>
    <a :href="shouldDisplay && `mailto:${email}`" v-text="displayedEmail" />
    <v-btn small flat icon class="pa-0" @click="toggleVisibility">
      <v-icon v-if="!isPrintView" v-text="displayIcon" />
    </v-btn>
  </span>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['email'],
  data () {
    return {
      shouldDisplay: false
    }
  },
  computed: {
    ...mapState('globals', ['isPrintView']),
    displayedEmail () {
      if (this.isPrintView || this.shouldDisplay) {
        return this.email
      }

      return this.email.replace(/(\w)(\w*)(\w)/g, (matches, p1, p2, p3) => {
        return `${p1}${p2.replace(/\w/g, '*')}${p3}`
      })
    },
    displayIcon () {
      return this.shouldDisplay ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
    }
  },
  methods: {
    toggleVisibility () {
      this.shouldDisplay = !this.shouldDisplay
    }
  }
}
</script>

<style scoped>
  a {
    color: white;
    text-decoration: none;
  }
</style>
