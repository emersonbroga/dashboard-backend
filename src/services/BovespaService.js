import { doGetRequest } from 'helpers/apiHelper';
import { SYMBOL_BRL, format } from 'helpers/currencyHelper';

const API_URL = 'https://bovespa.nihey.org/api/realtime/';

const getPrice = async code => {
  const url = `${API_URL}${code}`;
  const resolver = data => format(data.price, SYMBOL_BRL);
  const price = await doGetRequest(url, {}, resolver);
  return { code, price };
};

const fetchData = async () => {
  const result = await Promise.all([getPrice('MGLU3'), getPrice('VVAR3'), getPrice('EVEN3')]);
  return result;
};

export default { fetchData };
