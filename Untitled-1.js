// script.js

function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const data = new Uint8Array(e.target.result);

            // Load the Excel file
            const workbook = XLSX.read(data, { type: 'array' });

            // Get the first sheet
            const firstSheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[firstSheetName];

            // Convert the sheet to JSON
            const jsonData = XLSX.utils.sheet_to_json(sheet);

            // Log the JSON data to the console
            console.log('JSON Data:', jsonData);

            // Perform org chart generation logic here
            // This is where you would use jsonData to generate your org chart
            // For simplicity, let's just log a message for now
            console.log('Org Chart Generation Logic Goes Here');
        };

        // Read the file as an ArrayBuffer
        reader.readAsArrayBuffer(file);
    }
}
