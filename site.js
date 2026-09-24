document.addEventListener("DOMContentLoaded",()=>{
  const cfg=window.IAM217_CONFIG||{};
  document.querySelectorAll(".price-label").forEach(el=>{el.textContent=cfg.priceLabel?("— "+cfg.priceLabel):""});
  document.querySelectorAll(".buy-link").forEach(a=>{
    if(cfg.checkoutEnabled&&cfg.stripePaymentUrl){
      a.href=cfg.stripePaymentUrl;a.target="_blank";a.rel="noopener";
    }else{
      a.href="#faq";
      a.addEventListener("click",e=>{
        e.preventDefault();
        alert("Founding-beta checkout is being connected. The Tutor sales page is ready; payment will be enabled before launch.");
      });
    }
  });
});