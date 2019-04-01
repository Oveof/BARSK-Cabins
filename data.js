var cabins = [
    {
        "name": "Granstua",
        "beds": 4,
        "standard": "Høy",
        "sauna": 'Ja',
        "price": 12000,
        "images": 3,
    },
    {
        "name": "Granbo",
        "beds": 6,
        "standard": "Middels",
        "sauna": 'Nei',
        "price": 15000,
        "images": 3
    },
    {
        "name": "Grantoppen",
        "beds": 8,
        "standard": "Lav",
        "sauna": 'Nei',
        "price": 16000,
        "images": 3
    },
    {
        "name": "Granhaug",
        "beds": 10,
        "standard": "Høy",
        "sauna": 'Ja',
        "price": 30000,
        "images": 3
    }
];

var occupation = [
    {
        "time": "Påske 2019",
        "free": ["Granbo"]
    },
    {
        "time": "Pinse 2019",
        "free": ["Granstua", "Granbo", "Granhaug"]
    },
    {
        "time": "Veke 28",
        "free": ["Granstua", "Granbo", "Grantoppen", "Granhaug"]
    },
    {
        "time": "Veke 29",
        "free": ["Granbo", "Grantoppen"]
    }
];