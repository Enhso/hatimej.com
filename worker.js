// Records that changed drawer keep their old address working.
const MOVED = new Map([
  ["/research/cafa-6-protein-function-prediction", "/quests/cafa-6-protein-function-prediction"],
  ["/research/hull-tactical-market-prediction", "/quests/hull-tactical-market-prediction"],
]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.hatimej.com") {
      url.hostname = "hatimej.com";
      return Response.redirect(url.toString(), 301);
    }
    const moved = MOVED.get(url.pathname.replace(/(\.html|\/)$/, ""));
    if (moved !== undefined) {
      url.pathname = moved;
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
