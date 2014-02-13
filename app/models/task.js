var Task = DS.Model.extend({
  title: DS.attr('string'), 
  due: DS.attr('date'), 
  isCompleted: DS.attr('boolean'), 

  createdAt: DS.attr('string', {
    defaultValue: function () { return new Date(); }
  }), 

  //user: DS.belongsTo('user')
}); 


Task.reopenClass({
  FIXTURES: [
  {
    id: "1",
    title: 'install EAK',
    isCompleted: true
  }, {
    id: "2",
    title: 'install additional dependencies',
    isCompleted: true
  }, {
    id: "3",
    title: 'develop amazing things',
    isCompleted: false
  }
]});

export default Task; 
