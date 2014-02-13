// routes/tasks/active.js
export default Ember.Route.extend({
  model: function(){
    return this.store.filter('task', active);
  },
  renderTemplate: function(controller){
    this.render('tasks/index', {controller: controller});
  }
});

function active(task) {
  return !task.get('isCompleted');
}
