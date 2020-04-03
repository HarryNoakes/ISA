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

/**

<html>
<head>
<script type="text/javascript">

function updateFrame() {
var frame = document.getElementById("loopingFrame");
if(!frame.count)
{
frame.count = 1;
}
else
{
frame.count++;
}

var i = frame.count;

frame.src = "http://www.blahblah.com/blah" + i;

}
</script>
</head>
<body>
<iframe id="loopingFrame" src="http://www.blahblah.com/blah" onload="updateFrame();">
</iframe>
</body>
</html>
 http://www.dynamicdrive.com/forums/archive/index.php/t-29261.html
 **/