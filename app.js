/* ============================================================
   تطبيق "محمد عباس" - وسيط تأجير الشقق
   منطق التطبيق الكامل (SPA) بلغة JavaScript نقية
============================================================ */

/* ===== أيقونات SVG ===== */
const I = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5 12 3l9 6.5"/><path d="M5 10v10h14V10"/><path d="M9 21v-6h6v6"/></svg>',
  map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 4-6 2v14l6-2 6 2 6-2V4l-6 2-6-2Z"/><path d="M9 4v14M15 6v14"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="3" width="8" height="4" rx="1"/><path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><path d="m9 14 2 2 4-4"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h18M6 12h12M10 19h4"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  bed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M2 16h20M5 10V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/></svg>',
  bath: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12V5a2 2 0 0 1 4 0v1"/><path d="M2 12h20v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-3Z"/><path d="M6 19v2M18 19v2"/></svg>',
  ruler: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16 16 3l5 5L8 21l-5-5Z"/><path d="m9 9 1 1M12 6l1 1M6 12l1 1"/></svg>',
  stairs: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4v-4h4v-4h4V8h4V4"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.5-1.5 3-3.4 3-5.5A4.5 4.5 0 0 0 12 5 4.5 4.5 0 0 0 2 8.5c0 2.1 1.5 4 3 5.5l7 7Z"/></svg>',
  heartOutline: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.5-1.5 3-3.4 3-5.5A4.5 4.5 0 0 0 12 5 4.5 4.5 0 0 0 2 8.5c0 2.1 1.5 4 3 5.5l7 7Z"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/></svg>',
  inbox: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5.5 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.5A2 2 0 0 0 16.8 4H7.2a2 2 0 0 0-1.7 1.5Z"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4Z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 0 1-4 0v-.1A1.6 1.6 0 0 0 7 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 2.6 14H2.5a2 2 0 0 1 0-4h.1A1.6 1.6 0 0 0 4.6 7a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 10 2.6V2.5a2 2 0 0 1 4 0v.1A1.6 1.6 0 0 0 17 4.6a1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8v.1a1.6 1.6 0 0 0 1.5 1H22a2 2 0 0 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
  logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/></svg>',
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"/><circle cx="12" cy="13" r="3.5"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3 6.5 7 .9-5 4.8 1.3 7L12 18l-6.6 3.2L6.7 14l-5-4.8 7-.9Z"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/></svg>',
  wifi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><path d="M2 9a15 15 0 0 1 20 0"/><path d="M12 20h.01"/></svg>',
  car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13 6.5 7h11L19 13M5 13h14v5H5v-5Z"/><circle cx="7.5" cy="18" r="1.5"/><circle cx="16.5" cy="18" r="1.5"/></svg>'
};

/* ===== الحالة العامة ===== */
const state = {
  role: null,            // 'customer' | 'owner'
  loggedIn: false,
  tab: 'home',
  favorites: new Set(),
  pendingRole: 'customer',
  searchQuery: '',
  cityFilter: 'كل المدن',
  detailIndex: 0,
  adIndex: 0
};

/* ===== أدوات مساعدة ===== */
const $ = (sel) => document.querySelector(sel);
const fmt = (n) => n.toLocaleString('ar-IQ');
const screenEl = $('#screen');
const topbarEl = $('#topbar');
const bottomnavEl = $('#bottomnav');

function toast(msg, icon = true) {
  const t = $('#toast');
  t.innerHTML = (icon ? I.check : '') + `<span>${msg}</span>`;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2600);
}

function openModal(html) {
  $('#modalBox').innerHTML = `<div class="modal-handle"></div>` + html;
  $('#modal').classList.remove('hidden');
}
function closeModal() { $('#modal').classList.add('hidden'); }
$('#modal').addEventListener('click', (e) => { if (e.target.id === 'modal') closeModal(); });

function statusLabel(s) {
  return { pending: 'معلق', confirmed: 'مؤكد', cancelled: 'ملغي', done: 'مكتمل' }[s] || s;
}

/* ============================================================
   شاشة البداية ثم تسجيل الدخول
============================================================ */
window.addEventListener('load', () => {
  setTimeout(() => {
    $('#splash').classList.add('fade');
    setTimeout(() => { $('#splash').classList.add('hidden'); renderAuth(); }, 600);
  }, 1800);
});

function renderAuth() {
  $('#app').classList.add('hidden');
  let html = document.getElementById('authWrap');
  if (!html) {
    html = document.createElement('div');
    html.id = 'authWrap';
    document.body.appendChild(html);
  }
  html.className = 'auth-wrap';
  html.classList.remove('hidden');
  html.innerHTML = `
    <div class="auth-card glass">
      <div class="auth-logo">${I.home}</div>
      <h2>محمد عباس</h2>
      <p class="a-sub">سجّل دخولك للبدء في تأجير أو البحث عن شقة</p>

      <label style="font-size:13px;color:var(--text-dim);font-weight:600;display:block;margin-bottom:10px;">اختر نوع حسابك</label>
      <div class="role-select">
        <div class="role-card ${state.pendingRole==='customer'?'active':''}" data-role="customer">
          ${I.search}<b>عميل</b><span>أبحث عن سكن</span>
        </div>
        <div class="role-card ${state.pendingRole==='owner'?'active':''}" data-role="owner">
          ${I.building}<b>مالك عقار</b><span>أريد التأجير</span>
        </div>
      </div>

      <div class="field">
        <label>رقم الهاتف</label>
        <input class="input" id="phoneInput" type="tel" inputmode="numeric" placeholder="07XX XXX XXXX" />
      </div>

      <button class="btn btn-primary btn-block" id="sendOtpBtn">إرسال رمز التحقق</button>
      <p class="text-center mt-16 muted" style="font-size:12.5px;">بالمتابعة فإنك توافق على الشروط وسياسة الخصوصية</p>
    </div>
  `;
  html.querySelectorAll('.role-card').forEach(c => {
    c.onclick = () => {
      state.pendingRole = c.dataset.role;
      renderAuth();
    };
  });
  $('#sendOtpBtn').onclick = () => {
    const phone = $('#phoneInput').value.trim();
    if (phone.length < 8) { toast('أدخل رقم هاتف صحيح', false); return; }
    renderOtp(phone);
  };
}

function renderOtp(phone) {
  const html = document.getElementById('authWrap');
  html.innerHTML = `
    <div class="auth-card glass">
      <div class="auth-logo">${I.shield}</div>
      <h2>رمز التحقق</h2>
      <p class="a-sub">أدخل الرمز المرسل إلى ${phone}</p>
      <div class="otp-inputs">
        <input maxlength="1" inputmode="numeric" /><input maxlength="1" inputmode="numeric" />
        <input maxlength="1" inputmode="numeric" /><input maxlength="1" inputmode="numeric" />
      </div>
      <button class="btn btn-primary btn-block" id="verifyBtn">تأكيد ودخول</button>
      <p class="text-center mt-16"><span class="link-btn" id="backToPhone">تغيير الرقم</span></p>
      <p class="text-center muted" style="font-size:12px;margin-top:8px;">للتجربة: اضغط تأكيد مباشرة</p>
    </div>
  `;
  const inputs = html.querySelectorAll('.otp-inputs input');
  inputs.forEach((inp, idx) => {
    inp.oninput = () => { if (inp.value && idx < inputs.length - 1) inputs[idx + 1].focus(); };
    inp.onkeydown = (e) => { if (e.key === 'Backspace' && !inp.value && idx > 0) inputs[idx - 1].focus(); };
  });
  inputs[0].focus();
  $('#backToPhone').onclick = renderAuth;
  $('#verifyBtn').onclick = () => {
    state.role = state.pendingRole;
    state.loggedIn = true;
    html.classList.add('hidden');
    $('#app').classList.remove('hidden');
    state.tab = 'home';
    renderApp();
    toast('تم تسجيل الدخول بنجاح');
  };
}

/* ============================================================
   هيكل التطبيق: الرأس + الشاشة + شريط التنقل
============================================================ */
function renderApp() {
  renderTopbar();
  renderBottomNav();
  renderScreen();
}

function unreadCount() { return DB.notifications.filter(n => n.unread).length; }

function renderTopbar() {
  const titles = {
    home: state.role === 'owner' ? 'لوحة التحكم' : 'استكشف الشقق',
    map: 'الخريطة',
    bookings: state.role === 'owner' ? 'إدارة الحجوزات' : 'طلباتي',
    properties: 'عقاراتي',
    profile: 'حسابي'
  };
  const roleLabel = state.role === 'owner' ? 'مالك عقار' : 'عميل';
  const uc = unreadCount();
  topbarEl.innerHTML = `
    <div style="flex:1;">
      <div class="tb-title">${titles[state.tab] || 'محمد عباس'}</div>
      <div class="tb-sub">أهلاً بك 👋</div>
    </div>
    <span class="role-pill">${roleLabel}</span>
    <button class="tb-btn" id="notifBtn">${I.bell}${uc ? `<span class="tb-badge">${uc}</span>` : ''}</button>
  `;
  $('#notifBtn').onclick = () => { state.tab = 'notifications'; renderApp(); };
}

function renderBottomNav() {
  let items;
  if (state.role === 'owner') {
    items = [
      { id: 'home', icon: I.home, label: 'الرئيسية' },
      { id: 'properties', icon: I.building, label: 'عقاراتي' },
      { id: 'add', fab: true },
      { id: 'bookings', icon: I.clipboard, label: 'الحجوزات' },
      { id: 'profile', icon: I.user, label: 'حسابي' }
    ];
  } else {
    items = [
      { id: 'home', icon: I.home, label: 'الرئيسية' },
      { id: 'map', icon: I.map, label: 'الخريطة' },
      { id: 'bookings', icon: I.clipboard, label: 'طلباتي' },
      { id: 'profile', icon: I.user, label: 'حسابي' }
    ];
  }
  bottomnavEl.innerHTML = items.map(it => {
    if (it.fab) return `<div class="nav-item fab"><button class="nav-fab-btn" data-nav="add">${I.plus}</button></div>`;
    const active = state.tab === it.id ? 'active' : '';
    return `<button class="nav-item ${active}" data-nav="${it.id}">${it.icon}<span>${it.label}</span></button>`;
  }).join('');
  bottomnavEl.querySelectorAll('[data-nav]').forEach(b => {
    b.onclick = () => {
      const id = b.dataset.nav;
      if (id === 'add') { openAddProperty(); return; }
      state.tab = id;
      renderApp();
    };
  });
}

/* ============================================================
   موجّه الشاشات
============================================================ */
function renderScreen() {
  // تحديث ظهور شريط التنقل
  bottomnavEl.classList.remove('hidden');
  switch (state.tab) {
    case 'home': return state.role === 'owner' ? ownerHome() : customerHome();
    case 'map': return customerMap();
    case 'bookings': return state.role === 'owner' ? ownerBookings() : customerBookings();
    case 'properties': return ownerProperties();
    case 'profile': return profileScreen();
    case 'notifications': return notificationsScreen();
    case 'detail': return detailScreen();
    default: return customerHome();
  }
}

/* ===== بطاقة عقار قابلة لإعادة الاستخدام ===== */
function propCard(p) {
  const fav = state.favorites.has(p.id);
  return `
    <article class="card prop-card" data-open="${p.id}">
      <div class="prop-media">
        <img src="${p.images[0]}" alt="${p.title}" />
        <button class="prop-fav ${fav?'active':''}" data-fav="${p.id}">${fav?I.heart:I.heartOutline}</button>
        ${p.tag ? `<span class="prop-tag">${p.tag}</span>` : ''}
        <span class="prop-price">${fmt(p.price)} د.ع<small style="font-weight:500;color:#cbd5f5"> /شهر</small></span>
      </div>
      <div class="prop-body">
        <div class="prop-title">${p.title}</div>
        <div class="prop-loc">${I.pin} ${p.district}، ${p.city}</div>
        <div class="prop-feats">
          <span class="feat">${I.bed} ${p.rooms} غرف</span>
          <span class="feat">${I.bath} ${p.baths} حمام</span>
          <span class="feat">${I.ruler} ${p.area} م²</span>
        </div>
      </div>
    </article>
  `;
}

function bindPropCards() {
  screenEl.querySelectorAll('[data-open]').forEach(c => {
    c.onclick = (e) => {
      if (e.target.closest('[data-fav]')) return;
      openDetail(parseInt(c.dataset.open));
    };
  });
  screenEl.querySelectorAll('[data-fav]').forEach(b => {
    b.onclick = (e) => {
      e.stopPropagation();
      const id = parseInt(b.dataset.fav);
      if (state.favorites.has(id)) { state.favorites.delete(id); toast('أُزيلت من المفضلة', false); }
      else { state.favorites.add(id); toast('أُضيفت إلى المفضلة'); }
      renderScreen();
    };
  });
}

/* ============================================================
   شاشة العميل: الرئيسية
============================================================ */
function customerHome() {
  let list = DB.properties.slice();
  if (state.cityFilter !== 'كل المدن') list = list.filter(p => p.city === state.cityFilter);
  if (state.searchQuery) {
    const q = state.searchQuery;
    list = list.filter(p => (p.title + p.city + p.district).includes(q));
  }

  screenEl.innerHTML = `
    <div class="searchbar">
      ${I.search}
      <input id="searchInput" placeholder="ابحث عن شقة، مدينة، حي..." value="${state.searchQuery}" />
      <button class="search-filter-btn" id="filterBtn">${I.filter}</button>
    </div>

    <div class="ad-slider" id="adSlider">
      <div class="ad-track" id="adTrack">
        ${DB.ads.map(a => `
          <div class="ad-slide">
            <img src="${a.img}" alt="${a.title}" />
            <div class="ad-overlay"><h3>${a.title}</h3><p>${a.sub}</p></div>
          </div>`).join('')}
      </div>
      <div class="ad-dots">${DB.ads.map((_,i)=>`<span class="${i===0?'active':''}"></span>`).join('')}</div>
    </div>

    <div class="chips">
      ${DB.cities.map(c => `<button class="chip ${state.cityFilter===c?'active':''}" data-city="${c}">${c}</button>`).join('')}
    </div>

    <div class="section-title">
      <span>${list.length} شقة متاحة</span>
    </div>

    <div class="props-grid">
      ${list.length ? list.map(propCard).join('') : emptyState('لا توجد نتائج', 'جرّب تغيير كلمات البحث أو الفلاتر')}
    </div>
  `;

  // ربط الأحداث
  $('#searchInput').oninput = (e) => { state.searchQuery = e.target.value.trim(); customerHome(); };
  $('#filterBtn').onclick = openFilterModal;
  screenEl.querySelectorAll('[data-city]').forEach(c => {
    c.onclick = () => { state.cityFilter = c.dataset.city; customerHome(); };
  });
  bindPropCards();
  startAdSlider();
}

function startAdSlider() {
  clearInterval(window._adTimer);
  window._adTimer = setInterval(() => {
    const track = document.getElementById('adTrack');
    if (!track) { clearInterval(window._adTimer); return; }
    state.adIndex = (state.adIndex + 1) % DB.ads.length;
    track.style.transform = `translateX(${state.adIndex * 100}%)`;
    const dots = document.querySelectorAll('.ad-dots span');
    dots.forEach((d,i)=>d.classList.toggle('active', i===state.adIndex));
  }, 3500);
}

function openFilterModal() {
  openModal(`
    <h3>الفلترة المتقدمة</h3>
    <p class="m-sub">حدد معايير البحث المناسبة لك</p>
    <div class="field">
      <label>المدينة</label>
      <select class="select" id="fCity">${DB.cities.map(c=>`<option ${state.cityFilter===c?'selected':''}>${c}</option>`).join('')}</select>
    </div>
    <div class="row-2">
      <div class="field"><label>أقل سعر</label><input class="input" id="fMin" type="number" inputmode="numeric" placeholder="0" /></div>
      <div class="field"><label>أعلى سعر</label><input class="input" id="fMax" type="number" inputmode="numeric" placeholder="1000000" /></div>
    </div>
    <div class="field">
      <label>عدد الغرف</label>
      <select class="select" id="fRooms"><option value="0">الكل</option><option value="1">1+</option><option value="2">2+</option><option value="3">3+</option><option value="4">4+</option></select>
    </div>
    <div class="field">
      <label>الترتيب حسب</label>
      <select class="select" id="fSort"><option value="new">الأحدث</option><option value="low">الأقل سعراً</option><option value="high">الأعلى سعراً</option></select>
    </div>
    <button class="btn btn-primary btn-block" id="applyFilter">تطبيق الفلترة</button>
    <button class="btn btn-ghost btn-block" id="resetFilter" style="margin-top:10px;">إعادة تعيين</button>
  `);
  $('#applyFilter').onclick = () => {
    state.cityFilter = $('#fCity').value;
    state._min = parseInt($('#fMin').value) || 0;
    state._max = parseInt($('#fMax').value) || Infinity;
    state._rooms = parseInt($('#fRooms').value) || 0;
    state._sort = $('#fSort').value;
    closeModal();
    applyAdvancedFilter();
    toast('تم تطبيق الفلترة');
  };
  $('#resetFilter').onclick = () => {
    state.cityFilter = 'كل المدن'; state._min = 0; state._max = Infinity; state._rooms = 0; state._sort = 'new';
    closeModal(); customerHome(); toast('تمت إعادة التعيين', false);
  };
}

function applyAdvancedFilter() {
  let list = DB.properties.filter(p =>
    (state.cityFilter === 'كل المدن' || p.city === state.cityFilter) &&
    p.price >= (state._min||0) && p.price <= (state._max||Infinity) &&
    p.rooms >= (state._rooms||0)
  );
  if (state._sort === 'low') list.sort((a,b)=>a.price-b.price);
  else if (state._sort === 'high') list.sort((a,b)=>b.price-a.price);
  else list.sort((a,b)=>b.id-a.id);

  screenEl.innerHTML = `
    <div class="section-title"><span>${list.length} نتيجة</span><a id="clearF">مسح الفلترة</a></div>
    <div class="props-grid">${list.length ? list.map(propCard).join('') : emptyState('لا توجد نتائج','جرّب معايير مختلفة')}</div>
  `;
  $('#clearF').onclick = () => { customerHome(); };
  bindPropCards();
}

/* ============================================================
   شاشة الخريطة (العميل)
============================================================ */
function customerMap() {
  const p = DB.properties[0];
  screenEl.innerHTML = `
    <div class="map-screen">
      <iframe loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=42.5,30.0,48.0,37.0&layer=mapnik" title="خريطة العقارات"></iframe>
      <div class="card map-overlay-card">
        <img src="${p.images[0]}" alt="${p.title}" />
        <div style="flex:1;">
          <b style="font-size:14px;">${p.title}</b>
          <div class="prop-loc" style="margin:3px 0;">${I.pin} ${p.district}، ${p.city}</div>
          <b style="color:var(--brand-2);font-size:14px;">${fmt(p.price)} د.ع</b>
        </div>
        <button class="btn btn-primary btn-sm" data-open="${p.id}">عرض</button>
      </div>
    </div>
    <p class="muted text-center" style="margin-top:14px;font-size:13px;">اضغط على العقارات لاستعراض التفاصيل على الخريطة</p>
  `;
  screenEl.querySelector('[data-open]').onclick = () => openDetail(p.id);
}

/* ============================================================
   تفاصيل العقار
============================================================ */
function openDetail(id) {
  state.detailId = id;
  state.detailIndex = 0;
  state.tab = 'detail';
  renderApp();
}

function detailScreen() {
  const p = DB.properties.find(x => x.id === state.detailId);
  bottomnavEl.classList.add('hidden');
  const fav = state.favorites.has(p.id);
  const amenityIcon = (a) => {
    if (a.includes('إنترنت')) return I.wifi;
    if (a.includes('موقف') || a.includes('سيارة')) return I.car;
    return I.check;
  };
  screenEl.innerHTML = `
    <div class="detail-gallery">
      <div class="dg-track" id="dgTrack">
        ${p.images.map(img => `<img src="${img}" alt="${p.title}" />`).join('')}
      </div>
      <button class="dg-back" id="dgBack">${I.back}</button>
      <button class="dg-video" id="dgVideo">${I.play} فيديو</button>
      <div class="dg-dots">${p.images.map((_,i)=>`<span class="${i===0?'active':''}"></span>`).join('')}</div>
    </div>

    <div class="detail-head">
      <div>
        <h2>${p.title}</h2>
      </div>
      <div class="detail-price">${fmt(p.price)} <small>د.ع/شهر</small></div>
    </div>
    <div class="detail-loc">${I.pin} ${p.district}، ${p.city} — الطابق ${p.floor}</div>

    <div class="specs">
      <div class="spec">${I.bed}<b>${p.rooms}</b><span>غرف نوم</span></div>
      <div class="spec">${I.bath}<b>${p.baths}</b><span>حمامات</span></div>
      <div class="spec">${I.ruler}<b>${p.area}</b><span>متر مربع</span></div>
      <div class="spec">${I.stairs}<b>${p.floor}</b><span>الطابق</span></div>
    </div>

    <div class="section-title" style="margin-top:6px;">الوصف</div>
    <p class="muted" style="line-height:1.8;font-size:14px;">${p.desc}</p>

    <div class="section-title">المرافق والمميزات</div>
    <div class="amenities">
      ${p.amenities.map(a => `<span class="amenity">${amenityIcon(a)} ${a}</span>`).join('')}
    </div>

    <div class="section-title">الموقع على الخريطة</div>
    <div class="map-box">
      <iframe loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=${p.lng-0.02},${p.lat-0.02},${p.lng+0.02},${p.lat+0.02}&layer=mapnik&marker=${p.lat},${p.lng}" title="موقع العقار"></iframe>
    </div>

    <div class="card owner-box">
      <div class="owner-avatar">${p.owner.charAt(0)}</div>
      <div class="o-info">
        <b>${p.owner}</b>
        <span>مالك العقار</span>
      </div>
      <span class="status confirmed">${I.shield} موثّق</span>
    </div>

    <div style="height:80px;"></div>

    <div class="book-bar glass">
      <div class="bb-price">${fmt(p.price)} د.ع<small>شهرياً</small></div>
      <button class="btn btn-primary" style="flex:1;" id="bookNow">احجز هذه الشقة</button>
    </div>
  `;

  // معرض الصور بالسحب
  let startX = 0;
  const track = $('#dgTrack');
  const updateGallery = () => {
    track.style.transform = `translateX(${state.detailIndex * 100}%)`;
    screenEl.querySelectorAll('.dg-dots span').forEach((d,i)=>d.classList.toggle('active', i===state.detailIndex));
  };
  track.addEventListener('touchstart', e => startX = e.touches[0].clientX, {passive:true});
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (dx < -40 && state.detailIndex < p.images.length-1) state.detailIndex++;
    if (dx > 40 && state.detailIndex > 0) state.detailIndex--;
    updateGallery();
  });
  // نقر لتبديل الصورة (للحاسوب)
  track.onclick = () => { state.detailIndex = (state.detailIndex+1)%p.images.length; updateGallery(); };

  $('#dgBack').onclick = () => { state.tab = 'home'; renderApp(); };
  $('#dgVideo').onclick = () => openModal(`
    <h3>فيديو العقار</h3>
    <p class="m-sub">جولة قصيرة داخل الشقة (حتى 60 ثانية)</p>
    <div style="aspect-ratio:16/9;border-radius:16px;background:rgba(0,0,0,0.4);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;border:1px solid var(--glass-border);">
      <div style="width:64px;height:64px;border-radius:50%;background:var(--brand);display:flex;align-items:center;justify-content:center;color:#04121f;">${I.play}</div>
      <span class="muted" style="font-size:13px;">معاينة الفيديو</span>
    </div>
    <button class="btn btn-glass btn-block" style="margin-top:16px;" onclick="document.getElementById('modal').classList.add('hidden')">إغلاق</button>
  `);
  $('#bookNow').onclick = () => bookProperty(p);
}

function bookProperty(p) {
  openModal(`
    <h3>تأكيد طلب الحجز</h3>
    <p class="m-sub">سيتم إرسال طلبك إلى مالك العقار للموافقة. الحجز هنا إبداء رغبة وليس التزاماً مالياً.</p>
    <div class="card" style="padding:12px;display:flex;gap:12px;align-items:center;margin-bottom:18px;">
      <img src="${p.images[0]}" style="width:64px;height:64px;border-radius:12px;object-fit:cover;" alt="${p.title}"/>
      <div><b style="font-size:15px;">${p.title}</b><div class="prop-loc" style="margin-top:4px;">${I.pin} ${p.district}، ${p.city}</div></div>
    </div>
    <div class="field"><label>ملاحظة للمالك (اختياري)</label><textarea class="textarea" placeholder="مثال: أرغب بمعاينة الشقة يوم الخميس..."></textarea></div>
    <button class="btn btn-primary btn-block" id="confirmBook">إرسال طلب الحجز</button>
  `);
  $('#confirmBook').onclick = () => {
    DB.bookings.unshift({ id: Date.now(), propId: p.id, status: 'pending', date: '2026-06-23', customer: 'أنت', customerPhone: '07700000000' });
    DB.notifications.unshift({ id: Date.now(), type: 'warn', title: 'طلب حجز قيد الانتظار', body: `تم إرسال طلب حجزك لشقة «${p.title}» وهو بانتظار موافقة المالك.`, time: 'الآن', unread: true });
    closeModal();
    toast('تم إرسال طلب الحجز بنجاح');
    state.tab = 'bookings';
    renderApp();
  };
}

/* ============================================================
   طلباتي (العميل)
============================================================ */
function customerBookings() {
  const list = DB.bookings;
  screenEl.innerHTML = `
    <div class="section-title"><span>طلبات الحجز (${list.length})</span></div>
    ${list.length ? list.map(b => {
      const p = DB.properties.find(x=>x.id===b.propId) || DB.properties[0];
      return `
        <div class="card booking-card" style="margin-bottom:12px;" data-open="${p.id}">
          <img src="${p.images[0]}" alt="${p.title}"/>
          <div class="bk-info">
            <b>${p.title}</b>
            <p>${I.pin} ${p.district}، ${p.city} · ${b.date}</p>
            <span class="status ${b.status}">${statusLabel(b.status)}</span>
          </div>
        </div>`;
    }).join('') : emptyState('لا توجد طلبات بعد','ابدأ بتصفح الشقق وأرسل طلب حجزك الأول')}
  `;
  bindPropCards();
}

/* ============================================================
   شاشة المالك: الرئيسية (الإحصائيات)
============================================================ */
function ownerHome() {
  const myProps = DB.properties.filter(p => p.owner === 'أحمد العبيدي' || p.owner === 'سيوان رشيد');
  const pending = DB.ownerBookings.filter(b => b.status === 'pending').length;
  const confirmed = DB.ownerBookings.filter(b => b.status === 'confirmed').length;
  screenEl.innerHTML = `
    <div class="stats-grid">
      <div class="card stat-card c1"><div class="st-icon">${I.building}</div><b>${myProps.length}</b><span>عقاراتي النشطة</span></div>
      <div class="card stat-card c2"><div class="st-icon">${I.clipboard}</div><b>${pending}</b><span>طلبات معلقة</span></div>
      <div class="card stat-card c3"><div class="st-icon">${I.check}</div><b>${confirmed}</b><span>حجوزات مؤكدة</span></div>
      <div class="card stat-card c4"><div class="st-icon">${I.star}</div><b>4.8</b><span>تقييم المالك</span></div>
    </div>

    <button class="btn btn-primary btn-block" style="margin:18px 0;" id="quickAdd">${I.plus} إضافة شقة جديدة</button>

    <div class="section-title"><span>أحدث طلبات الحجز</span><a data-go="bookings">عرض الكل</a></div>
    ${DB.ownerBookings.slice(0,3).map(b => {
      const p = DB.properties.find(x=>x.id===b.propId);
      return `
        <div class="card booking-card" style="margin-bottom:12px;">
          <img src="${p.images[0]}" alt="${p.title}"/>
          <div class="bk-info">
            <b>${b.customer}</b>
            <p>${p.title}</p>
            <span class="status ${b.status}">${statusLabel(b.status)}</span>
          </div>
        </div>`;
    }).join('')}
  `;
  $('#quickAdd').onclick = openAddProperty;
  screenEl.querySelector('[data-go]').onclick = () => { state.tab='bookings'; renderApp(); };
}

/* ============================================================
   عقاراتي (المالك)
============================================================ */
function ownerProperties() {
  const list = DB.properties;
  screenEl.innerHTML = `
    <button class="btn btn-primary btn-block" style="margin-bottom:16px;" id="addProp">${I.plus} إضافة عقار جديد</button>
    <div class="section-title"><span>عقاراتي (${list.length})</span></div>
    <div class="props-grid">
      ${list.map(p => `
        <article class="card prop-card">
          <div class="prop-media" data-open="${p.id}">
            <img src="${p.images[0]}" alt="${p.title}"/>
            <span class="prop-price">${fmt(p.price)} د.ع</span>
            ${p.tag?`<span class="prop-tag">${p.tag}</span>`:''}
          </div>
          <div class="prop-body">
            <div class="prop-title">${p.title}</div>
            <div class="prop-loc">${I.pin} ${p.district}، ${p.city}</div>
            <div style="display:flex;gap:10px;margin-top:12px;">
              <button class="btn btn-glass btn-sm" style="flex:1;" data-edit="${p.id}">${I.edit} تعديل</button>
              <button class="btn btn-danger btn-sm" style="flex:1;" data-del="${p.id}">${I.trash} حذف</button>
            </div>
          </div>
        </article>`).join('')}
    </div>
  `;
  $('#addProp').onclick = openAddProperty;
  screenEl.querySelectorAll('[data-open]').forEach(c => c.onclick = () => openDetail(parseInt(c.dataset.open)));
  screenEl.querySelectorAll('[data-edit]').forEach(b => b.onclick = () => { const p = DB.properties.find(x=>x.id===parseInt(b.dataset.edit)); openAddProperty(p); });
  screenEl.querySelectorAll('[data-del]').forEach(b => b.onclick = () => {
    const id = parseInt(b.dataset.del);
    openModal(`
      <h3>حذف العقار</h3>
      <p class="m-sub">هل أنت متأكد من حذف هذا العقار؟ لا يمكن التراجع عن هذا الإجراء.</p>
      <button class="btn btn-danger btn-block" id="confirmDel">نعم، احذف</button>
      <button class="btn btn-ghost btn-block" style="margin-top:10px;" onclick="document.getElementById('modal').classList.add('hidden')">إلغاء</button>
    `);
    $('#confirmDel').onclick = () => {
      const idx = DB.properties.findIndex(x=>x.id===id);
      if (idx>-1) DB.properties.splice(idx,1);
      closeModal(); ownerProperties(); toast('تم حذف العقار', false);
    };
  });
}

/* ===== نموذج إضافة/تعديل عقار ===== */
function openAddProperty(existing) {
  const p = existing && existing.id ? existing : {};
  const isEdit = !!p.id;
  openModal(`
    <h3>${isEdit ? 'تعديل العقار' : 'إضافة شقة جديدة'}</h3>
    <p class="m-sub">${isEdit ? 'حدّث بيانات عقارك' : 'املأ التفاصيل لنشر شقتك للإيجار'}</p>

    <label style="font-size:13px;color:var(--text-dim);font-weight:600;display:block;margin-bottom:8px;">الصور (5-10) والفيديو</label>
    <div class="uploader">
      <div class="upload-slot">${p.images?`<img src="${p.images[0]}"/>`:''}${I.camera}<span>صورة</span></div>
      <div class="upload-slot">${p.images&&p.images[1]?`<img src="${p.images[1]}"/>`:''}${I.camera}<span>صورة</span></div>
      <div class="upload-slot">${I.play}<span>فيديو</span></div>
    </div>
    <p class="muted" style="font-size:11.5px;margin:6px 0 16px;">الحد الأقصى للفيديو 60 ثانية</p>

    <div class="field"><label>عنوان الإعلان</label><input class="input" id="aTitle" value="${p.title||''}" placeholder="مثال: شقة فاخرة في الكرادة" /></div>
    <div class="row-2">
      <div class="field"><label>المدينة</label><select class="select" id="aCity">${DB.cities.slice(1).map(c=>`<option ${p.city===c?'selected':''}>${c}</option>`).join('')}</select></div>
      <div class="field"><label>الحي</label><input class="input" id="aDist" value="${p.district||''}" placeholder="الحي" /></div>
    </div>
    <div class="row-2">
      <div class="field"><label>السعر الشهري (د.ع)</label><input class="input" id="aPrice" type="number" inputmode="numeric" value="${p.price||''}" placeholder="450000" /></div>
      <div class="field"><label>المساحة (م²)</label><input class="input" id="aArea" type="number" inputmode="numeric" value="${p.area||''}" placeholder="120" /></div>
    </div>
    <div class="row-2">
      <div class="field"><label>عدد الغرف</label><input class="input" id="aRooms" type="number" inputmode="numeric" value="${p.rooms||''}" placeholder="3" /></div>
      <div class="field"><label>الحمامات</label><input class="input" id="aBaths" type="number" inputmode="numeric" value="${p.baths||''}" placeholder="2" /></div>
    </div>
    <div class="field"><label>رقم الهاتف للتواصل</label><input class="input" id="aPhone" type="tel" inputmode="numeric" value="${p.phone||''}" placeholder="07XX XXX XXXX" /></div>
    <div class="field"><label>وصف مختصر</label><textarea class="textarea" id="aDesc" placeholder="اكتب وصفاً جذاباً للشقة...">${p.desc||''}</textarea></div>
    <div class="field">
      <label>تحديد الموقع على الخريطة</label>
      <div class="map-box" style="height:130px;margin:0;">
        <iframe loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=44.2,33.2,44.5,33.4&layer=mapnik" title="تحديد الموقع"></iframe>
      </div>
    </div>
    <button class="btn btn-primary btn-block" id="publishBtn">${isEdit ? 'حفظ التعديلات' : 'نشر العقار'}</button>
  `);
  $('#publishBtn').onclick = () => {
    const title = $('#aTitle').value.trim();
    if (!title) { toast('أدخل عنوان الإعلان', false); return; }
    if (isEdit) {
      p.title = title; p.city = $('#aCity').value; p.district = $('#aDist').value;
      p.price = parseInt($('#aPrice').value)||p.price; p.area = parseInt($('#aArea').value)||p.area;
      p.rooms = parseInt($('#aRooms').value)||p.rooms; p.baths = parseInt($('#aBaths').value)||p.baths;
      p.desc = $('#aDesc').value || p.desc;
      toast('تم حفظ التعديلات');
    } else {
      DB.properties.unshift({
        id: Date.now(), title, city: $('#aCity').value, district: $('#aDist').value || 'غير محدد',
        price: parseInt($('#aPrice').value)||300000, area: parseInt($('#aArea').value)||100,
        rooms: parseInt($('#aRooms').value)||2, baths: parseInt($('#aBaths').value)||1, floor: 1,
        furnished: false, tag: 'جديد', desc: $('#aDesc').value || 'شقة جديدة معروضة للإيجار.',
        phone: $('#aPhone').value || '07700000000', owner: 'أحمد العبيدي',
        amenities: ['مكيف','إنترنت'], images: ['images/prop1.png','images/prop3.png','images/prop4.png'],
        lat: 33.31, lng: 44.36
      });
      toast('تم نشر العقار بنجاح');
    }
    closeModal();
    state.tab = 'properties';
    renderApp();
  };
}

/* ============================================================
   إدارة الحجوزات (المالك)
============================================================ */
function ownerBookings() {
  state._bkTab = state._bkTab || 'new';
  const newOnes = DB.ownerBookings.filter(b => b.status === 'pending');
  const past = DB.ownerBookings.filter(b => b.status !== 'pending');
  const list = state._bkTab === 'new' ? newOnes : past;
  screenEl.innerHTML = `
    <div class="tabs">
      <div class="tab ${state._bkTab==='new'?'active':''}" data-bk="new">جديدة (${newOnes.length})</div>
      <div class="tab ${state._bkTab==='past'?'active':''}" data-bk="past">سابقة (${past.length})</div>
    </div>
    ${list.length ? list.map(b => {
      const p = DB.properties.find(x=>x.id===b.propId) || DB.properties[0];
      return `
        <div class="card" style="margin-bottom:12px;padding:14px;">
          <div style="display:flex;gap:12px;align-items:center;margin-bottom:${b.status==='pending'?'14px':'0'};">
            <img src="${p.images[0]}" style="width:64px;height:64px;border-radius:12px;object-fit:cover;" alt="${p.title}"/>
            <div style="flex:1;">
              <b style="font-size:15px;">${b.customer}</b>
              <div class="prop-loc" style="margin:4px 0;">${p.title}</div>
              <span class="status ${b.status}">${statusLabel(b.status)}</span>
            </div>
            <a href="tel:${b.customerPhone}" class="tb-btn" style="text-decoration:none;">${I.phone}</a>
          </div>
          ${b.status==='pending' ? `
            <div style="display:flex;gap:10px;">
              <button class="btn btn-ok btn-sm" style="flex:1;" data-accept="${b.id}">${I.check} قبول</button>
              <button class="btn btn-danger btn-sm" style="flex:1;" data-reject="${b.id}">${I.x} رفض</button>
            </div>` : ''}
        </div>`;
    }).join('') : emptyState('لا توجد حجوزات', state._bkTab==='new'?'لم تصلك طلبات جديدة بعد':'لا توجد حجوزات سابقة')}
  `;
  screenEl.querySelectorAll('[data-bk]').forEach(t => t.onclick = () => { state._bkTab = t.dataset.bk; ownerBookings(); });
  screenEl.querySelectorAll('[data-accept]').forEach(b => b.onclick = () => {
    const bk = DB.ownerBookings.find(x=>x.id===parseInt(b.dataset.accept));
    bk.status = 'confirmed';
    DB.notifications.unshift({ id: Date.now(), type:'ok', title:'تم قبول طلب الحجز', body:`وافقت على طلب حجز ${bk.customer}. تواصل معه على ${bk.customerPhone}.`, time:'الآن', unread:true });
    ownerBookings(); toast('تم قبول الطلب — تواصل مع العميل');
  });
  screenEl.querySelectorAll('[data-reject]').forEach(b => b.onclick = () => {
    const bk = DB.ownerBookings.find(x=>x.id===parseInt(b.dataset.reject));
    bk.status = 'cancelled';
    ownerBookings(); toast('تم رفض الطلب', false);
  });
}

/* ============================================================
   الإشعارات
============================================================ */
function notificationsScreen() {
  bottomnavEl.classList.add('hidden');
  const list = DB.notifications;
  screenEl.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
      <button class="tb-btn" id="notifBack">${I.back}</button>
      <h2 style="font-size:19px;font-weight:800;flex:1;">الإشعارات</h2>
      <button class="link-btn" id="readAll">تعليم الكل كمقروء</button>
    </div>
    ${list.length ? list.map(n => `
      <div class="card notif-item ${n.unread?'unread':''}" style="margin-bottom:10px;">
        <div class="notif-icon ${n.type}">${n.type==='ok'?I.check:n.type==='bad'?I.x:n.type==='warn'?I.clipboard:I.info}</div>
        <div class="nt-body">
          <b>${n.title}</b>
          <p>${n.body}</p>
          <time>${n.time}</time>
        </div>
      </div>`).join('') : emptyState('لا إشعارات','ستظهر هنا تحديثات حجوزاتك')}
  `;
  $('#notifBack').onclick = () => { state.tab = 'home'; renderApp(); };
  $('#readAll').onclick = () => { DB.notifications.forEach(n=>n.unread=false); notificationsScreen(); renderTopbar(); toast('تم تعليم الكل كمقروء'); };
}

/* ============================================================
   الملف الشخصي والإعدادات
============================================================ */
function profileScreen() {
  const name = state.role === 'owner' ? 'أحمد العبيدي' : 'علي محمود';
  const sub = state.role === 'owner' ? 'مالك عقار · موثّق' : 'عميل';
  state._notifPref = state._notifPref !== false;
  const menu = state.role === 'owner'
    ? [
        { icon: I.building, t: 'عقاراتي', go: 'properties' },
        { icon: I.clipboard, t: 'إدارة الحجوزات', go: 'bookings' },
        { icon: I.bell, t: 'الإشعارات', go: 'notifications' }
      ]
    : [
        { icon: I.heart, t: 'المفضلة', fav: true },
        { icon: I.clipboard, t: 'طلباتي', go: 'bookings' },
        { icon: I.bell, t: 'الإشعارات', go: 'notifications' }
      ];
  screenEl.innerHTML = `
    <div class="card profile-head">
      <div class="profile-avatar">${name.charAt(0)}</div>
      <h2>${name}</h2>
      <p>${sub}</p>
      <span class="role-pill">${I.phone} 07700000000</span>
    </div>

    <div class="card" style="padding:8px;">
      <div class="menu-list">
        ${menu.map(m=>`<div class="menu-item" ${m.go?`data-go="${m.go}"`:''} ${m.fav?'data-fav-list="1"':''}>
          <div class="mi-icon">${m.icon}</div><div class="mi-text">${m.t}</div><div class="mi-arrow">${I.back}</div>
        </div>`).join('')}
      </div>
    </div>

    <div class="section-title">الإعدادات</div>
    <div class="card" style="padding:8px;">
      <div class="menu-list">
        <div class="menu-item" id="toggleNotif">
          <div class="mi-icon">${I.bell}</div><div class="mi-text">إشعارات التطبيق</div>
          <div class="switch ${state._notifPref?'on':''}" id="notifSwitch"></div>
        </div>
        <div class="menu-item">
          <div class="mi-icon">${I.globe}</div><div class="mi-text">اللغة</div>
          <div class="mi-arrow muted" style="font-size:13px;">العربية</div>
        </div>
        <div class="menu-item" data-about="1">
          <div class="mi-icon">${I.info}</div><div class="mi-text">عن التطبيق</div><div class="mi-arrow">${I.back}</div>
        </div>
        <div class="menu-item" data-switch-role="1">
          <div class="mi-icon">${I.settings}</div><div class="mi-text">تبديل الدور (${state.role==='owner'?'إلى عميل':'إلى مالك'})</div><div class="mi-arrow">${I.back}</div>
        </div>
      </div>
    </div>

    <button class="btn btn-danger btn-block" style="margin-top:18px;" id="logoutBtn">${I.logout} تسجيل الخروج</button>
    <p class="muted text-center" style="margin-top:16px;font-size:12px;">تطبيق محمد عباس · الإصدار 1.0.0</p>
  `;

  screenEl.querySelectorAll('[data-go]').forEach(m => m.onclick = () => { state.tab = m.dataset.go; renderApp(); });
  const favItem = screenEl.querySelector('[data-fav-list]');
  if (favItem) favItem.onclick = showFavorites;
  $('#toggleNotif').onclick = () => { state._notifPref = !state._notifPref; $('#notifSwitch').classList.toggle('on'); toast(state._notifPref?'تم تفعيل الإشعارات':'تم إيقاف الإشعارات', state._notifPref); };
  screenEl.querySelector('[data-about]').onclick = () => openModal(`
    <h3>عن التطبيق</h3>
    <p class="m-sub">محمد عباس — وسيط تأجير الشقق</p>
    <p class="muted" style="line-height:1.9;font-size:14px;">منصة وساطة محايدة تربط بين مُلاك العقارات والباحثين عن سكن بشفافية وأمان. يقتصر دور التطبيق على العرض والتواصل وإدارة الحجوزات دون التدخل في المعاملات المالية.</p>
    <button class="btn btn-glass btn-block" style="margin-top:18px;" onclick="document.getElementById('modal').classList.add('hidden')">حسناً</button>
  `);
  screenEl.querySelector('[data-switch-role]').onclick = () => {
    state.role = state.role === 'owner' ? 'customer' : 'owner';
    state.tab = 'home'; renderApp();
    toast(`تم التبديل إلى ${state.role==='owner'?'مالك عقار':'عميل'}`);
  };
  $('#logoutBtn').onclick = () => {
    state.loggedIn = false; state.role = null;
    $('#app').classList.add('hidden');
    renderAuth();
    toast('تم تسجيل الخروج', false);
  };
}

function showFavorites() {
  const list = DB.properties.filter(p => state.favorites.has(p.id));
  bottomnavEl.classList.add('hidden');
  screenEl.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
      <button class="tb-btn" id="favBack">${I.back}</button>
      <h2 style="font-size:19px;font-weight:800;">المفضلة (${list.length})</h2>
    </div>
    <div class="props-grid">${list.length ? list.map(propCard).join('') : emptyState('لا توجد مفضلة','اضغط على القلب في أي شقة لإضافتها هنا')}</div>
  `;
  $('#favBack').onclick = () => { state.tab='profile'; renderApp(); };
  bindPropCards();
}

/* ===== حالة فارغة ===== */
function emptyState(title, sub) {
  return `<div class="empty"><div class="e-icon">${I.inbox}</div><h3>${title}</h3><p>${sub}</p></div>`;
}
