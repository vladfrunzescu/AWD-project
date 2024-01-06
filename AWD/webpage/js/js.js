// accordion effect
document.addEventListener("DOMContentLoaded", function () {
    var accordionButton = document.querySelector(".accordion-button");
    var accordionPanel = document.querySelector(".accordion-panel");

    accordionButton.addEventListener("click", function () {
        if (accordionPanel.style.display === "block") {
            accordionPanel.style.display = "none";
        } else {
            accordionPanel.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const years = [2019, 2020, 2021, 2022, 2023];
    const subjectsData = [
        {
            label: "Cloud Fundamentals",
            data: [85, 88, 92, 95, 90], 
        },
        {
            label: "Programming",
            data: [75, 78, 82, 88, 86], 
        },
        {
            label: "Microservices Architectures",
            data: [92, 94, 91, 89, 93], 
        },
    ];

    // Get the canvas element and create a chart context
    const canvas = document.getElementById("examChart").getContext("2d");

    // Create the chart
    const examChart = new Chart(canvas, {
        type: "bar", // Bar chart type
        data: {
            labels: years, // years
            datasets: subjectsData.map((subjectData) => ({
                label: subjectData.label,
                data: subjectData.data, // passing percentages
                backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.6)`, // Random color
                borderColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`, // Random border color
                borderWidth: 1,
            })),
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100, // percentage
                    title: {
                        display: true,
                        text: "Passing Percentage",
                    },
                },
            },
        },
    });
});

const popup = document.getElementById("popup");
const closePopup = document.getElementById("close-popup");

// Function to show the pop-up
function showPopup() {
    popup.style.display = "block";
}

// Function to hide the pop-up
function hidePopup() {
    popup.style.display = "none";
}

// Show the pop-up when the page loads
window.addEventListener("load", function () {
    showPopup();
});

closePopup.addEventListener("click", function () {
    hidePopup();
});


const subscriptionForm = document.getElementById("subscription-form");

subscriptionForm.addEventListener("submit", function (e) {
    e.preventDefault();
    hidePopup();
    // further handle form submission
});

