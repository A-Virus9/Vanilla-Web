const workList = document.querySelector(".work_list");
const form = document.querySelector(".new_work_form");
const distanceInput = document.querySelector("#form_distance");
const durationInput = document.querySelector("#form_duration");
const speedInput = document.querySelector("#form_speed");
const selectInput = document.querySelector("#form_select");
const speedText = document.querySelector(".form_text_speed");
const sidePanel = document.querySelector(".side_panel");
const sidePanelCross = document.querySelector(".side_panel_closer");
const sidePanelOpener = document.querySelector(".side_panel_opener");
const zoom = document.querySelector(".leaflet-touch .leaflet-bar");
const mapC = document.querySelector(".map")
let workoutEntries = document.querySelectorAll(".work_entry");

let mapEvent, map, div;
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let date = new Date();

const visibility = (item, bool)=>{
  bool? item.classList.remove("hidden"): item.classList.add("hidden");
}

if(screen.availWidth<=1190){
  visibility(sidePanel, 0);
  visibility(sidePanelOpener, 1);
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      console.log(latitude, longitude);

      const coords = [latitude, longitude];
      map = L.map("map").setView(coords, 16);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

      map.on("click", (e) => {
        mapEvent = e;
        distanceInput.value = "";
        durationInput.value = "";
        speedInput.value = "";
        visibility(form, 1);
        visibility(sidePanel, 1);
        if(screen.availWidth<=1190){
          visibility(mapC,0)
        }
        distanceInput.focus();
      });
    },
    function () {
      console.log("Could not get your posiiton");
    }
  );
}

sidePanelCross.addEventListener("click",()=>{
  visibility(sidePanel, 0);
  visibility(sidePanelOpener, 1);
  visibility(mapC, 1)
})

sidePanelOpener.addEventListener("click",()=>{
  visibility(sidePanel, 1);
  if(screen.availWidth<=1190){
    visibility(mapC, 0);
  }
  visibility(sidePanelOpener, 0)
  setTimeout(()=>{
    visibility(form, 0)
  },1)
})

form.addEventListener("submit", (e) => {
  e.preventDefault();
  workoutEntries.forEach((item)=>{
    item.removeEventListener("click", (e) => {
      map.setView([e.currentTarget.dataset.lat,e.currentTarget.dataset.lng],16)
    });
  })
  const { lat, lng } = mapEvent.latlng;

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: selectInput.value==="Running"? "running-popup":"cycling-popup",
      })
    )
    .setPopupContent(
      `${selectInput.value} on ${months[date.getMonth() - 1]} ${date.getDate()}`
    )
    .openPopup();

  div = `<div data-lat="${lat}" data-lng="${lng}" class="workout_entry ${selectInput.value==="Running"? "running-popup":"cycling-popup"}">
            <div class="workout_entry_text">${selectInput.value} on ${months[date.getMonth() - 1]} ${date.getDate()}</div>
            <div class="workout_entry_data">
              <div class="workout_data">
                <div class="workout_emoji">${selectInput.value==="Cycling"? "🚴":"🏃"}</div>
                <div class="workout_number">${distanceInput.value}</div>
                <div class="workout_unit">KM</div>
              </div>
              <div class="workout_data">
                <div class="workout_emoji">⏱️</div>
                <div class="workout_number">${durationInput.value}</div>
                <div class="workout_unit">MIN</div>
              </div>
              <div class="workout_data">
                <div class="workout_emoji">⚡</div>
                <div class="workout_number">${selectInput.value==="Running"? (durationInput.value/distanceInput.value).toFixed(2): (distanceInput.value/(durationInput.value/60)).toFixed(2)}</div>
                <div class="workout_unit">${selectInput.value==="Running"? "MIN/KM":"KM/H"}</div>
              </div>
              <div class="workout_data">
                <div class="workout_emoji">${selectInput.value==="Running"? "👣":"🏔️"}</div>
                <div class="workout_number">${speedInput.value}</div>
                <div class="workout_unit">${selectInput.value==="Running"? "SPM":"M"}</div>
              </div>
            </div>
        </div>`

  form.insertAdjacentHTML("afterend",div)

  visibility(form, 0);
  visibility(mapC, 1)
  if(screen.availWidth<=1190){
    visibility(sidePanel, 0)
  }
  map.setView([lat, lng],16);
  workoutEntries = document.querySelectorAll(".workout_entry");
  workoutEntries.forEach((item) => {
    item.addEventListener("click", (e) => {
      visibility(sidePanel, 0)
      visibility(mapC, 1)
      visibility(sidePanelOpener, 1)
      map.setView([e.currentTarget.dataset.lat,e.currentTarget.dataset.lng],16)
    });
  });
  
});

selectInput.addEventListener("change",()=>{
  speedText.innerText = selectInput.value === "Running"? "Speed":"Elevation";
  speedInput.placeholder = selectInput.value === "Running"? "step/min":"m"
})

window.addEventListener("resize",()=>{
  location.reload();
})