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
      <img src="@/assets/icons/instagram.svg" title="Instagram" alt="Instagram" />
    </a>
    <a
      class="socialLink"
      target="_blank"
      href="https://www.youtube.com/channel/UCowngY8FbVp6hto9DkAe1tw"
    >
      <img src="@/assets/icons/youtube.svg" title="Youtube" alt="Youtube" />
    </a>
    <a
      class="socialLink"
      target="_blank"
      href="https://open.spotify.com/user/hgjxhdsfk36tx9ckxs8zp8amg?si=838c9569b369478a"
    >
      <img src="@/assets/icons/spotify.svg" title="Spotify" alt="Spotify" />
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
