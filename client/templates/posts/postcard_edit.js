Template.postcardEdit.events({
    'submit form': function(e) {
        e.preventDefault();
        var currentPostcardId = this._id;
        var postcardProperties = {
            title: $(e.target).find('[name=title]').val(),
            price: $(e.target).find('[name=price]').val(),
            condition: $(e.target).find('[name=condition]').val(),
            imgUrl: $(e.target).find('[name=imgUrl]').val(),
            description: $(e.target).find('[name=description]').val()
        }
        Postcards.update(currentPostcardId, {
            $set: {postcardProperties: postcardProperties},
            Command: toastr["success"]("You have updated your postcard!", "Success!")
        }, function(error) {
            if (error) {
                alert(error.reason);
            } else {
                Router.go('postcardItem', {
                    _id: currentPostcardId
                });
            }
        });
    },
    'click .delete': function(e) {
        e.preventDefault();
        if (confirm("Are you sure you to delete this postcard?")) {
            var currentPostcardId = this._id;
            Postcards.remove(currentPostcardId);
            Router.go('postcardList');
        };
    }
})



Template.postcardEdit.onRendered(function () {
      

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": true,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "2000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
});

