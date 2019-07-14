// JavaScript source code
// a file to load the css file into the linked html that is otherwise bare
// show how the javascript can create this link, and style a html template through css
const new_temp = 'new_template.html';


function load_blue_html() {
    localStorage.setItem('cess_file', 'blue_temp.css')
    window.location = new_temp;
}

function load_red_html() {
    localStorage.setItem('cess_file', 'red_temp.css')
    window.location = new_temp;
}
function load_purple_html() {
    localStorage.setItem('cess_file', 'purple_temp.css')
    window.location = new_temp;

}

window.onload = function() {
    let red_link = document.getElementById("red_temp");
    red_link.addEventListener('click', load_red_html);
    let purple_link = document.getElementById("purple_temp");
    purple_link.addEventListener('click', load_purple_html);
    let blue_link = document.getElementById("blue_temp");
    blue_link.addEventListener('click', load_blue_html);

};