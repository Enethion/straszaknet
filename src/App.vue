<template>
  <v-app dark class="primary lighten-5">
    <v-container pa-0 elevation-15>
      <v-layout>
        <v-flex class="sidebar">
          <v-navigation-drawer class="px-3 pt-3 primary" dark>
            <p-header/>
            <p-profile/>
          </v-navigation-drawer>
        </v-flex>
        <v-flex>
          <v-card light>
            <router-view class="h100 pa-3" />
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import pHeader from '@/components/sidebar/Header'
import pProfile from '@/components/sidebar/Profile'

export default {
  components: {
    pHeader,
    pProfile
  }
}
</script>

<style lang="scss">

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
