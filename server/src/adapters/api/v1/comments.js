const commentsController = require('../../controllers/comments/commentsController');
const router = require('express').Router();

const apiRouter = (server) => {
  try {
    const controller = commentsController(server);
    router.get('/fetch', async (req, res, next) => {
      const comments = await controller.getComments();
      if (!comments || comments.length === 0) {
        return next('no comments found');
      }
      res.send(comments);
    });
  } catch (e) {
    console.log('error while trying to fetch comments', e);
    next(e);
  }

  router.post('/create', async (req, res, next) => {
    const controller = commentsController(server);

    try {
      const { values } = req.body;
      const comments = await controller.createComment(values);
      res.send(comments);
    } catch (e) {
      console.log('error while trying to create a comment', e);
      next(e);
    }
  });

  return router;
};
module.exports = apiRouter;
