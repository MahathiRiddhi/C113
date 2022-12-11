var url = "https://teachablemachine.withgoogle.com/models/rtjbsGvOZ/"
Webcam.attach("#webcam")
Webcam.set({
    width: 350,
    height: 250,
    image_format: "png",
    png_quality: 90
})
function snapShot() {
    Webcam.snap(function (dataUri) {
        document.getElementById("result").innerHTML = "<img id = 'image' src = '" + dataUri + "'></img>"
    })
}
console.log(ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/rtjbsGvOZ/model.json", modelLoaded)

function modelLoaded() {
    console.log("Modal Loaded")
}
function check(){
    capturedImage = document.getElementById("image")
    classifier.classify(capturedImage,gotResult)

} 
function gotResult(error,results){
    if (error){
        console.error(error)
    }
    else{
        console.log(results)
        console.log(results[0].label,results[0].confidence)
        document.getElementById("objectName").innerHTML = results[0].label
        document.getElementById("objectAccuracy").innerHTML =  (results[0].confidence*100).toFixed(2)+"%"
        
    }
}
