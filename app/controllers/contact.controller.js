exports.create = (req, res) => {
    res.send({ massage: "create handler"});
};

exports.findAll = (req, res) => {
    res.send({ massage: "findAll handler"});
};

exports.findOne = (req, res) => {
    res.send({ massage: "findOne handler"});
};

exports.update = (req, res) => {
    res.send({ massage: "update handler"});
};

exports.delete = (req, res) => {
    res.send({ massage: "delete handler"});
};

exports.deleteAll = (req, res) => {
    res.send({ massage: "deleteAll handler"});
};

exports.findAllFavorite = (req, res) => {
    res.send({ massage: "findAllFavorite handler"});
};