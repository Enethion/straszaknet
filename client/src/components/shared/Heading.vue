<template>
  <v-layout class="p-heading">
    <v-flex class="heading">
      <div v-if="icon" class="heading-icon">
        <div>
          <v-icon v-text="`mdi-${icon}`" :class="iconClass"></v-icon>
        </div>
      </div>
      <div class="heading-text">
        <h3 class="">
          <slot></slot>
        </h3>
      </div>
    </v-flex>
    <v-flex class="line">
      <div>
        <div></div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['icon', 'iconRotate'],
  data () {
    return {}
  },
  mounted () {
    const defaultColor = window.getComputedStyle(this.$el.querySelector('h3')).color
    this.$el.querySelector('.heading-icon .icon').style.color = defaultColor
    this.$el.querySelector('.line div div').style.background = defaultColor
    this.$el.querySelector('.heading-icon div').style.borderColor = defaultColor
  },
  computed: {
    iconClass () {
      return `rot${this.iconRotate}`
    }
  }
}
</script>

<style lang="scss" scoped>
.p-heading {
  height: 24px;
  margin-top: 2rem;
  margin-bottom: 1.75rem;

  .heading,
  .line {
    height: 24px;
  }

  .heading {
    flex: 0 0 auto;
    position: relative;

    .heading-icon {
      display: inline-flex;
      height: 24px;
      width: 34px * 1.42;
      margin-right: 0.5rem;
      justify-content: center;

      div {
        align-self: center;
        display: inline-flex;
        width: 34px;
        height: 34px;
        transform: rotate(45deg);
        border: 2px solid #fff;
        justify-content: center;

        .icon {
          align-self: center;
          transform: rotate(-45deg);

          &.rot90 {
            transform: rotate(90deg - 45deg);
          }

          &.rot180 {
            transform: rotate(180deg - 45deg);
          }

          &.rot270 {
            transform: rotate(270deg - 45deg);
          }
        }
      }
    }

    .heading-text {
      display: inline-block;
      height: 24px;
      position: relative;
      top: 0;
      vertical-align: top;

      h3 {
        font-weight: 400;
        text-transform: uppercase;
        vertical-align: middle;
        font-size: 1.35rem;
      }
    }
  }

  .line {
    flex: 1 1 auto;
    > div {
      display: flex;
      width: 100%;
      height: 100%;

      > div {
        flex: 1 1 auto;
        height: 3px;
        align-self: center;
        margin-right: -1.24rem;
        margin-left: 1rem;
      }
    }
  }
}
</style>
