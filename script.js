// ─── THEME ───
const toggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  if (theme === "light") {
    document.body.classList.add("light");
    if (toggle) toggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
  } else {
    document.body.classList.remove("light");
    if (toggle) toggle.innerHTML = '<i class="fa-regular fa-moon"></i>';
  }
}

applyTheme(localStorage.getItem("theme") || "dark");

if (toggle) {
  toggle.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    toggle.innerHTML = isLight ? '<i class="fa-regular fa-sun"></i>' : '<i class="fa-regular fa-moon"></i>';
  });
}

// ─── ACTIVE NAV LINK ───
document.querySelectorAll(".nav-link, .nav-btn").forEach(link => {
  if (link.getAttribute("href") === window.location.pathname.split("/").pop()) {
    link.classList.add("active");
  }
});

// ─── SUPPORT FORM (EmailJS) ───
window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("supportForm");
  const statusText = document.getElementById("supportStatus");

  if (!form) return;

  if (typeof emailjs !== "undefined") {
    emailjs.init("BS5kbPkqYlLOaR89O");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (statusText) {
      statusText.textContent = "Отправка...";
      statusText.className = "form-status";
    }

    emailjs.send("service_yrk7q4b", "template_w5uaqzd", {
      name:     document.getElementById("name").value,
      email:    document.getElementById("email").value,
      category: document.getElementById("category").value,
      subject:  document.getElementById("subject").value,
      message:  document.getElementById("message").value
    })
    .then(function () {
      if (statusText) {
        statusText.textContent = "Заявка успешно отправлена";
        statusText.className = "form-status ok";
      }
      form.reset();
    })
    .catch(function (error) {
      console.error("EmailJS error:", error);
      if (statusText) {
        statusText.textContent = "Ошибка отправки. Попробуйте позже.";
        statusText.className = "form-status err";
      }
    });
  });
});
