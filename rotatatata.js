var elements = document.getElementsByClassName('shape pyramid-1 pyr-1');
elements[0].style.transform = 'translate3D(0em, -1.7125em, 0em) rotateX(90deg) rotateY(0deg) rotateZ(0deg)';
var i = 0;
var ymin = -1.7125;
var ymax = 2;
var ycounter=-1.7125;
var flag=false;
function kek() {
    i++;
    // ycounter=ycounter+0.05;
    if (flag==true) {
        if (ycounter < ymax) {
            ycounter=ycounter+0.05;
            };
        };
    
    if (flag == false) {
        if (ycounter > ymin) {
            ycounter=ycounter-0.05;
        };
    };
    elements[0].style.transform = 'translate3D(0em,'+ycounter+'em, 0em) rotateX(0deg) rotateY('+i+'deg) rotateZ(180deg)';
    if (i == 360) {
       i=0; 
    };
};
var elements2 = document.getElementsByClassName('shape pyramid-2 pyr-2');
elements2[0].style.transform = 'translate3D(0em, -6.6875em, 0em) rotateX(90deg) rotateY(0deg) rotateZ(0deg)';
var i = 0;
function kek2() {
    i++;
    elements2[0].style.transform = 'translate3D(0em, -6.6875em, 0em) rotateX(0deg) rotateY('+i+'deg) rotateZ(0deg)';
    if (i == 360) {
        i=0; 
     }
}; 
let timerId = setInterval(() => {kek();kek2()}, 20);

