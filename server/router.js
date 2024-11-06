// import the controllers
// This only specifies the folder name, which means it will automatically pull the index.js file
const controllers = require('./controllers');

const router = (app) => {
  app.get('/page1', controllers.page1);
  app.get('/page2', controllers.page2);
  app.get('/page3', controllers.page3);
  app.get('/page4', controllers.page4);
  app.get('/getName', controllers.getName);
  app.get('/findByName', controllers.searchName);
  app.get('/', controllers.index);
  app.post('/age-wolf', controllers.searchAndAgeWolf);
  app.get('/*', controllers.notFound);

  app.post('/setName', controllers.setName);
  app.post('/updateLast', controllers.updateLast);
  app.post('/create-wolf', controllers.createWolf);
};
module.exports = router;
