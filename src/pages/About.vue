<template>
  <main>
    <h1>About</h1>
    <div class="about">
      <p>
        O selo Limestone Records foi criado por Daniel Santos e Michel Custódio
        para ajudar na produção e na distribuição virtual de bandas, que desde
        2016 vem formando um cenário muito forte reunindo bandas de Arcos,
        Iguatama, Lagoa da Prata, entre outras cidades mais próximas. É uma
        forma de gerar um catálogo com os sons produzidos por aqui e deixar isso
        registrado em nossa história cultural.
        <br />
        <br />
        Num primeiro momento estamos nos limitando à distribuição de música
        virtual, através das plataformas de streaming, principalmente por termos
        iniciado as atividades no meio da pandemia, mas futuramente podemos
        expandir também as atividades do selo para eventos e mídias físicas,
        dependendo do alcance que conseguirmos.
        <br />
      </p>
    </div>
    <img src="@/assets/pictures/MudoAndMichel.jpg" alt="Mudo e Michel" />

    <p class="font">
      Trecho retirado de uma matéria no
      <a href="https://www.portalarcos.com.br/">&nbsp;Portal Arcos&nbsp;</a>
      sobre o Estúdio Mudo. Clique
      <a
        href="https://www.portalarcos.com.br/noticia/31996/arcoense-daniel-santos-traz-para-arcos-o-estudio-mudo-focado-para-ensaios-de-bandas-e-gravacoes"
        >&nbsp;aqui&nbsp;</a
      >
      para acessar.
    </p>
  </main>
</template>

<script>
export default {
  name: "about-page",
};
</script>

<style scoped>
h1 {
  color: var(--color-text-dark);
  margin: 40px 0px 0px 40px;
  font-size: 30px;
}
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 40px 20px 40px;
  font-size: 20px;
}
img {
  width: 300px;
  margin: auto;
}
.font {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 40px 20px 40px;
  font-size: 12px;
}
</style>