(function () {
  const createWidget = () => {
    const widget = document.createElement('div');
    widget.id = 'kresuber-accessibility-widget';
    widget.style.position = 'fixed';
    widget.style.bottom = '20px';
    widget.style.right = '20px';
    widget.style.zIndex = '9999';
    widget.style.background = '#005fcc';
    widget.style.color = '#ffffff';
    widget.style.borderRadius = '10px';
    widget.style.padding = '16px';
    widget.style.fontFamily = 'Open Sans, sans-serif';
    widget.style.width = '280px';
    widget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
    widget.innerHTML = `
      <div style="text-align:center; margin-bottom:12px; font-weight:bold; font-size:16px;">
        Accessibility Adjustments
      </div>
      <div style="display:flex; flex-direction:column; gap:8px;">
        <button onclick="resetSettings()" style="padding:8px; background:#fff; color:#005fcc; border:none; border-radius:6px; cursor:pointer;">Reset Settings</button>
        <button onclick="toggleWidget()" style="padding:8px; background:#fff; color:#005fcc; border:none; border-radius:6px; cursor:pointer;">Hide Interface</button>
      </div>
      <hr style="margin:12px 0; border:0; border-top:1px solid rgba(255,255,255,0.2);" />
      <div style="display:flex; flex-direction:column; gap:6px; font-size:14px;">
        <label><input type="checkbox" onchange="toggleFeature('seizureSafe')"> Seizure Safe Profile</label>
        <label><input type="checkbox" onchange="toggleFeature('visionImpaired')"> Vision Impaired Profile</label>
        <label><input type="checkbox" onchange="toggleFeature('adhd')"> ADHD Friendly Profile</label>
        <label><input type="checkbox" onchange="toggleFeature('cognitive')"> Cognitive Disability Profile</label>
        <label><input type="checkbox" onchange="toggleFeature('keyboardNav')"> Keyboard Navigation</label>
        <label><input type="checkbox" onchange="toggleFeature('screenReader')"> Screen Reader Mode</label>
      </div>
      <hr style="margin:12px 0; border:0; border-top:1px solid rgba(255,255,255,0.2);" />
      <div style="text-align:center; font-size:12px;">
        <a href="https://kresuber.co.id/" target="_blank" rel="sponsored" style="color:white; text-decoration:none;">
          Accessibility Widget by Kresuber Digital
        </a>
      </div>
    `;
    document.body.appendChild(widget);
  };

  window.toggleFeature = function (feature) {
    console.log("Toggle feature:", feature);
    // Tambahkan logika pengaktifan fitur di sini
  };

  window.resetSettings = function () {
    console.log("Reset semua pengaturan");
    // Tambahkan logika reset di sini
  };

  window.toggleWidget = function () {
    const widget = document.getElementById('kresuber-accessibility-widget');
    widget.style.display = (widget.style.display === 'none') ? 'block' : 'none';
  };

  document.addEventListener('DOMContentLoaded', createWidget);
})();
