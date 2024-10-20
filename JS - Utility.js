// JavaScript Utility Functions
// Print console
const { log, info, warn, error } = console;


// querySelector
const select = (selector, scope = document) => {
    return scope.querySelector(selector);
};


// addEventListener
const listen = (target, event, callback, ...options) => {
    return target.addEventListener(event, callback, ...options);
};
// listen(buttonEl, "click", () => console.log("Clicked!"));
// listen(document, "mouseover", () => console.log("Mouse over!"));


// Random number 
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// console.log( random(1,10) );



/**
 * Convert any text into capitalized mode
 * 
 * @param {string} text 
 * @returns 
 */
const capitalizeText = (text) => {
    return text.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, change => change.toUpperCase());
}
// console.log( capitalizeText('john doe || JOHN DOE') );



/**
 * Valid full name
 * 
 * @param {string} value 
 * @returns 
 */
const validateFullName = (value) => {
    if (!value) return "This field is empty.";

    const regex = /^[a-zA-Z ]+$/;
    if (!regex.test(value)) {
        return "Invalid full name";
    }

    return "Valid full name";
};
// console.log( validateFullName('John Doe') );
// console.log( validateFullName('John Doe 007') );



/**
 * Valid email address
 * 
 * @param {string} value 
 * @returns 
 */
const validateEmail = (value) => {
    if (!value) return "This field is empty.";

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
        return "Invalid email";
    }

    return "Valid email";
};
// console.log( validateEmail('johndoe@gmail.com') );



/**
 * Valid password
 * 
 * @param {string} password 
 * @returns 
 */
const validatePassword = (password) => {
    if (!password) return "This field is empty.";

    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{12,}$/;
    if (!regex.test(password)) {
        return "Password must contain at least 12 characters, including at least one uppercase letter, one lowercase letter, one number, and one symbol.";
    }

    return "Valid password";
}
// console.log( validatePassword('John@doe1234') );



/**
 * Valid mobile number
 * 
 * @param {string} value 
 * @returns 
 */
const validateMobileNumber = (value) => {
    if (!value) return "This field is empty.";

    const regex = /^\d{10}$/;
    if (!regex.test(value)) {
        return "Invalid mobile number";
    }

    return "Valid mobile number";
};
// console.log( validateMobileNumber(123456789) );



/**
 * Truncate Description
 * 
 * @param {string} description 
 * @param {int} maxLength 
 * @returns 
 */
const getTruncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
        return description;
    }

    const truncated = description.substring(0, maxLength - 3);
    return truncated + '...';
}
// console.log( getTruncateDescription("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim error, sapiente eveniet voluptatem repudiandae cum!", 60) );



/**
 * Create User-Friendly URLs (Slugify)
 * 
 * @param {string} text 
 * @returns 
 */
function slugify(text) {
    return text
        .toLowerCase()          // Convert to lowercase
        .trim()                 // Remove leading and trailing whitespace
        .replace(/\s+/g, '-')   // Replace spaces with hyphens
        .replace(/[^\w-]+/g, '')// Remove non-word characters except hyphens
        .replace(/--+/g, '-');  // Replace consecutive hyphens with a single hyphen
}
// console.log( slugify("JavaScript Utility Functions!") );



/**
 * Input Sanitization
 * 
 * @param {string} input 
 * @returns 
 */
const sanitize = (input) => {
    const encodedCharacters = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;'
    };

    return input.replace(/[&<>"'/]/g, match => encodedCharacters[match]);
}
// console.log( sanitize('<script>alert("Hello, world!")</script>') );



/**
 * Sanitize HTML
 * 
 * @param {string} element
 * @returns 
 */
const sanitizeHTML = (element) => {
    const div = document.createElement("div");
    div.textContent = element;

    return div.innerHTML;
};
// sanitizeHTML("<h1>Hello, World!</h1>");



/**
 * LocalStorage API
 */
const storage = {
    get: (key, defaultValue = null) => {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : defaultValue;
    },
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
    remove: (key) => localStorage.removeItem(key),
    clear: () => localStorage.clear(),
};
// storage.set("data-v1", "Eat, Sleep, Code, Repeat");
// console.log( storage.get("data-v1") );
