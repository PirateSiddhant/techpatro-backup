/* =========================================================
   DigiPatro — site behaviour (vanilla JS, no dependencies)
   ========================================================= */
(() => {
  "use strict";

  const { SITE, PRODUCTS, CATEGORIES, FAQS, TESTIMONIALS, WEBSITE_PACKAGES } = window;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const npr = (n) => "Rs. " + Number(n).toLocaleString("en-IN");
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const minPrice = (p) => Math.min(...p.plans.map((x) => x.price));
  const catLabel = (id) => (CATEGORIES.find((c) => c.id === id) || {}).label || id;
  const byId = (id) => PRODUCTS.find((p) => p.id === id);

  /* ---------- Icons (inline SVG, stroke style) ---------- */
  const I = {
    search: '<circle cx="11" cy="11" r="7.5"/><path d="m20.5 20.5-4.2-4.2"/>',
    bag: '<path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowUR: '<path d="M7 17 17 7M8 7h9v9"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3"/>',
    grid: '<rect x="3.5" y="3.5" width="7" height="7" rx="2"/><rect x="13.5" y="3.5" width="7" height="7" rx="2"/><rect x="3.5" y="13.5" width="7" height="7" rx="2"/><rect x="13.5" y="13.5" width="7" height="7" rx="2"/>',
    chat: '<path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.6-5.1A8.5 8.5 0 1 1 21 11.5z"/>',
    wallet: '<rect x="3" y="6" width="18" height="14" rx="3"/><path d="M3 10h18M16 15h2"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M17 6l3 3M14 9l2 2"/>',
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    shield: '<path d="M12 3 4.5 6v6c0 4.5 3.2 8 7.5 9 4.3-1 7.5-4.5 7.5-9V6z"/><path d="m9 12 2 2 4-4"/>',
    refresh: '<path d="M20 11a8 8 0 0 0-14.6-4.5L4 8M4 4v4h4M4 13a8 8 0 0 0 14.6 4.5L20 16M20 20v-4h-4"/>',
    heart: '<path d="M12 20s-7.5-4.6-9-9.5C2 7 4.5 4 7.7 4c1.9 0 3.3 1 4.3 2.4C13 5 14.4 4 16.3 4 19.5 4 22 7 21 10.5 19.5 15.4 12 20 12 20z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    code: '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>',
    tag: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.5"/>',
    fb: '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/>',
    ig: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".8" fill="currentColor"/>',
    tt: '<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.5 2.6 2.4 4.5 5 5"/>',
  };
  const icon = (name, cls = "icon") =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[name]}</svg>`;
  const waIcon =
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>';
  const mono = (p, size = "") =>
    `<span class="mono ${size}" style="--c:${p.color}" aria-hidden="true">${esc(p.mono)}</span>`;

  /* ---------- WhatsApp ---------- */
  const waLink = (text) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
  const waGeneral = () => waLink(`Namaste ${SITE.name}! I'd like some help choosing a subscription.`);

  /* ---------- Cart store (localStorage) ---------- */
  const CART_KEY = "digipatro_cart_v1";
  const Cart = {
    items: (() => {
      try {
        return JSON.parse(localStorage.getItem(CART_KEY)) || [];
      } catch {
        return [];
      }
    })(),
    save() {
      localStorage.setItem(CART_KEY, JSON.stringify(this.items));
      renderCart();
    },
    add(id, planIdx = 0) {
      const p = byId(id);
      if (!p) return;
      const key = `${id}:${planIdx}`;
      const ex = this.items.find((i) => i.key === key);
      ex ? ex.qty++ : this.items.push({ key, id, planIdx, qty: 1 });
      this.save();
      toast(`${p.name} added to cart`);
    },
    setQty(key, qty) {
      const it = this.items.find((i) => i.key === key);
      if (!it) return;
      it.qty = Math.max(0, qty);
      if (!it.qty) this.items = this.items.filter((i) => i.key !== key);
      this.save();
    },
    clear() {
      this.items = [];
      this.save();
    },
    lines() {
      return this.items
        .map((i) => {
          const p = byId(i.id);
          if (!p || !p.plans[i.planIdx]) return null;
          const plan = p.plans[i.planIdx];
          return { ...i, p, plan, total: plan.price * i.qty };
        })
        .filter(Boolean);
    },
    count() {
      return this.items.reduce((n, i) => n + i.qty, 0);
    },
    total() {
      return this.lines().reduce((n, l) => n + l.total, 0);
    },
    message() {
      const lines = this.lines();
      const body = lines.map((l, i) => `${i + 1}. ${l.p.name} — ${l.plan.label} × ${l.qty} = ${npr(l.total)}`).join("\n");
      return `Namaste ${SITE.name}! I'd like to order:\n\n${body}\n\nTotal: ${npr(this.total())}\n\nPlease share payment details. Thank you!`;
    },
  };

  /* ---------- Layout: header, dialogs, footer ---------- */
  const NAV = [
    { href: "index.html", label: "Home", page: "home" },
    { href: "subscriptions.html", label: "Subscriptions", page: "subscriptions" },
    { href: "websites.html", label: "Websites", page: "websites" },
    { href: "offers.html", label: "Offers", page: "offers" },
    { href: "how-it-works.html", label: "How It Works", page: "how" },
    { href: "faq.html", label: "FAQ", page: "faq" },
    { href: "support.html", label: "Support", page: "support" },
  ];
  const page = document.body.dataset.page || "";
  const navLinks = () =>
    NAV.map((n) => `<a href="${n.href}"${n.page === page ? ' aria-current="page"' : ""}>${n.label}</a>`).join("");

  function renderLayout() {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `<a href="#main" class="skip-link">Skip to content</a>
      <div class="ambient" aria-hidden="true"></div>
      <div class="progress" aria-hidden="true"></div>
      <header class="site-header" id="site-header">
        <nav class="nav" aria-label="Primary">
          <a class="brand" href="index.html" aria-label="${SITE.name} home">
            <img src="assets/img/logo.svg" alt="DigiPatro logo - digital subscription provider in Nepal" width="38" height="38">
            <span class="brand-name">Digi<span>Patro</span></span>
          </a>
          <div class="nav-links">${navLinks()}</div>
          <button class="nav-search" type="button" data-open="search-dialog" aria-label="Search subscriptions">
            ${icon("search")}<span>Search subscriptions…</span><kbd>⌘K</kbd>
          </button>
          <div class="nav-actions">
            <button class="icon-btn search-mobile" type="button" data-open="search-dialog" aria-label="Search">${icon("search")}</button>
            <button class="icon-btn" type="button" data-open="cart-dialog" aria-label="Open cart">
              ${icon("bag")}<span class="cart-count" data-count="0">0</span>
            </button>
            <a class="btn btn-primary btn-sm" href="subscriptions.html">Get Started</a>
            <button class="icon-btn menu-toggle" type="button" data-open="menu-dialog" aria-label="Open menu">${icon("menu")}</button>
          </div>
        </nav>
      </header>

      <dialog class="drawer" id="menu-dialog" closedby="any" aria-label="Menu">
        <div class="drawer-inner">
          <div class="drawer-head">
            <a class="brand" href="index.html"><img src="assets/img/logo.svg" alt="" width="34" height="34"><span class="brand-name">Digi<span>Patro</span></span></a>
            <button class="icon-btn" type="button" data-close aria-label="Close menu">${icon("close")}</button>
          </div>
          <div class="drawer-body"><nav class="mobile-links" aria-label="Mobile">${navLinks()}</nav></div>
          <div class="drawer-foot">
            <a class="btn btn-primary btn-block" href="subscriptions.html">Browse Catalog ${icon("arrow")}</a>
            <a class="btn btn-wa btn-block" href="${waGeneral()}" target="_blank" rel="noopener">${icon("chat")} Chat on WhatsApp</a>
          </div>
        </div>
      </dialog>

      <dialog class="search-dialog" id="search-dialog" closedby="any" aria-label="Search subscriptions">
        <div class="search-field">
          ${icon("search")}
          <input type="search" id="search-input" placeholder="Search Netflix, ChatGPT, Canva…" autocomplete="off" aria-label="Search">
          <button class="icon-btn" type="button" data-close aria-label="Close search">${icon("close")}</button>
        </div>
        <div class="search-results" id="search-results" role="list"></div>
      </dialog>

      <dialog class="drawer" id="cart-dialog" closedby="any" aria-labelledby="cart-title">
        <div class="drawer-inner">
          <div class="drawer-head">
            <h2 id="cart-title">Your cart</h2>
            <button class="icon-btn" type="button" data-close aria-label="Close cart">${icon("close")}</button>
          </div>
          <div class="drawer-body" id="cart-body"></div>
          <div class="drawer-foot" id="cart-foot"></div>
        </div>
      </dialog>`
    );

    $("#main")?.insertAdjacentHTML("afterend", footerHTML());
    document.body.insertAdjacentHTML(
      "beforeend",
      `<a class="wa-float" href="${waGeneral()}" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">${waIcon}</a>
       <div class="toast" id="toast" role="status" aria-live="polite"></div>`
    );
  }

  function footerHTML() {
    const year = new Date().getFullYear();
    return `<footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-about">
            <a class="brand" href="index.html"><img src="assets/img/logo.svg" alt="DigiPatro logo - digital subscription provider in Nepal" width="38" height="38"><span class="brand-name">Digi<span>Patro</span></span></a>
            <p>${esc(SITE.tagline)}. Premium streaming, music, AI and productivity plans — delivered on WhatsApp, paid the Nepali way.</p>
            <p style="margin-top:10px;font-size:13px;color:var(--faint)">🏢 <strong>Headquarters:</strong> ${esc(SITE.location)}<br>🌐 <em>${esc(SITE.trustStatement)}</em></p>

            <div class="socials" style="margin-top:14px">
              <a href="${SITE.socials.facebook}" target="_blank" rel="noopener" aria-label="Facebook @digipatro">${icon("fb")}</a>
              <a href="${SITE.socials.instagram}" target="_blank" rel="noopener" aria-label="Instagram @digipatro">${icon("ig")}</a>
              <a href="${SITE.socials.tiktok}" target="_blank" rel="noopener" aria-label="TikTok @digipatro">${icon("tt")}</a>
              <a href="${SITE.socials.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp +9779849782340" style="color:#4ade80">${icon("chat")}</a>
            </div>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="subscriptions.html">All subscriptions</a></li>
              <li><a href="offers.html">Offers & combos</a></li>
              <li><a href="websites.html">Website design</a></li>
              <li><a href="how-it-works.html">How it works</a></li>
            </ul>
          </div>
          <div>
            <h4>Help</h4>
            <ul>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="support.html">Support</a></li>
              <li><a href="refund.html">Refund policy</a></li>
              <li><a href="terms.html">Terms</a></li>
            </ul>
          </div>
          <div>
            <h4>We accept</h4>
            <div class="pay-badges">${SITE.payments.map((p) => `<span>${esc(p)}</span>`).join("")}</div>
            <h4 style="margin-top:24px">Contact & Orders</h4>
            <ul>
              <li><a href="tel:${SITE.phone}">📞 Phone: ${esc(SITE.phone)}</a></li>
              <li><a href="mailto:${SITE.email}">✉️ Email: ${esc(SITE.email)}</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${year} ${SITE.name} · Biratnagar, Nepal. Made with ♥ for Nepal & Nepali communities worldwide.</span>
          <nav aria-label="Legal"><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a><a href="refund.html">Refunds</a></nav>
        </div>
        <p class="note" style="padding-bottom:28px;text-align:left">All product names and trademarks belong to their respective owners. ${SITE.name} is an independent reseller and is not affiliated with or endorsed by these brands.</p>
      </div>
    </footer>`;
  }

  /* ---------- Dialog wiring (with closedby fallback) ---------- */
  function wireDialogs() {
    document.addEventListener("click", (e) => {
      const opener = e.target.closest("[data-open]");
      if (opener) {
        const d = document.getElementById(opener.dataset.open);
        if (d && !d.open) {
          $$("dialog[open]").forEach((x) => x.close());
          d.showModal();
          if (d.id === "search-dialog") {
            const inp = $("#search-input");
            inp.value = "";
            renderSearch("");
            inp.focus();
          }
        }
      }
      const closer = e.target.closest("[data-close]");
      if (closer) closer.closest("dialog")?.close();
    });

    // Light-dismiss fallback for browsers without <dialog closedby>
    if (!("closedBy" in HTMLDialogElement.prototype)) {
      $$("dialog").forEach((dialog) => {
        dialog.addEventListener("click", (event) => {
          if (event.target !== dialog) return;
          const r = dialog.getBoundingClientRect();
          const inside = r.top <= event.clientY && event.clientY <= r.bottom && r.left <= event.clientX && event.clientX <= r.right;
          if (!inside) dialog.close();
        });
      });
    }

    // ⌘K / Ctrl+K and "/" open search
    document.addEventListener("keydown", (e) => {
      const typing = /input|textarea|select/i.test(document.activeElement?.tagName);
      if (((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") || (e.key === "/" && !typing)) {
        e.preventDefault();
        $('[data-open="search-dialog"]')?.click();
      }
    });
  }

  /* ---------- Search ---------- */
  const matches = (p, q) => {
    if (!q) return true;
    const hay = `${p.name} ${p.category} ${catLabel(p.category)} ${p.tag} ${p.blurb}`.toLowerCase();
    return q
      .toLowerCase()
      .split(/\s+/)
      .every((t) => hay.includes(t));
  };
  function renderSearch(q) {
    const box = $("#search-results");
    const list = PRODUCTS.filter((p) => matches(p, q)).slice(0, 10);
    box.innerHTML = list.length
      ? list
          .map(
            (p) => `<a class="search-item" role="listitem" href="product.html?id=${p.id}">
              ${mono(p)}
              <span class="meta"><strong>${esc(p.name)}</strong><span>${esc(catLabel(p.category))} · ${esc(p.tag || p.discount || "")}</span></span>
              <span class="price">from ${npr(minPrice(p))}</span>
            </a>`
          )
          .join("")
      : `<div class="search-empty">No matches for “${esc(q)}”. <a href="${waLink(`Hi! Do you have ${q}?`)}" target="_blank" rel="noopener" style="color:var(--saffron)">Ask us on WhatsApp</a></div>`;
  }

  /* ---------- Cart UI ---------- */
  function renderCartPage() {
    const pageEl = $("#cart-page-content");
    if (!pageEl) return;
    const lines = Cart.lines();
    if (!lines.length) {
      pageEl.innerHTML = `
        <div style="text-align:center;padding:60px 20px;background:var(--surface);border:1px solid var(--border);border-radius:20px;max-width:640px;margin:0 auto">
          <div style="width:64px;height:64px;margin:0 auto 16px;border-radius:50%;background:rgba(255,255,255,0.04);display:grid;place-items:center;color:var(--faint)">${icon("bag", "icon lg")}</div>
          <h2 style="font-size:24px;margin-bottom:8px">Your cart is empty</h2>
          <p style="color:var(--muted);max-width:440px;margin:0 auto 24px">Browse our catalog of 32+ premium subscriptions with instant WhatsApp delivery and a full replacement warranty.</p>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
            <a class="btn btn-primary" href="subscriptions.html">Explore Subscriptions</a>
            <a class="btn btn-wa-solid" href="${waGeneral()}" target="_blank" rel="noopener">${waIcon.replace("<svg", '<svg class="icon"')} Chat on WhatsApp (+9779849782340)</a>
          </div>
        </div>`;
      return;
    }

    const itemsHTML = lines.map((l) => `
      <div class="cart-page-row" style="display:flex;align-items:center;gap:16px;padding:16px;background:var(--surface);border:1px solid var(--border);border-radius:14px;margin-bottom:12px;flex-wrap:wrap">
        <div>${mono(l.p)}</div>
        <div style="flex:1;min-width:180px">
          <strong style="display:block;font-size:16px;color:var(--text)">${esc(l.p.name)}</strong>
          <span style="font-size:13px;color:var(--muted)">${esc(l.plan.label)} · ${npr(l.plan.price)}</span>
        </div>
        <div class="qty" style="display:inline-flex;align-items:center;background:var(--surface-2);border:1px solid var(--border);border-radius:10px;padding:2px">
          <button type="button" data-qty="${l.key}" data-d="-1" aria-label="Decrease quantity" style="background:none;border:none;color:var(--text);padding:6px 10px;cursor:pointer">${icon("minus", "icon")}</button>
          <output aria-live="polite" style="font-family:var(--font-mono);font-weight:700;padding:0 8px">${l.qty}</output>
          <button type="button" data-qty="${l.key}" data-d="1" aria-label="Increase quantity" style="background:none;border:none;color:var(--text);padding:6px 10px;cursor:pointer">${icon("plus", "icon")}</button>
        </div>
        <span style="font-family:var(--font-mono);font-weight:700;font-size:16px;min-width:90px;text-align:right">${npr(l.total)}</span>
        <button type="button" data-qty="${l.key}" data-d="${-l.qty}" aria-label="Remove item" style="background:none;border:none;color:var(--faint);cursor:pointer;padding:6px">${icon("trash", "icon")}</button>
      </div>
    `).join("");

    const total = Cart.total();
    pageEl.innerHTML = `
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:32px;align-items:start">
        <div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
            <h2 style="font-size:20px;margin:0">Cart Items (${Cart.count()})</h2>
            <button class="btn btn-ghost btn-sm" type="button" data-clear>${icon("trash")} Clear All</button>
          </div>
          ${itemsHTML}
          <div style="margin-top:16px">
            <a class="btn btn-ghost btn-sm" href="subscriptions.html">← Continue Shopping</a>
          </div>
        </div>

        <div style="background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:24px;position:sticky;top:90px">
          <h2 style="font-size:20px;margin-bottom:16px">Order Summary</h2>
          <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);font-size:14px">
            <span style="color:var(--muted)">Subtotal</span>
            <span style="font-family:var(--font-mono);font-weight:600">${npr(total)}</span>
          </div>
          <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);font-size:14px">
            <span style="color:var(--muted)">Delivery</span>
            <span style="color:#4ade80;font-weight:600">FREE (Instant WhatsApp)</span>
          </div>
          <div style="display:flex;justify-content:space-between;padding:16px 0;font-size:18px">
            <span style="font-weight:700">Total Due</span>
            <span style="font-family:var(--font-mono);font-weight:800;color:var(--saffron);font-size:22px">${npr(total)}</span>
          </div>

          <a class="btn btn-wa-solid btn-block" style="--h:48px;font-size:15px;font-weight:700" href="${waLink(Cart.message())}" target="_blank" rel="noopener">
            ${waIcon.replace("<svg", '<svg class="icon"')} Order on WhatsApp
          </a>

          <div style="margin-top:20px;padding:14px;background:rgba(255,255,255,0.02);border:1px solid var(--border);border-radius:12px;font-size:13px">
            <div style="font-weight:700;margin-bottom:8px;color:var(--text)">Order Desk &amp; Inquiries:</div>
            <div style="display:flex;flex-direction:column;gap:6px;color:var(--muted)">
              <div>📱 WhatsApp: <a href="${waGeneral()}" target="_blank" rel="noopener" style="color:var(--text);font-weight:600">+9779849782340</a></div>
              <div>📞 Phone: <a href="tel:+9779849782340" style="color:var(--text);font-weight:600">+9779849782340</a></div>
              <div>✉️ Email: <a href="mailto:order@digipatro.com" style="color:var(--saffron);font-weight:600">order@digipatro.com</a></div>
              <div>🏢 HQ: Main Road, Biratnagar, Nepal</div>
            </div>
          </div>

          <div style="margin-top:16px">
            <span style="font-size:12px;color:var(--faint);display:block;margin-bottom:6px">We Accept:</span>
            <div class="pay-badges">${SITE.payments.map((p) => `<span>${esc(p)}</span>`).join("")}</div>
          </div>
          <p class="note" style="margin-top:14px;font-size:11.5px">Pay via eSewa / Khalti / Fonepay QR after sending your order on WhatsApp. 100% replacement warranty included.</p>
        </div>
      </div>
    `;
  }

  function renderCart() {
    const count = Cart.count();
    $$(".cart-count").forEach((el) => {
      el.textContent = count;
      el.dataset.count = count;
    });
    renderCartPage();
    const body = $("#cart-body");
    const foot = $("#cart-foot");
    if (!body) return;
    const lines = Cart.lines();
    if (!lines.length) {
      body.innerHTML = `<div class="cart-empty">${icon("bag", "icon lg")}<p>Your cart is empty.</p><a class="btn btn-ghost btn-sm" href="subscriptions.html">Browse subscriptions</a></div>`;
      foot.innerHTML = "";
      return;
    }
    body.innerHTML = lines
      .map(
        (l) => `<div class="cart-item">
          ${mono(l.p)}
          <div class="info">
            <strong>${esc(l.p.name)}</strong>
            <span>${esc(l.plan.label)} · ${npr(l.plan.price)}</span>
            <div class="qty">
              <button type="button" data-qty="${l.key}" data-d="-1" aria-label="Decrease quantity">${icon("minus", "icon")}</button>
              <output aria-live="polite">${l.qty}</output>
              <button type="button" data-qty="${l.key}" data-d="1" aria-label="Increase quantity">${icon("plus", "icon")}</button>
            </div>
          </div>
          <span class="line">${npr(l.total)}</span>
        </div>`
      )
      .join("");
    foot.innerHTML = `
      <div class="cart-total"><span>Total</span><span>${npr(Cart.total())}</span></div>
      <a class="btn btn-wa-solid btn-block" href="${waLink(Cart.message())}" target="_blank" rel="noopener">${waIcon.replace("<svg", '<svg class="icon"')} Order on WhatsApp</a>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px;font-size:12px;color:var(--faint)">
        <span>📱 WhatsApp: <strong style="color:var(--text)">${esc(SITE.whatsappDisplay)}</strong></span>
        <span>✉️ Email: <a href="mailto:${SITE.email}" style="color:var(--saffron)">${esc(SITE.email)}</a></span>
      </div>
      <div style="text-align:center;margin-top:8px">
        <a href="cart.html" style="font-size:12.5px;color:var(--saffron);text-decoration:underline">Go to Full Cart &amp; Order Page →</a>
      </div>
      <button class="btn btn-ghost btn-sm" type="button" data-clear style="margin-top:8px">${icon("trash")} Clear cart</button>
      <p class="note">Pay via ${SITE.payments.slice(0, 3).join(", ")} after we confirm your order.</p>`;
  }
  document.addEventListener("click", (e) => {
    const q = e.target.closest("[data-qty]");
    if (q) {
      const it = Cart.items.find((i) => i.key === q.dataset.qty);
      if (it) Cart.setQty(it.key, it.qty + Number(q.dataset.d));
    }
    if (e.target.closest("[data-clear]")) Cart.clear();
    const add = e.target.closest("[data-add]");
    if (add) {
      e.preventDefault();
      Cart.add(add.dataset.add, Number(add.dataset.plan || 0));
    }
  });

  /* ---------- Toast ---------- */
  let toastT;
  function toast(msg) {
    const t = $("#toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastT);
    toastT = setTimeout(() => t.classList.remove("show"), 2200);
  }

  /* ---------- Card templates ---------- */
  const featuredCard = (p) => {
    const minP = minPrice(p);
    const origP = p.originalPrice || (p.plans && p.plans[0] && p.plans[0].originalPrice);
    return `
    <a class="f-card" href="product.html?id=${p.id}" style="--c:${p.color}" aria-label="${esc(p.name)} — from ${npr(minP)}">
      <div class="top">
        <h3>${esc(p.name.replace(" Premium", ""))}</h3>
        <span class="tag" style="--c:${p.color}">${esc(p.discount || p.tag || "Verified")}</span>
      </div>
      <div class="mid">${mono(p, "lg")}</div>
      <div class="bottom">
        <div>
          <span class="from">Starting at</span>
          <div style="display:flex;align-items:baseline;gap:6px">
            <span class="amount">${npr(minP)}</span>
            ${origP ? `<span style="font-size:12px;color:var(--faint);text-decoration:line-through">${npr(origP)}</span>` : ""}
          </div>
        </div>
        <span class="arrow">${icon("arrowUR")}</span>
      </div>
    </a>`;
  };

  const productCard = (p) => {
    const minP = minPrice(p);
    const origP = p.originalPrice || (p.plans && p.plans[0] && p.plans[0].originalPrice);
    const planLbl = p.planInfo || (p.plans && p.plans[0] && p.plans[0].label) || "Standard Plan";
    const waOrder = waLink(`Namaste ${SITE.name}! I would like to order ${p.name} (${planLbl}) for ${npr(minP)}. Please share payment details.`);
    const feats = (p.features || []).slice(0, 3).map((f) => `
      <span class="p-feat">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="p-check"><path d="M20 6 9 17l-5-5"/></svg>
        <span class="truncate">${esc(f)}</span>
      </span>
    `).join("");

    return `
    <article class="p-card reveal" style="--c:${p.color}">
      <div class="p-card-top">
        <span class="p-cat-tag">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/></svg>
          ${esc(catLabel(p.category))}
        </span>
        ${p.discount ? `<span class="p-disc-tag">${esc(p.discount)}</span>` : ""}
      </div>
      <div class="head">
        ${mono(p)}
        <div class="p-title-wrap">
          <h3><a href="product.html?id=${p.id}">${esc(p.name)}</a></h3>
          <p class="p-blurb">${esc(p.blurb)}</p>
        </div>
      </div>
      ${feats ? `<div class="p-feats">${feats}</div>` : ""}
      <div class="p-plan-line">
        <span class="p-plan-label">${esc(planLbl)}</span>
        <span class="p-instock"><span class="p-dot"></span>In stock</span>
      </div>
      <div class="p-pricing-row">
        <div>
          <span class="from">Lowest Price</span>
          <div class="p-price-group">
            <span class="amount">${npr(minP)}</span>
            ${origP ? `<span class="p-was">${npr(origP)}</span>` : ""}
          </div>
        </div>
        <a class="p-see-all" href="product.html?id=${p.id}">View Details →</a>
      </div>
      <div class="p-card-actions">
        <a class="btn btn-wa-solid btn-sm btn-block" href="${waOrder}" target="_blank" rel="noopener">
          ${waIcon.replace("<svg", '<svg class="icon"')} Order on WhatsApp
        </a>
        <div class="p-sub-actions">
          <button class="btn btn-ghost btn-sm" type="button" data-add="${p.id}" aria-label="Add ${esc(p.name)} to cart">
            ${icon("bag")} Add to Cart
          </button>
          <a class="btn btn-ghost btn-sm" href="product.html?id=${p.id}">
            Plans
          </a>
        </div>
      </div>
    </article>`;
  };

  /* ---------- Page sections ---------- */
  function renderHome() {
    // Animated headline
    const h = $("#hero-title");
    if (h) {
      let i = 0;
      const split = (txt, cls = "") =>
        `<span class="${cls}">${[...txt].map((c) => `<span class="char" style="animation-delay:${(i++ * 0.045).toFixed(3)}s">${c}</span>`).join("")}</span>`;
      h.innerHTML = `${split("Digi")}${split("Patro", "grad-text")}`;
      h.setAttribute("aria-label", "DigiPatro");
    }
    const chips = $("#hero-chips");
    if (chips)
      chips.innerHTML = PRODUCTS.slice(0, 14)
        .map((p) => `<a class="chip" href="product.html?id=${p.id}"><i style="--c:${p.color}"></i>${esc(p.name.replace(" Premium", ""))}</a>`)
        .join("");
    const feat = $("#featured");
    if (feat) feat.innerHTML = PRODUCTS.filter((p) => p.featured).slice(0, 4).map(featuredCard).join("");
    const pop = $("#popular-grid");
    if (pop) pop.innerHTML = PRODUCTS.filter((p) => p.popular).slice(0, 8).map(productCard).join("");
    const mq = $("#marquee");
    if (mq) {
      const items = [...SITE.payments, "WhatsApp Delivery", "Replacement Warranty", "Local Support", "Instant Activation"];
      const row = items.map((x) => `<span>${esc(x)}</span>`).join("");
      mq.innerHTML = row + row.replace(/<span>/g, '<span aria-hidden="true">');
    }
  }

  function renderCatalog() {
    const grid = $("#catalog-grid");
    if (!grid) return;
    const tabs = $("#catalog-tabs");
    const input = $("#catalog-search");
    const params = new URLSearchParams(location.search);
    let cat = CATEGORIES.some((c) => c.id === params.get("cat")) ? params.get("cat") : "all";
    let q = params.get("q") || "";
    input.value = q;

    tabs.innerHTML = CATEGORIES.map(
      (c) => `<button type="button" class="tab" data-cat="${c.id}" aria-pressed="${c.id === cat}">${c.label}</button>`
    ).join("");

    const draw = () => {
      const list = PRODUCTS.filter((p) => (cat === "all" || p.category === cat) && matches(p, q));
      grid.innerHTML = list.length
        ? list.map(productCard).join("")
        : `<div class="empty-state">No subscriptions found. Try another search or <a href="${waLink(`Hi! Do you have ${q}?`)}" target="_blank" rel="noopener" style="color:var(--saffron)">ask us on WhatsApp</a>.</div>`;
      $("#catalog-count").textContent = `${list.length} ${list.length === 1 ? "service" : "services"}`;
      observeReveals(grid);
      const u = new URL(location);
      cat === "all" ? u.searchParams.delete("cat") : u.searchParams.set("cat", cat);
      q ? u.searchParams.set("q", q) : u.searchParams.delete("q");
      history.replaceState(null, "", u);
    };
    tabs.addEventListener("click", (e) => {
      const b = e.target.closest("[data-cat]");
      if (!b) return;
      cat = b.dataset.cat;
      $$(".tab", tabs).forEach((t) => t.setAttribute("aria-pressed", t === b));
      draw();
    });
    input.addEventListener("input", () => {
      q = input.value.trim();
      draw();
    });
    draw();
  }

  function renderProduct() {
    const root = $("#product-detail");
    if (!root) return;
    const p = byId(new URLSearchParams(location.search).get("id"));
    if (!p) {
      root.innerHTML = `<div class="page-hero"><h1>Product not found</h1><p>That subscription may have moved.</p><div class="hero-ctas" style="justify-content:center"><a class="btn btn-primary" href="subscriptions.html">Browse catalog</a></div></div>`;
      return;
    }
    document.title = `Buy ${p.name} in Nepal · Best Price & Instant Delivery · ${SITE.name}`;
    $('meta[name="description"]')?.setAttribute(
      "content",
      `Buy genuine ${p.name} in Nepal at the best rate starting from ${npr(minPrice(p))}. Pay via eSewa, Khalti or Fonepay QR with instant WhatsApp delivery and full warranty!`
    );

    const officialComp = p.officialPrice
      ? `<div class="pd-compare-box" style="margin:20px 0;padding:16px 18px;border-radius:14px;background:rgba(255,255,255,0.03);border:1px solid var(--border)">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
            <span style="font-size:12px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:var(--faint)">Official Retail Price Comparison</span>
            <span style="font-size:12px;color:var(--cyan);background:rgba(34,211,238,0.1);padding:3px 8px;border-radius:6px;border:1px solid rgba(34,211,238,0.2)">Source: ${esc(p.officialSource || 'Official Store')}</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:12px;margin-top:8px;flex-wrap:wrap">
            <span style="font-size:14px;color:var(--muted)">Official / Direct Rate:</span>
            <span style="font-family:var(--font-mono);font-size:15px;color:var(--text);font-weight:600;text-decoration:line-through">${esc(p.officialPrice)}</span>
            <span style="font-size:13px;color:#4ade80;font-weight:700;background:rgba(34,197,94,0.12);padding:2px 8px;border-radius:6px">DigiPatro Saves You Up to 70%+</span>
          </div>
        </div>`
      : "";

    const descHTML = p.description
      ? `<div style="margin:24px 0">
          <h2 style="font-size:19px;margin:0 0 10px;font-weight:700">About ${esc(p.name)}</h2>
          <p style="font-size:15px;line-height:1.7;color:var(--muted);margin:0">${esc(p.description)}</p>
        </div>`
      : "";

    const specsHTML = p.specs && Object.keys(p.specs).length
      ? `<div style="margin:24px 0">
          <h2 style="font-size:19px;margin:0 0 12px;font-weight:700">Specifications &amp; Delivery Details</h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px">
            ${Object.entries(p.specs).map(([k, v]) => `
              <div style="padding:12px 14px;border-radius:10px;background:var(--surface);border:1px solid var(--border)">
                <div style="font-size:11px;font-weight:600;color:var(--faint);text-transform:uppercase;letter-spacing:0.04em">${esc(k)}</div>
                <div style="font-size:13.5px;font-weight:600;color:var(--text);margin-top:3px">${esc(v)}</div>
              </div>
            `).join("")}
          </div>
        </div>`
      : "";

    const leftDescBox = p.description
      ? `<div class="pd-desc-card" style="margin-top:20px;padding:22px;border-radius:20px;background:var(--surface);border:1px solid var(--border)">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
            <span style="font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:var(--cyan);background:rgba(34,211,238,0.1);padding:3px 10px;border-radius:999px;border:1px solid rgba(34,211,238,0.25)">Overview</span>
            <span style="font-size:12px;color:var(--faint)">· Verified Subscription</span>
          </div>
          <h2 style="font-size:18px;margin:0 0 10px;font-weight:700;color:var(--text)">About ${esc(p.name)}</h2>
          <p style="font-size:14.5px;line-height:1.75;color:var(--muted);margin:0">${esc(p.description)}</p>
        </div>`
      : "";

    root.innerHTML = `
      <div class="pd">
        <div class="reveal">
          <div class="pd-visual" style="--c:${p.color}">${mono(p, "xl")}</div>
          ${leftDescBox}
        </div>
        <div class="reveal">
          <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a>/<a href="subscriptions.html">Subscriptions</a>/<a href="subscriptions.html?cat=${p.category}">${esc(catLabel(p.category))}</a></nav>
          <span class="tag" style="--c:${p.color}">${esc(p.tag || p.discount || "VERIFIED")}</span>
          <h1 style="margin-top:12px">${esc(p.name)}</h1>
          <p class="blurb">${esc(p.blurb)}</p>
          ${officialComp}
          <fieldset class="plan-list">
            <legend>Choose your plan duration</legend>
            ${p.plans
              .map(
                (pl, i) => `<label class="plan">
                  <span class="lbl"><input type="radio" name="plan" value="${i}" ${i === 0 ? "checked" : ""}> ${esc(pl.label)}</span>
                  <span class="amt">${npr(pl.price)}${pl.originalPrice ? ` <small style="font-size:12px;color:var(--faint);text-decoration:line-through;font-weight:400;margin-left:4px">${npr(pl.originalPrice)}</small>` : ""}</span>
                </label>`
              )
              .join("")}
          </fieldset>
          <div class="pd-actions">
            <button class="btn btn-ghost" type="button" id="pd-add">${icon("bag")} Add to cart</button>
            <a class="btn btn-wa-solid" id="pd-wa" target="_blank" rel="noopener">${waIcon.replace("<svg", '<svg class="icon"')} Order on WhatsApp</a>
          </div>
          <div style="margin-top:12px;padding:12px 16px;background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:12px;font-size:12.5px;color:var(--faint);display:flex;flex-wrap:wrap;gap:20px;align-items:center">
            <span>📱 Order WhatsApp: <a href="${waGeneral()}" target="_blank" rel="noopener" style="color:var(--text);font-weight:600">${esc(SITE.whatsappDisplay)}</a></span>
            <span>✉️ Email: <a href="mailto:${SITE.email}" style="color:var(--saffron);font-weight:600">${esc(SITE.email)}</a></span>
          </div>
          <div class="pd-meta">
            <div><strong>10–30 min</strong>Instant WhatsApp Delivery</div>
            <div><strong>Full term</strong>100% Replacement Warranty</div>
            <div><strong>eSewa · Khalti · Fonepay</strong>Payment</div>
          </div>
          <h2 style="font-size:19px;margin:28px 0 12px;font-weight:700">What you get</h2>
          <ul class="checklist">${p.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
          ${specsHTML}
        </div>
      </div>`;

    const selected = () => Number($('input[name="plan"]:checked', root).value);
    const updateWa = () => {
      const pl = p.plans[selected()];
      $("#pd-wa").href = waLink(`Namaste ${SITE.name}! I'd like to order ${p.name} — ${pl.label} (${npr(pl.price)}). Please share payment details.`);
    };
    root.addEventListener("change", updateWa);
    $("#pd-add").addEventListener("click", () => Cart.add(p.id, selected()));
    updateWa();

    const rel = $("#related-grid");
    if (rel)
      rel.innerHTML = PRODUCTS.filter((x) => x.category === p.category && x.id !== p.id)
        .concat(PRODUCTS.filter((x) => x.popular && x.category !== p.category))
        .slice(0, 4)
        .map(productCard)
        .join("");
  }

  function renderFaq() {
    $$("[data-faq]").forEach((el) => {
      const limit = Number(el.dataset.faq) || FAQS.length;
      el.innerHTML = FAQS.slice(0, limit)
        .map((f, i) => `<details name="faq"${i === 0 ? " open" : ""}><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`)
        .join("");
    });
  }

  function renderReviews() {
    const el = $("#reviews");
    if (!el) return;
    el.innerHTML = TESTIMONIALS.map(
      (t) => `<figure class="review reveal" style="margin:0">
        <div class="stars" aria-label="${t.rating} out of 5 stars">${"★".repeat(t.rating)}</div>
        <blockquote style="margin:0"><p>“${esc(t.text)}”</p></blockquote>
        <figcaption class="who"><span class="avatar">${esc(t.name[0])}</span><span><strong>${esc(t.name)}</strong><span>${esc(t.city)}</span></span></figcaption>
      </figure>`
    ).join("");
  }

  function renderPackages() {
    $$("[data-packages]").forEach((el) => {
      el.innerHTML = WEBSITE_PACKAGES.map(
        (k) => `<div class="pkg reveal${k.highlight ? " highlight" : ""}">
          ${k.highlight ? '<span class="ribbon">Most popular</span>' : ""}
          <h3>${esc(k.name)}</h3>
          <p class="desc">${esc(k.blurb)}</p>
          <div class="price">${npr(k.price)} <small>${esc(k.period)}</small></div>
          <ul class="checklist">${k.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
          <a class="btn ${k.highlight ? "btn-primary" : "btn-ghost"} btn-block" target="_blank" rel="noopener"
             href="${waLink(`Namaste ${SITE.name}! I'm interested in the ${k.name} website package (${npr(k.price)}).`)}">Start my project ${icon("arrow")}</a>
        </div>`
      ).join("");
    });
  }

  function renderOffers() {
    const el = $("#offers-grid");
    if (!el) return;
    const deals = [
      { id: "netflix-prime-combo", plan: 0, was: 750, title: "Binge Bundle", note: "Netflix + Prime Combo — top-selling combo." },
      { id: "amazon-prime-video", plan: 0, was: 300, title: "Prime Video 4K", note: "Amazon Prime Video 4K single screen at 50% off." },
      { id: "netflix", plan: 0, was: 550, title: "Netflix 4K Profile", note: "Single screen 4K Ultra HD private profile." },
      { id: "canva-pro", plan: 0, was: 2000, title: "Creator Lifetime", note: "Lifetime Canva Pro invite with Brand Kit." },
      { id: "google-gemini-ai-pro", plan: 0, was: 3500, title: "Gemini AI Pro", note: "Google Gemini Advanced models private account." },
      { id: "microsoft-365", plan: 0, was: 6000, title: "Office 365 Annual", note: "Microsoft 365 Pro with 1 TB OneDrive for 12 months." },
    ];
    el.innerHTML = deals
      .map((d) => {
        const p = byId(d.id);
        if (!p) return "";
        const pl = (p.plans && p.plans[d.plan]) || p.plans[0];
        const wasPrice = d.was || p.originalPrice || Math.round(pl.price * 1.5);
        const off = Math.max(10, Math.round((1 - pl.price / wasPrice) * 100));
        return `<article class="offer reveal" style="--c:${p.color}">
          <span class="save">Save ${off}%</span>
          ${mono(p, "lg")}
          <div class="body">
            <span class="from">${esc(p.name)} · ${esc(pl.label)}</span>
            <h3>${esc(d.title)}</h3>
            <p>${esc(d.note)}</p>
            <div class="prices"><span class="now">${npr(pl.price)}</span><span class="was">${npr(wasPrice)}</span></div>
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              <button class="btn btn-primary btn-sm" type="button" data-add="${p.id}" data-plan="${d.plan}">${icon("bag")} Add to cart</button>
              <a class="btn btn-ghost btn-sm" href="product.html?id=${p.id}">Details</a>
            </div>
          </div>
        </article>`;
      })
      .join("");
  }

  function renderContactBits() {
    $$("[data-wa]").forEach((a) => {
      a.href = a.dataset.wa ? waLink(a.dataset.wa) : waGeneral();
      a.target = "_blank";
      a.rel = "noopener";
    });
    $$("[data-site]").forEach((el) => (el.textContent = SITE[el.dataset.site] ?? ""));
    $$("[data-email]").forEach((a) => (a.href = `mailto:${SITE.email}`));

    const form = $("#support-form");
    if (form)
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const f = new FormData(form);
        const msg = `Namaste ${SITE.name}! Support request\n\nName: ${f.get("name")}\nPhone: ${f.get("phone")}\nTopic: ${f.get("topic")}\nOrder/Product: ${f.get("order") || "-"}\n\n${f.get("message")}`;
        window.open(waLink(msg), "_blank", "noopener");
      });
  }

  /* ---------- Scroll reveal + header state ---------- */
  const io =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) =>
            entries.forEach((en) => {
              if (en.isIntersecting) {
                en.target.classList.add("in");
                io.unobserve(en.target);
              }
            }),
          { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
        )
      : null;
  function observeReveals(root = document) {
    $$(".reveal:not(.in)", root).forEach((el) => (io ? io.observe(el) : el.classList.add("in")));
  }
  function headerState() {
    const h = $("#site-header");
    const set = () => h.classList.toggle("scrolled", scrollY > 12);
    set();
    addEventListener("scroll", set, { passive: true });
  }

  /* ---------- Boot ---------- */
  renderLayout();
  wireDialogs();
  $("#search-input").addEventListener("input", (e) => renderSearch(e.target.value.trim()));
  renderHome();
  renderCatalog();
  renderProduct();
  renderFaq();
  renderReviews();
  renderPackages();
  renderOffers();
  renderContactBits();
  renderCart();
  headerState();
  observeReveals();
})();
