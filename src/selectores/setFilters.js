export const setFilters = (value, array) => {
  return array.filter(
    (item) =>
      item.comercio.includes(value) ||
      item.id.includes(value) ||
      item.cuit.includes(value)
  );
};
export default setFilters;
