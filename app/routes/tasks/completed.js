export default Ember.Route.extend({
  model: function(){
    return this.store.filter('task', completed);
  },
  renderTemplate: function(controller){
    this.render('tasks/index', { controller: controller });
  }
});

function completed(task) {
  return task.get('isCompleted');
}
