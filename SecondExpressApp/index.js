let express = require('express');
let app = express();

let animal_sounds = { 'pig': 'Oink', 'cow': 'Moo', 'dog': 'Woof Woof!' };

app.get('/', function (req, res) {
    res.send('Hi there, welcome to our assignment!');
});

app.get('/speak/:animal', function (req, res) {
    let animal = req.params.animal;
    let sound;
    if (animal_sounds[String(animal)]) {
        sound = animal_sounds[String(animal)];
    }
    else {
        sound = '...';
    }
    res.send('The ' + animal + ' says \'' + sound + '\'');
});

app.get('/repeat/:phrase/:number', function (req, res) {
    let str = '';
    let phrase = req.params.phrase;
    let number = req.params.number;
    for (let i = 0; i < number; i++) {
        str += phrase;
        if (i != number - 1) {
            str += ' ';
        }
    }
    res.send(str);
});

app.get('*', function (req, res) {
    res.send('Sorry, page not found... What are you doing with your life?');
});

app.listen(3000, function () {
    console.log('Started serving at port 3000');
});