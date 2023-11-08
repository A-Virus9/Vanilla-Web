const projects = [
  {
    name: "Cafe menu",
    description: "CSS implementation of menu provided in cafes",
  },
  {
    name: "Color markers",
    description: "Marker like image with CSS"
  },
  {
    name: "Flask Filler",
    description: "Water intake tracker with JS"
  },
  {
    name: "Gym website",
    description: "Gym website register page"
  },
  {
    name: "Js documentation page",
    description: "Basic Documentation page"
  },
  {
    name: "Flask Filler",
    description: "Water intake tracker with JS"
  },
  {
    name: "LinkedIn clone",
    description: "LinkedIn login page clone"
  },
  {
    name: "Nutrition Facts",
    description: "Clone of nutrition facts template as mentioned in food items"
  },
  {
    name: "Online shop",
    description: "Basic Online shop landing page"
  },
  {
    name: "Progress Steps",
    description: "Websites progress tracker component"
  },
  {
    name: "Rokhto Painting",
    description: "Simple blur painting with CSS"
  },
  {
    name: "Survey form",
    description: "Simple survey form"
  },
  {
    name: "Tic-Tac-Toe",
    description: "Simple Tic-Tac-Toe game made in JS"
  },
];
let i;
for (i = 1; i <= projects.length; i++) {
  let div = document.createElement("div");
  div.innerHTML = 
    `<div class="project">
      <span>${i}</span>
      <span><a href="${projects[i-1].name}/index.html" target="_blank">${projects[i-1].name}</a></span>
      <span>${projects[i-1].description}</span>
    <div>`;
  document.body.insertAdjacentElement("beforeend", div);
}
