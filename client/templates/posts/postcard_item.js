Template.postcardItem.helpers({
	ownPost: function(){
		return this.userId == Meteor.userId();
	}
})