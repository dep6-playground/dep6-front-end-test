/*
 *             DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *                     Version 2, December 2004
 *
 *  Copyright (C) 2020 IJSE
 *
 *  Everyone is permitted to copy and distribute verbatim or modified
 *  copies of this license document, and changing it is allowed as long
 *  as the name is changed.
 *
 *             DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *    TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
 *
 *   0. You just DO WHAT THE FUCK YOU WANT TO.
 */

/**
 * @author : Ranjith Suranga <suranga@ijse.lk>
 * @since : 11/15/20
 **/

/*===============================================================================
 * Global Variables
 *===============================================================================*/

// Todo: add all global variable declaration here
var customerIdElement = document.querySelector('#txt-id');
var customerNameElement = document.querySelector('#txt-name');
var customerAddressElement = document.querySelector('#txt-address');
var btnSaveElement = document.querySelector('#btn-save');
var btnClearElement = document.querySelector('#btn-clear');
var helperTextIdElement = document.querySelector('#helper-text-id');
var helperTextNameElement = document.createElement('small');
var helperTextAddressElement = document.createElement('small');
var tableElement = document.querySelector('#tbl-customers');
var tableData = [];



/*===============================================================================
 * Init
 *===============================================================================*/

init();

function init(){
    document.querySelector('#txt-id').focus();

    // Todo: add the initialization code if any
}

/*===============================================================================
 * Event Handlers and Timers
 *===============================================================================*/

// Todo: add all event listeners and handlers here
btnSaveElement.addEventListener('click',validate);
customerIdElement.addEventListener('input',function (){
    helperTextIdElement.className = 'form-text text-muted';
    customerIdElement.className = 'form-control';
});
customerNameElement.addEventListener('input',function (){
    helperTextNameElement.remove();
    customerNameElement.className = 'form-control';
});
customerAddressElement.addEventListener('input',function (){
    helperTextAddressElement.remove();
    customerAddressElement.className = 'form-control';
});
btnClearElement.addEventListener('click',function (){
    customerIdElement.readOnly = false;
})





/*===============================================================================
 * Functions
 *===============================================================================*/

// Todo: add all functions
function validate(){
    var customerId = document.querySelector('#txt-id').value;
    var customerName = document.querySelector('#txt-name').value;
    var customerAddress = document.querySelector('#txt-address').value;

    if(!customerId.match('C[0-9]{2}[1-9]')){
        helperTextIdElement.className = 'form-text text-danger';
        customerIdElement.className += 'border border-danger';
        customerIdElement.focus();
    }
    else if(!customerName.match('[a-zA-Z.]{3,}[a-zA-Z. ]*')){
        customerNameElement.className += 'border border-danger';
        customerNameElement.focus();
        helperTextNameElement.innerText = 'Name can only contain capital or simple alphabetical letters, spaces and periods';
        helperTextNameElement.className = 'form-text text-danger';
        customerNameElement.parentElement.appendChild(helperTextNameElement);

    }
    else if(!customerAddress.match('[^ ]{3,}')){
        customerAddressElement.className += 'border border-danger';
        customerAddressElement.focus();
        helperTextAddressElement.innerText = 'Address can’t be empty and at least should have three letters';
        helperTextAddressElement.className = 'form-text text-danger';
        customerAddressElement.parentElement.appendChild(helperTextAddressElement);
    }
    else if(isPrerent()){
        for(var i=0; tableData.length;i++){
            if(tableData[i].children[0].innerText === customerIdElement.value){
                tableData[i].children[1].innerText = customerNameElement.value;
                tableData[i].children[2].innerText = customerAddressElement.value;
            }
        }
    }
    else{
        var tableRowElement = document.createElement('tr');

        var cellIdElement = document.createElement('td');
        cellIdElement.innerText = customerIdElement.value;
        cellIdElement.className = 'text-center';
        tableRowElement.appendChild(cellIdElement);

        var cellNameElement = document.createElement('td');
        cellNameElement.innerText = customerNameElement.value;
        tableRowElement.appendChild(cellNameElement);

        var cellAddressElement = document.createElement('td');
        cellAddressElement.innerText = customerAddressElement.value;
        tableRowElement.appendChild(cellAddressElement);

        var cellTrashIconElement = document.createElement('td');
        var trashIconElement = document.createElement('i');
        trashIconElement.className = 'fas fa-trash';
        cellTrashIconElement.appendChild(trashIconElement);
        cellTrashIconElement.className='text-center';
        tableRowElement.appendChild(cellTrashIconElement);
        cellTrashIconElement.addEventListener('click',function (){
            if (confirm('Are you sure you want to delete the selected record?')){
                for(var i=0; i<tableData.length;i++){
                    if(tableData[i] === tableRowElement){
                        tableData.splice(i,1);
                    }
                }
                tableRowElement.remove();
            }
        });
        cellTrashIconElement.addEventListener('mouseover',function (){
            trashIconElement.className = 'fas fa-trash-alt';
        });
        cellTrashIconElement.addEventListener('mouseout',function (){
            trashIconElement.className = 'fas fa-trash';
        });

        tableRowElement.addEventListener('click',function (){
            customerIdElement.value = tableRowElement.children[0].innerText;
            customerIdElement.readOnly = true;
            customerNameElement.value = tableRowElement.children[1].innerText;
            customerAddressElement.value = tableRowElement.children[2].innerText;
        });


        tableData.push(tableRowElement);
        tableElement.appendChild(tableRowElement);


    }

}

function isPrerent(){
    for(var i=0; i < tableData.length; i++){
        if(tableData[i].children[0].innerText === customerIdElement.value){
            return true;
        }
    }
    return false;
}
