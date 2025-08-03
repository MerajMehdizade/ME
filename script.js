let currentLang = "fa";
let currentDay = "day1";

document.addEventListener("DOMContentLoaded", () => {
  updateWorkoutView();


  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentLang = btn.dataset.lang;
      document
        .querySelectorAll(".lang-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      updateWorkoutView();
    });
  });


  document.querySelectorAll(".day-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentDay = btn.dataset.day;
      document
        .querySelectorAll(".day-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      updateWorkoutView();
    });
  });
});

function updateWorkoutView() {
  document.querySelectorAll(".workout").forEach((div) => {
    const visible =
      div.dataset.lang === currentLang && div.dataset.day === currentDay;
    div.style.display = visible ? "block" : "none";
  });
}
