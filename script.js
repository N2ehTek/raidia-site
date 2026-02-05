// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Accordion behavior: "information appears only when needed"
document.querySelectorAll("[data-accordion]").forEach(group => {
  group.addEventListener("click", (e) => {
    const btn = e.target.closest(".card__head");
    if (!btn) return;

    const card = btn.closest(".card");
    const body = card.querySelector(".card__body");
    const expanded = btn.getAttribute("aria-expanded") === "true";

    // toggle just this card (keep others as-is; feels calmer than forced closing)
    btn.setAttribute("aria-expanded", String(!expanded));
    body.hidden = expanded;

    // rotate chevron
    const chev = btn.querySelector(".chev");
    if (chev) chev.style.transform = expanded ? "rotate(0deg)" : "rotate(90deg)";
  });
});
