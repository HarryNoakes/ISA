 function toShow(id) {
    var iframeId = document.getElementById(id).nextElementSibling;

    iframeId.style.display = "block";
    document.getElementById( id ).setAttribute( "onClick", "javascript: toHide(this.id);" );
}
 function toHide(id) {
    var iframeId = document.getElementById(id).nextElementSibling;
    iframeId.style.display = "none";
    document.getElementById( id ).setAttribute( "onClick", "javascript: toShow(this.id);" );
}