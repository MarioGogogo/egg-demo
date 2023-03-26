'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user/:id', controller.user.info);

  /**
   * 单独某一个接口效验
   */
  const checkParam = app.middleware.checkParam();
  router.post('/user', checkParam, controller.user.create);

  router.get('/download', controller.downFiles.download);
  router.get('/downloadImage', controller.downFiles.downloadImage);

  router.get('/readJson1000', controller.readJson.read1000);
  router.get('/readJson10000', controller.readJson.read10000);
};
