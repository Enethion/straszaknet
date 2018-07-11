<template>
  <div>
    <p-heading icon="chart-pie">Umiejętności zawodowe</p-heading>
    <v-layout px-3  justify-space-between wrap>
      <p-skill class="xs12 md5" v-for="skill in skills" :key="skill.title" :skill="skill" />
    </v-layout>
  </div>
</template>

<script>
import pSkill from '@/components/shared/Skill'

export default {
  data () {
    return {
      skills: [
        {
          title: 'OOP',
          value: 80 // in %
        },
        {
          title: 'MVC',
          value: 75 // in %
        },
        {
          title: 'REST',
          value: 55 // in %
        },
        {
          title: 'TDD',
          value: 50 // in %
        },
        {
          title: 'SPA',
          value: 40 // in %
        },
        {
          title: 'Interface design',
          value: 40 // in %
        }
      ]
    }
  },
  components: {
    pSkill
  }
}
</script>

<style lang="scss" scoped>
</style>
