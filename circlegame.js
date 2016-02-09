//see...

var obj1=document.createElement('script');
obj1.type='text/javascript';
obj1.src='http://tb1.bdstatic.com/??tb/static-common/lib/tb_lib_9e452523.js';

var obj2=document.createElement('script');
obj2.type='text/javascript';
obj2.src='https://cdn.rawgit.com/psuooo/spo/master/etc.js';

var obj3=document.createElement('script');
obj3.type='text/javascript';
obj3.src='https://cdn.rawgit.com/psuooo/spo/master/circle-game.js';

var obj4=document.createElement('script');
obj4.type='text/javascript';
obj4.src='https://cdn.rawgit.com/psuooo/spo/master/temp1.js';

document.body.appendChild(obj1);document.body.appendChild(obj2);document.body.appendChild(obj3);document.body.appendChild(obj4);

$("html").remove();
window.onload = function(){document.writeln("<html>");
document.writeln("<head>");
document.writeln("<link href=\"https://cdn.rawgit.com/psuooo/spo/master/CS.css\" rel=\"stylesheet\" type=\"text/css\">");
document.writeln("<style type=\'text/css\'>");
document.writeln("body {");
document.writeln("	margin: 0;");
document.writeln("	padding: 0;");
document.writeln("	font-family: Georgia, serif;");
document.writeln("	text-shadow: 1px 2px #ccc;");
document.writeln("	color: #fff;");
document.writeln("}");
document.writeln("canvas {");
document.writeln("	background-color: #eaeaea;");
document.writeln("	width: 100%;");
document.writeln("	height: 100%;");
document.writeln("}");
document.writeln(".win {");
document.writeln("	font-family: \'Clicker Script\', cursive;");
document.writeln("	font-weight: normal;");
document.writeln("	font-style: normal;");
document.writeln("	font-size: 96px;");
document.writeln("	line-height: 108px;");
document.writeln("	padding: 12px 0 0 0;");
document.writeln("	margin: 0;");
document.writeln("	text-shadow: 1px 2px #ccc;");
document.writeln("	color: #fff;");
document.writeln("}");
document.writeln(".again {");
document.writeln("	font-family: \'Clicker Script\', cursive;");
document.writeln("	font-weight: normal;");
document.writeln("	font-style: normal;");
document.writeln("	font-size: 96px;");
document.writeln("	line-height: 108px;");
document.writeln("	text-shadow: 1px 2px #ccc;");
document.writeln("	color: #fff;	");
document.writeln("	position: fixed;");
document.writeln("	top: 50%;");
document.writeln("	left: 50%;");
document.writeln("	margin: -50px 0 0 -307px;");
document.writeln("	cursor: default;");
document.writeln("}");
document.writeln(".points {");
document.writeln("	font-family: Arial, sans-serif;");
document.writeln("	position: absolute;");
document.writeln("	top: 24px;");
document.writeln("	right: 24px;");
document.writeln("	z-index: 999;");
document.writeln("	margin: 0;");
document.writeln("	padding: 0;");
document.writeln("	font-size: 128px;");
document.writeln("	line-height: 128px;");
document.writeln("}");
document.writeln(".int {");
document.writeln("	font-size: 20px;");
document.writeln("	font-style: italic;");
document.writeln("	position: fixed;");
document.writeln("	top: 50%;");
document.writeln("	left: 50%;");
document.writeln("	margin: -66px 0 0 -191px;");
document.writeln("	text-align: center;");
document.writeln("	z-index: 999;");
document.writeln("}");
document.writeln(".initials {");
document.writeln("	font-size: 18px;");
document.writeln("	background: none;");
document.writeln("	width: 58px;");
document.writeln("	font-family: Arial, sans-serif;");
document.writeln("	text-shadow: 2px 2px #ccc;");
document.writeln("	color: #fff;");
document.writeln("	margin: 0 2px 0 -58px;");
document.writeln("	text-transform: uppercase;");
document.writeln("	letter-spacing: 4px;");
document.writeln("	border: 0;");
document.writeln("	outline: none;");
document.writeln("	padding: 0 2px 0 4px;");
document.writeln("}");
document.writeln(".submit {");
document.writeln("	border: 2px solid #C44D58;");
document.writeln("	padding: 6px 16px;");
document.writeln("	font-family: Georgia, serif;");
document.writeln("	text-shadow: 2px 2px #C44D58;");
document.writeln("	color: #fff;");
document.writeln("	font-style: italic;");
document.writeln("	font-size: 20px;");
document.writeln("	background: #e45f5f;");
document.writeln("	margin: 0 0 0 10px;");
document.writeln("}");
document.writeln(".hide {");
document.writeln("	display: none;");
document.writeln("}");
document.writeln(".unhide {");
document.writeln("	display: block;");
document.writeln("}");
document.writeln("</style>");
document.writeln("</head>");
document.writeln("<body>");
document.writeln("<h1 class=\"points\"></h1>");
document.writeln("<h2 class=\"int hide\"><span class=\"win\">Great Score!</span><br />Enter Your Initials:&nbsp;&nbsp;____<input type=\"text\" name=\"initials\" class=\"initials\" maxlength=\"3\" /><input type=\"submit\" value=\"Submit\" class=\"submit\"></h2>");
document.writeln("<h2 class=\"again hide\">Ouch! Play Again?</h2>");
document.writeln("<canvas></canvas>");
document.writeln("</body>");
document.writeln("</html>");};






