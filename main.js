function preload() {

}
function setup() {
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw() {
    image(video,0,0,640,480);
    tint(tint_color);
    circle(5, 5, 100);
    fill(5, 5, 100);
    stroke(5, 5, 100);
    circle(630, 5, 100);
    circle(5, 470, 100);
    circle(630, 470, 100);
}
function take_snapshot() {
    save('student_name.png');
}
function filter_tint() {
    tint_color=document.getElementById("color_name").value;
}