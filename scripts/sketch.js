let gf = 0;
let v = 0.0025;
let dva = 1;
let dvb = 2.5;
let dvc = 0.7;
let dvd = 1.7;
let gons;

function setup() {
	gons = [
		color(11, 20, 141, 20),
		color(24, 110, 192, 20),
		color(86, 227, 245, 20),
		color(242, 226, 24, 20),
		color(239, 131, 33, 20),
		color(11, 20, 141, 20),
		color(24, 110, 192, 20),
		color(86, 227, 245, 20),
		color(242, 226, 24, 20),
		color(239, 131, 33, 20)
	];
	gf = 0;
	createCanvas(windowWidth, windowHeight);
	background(18, 14, 41);
}

function draw() {
	background(18, 14, 41, 8);
	translate(width / 2, height / 2);
	drawQuads();
	translate(-width / 2, -height / 2);
	drawOverlay();
}

function screenDiagonal()
{
	return sqrt(width * width + height * height);
}

function fx(f)
{
	return sin(f);
}

function fy(f)
{
	return cos(f);
}

function dfa(p) { return p * dva; }
function dfb(p) { return p * dvb; }
function dfc(p) { return p * dvc; }
function dfd(p) { return p * dvd; }

function drawQuads()
{
	gf += v;
	let fx = sin(gf);
	let fy = cos(gf);
	for (var i = 0; i < gons.length; ++i)
	{
		fill(gons[i]);
		let sign = 1 - 2 * (i % 2)
		drawQuad(sign * gf + 73 * i);
	}
}

function drawQuad(f)
{
	noStroke();
	let radius = screenDiagonal() / 2 * fx(f);
	let ax = fx(dfa(f)) * radius;
	let ay = fy(dfa(f)) * radius;
	let bx = fx(dfb(f) + PI / 2) * radius;
	let by = fy(dfb(f) + PI / 2) * radius;
	let cx = fx(dfc(f) + PI) * radius;
	let cy = fy(dfc(f) + PI) * radius;
	let dx = fx(dfd(f) + 3 * PI / 2) * radius;
	let dy = fy(dfd(f) + 3 * PI / 2) * radius;
	quad(ax, ay, bx, by, cx, cy, dx, dy);
}

function drawOverlay()
{
	for (var y = 0; y < height; y += 3)
	{
		stroke(0);
		line(0, y, width, y);
	}
}