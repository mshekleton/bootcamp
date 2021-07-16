
document.getElementById('box').style['opacity'] = 1;
document.getElementById('box').style['transform'] = 'skew(0deg)';
document.getElementById('button0').addEventListener('click', skewIt);
document.getElementById('button1').addEventListener('click', grow);
document.getElementById('button2').addEventListener('click', blue);
document.getElementById('button3').addEventListener('click', fade);
document.getElementById('button4').addEventListener('click', reset);





function skewIt() {
    //transform: skew(20deg);
    skew = parseInt(document.getElementById('box').style['transform'].slice(document.getElementById('box').style['transform'].indexOf("(") + 1, document.getElementById('box').style['transform'].indexOf("d")), 10);
    console.log(skew);
    document.getElementById('box').style['transform'] = "skew(" + (skew + 10) + 'deg)';
}

function grow() {
    height = parseInt(document.getElementById('box').style['height'], 10); // radix = 10
    width = parseInt(document.getElementById('box').style['width'], 10); // radix = 10
    document.getElementById('box').style['height'] = (height + 50) + 'px';
    document.getElementById('box').style['width'] = (width + 50) + 'px';
}

function blue() {
    document.getElementById('box').style['background-color'] = 'blue';
}

function fade() {
    opacity = document.getElementById('box').style['opacity'];
    document.getElementById('box').style['opacity'] = opacity - 0.1;
}

function reset() {
    document.getElementById('box').setAttribute('style', 'height:150px; width:150px; background-color:orange; margin:25px; opacity:1; transform:skew(0deg);');
}