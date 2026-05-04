/* Shared partials for module pages — rendered into [data-cm-slot] elements */
(function(){
  const PAGES = [
    {key:'land',     href:'land-management.html', label:'Land Management',     short:'Land',     blurb:'Permits, plan reviews, inspections — without the printer.'},
    {key:'hr',       href:'human-resources.html', label:'Human Resources',     short:'HR',       blurb:'Onboarding, employment contracts, the people-side of government.'},
    {key:'budget',   href:'budget-management.html', label:'Budget Management', short:'Budget',   blurb:'Follow the money — funds, vendors, encumbrances, payments.'},
    {key:'licensing',href:'licensing.html', label:'Licensing',                short:'Licensing',blurb:'Applications and renewals, signed and issued online.'},
    {key:'foia',     href:'record-requests.html', label:'Record Requests',     short:'FOIA',     blurb:'Public-records requests routed, redacted, fulfilled.'},
    {key:'311',      href:'311.html', label:'311 / Citizen Services', short:'311', blurb:'From "there\u2019s a pothole" to a closed work order.'},
    {key:'reports',  href:'reports.html', label:'Reports & Dashboards', short:'Reports', blurb:'Live numbers from the same database staff are working in.'},
  ];

  function renderNav(active){
    return `
    <header class="cm-nav">
      <div class="cm-nav-row">
        <a href="index.html" class="cm-nav-logo" aria-label="Clarity Value home">
          <svg viewBox="0 0 24 24" fill="none" stroke="#0F1430" stroke-width="1.4" stroke-linecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" fill="#0F1430" stroke="none"/>
            <line x1="12" y1="6" x2="12" y2="2.5"/><line x1="15" y1="6.8" x2="16.75" y2="3.77"/><line x1="17.2" y1="9" x2="20.23" y2="7.25"/><line x1="18" y1="12" x2="21.5" y2="12"/><line x1="17.2" y1="15" x2="20.23" y2="16.75"/><line x1="15" y1="17.2" x2="16.75" y2="20.23"/><line x1="12" y1="18" x2="12" y2="21.5"/><line x1="9" y1="17.2" x2="7.25" y2="20.23"/><line x1="6.8" y1="15" x2="3.77" y2="16.75"/><line x1="6" y1="12" x2="2.5" y2="12"/><line x1="6.8" y1="9" x2="3.77" y2="7.25"/><line x1="9" y1="6.8" x2="7.25" y2="3.77"/>
          </svg>
          <span>Clarity Value</span>
        </a>
        <nav class="cm-nav-links">
          <a class="cm-nav-link" href="index.html#product">Product</a>
          <div class="cm-nav-dropdown">
            <button class="cm-nav-link cm-nav-dd-trigger is-active" type="button" aria-expanded="false" aria-haspopup="menu">Solutions
              <svg class="cm-nav-dd-chev" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2.5 4l2.5 2.5L7.5 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="cm-nav-dd-panel" role="menu">
              <a class="cm-nav-dd-item" href="land-management.html" role="menuitem">
                <span class="cm-nav-dd-k">Land</span>
                <span class="cm-nav-dd-h">Land Management</span>
                <span class="cm-nav-dd-b">Permits, plan reviews, inspections.</span>
              </a>
              <a class="cm-nav-dd-item" href="human-resources.html" role="menuitem">
                <span class="cm-nav-dd-k">HR</span>
                <span class="cm-nav-dd-h">Human Resources</span>
                <span class="cm-nav-dd-b">Onboarding, contracts, the people-side.</span>
              </a>
              <a class="cm-nav-dd-item" href="budget-management.html" role="menuitem">
                <span class="cm-nav-dd-k">Budget</span>
                <span class="cm-nav-dd-h">Budget Management</span>
                <span class="cm-nav-dd-b">Funds, vendors, encumbrances, payments.</span>
              </a>
              <a class="cm-nav-dd-item" href="licensing.html" role="menuitem">
                <span class="cm-nav-dd-k">Licensing</span>
                <span class="cm-nav-dd-h">Licensing</span>
                <span class="cm-nav-dd-b">Applications and renewals, signed online.</span>
              </a>
              <a class="cm-nav-dd-item" href="record-requests.html" role="menuitem">
                <span class="cm-nav-dd-k">FOIA</span>
                <span class="cm-nav-dd-h">Record Requests</span>
                <span class="cm-nav-dd-b">Public-records routed, redacted, fulfilled.</span>
              </a>
              <a class="cm-nav-dd-item" href="311.html" role="menuitem">
                <span class="cm-nav-dd-k">311</span>
                <span class="cm-nav-dd-h">311 / Citizen Services</span>
                <span class="cm-nav-dd-b">From "there&rsquo;s a pothole" to a closed work order.</span>
              </a>
              <a class="cm-nav-dd-item" href="reports.html" role="menuitem">
                <span class="cm-nav-dd-k">Reports</span>
                <span class="cm-nav-dd-h">Reports &amp; Dashboards</span>
                <span class="cm-nav-dd-b">Live numbers from the working database.</span>
              </a>
              <div class="cm-nav-dd-foot">
                <a class="cm-nav-dd-all" href="index.html#modules">See all solutions
                  <svg viewBox="0 0 12 12" fill="none"><path d="M2 6h7M6 3l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </a>
              </div>
            </div>
          </div>
          <a class="cm-nav-link" href="index.html#about">About</a>
          <a class="cm-nav-link" href="index.html#approach">Approach</a>
          <a class="cm-nav-link" href="#">Security</a>
        </nav>
        <div class="cm-nav-spacer"></div>
        <a class="cm-nav-signin" href="#">Sign in</a>
        <a class="cm-nav-cta" href="contacts.html">Request a pilot
          <svg viewBox="0 0 11 11" fill="none"><path d="M2 5.5h7M6 2.5l3 3-3 3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
        </a>
      </div>
    </header>`;
  }

  function renderXlinks(activeKey){
    const others = PAGES.filter(p=>p.key!==activeKey);
    return `
    <section class="cm-xlink">
      <div class="cm-wrap">
        <div class="cm-xlink-head">
          <div>
            <span class="cm-eyebrow cm-eyebrow--blue">Continue exploring</span>
            <h2 class="cm-xlink-h" style="margin-top:10px">One platform underneath. <em>Pick another module.</em></h2>
          </div>
          <a class="cm-btn cm-btn--ghost" href="index.html#modules" style="height:36px;font-size:13px">All modules
            <svg viewBox="0 0 12 12" fill="none"><path d="M2 6h7M6 3l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </a>
        </div>
        <div class="cm-xlink-grid">
          ${others.map(o=>`
            <a class="cm-xlink-card" href="${o.href}">
              <span class="cm-xlink-k">${o.short}</span>
              <h3 class="cm-xlink-h3">${o.label}</h3>
              <p class="cm-xlink-b">${o.blurb}</p>
              <span class="cm-xlink-go">See module &nbsp;→</span>
            </a>`).join('')}
        </div>
      </div>
    </section>`;
  }

  function renderCta(){
    return `
    <section class="cm-cta" id="cta">
      <div class="cm-cta-wash"></div>
      <div class="cm-wrap">
        <div class="cm-cta-row">
          <h2 class="cm-cta-h2">If you run any part of the apparatus, <em class="cm-script">we should talk.</em></h2>
          <div class="cm-cta-side">
            <p>Pilots start with one workflow and one team — usually three to six weeks to live records. We bring the platform; you bring the statute, the rulebook, and the people who do the work.</p>
            <div class="cm-cta-actions">
              <a class="cm-btn cm-btn--primary" href="contacts.html">Request a pilot
                <svg viewBox="0 0 12 12" fill="none"><path d="M2 6h7M6 3l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </a>
              <a class="cm-btn cm-btn--ghost-dark" href="index.html#product">See the product</a>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }

  function renderFooter(){
    return `
    <footer class="cm-footer">
      <div class="cm-wrap">
        <div class="cm-footer-row">
          <div class="cm-footer-brand">
            <span class="cm-logo"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="#fff" stroke="none"/><line x1="12" y1="6" x2="12" y2="2.5"/><line x1="15" y1="6.8" x2="16.75" y2="3.77"/><line x1="17.2" y1="9" x2="20.23" y2="7.25"/><line x1="18" y1="12" x2="21.5" y2="12"/><line x1="17.2" y1="15" x2="20.23" y2="16.75"/><line x1="15" y1="17.2" x2="16.75" y2="20.23"/><line x1="12" y1="18" x2="12" y2="21.5"/><line x1="9" y1="17.2" x2="7.25" y2="20.23"/><line x1="6.8" y1="15" x2="3.77" y2="16.75"/><line x1="6" y1="12" x2="2.5" y2="12"/><line x1="6.8" y1="9" x2="3.77" y2="7.25"/><line x1="9" y1="6.8" x2="7.25" y2="3.77"/></svg>Clarity Value</span>
            <p>The system underneath the system. Civic infrastructure for the work of government — engineered as one platform, by one team. Built in Miami.</p>
          </div>
          <div class="cm-footer-col"><h4>Platform</h4><ul><li><a href="index.html#product">Product</a></li><li><a href="index.html#modules">Modules</a></li><li><a href="index.html#approach">Approach</a></li><li><a href="#">Changelog</a></li></ul></div>
          <div class="cm-footer-col"><h4>Solutions</h4><ul>${PAGES.map(p=>`<li><a href="${p.href}">${p.label}</a></li>`).join('')}</ul></div>
          <div class="cm-footer-col"><h4>Company</h4><ul><li><a href="index.html#about">About</a></li><li><a href="#">Careers</a></li><li><a href="#">Press</a></li><li><a href="contacts.html">Contact</a></li></ul></div>
          <div class="cm-footer-col"><h4>Trust</h4><ul><li><a href="#">Security</a></li><li><a href="#">Compliance</a></li><li><a href="privacy-policy.html">Privacy</a></li><li><a href="terms-of-use.html">Terms of Use</a></li></ul></div>
        </div>
        <div class="cm-footer-fine">
          <span>&copy; 2026 Clarity Value, Inc. · Built in Miami</span>
          <span>SOC 2 Type II · CJIS · FedRAMP-aligned · US-only hosting</span>
        </div>
      </div>
    </footer>`;
  }

  // Render into slots present on the page
  document.addEventListener('DOMContentLoaded', ()=>{
    const active = document.documentElement.dataset.cmModule || '';
    const map = { nav:renderNav(active), xlinks:renderXlinks(active), cta:renderCta(), footer:renderFooter() };
    document.querySelectorAll('[data-cm-slot]').forEach(el=>{
      const k = el.getAttribute('data-cm-slot');
      if (map[k]) el.outerHTML = map[k];
    });
  });
})();
