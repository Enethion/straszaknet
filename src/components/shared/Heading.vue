<template>
  <v-layout class="h24">
    <v-flex class="heading">
      <div class="heading-icon">
        <div>
          <v-icon v-text="icon"></v-icon>
        </div>
      </div>
      <div class="heading-text">
        <h3><slot></slot></h3>
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
  props: ['icon']
}
</script>

<style lang="scss" scoped>
.h24 {
  height: 24px;
  margin-top: 2rem;
  margin-bottom: 1.5rem;

  .heading,
  .line {
    height: 24px;
  }

  .heading {
    flex: 0 0 auto;
    position: relative;

    .heading-icon {
      display: inline-block;
      position: relative;
      width: 24px;
      height: 24px;
      margin: 0 1.5rem 0 1rem;

      div {
        position: absolute;
        display: flex;
        width: 34px;
        height: 34px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        border: 2px solid #fff;

        .icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
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
        font-weight: 300;
        text-transform: uppercase;
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
        border: 1px solid #fff;
        align-self: center;
        transform: translate(1.15rem, 0);
      }
    }
  }
}
</style>
