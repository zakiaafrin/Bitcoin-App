//select Elements  && defining variables
const td = document.querySelectorAll("td");
const anotherprice = document.querySelector("div2");
const button1 = document.querySelector("div1");
// const button = document.querySelector(".refresh()");

//define functions and classes
class Bitcoin {
 constructor(td) {
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
   //console.log("Running setPrices... I should first console.log nums to see if I'm using the resources properly")
   //get the prices on the screen
   document.innerHTML = ""
   for(let nums = 1; nums<=td.length; nums++){
    if ( nums === 1) {
      td[nums].innerHTML = this.prices[0].rate;
      }
      td[nums+1].innerHTML = this.prices[nums+1].rate;
    }
  }
  refresh() {
     this.getPrices();
     console.log("Refreshing the prices");
       
 }
 
}
function refresh(){
  location.reload();
 }
let bitcoin = new Bitcoin(td);
console.log(bitcoin);

//adding event listeners, calling functions, and creating instances of classes
button1.addEventListener("click", e=>{
  refresh()
  })

anotherprice.addEventListener('click', e=>{
  window.prompt("What currency code are you looking for?");
})