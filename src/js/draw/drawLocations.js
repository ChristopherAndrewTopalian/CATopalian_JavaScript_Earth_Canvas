// drawLocations.js

function drawLocations()
{
    ctx.clearRect(0, 0, map.width, map.height);

    for (let i = 0; i < locations.length; i++) 
    {
        let location = locations[i];

        let pxCoordinates = gpsToPx(location.latitude, location.longitude);

        ctx.beginPath();
        ctx.arc(pxCoordinates.x, pxCoordinates.y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();

        //-//

        ctx.font = '15px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText(location.name, pxCoordinates.x + 6, pxCoordinates.y + 4);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

