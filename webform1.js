$( "#target" ).submit(function( event ) {
 
  event.preventDefault();
  alert('The User Input the following values,Product Number:'+ document.getElementById('txtProdnum').value+ ',Name:'+ document.getElementById('txtName').value+',Unit Price:'+document.getElementById('txtPrice').value+',Quantity:'+document.getElementById('txtQun').value+',Supplier:'+document.getElementById('supplier').value+',Date Supplied:'+document.getElementById('txtDate').value);

   
    
  });