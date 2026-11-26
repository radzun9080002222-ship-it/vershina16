window.ym = window.ym || function () { (window.ym.a = window.ym.a || []).push(arguments); };
window.ym.l = 1 * new Date();
window.ym(113084071, 'init', { webvisor: true, clickmap: true, accurateTrackBounce: true, trackLinks: true });
var s = document.createElement('script');
s.async = 1;
s.src = 'https://mc.yandex.ru/metrika/tag.js';
document.head.appendChild(s);

(function () {
  function goal(name) {
    if (typeof window.ym === 'function') window.ym(113084071, 'reachGoal', name);
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[href]');
    if (!link) return;
    var href = link.getAttribute('href') || '';
    if (/^tel:/i.test(href)) goal('click_phone');
    else if (/^https:\/\/(?:www\.)?max\.ru\//i.test(href)) goal('click_max');
    else if (/^(?:tg:|https:\/\/t\.me\/)/i.test(href)) goal('click_telegram');
    else if (/^https:\/\/(?:wa\.me|(?:api\.)?whatsapp\.com)\//i.test(href)) goal('click_whatsapp');
  });
})();
