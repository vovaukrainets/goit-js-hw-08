import throttle from 'lodash.throttle';

const STORAGE_KEY = `feedback-form-state`;

const form = document.querySelector(`.feedback-form`);
const email = document.querySelector(`.feedback-form input`);
const message = document.querySelector(`.feedback-form textarea`);

form.addEventListener(`input`, throttle(onTextareaInput, 500));
form.addEventListener(`submit`, onFormSubmit);

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();

    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

    form.reset();
    localStorage.removeItem(STORAGE_KEY);    
 }

function onTextareaInput(evt) {
    const formData = {...JSON.parse(localStorage.getItem(STORAGE_KEY))};
    formData[evt.target.name] = evt.target.value;
    const formDataJSON = JSON.stringify(formData);
      
    localStorage.setItem(STORAGE_KEY, formDataJSON);
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);    

    if (savedMessage) {
        const parseSavedMessage = JSON.parse(savedMessage);
        email.value = parseSavedMessage.email || "";
        message.value = parseSavedMessage.message || "";
    }
}
