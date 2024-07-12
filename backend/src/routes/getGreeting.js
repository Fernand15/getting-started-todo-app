const GREETING = "Bienvenue !";

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
