function calculateNSSF() {
    const age = document.getElementById('age').value;
    const yearsWorked = document.getElementById('yearsWorked').value;
    const salary = document.getElementById('salary').value;

    if (!age || !yearsWorked || !salary) {
        alert('Please fill out all fields');
        return;
    }

    const retirementAge = 55;
    const nssfPercentage = 0.10;
    const monthsInYear = 12;

    const yearsToRetirement = retirementAge - age;
    const totalNSSF = yearsWorked * monthsInYear * (nssfPercentage * salary);

    document.getElementById('result').innerHTML = `
        <p>Years to Retirement: ${yearsToRetirement}</p>
        <p>Total NSSF Accumulated: UGX ${totalNSSF.toFixed(2)}</p>
    `;
}
