// handleMouseMove.js

function handleMouseMove(e)
{
    if (panning)
    {
        let offsetX = (e.clientX - panningStart.x) * scale;

        let offsetY = (e.clientY - panningStart.y) * scale;

        for (let i = 0; i < locations.length; i++) 
        {
            let location = locations[i];

            location.longitude += offsetX;

            location.latitude += offsetY;
        }

        panningStart = { x: e.clientX, y: e.clientY };

        drawLocations();
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

