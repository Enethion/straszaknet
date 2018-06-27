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
  props: ['skill', 'fullwidth'],
  computed: {
    dateRange () {
      if (this.entry.yearStart === this.entry.yearEnd) {
        return this.entry.yearStart
      }

      return `${this.entry.yearStart} - ${this.entry.yearEnd || 'obecnie'}`
    },
    classes () {
      return console.log(this.fullwidth)
    }
  }
}
</script>

<style lang="scss" scoped>
.skill-root {
  margin: 0.25rem 0;

  > * {
    margin: 0 0.25rem;
    margin-bottom: 1em;
    padding-left: 1.5em;
    position: relative;

    &:before {
      font-size: 1rem;
      content: '\25A0';
      display: block;
      flex: 1 1 auto;
      position: absolute;
      transform: rotate(45deg);
      margin-top: -0.05em;
      left: 0;
    }
  }
}

.skill-bullet {
  padding-right: 0.75rem;
  max-width: 0.6rem;
  box-sizing: content-box;
  text-align: center;
  font-size: 1.15rem;
}

.skill-title {
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 4400;
  line-height: 1;
  padding-right: 0.5rem;
}

.skill-value {
  max-width: 150px;
  min-width: 150px;
}
</style>
