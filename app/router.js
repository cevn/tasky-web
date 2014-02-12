var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  // this.resource('posts', function() {
  //   this.route('new');
  // });
  //

  // 
  this.resource('tasks', { path: '/' },  function() { 
    this.route('new'); 
    this.route('active'); 
    this.route('completed'); 
  });  

  this.resource('users', function() { 
    this.route('new'); 
  }); 

});

export default Router;
