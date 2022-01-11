<template>
  <main>
    <section class="container">
      <h1>Videos</h1>

      <section class="videos">
        <div v-for="video in videos" :key="video.id.videoId" class="video">
          <iframe
            width="290"
            height="165"
            :src="`https://www.youtube.com/embed/${video.id.videoId}`"
            :title="`${video.snippet.title}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import getLimestoneVideos from "../services/api";

export default {
  name: "videos-page",
  data() {
    return {
      videos: [],
    };
  },
  mounted() {
    getLimestoneVideos.get().then((response) => {
      this.videos = response.data.items;
      console.log(response.data.items);
    });
  },
};
</script>

<style scoped>
main {
  align-items: center;
}
h1 {
  color: var(--color-text-dark);
  margin-top: 40px;
  font-size: 30px;
}
.videos {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.video {
  margin: 15px;
}

@media (min-width: 700px) {
  .videos {
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>