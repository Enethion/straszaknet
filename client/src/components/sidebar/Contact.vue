<template>
  <div>
    <p-heading icon="person">Kontakt</p-heading>
    <div class="text-xs-justify">
      <div class="contact-row" v-for="contact in contacts" :key="contact.icon">
        <div class="icon-framed">
          <div>
            <v-icon class="primary--text" v-text="contact.icon"></v-icon>
          </div>
        </div>
        <div class="contact-text">
          <div v-if="contact.link == 'none'" v-html="contact.value"></div>
          <a v-if="contact.link == 'email'" :href="'mailto:'+contact.value" v-html="contact.value"></a>
          <a v-if="contact.link == 'url'" :href="contact.value" v-html="contact.value"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contacts: [
        { icon: 'phone', value: '+48 516-539-185', link: 'none' },
        { icon: 'email', value: 'piotr@straszak.net', link: 'email' },
        { icon: 'public', value: 'http://straszak.net/', link: 'url' },
        { icon: 'place', value: 'ul. Nad Sudołem 32/65<br>31-228 Kraków', link: 'none' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-row {
  display: flex;
  vertical-align: top;
  justify-content: left;
  align-content: center;

  .icon-framed {
    width: 24px * 1.42;
    height: 24px * 1.42;
    margin: 0.25rem 1rem 0.25rem 8px;
    display: flex;
    justify-content: center;

    div {
      align-self: center;
      background: #fff;
      width: 24px;
      height: 24px;
      display: flex;
      transform: rotate(45deg);
      justify-content: center;

      .icon {
        align-self: center;
        transform: rotate(-45deg);
        font-size: 20px;
      }
    }
  }

  .contact-text {
    flex: 0 1 auto;
    display: flex;
    justify-content: center;

    * {
      font-size: 1rem;
      align-self: center;
      line-height: 1;
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>
