var Task = DS.Model.extend({
  name: DS.attr('string'), 
  due: DS.attr('date'), 
  createdAt: DS.attr('string', {
    defaultValue: function () { return new Date(); }
  }); 
  DS.belongsTo('user');   
}); 

export default Task; 
