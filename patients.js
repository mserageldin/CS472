let lineNo = 1;

/*$("#btnCreate").on("click", function (e) {

    e.preventDefault();
    var f = document.getElementsByTagName('form')[0];
  if(f.checkValidity()) {
    markup = "<tr>"
        + "<td>" + $("#txtAccnum").val() + "</td>"
        + "<td>" + $("#txtFn").val() + "</td>"
        + "<td>" + $("#txtMn").val() + "</td>"
        + "<td>" + $("#txtLn").val() + "</td>"
        + "<td>" + $("#txtDate").val() + "</td>"
        + "<td>" + $("#ddlDepart").val() + "</td>"
        + "<td>" + $('input[name=radio]:checked', '#myform').val() + "</td>"
        + lineNo + "</tr>";
    tableBody = $("table tbody");
    tableBody.append(markup);
    lineNo++;
  }
  
});*/
document.getElementById('myform').onsubmit = function (e) {
    e.preventDefault();

    markup = "<tr>"
        + "<td>" + $("#txtAccnum").val() + "</td>"
        + "<td>" + $("#txtFn").val() + "</td>"
        + "<td>" + $("#txtMn").val() + "</td>"
        + "<td>" + $("#txtLn").val() + "</td>"
        + "<td>" + $("#txtDate").val() + "</td>"
        + "<td>" + $("#ddlDepart").val() + "</td>"
        + "<td>" + $('input[name=radio]:checked', '#myform').val() + "</td>"
        + lineNo + "</tr>";
    tableBody = $("table tbody");
    tableBody.append(markup);
    lineNo++;



};
