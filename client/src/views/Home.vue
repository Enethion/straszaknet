<template>
  <div class="home">
    <p-work-exp/>
    <p-education/>
  </div>
</template>

<script>
import pWorkExp from '@/components/resume/WorkExp'
import pEducation from '@/components/resume/Education'

export default {
  components: {
    pWorkExp,
    pEducation
  }
}
</script>
