export default function orderByProps(obj, order) {
  const result = [];

  for (const key of order) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push({ key, value: obj[key] });
    }
  }

  const rest = [];
  for (const key in obj) {
    if (!order.includes(key)) {
      rest.push({ key, value: obj[key] });
    }
  }
  rest.sort((a, b) => a.key.localeCompare(b.key));

  return result.concat(rest);
}