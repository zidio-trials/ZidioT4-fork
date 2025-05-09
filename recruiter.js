document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("recruiterForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        // Get values
        const companyName = document.getElementById("companyName").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const contact = document.getElementById("contact").value.trim();
        const website = document.getElementById("website").value.trim();
        const location = document.getElementById("location").value.trim();

        
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (contact.length !== 10) {
            alert("Contact number must be 10 digits.");
            return;
        }

        
        const recruiterData = {
            companyName,
            email,
            password,
            contact,
            website,
            location
        };

        console.log("Recruiter Data Submitted:", recruiterData);
        alert("Registration Successful!");

       
        form.reset();
    });
});

