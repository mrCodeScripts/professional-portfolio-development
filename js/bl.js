"use strict";

const canvas = document.getElementById("bouncing-bl");
const width = window.innerWidth;
const height = window.innerHeight;
const ctx = canvas.getContext("2d");
ctx.imageSmoothingQuality = "high";
const fps = 120;
canvas.width = width;
canvas.height = height;
const container = [];
const population = 100;
let inc = 0;

window.addEventListener("resize", () => {
    const newH = window.innerHeight;
    const newW = window.innerWidth;
    canvas.width = newW;
    canvas.height = newH;
});

function randomColor  () {
    inc++;
    return `hsl(${inc}, 100%, 50%)`;
};

class blParticles {
    constructor (x, y, vx, vy, c, r, s) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.c = c;
        this.r = r;
        this.s = s;
    }

    render () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = this.s;
        ctx.stroke();
        ctx.fillStyle = this.c;
        ctx.fill();
        ctx.closePath();
    }

    move () {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x + this.r > width || this.x - this.r < 0) {
            this.vx *= -1;
        }
        if (this.y + this.r > height || this.y - this.r < 0) {
            this.vy *= -1;
        }
        if (this.x + this.r > width) {
            this.x = width - this.r;
        }
        if (this.x - this.r < 0) {
            this.x = this.r;
        }
        if (this.y + this.r > height) {
            this.y = height - this.r;
        }
        if (this.y - this.r < 0) {
            this.y = this.r;
        }
    }

    randomMoves(min, max) {
        this.vx += Math.random() * (max - min) + min; 
        this.vy += Math.random() * (max - min) + min; 

        if (this.vx > 0.1) this.vx = 0.1;
        if (this.vx < -0.1) this.vx = -0.1;

        if (this.vy > 0.1) this.vy = 0.1;
        if (this.vy < -0.1) this.vy = -0.1;
    }
};

for (let i = 0; i < population; i++) {
    container.push(new blParticles(
        Math.random() * (width),
        Math.random() * (height),
        Math.random() * 0.03, 
        Math.random() * 0.03, 
        "#00f09f", 
        Math.random() * 1, 
        "#00f09f"
    ));
}

function resolveCollision(b1, b2) {
    let dx = b2.x - b1.x;
    let dy = b2.y - b1.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance === 0) return;

    let overlap = (b1.r + b2.r) - distance;
    let pushX = (dx / distance) * (overlap / 2);
    let pushY = (dy / distance) * (overlap / 2);

    b1.x -= pushX;
    b1.y -= pushY;
    b2.x += pushX;
    b2.y += pushY;

    let nx = dx / distance;
    let ny = dy / distance;

    let dvx = b1.vx - b2.vx;
    let dvy = b1.vy - b2.vy;

    let dot = dvx * nx + dvy * ny;

    if (dot > 0) return;

    let elasticity = 1; 
    let impulse = (2 * dot) / (b1.mass + b2.mass);

    b1.vx -= impulse * b2.mass * nx * elasticity;
    b1.vy -= impulse * b2.mass * ny * elasticity;
    b2.vx += impulse * b1.mass * nx * elasticity;
    b2.vy += impulse * b1.mass * ny * elasticity;
}

function animation () {
    ctx.clearRect(0, 0, width, height);
    container.forEach(particle => {
        particle.render(); 
        particle.move();
        particle.randomMoves(-0.01, 0.01);
    });

    for (let i = 0; i < container.length; i++) {
        for (let j = i + 1; j < container.length; j++) { 
            const b1 = container[i];
            const b2 = container[j];

            const dx = b2.x - b1.x;
            const dy = b2.y - b1.y;
            const d = Math.sqrt(dx * dx + dy * dy);

            if (b1 === b2) return;

            if (d <= b1.r + b2.r) {
                resolveCollision(b1, b2);
                
            }

            const ballD = d - (b1.r + b2.r);

            // REMINDER: THIS PART OF THE CODE IS NOT IMPLEMENTED (NO TOUCH DETECTION)
        }
    }
}

window.setInterval(() => animation(), fps/1000);
