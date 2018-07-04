<template>
  <div>
    <p-heading icon="account-group">Socialmedia</p-heading>
    <div class="text-xs-justify">
      <div class="contact-row" v-for="link in socialmedia" :key="link.icon">
        <div class="icon-framed">
          <div>
            <v-icon class="primary--text" v-text="`mdi-${link.icon}`"></v-icon>
          </div>
        </div>
        <div class="contact-text">
          <a :href="link.url" v-html="link.text"></a>
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
        { value: 'piotr-straszak', social: 'linkedin' },
        { value: 'Enethion', social: 'github' }
      ],
      mediaData: {
        'linkedin': {
          'url': 'https://www.linkedin.com/in/',
          'icon': 'linkedin'
        },
        'github': {
          'url': 'https://github.com/',
          'icon': 'github-face'
        }
      }
    }
  },
  computed: {
    socialmedia () {
      let data = []

      for (let media of this.contacts) {
        const url = `${this.mediaData[media.social].url}${media.value}`
        const icon = this.mediaData[media.social].icon
        data.push({
          url,
          icon,
          'text': `/${media.value}`
        })
      }

      return data
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
