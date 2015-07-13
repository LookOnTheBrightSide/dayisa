Template.postcardSubmit.events({
    'submit form': function(e) {
        e.preventDefault();
        var postcard = {
            title: $(e.target).find('[name=title]').val(),
            price: $(e.target).find('[name=price]').val(),
            condition: $(e.target).find('[name=condition]').val(),
            imgUrl: $(e.target).find('[name=imgUrl]').val(),
            description: $(e.target).find('[name=description]').val()
        };
        Meteor.call('postcardInsert', postcard, function(error,result){
            if (error){
                return alert(error.reason);

            }
            Router.go("postcardItem",{_id: result._id},
                toastr["success"]("You have uploaded your postcard!", "Success!"));
        })
        // postcard._id = Postcards.insert(postcard);
        // Router.go('postcardPage', postcard);
    }
})