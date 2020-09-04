var circles = [];

var keybinds = {
    a: {
        color: '#9966cc',
        sound: new Howl({
            src: ['assets/sounds/bubbles.mp3']
        })
    },
    b: {
        color: 'blue',
        sound: new Howl({
            src: ['assets/sounds/clay.mp3']
        })
    },
    c: {
        color: '#a76b29',
        sound: new Howl({
            src: ['assets/sounds/confetti.mp3']
        })
    },
    d: {
        color: '#854c65',
        sound: new Howl({
            src: ['assets/sounds/corona.mp3']
        })
    },
    e: {
        color: '#555d50',
        sound: new Howl({
            src: ['assets/sounds/dotted-spiral.mp3']
        })
    },
    f: {
        color: '#228b22',
        sound: new Howl({
            src: ['assets/sounds/flash-1.mp3']
        })
    },
    g: {
        color: 'green',
        sound: new Howl({
            src: ['assets/sounds/flash-2.mp3']
        })
    },
    h: {
        color: '#ebaf4c',
        sound: new Howl({
            src: ['assets/sounds/flash-3.mp3']
        })
    },
    i: {
        color: '#a19d94',
        sound: new Howl({
            src: ['assets/sounds/glimmer.mp3']
        })
    },
    j: {
        color: '#00a86b',
        sound: new Howl({
            src: ['assets/sounds/moon.mp3']
        })
    },
    k: {
        color: '#cd7f84',
        sound: new Howl({
            src: ['assets/sounds/pinwheel.mp3']
        })
    },
    l: {
        color: '#967bb6',
        sound: new Howl({
            src: ['assets/sounds/piston-1.mp3']
        })
    },
    m: {
        color: 'magenta',
        sound: new Howl({
            src: ['assets/sounds/piston-2.mp3']
        })
    },
    n: {
        color: 'navy',
        sound: new Howl({
            src: ['assets/sounds/piston-3.mp3']
        })
    },
    o: {
        color: 'orange',
        sound: new Howl({
            src: ['assets/sounds/prism-1.mp3']
        })
    },
    p: {
        color: 'pink',
        sound: new Howl({
            src: ['assets/sounds/prism-2.mp3']
        })
    },
    q: {
        color: '#ff0010',
        sound: new Howl({
            src: ['assets/sounds/prism-3.mp3']
        })
    },
    r: {
        color: 'red',
        sound: new Howl({
            src: ['assets/sounds/splits.mp3']
        })
    },
    s: {
        color: '#006994',
        sound: new Howl({
            src: ['assets/sounds/squiggle.mp3']
        })
    },
    t: {
        color: 'turquoise',
        sound: new Howl({
            src: ['assets/sounds/strike.mp3']
        })
    },
    u: {
        color: '#5f4b8b',
        sound: new Howl({
            src: ['assets/sounds/suspension.mp3']
        })
    },
    v: {
        color: 'violet',
        sound: new Howl({
            src: ['assets/sounds/timer.mp3']
        })
    },
    w: {
        color: '#b11226',
        sound: new Howl({
            src: ['assets/sounds/ufo.mp3']
        })
    },
    x: {
        color: '#ffff80',
        sound: new Howl({
            src: ['assets/sounds/veil.mp3']
        })
    },
    y: {
        color: 'yellow',
        sound: new Howl({
            src: ['assets/sounds/wipe.mp3']
        })
    },
    z: {
        color: '#e36a7b',
        sound: new Howl({
            src: ['assets/sounds/zig-zag.mp3']
        })
    }
}

function onKeyDown(event) {
    if (keybinds[event.key]) {
        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint;
        var myCircle = new Path.Circle(point, 250);
        keybinds[event.key].sound.play();
        myCircle.fillColor = keybinds[event.key].color;
        circles.push(myCircle);
    }
}

function onFrame(event) {
    for (var i = 0; i < circles.length; i++) {
        circles[i].fillColor.hue += 1;
        circles[i].scale(0.9);
        if (circle[i].area < 1) {
            circles[i].remove();
            circles.splice(i, 1);
        }
    }
}
