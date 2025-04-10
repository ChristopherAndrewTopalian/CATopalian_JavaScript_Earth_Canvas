// gpsToPx.js

function gpsToPx(latitude, longitude)
{
    let x = (longitude / resolution) * 800;
    let y = (latitude / resolution) * 600;
    return { x, y };
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

