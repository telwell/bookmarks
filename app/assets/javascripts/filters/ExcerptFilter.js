// Simple filter to display only the first 20 characters
// of string.
app.filter('excerpt', function() {
  return function(input) {
    return input.length > 20 ? input.slice(0,20) + '...' : input;
  };
});