Meteor.publish('postcards', function () {
	return Postcards.find();
});

Meteor.publish('comments', function () {
	return Comments.find();
});