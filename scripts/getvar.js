/*
    cc  Course Code
    cn  Course Name

    tn  Teacher Name
    tc  Teacher Short Code
    td  Teacher Designation

    ah  Assignment Heading
    at  Assignment Topic

    sn  Student Name
    sc  Student Code
    sb  Student Batch
    ss  Student Section

    sd  Submission Date

    dn  Department Name
    un  University Name
*/

// Get URL variables
function getVar(link) {
    let vars = {};
    link.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function fillGaps() {
    let fields = document.querySelectorAll('input[name], span[name]');

    for (let x = 0; x < fields.length; x++) {
        if (typeof getVar(window.location.href)[fields[x].getAttribute('name')] !== 'undefined') {
            if (fields[x].tagName.match(/input/i)) {
                fields[x].value = decodeURIComponent(getVar(window.location.href)[fields[x].getAttribute('name')]).replace(/\+/g,' ');
            } else {
                fields[x].textContent = decodeURIComponent(getVar(window.location.href)[fields[x].getAttribute('name')]).replace(/\+/g,' ');
            }
        }
    }
}

fillGaps();