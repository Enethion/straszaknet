<template>
  <div>
    <p-heading icon="toys">Hobby</p-heading>
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
          title: 'Gitara'
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
  margin-left: 20px;

  li {
    font-size: 1.5rem;

    span {
      font-size: 1.1rem;
    }
  }
}
</style>
