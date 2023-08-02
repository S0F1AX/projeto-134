img="";
status="";
objects=[];
modelStatus="";

function preload()
{
   
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.size(640, 420);
    camera.center();
    camera.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detectando Objeto";
}

function draw()
{
    image(camera, 0, 0, 640, 420);

    if(modelStatus != "")
    {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(camera, gotResult);
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Objects Detectados";


            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }

}

if()

function modelLoaded()
{
    console.log("Model Loaded!");
    modelStatus = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
    objects=results;
}
