// var X = 4
// , Y = 1
// , jumpCount = 0
// , arr = [6,9,11,4,5];


// for (var i=0; i < 5; i++) {
//         H = arr[i];
//         console.log("Height: ", H)
//         do {
//             console.log("    ",H);
//             H = (H>X)?((H-X)+Y):0;
//             ++jumpCount
//         } while (H>0);
//     }
//     console.log(jumpCount);

// var wn = 6,
// sn = 102,
// W = "MexIco",
// S = "MexIcobMexIcobFILbMexIcobMexIcobjMexIcobvMexIcobMexIcobMexIcobgMexIcobdMexIcobZVMexIcobMexIcobaMexIcob"
// ,L = sn - wn + 1;
// for (i = 0; i < L; i++) {
//     var sub = S.substr(i, wn)
//     , subD = sub;
//     var notFound = false;
//     //console.log("Checking: ",sub);
//     for (j = 0; j < wn; j++) {
//         var idx = sub.indexOf(W[j]);
//         //console.log('   ' + W[j] + ' --> ' + sub + ' --> ' + idx);
//         if (!~idx) {
//             notFound = true
//             break;
//         }
//         sub = sub.replace(W[j],'');
//     }
//     if (!notFound) {
//         console.log(subD);
//     }
// }

/**
 * Formula : 3 X (i%n) + 10
 */

// var n = 3
// , nsq = n*n
// , i = 0
// , j = 0
// , arr = []
// , main = [];

// for (i = 0; i < nsq; i++) {
//     if (i%n === 0) {
//         for (j=1;j<=nsq;j++) {
//             // var mark =  //3,6,9
//             x = j + i/n; //1+0,2+1,3+2
//             x = x>(n*Math.ceil(j/n))?x-n:x;
//             arr[j-1]=x;
//         }
//     }
//     main[i] = [];
//     for (j = 0; j < nsq; j++) {
//         var idx = n*i+j;
//         idx = idx<nsq?idx:idx%nsq;
//         main[i][j] = arr[idx];
//     }
// }

// console.log(main);
// var main = [];
// main[0] = [1,0,0,0];
// main[1] = [0,0,2,0];
// main[2] = [0,3,0,0];
// main[3] = [0,0,0,4];

// var n = 4//parseInt(stdin.readLine())
//     , nsq = 4//parseInt(stdin.readLine())
//     , i = 0
//     , j = 0
//     , arr = []
//     , input
//     , valid = 1
//     , x;
    
//     nsq = n*nsq;
    
//     for (i = 0; i < nsq; i++) {
//         if (i%n === 0) {
//             for (j=1;j<=nsq;j++) {
//                 // var mark =  //3,6,9
//                 x = j + i/n; //1+0,2+1,3+2
//                 x = x>(n*Math.ceil(j/n))?x-n:x;
//                 arr[j-1]=x;
//             }
//         }
//         for (j = 0; j < nsq; j++) {
//             //input = parseInt(stdin.readLine());
//             input  = main[i][j];
//             if (input) {
//                 var idx = n*i+j;
//                 idx = idx<nsq?idx:idx%nsq;
//                 //main[i][j] = arr[idx];   
//                 if (arr[idx] !== input) {
//                     valid = 0;
//                     break
//                 }
//             }
//         }
//         if (valid === 0 ) break;
//     }

//     if (valid === 0) {
//         for (i; i < nsq; i++) {
//             for (j; j<nsq; j++) {
//                 //stdin.readLine();
//             }
//             j = 0;
//         }
//     }
    
//     console.log(valid);

//////////////PAGE/////////////////////////////

var currentPage = parseInt(process.env.page) || 3;

var maxDisplayPage = 7;

var totalPage = parseInt(process.env.tpage) || 10;

var dots = {
    display:'...',
    selectable:false
};
var leftExtreme = [];
var rightExtreme = [];
var pages = [];

if (!totalPage>maxDisplayPage) {
    for (var i=1; i<=totalPage; i++) {
        pages.push({display:i,selectable:true})
    }
} else {
    //min three positions are always occupied by 1, ..., totalPage
    if (currentPage<(maxDisplayPage-2)) {
        if (leftExtreme.length === 0) {
            for (var i = 1; i<maxDisplayPage-2;i++) {
                leftExtreme.push({display:i,selectable:true})
            }
            leftExtreme.push(dots);
            leftExtreme.push({display:maxDisplayPage,selectable:true});
        }
        pages = leftExtreme;
    } else if (currentPage>(totalPage-(maxDisplayPage-2))) {
        if (rightExtreme.length === 0) {
            rightExtreme.push({display:1,selectable:true});
            rightExtreme.push(dots);
            for (var i = (totalPage-(maxDisplayPage-2)); i<=maxDisplayPage;i++) {
                rightExtreme.push({display:i,selectable:true})
            }
        }
        pages = rightExtreme;
    } else {
        rightExtreme.push({display:1,selectable:true});
            rightExtreme.push(dots);
    }
}