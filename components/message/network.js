const express = require('express');
const multer = require('multer');
const path = require('path');
const response = require('../../network/response');
const controller = require('./controller')
const router = express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/files/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage: storage
})

router.get('/', (req, res) => {
    const filterMessages = req.query.chat || null;
    controller.getMessage(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, "Unexpected Error", 500, e);
        })
})

router.post('/', upload.single('file'), (req, res) => {
    console.log(req.file)
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201)
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador')
        });
});

router.patch('/:id', (req, res) => {
    console.log(req.params.id)
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        })
});

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
        .then((data) => {
            response.success(req, res, `Usuario ${req.params.id} eliminado`, 200)
        })
        .catch(e => {
            response.error(req, res, 'Error Interno', 500, e)
        })
});

module.exports = router;