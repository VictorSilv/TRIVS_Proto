function doGet() {
  // Create a template from the main index file
  var template = HtmlService.createTemplateFromFile('Index');

  //create final template
  var output = template.evaluate();

    // Apply methods to the HtmlOutput object 'output'
    output
    .setTitle('UI Demo')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

  return output;
}

/**
 * Returns HTML content from a file, with caching and security checks.
 * This function is used for dynamic content loading.
 * @param {string} fileName The name of the HTML file to load
 * @return {string} The HTML content of the specified file
 */

function getHtmlContent(fileName) { 
  // Whitelist of allowed file names (for security purposes)
    const allowed = ['Dashboard', 'OrdersList', 'Stylesheet', 'JavaScript', 'LoginScreen'];
  
  // Check if the requested file is allowed
  if (!allowed.includes(fileName)) {
    throw new Error('Invalid view');
  }

  // Caching the HTML output to improve performance
  const cache = CacheService.getScriptCache();
  const key = 'html_' + fileName;

  // Try to retrieve the cached HTML content
  let html = cache.get(key);
  if (html) return html;

  // Otherwise, fetch the HTML content and store it in cache
  html = HtmlService.createHtmlOutputFromFile(fileName).getContent();
  
  cache.put(key, html, 300); // Cache for 5 minutes (300 seconds)

  return html;
}

/**
 * Serves the main HTML interface
 * @return {HtmlOutput} The HTML page
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
