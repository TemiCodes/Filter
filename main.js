nosex= 0
nosey= 0
userchose=""
function preload() {
    pokeball=loadImage("https://i.postimg.cc/D0mQTm6H/index-removebg-preview.png")
    clown=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
    
}
function setup() {
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    poseNet=ml5.poseNet(video, modelloaded)
    poseNet.on("pose", gotPoses)
    
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        console.log("nosex= " +results[0].pose.nose.x)
        console.log("nosey= " +results[0].pose.nose.y)
        nosex=results[0].pose.nose.x-20
        nosey=results[0].pose.nose.y-20

    }
}
function modelloaded() {
    console.log("Model Loaded: PoseNet")
    
}
function Take_snap() {
    save("Yourpic.png")
}

function draw() {
    image(video, 0,0,300,300 )
    if (userchose == "pokeball" ) {
        image(pokeball, nosex, nosey, 40,40)
        
    } else {
        
        image(clown, nosex, nosey, 40,40)
        
    }
    
}
function Apply() {
    userchose=document.getElementById("imag").value
    draw()
    
}
