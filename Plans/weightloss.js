function calculateTDEE() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseFloat(document.getElementById('age').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const activityLevel = parseFloat(document.getElementById('activity').value);

    let bmr;

    if (gender === 'male') {
        // BMR for men: 88.362 + (13.397 × weight) + (4.799 × height) − (5.677 × age)
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        // BMR for women: 447.593 + (9.247 × weight) + (3.098 × height) − (4.330 × age)
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Calculate TDEE
    const tdee = bmr * activityLevel;

    // Display result
    document.getElementById('result').innerHTML = `Your Total Daily Energy Expenditure (TDEE) is <strong>${Math.round(tdee)} calories</strong> per day.`;
}
