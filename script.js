// Open course page
function openCourse(courseName) {
  localStorage.setItem("currentCourse", courseName);
  window.location.href = "course.html";
}

// Show course title
if (document.getElementById("courseTitle")) {
  document.getElementById("courseTitle").innerText =
    localStorage.getItem("currentCourse");
}

// Mark course complete
function markComplete() {
  let course = localStorage.getItem("currentCourse");
  let completed = JSON.parse(localStorage.getItem("completed")) || [];

  if (!completed.includes(course)) {
    completed.push(course);
  }

  localStorage.setItem("completed", JSON.stringify(completed));
  alert("Course Completed!");
}

// Show progress
if (document.getElementById("progressList")) {
  let completed = JSON.parse(localStorage.getItem("completed")) || [];
  let list = document.getElementById("progressList");

  completed.forEach(course => {
    let li = document.createElement("li");
    li.innerText = course;
    list.appendChild(li);
  });
}
