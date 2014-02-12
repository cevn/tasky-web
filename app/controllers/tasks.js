var isEmpty  = Ember.isEmpty; 
var filterBy = Ember.computed.filterBy; 
var notEmpty  = Ember.computed.notEmpty; 

export default Ember.ArrayController.extend({
  itemController: 'task', 

  index: filterBy('@this', 'isCompleted', false), 
  active: filterBy('@this', 'isCompleted', false), 
  completed: filterBy('@this', 'isCompleted', true), 
  hasCompleted: notEmpty('completed.[]'), 

  inflection: function() {
    var active = this.get('active.length'); 
    return active === 1 ? 'item' : 'items'; 
  } .property('active.[]'), 

  allAreDone: function (key, value) { 
    if (arguments.length === 2) { 
      this.setEach('isCompleted', value); 
      this.invoke('save'); 
      return value; 
    } else { 
      return !isEmpty(this) && this.get('length') === this.get('completed.length'); 
    }
  }.property('@each.isCompleted'),  

  actions: { 
    createTask: function () { 
      var title = this.get('newTitle'); 
      if (title && !title.trim()) { 
        this.set('newTitle', ''); 
        return; 
      }

      var task = this.store.createRecord('task', {
        title: title, 
        isCompleted: false
      }); 

      this.set('newTitle', ''); 

      task.save(); 

    },

    clearCompleted: function() { 
      var completed = this.get('completed'); 

      // clone the array, so it is not bound while we iterate over and delete.
      completed.toArray().invoke('deleteRecord').invoke('save');  
    } 
  }
}); 

