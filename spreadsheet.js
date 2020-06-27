const GoogleSpreadsheet = require('google-spreadsheet');

const { promisify } = require('util');

const creds = require('./client_secret.json');

async function dataToSpreadSheet() {

    const doc = new GoogleSpreadsheet('1kZ2On4hANcuBVBitjJ47Qk8LCBu0EI2DlrfbVkzKy2c');
    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();
    const sheet = info.worksheets[0];

    const row = {
        CourseName: "Aditya 123",
        Certificate: "Elite",
        Year: "2019"
    }

    await promisify(sheet.addRow)(row);
}

dataToSpreadSheet();
