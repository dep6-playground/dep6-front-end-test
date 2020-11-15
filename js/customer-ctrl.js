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
var helperTextIdElement = document.querySelector('#helper-text-id');
var helperTextNameElement = document.createElement('small');
var helperTextAddressElement = document.createElement('small');


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



}