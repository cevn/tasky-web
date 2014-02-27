export default Ember.Route.extend({
  renderTemplate: function() {
    this.render('about', {outlet: 'about', into: 'application'}); 
  }
}); 

