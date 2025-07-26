document.addEventListener("DOMContentLoaded", function () {
  // ===== Modal Handling =====
  const registerModal = document.getElementById("registerModal");
  const volunteerModal = document.getElementById("volunteerModal");

  // Open modals
  document.querySelectorAll(".register-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      if (registerModal) registerModal.style.display = "block";
    });
  });

  document.querySelectorAll("button[onclick='openForm()']").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      if (volunteerModal) volunteerModal.style.display = "block";
    });
  });

  // Close modals
  document.querySelectorAll(".modal .close").forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      if (modal) modal.style.display = "none";
    });
  });

  // ===== Lightbox Handling =====
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");

  window.openLightbox = function (img, caption) {
    if (lightbox && lightboxImg && lightboxCaption) {
      lightboxImg.src = img;
      lightboxCaption.innerText = caption;
      lightbox.style.display = "block";
    }
  };

  window.closeLightbox = function () {
    if (lightbox) lightbox.style.display = "none";
  };

  // ===== Gallery Filter =====
  window.filterGallery = function (category) {
    const items = document.querySelectorAll('.photo-item');
    const buttons = document.querySelectorAll('.filter-buttons button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    items.forEach(item => {
      item.style.display = category === 'all' || item.classList.contains(category) ? 'block' : 'none';
    });
  };

  // ===== Tab Switching =====
  window.switchTab = function (tabId) {
    const allTabs = document.querySelectorAll('.cards, .tab-content');
    const allBtns = document.querySelectorAll('.tab, .tab-btn');

    allTabs.forEach(tab => tab.classList.remove('active', 'hidden'));
    allBtns.forEach(btn => btn.classList.remove('active'));

    const targetTab = document.getElementById(tabId);
    if (targetTab) targetTab.classList.add('active');

    allBtns.forEach(btn => {
      if (btn.getAttribute('onclick')?.includes(tabId)) {
        btn.classList.add('active');
      }
    });
  };

  // ===== Counter Animation =====
  const counters = document.querySelectorAll('.counter');
  if (counters.length) {
    counters.forEach(counter => {
      counter.innerText = '0';
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200;
        if (count < target) {
          counter.innerText = `${Math.ceil(count + increment)}`;
          setTimeout(updateCounter, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  }

  // ===== Donation Amount Auto-Fill =====
  const amountBtns = document.querySelectorAll('.amount-btn');
  const customAmountInput = document.querySelector('input[name="customAmount"]');
  if (amountBtns && customAmountInput) {
    amountBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const amount = btn.innerText.replace('₹', '');
        customAmountInput.value = amount;
      });
    });
  }

  // ===== Form Submission (Reset + Alert) =====
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert("✅ Your form was submitted successfully!");
      form.reset();
    });
  });
});










// events

document.addEventListener("DOMContentLoaded", function () {
  // ===== Modal Control =====
  const modal = document.getElementById("registerModal");
  const openBtns = document.querySelectorAll(".register-btn");
  const closeBtn = document.querySelector("#registerModal .close");

  openBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      if (modal) modal.style.display = "block";
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  // ===== Form Submission with Alert & Reset =====
  const form = document.getElementById("eventForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("✅ Thank you! Your registration was submitted.");
      form.reset();
      if (modal) modal.style.display = "none";
    });
  }

  // ===== Gallery Tabs =====
  window.showGallery = function (tabId) {
    const tabs = document.querySelectorAll(".gallery-content");
    const buttons = document.querySelectorAll(".tab-btn");

    tabs.forEach(tab => tab.classList.add("hidden"));
    buttons.forEach(btn => btn.classList.remove("active"));

    const target = document.getElementById(tabId);
    if (target) {
      target.classList.remove("hidden");
    }

    const btn = Array.from(buttons).find(b => b.getAttribute("onclick").includes(tabId));
    if (btn) btn.classList.add("active");
  };
});



// initavates

document.addEventListener("DOMContentLoaded", function () {
  const volunteerModal = document.getElementById("volunteerModal");

  // Open modal
  document.querySelectorAll("button[onclick='openForm()']").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      if (volunteerModal) volunteerModal.style.display = "block";
    });
  });

  // Close modal
  const closeBtn = document.querySelector("#volunteerModal .close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      volunteerModal.style.display = "none";
    });
  }

  // Handle form submission
  const form = document.getElementById("volunteerForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("🎉 Thank you for signing up as a volunteer!");
      form.reset();
      volunteerModal.style.display = "none";
    });
  }
});









//Firebase

