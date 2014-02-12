var Task = DS.Model.extend({
  name: DS.attr('string'), 
  due: DS.attr('date'), 
  isCompleted: DS.attr('boolean'), 

  createdAt: DS.attr('string', {
    defaultValue: function () { return new Date(); }
  }), 

  user: DS.belongsTo('user')
}); 

export default Task; 
