$(document).ready(function(){
   
    $("#btnCreate").click(function(){
        const acc=document.getElementById("txtAccnum");
        const name=document.getElementById("txtName");
        const supplier=document.getElementById("supplier");
        const data=acc.value+"|"+name.value+"|"+supplier.value;
        if(acc.value&&name.value&&supplier.value)
        {
            $("#menu").append('<li li class="list-group-item">'+data+'</li>');
        }
        
        
        document.getElementById("txtAccnum").value="";
        document.getElementById("txtName").value="";
        document.getElementById("supplier").value="";
        
    });
});