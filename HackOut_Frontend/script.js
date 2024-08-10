const facts = [
    "The first satellite, Sputnik 1, was launched by the Soviet Union in 1957.",
    "Apollo 11 was the first mission to land humans on the Moon in 1969.",
    "ISRO’s Mars Orbiter Mission made India the first country to reach Mars on its first attempt.",
    "The Hubble Space Telescope was launched into low Earth orbit in 1990 and remains in operation.",
    "The Space Shuttle was the first reusable spacecraft."
];

window.onload = function() {
    displayRandomFact();
};

function displayRandomFact() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("fact").innerText = randomFact;
}

function searchMissions() {
    // Function to handle mission search - can be expanded based on database integration
    alert("Search functionality to be implemented.");
}
