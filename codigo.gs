function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('UI Demo')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
function getDemoImage() {
  // Option 1: Return a base64 encoded PNG (small demo image)
  //const demoImageBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGFSURBVHgB7dpRDoIwEAXQzp6By+gZvIyewcsYGbzMHoaQkLCwS2E6k/eS0CZD6dC0LXmM5Jg0fS3P8yxvnX4oCe7L/Yq+3ocAARIgQAIESIAACRAgAQIkQIAECJAAARIgQAIESIAACRAgAQIkQIAECJAAARIgQAIESIAECJAAARIgQAIESIAACRAgAQIkQIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAARIgQAIESIAECJAAAfI/Asa03w/tvP5e9sfAHz4GLmEAAAAASUVORK5CYII=';
  
  // Option 2: Return a URL to an image (uncomment and replace with your URL)
  return 'https://www.dropbox.com/scl/fi/v7bj219c4sz7irj4uxsvy/Design.png?rlkey=mmqgbxk3wj6bilaxt6wz90mro&st=p7ae6xdq&dl=1';
  
}
/**
 * Serves the main HTML interface
 * @return {HtmlOutput} The HTML page
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
