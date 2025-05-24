// kresuber-accessibility.js

(function () {
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = 'https://cdn.jsdelivr.net/gh/kresuberid/kresuber-accessibility-widget/kresuber-accessibility.css';
  document.head.appendChild(style);

  const widget = document.createElement('div');
  widget.className = 'kresuber-widget';
  widget.innerHTML = `
    <button class="kresuber-btn" id="toggle-accessibility">♿ Akses</button>
    <div class="kresuber-panel" id="accessibility-panel">
      <label><input type="checkbox" id="toggle-big-font"> Teks Lebih Besar</label><br/>
      <label><input type="checkbox" id="toggle-high-contrast"> Kontras Tinggi</label><br/>
      <label><input type="checkbox" id="toggle-disable-animation"> Nonaktifkan Animasi</label><br/>
    </div>
  `;
  document.body.appendChild(widget);

  // Toggle panel
  document.getElementById('toggle-accessibility').onclick = () => {
    document.getElementById('accessibility-panel').classList.toggle('open');
  };

  // Toggle fitur
  document.getElementById('toggle-big-font').onchange = (e) => {
    document.body.classList.toggle('kresuber-big-font', e.target.checked);
    localStorage.setItem('kresuber-big-font', e.target.checked);
  };

  document.getElementById('toggle-high-contrast').onchange = (e) => {
    document.body.classList.toggle('kresuber-high-contrast', e.target.checked);
    localStorage.setItem('kresuber-high-contrast', e.target.checked);
  };

  document.getElementById('toggle-disable-animation').onchange = (e) => {
    document.body.classList.toggle('kresuber-no-animation', e.target.checked);
    localStorage.setItem('kresuber-no-animation', e.target.checked);
  };

  // Load setting dari localStorage
  window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('kresuber-big-font') === 'true') {
      document.body.classList.add('kresuber-big-font');
      document.getElementById('toggle-big-font').checked = true;
    }
    if (localStorage.getItem('kresuber-high-contrast') === 'true') {
      document.body.classList.add('kresuber-high-contrast');
      document.getElementById('toggle-high-contrast').checked = true;
    }
    if (localStorage.getItem('kresuber-no-animation') === 'true') {
      document.body.classList.add('kresuber-no-animation');
      document.getElementById('toggle-disable-animation').checked = true;
    }
  });
})();
