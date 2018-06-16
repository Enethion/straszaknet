<template>
  <div>
    <div class="photo-framed">
      <div>
        <img src="@/assets/logo.png" class="img-responsive" alt="logo">
      </div>
    </div>
    <header>
      <h1>Piotr <span>Straszak</span></h1>
      <h2>Backend Developer</h2>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.photo-framed {
  display: flex;
  justify-content: center;
  padding-top: 21px;
  padding-bottom: 21px;

  div {
    width: 100px;
    height: 100px;
    border: 3px solid #fff;
    transform: rotate(45deg);
    overflow: hidden;
  }

  img {
    width: 142%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}

header {
  text-align: center;
  margin-bottom: 0.5rem;

  h1, h2{
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1;
  }

  h1 {
    font-weight: 200;
    font-size: 2.25rem;
    text-transform: uppercase;
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;

    span {
      font-weight: 400;
    }
  }

  h2 {
    font-size: 1.85rem;
    font-weight: 200;
    margin-bottom: 0.1rem;
  }
}
</style>
