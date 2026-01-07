// handleMouseDown.js

function handleMouseDown(e) {
    panning = true;
    // store where the mouse started
    panningStart.x = e.offsetX;
    panningStart.y = e.offsetY;
}

function handleMouseDown2(e)
{
    // left mouse button
    if (e.button === 0)
    {
        panning = true;
        panningStart = { x: e.clientX, y: e.clientY };
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

