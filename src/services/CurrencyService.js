import { doGetRequest } from 'helpers/apiHelper';
import { SYMBOL_BRL, format } from 'helpers/currencyHelper';

const API_URL = 'https://economia.awesomeapi.com.br/json/';

const getPrice = currency => {
  const url = `${API_URL}${currency}`;
  const resolver = data => format(data[0].bid, SYMBOL_BRL);
  return doGetRequest(url, {}, resolver);
};

const fetchData = async () => {
  const [usd, eur] = await Promise.all([getPrice('USD'), getPrice('EUR')]);

  return { usd, eur };
};

export default { fetchData };
