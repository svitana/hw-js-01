const a = Number(prompt('Input variable A:'));
const b = Number(prompt('Input variable B:'));
const c = Number(prompt('Input variable C:'));
const d = Number(b * b - 4 * a * c);
function checkX (a, b, c){
    if (d < 0){
        return 'no roots';
    } 
    else{
        if (d == 0){
        let x = - b / ( 2 * a);
        document.write('x = ' + x);
    }
    else{
            let x1 = ( - b + Math.sqrt( d ) ) / ( 2 * a);
            let x2 = ( - b - Math.sqrt( d ) ) / ( 2 * a);
            document.write('x1 = ' + x1 + '<br>x2 = ' + x2);
    }
}}
document.write ('<br>' + checkX(a, b, c));