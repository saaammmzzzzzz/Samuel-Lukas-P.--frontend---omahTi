// ---------- Daftar gambar (ganti path ini dengan gambarmu sendiri) ----------
const projectImages = [
  "images/coder.jpeg", "images/porsenigama.png", "images/pionir.png", "images/coder.jpeg",
  "images/porsenigama.png", "images/pionir.png", "images/coder.jpeg"
];
const testiImages = [
  "images/kak jano.jpeg", "images/CHELSEA.jpeg", "images/GAUZA.jpeg",
  "images/prabowo2.png", "images/nvidia.png", "images/masukFE.jpg"
];

// ---------- Portfolio: Show More / Show Less ----------
const pGrid = document.getElementById("pGrid");
const pToggle = document.getElementById("pToggle");
const TOTAL = 7, INITIAL = 4;
let expanded = false;

function renderPortfolio() {
  const count = expanded ? TOTAL : INITIAL;
  pGrid.innerHTML = Array.from({ length: count }, (_, i) =>
    `<div class="p-card${i >= INITIAL ? " pop" : ""}" tabindex="0" role="button" aria-label="Lihat detail proyek ${i + 1}"><img src="${projectImages[i]}" alt="Proyek ${i + 1}" loading="lazy" onerror="this.remove()" /><span>Lorem Ipsum</span></div>`).join("");
  pToggle.innerHTML = expanded ? "Show Less <span>&uarr;</span>" : "Show More <span>&darr;</span>";
  pToggle.setAttribute("aria-expanded", expanded);
}
pToggle.addEventListener("click", () => { expanded = !expanded; renderPortfolio(); });
renderPortfolio();

// ---------- Testimonials slider ----------
const track = document.getElementById("track");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const TESTI_COUNT = 6;
let index = 0;

track.innerHTML = Array.from({ length: TESTI_COUNT }, (_, i) => `
  <article class="t-card">
    <div class="t-photo"><img src="${testiImages[i]}" alt="Foto Janu Pasha Shandy" loading="lazy" onerror="this.remove()" /></div>
    <div class="t-body">
      <h3>Janu Pasha Shandy</h3>
      <small>Staff of OmahFE</small>
      <p>Lorem ipsum dolor sit ameT, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  </article>`).join("");

function visibleCount() {
  return window.innerWidth <= 560 ? 1 : window.innerWidth <= 1000 ? 2 : 4;
}
var updateSlider = function () {
  const max = TESTI_COUNT - visibleCount();
  index = Math.max(0, Math.min(index, max));
  const step = track.children[1].offsetLeft - track.children[0].offsetLeft;
  track.style.transform = `translateX(${-index * step}px)`;
  prev.disabled = index === 0;
  next.disabled = index === max;
};
const dots = document.createElement("div");
dots.className = "dots";
document.querySelector(".slider").after(dots);
function renderDots() {
  const n = TESTI_COUNT - visibleCount() + 1;
  dots.innerHTML = Array.from({ length: n }, (_, i) =>
    `<button class="${i === index ? "on" : ""}" aria-label="Slide ${i + 1}" data-i="${i}"></button>`).join("");
}
const _update = updateSlider;
updateSlider = function () { _update(); renderDots(); };
dots.addEventListener("click", e => { if (e.target.dataset.i) { index = +e.target.dataset.i; restartAuto(); updateSlider(); } });

prev.addEventListener("click", () => { index--; restartAuto(); updateSlider(); });
next.addEventListener("click", () => { index++; restartAuto(); updateSlider(); });
window.addEventListener("resize", updateSlider);

// autoplay (berhenti saat hover / fokus)
let timer;
function autoNext() {
  index = index >= TESTI_COUNT - visibleCount() ? 0 : index + 1;
  updateSlider();
}
function restartAuto() { clearInterval(timer); timer = setInterval(autoNext, 4000); }
const slider = document.querySelector(".slider");
slider.addEventListener("mouseenter", () => clearInterval(timer));
slider.addEventListener("mouseleave", restartAuto);
slider.addEventListener("focusin", () => clearInterval(timer));

// swipe / drag
let startX = null;
track.addEventListener("pointerdown", e => { startX = e.clientX; });
window.addEventListener("pointerup", e => {
  if (startX === null) return;
  const dx = e.clientX - startX;
  startX = null;
  if (Math.abs(dx) > 50) { index += dx < 0 ? 1 : -1; restartAuto(); updateSlider(); }
});
updateSlider();
restartAuto();

// ---------- FAQ accordion ----------
const faqList = document.getElementById("faqList");
const Q = "Lorem ipsum dolor sit ameT, consectetur adipiscing elit. Lorem ipsum dolor sit amet";
const A = "Lorem ipsum dolor sit ameT, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit ameT, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit";

faqList.innerHTML = [0, 1, 2, 3].map(i => `
  <div class="faq-item${i === 3 ? " open" : ""}">
    <button class="faq-q" aria-expanded="${i === 3}" aria-controls="faq-a-${i}">
      <span>${Q}</span><span class="chev">&#8250;</span>
    </button>
    <div class="faq-a" id="faq-a-${i}"><div><p>${A}</p></div></div>
  </div>`).join("");

faqList.addEventListener("click", e => {
  const btn = e.target.closest(".faq-q");
  if (!btn) return;
  const item = btn.parentElement;
  const open = !item.classList.contains("open");
  faqList.querySelectorAll(".faq-item").forEach(el => {
    el.classList.remove("open");
    el.querySelector(".faq-q").setAttribute("aria-expanded", "false");
  });
  if (open) { item.classList.add("open"); btn.setAttribute("aria-expanded", "true"); }
});

// ---------- Contact form validation ----------
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");
form.addEventListener("submit", e => {
  e.preventDefault();
  const fields = [...form.querySelectorAll("input, textarea")];
  const empty = fields.find(f => !f.value.trim());
  const email = form.querySelector('input[type="email"]');
  if (empty) { msg.className = "form-msg err"; msg.textContent = "Semua kolom wajib diisi."; empty.focus(); return; }
  if (!/^\S+@\S+\.\S+$/.test(email.value)) { msg.className = "form-msg err"; msg.textContent = "Format email belum benar."; email.focus(); return; }
  msg.className = "form-msg ok"; msg.textContent = "Terima kasih! Pesanmu sudah terkirim."; count.textContent = "0 / 300";
  form.reset();
});


// ---------- Navbar: bayangan saat scroll + menu mobile + scroll-spy ----------
const navbar = document.querySelector(".navbar");
const menuBtn = document.getElementById("menuBtn");
const navEl = navbar.querySelector("nav");
const navLinks = [...navEl.querySelectorAll("a")];
const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", scrollY > 10);
  toTop.classList.toggle("show", scrollY > 600);
}, { passive: true });
toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

menuBtn.addEventListener("click", () => {
  const open = navEl.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
  menuBtn.innerHTML = open ? "&times;" : "&#9776;";
});
navLinks.forEach(a => a.addEventListener("click", () => {
  navEl.classList.remove("open");
  menuBtn.innerHTML = "&#9776;";
}));

const spy = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(sec => spy.observe(sec));

// ---------- Reveal saat scroll (sekali, per seksi) ----------
const reveal = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); reveal.unobserve(en.target); } });
}, { threshold: 0.15 });
document.querySelectorAll(".about-body, .portfolio, .testi, .faq, .contact").forEach(el => {
  el.classList.add("reveal");
  reveal.observe(el);
});

// ---------- Hitung angka statistik ----------
const statEls = document.querySelectorAll(".stats strong");
const finals = [...statEls].map(el => +el.textContent);
statEls.forEach(el => (el.textContent = "0"));
const counter = new IntersectionObserver(entries => {
  if (!entries[0].isIntersecting) return;
  counter.disconnect();
  const dur = 1400, t0 = performance.now();
  (function tick(now) {
    const p = Math.min((now - t0) / dur, 1), ease = 1 - Math.pow(1 - p, 3);
    statEls.forEach((el, i) => (el.textContent = Math.round(finals[i] * ease)));
    if (p < 1) requestAnimationFrame(tick);
  })(t0);
}, { threshold: 0.6 });
counter.observe(document.querySelector(".stats"));

// ---------- Modal portofolio ----------
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
let lastFocus;
function openModal(card) {
  lastFocus = card;
  modalTitle.textContent = card.textContent;
  const img = card.querySelector("img");
  document.querySelector(".modal-img").style.background = img ? `url("${img.getAttribute("src")}") center / cover` : "";
  modal.hidden = false;
  document.getElementById("modalClose").focus();
}
function closeModal() { modal.hidden = true; lastFocus && lastFocus.focus(); }
pGrid.addEventListener("click", e => { const c = e.target.closest(".p-card"); if (c) openModal(c); });
pGrid.addEventListener("keydown", e => {
  const c = e.target.closest(".p-card");
  if (c && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openModal(c); }
});
document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

// ---------- Form: hitung karakter + validasi saat blur ----------
const textarea = form.querySelector("textarea");
textarea.maxLength = 300;
const count = document.createElement("span");
count.className = "count";
count.textContent = "0 / 300";
textarea.after(count);
textarea.addEventListener("input", () => (count.textContent = `${textarea.value.length} / 300`));
form.querySelectorAll("input, textarea").forEach(f =>
  f.addEventListener("blur", () => f.classList.add("touched")));
form.addEventListener("submit", () => form.querySelectorAll(".touched").forEach(f => f.classList.remove("touched")));

// ---------- Tombol: Selanjutnya ----------
document.getElementById("nextBtn").addEventListener("click", () =>
  document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" }));

// ---------- Tombol: Sign In / Sign Up ----------
const authModal = document.getElementById("authModal");
const authForm = document.getElementById("authForm");
const authTitle = document.getElementById("authTitle");
const authSubmit = document.getElementById("authSubmit");
const authMsg = document.getElementById("authMsg");
const nameWrap = document.getElementById("nameWrap");
const authAsk = document.getElementById("authAsk");
const authSwap = document.getElementById("authSwap");
const signInBtn = document.querySelector('[data-auth="in"]');
const signUpBtn = document.querySelector('[data-auth="up"]');
let mode = "in", authLast;

function setMode(m) {
  mode = m;
  const up = m === "up";
  authTitle.textContent = up ? "Sign Up" : "Sign In";
  authSubmit.textContent = up ? "Sign Up" : "Sign In";
  nameWrap.hidden = !up;
  authAsk.textContent = up ? "Sudah punya akun?" : "Belum punya akun?";
  authSwap.textContent = up ? "Sign In" : "Sign Up";
  authMsg.textContent = "";
}
function openAuth(m, trigger) {
  authLast = trigger;
  setMode(m);
  authModal.hidden = false;
  authForm.querySelector("input:not([hidden])").focus();
}
function closeAuth() { authModal.hidden = true; authLast && authLast.focus(); }

document.querySelectorAll("[data-auth]").forEach(b =>
  b.addEventListener("click", () => {
    if (b.classList.contains("logged")) { logout(); return; }
    openAuth(b.dataset.auth, b);
  }));
authSwap.addEventListener("click", () => setMode(mode === "in" ? "up" : "in"));
document.getElementById("authClose").addEventListener("click", closeAuth);
authModal.addEventListener("click", e => { if (e.target === authModal) closeAuth(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !authModal.hidden) closeAuth(); });

authForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("authName").value.trim();
  const email = document.getElementById("authEmail").value.trim();
  const pass = document.getElementById("authPass").value;
  authMsg.className = "auth-msg";
  if (mode === "up" && !name) { authMsg.textContent = "Nama wajib diisi."; return; }
  if (!/^\S+@\S+\.\S+$/.test(email)) { authMsg.textContent = "Format email belum benar."; return; }
  if (pass.length < 6) { authMsg.textContent = "Password minimal 6 karakter."; return; }
  authMsg.className = "auth-msg ok";
  authMsg.textContent = mode === "up" ? "Akun berhasil dibuat!" : "Berhasil masuk!";
  const shown = name || email.split("@")[0];
  setTimeout(() => { closeAuth(); login(shown); authForm.reset(); }, 700);
});

function login(nameText) {
  signInBtn.textContent = "Halo, " + nameText;
  signInBtn.classList.add("logged");
  signUpBtn.hidden = true;
  signInBtn.title = "Klik untuk keluar";
}
function logout() {
  signInBtn.textContent = "Sign In";
  signInBtn.classList.remove("logged");
  signUpBtn.hidden = false;
  signInBtn.title = "";
}
