/**
 * It takes a key and a value, and then sets the value in localStorage
 * @param {string} key - The key to store the value under.
 * @param {any} value - any - This is the value that you want to store in localStorage.
 */
export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * @param {string} key - The key of the item you want to get from localStorage.
 * @returns The value of the key in localStorage.
 */
export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};
