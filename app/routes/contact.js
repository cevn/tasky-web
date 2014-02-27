export default Ember.Route.extend({
  renderTemplate: function() {
    this.render('contact', {outlet: 'contact', into: 'application'}); 
  }
}); 
