import axios from 'axios'

const getLimestoneVideos = axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/search?key=${process.env.VUE_APP_YOUTUBE_API_KEY}&channelId=UCowngY8FbVp6hto9DkAe1tw&part=snippet,id&order=date&maxResults=20`
})

const getEstudioMudoVideos = axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/search?key=${process.env.VUE_APP_YOUTUBE_API_KEY}&channelId=UCXxp_AtzxysEoELTBrc_XHw&part=snippet,id&order=date&maxResults=20`
})

export default getLimestoneVideos
export { getEstudioMudoVideos }