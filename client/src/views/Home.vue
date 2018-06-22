<template>
  <div class="home">
    <p-work-exp class="section" />
    <p-professional-skills class="section" />
    <p-education class="section" />
    <p-proficiency class="section" />
  </div>
</template>

<script>
import pWorkExp from '@/components/resume/WorkExp'
import pEducation from '@/components/resume/Education'
import pProfessionalSkills from '@/components/resume/ProfessionalSkills'
import pProficiency from '@/components/resume/Proficiency'

export default {
  components: {
    pWorkExp,
    pEducation,
    pProfessionalSkills,
    pProficiency
  }
}
</script>

<style lang="scss" scoped>
.section:not(:first-child) {
  margin-top: 4rem;
}
</style>
