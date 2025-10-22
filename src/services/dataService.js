const catalog = [
    {
        "title": "Punk Orange Figurine",
        "category": "Fruit",
        "price": 20.99,
        "image":"Punk-Orange-Product.png",
        "rating": 4.5,
        "reviewCount": 87,
        "_id":"1"
    },
    {
        "title": "Punk Apple Figurine",
        "category": "Fruit",
        "price": 20.99,
        "image":"Punk-Apple-Product.png",
        "rating": 4.8,
        "reviewCount": 124,
        "_id":"2"
    },
    {
        "title": "Grunge Limes Figurine",
        "category": "Fruit",
        "price": 20.99,
        "image":"Grunge-Lime-Product.png",
        "rating": 4.2,
        "reviewCount": 63,
        "_id":"3"
    },
    {
        "title": "Grunge Lemons Figurine",
        "category": "Fruit",
        "price": 20.99,
        "image":"Grunge-Lemon-Product.png",
        "rating": 4.6,
        "reviewCount": 95,
        "_id":"4"
    },
    {
        "title": "Cupcake Cutie Micah",
        "category": "Collectible",
        "price": 35.99,
        "image":"Micah-Collectable.png",
        "rating": 5.0,
        "reviewCount": 142,
        "_id":"5"
    }
]

class DataService{
    async getProducts(){
        return catalog;
    }
}

export default DataService;