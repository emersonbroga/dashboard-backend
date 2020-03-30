export const get = (obj, path, defaultValue) => {
  if (typeof path === 'string') path = path.split('.').filter(key => key.length);
  const result = path.reduce((dive, key) => dive && dive[key], obj);
  return result || defaultValue;
};
