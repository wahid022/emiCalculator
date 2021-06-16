function Calculate() {
  
    // Extracting value in the amount 
    const amount = document.querySelector("#amount").value;
  
    // Extracting value in the interest
    const rate = document.querySelector("#rate").value;
  
    // Extracting value in the months 
    const months = document.querySelector("#months").value;
  
    // Calculating interest per month
    const interest = (amount * (rate * 0.01)) / months;
      
    // Calculating total payment
    const total = ((amount / months) + interest).toFixed(2);

   //Fetching button click event and calling the function result to give the result on the application 
    document.getElementById("button").onclick = function() {result(total)};

  
    
} 


function result(total) {
  document.querySelector("#total")
        .innerHTML = "EMI : (₹)" + total;
}
