<template>
  <v-flex class="skill-root">
        <v-layout align-center>
          <v-flex class="skill-title" v-text="skill.title" />
          <v-flex class="skill-value" v-if="skill.value">
            <v-progress-linear :value="skill.value"></v-progress-linear>
          </v-flex>
        </v-layout>
      </v-flex>
</template>

<script>
export default {
  props: ['skill'],
  computed: {
    dateRange () {
      if (this.entry.yearStart === this.entry.yearEnd) {
        return this.entry.yearStart
      }

      return `${this.entry.yearStart} - ${this.entry.yearEnd || 'obecnie'}`
    }
  }
}
</script>

<style lang="scss" scoped>
.skill-root {
  margin: 0.25rem 0;
}

.skill-title {
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 4400;
  line-height: 1;
}

.skill-value {
  max-width: 192px;
  min-width: 192px;
}
</style>
