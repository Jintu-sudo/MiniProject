// Conversion factors (Length in meters, Volume in liters, basic currency rates)
const conversionFactors = {
    length: {
      meter: 1,
      kilometer: 1000,
      centimeter: 0.01,
      mile: 1609.34,
      yard: 0.9144,
      foot: 0.3048,
    },
    volume: {
      liter: 1,
      milliliter: 0.001,
      gallon: 3.78541,
      quart: 0.946353,
      pint: 0.473176,
    },
    currency: {
      usd: 1,         // Assuming 1 USD as base
      eur: 0.85,      // Example conversion rate (USD to EUR)
      gbp: 0.75,      // Example conversion rate (USD to GBP)
      jpy: 110,       // Example conversion rate (USD to JPY)
    },
  };
  
  // Function to populate units based on selected type
  function populateUnits() {
    const unitType = document.getElementById("unitType").value;
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
  
    // Clear current options
    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";
  
    const units = conversionFactors[unitType];
    
    // Populate new options
    for (const unit in units) {
      const optionFrom = document.createElement("option");
      optionFrom.value = unit;
      optionFrom.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
      fromUnit.appendChild(optionFrom);
  
      const optionTo = document.createElement("option");
      optionTo.value = unit;
      optionTo.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
      toUnit.appendChild(optionTo);
    }
  }
  
  // Conversion Logic
  function convert() {
    const unitType = document.getElementById("unitType").value;
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
  
    if (isNaN(inputValue)) {
      alert("Please enter a valid number");
      return;
    }
  
    const conversionFactor = conversionFactors[unitType];
    const baseValue = inputValue * conversionFactor[fromUnit]; // Convert to base unit
    const convertedValue = baseValue / conversionFactor[toUnit]; // Convert to target unit
  
    document.getElementById("outputValue").textContent = convertedValue.toFixed(2);
  }
  
  // Initial population of units (for default type)
  window.onload = populateUnits;
  