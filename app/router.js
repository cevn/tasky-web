var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {

  this.route('component-test');
  this.route('helper-test');

  this.resource('tasks', { path: '/' },  function() { 
    this.route('active'); 
    this.route('completed'); 
  });  

});

export default Router;
