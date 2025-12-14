// script.js - JavaScript for Lab 3

// A. Change Theme Button (Dark Mode / Light Mode)
const themeBtn = document.getElementById('themeBtn');
if (themeBtn) {
    themeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Update button text based on current mode
        if (document.body.classList.contains('dark-mode')) {
            themeBtn.textContent = 'Toggle Light Mode';
        } else {
            themeBtn.textContent = 'Toggle Dark Mode';
        }
    });
}

// B. Edit Job Title Feature
const editJobBtn = document.getElementById('editJobBtn');
const jobTitle = document.querySelector('.job-title');

if (editJobBtn && jobTitle) {
    editJobBtn.addEventListener('click', function() {
        const newTitle = prompt('Enter your new job title:', jobTitle.textContent);
        
        if (newTitle !== null && newTitle.trim() !== '') {
            jobTitle.textContent = newTitle;
        }
    });
}

// C. Show/Hide Skills Feature
const toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
const skillsSection = document.querySelector('.skills-section');

if (toggleSkillsBtn && skillsSection) {
    toggleSkillsBtn.addEventListener('click', function() {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            toggleSkillsBtn.textContent = 'Hide Skills';
        } else {
            skillsSection.style.display = 'none';
            toggleSkillsBtn.textContent = 'Show Skills';
        }
    });
}

// D. Live Character Counter for Message Textarea
const msgBox = document.getElementById('msgBox');
const counter = document.getElementById('counter');

if (msgBox && counter) {
    const maxLength = msgBox.getAttribute('maxlength') || 200;
    
    msgBox.addEventListener('keyup', function() {
        const remaining = maxLength - msgBox.value.length;
        counter.textContent = remaining;
        
        // Optional: Change color when running low
        if (remaining < 20) {
            counter.style.color = '#e74c3c';
        } else {
            counter.style.color = '#2c3e50';
        }
    });
}


function validateForm() {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    
    // Check if name is empty
    if (!nameField || nameField.value.trim() === '') {
        alert('Please enter your name!');
        if (nameField) nameField.focus();
        return false;
    }
    
    
    if (!emailField || emailField.value.trim() === '') {
        alert('Please enter your email!');
        if (emailField) emailField.focus();
        return false;
    }
    
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value)) {
        alert('Please enter a valid email address!');
        emailField.focus();
        return false;
    }
    
    alert('Message sent successfully!');
    return true;
}

// F. Automatically Display Today's Date in Footer
window.addEventListener('DOMContentLoaded', function() {
    const dateDisplay = document.getElementById('dateDisplay');
    
    if (dateDisplay) {
        const today = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        dateDisplay.textContent = 'Today is ' + today.toLocaleDateString('en-US', options);
    }
});

// G. Extra Feature: Greeting Based on Time of Day
window.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting');
    
    if (greetingElement) {
        const now = new Date();
        const hour = now.getHours();
        let greeting = '';
        let emoji = '';
        
        if (hour >= 5 && hour < 12) {
            greeting = 'Good Morning!';
           
        } else if (hour >= 12 && hour < 18) {
            greeting = 'Good Afternoon!';
           
        } else if (hour >= 18 && hour < 22) {
            greeting = 'Good Evening!';
           
        } else {
            greeting = 'Good Night!';
            
        }
        
        greetingElement.textContent = `${emoji} ${greeting}, Welcome!`;
    }
});