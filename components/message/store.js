const Model = require('./model');

function addMessage(message) {
    /* list.push(message); */
    const myMessage = new Model(message)
    myMessage.save();
}

async function getMessage(filterChat) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterChat != null) {
            filter = { chat: filterChat }
        }
        const messages = Model.find(filter)
            .populate('user')
            .exec((error, populated) => {
                if (error) {
                    return reject(error);
                }
                resolve(populated);
            })
    })
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({
        _id: id
    });
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

function removeMessage(id) {
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    remove: removeMessage
    //get
    //update
    //delete
}