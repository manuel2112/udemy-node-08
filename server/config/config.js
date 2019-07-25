//PUERTO
process.env.PORT = process.env.PORT || 3000;

//ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//BBDD
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://manuel2112:13357874@cluster0-hhsis.mongodb.net/cafe';
}

process.env.URLDB = urlDB;