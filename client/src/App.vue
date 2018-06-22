<template>
  <v-app dark class="primary lighten-5">
    <v-container pa-0 fluid>
      <v-layout>
        <v-flex class="sidebar pl-4 pr-3 pt-4 primary theme--dark">
          <p-header/>
          <p-profile/>
          <p-contact/>
        </v-flex>
        <v-flex>
          <v-card light class="elevation-0 primary--text text--darken-4" height="100%">
            <v-layout>
              <v-flex offset-lg2 lg8 class="">
                <router-view class="pa-3 pl-3" />
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import pHeader from '@/components/sidebar/Header'
import pProfile from '@/components/sidebar/Profile'
import pContact from '@/components/sidebar/Contact'

export default {
  components: {
    pHeader,
    pProfile,
    pContact
  }
}
</script>

<style lang="scss">
@media print {
  @page {
    margin: 0cm;
  }
  html {
    font-size: 12pt;
  }
}

.application {
  font-family: Lato, sans-serif !important;
}

.container {
  min-height: 100vh;
  height: 100%;
}

.flex.sidebar {
  flex: 0 0 auto;
  max-width: 300px;
  min-height: 100vh;
}

.theme--dark {
  color: #fff;
}
</style>
