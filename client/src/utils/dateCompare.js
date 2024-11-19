/**
 * Utility function to calculate time elapsed from a given date.
 * @param {Date|string} postDate - The date of the post (as a Date object or a valid date string).
 * @returns {string} - A human-readable string representing the time elapsed.
 */
export function getTimeSince(postDate) {
  const currentDate = new Date();
  const postDateTime = new Date(postDate);
  const elapsedTime = currentDate - postDateTime;

  if (isNaN(postDateTime)) {
    throw new Error("Invalid date format. Please provide a valid date.");
  }

  // Time constants in milliseconds
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30; // Approximation
  const year = day * 365; // Approximation

  if (elapsedTime < second) return "just now";
  if (elapsedTime < minute)
    return `${Math.floor(elapsedTime / second)} seconds ago`;
  if (elapsedTime < hour)
    return `${Math.floor(elapsedTime / minute)} minutes ago`;
  if (elapsedTime < day) return `${Math.floor(elapsedTime / hour)} hours ago`;
  if (elapsedTime < week) return `${Math.floor(elapsedTime / day)} days ago`;
  if (elapsedTime < month) return `${Math.floor(elapsedTime / week)} weeks ago`;
  if (elapsedTime < year)
    return `${Math.floor(elapsedTime / month)} months ago`;

  return `${Math.floor(elapsedTime / year)} years ago`;
}
