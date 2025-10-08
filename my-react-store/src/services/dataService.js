const catalog = [
    {
        "title": "Punk Orange Figurine",
        "category": "Fruit",
        "price": 20.99,
        "image":"Punk-Orange-Product.png",
        "_id":"1"
    },
    {
        "title": "Punk Apple Figurine",
        "category": "Fruit",
        "price": 20.99,
        "image":"Punk-Apple-Product.png",
        "_id":"2"
    },
    {
        "title": "Grunge Limes Figurine",
        "category": "Fruit",
        "price": 20.99,
        "image":"Grunge-Lime-Product.png",
        "_id":"3"
    },
    {
        "title": "Grunge Lemons Figurine",
        "category": "Fruit",
        "price": 20.99,
        "image":"Grunge-Lemon-Product.png",
        "_id":"4"
    },
    {
        "title": "Cupcake Cutie Micah",
        "category": "Collectable",
        "price": 35.99,
        "image":"Micah-Collectable.png",
        "_id":"5"
    }
]

class DataService{
    getProducts(){
        return catalog;
    }
}

export default DataService;