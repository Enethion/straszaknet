<template>
  <div>
    <p-heading icon="work">Doświadczenie zawodowe</p-heading>
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
          title: 'Starszy technik',
          place: 'Uniwersytet Rolniczy im. Hugona Kołłątaja w Krakowie',
          yearStart: 2014,
          yearEnd: null,
          description: 'Praca w zespole wdrożeniowym aplikacji USOSweb, utrzymanie kodu aplikacji, projekt i wykonanie nowej szaty graficznej głównej strony uczelni, administracja techniczna systemu ERK'
        },
        {
          title: 'Programista Laravel',
          place: 'Omega Meble Sp. z o. o.',
          yearStart: 2014,
          yearEnd: 2014,
          description: 'Poprawki i przeniesienie do nowego systemu skryptów zakupu, poprawki i tworzenie elementów front-endu, rozwój istniejących rozwiązań'
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
