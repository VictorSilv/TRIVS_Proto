/**
 * Centralized logging utility.
 * Handles error persistence and safe fallback logging.
 */

(function initializeErrorLog() {
  try {
    const ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
    let sheet = ss.getSheetByName(CONFIG.SHEET_NAMES.ERROR_LOG);

    if (!sheet) {
      sheet = ss.insertSheet(CONFIG.SHEET_NAMES.ERROR_LOG);
      sheet.appendRow(['timestamp', 'source', 'message', 'stack']);
      sheet.hideSheet();
    }
  } catch (err) {
    console.error('Failed to initialize error log', err);
  }
})();

function logError(source, error) {
  try {
    const sheet = SpreadsheetApp
      .openById(CONFIG.SPREADSHEET_ID)
      .getSheetByName(CONFIG.SHEET_NAMES.ERROR_LOG);

    sheet.appendRow([
      new Date(),
      source,
      error.message || error,
      error.stack || ''
    ]);
  } catch (err) {
    console.error('Critical logging failure', err);
  }
}
