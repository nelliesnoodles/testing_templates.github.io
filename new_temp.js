// JavaScript source code
// get the css file from local storage, create a link in head on load


function set_css() {
    try {
        let newcss = localStorage.getItem('cess_file');
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = newcss;
        link.media = 'all';
        head.appendChild(link);
    }
    catch (err) {
        console.log("Error retrieving localStorage item: cess_file")
        console.log(err.message);
    }

}

window.onload = set_css();
