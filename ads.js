/*
 * Islamic Online: Google AdSense loader
 * Mintlify includes every .js file at the repo root on all pages.
 *
 * Ad placements:
 *  - Header:     injected above the page content on every page
 *  - Sidebar:    injected at the bottom of the left sidebar
 *  - In-article: every <div className="ad-slot" data-ad="in-article" /> marker inside a page
 *  - Footer:     injected above the site footer on every page
 *
 * Replace the slot IDs below with the ad unit IDs from your AdSense account.
 */
(function () {
  var AD_CLIENT = 'ca-pub-9372551067994918';
  var SLOTS = {
    header: '1222556839',
    sidebar: '1222556839',
    'in-article': '1222556839',
    footer: '1222556839'
  };

  function loadAdSense() {
    if (document.getElementById('adsbygoogle-js')) return;
    var s = document.createElement('script');
    s.id = 'adsbygoogle-js';
    s.async = true;
    s.crossOrigin = 'anonymous';
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + AD_CLIENT;
    document.head.appendChild(s);
  }

  function makeIns(position) {
    var ins = document.createElement('ins');
    ins.className = 'adsbygoogle';
    ins.style.display = 'block';
    ins.setAttribute('data-ad-client', AD_CLIENT);
    ins.setAttribute('data-ad-slot', SLOTS[position] || SLOTS.header);
    if (position === 'in-article') {
      ins.setAttribute('data-ad-layout', 'in-article');
      ins.setAttribute('data-ad-format', 'fluid');
      ins.style.textAlign = 'center';
    } else {
      ins.setAttribute('data-ad-format', 'auto');
      ins.setAttribute('data-full-width-responsive', 'true');
    }
    return ins;
  }

  function makeWrapper(position) {
    var wrap = document.createElement('div');
    wrap.className = 'io-ad io-ad-' + position;
    wrap.setAttribute('data-io-ad', position);
    var label = document.createElement('span');
    label.className = 'io-ad-label';
    label.textContent = 'Advertisement';
    wrap.appendChild(label);
    wrap.appendChild(makeIns(position));
    return wrap;
  }

  function placeAds() {
    // Header ad: above the main page content
    var content = document.getElementById('content-area') || document.querySelector('#content-container, main');
    if (content && !document.querySelector('[data-io-ad="header"]')) {
      content.parentNode.insertBefore(makeWrapper('header'), content);
    }

    // Sidebar ad
    var sidebar = document.getElementById('sidebar-content') || document.querySelector('[data-layout-item="sidebar"], #sidebar');
    if (sidebar && !sidebar.querySelector('[data-io-ad="sidebar"]')) {
      sidebar.appendChild(makeWrapper('sidebar'));
    }

    // In-article ads: fill page markers
    var markers = document.querySelectorAll('.ad-slot:not([data-io-filled])');
    for (var i = 0; i < markers.length; i++) {
      var pos = markers[i].getAttribute('data-ad') || 'in-article';
      markers[i].setAttribute('data-io-filled', 'true');
      markers[i].appendChild(makeWrapper(pos));
    }

    // Footer ad: above the site footer
    var footer = document.getElementById('footer') || document.querySelector('footer');
    if (footer && !document.querySelector('[data-io-ad="footer"]')) {
      footer.parentNode.insertBefore(makeWrapper('footer'), footer);
    }

    // Activate every unfilled ad unit
    var units = document.querySelectorAll('ins.adsbygoogle:not([data-adsbygoogle-status])');
    for (var j = 0; j < units.length; j++) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {}
    }
  }

  function run() {
    loadAdSense();
    setTimeout(placeAds, 400);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
  window.addEventListener('mintlify:navigate', function () {
    setTimeout(placeAds, 400);
  });
  window.addEventListener('popstate', function () {
    setTimeout(placeAds, 400);
  });
})();
