<template>
  <div>
    <p-heading icon="chess-knight">Hobby</p-heading>
    <v-layout px-3 justify-space-between wrap>
      <ul>
        <li v-for="hobby in hobbies" :key="hobby.title">
          <span v-text="hobby.title"></span>
        </li>
      </ul>
    </v-layout>
  </div>
</template>

<script>
import pSkill from '@/components/shared/Skill'

export default {
  data () {
    return {
      hobbies: [
        {
          title: 'Piwowarstwo'
        },
        {
          title: 'Gra na gitarze'
        },
        {
          title: 'Gry Fabularne'
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
