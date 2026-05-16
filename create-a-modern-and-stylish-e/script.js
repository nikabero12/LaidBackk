const socialLinks = {
  instagram: "https://www.instagram.com/1laidback1/",
  tiktok: "https://www.tiktok.com/@.1laidback1.delete",
};
const uploadedProductsKey = "laidbackUploadedProductsV2";

const baseProducts = [
  {
    id: "obsidian-hoodie",
    name: "ობსიდიანის მძიმე ჰუდი",
    category: "ჰუდები",
    price: 148,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=85",
    description: "სქელი დავარცხნილი ბამბა, ფორმიანი კაპიუშონი და თავისუფალი პრემიუმ სილუეტი ცივი ქალაქური საღამოებისთვის.",
  },
  {
    id: "gallery-tee",
    name: "გალერეის წონის მაისური",
    category: "მაისურები",
    price: 68,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85",
    description: "სუფთა oversized მაისური მშრალი შეხების ფაქტურით, დაშვებული მხრით და დახვეწილი საყელოთი.",
  },
  {
    id: "noir-trouser",
    name: "შავი ფართო შარვალი",
    category: "შარვლები",
    price: 188,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1200&q=85",
    description: "რბილად მორგებული ფართო შარვალი დაპრესილი ნაკეცით და შეუმჩნეველი ელასტიკური კომფორტის წელით.",
  },
  {
    id: "court-sneaker",
    name: "კორტის სნიკერი",
    category: "ფეხსაცმელი",
    price: 214,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=85",
    description: "მონოქრომული ტყავის სნიკერი რბილი ძირით, მინიმალური პანელებით და მთელი დღის კომფორტული სტრუქტურით.",
  },
  {
    id: "studio-cap",
    name: "სტუდიის კეპი",
    category: "აქსესუარები",
    price: 54,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1200&q=85",
    description: "დაბალი პროფილის ბამბის ტვილის კეპი ტონალური ნაქარგით და რეგულირებადი მეტალის საკეტით.",
  },
  {
    id: "midnight-jacket",
    name: "შუაღამის მოკლე ქურთუკი",
    category: "ჰუდები",
    price: 242,
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=85",
    description: "მკვეთრი ზედა ფენა მოკლე სილუეტით, მქრქალი დეტალებით და რბილი სატინის შიდა მხარით.",
  },
  {
    id: "atelier-knit",
    name: "ატელიეს ნაქსოვი მაისური",
    category: "მაისურები",
    price: 96,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1200&q=85",
    description: "თხელი რიბის ნაქსოვი სუფთა შავ ტონში, ნაზი ბზინვარებით და სხეულზე ახლო მორგებით.",
  },
  {
    id: "shadow-cargo",
    name: "ჩრდილის კარგო შარვალი",
    category: "შარვლები",
    price: 174,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85",
    description: "დახვეწილი კარგო შარვალი დამალული ჯიბეებით, რეგულირებადი ბოლოებით და მქრქალი ტექნიკური ფაქტურით.",
  },
];

const categories = ["ჰუდები", "მაისურები", "შარვლები", "ფეხსაცმელი", "აქსესუარები"];
const categoryImages = {
  ჰუდები: "url('https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80')",
  მაისურები: "url('https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=80')",
  შარვლები: "url('https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80')",
  ფეხსაცმელი: "url('https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80')",
  აქსესუარები: "url('https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=80')",
};

let products = [...baseProducts, ...JSON.parse(localStorage.getItem(uploadedProductsKey) || "[]")];
let selectedCategory = "ყველა";
let searchTerm = "";

const app = document.querySelector("#app");

function money(value) {
  return `$${value.toLocaleString()}`;
}

function productCard(product) {
  return `
    <article class="product-card">
      <a class="product-image" href="#product/${product.id}" aria-label="${product.name}-ის ნახვა">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </a>
      <div class="product-info">
        <div class="product-topline">
          <div>
            <h3>${product.name}</h3>
            <p>${product.category}</p>
          </div>
          <span class="price">${money(product.price)}</span>
        </div>
        <div class="card-actions">
          <a class="btn btn-dark" href="#product/${product.id}">დეტალები</a>
        </div>
      </div>
    </article>
  `;
}

function filteredProducts() {
  return products.filter((product) => {
    const categoryMatch = selectedCategory === "ყველა" || product.category === selectedCategory;
    const text = `${product.name} ${product.category} ${product.description}`.toLowerCase();
    return categoryMatch && text.includes(searchTerm.toLowerCase());
  });
}

function renderHome() {
  app.innerHTML = `
    <section class="hero" id="home">
      <div class="hero-inner">
        <div class="hero-copy">
          <p class="eyebrow">გაზაფხულის კაფსულა 2026</p>
          <h1>LaidBack</h1>
          <p>მინიმალური შავი აუცილებელი სამოსი, მშვიდი ჭრით და თანამედროვე ლუქსის ესთეტიკით. ააწყვე გარდერობი, რომელიც მშვიდი, ზუსტი და აშკარად პრემიუმია.</p>
          <div class="button-row">
            <a class="btn btn-light" href="#shop">კოლექციის ნახვა</a>
            <a class="btn btn-ghost social-link" style="border-color:rgba(255,255,255,.62);color:white" href="${socialLinks.instagram}" target="_blank" rel="noreferrer">Instagram</a>
            <a class="btn btn-ghost social-link" style="border-color:rgba(255,255,255,.62);color:white" href="${socialLinks.tiktok}" target="_blank" rel="noreferrer">TikTok</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="shop">
      <div class="section-title">
        <div>
          <p class="eyebrow">რჩეული</p>
          <h2>ახალი ყოველდღიური ფორმა</h2>
        </div>
        <p>მოძებნე და დაათვალიერე LaidBack-ის პრემიუმ ნივთები. ეს არის საჩვენებელი კატალოგი ბრენდის სტილისა და კოლექციის წარმოსაჩენად.</p>
      </div>
      <div class="toolbar">
        <label class="search-box">
          <span aria-hidden="true">ძებნა</span>
          <input id="searchInput" type="search" placeholder="იპოვე ჰუდები, შარვლები, ფეხსაცმელი..." value="${searchTerm}" />
        </label>
        <div class="category-pills">
          ${["ყველა", ...categories].map((category) => `<button class="pill ${category === selectedCategory ? "active" : ""}" type="button" data-category="${category}">${category}</button>`).join("")}
        </div>
      </div>
      <div class="product-grid" id="productGrid">
        ${filteredProducts().map(productCard).join("") || `<div class="empty-state">ძიებას შესაბამისი პროდუქტი ვერ მოიძებნა.</div>`}
      </div>
    </section>

    <section class="feature-band">
      <div class="feature-inner">
        <div>
          <h3>პრემიუმ მასალები</h3>
          <p>მძიმე ბამბა, რბილი ტექნიკური ნაზავები, მქრქალი დეტალები და სილუეტები, რომლებიც ფორმას ინარჩუნებს.</p>
        </div>
        <div>
          <h3>ბრენდის სტილი</h3>
          <p>სუფთა თეთრი სივრცე, მინიმალური შავი აქცენტები და თანამედროვე ფეშენ-ვიტრინა.</p>
        </div>
        <div>
          <h3>სოციალური არხები</h3>
          <p>სიახლეებისა და კოლექციისთვის გადადი Instagram-ზე ან TikTok-ზე.</p>
        </div>
      </div>
    </section>

    <section class="section compact" id="categories">
      <div class="section-title">
        <div>
          <p class="eyebrow">კატეგორიები</p>
          <h2>აირჩიე სილუეტით</h2>
        </div>
      </div>
      <div class="category-grid">
        ${categories.map((category) => `<a class="category-card" style="--cat-image:${categoryImages[category]}" href="#shop" data-category-link="${category}"><span>${category}</span></a>`).join("")}
      </div>
    </section>

    <section class="section compact" id="social">
      <div class="section-title">
        <div>
          <p class="eyebrow">ბმულები</p>
          <h2>გამოგვყევი ონლაინ</h2>
        </div>
        <p>დააჭირე ქვემოთ მოცემულ ღილაკებს და პირდაპირ გადახვალ LaidBack-ის სოციალურ გვერდებზე.</p>
      </div>
      <div class="button-row">
        <a class="btn btn-dark social-link" href="${socialLinks.instagram}" target="_blank" rel="noreferrer">Instagram</a>
        <a class="btn btn-ghost social-link" href="${socialLinks.tiktok}" target="_blank" rel="noreferrer">TikTok</a>
      </div>
    </section>

    <section class="section compact" id="admin">
      <div class="admin-grid">
        <div class="section-title">
          <div>
            <p class="eyebrow">პროდუქტები</p>
            <h2>პროდუქტის დამატება</h2>
          </div>
          <p>დაამატე ახალი პროდუქტი საჩვენებელ კატალოგში. ინფორმაცია შეინახება ამ ბრაუზერში და კალათის ფუნქციას არ დაამატებს.</p>
        </div>
        <form class="admin-panel" id="adminForm">
          <input name="name" placeholder="პროდუქტის სახელი" required />
          <input name="price" type="number" min="1" placeholder="ფასი" required />
          <select name="category" required>
            ${categories.map((category) => `<option>${category}</option>`).join("")}
          </select>
          <input name="image" type="url" placeholder="სურათის URL" required />
          <button class="btn btn-dark btn-wide" type="submit">პროდუქტის დამატება</button>
        </form>
      </div>
    </section>
  `;
  bindHomeEvents();
}

function bindHomeEvents() {
  document.querySelector("#searchInput")?.addEventListener("input", (event) => {
    searchTerm = event.target.value;
    document.querySelector("#productGrid").innerHTML = filteredProducts().map(productCard).join("") || `<div class="empty-state">ძიებას შესაბამისი პროდუქტი ვერ მოიძებნა.</div>`;
  });

  document.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedCategory = button.dataset.category;
      renderHome();
      document.querySelector("#shop").scrollIntoView({ behavior: "smooth" });
    });
  });

  document.querySelectorAll("[data-category-link]").forEach((link) => {
    link.addEventListener("click", () => {
      selectedCategory = link.dataset.categoryLink;
    });
  });

  document.querySelector("#adminForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const product = {
      id: `${data.get("name").toString().toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`,
      name: data.get("name").toString(),
      price: Number(data.get("price")),
      category: data.get("category").toString(),
      image: data.get("image").toString(),
      description: "LaidBack-ის დამატებული საჩვენებელი პროდუქტი სუფთა სილუეტით და პრემიუმ ვიზუალით.",
    };
    const uploaded = JSON.parse(localStorage.getItem(uploadedProductsKey) || "[]");
    uploaded.push(product);
    localStorage.setItem(uploadedProductsKey, JSON.stringify(uploaded));
    products = [...baseProducts, ...uploaded];
    event.currentTarget.reset();
    renderHome();
    setTimeout(() => document.querySelector("#shop")?.scrollIntoView({ behavior: "smooth" }), 0);
  });
}

function renderProductDetail(id) {
  const product = products.find((item) => item.id === id) || products[0];
  app.innerHTML = `
    <section class="section">
      <a class="muted" href="#shop">კოლექციაში დაბრუნება</a>
      <div class="detail-layout" style="margin-top:24px">
        <div class="detail-media">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <article class="product-detail">
          <p class="eyebrow">${product.category}</p>
          <h1>${product.name}</h1>
          <span class="price">${money(product.price)}</span>
          <p>${product.description}</p>
          <div class="size-row" aria-label="საჩვენებელი ზომები">
            ${["XS", "S", "M", "L", "XL"].map((size) => `<button type="button">${size}</button>`).join("")}
          </div>
          <div class="button-row">
            <a class="btn btn-dark social-link" href="${socialLinks.instagram}" target="_blank" rel="noreferrer">Instagram</a>
            <a class="btn btn-ghost social-link" href="${socialLinks.tiktok}" target="_blank" rel="noreferrer">TikTok</a>
          </div>
        </article>
      </div>
    </section>
  `;
}

function router() {
  const hash = window.location.hash || "#home";
  if (hash.startsWith("#product/")) {
    renderProductDetail(hash.replace("#product/", ""));
  } else {
    renderHome();
    if (hash === "#shop") setTimeout(() => document.querySelector("#shop")?.scrollIntoView(), 0);
  }
  document.querySelector(".nav-panel").classList.remove("open");
  document.querySelector(".nav-toggle").setAttribute("aria-expanded", "false");
}

document.querySelector(".nav-toggle").addEventListener("click", (event) => {
  const panel = document.querySelector(".nav-panel");
  panel.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", panel.classList.contains("open").toString());
});

document.querySelector("#themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("laidbackTheme", document.body.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("laidbackTheme") === "dark") {
  document.body.classList.add("dark");
}

window.addEventListener("hashchange", router);
router();
