/**
 * Low-level data access layer.
 * This file is the ONLY place allowed to touch SpreadsheetApp.
 */

function getSheet(sheetName) {
  return SpreadsheetApp
    .openById(CONFIG.SPREADSHEET_ID)
    .getSheetByName(sheetName);
}

function getAllRows(sheetName) {
  const sheet = getSheet(sheetName);
  return sheet.getDataRange().getValues().slice(1);
}

function appendRow(sheetName, rowArray) {
  const sheet = getSheet(sheetName);
  sheet.appendRow(rowArray);
}

function updateRowById(sheetName, idColumnIndex, idValue, updaterFn) {
  const sheet = getSheet(sheetName);
  const range = sheet.getDataRange();
  const values = range.getValues();

  for (let i = 1; i < values.length; i++) {
    if (values[i][idColumnIndex] === idValue) {
      updaterFn(values[i]);
      range.getCell(i + 1, 1, 1, values[i].length).setValues([values[i]]);
      return true;
    }
  }
  return false;
}
