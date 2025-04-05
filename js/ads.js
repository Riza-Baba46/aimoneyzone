document.addEventListener("DOMContentLoaded", function () {
  // Header Reklamı
  const headerAd = document.getElementById("ads-header");
  if (headerAd) {
    headerAd.innerHTML = `
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-5535291444295129"
           data-ad-slot="3561744551"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    `;
  }

  // Middle (In-Article) Reklamı
  const middleAd = document.getElementById("ads-middle");
  if (middleAd) {
    middleAd.innerHTML = `
      <ins class="adsbygoogle"
           style="display:block; text-align:center;"
           data-ad-layout="in-article"
           data-ad-format="fluid"
           data-ad-client="ca-pub-5535291444295129"
           data-ad-slot="7235000917"></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    `;
  }

  // Footer (Multiplex) Reklamı
  const footerAd = document.getElementById("ads-footer");
  if (footerAd) {
    footerAd.innerHTML = `
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-format="autorelaxed"
           data-ad-client="ca-pub-5535291444295129"
           data-ad-slot="3894521701"></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    `;
  }
});
