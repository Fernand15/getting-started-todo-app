const GREETING = [
    "Bienvenue !",
    "Bonjour !",
    "Voyons ce que vous avez à faire aujourd'hui",

];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING[Math.floor(Math.random()*GREETING.length)],
    });
};
