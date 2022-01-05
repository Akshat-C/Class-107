function start_sound()
{
    navigator.mediaDevices.getUserMedia({
        audio : true
    });
c = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/by_QU-9in/model.json", modelReady);
}

function modelReady()
{
    c.classify(gotResults);
}

function gotResults(error, results)
{
    if (error)
    {
        console.error(error);
    } else 
    {
        console.log(results);
    }
}