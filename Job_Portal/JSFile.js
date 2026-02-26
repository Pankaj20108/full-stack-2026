// Select elements
const searchInput = document.querySelector(".search-box input");
const locationSelect = document.querySelector(".search-box select");
const searchButton = document.querySelector(".search-box button");
const jobList = document.querySelector(".job-list");

// ==========================
// 🔎 SEARCH FUNCTIONALITY
// ==========================
searchButton.addEventListener("click", function (e) {
  e.preventDefault();

  const searchText = searchInput.value.toLowerCase();
  const selectedLocation = locationSelect.value.toLowerCase();

  const jobs = document.querySelectorAll(".job-card");

  jobs.forEach(function (job) {
    const title = job.querySelector("h3").innerText.toLowerCase();
    const companyLocation = job.querySelector("p").innerText.toLowerCase();

    const matchTitle = title.includes(searchText);
    const matchLocation =
      selectedLocation === "location" ||
      companyLocation.includes(selectedLocation);

    if (matchTitle && matchLocation) {
      job.style.display = "block";
    } else {
      job.style.display = "none";
    }
  });
});


// ==========================
// ➕ POST NEW JOB FUNCTION
// ==========================

// Create Post Job Form Dynamically
const postSection = document.createElement("section");
postSection.style.padding = "40px";

postSection.innerHTML = `
  <h2>Post a New Job</h2>
  <form id="postForm">
    <input type="text" id="jobTitle" placeholder="Job Title" required>
    <input type="text" id="companyName" placeholder="Company Name" required>
    <input type="text" id="jobLocation" placeholder="Location" required>
    <input type="text" id="salary" placeholder="Salary (e.g. ₹5 LPA)" required>
    <button type="submit">Post Job</button>
  </form>
`;

document.body.appendChild(postSection);

// Handle Form Submit
const postForm = document.getElementById("postForm");

postForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("jobTitle").value;
  const company = document.getElementById("companyName").value;
  const location = document.getElementById("jobLocation").value;
  const salary = document.getElementById("salary").value;

  // Create New Job Card
  const newJob = document.createElement("div");
  newJob.classList.add("job-card");

  newJob.innerHTML = `
      <h3>${title}</h3>
      <p>${company} · ${location}</p>
      <p class="salary">${salary}</p>
      <button>Apply</button>
  `;

  jobList.appendChild(newJob);

  alert("Job Posted Successfully!");

  postForm.reset();
});