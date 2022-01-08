<template>
  <main>
    <div class="text-top">Bem vindo ao Limestone Records</div>

    <a href="/" target="_blank">
      <img alt="Limestone Records" id="logo" src="../assets/logo.png" />
    </a>

    <div class="text-bottom">
      Selo do movimento Limestone, de Arcos-MG e região
    </div>
  </main>
</template>

<script>
export default {
  name: "home-page",
};
</script>

<style scoped>
main {
  background-color: var(--color-background-home);
  justify-content: center;
  align-items: center;
}

.text-top {
  color: var(--color-text-dark);
  font-size: 22px;
  margin-bottom: 22px;
}

.text-bottom {
  color: var(--color-text-dark);
  font-size: 18px;
  margin-top: 22px;
}

#logo {
  width: 300px;
}

@media (min-width: 700px) {
  #logo {
    width: 500px;
  }
}
</style>