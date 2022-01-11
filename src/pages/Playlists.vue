<template>
  <main>
    <h1>Playlists</h1>
    <div class="playlist">
      <iframe
        src="https://open.spotify.com/embed/playlist/0oVCSMyXWbUvWS6R1R34fg?utm_source=generator"
        width="100%"
        height="380"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
    <div class="playlist">
      <iframe
        src="https://open.spotify.com/embed/playlist/3vNlnCAtzUvk6mf7Z1eLE9?utm_source=generator"
        width="100%"
        height="380"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  </main>
</template>

<script>
export default {
  name: "playlists-page",
};
</script>

<style scoped>
h1 {
  color: var(--color-text-dark);
  margin: 40px 0px 20px 40px;
  font-size: 30px;
}
.playlist {
  margin: 10px 40px 10px 40px;
}
</style>