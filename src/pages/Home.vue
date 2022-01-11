<template>
  <main>
    <div class="text-top">Bem vindo ao Limestone Records</div>

    <img alt="Limestone Records" id="logo" src="../assets/logo-full.png" />

    <div class="text-bottom">
      Selo independente criado para produção e distribuição de rock'n'roll feito
      em Arcos e região
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
  margin: 22px;
  text-align: center;
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