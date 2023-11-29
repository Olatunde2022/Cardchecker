


const cardForm = document.querySelector('.card__form');

let clickCount = 0;
document.querySelector('.card__form').addEventListener('submit',(event) =>{
  const UserAmount = document.querySelector('.amount').value;
  const cardAmount = UserAmount
  if(document.querySelector('input[name="amount"]').length === 0 || document.querySelector('input[name="code"]').value ===''){ 
    swal("You can not leave empty field")
    console.log(document.querySelector('input[name="amount"]').value )
  }
  
  clickCount++;
  if (clickCount >= 3  ){ 
    const modaTitle = document.querySelector('.swal-title')          
      console.log(modaTitle)
      //modaTitle.style.color=='blue';       
      console.log(modaTitle)

    swal(
      "Amount again:",{
        content: "input"
      })
      .then((value) =>{
        swal( 'Your card balance:',
        `${value} .00`) });

    }
  
    else{ 
      
      swal(
        "ERROR!",
          "An error occur while checking your card",
          {
      button:{
          text: "try again",
          className: "swal-button",
      }
          }
    );       


  }
  event.preventDefault();
  });



 