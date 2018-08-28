const th = document.querySelectorAll("th");
const td = document.querySelectorAll("td");
const row1 = document.querySelector(".row1")
const row2 = document.querySelector(".row2")
const refreshButton = document.querySelector(".refresh");
const addCode = document.querySelector(".addprice");
//define functions and classes
class Bitcoin {
 constructor(nums) {
   this.nums = nums;
   /* Create properties using this and invoke methods that should be called automatically here */
   this.td = td;
   this.getPrices();
 }


 getPrices() {
   $.ajax({
     url: "https://bitpay.com/api/rates",
     dataType: "json",
     success: data => {
       this.prices = data,
         this.setPrices()
     },
     error: error => {
       console.log("There was an error getting from the API")
     }
   })
 }
 setPrices(nums) {
   // console.log("Running setPrices... I should first console.log nums to see if I'm using the resources properly")

   this.nums.forEach((num, index) => {
     this.td[index + 1].textContent = this.prices[num].rate.toFixed(2)
     // for(var i = 0; i< this.nums.length; i++){
     //   this.td[index + 1].textContent = this.prices[num].rate.toFixed(2)
     // }
   })
}

 refresh() {
   this.getPrices();
 }
}


let bitcoin = new Bitcoin([0, 2, 3, 4, 5, 6]);
// console.log(bitcoin);
//adding event listeners, calling functions, and creating instances of classes
refreshButton.addEventListener("click", function() {
 bitcoin.refresh()
})

addCode.addEventListener('click', function(e) {
const code = window.prompt("What country are you looking for?");
for(var i =0; i<bitcoin.prices.length; i++){
  if(bitcoin.prices[i].code === code.toUpperCase()){
   //  console.log("Found it")
  row1.innerHTML += `<td> BTC/${code.toUpperCase()}</td>` 
  row2.innerHTML += `<td> ${bitcoin.prices[i].rate.toFixed(2)}</td>` 
  }
}
})
