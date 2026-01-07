// gpsToPx.js

function gpsToPx(latitude, longitude)
{
    let minLat = 40.68;
    let maxLat = 40.75;
    let minLon = -74.05;
    let maxLon = -73.97;

    // use clientWidth/Height instead of hardcoded numbers
    // this ensures the math matches the 800x600 'logical' box
    let logicalW = map.clientWidth;
    let logicalH = map.clientHeight;

    let x = ((longitude - minLon) / (maxLon - minLon)) * logicalW;

    let y = ((maxLat - latitude) / (maxLat - minLat)) * logicalH;

    return { x: x, y: y };
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

