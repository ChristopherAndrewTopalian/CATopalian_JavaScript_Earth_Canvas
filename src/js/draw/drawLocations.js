// drawLocations.js

function drawLocations()
{
    // always clear using the full physical width/height
    // since we scaled the context, we use the client size
    let displayW = map.clientWidth;
    let displayH = map.clientHeight;
    
    ctx.clearRect(0, 0, displayW, displayH);

    for (let i = 0; i < locations.length; i++)
    {
        let location = locations[i];
        let px = gpsToPx(location.latitude, location.longitude);

        // use displayW/H (not map.width) for centering
        let screenX = px.x - cameraCenter.x + (displayW / 2);
        let screenY = px.y - cameraCenter.y + (displayH / 2);

        ctx.beginPath();
        ctx.arc(screenX, screenY, 5, 0, 2 * Math.PI);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();

        ctx.font = '15px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText(location.name, screenX + 6, screenY + 4);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

