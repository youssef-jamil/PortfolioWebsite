// ⭐ عدل البيانات هنا مباشرة! ⭐
const configData = {
  colors: {
    primary: "#f4b400",
    secondary: "#8e24aa"
  },
  name: "يوسف حميل",
  title: "مطور ويب و مصمم UI/UX",
  bio: "أساعدك في تحويل أفكارك لمواقع ومنتجات رقمية احترافية تجذب عملائك وتحقق أهدافك التجارية.",
  services: [
    {
      icon: "fa-laptop-code",
      title: "تطوير المواقع",
      desc: "تصميم وبرمجة مواقع متجاوبة بأحدث التقنيات - من Landing Pages لمواقع متكاملة مع لوحات تحكم."
    },
    {
      icon: "fa-palette",
      title: "تصميم UI/UX",
      desc: "تصميم واجهات مستخدم جذابة وسهلة الاستخدام تضمن تجربة مميزة لعملائك وتزيد معدلات التحويل."
    },
    {
      icon: "fa-code",
      title: "تطبيقات الويب",
      desc: "بناء تطبيقات ويب تفاعلية وديناميكية باستخدام React وNode.js لحلول متقدمة."
    },
    {
      icon: "fa-lightbulb",
      title: "استشارات تقنية",
      desc: "مساعدتك في اختيار التقنيات المناسبة وتخطيط مشروعك الرقمي بطريقة احترافية."
    }
  ],
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "Figma",
    "Git & GitHub",
    "Responsive Design",
    "API Integration"
  ],
  portfolio: [
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      title: "لوحة تحكم تحليلات",
      desc: "لوحة تحكم احترافية لعرض البيانات والتحليلات بشكل تفاعلي مع رسوم بيانية متقدمة ونظام إشعارات فوري."
    },
    {
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
      title: "موقع متجر إلكتروني",
      desc: "متجر إلكتروني متكامل مع سلة تسوق، نظام دفع آمن، وإدارة منتجات ديناميكية - زاد المبيعات بنسبة 85%."
    },
    {
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      title: "منصة تعليمية",
      desc: "منصة تعليم أونلاين تفاعلية مع نظام كورسات، اختبارات، شهادات، ومتابعة تقدم الطلاب بشكل كامل."
    },
    {
      image:
        "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&h=600&fit=crop",
      title: "تطبيق إدارة مشاريع",
      desc: "تطبيق ويب لإدارة المشاريع والمهام مع تعاون فريقي، تقويم، وتقارير مفصلة - استخدمته 200+ شركة."
    },
    {
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      title: "موقع شركة استشارات",
      desc: "موقع كوربوريت احترافي لشركة استشارات مع نظام حجز استشارات، مدونة، وCRM مدمج."
    },
    {
      image:
        "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=600&fit=crop",
      title: "Landing Page لتطبيق موبايل",
      desc: "صفحة هبوط جذابة لتطبيق موبايل مع أنيميشن سلس وعرض مميزات - حققت 5000+ تحميل في أول شهر."
    }
  ],
  testimonials: [
    {
      name: "محمد الشريف",
      comment:
        "أحمد محترف حقيقي! سلم المشروع في الوقت المحدد والجودة فاقت كل توقعاتي. التواصل معاه كان سهل وفاهم بسرعة."
    },
    {
      name: "منى عبدالله",
      comment:
        "أفضل قرار اتخذته إني أشتغل مع أحمد. الموقع اللي عمله لينا زود مبيعاتنا 3 أضعاف والتصميم تحفة فنية!"
    },
    {
      name: "خالد سامي",
      comment:
        "خبرة واحترافية عالية. عمل لنا تطبيق ويب متكامل بمواصفات دقيقة جداً. ننصح بالتعامل معاه بقوة."
    }
  ],
  contact: {
    email: "youssefjamelabdullatif@gmail.com",
    whatsapp: "https://wa.me/201070510169",
    linkedin: "https://linkedin.com/in/youssef-jameel-abdullatif-ali"
  }
};

// تحميل البيانات مباشرة
populatePage(configData);

// Populate the page with data
function populatePage(data) {
  // Apply custom colors if provided
  if (data.colors) {
    const root = document.documentElement;
    root.style.setProperty("--primary-color", data.colors.primary);
    root.style.setProperty("--secondary-color", data.colors.secondary);
  }

  // Hero Section
  document.getElementById("hero-name").textContent = data.name;
  document.getElementById("hero-title").textContent = data.title;
  document.getElementById("hero-bio").textContent = data.bio;

  // Services Section
  const servicesGrid = document.getElementById("services-grid");
  servicesGrid.innerHTML = "";

  data.services.forEach((service, index) => {
    const serviceCard = document.createElement("div");
    serviceCard.className = "service-card";

    // Use icon from service or fallback to default
    const iconClass = service.icon || "fa-laptop-code";

    serviceCard.innerHTML = `
                    <div class="service-icon">
                        <i class="fas ${iconClass}"></i>
                    </div>
                    <h3 class="service-title">${service.title}</h3>
                    <p class="service-desc">${service.desc}</p>
                `;
    servicesGrid.appendChild(serviceCard);
  });

  // Portfolio Section
  const portfolioGrid = document.getElementById("portfolio-grid");
  portfolioGrid.innerHTML = "";

  data.portfolio.forEach((project, index) => {
    const portfolioItem = document.createElement("div");
    portfolioItem.className = "portfolio-item";

    const imageSrc = project.image.startsWith("http")
      ? project.image
      : `assets/portfolio/${project.image}`;

    portfolioItem.innerHTML = `
                    <img src="${imageSrc}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/400x300/1a1a1a/f4b400?text=${encodeURIComponent(project.title)}'">
                    <div class="portfolio-overlay">
                        <h3 class="portfolio-title">${project.title}</h3>
                    </div>
                `;

    portfolioItem.addEventListener("click", () => {
      openModal(project);
    });

    portfolioGrid.appendChild(portfolioItem);
  });

  // About Section
  document.getElementById("about-text").textContent = data.bio;

  const skillsContainer = document.getElementById("skills-container");
  skillsContainer.innerHTML = "";

  data.skills.forEach((skill) => {
    const skillTag = document.createElement("span");
    skillTag.className = "skill-tag";
    skillTag.textContent = skill;
    skillsContainer.appendChild(skillTag);
  });

  // Testimonials Section
  const testimonialsGrid = document.getElementById("testimonials-grid");
  testimonialsGrid.innerHTML = "";

  data.testimonials.forEach((testimonial) => {
    const testimonialCard = document.createElement("div");
    testimonialCard.className = "testimonial-card";

    const firstLetter = testimonial.name.charAt(0).toUpperCase();

    testimonialCard.innerHTML = `
                    <p class="testimonial-comment">"${testimonial.comment}"</p>
                    <div class="testimonial-author">
                        <div class="testimonial-avatar">${firstLetter}</div>
                        <span class="testimonial-name">${testimonial.name}</span>
                    </div>
                `;
    testimonialsGrid.appendChild(testimonialCard);
  });

  // Contact Links
  const contactLinks = document.getElementById("contact-links");
  contactLinks.innerHTML = "";

  const contactMethods = [
    {
      icon: "fa-envelope",
      title: "البريد الإلكتروني",
      value: data.contact.email,
      href: `mailto:${data.contact.email}`
    },
    {
      icon: "fa-brands fa-whatsapp",
      title: "واتساب",
      value: "تواصل عبر واتساب",
      href: data.contact.whatsapp
    },
    {
      icon: "fa-brands fa-linkedin",
      title: "لينكدإن",
      value: "تواصل عبر لينكدإن",
      href: data.contact.linkedin
    }
  ];

  contactMethods.forEach((method) => {
    const contactLink = document.createElement("a");
    contactLink.className = "contact-link";
    contactLink.href = method.href;
    contactLink.target = "_blank";
    contactLink.innerHTML = `
                    <div class="contact-icon">
                        <i class="${method.icon}"></i>
                    </div>
                    <div class="contact-link-text">
                        <h4>${method.title}</h4>
                        <p>${method.value}</p>
                    </div>
                `;
    contactLinks.appendChild(contactLink);
  });

  document.getElementById("current-year").textContent =
    new Date().getFullYear();
}

// Modal functionality
const modal = document.getElementById("portfolio-modal");
const modalClose = document.querySelector(".modal-close");

function openModal(project) {
  const imageSrc = project.image.startsWith("http")
    ? project.image
    : `assets/portfolio/${project.image}`;

  document.getElementById("modal-image").src = imageSrc;
  document.getElementById("modal-image").onerror = function () {
    this.src = `https://via.placeholder.com/700x400/1a1a1a/f4b400?text=${encodeURIComponent(project.title)}`;
  };
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-desc").textContent = project.desc;
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

modalClose.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "block") {
    closeModal();
  }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Scroll animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });
});
