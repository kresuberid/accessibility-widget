function toggleFeature(feature) {
  const body = document.body;
  const storageKey = 'kresuber-' + feature;

  if (body.classList.contains(storageKey)) {
    body.classList.remove(storageKey);
    localStorage.removeItem(storageKey);
  } else {
    body.classList.add(storageKey);
    localStorage.setItem(storageKey, true);
  }
}
