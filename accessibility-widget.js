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
window.addEventListener('DOMContentLoaded', () => {
  const features = ['big-font', 'high-contrast', 'no-animation', 'seizureSafe', 'visionImpaired', 'adhd', 'cognitive', 'keyboardNav', 'screenReader'];
  features.forEach((f) => {
    const key = 'kresuber-' + f;
    if (localStorage.getItem(key)) {
      document.body.classList.add(key);
    }
  });
});
