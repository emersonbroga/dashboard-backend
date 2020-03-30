export const SYMBOL_USD = 'U$';
export const SYMBOL_BRL = 'R$';

export const format = (value, symbol) => {
  const parsedValue = isNaN(value) ? 0 : parseFloat(value, 10);
  return `${symbol} ${parsedValue.toFixed(2)}`;
};
