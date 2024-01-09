require('dotenv').config()
const controller = {}

controller.home = async (req, res) => {
    const api = process.env.API_KEY;
    
    const data =  fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${api}`);
    await  data.then(res => res.json()).then(info => {
    res.render('index',{info})
    });
}

controller.searching = async (req, res) => {
    const api = process.env.API_KEY;
    const {ipInput} = req.body;
    const data =  fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${api}&ipAddress=${ipInput}`);
    await  data.then(res => res.json()).then(info => {

    res.render('index',{info})
        
    });
}

module.exports = controller;