/**
 * MR. WALA - Clean Light Theme Store Logic
 * Location: Vikas Nagar, Uttam Nagar, New Delhi
 * Official Phone: +91 95403 88464
 */

const MR_WALA_PHONE = "919540388464";

// Real reliable curated inventory data
const productsData = [
  {
    id: "mw-101",
    title: "Apple iPhone 15 Pro Max",
    category: "iphone",
    brand: "Apple",
    condition: "Grade A+ (Flawless)",
    color: "Natural Titanium",
    storage: "256 GB",
    batteryHealth: "99%",
    price: 86999,
    mrp: 159900,
    warranty: "6 Months Store Warranty",
    inclusions: ["Original Box", "Type-C Cable", "GST Bill"],
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=700&q=80",
    badge: "Most Popular",
    featured: true
  },
  {
    id: "mw-102",
    title: "Apple iPhone 15",
    category: "iphone",
    brand: "Apple",
    condition: "Open Box (Like New)",
    color: "Sky Blue",
    storage: "128 GB",
    batteryHealth: "100%",
    price: 54999,
    mrp: 79900,
    warranty: "Apple Care Active",
    inclusions: ["Sealed Inclusions", "Fast Charger", "Bill"],
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=700&q=80",
    badge: "Open Box",
    featured: true
  },
  {
    id: "mw-103",
    title: "Samsung Galaxy S24 Ultra 5G",
    category: "android",
    brand: "Samsung",
    condition: "Pristine 10/10",
    color: "Titanium Gray",
    storage: "12GB / 256GB",
    batteryHealth: "100%",
    price: 84999,
    mrp: 129999,
    warranty: "6 Months Warranty",
    inclusions: ["Original S-Pen", "Original Box", "Invoice"],
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=700&q=80",
    badge: "Flagship AI",
    featured: true
  },
  {
    id: "mw-104",
    title: "Apple iPhone 14",
    category: "iphone",
    brand: "Apple",
    condition: "Mint Condition",
    color: "Midnight Blue",
    storage: "128 GB",
    batteryHealth: "94%",
    price: 41999,
    mrp: 69900,
    warranty: "6 Months Warranty",
    inclusions: ["Original Box", "Cable", "Store Bill"],
    image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=700&q=80",
    badge: "Top Seller",
    featured: true
  },
  {
    id: "mw-105",
    title: "Apple iPhone 13",
    category: "iphone",
    brand: "Apple",
    condition: "Grade A Tested",
    color: "Starlight White",
    storage: "128 GB",
    batteryHealth: "90%",
    price: 34499,
    mrp: 59900,
    warranty: "6 Months Warranty",
    inclusions: ["Charger", "Tempered Glass Installed", "Bill"],
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80",
    badge: "Value Pick",
    featured: true
  },
  {
    id: "mw-106",
    title: "Samsung Galaxy S23 Ultra",
    category: "android",
    brand: "Samsung",
    condition: "Flawless Mint",
    color: "Phantom Black",
    storage: "256 GB",
    batteryHealth: "96%",
    price: 61999,
    mrp: 124999,
    warranty: "6 Months Warranty",
    inclusions: ["S-Pen", "Cable", "Bill"],
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=700&q=80",
    badge: "Camera Beast",
    featured: false
  },
  {
    id: "mw-107",
    title: "OnePlus 12 5G",
    category: "android",
    brand: "OnePlus",
    condition: "Like New Unboxed",
    color: "Flowy Emerald",
    storage: "16GB / 512GB",
    batteryHealth: "100%",
    price: 46999,
    mrp: 69999,
    warranty: "Brand Warranty Valid",
    inclusions: ["100W SuperVOOC Charger", "Full Box"],
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80",
    badge: "100W Fast Charge",
    featured: false
  },
  {
    id: "mw-108",
    title: "Apple iPhone 12",
    category: "iphone",
    brand: "Apple",
    condition: "Grade A Inspected",
    color: "Deep Purple",
    storage: "64 GB",
    batteryHealth: "88%",
    price: 22999,
    mrp: 49900,
    warranty: "3 Months Store Warranty",
    inclusions: ["Cable", "Bill & Tax Invoice"],
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=700&q=80",
    badge: "Budget iPhone",
    featured: false
  },
  {
    id: "mw-109",
    title: "Apple Watch Ultra 2 (49mm)",
    category: "accessories",
    brand: "Apple",
    condition: "Like New (Mint)",
    color: "Titanium with Alpine Loop",
    storage: "GPS + Cellular",
    batteryHealth: "98%",
    price: 48999,
    mrp: 89900,
    warranty: "6 Months Warranty",
    inclusions: ["Alpine Band", "Fast Magnetic Charger", "Box"],
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=80",
    badge: "Apple Watch",
    featured: false
  },
  {
    id: "mw-110",
    title: "Apple AirPods Pro (2nd Gen Type-C)",
    category: "accessories",
    brand: "Apple",
    condition: "Brand New Sealed",
    color: "White",
    storage: "MagSafe ANC Case",
    batteryHealth: "100%",
    price: 14499,
    mrp: 24900,
    warranty: "1 Year Official Apple Warranty",
    inclusions: ["Sealed Box", "Ear Tips (XS/S/M/L)", "Braided Cable"],
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=700&q=80",
    badge: "Sealed Pack",
    featured: false
  },
  {
    id: "mw-111",
    title: "OnePlus 55\" 4K QLED Smart TV",
    category: "accessories",
    brand: "OnePlus",
    condition: "Showroom Demo Unit",
    color: "Bezel-less Black",
    storage: "Google TV / 120Hz",
    batteryHealth: "N/A",
    price: 28999,
    mrp: 54999,
    warranty: "1 Year Store Warranty",
    inclusions: ["Smart Remote", "Wall Mount Bracket", "GST Bill"],
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=700&q=80",
    badge: "Smart TV",
    featured: false
  },
  {
    id: "mw-112",
    title: "Google Pixel 8 Pro",
    category: "android",
    brand: "Google",
    condition: "Mint Condition",
    color: "Bay Blue",
    storage: "128 GB",
    batteryHealth: "97%",
    price: 47999,
    mrp: 106999,
    warranty: "6 Months Warranty",
    inclusions: ["Box", "OTG Adapter", "Type-C Cable"],
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=700&q=80",
    badge: "Google Tensor",
    featured: false
  }
];

// App State
let activeCategory = "all";
let filterSearch = "";
let filterSort = "popular";
let inquiryList = JSON.parse(localStorage.getItem("mrwala_inquiry") || "[]");

// DOM Initializer
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  updateInquiryCount();
  setupFilterHandlers();
  setupTradeInTool();
  setupRepairTool();
});

// Event Bindings
function setupFilterHandlers() {
  document.querySelectorAll(".category-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeCategory = tab.dataset.category;
      renderCatalog();
    });
  });

  const searchBox = document.getElementById("search-box");
  if (searchBox) {
    searchBox.addEventListener("input", (e) => {
      filterSearch = e.target.value.toLowerCase().trim();
      renderCatalog();
    });
  }

  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      filterSort = e.target.value;
      renderCatalog();
    });
  }
}

// Render Catalog Cards
function renderCatalog() {
  const container = document.getElementById("catalog-grid");
  const countLabel = document.getElementById("stock-count-label");
  if (!container) return;

  let list = productsData.filter(item => {
    const matchCat = activeCategory === "all" || item.category === activeCategory;
    const matchSearch = 
      item.title.toLowerCase().includes(filterSearch) ||
      item.brand.toLowerCase().includes(filterSearch) ||
      item.color.toLowerCase().includes(filterSearch) ||
      item.storage.toLowerCase().includes(filterSearch);
    return matchCat && matchSearch;
  });

  // Sorting
  if (filterSort === "price-asc") {
    list.sort((a, b) => a.price - b.price);
  } else if (filterSort === "price-desc") {
    list.sort((a, b) => b.price - a.price);
  } else if (filterSort === "discount") {
    list.sort((a, b) => ((b.mrp - b.price) / b.mrp) - ((a.mrp - a.price) / a.mrp));
  } else {
    list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  if (countLabel) {
    countLabel.textContent = `Showing ${list.length} tested devices`;
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-white rounded-2xl border border-slate-200">
        <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3 text-slate-400">
          <i class="fa-solid fa-magnifying-glass text-lg"></i>
        </div>
        <h4 class="text-base font-bold text-slate-900 mb-1">No matching devices found</h4>
        <p class="text-xs text-slate-500 mb-4">Looking for another model? We get fresh stock daily at Vikas Nagar!</p>
        <a href="https://wa.me/${MR_WALA_PHONE}?text=${encodeURIComponent("Hello Mr. Wala, I am looking for a phone not shown on your website. Do you have it available?")}" target="_blank" class="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition">
          <i class="fa-brands fa-whatsapp text-sm"></i> Inquire Live Stock via WhatsApp
        </a>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(item => {
    const discount = Math.round(((item.mrp - item.price) / item.mrp) * 100);
    const savings = (item.mrp - item.price).toLocaleString("en-IN");
    const waText = encodeURIComponent(
      `Hello Mr. Wala! I am interested in:
📱 ${item.title} (${item.storage}, ${item.color})
💰 Price: ₹${item.price.toLocaleString("en-IN")}
🔋 Battery Health: ${item.batteryHealth}

Is this available at your Vikas Nagar store for inspection today?`
    );

    return `
      <div class="clean-card bg-white p-5 flex flex-col justify-between group">
        <div>
          <!-- Top Badges -->
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="text-[11px] font-bold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md">
              ${item.badge}
            </span>
            ${item.batteryHealth !== "N/A" ? `
              <span class="text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-md flex items-center gap-1">
                <i class="fa-solid fa-battery-three-quarters text-[10px]"></i> ${item.batteryHealth}
              </span>
            ` : ""}
          </div>

          <!-- Product Image -->
          <div class="h-48 w-full bg-slate-50 rounded-xl p-3 flex items-center justify-center mb-4 group-hover:bg-slate-100/70 transition">
            <img 
              src="${item.image}" 
              alt="${item.title}" 
              loading="lazy" 
              onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80';"
              class="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition duration-300"
            />
          </div>

          <!-- Title & Specs -->
          <div class="mb-3">
            <div class="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>${item.brand}</span>
              <span class="font-medium text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">${item.storage}</span>
            </div>
            <h3 class="text-base font-bold text-slate-900 group-hover:text-blue-600 transition leading-snug">
              ${item.title}
            </h3>
            <p class="text-xs text-slate-500 mt-0.5">${item.color} • ${item.condition}</p>
          </div>

          <!-- Inclusions -->
          <div class="flex flex-wrap gap-1.5 mb-4">
            ${item.inclusions.slice(0, 2).map(inc => `
              <span class="text-[10px] bg-slate-50 text-slate-600 border border-slate-200 px-2 py-0.5 rounded">
                ✓ ${inc}
              </span>
            `).join("")}
          </div>
        </div>

        <!-- Price & CTA -->
        <div class="pt-3 border-t border-slate-100">
          <div class="flex items-baseline justify-between mb-1">
            <div class="flex items-baseline gap-1.5">
              <span class="text-xl font-extrabold text-slate-900 font-mono">₹${item.price.toLocaleString("en-IN")}</span>
              <span class="text-xs text-slate-400 line-through">₹${item.mrp.toLocaleString("en-IN")}</span>
            </div>
            <span class="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
              ${discount}% OFF
            </span>
          </div>

          <p class="text-[11px] text-slate-500 mb-3">Save ₹${savings} with 6-Mo Warranty</p>

          <!-- Buttons -->
          <div class="grid grid-cols-2 gap-2">
            <button onclick="openProductModal('${item.id}')" class="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2 px-3 rounded-lg transition">
              Specs
            </button>
            <a href="https://wa.me/${MR_WALA_PHONE}?text=${waText}" target="_blank" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2 px-3 rounded-lg transition flex items-center justify-center gap-1.5 shadow-sm">
              <i class="fa-brands fa-whatsapp"></i> Buy Now
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Quick View Modal
function openProductModal(id) {
  const item = productsData.find(p => p.id === id);
  if (!item) return;

  const modal = document.getElementById("product-modal");
  const body = document.getElementById("modal-body");
  if (!modal || !body) return;

  const discount = Math.round(((item.mrp - item.price) / item.mrp) * 100);
  const waText = encodeURIComponent(
    `Hello Mr. Wala! I want to check/reserve this unit at your Vikas Nagar store:\n• ${item.title} (${item.storage})\n• Color: ${item.color}\n• Price: ₹${item.price.toLocaleString("en-IN")}\n• Battery: ${item.batteryHealth}`
  );

  body.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div class="bg-slate-50 rounded-xl p-6 flex items-center justify-center border border-slate-100">
        <img src="${item.image}" alt="${item.title}" class="max-h-64 object-contain mix-blend-multiply" />
      </div>

      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="text-xs font-bold text-blue-600 uppercase">${item.brand}</span>
          <span class="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-medium">32-Point Quality Certified</span>
        </div>

        <h3 class="text-2xl font-bold text-slate-900 mb-1">${item.title}</h3>
        <p class="text-xs text-slate-500 mb-4">${item.color} • ${item.storage} Storage</p>

        <div class="bg-slate-50 border border-slate-200 rounded-xl p-3.5 mb-4">
          <div class="flex items-baseline gap-2">
            <span class="text-2xl font-extrabold text-slate-900 font-mono">₹${item.price.toLocaleString("en-IN")}</span>
            <span class="text-xs text-slate-400 line-through">MRP ₹${item.mrp.toLocaleString("en-IN")}</span>
            <span class="text-xs font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded ml-auto">Save ${discount}%</span>
          </div>
          <p class="text-[11px] text-slate-500 mt-1">Includes all taxes and store tax invoice.</p>
        </div>

        <div class="grid grid-cols-2 gap-2 text-xs mb-4">
          <div class="bg-white border border-slate-200 p-2 rounded-lg">
            <span class="text-slate-400 block text-[10px]">Condition</span>
            <strong class="text-slate-800">${item.condition}</strong>
          </div>
          <div class="bg-white border border-slate-200 p-2 rounded-lg">
            <span class="text-slate-400 block text-[10px]">Battery Health</span>
            <strong class="text-emerald-600">${item.batteryHealth}</strong>
          </div>
          <div class="bg-white border border-slate-200 p-2 rounded-lg">
            <span class="text-slate-400 block text-[10px]">Warranty</span>
            <strong class="text-slate-800">${item.warranty}</strong>
          </div>
          <div class="bg-white border border-slate-200 p-2 rounded-lg">
            <span class="text-slate-400 block text-[10px]">Replacement</span>
            <strong class="text-slate-800">7 Days Hassle-Free</strong>
          </div>
        </div>

        <div class="mb-5">
          <span class="text-xs font-semibold text-slate-700 block mb-1.5">What's Included in the Box:</span>
          <div class="flex flex-wrap gap-1.5">
            ${item.inclusions.map(inc => `
              <span class="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                ✓ ${inc}
              </span>
            `).join("")}
          </div>
        </div>

        <div class="flex gap-2">
          <a href="https://wa.me/${MR_WALA_PHONE}?text=${waText}" target="_blank" class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-lg text-xs transition text-center flex items-center justify-center gap-2">
            <i class="fa-brands fa-whatsapp text-sm"></i> Buy / Reserve via WhatsApp
          </a>
          <button onclick="addToInquiry('${item.id}')" class="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 px-4 rounded-lg text-xs transition">
            Save
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("open");
}

function closeProductModal() {
  const modal = document.getElementById("product-modal");
  if (modal) modal.classList.remove("open");
}

// Trade-In Tool
const tradeData = {
  apple: {
    "iPhone 14 Pro Max": 64000,
    "iPhone 14 Pro": 55000,
    "iPhone 14": 35000,
    "iPhone 13 Pro Max": 48000,
    "iPhone 13": 27000,
    "iPhone 12": 18000,
    "iPhone 11": 13000
  },
  samsung: {
    "Galaxy S23 Ultra": 49000,
    "Galaxy S22 Ultra": 35000,
    "Galaxy S21 FE 5G": 15000
  },
  oneplus: {
    "OnePlus 11 5G": 27000,
    "OnePlus 10 Pro": 20000
  }
};

function setupTradeInTool() {
  const brandEl = document.getElementById("calc-brand");
  const modelEl = document.getElementById("calc-model");
  const btn = document.getElementById("calc-btn");

  if (!brandEl || !modelEl) return;

  brandEl.addEventListener("change", () => {
    const brand = brandEl.value;
    modelEl.innerHTML = `<option value="">-- Choose Model --</option>`;
    if (tradeData[brand]) {
      Object.keys(tradeData[brand]).forEach(m => {
        const opt = document.createElement("option");
        opt.value = m;
        opt.textContent = m;
        modelEl.appendChild(opt);
      });
      modelEl.disabled = false;
    } else {
      modelEl.disabled = true;
    }
  });

  if (btn) {
    btn.addEventListener("click", () => {
      const brand = brandEl.value;
      const model = modelEl.value;
      const condition = document.getElementById("calc-condition").value;
      const resultBox = document.getElementById("trade-result");
      const valText = document.getElementById("trade-value-text");
      const waBtn = document.getElementById("trade-wa-link");

      if (!brand || !model) {
        showToast("Please choose brand and model");
        return;
      }

      let base = tradeData[brand][model];
      let mult = 1.0;
      if (condition === "good") mult = 0.85;
      if (condition === "cracked") mult = 0.60;
      if (condition === "faulty") mult = 0.40;

      const cash = Math.round(base * mult);
      const exchange = Math.round(cash * 1.08);

      valText.innerHTML = `
        <div class="text-xs text-slate-500 mb-1">Instant Cash Estimate</div>
        <div class="text-3xl font-extrabold text-slate-900 font-mono">₹${cash.toLocaleString("en-IN")}</div>
        <div class="text-xs text-emerald-700 font-semibold mt-1">
          Or get <span class="font-bold">₹${exchange.toLocaleString("en-IN")}</span> when exchanging for any phone!
        </div>
      `;

      const msg = encodeURIComponent(
        `Hello Mr. Wala! I calculated my phone valuation on your website:
📱 Phone: ${model} (${brand.toUpperCase()})
✨ Condition: ${condition}
💰 Estimated Cash Value: ₹${cash.toLocaleString("en-IN")}
🎁 Exchange Value: ₹${exchange.toLocaleString("en-IN")}

I want to sell/exchange at your Vikas Nagar store.`
      );

      waBtn.href = `https://wa.me/${MR_WALA_PHONE}?text=${msg}`;
      resultBox.classList.remove("hidden");
    });
  }
}

// Repair Tool
function setupRepairTool() {
  const btn = document.getElementById("repair-calc-btn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const brand = document.getElementById("repair-brand").value;
    const issue = document.getElementById("repair-issue").value;
    const resultBox = document.getElementById("repair-result");
    const costText = document.getElementById("repair-cost-text");
    const waBtn = document.getElementById("repair-wa-link");

    let cost = 1499;
    if (issue === "screen") cost = brand === "apple" ? 3499 : 2499;
    if (issue === "battery") cost = brand === "apple" ? 1799 : 1299;
    if (issue === "backglass") cost = brand === "apple" ? 1999 : 1199;
    if (issue === "camera") cost = brand === "apple" ? 2799 : 1899;

    costText.innerHTML = `
      <div class="text-2xl font-extrabold text-slate-900 font-mono">Starting at ₹${cost.toLocaleString("en-IN")}</div>
      <p class="text-xs text-slate-500 mt-1">30-Minute Turnaround at Vikas Nagar Store</p>
    `;

    const msg = encodeURIComponent(
      `Hello Mr. Wala Repair Desk! I need service for:
📱 Device: ${brand.toUpperCase()}
🔧 Issue: ${issue.toUpperCase()}
💰 Estimated Quote: ₹${cost}

Can I bring it today to your Vikas Nagar store?`
    );

    waBtn.href = `https://wa.me/${MR_WALA_PHONE}?text=${msg}`;
    resultBox.classList.remove("hidden");
  });
}

// Inquiry Management
function addToInquiry(id) {
  const item = productsData.find(p => p.id === id);
  if (!item) return;

  if (!inquiryList.some(i => i.id === id)) {
    inquiryList.push(item);
    localStorage.setItem("mrwala_inquiry", JSON.stringify(inquiryList));
    updateInquiryCount();
    showToast(`Saved ${item.title} to your list`);
  } else {
    showToast(`${item.title} is already saved`);
  }
}

function updateInquiryCount() {
  const badge = document.getElementById("inquiry-badge");
  if (badge) {
    badge.textContent = inquiryList.length;
    badge.style.display = inquiryList.length > 0 ? "inline-flex" : "none";
  }
}

function openInquiryModal() {
  const modal = document.getElementById("inquiry-modal");
  const list = document.getElementById("inquiry-list");
  const total = document.getElementById("inquiry-total");
  const waBtn = document.getElementById("inquiry-wa-btn");

  if (!modal || !list) return;

  if (inquiryList.length === 0) {
    list.innerHTML = `
      <div class="text-center py-8 text-slate-400">
        <i class="fa-solid fa-list-check text-3xl mb-2 text-slate-300"></i>
        <p class="text-xs text-slate-600">Your inquiry list is empty</p>
      </div>
    `;
    if (total) total.textContent = "₹0";
    if (waBtn) waBtn.classList.add("hidden");
  } else {
    let sum = 0;
    list.innerHTML = inquiryList.map((item, index) => {
      sum += item.price;
      return `
        <div class="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-200">
          <div class="text-xs">
            <strong class="text-slate-900 block">${item.title}</strong>
            <span class="text-slate-500">${item.storage} • ₹${item.price.toLocaleString("en-IN")}</span>
          </div>
          <button onclick="removeInquiryItem(${index})" class="text-slate-400 hover:text-red-500 text-xs p-1">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      `;
    }).join("");

    if (total) total.textContent = `₹${sum.toLocaleString("en-IN")}`;

    const itemsSummary = inquiryList.map(i => `• ${i.title} (${i.storage}) - ₹${i.price.toLocaleString("en-IN")}`).join("%0A");
    const msg = `Hello Mr. Wala! I am interested in these items:%0A${itemsSummary}%0A%0A*Total: ₹${sum.toLocaleString("en-IN")}*%0AAre they currently available at Vikas Nagar?`;

    if (waBtn) {
      waBtn.href = `https://wa.me/${MR_WALA_PHONE}?text=${msg}`;
      waBtn.classList.remove("hidden");
    }
  }

  modal.classList.add("open");
}

function closeInquiryModal() {
  const modal = document.getElementById("inquiry-modal");
  if (modal) modal.classList.remove("open");
}

function removeInquiryItem(idx) {
  inquiryList.splice(idx, 1);
  localStorage.setItem("mrwala_inquiry", JSON.stringify(inquiryList));
  updateInquiryCount();
  openInquiryModal();
}

function clearAllInquiry() {
  inquiryList = [];
  localStorage.setItem("mrwala_inquiry", JSON.stringify([]));
  updateInquiryCount();
  openInquiryModal();
}

// Toast
function showToast(msg) {
  const toast = document.getElementById("toast");
  const txt = document.getElementById("toast-text");
  if (!toast || !txt) return;

  txt.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
}
