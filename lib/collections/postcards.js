Postcards = new Mongo.Collection('postcards');

Postcards.allow({
    update: function(userId, postcard) {
        //...
        {
            return ownsDocument(userId, postcard);
        }
    },
    remove: function(userId, postcard) {
        //...
        {
            return ownsDocument(userId, postcard);
        }
    }
});

Postcards.deny({
	
	update: function (userId, postcard, fieldNames) {
		//...
		return (_.without(fieldNames,'imgUrl','price','description','condition').length > 0);
	}
});


Meteor.methods({
    postcardInsert: function(postcardAttributes) {
        check(Meteor.userId(), String);
        check(postcardAttributes, {
            title: String,
            imgUrl: String,
            price: String,
            condition: String,
            description: String
        });
        var user = Meteor.user();
        var postcard = _.extend(postcardAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });
        var postcarId = Postcards.insert(postcard);
        return {
            _id: postcarId
        }

    }
})