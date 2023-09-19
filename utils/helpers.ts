export const isDataEmpty = (array) => {
  const isEmpty = !Array.isArray(array) || array.length < 1 || !array;
  return isEmpty;
};
