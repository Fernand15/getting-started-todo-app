const GREETING = [
    "Bienvenue !",
    "Bonjour !",
    "Voyons ce que vous avez à faire aujourd'hui",

];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length )],
    });
};
