function search() {
  const t = document.getElementById('text');
  if (t === "" || t === " ") {
    return;
  }
  window.location.href = "google.com/search?q=" + t.replace(/ /g, "+"); + "+-ai"
}
