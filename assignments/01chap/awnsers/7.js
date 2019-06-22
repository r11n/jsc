function gen60To100() {
    return (Math.floor(Math.random() * 41) + 60);
}

function randinRange(low, high) {
    return (Math.floor(Math.random() * (Math.abs(high - low) + 1)) + Math.min(low, high));
}