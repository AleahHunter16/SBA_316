document.addEventListener('DOMContentLoaded',() =>{
    const form = document.getElementById('bookingForm');
    const confirmationDiv = document.getElementById('confirmation');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const newBookingButton = document.getElementById('newBooking');
    //*Submission form//
    form.addEventListener('submit',function(event){
        event.preventDefault();
        const name = document.getElementById('name').value;
        const location = document.getElementById('location').value;

        // inputs
        if(!name) {
            showError('nameError');
            return;
        }else{
            hideError('nameError');
        }
        if(!location){
            showError('locationError');
            return;
        }
        //Show accepted booking
        confirmationMessage.textContent='Tow Truck has been booked for ${name} at ${location}.';
        confirmationDiv.classList.remove('hide');
        form.classList.add('hide');
    });
    // listner button for truck
    newBookingButton.addEventListener('click', function() {
        confirmationDiv.classList.add('hide');
        form.reset();
    });
})
