<template>
  <li>
    <article>
      <header>
        <h3 v-text="entry.title"></h3>
        <h4 v-text="entry.place"></h4>
        <p v-text="dateRange"></p>
      </header>
      <p v-if="entry.description" v-text="entry.description"></p>
    </article>
  </li>
</template>

<script>
export default {
  props: ['entry'],
  computed: {
    dateRange () {
      if (this.entry.yearStart === this.entry.yearEnd) {
        return this.entry.yearStart
      }

      return `${this.entry.yearStart} - ${this.entry.yearEnd || 'obecnie'}`
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  font-size: 1.5rem;
}

article {
  font-size: 1rem;
  header {
    text-transform: uppercase;

    span {
      white-space: pre;
    }

    h3,
    h4 {
      display: inline;
      font-size: 1.2rem;
    }

    h3 {
      font-weight: 600;
    }

    h4 {
      font-weight: 300;

      &::before {
        content: '/';
        margin: 0 0.5rem;
      }
    }

    p {
      font-size: 0.85rem;
      margin-top: -0.5rem;
      margin-bottom: 0.2rem;
    }
  }
}
</style>
