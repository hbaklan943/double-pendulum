let poses = [];

let a1 = Math.PI * 0.6;
let a2 = 0;
let a1_vel = 0;
let a2_vel = 0;
let a1_acc = 0;
let a2_acc = 0;
let friction = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    let m1 = m1SliderValue;
    let m2 = m2SliderValue;
    let r1 = r1SliderValue;
    let r2 = r2SliderValue;
    let g = gSliderValue / (60 * 60);

    a1_acc = (-g * (2 * m1 + m2) * sin(a1) - m2 * g * sin(a1 - 2 * a2) - 2 * sin(a1 - a2) * m2 * (a2_vel * a2_vel * r2 + a1_vel * a1_vel * r1 * cos(a1 - a2))) / (r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2)));
    a2_acc = (2 * sin(a1 - a2) * (a1_vel * a1_vel * r1 * (m1 + m2) + g * (m1 + m2) * cos(a1) + a2_vel * a2_vel * r2 * m2 * cos(a1 - a2))) / (r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2)));
    background('#1f1f1d');
    stroke('#f0efec');
    strokeWeight(1);
    translate(windowWidth / 2, 80);

    let x1 = r1 * sin(a1) * 175;
    let y1 = r1 * cos(a1) * 175;

    let x2 = x1 + (r2 * sin(a2) * 170);
    let y2 = y1 + (r2 * cos(a2) * 170);

    line(0, 0, x1, y1);
    line(x1, y1, x2, y2);

    noStroke();
    fill('#d03c13');
    ellipse(x1, y1, m1 * 5, m1 * 5);
    ellipse(x2, y2, m2 * 5, m2 * 5);

    a1_vel += a1_acc;
    a2_vel += a2_acc;
    a1 += a1_vel;
    a2 += a2_vel;

    if (!trailSwitchValue) {
        poses = [];
    }
    // Add current position to locs array
    poses.push({ x: x2, y: y2 });

    // Remove the oldest mouse location after 50 frames
    if (poses.length > 1000) poses.shift();

    for (let p = 0; p < poses.length; p++) {
        let pos = poses[p];
        ellipse(pos.x, pos.y, m2 * 0.5, m2 * 0.5);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

