left_wristX = ""
left_wristY = ""
right_wristX = ""
right_wristY = ""
score_left_wrist = ""
status = ""

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
    console.log(results);
    left_wristX = results[0].pose.leftWrist.x;
    left_wristY = results[0].pose.leftWrist.y;
    console.log("Left wrist x: " + leftWristX + "Left wrist y: " + leftWristY);
    right_wristX = results[0].pose.rightWrist.x;
    right_wristY = results[0].pose.rightWrist.y;
    console.log("right wrist x: " + rightWristX + "right wrist y: " + rightWristY);
    score_left_wrist = results[0].pose.keypoints[0].score;
}

function modelLoaded() {
    console.log("PoseNet model has loaded");
}

function draw() {
    image(video, 0, 0, 300, 300);
    stroke("FB91FB");
    fill("F5C4F5");
    status = document.getElementById("song1");
    if (score_left_wrist > 0.2) {
        circle(left_wristX, left_wristY, 30);

        function stop() {
            song2.stop();
        }
    }
    if (status = false) {
        function play {
            song1.play();
            song1.setVolume(1)
            song1.rate(1);
        }
    }
    document.getElementById("song_name").innerHTML = "Song: " + song1
}
