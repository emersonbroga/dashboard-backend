import express from 'express';

import BitcoinService from 'services/BitcoinService';
import BovespaService from 'services/BovespaService';
import CurrencyService from 'services/CurrencyService';
import GoogleTrendsService from 'services/GoogleTrendsService';
import TwitterService from 'services/TwitterService';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const [bitcoin, bovespa, currency, googletrends, twitter] = await Promise.all([
      BitcoinService.fetchData(),
      BovespaService.fetchData(),
      CurrencyService.fetchData(),
      GoogleTrendsService.fetchData(),
      TwitterService.fetchData(),
    ]);

    return res.jsonOk({ bitcoin, bovespa, currency, googletrends, twitter });
  } catch (error) {
    return res.jsonBadRequest({ error });
  }
});

module.exports = router;
