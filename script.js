const internships = [
  {
    title: "Java Backend Intern",
    company: "TechNova Labs",
    location: "Hyderabad",
    mode: "Hybrid",
    type: "Paid",
    duration: "3 months",
    skills: ["Java", "Spring Boot", "MySQL"],
    description: "Build REST APIs and backend features while working with an engineering team."
  },
  {
    title: "Frontend Development Intern",
    company: "PixelCraft",
    location: "Remote",
    mode: "Remote",
    type: "Paid",
    duration: "2 months",
    skills: ["HTML", "CSS", "JavaScript"],
    description: "Create responsive, accessible interfaces for real student-focused products."
  },
  {
    title: "AI/ML Intern",
    company: "DataSphere AI",
    location: "Bengaluru",
    mode: "On-site",
    type: "Paid",
    duration: "6 months",
    skills: ["Python", "Machine Learning", "AI"],
    description: "Assist with data preparation, model experiments, and AI product prototypes."
  },
  {
    title: "Cloud & DevOps Intern",
    company: "CloudBridge",
    location: "Pune",
    mode: "Hybrid",
    type: "Paid",
    duration: "4 months",
    skills: ["AWS", "Docker", "Linux"],
    description: "Learn deployment workflows, cloud infrastructure, and CI/CD practices."
  },
  {
    title: "Full Stack Developer Intern",
    company: "CodeNest",
    location: "Chennai",
    mode: "Hybrid",
    type: "Paid",
    duration: "3 months",
    skills: ["Java", "React", "MySQL"],
    description: "Work across frontend and backend features in a collaborative development team."
  },
  {
    title: "Data Analyst Intern",
    company: "InsightWorks",
    location: "Remote",
    mode: "Remote",
    type: "Paid",
    duration: "3 months",
    skills: ["SQL", "Excel", "Power BI"],
    description: "Turn business data into useful reports and insights for decision makers."
  }
];

const list = document.getElementById("internshipList");
const emptyState = document.getElementById("emptyState");
const resultCount = document.getElementById("resultCount");
const form = document.getElementById("searchForm");

function renderInternships(items) {
  list.innerHTML = "";

  items.forEach((internship) => {
    const card = document.createElement("article");
    card.className = "card";

    const tags = internship.skills
      .map((skill) => `<li>${skill}</li>`)
      .join("");

    card.innerHTML = `
      <div class="card-top">
        <div>
          <h3>${internship.title}</h3>
          <p class="company">${internship.company}</p>
        </div>
        <span class="badge">${internship.type}</span>
      </div>

      <p class="description">${internship.description}</p>

      <ul class="tags" aria-label="Required skills">
        ${tags}
      </ul>

      <div class="card-bottom">
        <p class="meta">${internship.location} · ${internship.mode}<br>${internship.duration}</p>
        <a class="apply-btn" href="#apply" aria-label="Apply for ${internship.title} at ${internship.company}">Apply</a>
      </div>
    `;

    list.appendChild(card);
  });

  resultCount.textContent = `${items.length} internship${items.length === 1 ? "" : "s"} found`;
  emptyState.hidden = items.length !== 0;
}

function filterInternships(event) {
  event.preventDefault();

  const keyword = document.getElementById("keyword").value.trim().toLowerCase();
  const location = document.getElementById("location").value;
  const mode = document.getElementById("mode").value;

  const filtered = internships.filter((item) => {
    const searchable = [
      item.title,
      item.company,
      item.description,
      ...item.skills
    ].join(" ").toLowerCase();

    const keywordMatch = !keyword || searchable.includes(keyword);
    const locationMatch = location === "all" || item.location === location;
    const modeMatch = mode === "all" || item.mode === mode;

    return keywordMatch && locationMatch && modeMatch;
  });

  renderInternships(filtered);
}

form.addEventListener("submit", filterInternships);
renderInternships(internships);
