window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile menu functionality
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Intersection Observer for animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll(".card").forEach((card) => {
  observer.observe(card);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const articles = [
  {
    title: "Lampung",
    content: `Provinsi Lampung adalah provinsi paling selatan di pulau Sumatera,
    dengan luas 169,21 km² yang terbagi ke dalam 20 Kecamatan dan 126
    Kelurahan. Lampung menjadi Provinsi terpadat kedua di pulau Sumatera
    setelah Medan. Karena lokasinya yang tidak terlalu jauh dari ibu
    kota Jakarta, Lampung kini bukan lagi hanya kota tujuan transmigrasi
    tapi kini lampung menjadi salah satu destinasi wisata populer.
    Berlokasi di pesisir selatan pulau Sumatera, Lampung memiliki banyak
    pantai-pantai yang indah.`,
  },
  {
    title: "Wisata",
    content: `Lampung dikenal memiliki pantai-pantai indah yang menjadi primadona
    wisatawan. Salah satu destinasi populer adalah Pantai Pasir Putih,
    dengan hamparan pasir halus dan air laut yang jernih. Untuk
    penggemar snorkeling atau diving, Pulau Pahawang adalah surga bawah
    laut yang menawarkan terumbu karang warna-warni dan keindahan biota
    laut. Tak hanya pantai, Lampung juga memiliki keajaiban alam berupa
    Taman Nasional Way Kambas, habitat gajah Sumatra yang dapat Anda
    saksikan secara langsung. Selain itu, wisatawan yang menyukai
    petualangan dapat menjelajahi Air Terjun Curup Gangsa di Way Kanan,
    yang menawarkan pemandangan air terjun megah di tengah hutan tropis.`,
  },
  {
    title: "Budaya",
    content: `Budaya Lampung merupakan percampuran unik antara tradisi lokal dan
    pengaruh Melayu. Salah satu warisan budaya yang paling terkenal
    adalah Kain Tapis, kain tenun tradisional yang dihiasi dengan motif
    emas atau perak. Kain ini tidak hanya melambangkan keindahan seni
    lokal, tetapi juga status sosial dan adat masyarakat Lampung. Selain
    itu, tradisi Nyambai adalah salah satu upacara adat yang menarik
    untuk disaksikan. Upacara ini melibatkan tarian dan musik
    tradisional yang biasanya dilakukan untuk menyambut tamu penting
    atau merayakan pernikahan. Bahasa Lampung, dengan aksara
    tradisionalnya, juga menjadi bagian penting dari identitas budaya
    daerah ini.`,
  },
  {
    title: "Kuliner",
    content: `Tidak lengkap rasanya membicarakan Lampung tanpa menyentuh soal
    kuliner. Seruit adalah makanan khas Lampung yang wajib dicoba.
    Hidangan ini berupa ikan yang digoreng atau dibakar, kemudian
    dicampur dengan sambal terasi dan ditambah tempoyak (fermentasi
    durian). Rasanya yang pedas, gurih, dan asam menciptakan sensasi
    unik di lidah. Lampung juga terkenal dengan produk kopinya, terutama
    Kopi Robusta Lampung yang memiliki cita rasa kuat dan aroma khas.
    Tak ketinggalan, camilan khas seperti Kemplang (kerupuk ikan bakar)
    dan Keripik Pisang Lampung menjadi oleh-oleh favorit wisatawan.`,
  },
];

const contentDiv = document.getElementById("content");

// Gunakan for loop untuk membuat elemen article secara dinamis
for (let i = 0; i < articles.length; i++) {
  const article = document.createElement("article");
  const title = document.createElement("h2");
  const paragraph = document.createElement("p");

  title.textContent = articles[i].title;
  paragraph.textContent = articles[i].content;

  article.appendChild(title);
  article.appendChild(paragraph);
  contentDiv.appendChild(article);
}

const Destinations = [
  {
    id: 1,
    category: "destination",
    location: "west",
    title: "Pantai Tanjung Setia",
    description:
      "Surga para peselancar dengan ombak kelas dunia yang mencapai ketinggian 3-5 meter. Pantai ini telah menjadi tuan rumah berbagai kompetisi selancar internasional dan menawarkan pemandangan sunset yang memukau.",
    images: [
      "/api/placeholder/800/400",
      "/api/placeholder/800/401",
      "/api/placeholder/800/402",
    ],
  },
  {
    id: 2,
    category: "destination",
    location: "south",
    title: "Gunung Krakatau",
    description:
      "Gunung berapi legendaris yang terkenal dengan letusan dahsyatnya pada tahun 1883. Kini, Anak Krakatau masih aktif dan menawarkan pemandangan spektakuler dengan latar belakang Selat Sunda.",
    images: [
      "/api/placeholder/800/403",
      "/api/placeholder/800/404",
      "/api/placeholder/800/405",
    ],
  },
  {
    id: 3,
    category: "destination",
    location: "east",
    title: "Taman Nasional Way Kambas",
    description:
      "Pusat konservasi gajah Sumatera dan badak yang menakjubkan. Pengunjung dapat berinteraksi dengan gajah, melihat proses pelatihan, dan menjelajahi hutan tropis yang masih asli.",
    images: [
      "/api/placeholder/800/406",
      "/api/placeholder/800/407",
      "/api/placeholder/800/408",
    ],
  },

  // BUDAYA
  {
    id: 4,
    category: "culture",
    location: "east",
    title: "Tari Melinting",
    description:
      "Tarian tradisional yang menggambarkan keanggunan putri-putri Lampung. Tarian ini diiringi musik tradisional dan penari mengenakan pakaian adat Lampung yang megah.",
    images: [
      "/api/placeholder/800/412",
      "/api/placeholder/800/413",
      "/api/placeholder/800/414",
    ],
  },
  {
    id: 5,
    category: "culture",
    location: "south",
    title: "Kain Tapis Lampung",
    description:
      "Kain tenun tradisional dengan motif yang rumit dan benang emas. Setiap motif memiliki makna filosofis dan mencerminkan kekayaan budaya Lampung.",
    images: [
      "/api/placeholder/800/415",
      "/api/placeholder/800/416",
      "/api/placeholder/800/417",
    ],
  },

  {
    id: 6,
    category: "culture",
    location: "east",
    title: "Rumah Adat Nuwo Sesat",
    description:
      "Rumah adat tradisional Lampung yang menjadi tempat pertemuan adat dan musyawarah. Arsitektur unik dengan ukiran khas mencerminkan filosofi hidup masyarakat Lampung.",
    images: [
      "/api/placeholder/800/421",
      "/api/placeholder/800/422",
      "/api/placeholder/800/423",
    ],
  },

  // KULINER
  {
    id: 7,
    category: "culinary",
    location: "east",
    title: "Seruit",
    description:
      "Hidangan tradisional berbahan dasar ikan bakar yang disajikan dengan tempoyak (durian fermentasi) dan sambal terasi. Makanan ini adalah ikon kuliner Lampung.",
    images: [
      "/api/placeholder/800/424",
      "/api/placeholder/800/425",
      "/api/placeholder/800/426",
    ],
  },
  {
    id: 8,
    category: "culinary",
    location: "south",
    title: "Gulai Taboh",
    description:
      "Sup khas Lampung dengan campuran nangka muda, kacang panjang, dan terong yang dimasak dengan santan dan bumbu rempah khas. Memiliki rasa gurih dan pedas yang khas.",
    images: [
      "/api/placeholder/800/427",
      "/api/placeholder/800/428",
      "/api/placeholder/800/429",
    ],
  },
  {
    id: 9,
    category: "culinary",
    location: "west",
    title: "Gabing",
    description:
      "Makanan ringan tradisional yang terbuat dari singkong yang diolah dengan gula aren dan kelapa parut. Memiliki tekstur kenyal dan rasa manis yang khas.",
    images: [
      "/api/placeholder/800/430",
      "/api/placeholder/800/431",
      "/api/placeholder/800/432",
    ],
  },
];

// Create Card element with slider
function createCardElement(Destinations) {
  const CardElement = document.createElement("div");
  CardElement.className = "card animate";

  // Create slider
  const sliderHtml = `
      <div class="Card-slider">
          ${Destinations.images
            .map(
              (img, index) => `
              <div class="slide ${index === 0 ? "active" : ""}">
                  <img src="${img}" alt="${Destinations.title}">
              </div>
          `
            )
            .join("")}
          <button class="slider-button prev-button">←</button>
          <button class="slider-button next-button">→</button>
          <div class="slider-controls">
              ${Destinations.images
                .map(
                  (_, index) => `
                  <div class="slider-dot ${
                    index === 0 ? "active" : ""
                  }" data-index="${index}"></div>
              `
                )
                .join("")}
          </div>
      </div>
      <div class="card-content">
          <h3>${Destinations.title}</h3>
          <p>${Destinations.description}</p>
      </div>
  `;

  CardElement.innerHTML = sliderHtml;

  // Add slider functionality
  const slides = CardElement.querySelectorAll(".slide");
  const dots = CardElement.querySelectorAll(".slider-dot");
  const prevButton = CardElement.querySelector(".prev-button");
  const nextButton = CardElement.querySelector(".next-button");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));
    slides[index].classList.add("active");
    dots[index].classList.add("active");
    currentSlide = index;
  }

  prevButton.addEventListener("click", () => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(newIndex);
  });

  nextButton.addEventListener("click", () => {
    const newIndex = (currentSlide + 1) % slides.length;
    showSlide(newIndex);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
  });

  setInterval(() => {
    const newIndex = (currentSlide + 1) % slides.length;
    showSlide(newIndex);
  }, 5000);

  return CardElement;
}

// Initialize filters
document.getElementById("categoryFilter").addEventListener("change", (e) => {
  const locationFilter = document.getElementById("locationFilter").value;
  displayCards(e.target.value, locationFilter);
});

document.getElementById("locationFilter").addEventListener("change", (e) => {
  const categoryFilter = document.getElementById("categoryFilter").value;
  displayCards(categoryFilter, e.target.value);
});

// Filter and display Cards
function displayCards(categoryFilter = "all", locationFilter = "all") {
  const grid = document.getElementById("CardGrid");
  grid.innerHTML = "";

  const filteredCards = Destinations.filter((Destination) => {
    const categoryMatch =
      categoryFilter === "all" || Destination.category === categoryFilter;
    const locationMatch =
      locationFilter === "all" || Destination.location === locationFilter;
    return categoryMatch && locationMatch;
  });

  filteredCards.forEach((Destination) => {
    grid.appendChild(createCardElement(Destination));
  });
}

// Initial display
displayCards();
