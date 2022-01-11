<template>
  <header>
    <nav class="container">
      <router-link to="/"
        ><img alt="Limestone" id="logo" src="../assets/logo-white.png"
      /></router-link>

      <img
        v-on:click="toggleMenu"
        alt="Abrir menu"
        id="menu-button"
        src="../assets/icons/menu-button.png"
      />

      <div v-on:click="toggleMenu" id="menu-overlay" v-if="menuActive"></div>
      <div id="menu-items" :class="{ active: menuActive }">
        <router-link to="/"
          ><img alt="Limestone" id="menu-logo" src="../assets/logo.png"
        /></router-link>
        <ul>
          <li><router-link to="/bands">Bands</router-link></li>
          <li><router-link to="/playlists">Playlists</router-link></li>
          <li><router-link to="/videos">Videos</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "header-main",
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    toggleMenu: function () {
      this.menuActive = !this.menuActive;
    },
  },
};
</script>

<style scoped>
header {
  background-color: var(--color-background-nav);
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
}
#logo {
  height: 50px;
  margin-top: 5px;
}

#menu-button {
  width: 50px;
  cursor: pointer;
}

#menu-logo {
  width: 120px;
  margin-top: 30px;
  margin-bottom: 10px;
}

#menu-items {
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--color-background-nav);
  width: 60%;
  height: 100vh;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

#menu-items.active {
  display: flex;
}

ul {
  list-style: none;
  text-align: center;
}

ul li {
  margin: 20px 0px;
}

ul li a {
  color: var(--color-text-light);
}

#menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100vh;
  background-color: #000000;
  opacity: 0.8;
}

@media (min-width: 700px) {
  #menu-button,
  #menu-logo,
  #menu-overlay {
    display: none;
  }

  #menu-items {
    display: flex;
    position: static;
    height: 60px;
    width: auto;
  }

  ul {
    display: flex;
    height: 60px;
    align-items: center;
  }

  ul li {
    margin: 0;
    margin-left: 20px;
  }
}
</style>