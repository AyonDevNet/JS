
// ======================================
// JOB APPLICATION TRACKER - HOMEPAGE
// ======================================

// Select HTML elements
const jobContainer = document.getElementById("job-container");

const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");

// Get saved Interview jobs from localStorage
let interviewJobs = JSON.parse(localStorage.getItem("interviewJobs")) || [];

// Update dashboard counts
function updateDashboard() {
    if (totalCount) {
        totalCount.innerText = 8;
    }

    if (interviewCount) {
        interviewCount.innerText = interviewJobs.length;
    }

    if (rejectedCount) {
        rejectedCount.innerText = 0;
    }
}

// Remove jobs that have already been moved to Interview
if (jobContainer) {
    const allJobCards = jobContainer.querySelectorAll(".job-card");

    allJobCards.forEach(function (card) {
        const jobId = card.dataset.jobId;

        const alreadyInterview = interviewJobs.some(function (job) {
            return job.id === jobId;
        });

        if (alreadyInterview) {
            card.remove();
        }
    });
}

// Handle Interview button clicks
if (jobContainer) {
    jobContainer.addEventListener("click", function (event) {

        // Find the clicked Interview button
        const interviewButton = event.target.closest(".interview-btn");

        if (!interviewButton) {
            return;
        }

        // Find the parent Job Card
        const jobCard = interviewButton.closest(".job-card");

        if (!jobCard) {
            return;
        }

        // Get the unique Job ID
        const jobId = jobCard.dataset.jobId;

        // Check whether this job is already in Interview
        const alreadyInterview = interviewJobs.some(function (job) {
            return job.id === jobId;
        });

        if (alreadyInterview) {
            return;
        }

        // Save the selected Job Card
        interviewJobs.push({
            id: jobId,
            html: jobCard.outerHTML
        });

        // Update localStorage
        localStorage.setItem(
            "interviewJobs",
            JSON.stringify(interviewJobs)
        );

        // Update dashboard
        updateDashboard();

        // Navigate to Interview page
        window.location.href = "./interview.html";
    });
}

// Update dashboard when homepage loads
updateDashboard();
