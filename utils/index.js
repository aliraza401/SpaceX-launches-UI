function isDataSomething(data) {
  if (data === undefined || data === null) return false;

  if (typeof data === "string" && data.trim() === "") return false;

  if (Array.isArray(data) && data.length === 0) return false;

  if (typeof data === "object" && !Array.isArray(data))
    return Object.keys(data).length > 0;

  if (typeof data === "number" && isNaN(data)) return false;

  if (data instanceof Date && isNaN(data.getTime())) return false;

  return true;
}
