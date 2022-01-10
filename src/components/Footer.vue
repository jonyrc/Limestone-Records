<template>
  <footer>
    <a
      class="socialLink"
      target="_blank"
      href="https://www.facebook.com/limestonerecords"
    >
      <img src="@/assets/icons/facebook.svg" title="Facebook" alt="Facebook" />
    </a>
    <a
      class="socialLink"
      target="_blank"
      href="https://www.instagram.com/limestonerecords/"
    >
      <img src="@/assets/icons/instagram.svg" title="" alt="" />
    </a>
    <a
      class="socialLink"
      target="_blank"
      href="https://open.spotify.com/user/hgjxhdsfk36tx9ckxs8zp8amg?si=838c9569b369478a"
    >
      <img src="@/assets/icons/spotify.svg" title="" alt="" />
    </a>
  </footer>
</template>

<script>
export default {
  name: "footer-main",
};
</script>

<style scoped>
footer {
  height: 80px;
  width: 100%;
  background-color: var(--color-background-nav);
  display: flex;
  justify-content: center;
  align-items: center;
}
.socialLink {
  height: 40px;
  display: flex;
  margin: 20px;
}
</style>
