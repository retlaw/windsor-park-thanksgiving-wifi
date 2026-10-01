(() => {
  "use strict";
  const variants = (window.THANKSGIVING_VARIANTS || []).filter(v =>
    v && typeof v.id === "string" && ["label","kicker","headline","body","punchline"].every(k => typeof v[k] === "string"));
  if (!variants.length) return;
  const key = "windsor-park-thanksgiving-last";
  let previous;
  try { previous = localStorage.getItem(key); } catch (_) {}
  function showNext() {
    const pool = variants.filter(v => v.id !== previous);
    const choices = pool.length ? pool : variants;
    const variant = choices[Math.floor(Math.random() * choices.length)];
    const poster = document.getElementById("poster");
    const picture = document.getElementById("poster-image");
    poster.classList.toggle("has-image", Boolean(variant.image));
    picture.hidden = !variant.image;
    picture.onerror = () => {
      picture.hidden = true;
      poster.classList.remove("has-image");
    };
    if (variant.image) {
      picture.alt = variant.imageAlt || variant.headline;
      picture.src = variant.image;
    } else {
      picture.removeAttribute("src");
      picture.alt = "";
    }
    previous = variant.id;
    try { localStorage.setItem(key, previous); } catch (_) {}
    document.getElementById("poster").dataset.theme = variant.theme;
    for (const field of ["label","kicker","headline","body","punchline"]) {
      document.getElementById(field).textContent = variant[field];
    }
    document.getElementById("number").textContent =
      String(variants.indexOf(variant) + 1).padStart(2,"0") + " / " + String(variants.length).padStart(2,"0");
  }
  showNext();
  const button = document.getElementById("another");
  button.hidden = false;
  button.addEventListener("click", showNext);
})();
