<template>
  <v-app dark class="primary lighten-5">
    <v-container pa-0 fluid>
      <v-layout>
        <v-flex class="sidebar pl-4 pr-3 pt-4 primary theme--dark">
          <p-header />
          <p-profile class="section" />
          <p-contact class="section" />
          <p-hobbies class="section" />
          <p-networking class="section" />
        </v-flex>
        <v-flex>
          <v-card light class="elevation-0 primary--text text--darken-4" height="100%">
            <v-layout>
              <v-flex offset-lg2 lg8 class="">
                <router-view class="pa-3 pl-3" />

                <v-footer height="auto" class="white primary--text text-xs-center ml-2 mr-4">
                  <p class="print-only  rodo pl-2 pr-4">Wyrażam zgodę na przetwarzanie moich danych osobowych w celu rekrutacji zgodnie z art. 6 ust. 1 lit. a Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych)</p>
                  <p class="no-print text-xs-right pr-2">v0.1 &copy;2018 — Piotr Straszak</p>
                </v-footer>
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
import pHobbies from '@/components/sidebar/Hobbies'
import pNetworking from '@/components/sidebar/Networking'

export default {
  components: {
    pHeader,
    pProfile,
    pContact,
    pHobbies,
    pNetworking
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

  .no-print {
    display: none;
  }

  .print-only {
    &.print-absolute {
      position: absolute;

      &.print-absolute-b0 {
        bottom: 0;
      }
    }
  }
}

@media not print {
  .print-only {
    display: none !important;
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

  .section {
    margin-top: 4rem;
  }
}

.theme--dark {
  color: #fff;
}

ul {
  list-style: none;

  li {
    margin-left: 0.1rem;
    padding-left: 1.2em;
    position: relative;

    &:before {
      font-size: 1rem;
      content: "\25A0";
      height: 1em;
      width: 1em;
      align-items: center;
      justify-content: center;
      display: flex;
      position: absolute;
      margin-top: 0.1em;
      transform: rotate(45deg);
      // top: 0;
      left: 0;
    }
  }
}

.footer{
  p {
    margin-bottom: 0;
    width: 100%;

    &.rodo {
      font-size: 0.725rem;
    }
  }
}
</style>
