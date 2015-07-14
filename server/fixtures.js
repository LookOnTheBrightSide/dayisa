if (Postcards.find().count() === 0) {
    var now = new Date().getTime();

    //new users
    var postmasterId = Meteor.users.insert({
        profile: {
            name: 'Post Master'
        }
    });
    var postmaster = Meteor.users.findOne(postmasterId);
    var postmanId = Meteor.users.insert({
        profile: {
            name: "Post Man"
        }
    });
    var postman = Meteor.users.findOne(postmanId);

    var pumaBootsId = Postcards.insert({
        title: "Puma Boots",
        description: "really cool pair of Zxs1",
        price: "120",
        condition: "new used",
        imgUrl: 'https://placeimg.com/350/200/any',
        author: postmaster.profile.name,
        userId: postmasterId._id,
        submitted: new Date(now - 7 * 3600 * 1000)
    });
    //comments
    Comments.insert({
        postId: pumaBootsId,
        userId: postman._id,
        author: postman.profile.name,
        submitted: new Date(now - 5 * 3600 * 1000),
        body: 'These are old mate, lower the price?'
    });

    Comments.insert({
        postId: pumaBootsId,
        userId: postmaster._id,
        author: postmaster.profile.name,
        submitted: new Date(now - 3 * 3600 * 1000),
        body: 'Ok fair enough, I\'ll lower the price by R50?'
    });
    // Postcards.insert({
    //     title: "Adidas Boots",
    //     price: "220",
    //     condition: "used",
    //     imgUrl: 'https://placeimg.com/350/200/any'
    // });
    // Postcards.insert({
    //     title: "Mizuno Boots",
    //     price: "830",
    //     condition: "new",
    //     imgUrl: 'https://placeimg.com/350/200/any'

    // });
}