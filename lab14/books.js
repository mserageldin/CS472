// json data
var api = "https://elibraryrestapi.herokuapp.com/elibrary/api/book/list";
// button trigger
//$('#view-doctors').on('click',function() {   
    $.ajax('https://elibraryrestapi.herokuapp.com/elibrary/api/book/list')
    .done(response => {
        var html = '<h2>Books</h2>';
         html += '<div class="tables-doctor-content">';
        html +='<table class="table">'
                  +'<thead>'
                  +'<tr>'
                  +'<th scope="col">#</th>'
                  +'<th scope="col">ISBN</th>'
                  +'<th scope="col">Book Title</th>'
                  +'<th scope="col">Overdue Fee</th>'
                  +'<th scope="col">Publisher</th>'
                  +'<th scope="col">Date Published</th>'
                  +'</tr>'
                  +'</thead>'
                  +'<tbody>';
      for (const key of response) {
        
        html +='<tr>'
                  //   +'<th scope="row">'+result.Data[i].bookId+'</th>'
                    +'<td>'+key.bookId+'</td>'
                     +'<td>'+key.isbn+'</td>'
                     +'<td>'+key.title+'</td>'
                     +'<td>'+key.overdueFee+'</td>'
                     +'<td>'+key.publisher+'</td>'
                     +'<td>'+key.datePublished+'</td>'
                     +'</tr>';
               
               
      }
      html +='</tbody></table>';
      html +='</div>';
         // Set all content
         $('.tables-doctor').html(html);
    });
    function updateGuests() 
    {
        const bookId= $("#bkID").val();    
        const isbn= $("#bkIsbn").val();
        const title= $("#bkTitle").val();
        const overdueFee= $("#bkOver").val();
        const publisher= $("#bkPublish").val();
        const datePublished= $("#bkDate").val();
        let data = {bookId: bookId,  isbn: isbn,title:title,overdueFee:overdueFee,publisher:publisher,datePublished:datePublished};
        fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
            method: "post",body:JSON.stringify(data),// 'bookId=' + bookId+ '&isbn=' + isbn+'&title=' + title+'&overdueFee=' + overdueFee+'&publisher=' + publisher+'&datePublished=' + datePublished,
            headers: {'Content-Type': 'application/json','Accept': 'application/json'}})
            .then(res => res.json())
            .then(response => {console.log("Success: ", JSON.stringify(response));location.reload(true);}).catch(error => console.log("Error: ", error));}
  /*  $(document).ready(function () {  
 var button = $('#view-doctors');      
   $.ajax({
      url:api,
      method:'GET',
      cache:false,
      type:"text/json"
   })
   .always(function(){
      $(button).html('Load Books Data...');
   })
   .done(function(evt) {
      // Disable button
     // $(button).prop('disabled',true);
      // Set timeout for lazy loading
      setTimeout(function(){
         var result = JSON.parse(evt);
         //alert(result);
         var html = '<h2>Books</h2>';
         html += '<div class="tables-doctor-content">';
         for(var i=0;i < result.Data.length; i++) {
               html +='<table class="table">'
                  +'<thead>'
                  +'<tr>'
                  +'<th scope="col">#</th>'
                  +'<th scope="col">ISBN</th>'
                  +'<th scope="col">Book Title</th>'
                  +'<th scope="col">Overdue Fee</th>'
                  +'<th scope="col">Publisher</th>'
                  +'<th scope="col">Date Published</th>'
                  +'</tr>'
                  +'</thead>'
                  +'<tbody>';

                  html +='<tr>'
                  //   +'<th scope="row">'+result.Data[i].bookId+'</th>'
                    +'<td>'+result.Data[i].bookId+'</td>'
                     +'<td>'+result.Data[i].isbn+'</td>'
                     +'<td>'+result.Data[i].title+'</td>'
                     +'<td>'+result.Data[i].overdueFee+'</td>'
                     +'<td>'+result.Data[i].publisher+'</td>'
                     +'<td>'+result.Data[i].datePublished+'</td>'
                     +'</tr>';
               
               html +='</tbody></table>';
          
         }
         html +='</div>';
         // Set all content
         $('.tables-doctor').html(html);
     },10); 
   })
   .fail(function() {
      alert('Error : Failed to reach API Url or check your connection');
    //  $(button).prop('disabled',false);
   })
   .then(function(evt){
      setTimeout(function(){        
       //  $(button).css({'background-color':'#ccc'}).hide();          
      },10);
   });
});*/