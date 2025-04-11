export const isDataSomething = (data) => {
  if (data === undefined || data === null) return false;

  if (data instanceof Date && !isNaN(data.getTime())) return true;

  if (typeof data === "string" && data.trim() === "") return false;

  if (Array.isArray(data) && data.length === 0) return false;

  if (typeof data === "object" && !Array.isArray(data))
    return Object.keys(data).length > 0;

  if (typeof data === "number" && isNaN(data)) return false;

  return true;
};

export const getPaginationParams = (query) => {
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 50;
  return { page, limit };
};
