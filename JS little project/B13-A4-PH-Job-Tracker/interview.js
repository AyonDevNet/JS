
// ======================================
// INTERVIEW PAGE
// ======================================

// Select Interview page elements
const interviewContainer = document.getElementById("interview-container");
const interviewCount = document.getElementById("interview-count");
const totalCount = document.getElementById("total-count");
const rejectedCount = document.getElementById("rejected-count");
const interviewEmpty = document.getElementById("interview-empty");

// Get Interview jobs from localStorage
const interviewJobs = JSON.parse(localStorage.getItem("interviewJobs")) || [];

// Update dashboard
if (totalCount) {
    totalCount.innerText = 8;
}

if (interviewCount) {
    interviewCount.innerText = interviewJobs.length;
}

if (rejectedCount) {
    rejectedCount.innerText = 0;
}

// Display Interview jobs
if (interviewContainer && interviewJobs.length > 0) {

    // Remove the empty message
    if (interviewEmpty) {
        interviewEmpty.remove();
    }

    // Loop through all Interview jobs
    interviewJobs.forEach(function (job) {

        // Convert saved HTML into an element
        const template = document.createElement("template");
        template.innerHTML = job.html.trim();

        const jobCard = template.content.firstElementChild;

        // Display the Job Card
        if (jobCard) {
            interviewContainer.appendChild(jobCard);
        }
    });
}
