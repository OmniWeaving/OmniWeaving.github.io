const PLACEHOLDER = "assets/videos/placeholder.mp4";

function attachVideoFallback(video) {
  const preferred = video.dataset.src || PLACEHOLDER;
  const expectedName = preferred.split("/").pop() || "video.mp4";

  const markFallback = () => {
    if (!video.dataset.fallbackMarked) {
      const badge = document.createElement("div");
      badge.textContent = `placeholder · missing ${expectedName}`;
      badge.style.cssText = [
        "position:absolute",
        "left:10px",
        "bottom:10px",
        "padding:4px 8px",
        "font-size:12px",
        "border-radius:999px",
        "color:#fff",
        "background:rgba(220, 38, 38, 0.78)",
        "border:1px solid rgba(252,165,165,0.65)",
        "z-index:2"
      ].join(";");

      const parent = video.parentElement;
      parent.style.position = "relative";
      parent.appendChild(badge);
      video.dataset.fallbackMarked = "1";
    }
  };

  video.addEventListener("error", () => {
    const current = video.getAttribute("src");
    if (current !== PLACEHOLDER) {
      video.setAttribute("src", PLACEHOLDER);
      video.load();
      markFallback();
    }
  });

  video.setAttribute("src", preferred);
}

document.querySelectorAll("video.demo-video").forEach(attachVideoFallback);
