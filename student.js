

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const fullName = form.querySelector('input[placeholder="Full Name"]').value.trim();
        const email = form.querySelector('input[placeholder="Email"]').value.trim();
        const password = form.querySelector('input[placeholder="Password"]').value;
        const confirmPassword = form.querySelector('input[placeholder="Confirm Password"]').value;
        const contact = form.querySelector('input[placeholder="Contact Number"]').value.trim();
        const college = form.querySelector('input[placeholder="College Name"]').value.trim();
        const degree = form.querySelector('input[placeholder="Degree"]').value.trim();
        const usn = form.querySelector('input[placeholder="USN"]').value.trim();
        const skills = form.querySelector('input[placeholder="Skills (comma separated)"]').value.trim();

        
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const studentData = {
            fullName,
            email,
            password,
            contact,
            college,
            degree,
            usn,
            skills: skills.split(',').map(skill => skill.trim())
        };

        console.log("Student Registered:", studentData);

        
        form.reset();

        
        alert("Registration successful!");
    });
});

