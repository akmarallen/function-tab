const tabButtons = document.querySelectorAll(".tablink");
const tabs = document.querySelectorAll(".tabs_content > div");

// Функция для скрытия всех вкладок и удаления класса "active" со всех кнопок
function hideAllTabs() {
  tabs.forEach((tab) => (tab.style.display = "none"));
  tabButtons.forEach((btn) => btn.classList.remove("active"));
}

// Функция для отображения вкладки и добавления класса "active" кнопке
function showTab(tabId) {
  hideAllTabs();
  document.getElementById(tabId).style.display = "block";
  document
    .querySelector(`.tablink[data-id="${tabId}"]`)
    .classList.add("active");
}

// При загрузке страницы отображаем вкладку "Home" по умолчанию
document.addEventListener("DOMContentLoaded", () => {
  showTab("Home");
});

// Добавляем обработчики событий для всех кнопок вкладок
tabButtons.forEach((item) => {
  item.addEventListener("click", () => {
    showTab(item.dataset.id);
  });
});
