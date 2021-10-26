canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = 5;
ctx.arc(250, 220, 40, 0, 2 * Math.PI);
ctx.stroke();

color = "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = 5;
ctx.arc(350, 220, 40, 0, 2 * Math.PI);
ctx.stroke();

color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = 5;
ctx.arc(450, 220, 40, 0, 2 * Math.PI);
ctx.stroke();

color = "yellow";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = 5;
ctx.arc(300, 260, 40, 0, 2 * Math.PI);
ctx.stroke();

color = "green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = 5;
ctx.arc(400, 260, 40, 0, 2 * Math.PI);
ctx.stroke();