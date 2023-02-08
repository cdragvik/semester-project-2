// Function to save key/value in localStorage 
export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}


// Function to get saved item from localStorage based on keyName
export function load(key) {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
}

// Function that removes an item from localStorage based on keyName
export function remove(key) {
    const value = localStorage.removeItem(key);
}

// Function thet clears the whole localStorage for all items 
export function clear() {
    localStorage.clear();
}