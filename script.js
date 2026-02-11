// DATA TIER: Mocked dataset representing the backend database
let bins = [
    { id: 1, location: "High Street - North", fill: 45 },
    { id: 2, location: "Westminster Library", fill: 82 },
    { id: 3, location: "Science Lab Entrance", fill: 15 },
    { id: 4, location: "Student Union", fill: 90 }
];

// LOGIC TIER: The "80% Alert" Algorithm
function renderBins() {
    const container = document.getElementById('bin-container');
    container.innerHTML = ''; 

    bins.forEach(bin => {
        // FR1: Trigger alert at 80% capacity - This is the core logic
        const isUrgent = bin.fill >= 80; 
        const statusLabel = isUrgent ? "URGENT - ACTION REQUIRED" : "Status: Normal";
        const cardClass = isUrgent ? "urgent" : "normal"; // Tells CSS which color to use

        container.innerHTML += `
            <div class="col-md-6 mb-3">
                <div class="card bin-card ${cardClass} shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">${bin.location}</h5>
                        <p class="card-text"><strong>${statusLabel}</strong></p>
                        <div class="progress">
                            <div class="progress-bar ${isUrgent ? 'bg-danger' : 'bg-success'}" style="width: ${bin.fill}%">
                                ${bin.fill}% Full
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    });
}

// FR2: Simulates real-world waste accumulation for the demo
function simulateUpdate() {
    bins.forEach(bin => {
        let change = Math.floor(Math.random() * 21) - 5; 
        bin.fill = Math.min(100, Math.max(0, bin.fill + change));
    });
    renderBins();
}
renderBins();