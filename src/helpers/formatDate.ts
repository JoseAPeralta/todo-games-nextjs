export const toLocaleDate = (date: string | number | null) => {
  if (date === null) {
    return "";
  }
  const myDate = new Date(date);
  return myDate.toLocaleString("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
};
