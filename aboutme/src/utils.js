// utils.js
export const getImageUrl = (path) => {
    try {
        return require(`../assets/${path}`).default; // Adjust the path if needed
    } catch (error) {
        console.error("Image not found:", path);
        return null;
    }
};
