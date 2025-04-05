document.addEventListener("DOMContentLoaded", function () {
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
  });
  