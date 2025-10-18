const STORAGE_KEY = "feedback-form-state";

const formData = {
    email: "",
    message: ""
}

const form = document.querySelector(".feedback-form");

// delegation and input
function onFormInput(event) {
    const { name, value } = event.target;

    formData[name] = value.trim();
    
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    } catch (error) {
        console.error("Set state error: ", error.message);
    }
}

form.addEventListener("input", onFormInput);

// form filling
function populateForm() {
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            const parsedData = JSON.parse(avedData);
            if (parsedData.email) {
                form.elements.email.value = parsedData.email;
                formData.email = parsedData.email;
            }
            if (parsedData.message) {
                form.elements.message.value = parsedData.message;
                formData.message = parsedData.message;
            }
        }
    } catch (error) {
        console.error("Get state error: ", error.message);
    }
}

populateForm();

// submit
function onFormSubmit(event) {
    event.preventDefault();
    if (formData.email === "" || formData.message === "") {
        return alert('Fill please all fields');
    }

    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    
    form.reset();
    formData.email = "";
    formData.message = "";
}

form.addEventListener("submit", onFormSubmit);
