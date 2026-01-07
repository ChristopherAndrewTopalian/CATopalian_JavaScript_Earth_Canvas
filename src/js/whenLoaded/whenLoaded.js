// whenLoaded.js

function whenLoaded()
{
    makeCanvas();

    map = ge('map');

    ctx = map.getContext('2d');

    // account for devicePixelRatio
    const scale = window.devicePixelRatio || 1;

    // set the canvas size
    ge('map').width = ge('map').clientWidth * scale;
    ge('map').height = ge('map').clientHeight * scale;

    // scale drawing context so it looks correct
    ctx.scale(scale, scale);

    //-//

    map.addEventListener('mousedown', handleMouseDown);

    map.addEventListener('mouseup', handleMouseUp);

    map.addEventListener('mousemove', handleMouseMove);

    makeTitleOfApp();

    let centerGPS = gpsToPx(locations[0].latitude, locations[0].longitude);

    cameraCenter.x = centerGPS.x;
    cameraCenter.y = centerGPS.y;

    drawLocations();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

