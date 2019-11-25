var c = document.getElementById('mon_canvas');
var ctx = c.getContext('2d');
ctx.beginPath();//début du chemin
ctx.moveTo(50,200);//le tracé part du point 50,200
ctx.bezierCurveTo(50,200,200,100,350,200);//défini le tracé du cône
ctx.bezierCurveTo(350,200,200,300,50,200);//défini le tracé du cône
ctx.moveTo(150,165);//le tracé part du point 150,165
ctx.bezierCurveTo(150,150,200,50,250,165);//défini le tracé du cône
ctx.closePath();//fermeture du chemin
ctx.fillStyle = 'white'//défini une couleur de remplissage
ctx.fill();//défini et rempli la soucoupe
