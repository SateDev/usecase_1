import express from 'express';
import { cancel, confirmReceived, confirmPurchase } from '../service/purchase';


const router = express.Router({ mergeParams: true });

router.post('/purchase', async (req, res, next) => {
  try {
    const data = await confirmPurchase();
    res.json({
      success: true,
      message: 'purchase is confirmed',
      data
    });
  } catch (err) {
    res.status(500);
    next(err);
  }
});

router.post('/received', async (req, res, next) => {
    try {
      const data = await confirmReceived();
      res.json({
        success: true,
        message: 'purchase is received',
        data
      });
    } catch (err) {
      res.status(500);
      next(err);
    }
});

router.post('/cancel', async (req, res, next) => {
    try {
      const data = await cancel();
      res.json({
        success: true,
        message: 'purchase is cancelled',
        data
      });
    } catch (err) {
      res.status(500);
      next(err);
    }
  });



export default router;