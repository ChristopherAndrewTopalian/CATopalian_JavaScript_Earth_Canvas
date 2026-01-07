// handleMouseMove.js

function handleMouseMove(e)
{
    if (!panning) return;

    // calculate how far the mouse moved
    let dx = e.offsetX - panningStart.x;
    let dy = e.offsetY - panningStart.y;

    // update the camera center
    cameraCenter.x -= dx;
    cameraCenter.y -= dy;

    // reset start point for the next move tick
    panningStart.x = e.offsetX;
    panningStart.y = e.offsetY;

    drawLocations(); // redraw with new position
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

