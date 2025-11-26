const roles = [
    "Dead",
    "Found the Body",
    "Suspect 1",
    "Suspect 2",
    "Jailed",
    "Who Did It"
];

const roleButtonText = {
    "Dead": "Reveal Victim",
    "Found the Body": "Reveal Who Found The Body",
    "Suspect 1": "Reveal First Suspect",
    "Suspect 2": "Reveal Second Suspect", 
    "Jailed": "Reveal Who Got Jailed",
    "Who Did It": "Reveal The Culprit"
};

const teams = {
    mercedes: {
        fullName: "Mercedes-AMG Petronas F1 Team",
        logo: "images/mercedes.png",
        primaryColor: "#00D2BE"
    },
    redbull: {
        fullName: "Oracle Red Bull Racing",
        logo: "images/redbull.jpg",
        primaryColor: "#3671C6"
    },
    ferrari: {
        fullName: "Scuderia Ferrari",
        logo: "images/ferrari.webp",
        primaryColor: "#DC0000"
    },
    mclaren: {
        fullName: "McLaren F1 Team",
        logo: "images/mclaren.jpg",
        primaryColor: "#FF8000"
    },
    alpine: {
        fullName: "BWT Alpine F1 Team",
        logo: "images/alpine.png",
        primaryColor: "#0090FF"
    },
    astonmartin: {
        fullName: "Aston Martin Aramco F1 Team",
        logo: "images/astonmartin.jpg",
        primaryColor: "#006F62"
    },
    williams: {
        fullName: "Williams Racing",
        logo: "images/williams.png",
        primaryColor: "#005AFF"
    },
    rb: {
        fullName: "Visa Cash App RB F1 Team",
        logo: "images/rb.png",
        primaryColor: "#6692FF"
    },
    sauber: {
        fullName: "Stake F1 Team Kick Sauber",
        logo: "images/kick.webp",
        primaryColor: "#52E252"
    },
    haas: {
        fullName: "MoneyGram Haas F1 Team",
        logo: "images/haas.png",
        primaryColor: "#B6BABD"
    }
};

const drivers = [
    { name: "Lando Norris", team: "mclaren", number: "4", photo: "images/norris.webp" },
    { name: "Oscar Piastri", team: "mclaren", number: "81", photo: "images/piastri.webp" },
    { name: "Max Verstappen", team: "redbull", number: "1", photo: "images/verstappen.webp" },
    { name: "Yuki Tsunoda", team: "redbull", number: "22", photo: "images/tsunoda.webp" },
    { name: "George Russell", team: "mercedes", number: "63", photo: "images/russell.webp" },
    { name: "Kimi Antonelli", team: "mercedes", number: "47", photo: "images/antonelli.webp" },
    { name: "Charles Leclerc", team: "ferrari", number: "16", photo: "images/leclerc.webp" },
    { name: "Lewis Hamilton", team: "ferrari", number: "44", photo: "images/hamilton.webp" },
    { name: "Carlos Sainz", team: "williams", number: "55", photo: "images/sainz.webp" },
    { name: "Alexander Albon", team: "williams", number: "23", photo: "images/albon.webp" },
    { name: "Oliver Bearman", team: "haas", number: "87", photo: "images/bearman.webp" },
    { name: "Esteban Ocon", team: "haas", number: "31", photo: "images/ocon.webp" },
    { name: "Fernando Alonso", team: "astonmartin", number: "14", photo: "images/alonso.webp" },
    { name: "Lance Stroll", team: "astonmartin", number: "18", photo: "images/stroll.webp" },
    { name: "Liam Lawson", team: "rb", number: "40", photo: "images/lawson.webp" },
    { name: "Isack Hadjar", team: "rb", number: "37", photo: "images/hadjar.webp" },
    { name: "Gabriel Bortoleto", team: "sauber", number: "99", photo: "images/bortoleto.webp" },
    { name: "Nico Hulkenberg", team: "sauber", number: "27", photo: "images/hulkenberg.webp" },
    { name: "Pierre Gasly", team: "alpine", number: "10", photo: "images/gasly.webp" },
    { name: "Franco Colapinto", team: "alpine", number: "12", photo: "images/colapinto.webp" }
];

const circuits = [
    {
        name: "Bahrain Grand Prix",
        location: "Sakhir",
        country: "Bahrain",
        photo: "images/bahrain.jpg"
    },
    {
        name: "Saudi Arabian Grand Prix",
        location: "Jeddah",
        country: "Saudi Arabia",
        photo: "images/jeddah.webp"
    },
    {
        name: "Australian Grand Prix",
        location: "Melbourne",
        country: "Australia",
        photo: "images/melbourne.jpg"
    },
    {
        name: "Japanese Grand Prix",
        location: "Suzuka",
        country: "Japan",
        photo: "images/suzuka.avif"
    },
    {
        name: "Chinese Grand Prix",
        location: "Shanghai",
        country: "China",
        photo: "images/shanghai.jpg"
    },
    {
        name: "Miami Grand Prix",
        location: "Miami",
        country: "USA",
        photo: "images/miami.webp"
    },
    {
        name: "Emilia Romagna Grand Prix",
        location: "Imola",
        country: "Italy",
        photo: "images/imola.jpg"
    },
    {
        name: "Monaco Grand Prix",
        location: "Monte Carlo",
        country: "Monaco",
        photo: "images/monaco.webp"
    },
    {
        name: "Spanish Grand Prix",
        location: "Barcelona",
        country: "Spain",
        photo: "images/barcelona.png"
    },
    {
        name: "Canadian Grand Prix",
        location: "Montreal",
        country: "Canada",
        photo: "images/montreal.jpg"
    },
    {
        name: "Austrian Grand Prix",
        location: "Spielberg",
        country: "Austria",
        photo: "images/spielberg.jpg"
    },
    {
        name: "British Grand Prix",
        location: "Silverstone",
        country: "UK",
        photo: "images/silverstone.jpg"
    },
    {
        name: "Hungarian Grand Prix",
        location: "Budapest",
        country: "Hungary",
        photo: "images/budapest.avif"
    },
    {
        name: "Belgian Grand Prix",
        location: "Spa-Francorchamps",
        country: "Belgium",
        photo: "images/spa.jpg"
    },
    {
        name: "Dutch Grand Prix",
        location: "Zandvoort",
        country: "Netherlands",
        photo: "images/zandvoort.avif"
    },
    {
        name: "Italian Grand Prix",
        location: "Monza",
        country: "Italy",
        photo: "images/monza.jpg"
    },
    {
        name: "Azerbaijan Grand Prix",
        location: "Baku",
        country: "Azerbaijan",
        photo: "images/baku.png"
    },
    {
        name: "Singapore Grand Prix",
        location: "Singapore",
        country: "Singapore",
        photo: "images/singapore.avif"
    },
    {
        name: "United States Grand Prix",
        location: "Austin",
        country: "USA",
        photo: "images/austin.avif"
    },
    {
        name: "Mexico City Grand Prix",
        location: "Mexico City",
        country: "Mexico",
        photo: "images/mexico.jpg"
    },
    {
        name: "São Paulo Grand Prix",
        location: "São Paulo",
        country: "Brazil",
        photo: "images/interlagos.jpg"
    },
    {
        name: "Las Vegas Grand Prix",
        location: "Las Vegas",
        country: "USA",
        photo: "images/vegas.jpg"
    },
    {
        name: "Qatar Grand Prix",
        location: "Lusail",
        country: "Qatar",
        photo: "images/qatar.avif"
    },
    {
        name: "Abu Dhabi Grand Prix",
        location: "Yas Marina",
        country: "UAE",
        photo: "images/abudhabi.jpg"
    }
];

let currentStep = 0;
let assignedRoles = {};
let deadDriver = null;
let selectedCircuit = null;

const circuitSelection = document.getElementById('circuitSelection');
const mainContent = document.getElementById('mainContent');
const subtitle = document.getElementById('subtitle');
const circuitsGrid = document.getElementById('circuitsGrid');
const revealedDrivers = document.getElementById('revealedDrivers');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const resetBtn = document.getElementById('resetBtn');
const driversGrid = document.getElementById('driversGrid');
const loadingScreen = document.getElementById('loadingScreen');
const loadingCircuitName = document.getElementById('loadingCircuitName');

function initGame() {
    currentStep = 0;
    assignedRoles = {};
    deadDriver = null;
    selectedCircuit = null;

    circuitSelection.style.display = 'block';
    mainContent.style.display = 'none';
    subtitle.textContent = 'Formula 1 2025';

    revealedDrivers.innerHTML = '';
    startBtn.disabled = false;
    nextBtn.disabled = true;
    nextBtn.textContent = 'Reveal Next Driver'; 

    renderCircuitsGrid();
    renderDriversGrid();
}

function startGame() {
    if (!selectedCircuit) {
        alert('Please select a circuit first!');
        return;
    }
    
    currentStep = 0;
    assignedRoles = {};
    deadDriver = null;
    revealedDrivers.innerHTML = '';
    
    startBtn.disabled = true;
    nextBtn.disabled = false;
    updateNextButtonText(); 
    revealRole();
}

function getRandomDriver(excludeDead = true) {
    let availableDrivers = [...drivers];

    if (excludeDead && deadDriver) {
        availableDrivers = availableDrivers.filter(driver => driver.name !== deadDriver.name);
    }

    return availableDrivers[Math.floor(Math.random() * availableDrivers.length)];
}

function applyTeamColors(photoContainer, numberElement, team) {
    const teamData = teams[team];
    if (teamData) {
        photoContainer.style.background = teamData.primaryColor;
        numberElement.style.color = teamData.primaryColor;
        numberElement.style.borderColor = teamData.primaryColor;
    }
}

function revealRole() {
    if (currentStep >= roles.length) {
        nextBtn.disabled = true;
        updateNextButtonText(); 
        return;
    }

    const role = roles[currentStep];
    let driver;

    if (role === "Dead") {
        driver = drivers[Math.floor(Math.random() * drivers.length)];
        deadDriver = driver;
    } else {
        driver = getRandomDriver(true); 
    }

    assignedRoles[role] = driver;
    const driverReveal = document.createElement('div');
    driverReveal.className = `driver-reveal ${getRoleClass(role)}`;

    driverReveal.innerHTML = `
        <div class="role-title">${role}:</div>
        <div class="driver-info">
            <div class="driver-photo-container">
                <img class="driver-photo" src="${driver.photo}" alt="${driver.name}">
            </div>
            <div class="driver-details">
                <div class="driver-name-number">
                    <div class="driver-name">${driver.name}</div>
                    <div class="driver-number">${driver.number}</div>
                </div>
                <div class="team-info">
                    <img class="team-logo" src="${teams[driver.team].logo}" alt="${teams[driver.team].fullName}">
                    <span class="team-name">${teams[driver.team].fullName}</span>
                </div>
            </div>
        </div>
    `;

    const photoContainer = driverReveal.querySelector('.driver-photo-container');
    const numberElement = driverReveal.querySelector('.driver-number');
    applyTeamColors(photoContainer, numberElement, driver.team);

    revealedDrivers.appendChild(driverReveal);
    revealedDrivers.scrollTop = revealedDrivers.scrollHeight;
    renderDriversGrid();
    
    currentStep++;
    updateNextButtonText();
    
    if (currentStep >= roles.length) {
        nextBtn.disabled = true;
    }
}

function updateNextButtonText() {
    if (currentStep < roles.length) {
        nextBtn.textContent = roleButtonText[roles[currentStep]];
    } else {
        nextBtn.textContent = 'Case Solved!';
    }
}

function getRoleClass(role) {
    switch (role) {
        case "Dead": return "dead";
        case "Found the Body": return "found-body";
        case "Suspect 1":
        case "Suspect 2": return "suspect";
        case "Jailed": return "jailed";
        case "Who Did It": return "culprit";
        default: return "";
    }
}

function renderDriversGrid() {
    driversGrid.innerHTML = '';

    drivers.forEach(driver => {
        const card = document.createElement('div');
        card.className = 'driver-card';
        let role = '';
        let isDead = false;

        for (const [r, d] of Object.entries(assignedRoles)) {
            if (d.name === driver.name) {
                role = r;
                card.classList.add('assigned');
                if (r === "Dead") {
                    card.classList.add('dead');
                    isDead = true;
                }
                break;
            }
        }

        card.innerHTML = `
            <div class="driver-photo-container-small">
                <img class="driver-photo-small" src="${driver.photo}" alt="${driver.name}">
            </div>
            <div class="driver-name-number-small">
                <div class="driver-name-small">${driver.name}</div>
                <div class="driver-number-small">${driver.number}</div>
            </div>
            <div class="team-info-small">
                <img class="team-logo-small" src="${teams[driver.team].logo}" alt="${teams[driver.team].fullName}">
                <span class="team-name-small">${teams[driver.team].fullName}</span>
            </div>
            <div class="driver-role">${role || ''}</div>
        `;

        const photoContainer = card.querySelector('.driver-photo-container-small');
        const numberElement = card.querySelector('.driver-number-small');
        applyTeamColors(photoContainer, numberElement, driver.team);

        driversGrid.appendChild(card);
    });
}

function renderCircuitsGrid() {
    circuitsGrid.innerHTML = '';
    
    circuits.forEach(circuit => {
        const card = document.createElement('div');
        card.className = 'circuit-card';
        card.innerHTML = `
            <div class="circuit-photo-container">
                <img class="circuit-photo" src="${circuit.photo}" alt="${circuit.name}">
            </div>
            <div class="circuit-name">${circuit.name}</div>
            <div class="circuit-location">${circuit.location}</div>
            <div class="circuit-country">${circuit.country}</div>
        `;
        
        card.addEventListener('click', () => selectCircuit(circuit, card));
        circuitsGrid.appendChild(card);
    });
}

function showLoadingScreen(circuitName) {
    loadingCircuitName.textContent = circuitName;
    loadingScreen.classList.add('active');

    setTimeout(() => {
        hideLoadingScreen();
    }, 3000);
}

function hideLoadingScreen() {
    loadingScreen.classList.remove('active');
    setTimeout(() => {
        circuitSelection.style.display = 'none';
        mainContent.style.display = 'grid';
    }, 1);
}

function selectCircuit(circuit, cardElement) {
    document.querySelectorAll('.circuit-card').forEach(card => {
        card.classList.remove('selected');
    });
    cardElement.classList.add('selected');
    selectedCircuit = circuit;
    subtitle.textContent = `Formula 1 2025 ${circuit.name}`;
    showLoadingScreen(circuit.name);
}

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', revealRole);
resetBtn.addEventListener('click', initGame);
window.addEventListener('DOMContentLoaded', () => {
    initGame();
    renderCircuitsGrid();
});