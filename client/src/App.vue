<template>
  <v-app dark class="primary lighten-5">
    <v-container pa-0 elevation-15 fluid>
      <v-layout>
        <v-flex class="sidebar">
          <v-navigation-drawer class="px-3 pt-3 primary" dark permanent>
            <p-header/>
            <p-profile/>
            <p-contact/>
          </v-navigation-drawer>
        </v-flex>
        <v-flex>
          <v-card light class="primary--text text--darken-4">
            <v-layout>
              <v-flex offset-lg2 lg8>
                <router-view class="h100 pa-3"/>
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

.flex.sidebar {
  flex: 0 0 auto;
  height: 100vh;
}

.h100 {
  min-height: 100vh;
}

.theme--dark {
  color: #fff;
}
</style>
