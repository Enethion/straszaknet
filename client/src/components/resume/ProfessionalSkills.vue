<template>
  <div>
    <p-heading icon="pie_chart">Umiejętności zawodowe</p-heading>
    <v-layout px-3  justify-space-between>
      <v-flex xs5 v-for="skill in skills" :key="skill.title">
        <v-layout align-center>
          <v-flex class="skill-title" v-text="skill.title" />
          <v-flex v-if="skill.value">
            <v-progress-linear :value="skill.value"></v-progress-linear>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import pChronological from '@/components/shared/Chronological'

export default {
  data () {
    return {
      skills: [
        {
          title: 'HtmL',
          value: 90 // in %
        },
        {
          title: 'CSS',
          value: 80 // in %
        }
      ]
    }
  },
  components: {
    pChronological
  }
}
</script>

<style lang="scss" scoped>
.skill-title {
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 4400;
}
</style>
