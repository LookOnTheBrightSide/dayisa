Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    //multiply:iron-router-progress
    progressSpinner: false,
    waitOn: function() {
        [Meteor.subscribe('postcards'),Meteor.subscribe('comments')];
    }
});
Router.route('/', {
    name: 'postcardList'
});

Router.route('/postcard/:_id', {
    name: 'postcardItem',
    data: function() {
        return Postcards.findOne(this.params._id);
    }
});
Router.route('/postcard/:_id/edit',{
    name: 'postcardEdit',
    data: function(){
        return Postcards.findOne(this.params._id);
    }
})

Router.route('/submit', {
    name: 'postcardSubmit'
})
Router.onBeforeAction('dataNotFound', {
    only: 'postcardItem'
});

var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
}


Router.onBeforeAction('dataNotFound',{
    only: 'postcardItem'
})
Router.onBeforeAction(requireLogin, {
    only: 'postcardSubmit'
})



















