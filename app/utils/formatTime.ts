/**
 * Formats seconds into MM:SS format
 * @param seconds - Number of seconds to format
 * @returns Formatted time string (e.g., "01:30" for 90 seconds)
 */
export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  
  const minutesStr = minutes.toString().padStart(2, '0');
  const secondsStr = remainingSeconds.toString().padStart(2, '0');
  
  return `${minutesStr}:${secondsStr}`;
};

/**
 * Formats duration into a human-readable string
 * @param seconds - Number of seconds
 * @returns Formatted duration string (e.g., "1 min 30 sec")
 */
export const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  
  if (minutes === 0) {
    return `${remainingSeconds} sec`;
  }
  
  if (remainingSeconds === 0) {
    return `${minutes} min`;
  }
  
  return `${minutes} min ${remainingSeconds} sec`;
};

/**
 * Formats seconds into a compact duration string
 * @param seconds - Number of seconds
 * @returns Compact duration string (e.g., "1:30")
 */
export const formatCompactTime = (seconds: number): string => {
  if (seconds < 60) {
    return `${seconds}s`;
  }
  return formatTime(seconds);
}; 