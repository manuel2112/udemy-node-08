const jwt = require('jsonwebtoken');

//===============================
//     VERIFICACIÓN TOKEN
//===============================

let verificaToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Tóken no válido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();

    });

};

//===============================
//     VERIFICACIÓN ADMIN ROLE
//===============================

let verificaAdminRole = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {

        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });

    }

};

//===============================
//     VERIFICACIÓN TOKEN IMG
//===============================

let verificaTokenImg = (req, res, next) => {

    let token = req.query.token;

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Tóken no válido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();

    });

};

module.exports = {
    verificaToken,
    verificaAdminRole,
    verificaTokenImg
};