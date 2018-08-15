<template>
  <div>
    <p-heading icon="account">Kontakt</p-heading>
    <div class="text-xs-justify">
      <div class="contact-row" v-for="contact in contacts" :key="contact.icon" v-if="!contact.isHidden || isPrintView">
        <div class="icon-framed">
          <div>
            <v-icon class="primary--text" v-text="`mdi-${contact.icon}`"></v-icon>
          </div>
        </div>
        <div class="contact-text">
          <div v-if="contact.link == 'none'" v-html="contact.value" />
          <email v-if="contact.link == 'email'" :email="contact.value" />
          <a v-if="contact.link == 'url'" :href="contact.value" v-html="contact.value"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Email from '@/components/shared/Email'

export default {
  data () {
    return {
      isPrint: window.matchMedia('print').matches
    }
  },
  computed: {
    ...mapState('contact', [
      'contacts'
    ]),
    ...mapState('globals', ['isPrintView'])
  },
  methods: {
    ...mapActions('contact', ['fetchContacts'])
  },
  mounted () {
    this.fetchContacts()
  },
  components: {
    Email
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
    margin: 0.25rem 1rem 0.25rem 7px;
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
