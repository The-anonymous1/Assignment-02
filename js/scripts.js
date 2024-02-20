document.addEventListener("DOMContentLoaded", function() {
    // Constants for query selectors
    const studentIdParagraph = document.getElementById("myStudentId");
    const customNumberInput = document.getElementById("customNumber");
    const custColorButton = document.querySelector(".custColor");
    const randColorButton = document.querySelector(".randColor");
    const imageSelect = document.getElementById("imageSelect");
    const imageDisplay = document.getElementById("images");

    // Your student ID
    const studentId = "200555634"; 

    // Array of image sources
    const imageSources = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"]; 

    // Function to change background color based on input value
    function changeBackgroundColor(value) {
        let color;
        if (value < 0 || value > 100) color = "red";
        else if (value <= 20) color = "green";
        else if (value <= 40) color = "blue";
        else if (value <= 60) color = "orange";
        else if (value <= 80) color = "purple";
        else color = "yellow"; // This covers value <= 100

        document.body.style.backgroundColor = color;
    }

    // Function to display the student ID and change background color based on custom input
    function changeCustomColor() {
        const value = parseInt(customNumberInput.value, 10);
        studentIdParagraph.textContent = studentId;
        changeBackgroundColor(value);
    }

    // Function to change background color based on a random number
    function changeRandomColor() {
        const randomValue = Math.floor(Math.random() * 101); // Generates a number between 0-100
        changeBackgroundColor(randomValue);
    }

    // Function to generate options for select list
    function addList() {
        if (imageSelect.options.length <= 1) { 
            imageSources.forEach(function(imageSrc) {
                const option = document.createElement("option");
                option.value = imageSrc;
                option.textContent = imageSrc;
                imageSelect.appendChild(option);
            });
        }
    }

    // Function to change image based on selection
    function changeImage() {
        const selectedImage = imageSelect.value;
        imageDisplay.src = "img/" + selectedImage; 
    }

    // Event listeners
    custColorButton.addEventListener("click", changeCustomColor);
    randColorButton.addEventListener("click", changeRandomColor);
    imageSelect.addEventListener("click", addList);
    imageSelect.addEventListener("change", changeImage);
});
