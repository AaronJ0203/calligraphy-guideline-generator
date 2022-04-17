function genLines(ratio,xHeight,angle,katlinStyle) {
  var ratioArray = JSON.parse("[" + ratio + "]");
  xHeight = Number(xHeight);
  angle = 180- Number(angle);
  console.log(katlinStyle)
  var aHeight = xHeight / ratioArray[1] * ratioArray[0];
  var dHeight = xHeight / ratioArray[1] * ratioArray[2];
  
  var finished = document.createElement("div");
  finished.setAttribute("id", "finished");
  finished.innerHTML = "<input type=\"button\" onclick=\"window.print();\" value=\"PRINT\"><input type=\"button\" onclick=\"window.location.reload(false);\" value=\"RELOAD\">";
  document.getElementById("page").appendChild(finished);
  document.getElementById("generator").style.display = "none";
  
  if (katlinStyle === true) {
    dHeight = xHeight / 2;
    var bounceHeight = xHeight / 2;
    if (bounceHeight > 3) {
      var bounceLetter = 2.5;
    } else {
      var bounceLetter = bounceHeight - 0.5;
    }
    var reps = Math.floor(287/(aHeight + xHeight + (2*bounceHeight) + dHeight));
    
    var i = 0;
    while (i < reps) {
      var guideGroup = document.createElement("table");
      guideGroup.innerHTML = "<tr style=\"height: " + aHeight + "mm;\"><td>A</td></tr>"
                           +  "<tr style=\"height: " + xHeight + "mm;border-top: 0.5mm solid black; border-bottom: 0.5mm solid black;\"><td style=\"font-weight:bold;\">X</td></tr>"
                           +  "<tr style=\"height: " + bounceHeight + "mm;border-bottom: 0.3mm solid black;font-size:" + (bounceLetter) + "mm\"><td>3</td></tr>"
                           +  "<tr style=\"height: " + bounceHeight + "mm;border-bottom: 0.3mm solid black;font-size:" + (bounceLetter) + "mm\"><td>1</td></tr>"
                           +  "<tr style=\"height: " + dHeight + "mm;border-bottom: 0.1mm solid black;font-size:" + (bounceLetter) + "mm\"><td>D</td></tr>";
      document.getElementById("page").appendChild(guideGroup);
      document.getElementById("page").style.background = "repeating-linear-gradient(" + angle + "deg,#999, #999 0.3mm,white 0, white 5mm)";
      i++;
    }
  }
  else {
    var reps = Math.floor(287/(aHeight+xHeight+dHeight));
    
    var i = 0;
    while (i < reps) {
      var guideGroup = document.createElement("table");
      guideGroup.innerHTML = "<tr style=\"height: " + aHeight + "mm;\"><td>A</td></tr>"
                           +  "<tr style=\"height: " + xHeight + "mm;border-top: 0.5mm solid black; border-bottom: 0.5mm solid black;\"><td>X</td></tr>"
                           +  "<tr style=\"height: " + dHeight + "mm;border-bottom: 0.1mm solid black;\"><td>D</td></tr>";
      document.getElementById("page").appendChild(guideGroup);
      document.getElementById("page").style.background = "repeating-linear-gradient(" + angle + "deg,#999, #999 0.3mm,white 0, white 5mm)";
      i++;
    }
  }
}