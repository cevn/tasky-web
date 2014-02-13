var User = DS.Model.extend({
  fullname: DS.attr('string'), 
  email:    DS.attr('string'),

  createdAt: DS.attr('string', {
    defaultValue: function() { return new Date(); }
  }), 
  
  tasks: DS.hasMany('task')
}); 

export default User; 
