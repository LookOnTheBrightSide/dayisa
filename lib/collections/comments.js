Comments = new Mongo.Collection('comments');

Meteor.methods({
	commentInsert: function(commentAttributes){
		check(this.userId, String);
		check(commentAttributes, {
			postId: String,
			bodyText: String
		});
		var user = Meteor.user();
		var post = Postcards.findOne(commentAttributes.postId);

		if(!post)
			throw new Meteor.Error('invalid-comment','You must comment on a postcard');
		comment = _.extend(commentAttributes, {
			userId: user._id,
			author: user.username,
			submitted: new Date()
		});
		return Comments.insert(comment);
	}
})