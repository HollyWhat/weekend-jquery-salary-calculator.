console.log('in the client')
$(document).ready(readyNow);

// ready now function for click holders
function readyNow(){
    console.log('rock and roll!');
    $('#submit-button').on('click', addEmployee );
    $('body').on('click','#delete-button', removeEmployee );
   //$('#employee-info').on('click', removeEmployee);
   //salaryTotal();
}

// create function that adds 
//employees to table on 'click'

function addEmployee(){
    console.log("added new employee");
    
    let firstName =$('#first-input').val();
    let lastName =$('#last-input').val();
    let id =$('#ID-input').val();
    let employeeTitle = $('#title-input').val();
    let employeePayment =$('#salary-input').val();
    console.log(firstName);
    $('#employee-table').append(`
    <tr>
   <td>${firstName}</td>
   <td>${lastName}</td>
   <td>${id}</td>
   <td>${employeeTitle}</td>
   <td>${employeePayment}</td>
  <td><button id="delete-button">delete</button></td>
  </tr>
  `);
// create loop th at adds employee payments together?
// give the employee input an id 
//so we can fetch that data
sum = 0;
  //use numeric to make sure it only adds the 
  //number and nothing else
  if(employeePayment){
    sum = employeePayment;
  
}




// changes the total on the page
moneyTotal = sum;
   $('#total-amount').html(`
    <span id="total-amount">$ ${moneyTotal} </span>
   `)
   console.log(moneyTotal);
  
}




// function now needed to remove selected employees
function removeEmployee(){
    console.log("you're fired");
    $(this).parent().parent().remove();

}

/// function that adds the salaries of the employees added
// create an array that adds all the totals together? 

