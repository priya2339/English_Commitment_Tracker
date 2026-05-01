// 🔗 PUT YOUR DEPLOYED SCRIPT URL
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwf6MXypWT7Z4K6vEd3ebtlya9PdxoYMOGTR_gn2-JhPK1AvrngQ06ByO1eT5xaXt8X/exec";

const STUDENTS = {
  "Aarav Sharma": "A",
  "Priya Patel": "PRIYA002",
  "Rahul Verma": "R",
  "Sneha Gupta": "SNEHA004"
};

let currentUser = "";

// SEARCH
document.getElementById("searchInput").addEventListener("input", function(){
  let value = this.value.toLowerCase();
  let suggestions = document.getElementById("suggestions");
  suggestions.innerHTML = "";

  if(!value) return;

  for(let name in STUDENTS){
    if(name.toLowerCase().includes(value)){
      let div = document.createElement("div");
      div.className = "suggestion";
      div.textContent = name;

      div.onclick = function(){
        document.getElementById("searchInput").value = name;
        document.getElementById("searchInput").setAttribute("data-selected", name);
        suggestions.innerHTML = "";
      };

      suggestions.appendChild(div);
    }
  }
});

// LOGIN
function login(){
  let selectedName = document.getElementById("searchInput").getAttribute("data-selected");
  let code = document.getElementById("codeInput").value.toUpperCase();

  if(!selectedName){
    document.getElementById("error").innerText = "Select name!";
    return;
  }

  if(STUDENTS[selectedName] !== code){
    document.getElementById("error").innerText = "Wrong code!";
    return;
  }

  currentUser = selectedName;

  document.getElementById("loginPage").style.display="none";
  document.getElementById("penaltyPage").style.display="flex";

  if(!localStorage.getItem(currentUser)){
  localStorage.setItem(currentUser, JSON.stringify({ points: 1000 }));
} else {
  let data = JSON.parse(localStorage.getItem(currentUser));

  // FIX corrupted data
  if(!data || typeof data.points !== "number"){
    localStorage.setItem(currentUser, JSON.stringify({ points: 1000 }));
  }
}

  updateInfo();
}

// DEDUCT POINTS

function deduct(){

  if(!currentUser){
    alert("User not logged in!");
    return;
  }

  let stored = localStorage.getItem(currentUser);
  let data = stored ? JSON.parse(stored) : {};

  // Defaults
  if(typeof data.points !== "number") data.points = 1000;
  if(typeof data.count !== "number") data.count = 0;
  if(typeof data.monthlyTotal !== "number") data.monthlyTotal = 0;

  let now = new Date();
  let today = now.toLocaleDateString("en-GB");
  let todayTime = now.getTime();

  // DAILY RESET
  if(data.lastDate !== today){
    data.count = 0;
    data.lastDate = today;
  }

  //  28-DAY RESET
  if(!data.startDate){
    data.startDate = todayTime;
  }

  let diffDays = (todayTime - data.startDate) / (1000 * 60 * 60 * 24);

  if(diffDays >= 28){
    data.monthlyTotal = 0;
    data.startDate = todayTime;
    data.points = 1000;
  }

  let deductionValue = 2;

  //  UPDATE VALUES
  data.points = Math.max(0, data.points - deductionValue);
  data.count += 1;           // daily count
  data.monthlyTotal += 1;    // 28-day total

  localStorage.setItem(currentUser, JSON.stringify(data));

  console.log("Daily Count:", data.count);
  console.log("28-Day Total:", data.monthlyTotal);

  updateInfo();

  fetch(APPS_SCRIPT_URL, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      name: currentUser,
      deducted: deductionValue,
      points: data.points,
      count: data.count,
      monthlyTotal: data.monthlyTotal,
      date: today,
      time: now.toLocaleTimeString()
    })
  });

  alert("2 Points Deducted!");
}

// UPDATE UI
function updateInfo(){
  let data = JSON.parse(localStorage.getItem(currentUser));
  // document.getElementById("info").innerText =
  //   `Remaining Points: ${data.points}`;
}