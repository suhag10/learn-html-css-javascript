// JavaScript Utility Functions
// Console print
const { log, info, warn, error } = console;

/**
 * Pauses the execution of an asynchronous function for a specified duration.
 *
 * @param {number} ms - The number of milliseconds to delay execution.
 * @returns {Promise<void>} A promise that resolves after the specified delay.
 *
 * @example
 * async function demo() {
 *     console.log('Start');
 *     await sleep(1000); // Pauses for 1 second
 *     console.log('End');
 * }
 * demo();
 */
async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


/**
 * Utility object for selecting DOM elements.
 * Provides methods to select elements by ID or CSS class selectors.
 * 
 * @example
 * select.id("demoId");
 * select.class(".demo-class");
 */
const select = {
	id: (selector, scope = document) => scope.getElementById(selector),
	class: (selector, scope = document) => scope.querySelector(selector),
	classAll: (selector, scope = document) => scope.querySelectorAll(selector),
};


/**
 * Adds an event listener to a target element with optional configuration.
 *
 * @param {Element} target
 * @param {string} event
 * @param {Function} callback
 * @param {...any} options
 * @returns {void}
 *
 * @example
 * const button = document.getElementById('myButton');
 * addEvent(button, 'click', () => console.log('Button clicked!'));
 */
const addEvent = (target, event, callback, ...options) => {
    return target.addEventListener(event, callback, ...options);
};


/**
 * Generates a random integer between the specified minimum and maximum values (inclusive).
 *
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} A random integer between `min` and `max` (inclusive).
 *
 * @example
 * random(1, 10);
 */
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


/**
 * Capitalizes the first letter of a string or each word in a string.
 * 
 * @param {string} text
 * @param {boolean} [isWords=false] - If `true`, capitalizes the first letter of each word. 
 *                                    If `false`, only the first letter of the string is capitalized.
 * @returns {string}
 * 
 * @example
 * capitalizeWord('hello world'); // Hello world
 * capitalizeWord('hello world', true); // Hello World
 */
const capitalizeWord = (text, isWords = false) => {
    if (isWords === true) {
        return text.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, change => change.toUpperCase());
    }
    return text.replace(/(^\w{1})/, change => change.toUpperCase());
}


/**
 * Validates a full name input.
 *
 * @param {string} value
 * @returns {string}
 * 
 * @example
 * validateFullName('John Doe')
 */
function validateFullName(value) {
    if (!value) return "This field is empty.";

    const regex = /^[a-zA-Z ]+$/;
    if (!regex.test(value)) {
        return "Invalid full name";
    }

    return "Valid full name";
};


/**
 * Validates an email address.
 * 
 * This function checks whether the provided email address is valid. It first ensures
 * that the field is not empty, then validates the email format using a regular expression.
 * 
 * @param {string} value - The email address to be validated.
 * @returns {string} - A message indicating whether the email is valid, empty, or invalid.
 * 
 * @example
 * validateEmail('johndoe@gmail.com')
 */
function validateEmail(value) {
    if (!value) return "This field is empty.";

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
        return "Invalid email";
    }

    return "Valid email";
};


/**
 * Validates a password based on specific criteria.
 *
 * The password must meet the following requirements:
 * - At least 12 characters long.
 * - Contains at least one uppercase letter.
 * - Contains at least one lowercase letter.
 * - Contains at least one numeric digit.
 * - Contains at least one special character (e.g., !, @, #, $, etc.).
 *
 * @param {string} password - The password string to be validated.
 * @returns {string} A message indicating whether the password is valid or the specific reason why it is invalid.
 * 
 * @example
 * validatePassword('John@doe1234')
 */
function validatePassword(password) {
    if (!password) return "This field is empty.";

    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{12,}$/;
    if (!regex.test(password)) {
        return "Password must contain at least 12 characters, including at least one uppercase letter, one lowercase letter, one number, and one symbol.";
    }

    return "Valid password";
}


/**
 * Validates a mobile number.
 * 
 * This function checks whether the provided mobile number is exactly 10-15 digits long and contains only numeric values.
 * It ensures that the input is a string and returns appropriate messages based on validation results.
 * 
 * @param {string|int} number
 * @returns {string}
 * 
 * @example
 * validateMobileNumber("1234567890"); // Valid
 * validateMobileNumber("12345abcde"); // Invalid
 */
function validateMobileNumber(number) {
    if (!number) return "This field is empty.";

    const regex = /^\d{10,15}$/; // this number is changeable.
    if (!regex.test(number)) {
        return "Invalid mobile number";
    }

    return "Valid mobile number";
}


/**
 * Truncates a given text description to a specified maximum 
 * number of words and appends a custom "more" button if truncated.
 *
 * @param {string} description - The input text to be truncated.
 * @param {number} [maxLength=15] - The maximum number of words allowed in the truncated text. Defaults to 15.
 * @param {string} [moreButton='[...]'] - The string to append to the truncated text. Defaults to '[...]'.
 * @returns {string}
 */
function getTruncateText(description, maxLength = 15, moreButton = '[...]') {
    if (description) {
        let trimTag = description.replace(/(?:(<[^\/>]*>(?:<[^\/>]*>)*)(\s*))|(?:(\s*)(<\/[^>]*>(?:<\/[^>]*>)*))/g, '');
        let words = trimTag.split(" ");
        
        if (words.length > maxLength) {
            let truncated = words.slice(0, maxLength).join(" ");
            description = truncated + moreButton;
        }
    }

    return description;
}


/**
 * Converts a given string into a URL-friendly slug.
 * 
 * @param {string} text
 * @returns {string}
 * 
 * @example
 * slugify("JavaScript Utility Functions!");
 * // javascript-utility-functions
 */
function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '')
        .replace(/[-+_]+/g, '-');
}


/**
 * It sanitizes the input string by escaping special characters to prevent XSS (Cross-Site Scripting) 
 * attacks and replacing potentially harmful characters with their corresponding HTML entity codes.
 * 
 * @param {string} input
 * @returns {string}
 *
 * @example
 * sanitize('<div>Hello World!</div>');
 * // returns '&lt;div&gt;Hello World!&lt;&#x2F;div&gt;'
 */
const sanitize = (input) => {
    const encodedCharacters = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;',
        '`': '&#96;',
        '=': '&#61;',
    };

    return input.replace(/[&<>"'/`=]/g, match => encodedCharacters[match]);
}


/**
 * Sanitizes an input string by escaping HTML special characters to prevent XSS attacks.
 *
 * @param {string} input
 * @returns {string}
 *
 * @example
 * const safeString = sanitizeHTML('<script>alert("XSS")</script>');
 * console.log(safeString); // &lt;script&gt;alert("XSS")&lt;/script&gt;
 */
const sanitizeHTML = (element) => {
    if (typeof element !== "string") {
        throw new TypeError("Expected input to be a string");
    }
    const div = document.createElement("div");
    div.textContent = element;
    return div.innerHTML;
};


/**
 * Local Storage API
 * 
 * Utility for managing localStorage with JSON support.
 */
const storage = {
    /**
     * Retrieves a value from localStorage.
     * 
     * @param {string} key - The key of the item to retrieve.
     * @param {boolean} [parseAsJSON=false] - Whether to parse the retrieved value as JSON.
     * @returns {*} The value retrieved from localStorage, parsed if `parseAsJSON` is true.
     * 
     * @example
     * const user = storage.get("user");
     * const user = storage.get("user", true);
     */
    get: (key, parseAsJSON = false) => {
        const value = localStorage.getItem(key);
        return parseAsJSON ? JSON.parse(value) : value;
    },

    /**
     * Saves a value to localStorage.
     * 
     * @param {string} key - The key to save the value under.
     * @param {*} value - The value to save. It can be a string, object, array, etc.
     * @param {boolean} [storeAsJSON=false] - Whether to stringify the value before saving.
     * 
     * @example
     * storage.set("user", "John Doe");
     * storage.set("user", { name: "John Doe", age: 25 }, true);
     */
    set: (key, value, storeAsJSON = false) => {
        const storedValue = storeAsJSON ? JSON.stringify(value) : value;
        localStorage.setItem(key, storedValue);
    },

    /**
     * Removes an item from localStorage.
     * 
     * @param {string} key - The key of the item to remove.
     * 
     * @example
     * storage.remove("user");
     */
    remove: (key) => {
        localStorage.removeItem(key);
    },

    /**
     * Clears all items from localStorage.
     * 
     * @example
     * storage.clear();
     */
    clear: () => {
        localStorage.clear();
    },
};


/**
 * Sends a GET request to the specified URL and processes the response.
 *
 * @param {string} url - The URL to send the GET request to.
 * @param {function} callback - A callback function to handle the response or errors.
 *        The callback takes two arguments:
 *        - error: An error object if the request fails or JSON parsing fails, otherwise `null`.
 *        - data: The parsed JSON data from the response, or `null` if an error occurs.
 * 
 * @example
 * get("https://jsonplaceholder.typicode.com/posts", (error, data) => {
 *     if (error) {
 *         console.error("Error:", error);
 *     } else {
 *         console.log("Data:", data);
 *     }
 * });
 */
function get(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                try {
                    const data = JSON.parse(this.responseText);
                    callback(null, data);
                } catch (error) {
                    callback(error, null);
                }
            } else {
                callback(new Error(`HTTP error: ${this.status} ${this.statusText}`), null);
            }
        }
    };

    xhr.onerror = function () {
        callback(new Error("Network error occurred"), null);
    };

    xhr.send();
}


/**
 * Encodes a given string to Base64 format.
 * 
 * @param {string} string - The string to be encoded.
 * @returns {string} - The Base64 encoded string.
 */
function encode(string) {
    return btoa(string);
}

/**
 * Decodes a Base64 encoded string back to its original format.
 * 
 * @param {string} string - The Base64 encoded string to decode.
 * @returns {string} - The decoded string.
 */
function decode(string) {
    return atob(string);
}

// eval(decode('MjAyNC0xMi00IDEyOjAwIEFN'));
