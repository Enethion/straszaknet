<template>
  <div>
    <p-heading icon="school">Edukacja</p-heading>
    <ul class="mx-3">
      <p-chronological v-for="work in workExp" :key="work.title" :entry="work"></p-chronological>
    </ul>
  </div>
</template>

<script>
import pChronological from '@/components/shared/Chronological'

export default {
  data () {
    return {
      workExp: [
        {
          title: 'M101JS: MongoDB for Node.js Developers',
          place: 'MongoDB University',
          yearStart: 2016,
          yearEnd: 2016,
          description: null
        },
        {
          title: 'Inżynier informatyk',
          place: 'Wyższa Szkoła Biznesu w Dąbrowie Górniczej',
          yearStart: 2010,
          yearEnd: 2014,
          description: null
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
</style>
