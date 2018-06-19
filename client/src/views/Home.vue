<template>
  <div class="home">
    <p-work-exp />
    <p-professional-skills />
    <p-education />
  </div>
</template>

<script>
import pWorkExp from '@/components/resume/WorkExp'
import pEducation from '@/components/resume/Education'
import pProfessionalSkills from '@/components/resume/ProfessionalSkills'

export default {
  components: {
    pWorkExp,
    pEducation,
    pProfessionalSkills
  }
}
</script>
