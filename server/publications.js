Meteor.publish('postcards', function () {
	return Postcards.find();
});