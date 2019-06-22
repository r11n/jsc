function isJSON(text) {
    try {
      JSON.parse(text);
      return true;
    } catch {
      return false;
    }
}
// likewise for a prototype function
Object.prototype.isJSON = function() { 
    try{
        JSON.parse(this);
        return true;
    } catch {
        return false
    }
}