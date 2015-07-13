if (Postcards.find().count() === 0) {
    Postcards.insert({
        title: "Puma Boots",
        price: "120",
        condition: "new used",
        imgUrl: 'https://placeimg.com/350/200/any'
    });
    Postcards.insert({
        title: "Adidas Boots",
        price: "220",
        condition: "used",
        imgUrl: 'https://placeimg.com/350/200/any'
    });
    Postcards.insert({
        title: "Mizuno Boots",
        price: "830",
        condition: "new",
        imgUrl: 'https://placeimg.com/350/200/any'

    });
}