<template>
  <div>
    <p-heading icon="lightbulb-on">Biegłość</p-heading>
    <v-layout pl-3 pr-2  justify-space-between wrap>
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
          title: 'PHP7',
          value: 75 // in %
        },
        {
          title: 'Laravel',
          value: 60 // in %
        },
        {
          title: 'VueJS',
          value: 55 // in %
        },
        {
          title: 'JavaScript',
          value: 50 // in %
        },
        {
          title: 'AdonisJS',
          value: 45 // in %
        },
        {
          title: 'CSS',
          value: 70 // in %
        },
        {
          title: 'HTML',
          value: 85 // in %
        },
        {
          title: 'Bootstrap CSS',
          value: 45 // in %
        },
        {
          title: 'Materialize CSS',
          value: 40 // in %
        },
        {
          title: 'AngularJS',
          value: 30 // in %
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
