import { name, nameError, email, emailError, topic, topicError, message, messageError } from "./formVariables.js";

// Function to validate the contact form
export function formValidation(event) {
    let nameHasError;
    let emailHasError;
    let topicHasError;
    let messageHasError;


    // Name
    const nameValue = name.value;

    if (validateLength(nameValue, 1) === true) {
        nameError.style.display = "none";
        nameHasError = false;
    } else {
        nameError.style.display = "block";
        nameHasError = true;
    }


    // Email
    const emailValue = email.value;

    if (validateEmail(emailValue) === true) {
        emailError.style.display = "none";
        emailHasError = false;
    } else {
        emailError.style.display = "block";
        emailHasError = true;
    }


    // Topic
    const topicValue = topic.value;

    if (validateLength(topicValue, 1) === true) {
        topicError.style.display = "none";
        topicHasError = false;
    } else {
        topicError.style.display = "block";
        topicHasError = true;
    }

    
    // Message
    const messageValue = message.value;

    if (validateLength(messageValue, 5) === true) {
        messageError.style.display = "none";
        messageHasError = false;
    } else {
        messageError.style.display = "block";
        messageHasError = true;
    }


    // Validate Check
    if (nameHasError === true || 
        emailHasError === true || 
        topicHasError === true ||
        messageHasError === true){
        event.preventDefault();
        return false;
    } else {
        return true;
    }
}

function validateLength(value, lenghtToCheck) {
    const trimmedValue = value.trim();

    if (trimmedValue.length >= lenghtToCheck) {
        return true;
    } else {
        return false; 
    }
}

function validateEmail(emailValue) {
    const regEx = /\S+@\S+\.\S+/;

    if (regEx.test(emailValue)) {
        return true;
    } else {
        return false;
    }
}