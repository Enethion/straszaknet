<template>
  <div>
    <p-heading icon="briefcase">Doświadczenie zawodowe</p-heading>
    <ul class="mx-3 diamond">
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
        },
        {
          title: 'Informatyk',
          place: 'Xeox.pl',
          yearStart: 2013,
          yearEnd: 2013,
          description: 'Testowanie aplikacji CMS na frameworku Laravel, pomoc przy wdrażaniu systemu dla sklepu internetowego firmy'
        },
        {
          title: 'Programista PHP',
          place: 'PIFE Katowice',
          yearStart: 2011,
          yearEnd: 2011,
          description: 'Projekt i kodowanie strony internetowej'
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
