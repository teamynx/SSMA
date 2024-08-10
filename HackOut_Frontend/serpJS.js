const missions = [
    { name: "Apollo 11", date: "July 16, 1969", failureCause: "None", precautions: "N/A" },
    { name: "Mars Climate Orbiter", date: "December 11, 1998", failureCause: "Metric Conversion Error", precautions: "Use standardized measurements" },
    { name: "Challenger STS-51-L", date: "January 28, 1986", failureCause: "O-ring failure", precautions: "Thorough testing and quality checks" },
    { name: "Columbia STS-107", date: "January 16, 2003", failureCause: "Foam strike on wing", precautions: "Enhanced inspection protocols" }
];

function searchMissions() {
    const criteria = document.getElementById("search-criteria").value;
    const searchQuery = document.getElementById("search-bar").value.toLowerCase();
    const resultsTable = document.querySelector("#results-table tbody");
    resultsTable.innerHTML = '';

    const filteredMissions = missions.filter(mission => mission[criteria].toLowerCase().includes(searchQuery));

    if (filteredMissions.length > 0) {
        filteredMissions.forEach(mission => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${mission.name}</td>
                <td>${mission.date}</td>
                <td>${mission.failureCause}</td>
                <td>${mission.precautions}</td>
            `;
            resultsTable.appendChild(tr);
        });
    } else {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td colspan="4">No results found.</td>`;
        resultsTable.appendChild(tr);
    }
}