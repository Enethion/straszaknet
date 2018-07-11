<template>
  <div>
    <p-heading icon="translate">Języki obce</p-heading>
    <v-layout px-3  justify-space-between wrap>
      <p-skill class="xs12" skill-color="white" v-for="lang in langs" :key="lang.title" :skill="lang" />
    </v-layout>
  </div>
</template>

<script>
import pSkill from '@/components/shared/Skill'

export default {
  data () {
    return {
      langs: [
        {
          title: 'Polski',
          value: 100
        },
        {
          title: 'Angielski',
          value: 70
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
ul {
  li {
    margin-bottom: 0.6rem;
  }
}
</style>
