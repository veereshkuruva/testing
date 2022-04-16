
//  [['adam', 23], ['peter', 56], ['john', 80]]



 // Answer

//  var obj = {

//      'adam' : 23,

//      'peter': 56,

//      'john' : 80

//  }

//  const arr = [['adam', 23], ['peter', 56], ['john', 80]];
//  const newArray =arr.map((curVal)=>{
//    return `${curVal}`
//  })
// //  console.log( newArray);

// // const arr = [['adam', 23], ['peter', 56], ['john', 80]];

// // const array1 = (arr = []) => {
// //    const res = {};
// //    for(pair of arr){
// //       const [name, age] = pair;
// //       res[name] =age;
// //    };
// //    return res;
// // };
// // console.log(array1(arr));


// // var a=[12,3,5,6,7]
// // for(let elements in a){  //for in loop
// //     console.log(elements);
// // }

// // var a=[12,3,5,6,7]
// // for(let elements of a){  //for of loop
// //     console.log(elements);
// // }

// //   var tomr = 'monday';

// //   if(tomr == 'sunday') {
// //       console.log('go to school');
// //   }else{
// //       console.log('no need to go school')
// //  
 


//   // while loop

// //   var num =0;
// //   while(num<=10){
// //       console.log(num);
// //       num++
// //   }

// ///do while loop

// // var num = 20;
// //   do{
// //       console.log(num);     //first exceute then check condition
// //       num++
// //   }while(num<=10)

// // let num =[2,3]
// // function multiply(num){
// //     console.log(a*b);
// // }
// // multiply(2,4)

// // for(var i =0;i<10;i++){
// //   if(i% 2 !== 0){
// //     console.log(i);

// //   }
// // }
// // for(var i =0;i<10;i++){
// //   let table = "7 * " + i + " = " + 7 * i;
// //   console.log(table);
// // }


// //   let sum =0;

// // // for(var i =0;i<10;i++){
// // //   sum +=i
// // // }

// // const array =[1,20,45,67,80,100]
// // for (var i=0;i<array.length;i++){
// //   if(i % 2 == 0){
// //     console.log(i);
// //   }
// // }


// // for (let  i=0;i<10;i++){
// //   if(i % 2 == 0){
// //     console.log(i)
// // //   }
// // const a = [1,2,3,4]
// // for(let i=0;i<a.length;i++){
// //      console.log(a[i]);
     
// //        for(let j= 0;j<a.length;j++){
// //          console.log(a[i],a[j])
// //        }
// //      }
//     //  const a = [1,2,3,4];
//     //        sum = 0;
//     //          for(let i = 0; i<a.length;i++){
//     //          sum =sum + a[i]
//     //           console.log(sum);
//     //          }
//     // function isEven(){
//     //   for(let i=0;i<10;i++){
//     //     if( i %2==0)
//     //     console.log(i);
//     //   }
//     // }
//     //  isEven()


//         //  function sum(a,b){
//         //    console.log( a+b);
//         //  }
//         //  sum(2,3);
//    function sum(a){
//      let inc = a + a ++
//      console.log(inc); 
//    }
//    sum(3);


// var a = null;
// console.log(a);
//9 ---> 10

// function addSum(num){
//   let newNum =num++;
//   console.log(newNum);

// }
// addSum(10);

//   let  b=3
//   console.log(b++);


//  console.log(b);

//  function days(num){
//    let newDay =num*365;
//    console.log(newDay);
//  }
//  days(12)
/* et Test = 3;
Test.assertEquals(cubes(2), 8) */


// function firstValue(arr){
//   let arr1 =arr[0]
//   console.log(arr1)
// }
// firstValue([1,2,3,4]);
// function isGreat(a,b){
//  if(a+b<100){
//    console.log('true')
//  }else{
//    console.log('false');
//  }

// }
// isGreat(10,100)

// function less(num){
  
//   if(num<100){
//     console.log(true)
//   }
//   else(console.log(flase))
  
// }
// less(80)





$('#btn').on('click', function () {
    Ajax();
  });
  
  function Ajax() {
    $.ajax({
      type: 'GET',
      url:' https://api.coindesk.com/v1/bpi/currentprice.json',
      success: function (data) {
        // let data1 = JSON.parse(data);
        document.getElementById('heading').innerText = data;
        console.log(data);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }
  












