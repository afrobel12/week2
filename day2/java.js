const cars = {
    make: "Toyota",
    model: {
        name: "yarsis",
        milage: "130,000",
        color: "red",
    },
    seeMore: "50% off",
    otherCars: ["opel", "nissan", "skoda","fiat"],
    content: "This is car dealer",
    open: function() {
        for (let car of cars.otherCars){
            console.log(car)
        }
    },

}


cars.open()

//

let items = [
    {
        name: 'microwave',
        price: 10,
    },
    {
        name: 'television',
        price: 190,
    },
]
for( let item of items) {
    console.log(item)
}


