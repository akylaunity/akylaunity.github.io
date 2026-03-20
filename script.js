window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("supportForm");
  const statusText = document.getElementById("supportStatus");

  if (!form) {
    console.error("Форма supportForm не найдена");
    return;
  }

  emailjs.init("BS5kbPkqYlLOaR89O");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (statusText) {
      statusText.textContent = "Отправка заявки...";
    }

    emailjs.send("service_yrk7q4b", "template_w5uaqzd", {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      category: document.getElementById("category").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value
    })
    .then(function () {
      if (statusText) {
        statusText.textContent = "Заявка успешно отправлена.";
      }
      form.reset();
      alert("✅ Сообщение отправлено!");
    })
    .catch(function (error) {
      console.error("EmailJS ошибка:", error);
      if (statusText) {
        statusText.textContent = "Ошибка при отправке заявки.";
      }
      alert("❌ Ошибка отправки. Открой F12 → Console");
    });
  });
});
const toggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  if (toggle) toggle.textContent = "☀️";
} else {
  if (toggle) toggle.textContent = "🌙";
}

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      localStorage.setItem("theme", "light");
      toggle.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "dark");
      toggle.textContent = "🌙";
    }
  });
}