async function submitForm() {
    
    const formData = {
        city: document.getElementById("city").value,
        net_area: parseFloat(document.getElementById("net_sqm").value),
        rooms: parseFloat(document.getElementById("rooms").value),
        bathrooms: parseInt(document.getElementById("bathrooms").value),
        heating: document.getElementById("heating").value,
        floor: document.getElementById("Floor").value, 
        total_floors: parseInt(document.getElementById("total_floors").value),
        building_age: parseInt(document.getElementById("age").value),
        usage_status: document.getElementById("usage").value,
        furnished: document.getElementById("furnished").checked,
        investment_suitable: document.getElementById("investment").checked,
        swap_available: document.getElementById("swap").checked
    };

    console.log("Sending Data:", formData);

    try {
        const response = await fetch("https://turkiye-house-price-prediction.onrender.com/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            const result = await response.json();
            

            document.getElementById("resultArea").classList.remove("hidden");

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