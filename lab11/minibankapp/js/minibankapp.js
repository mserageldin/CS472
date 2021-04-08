/**
 * minibankapp.js
 */
"use strict";
$(document).ready(function () {
    $("#formNewAccount").submit(function (event) {
        event.preventDefault();
        const txtAccountNo = $("#txtAccountNo");
        const txtCustomerName = $("#txtCustomerName");
        const ddlAccountType = $("#ddlAccountType");
        const strAccountNo = txtAccountNo.val();
        const strCustomerName = txtCustomerName.val();
        const strAccountType = ddlAccountType.val();
        addNewAccountDataRow(strAccountNo, strCustomerName, strAccountType);
        txtAccountNo.value = "";
        txtCustomerName.value = "";
        ddlAccountType["selectedIndex"] = 0;
        txtAccountNo.focus();
    });
    const addNewAccountDataRow = function (accountNo, customerName, accountType) {
       

        /* const newRow = tblAccounts.insertRow(-1);
         const newCellRowId = newRow.insertCell(0);
         const strNewRowId = document.createTextNode(`${++currentRowId}.`);
         newCellRowId.appendChild(strNewRowId);
         const newCellAccountNo = newRow.insertCell(1);
         const strNewRowAccountNo = document.createTextNode(`${accountNo}`);
         newCellAccountNo.appendChild(strNewRowAccountNo);
         const newCellCustomerName = newRow.insertCell(2);
         const strNewRowCustomerName = document.createTextNode(`${customerName}`);
         newCellCustomerName.appendChild(strNewRowCustomerName);
         const newCellAccountType = newRow.insertCell(3);
         const strNewRowAccountType = document.createTextNode(`${accountType}`);
         newCellAccountType.appendChild(strNewRowAccountType);*/

        // $tblAccounts.append(`${accountNo} ${customerName} ${accountType}`);
        var rowCount = $("#tblAccounts tr").length;
        $('#tblAccounts').append( '<tr>' );
     $('#tblAccounts').append( '<td>' +   rowCount + '</tr>' );
    $('#tblAccounts').append( '<td>' +   accountNo + '</tr>' );
    $('#tblAccounts').append( '<td>' +   customerName + '</tr>' );
    $('#tblAccounts').append( '<td>' +   accountType + '</tr>' );
    $('#tblAccounts').append( '</tr>' );
    }
    
    var $ddl = $('#groupSel').on('change', search);
    var $txt = "Savings";
    var $tblRows = $("#tblAccounts > tbody > tr");

    //
    function search()
    {
        //
       // var ddlIndex = $ddl.prop('selectedIndex');
        //var ddlText = $("#groupSel").toggle(this.checked);
        var txtSearch = $.trim($txt.toLowerCase());
       
        //Reset
        if (!$("#groupSel").is(':checked'))
        {
            //show all
           
            $tblRows.show();
        }
        else
        {
            //
            var lastCell;
            var firstCell;

            //browse over each row
            $($tblRows).each(function (i, row)
            {
               
               
                lastCell = $(this).find(':last-child').text().trim();

               
                    //something is type inside the input text
                    if (txtSearch.length > 0)
                    {
                        // input text is inside first cell => display => true
                        if (lastCell.toLowerCase().trim().indexOf(txtSearch) != -1)
                            $(this).show();
                        else
                            $(this).hide();
                    }
                    else
                        $(this).show();
                
                
            });
               
        }
    }

   
});
/*window.onload = function() {
    let currentRowId = 2;
    const formNewAccount = document.querySelector("#formNewAccount");
    formNewAccount.addEventListener("submit",
        event => {
            event.preventDefault();
            const txtAccountNo = document.querySelector("#txtAccountNo");
            const txtCustomerName = document.querySelector("#txtCustomerName");
            const ddlAccountType = document.querySelector("#ddlAccountType");
            const strAccountNo = txtAccountNo.value;
            const strCustomerName = txtCustomerName.value;
            const strAccountType = ddlAccountType.value;
            addNewAccountDataRow(strAccountNo, strCustomerName,strAccountType);
            txtAccountNo.value = "";
            txtCustomerName.value = "";
            ddlAccountType["selectedIndex"] = 0;
            txtAccountNo.focus();
    });*/

