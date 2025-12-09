async function submitForm() {
    // 1. Gather data using the IDs from YOUR HTML file
    const formData = {
        city: document.getElementById("city").value,
        net_area: parseFloat(document.getElementById("net_sqm").value),
        rooms: parseFloat(document.getElementById("rooms").value),
        bathrooms: parseInt(document.getElementById("bathrooms").value),
        heating: document.getElementById("heating").value,
        floor: document.getElementById("Floor").value, // Note the capital 'F' in your HTML
        total_floors: parseInt(document.getElementById("total_floors").value),
        building_age: parseInt(document.getElementById("age").value),
        usage_status: document.getElementById("usage").value,
        furnished: document.getElementById("furnished").checked,
        investment_suitable: document.getElementById("investment").checked,
        swap_available: document.getElementById("swap").checked
    };

    // 2. Log data to console to verify (Debug step)
    console.log("Sending Data:", formData);

    // 3. Send to FastAPI
    try {
        const response = await fetch("http://127.0.0.1:8000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        // 4. Handle Response
        if (response.ok) {
            const result = await response.json();
            
            // Show the hidden result area
            document.getElementById("resultArea").classList.remove("hidden");
            
            // Update the price text
            document.getElementById("priceText").innerText = "₺ " + result.prediction.toLocaleString();
        } else {
            alert("Error: Server returned " + response.status);
            console.error(await response.text());
        }

    } catch (error) {
        console.error("Connection Error:", error);
        alert("Failed to connect to the backend. Is the terminal running?");
    }
}