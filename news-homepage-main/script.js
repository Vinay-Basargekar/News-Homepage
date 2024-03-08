// Function to handle mouseover and mouseout events
function handleMouseEvents(element, color) {
	element.addEventListener("mouseover", () => {
		element.style.color = color;
	});
	element.addEventListener("mouseout", () => {
		element.style.color = "";
	});
}

// Select the button element
let button = document.querySelector("button");

// Add event listeners to the button for mouseover and mouseout events
button.addEventListener("mouseover", () => {
	button.style.backgroundColor = "hsl(240, 100%, 5%)";
});
button.addEventListener("mouseout", () => {
	button.style.backgroundColor = "";
});

// Select all elements with the class "dark-heading" and apply event listeners
document.querySelectorAll(".dark-heading").forEach((darkHeading) => {
	handleMouseEvents(darkHeading, "hsl(35, 77%, 62%)");
});

// Select all <p> elements inside the ".nav-right" div and apply event listeners
document.querySelectorAll(".nav-right p").forEach((p) => {
	handleMouseEvents(p, "hsl(5, 85%, 63%)");
});

// Select all elements with the class "head-bottom" and apply event listeners
document.querySelectorAll(".head-bottom").forEach((h3) => {
	handleMouseEvents(h3, "hsl(5, 85%, 63%)");
});
