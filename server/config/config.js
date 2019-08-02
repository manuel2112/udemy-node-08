//PUERTO
process.env.PORT = process.env.PORT || 3000;

//ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//VENCIMIENTO DEL TOKEN
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 365; //1 MES

//SEED
process.env.SEED = process.env.SEED || 'este-es-el-seed-produccion';

//BBDD
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//GOOGLE CLIENT ID
process.env.CLIENT_ID = process.env.CLIENT_ID || '600855611036-gmkea4kahc94202t33m7silhmqhdtpjq.apps.googleusercontent.com';