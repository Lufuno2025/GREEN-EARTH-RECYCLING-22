// Team data dynamically loaded
const teamMembers = [
  { name: "Nomvula", role: "Founder", image: "../Assets/nomvula team founder.webp" },
  { name: "Sipho", role: "Operations", image: "../Assets/sipho.jpg" },
  { name: "Aisha", role: "Community Coordinator", image: "../Assets/aisha.webp" },
  { name: "Thabo", role: "Recycling Specialist", image: "../Assets/THABO RECYCLE SPECIALIST.png" },
];

const teamGrid = document.getElementById("teamGrid");
const searchBar = document.getElementById("searchBar");

// Function to display team cards
function displayTeam(filteredMembers) {
  teamGrid.innerHTML = "";
  filteredMembers.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("team-card");
    card.innerHTML = `
      <a href="${member.image}" data-lightbox="team" data-title="${member.name} — ${member.role}">
        <img src="${member.image}" alt="${member.name}" />
      </a>
      <div class="team-name">${member.name} — ${member.role}</div>
    `;
    teamGrid.appendChild(card);
  });
}

// Search function
searchBar.addEventListener("input", e => {
  const query = e.target.value.toLowerCase();
  const filtered = teamMembers.filter(member =>
    member.name.toLowerCase().includes(query) ||
    member.role.toLowerCase().includes(query)
  );
  displayTeam(filtered);
});

// Initial render
displayTeam(teamMembers);
