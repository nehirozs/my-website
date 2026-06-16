const loaded = new Set();

export function preloadImages(urls) {
  urls.forEach((url) => {
    if (!url || loaded.has(url)) return;
    loaded.add(url);
    const img = new Image();
    img.src = url;
  });
}
