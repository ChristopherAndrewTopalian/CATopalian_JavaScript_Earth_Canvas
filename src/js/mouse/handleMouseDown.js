// handleMouseDown.js

function handleMouseDown(e)
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
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

