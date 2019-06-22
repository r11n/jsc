String.prototype.jsonify = function(fallback_return = null) {
    try {
        return JSON.parse(this);
    } catch {
        return fallback_return;
    }
}