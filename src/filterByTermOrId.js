function filterByTermOrId(arr, str, id) {
  if (str.length === 0 && id === undefined) return [];
  const regex = new RegExp(str, "i");
  return arr.filter(
    el => (str.length !== 0 && el.url.match(regex)) || el.id === id
  );
}

module.exports = filterByTermOrId;
