Template.commentSubmit.events({
	'submit form': function (e,template) {
		e.preventDefault();
		var $body = $(e.target).find('[name=bodyText]');
		var comment = {
			bodyText: $body.val(),
			postId: template.data._id
		};
		Meteor.call('commentInsert', comment, function(error,commentId){
			if (error){
				alert(error);
			}else{
				$body.val('');
			}
		});
	}
});