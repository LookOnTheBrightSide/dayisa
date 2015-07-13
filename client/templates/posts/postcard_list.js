Template.postcardList.helpers({
	postcards: function(){
		return Postcards.find({},{sort:{submitted: -1}});
	}
})