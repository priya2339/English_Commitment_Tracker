const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbycqCfgBXiGKxS_hYeRzO79cw6jrRwyeBG-ANlAF-tH4AwV1WgdXeGV8X7au0G-fT5k/exec";

// ============================================================
// STUDENTS DATA (Name → Login Code)
// ============================================================
const STUDENTS = {
 "Fanija" : "F00",
 "Pooja" : "P0",
 "Anchal Gupta": "P01",
  "Renu Patel": "P02",
  "Bhawna Chauhan": "P03",
  "Tikeshwari Sanwara": "P04",
  "Payal Nagwanshi": "P05",
  "Anurekha Nishad": "P06",
  "Saniya Gupta": "P07",
  "Reema Pradhan": "P08",
  "Neelkumari Tirkey": "P09",
  "Kavita Sahu": "P10",
  "Yashika Bhowmick": "P11",
  "Priya Kumari": "P12",
  "Fulkumari Chouhan": "P13",
  "Saniya Barik": "P14",
  "Muskan Namdev": "P15",
  "Preeti Gupta": "P16",
  "Neelam Nishad": "P17",
  "Rajshri Mishra": "P18",
  "Anjali Chouhan": "P19",
  "Shaili Nayak": "P20",
  "Shanaj Khatun": "P21",
  "Gandhari Mehar": "P22",
  "Sanjana Nishad": "P23",
  "Laxmi Rathia": "P24",
  "Mamta Nishad": "P25",
  "Ariba Parween": "P26",
  "Mangleshwari Rathia": "P27",
  "Akriti Sa": "P28",
  "Hemlata Sahu": "P29",
  "Uma Nishad": "P30",
  "Madhuri Sahu": "P31",
  "Anisha Gupta": "P32",
  "Chanchal Sao": "P33",
  "Sunita Sarthi": "P34",
  "Dipeeka Sarthi": "P35",
  "Manju Sahu": "P36",
  "Arti Bishal": "P37",
  "Aanchal Mahant": "P38",
  "Shruti Talukdar": "P39",
  "Babli Sidar": "P40",
  "Jyoti Malakar": "P41",
  "Shradha Kerketta": "P42",
  "Khushi Kumari Singh": "P43",
  "Priti Pradhan": "P44",
  "Akanksha Prajapati": "P45",
  "Doleshwari Sao": "P46",
  "Rashmi Jaiswal": "P47",
  "Anamika Pal": "P48",
  "Khushboo Nishad": "P49",
  "Tara Bhagat": "P50",
  "Rani Singh": "P51",
  "Jyoti Sav": "P52",
  "Vanshika Ratre": "P53",
  "Navnita Patail": "P54",
  "Seema Chandra": "P55",
  "Snehlata Ekka": "P56",
  "Payal Kweat": "P57",
  "Hema Sao": "P58",
  "Pushpa Bishal": "P59",
  "Preeti Patel": "P60",
  "Monika Shrivas": "P61",
  "Anita Sao": "P62",
  "Aarti Sarthi": "P63",
  "Karina Yadav": "P64",
  "Pinki Sarthi": "P65",
  "Jyoti Sahu": "P66",
  "Pallawi Pal": "P67",
  "Shreya Patkar": "P68",
  "Satyabhama Mahant": "P69",
  "Muskan Choudhary": "P70",
  "Lata Patail": "P71",
  "Sanju Sahu": "P72",
  "Rakhi Bairagi": "P73",
  "Neetu Patel": "P74",
  "Surajamti Gupta": "P75",
  "Prabha Rathia": "P76",
  "Pallavi Pathak": "P77",
  "Tanu Sarthi": "P78",
  "Sakshi Singh": "P79",
  "Madhuri Yadav": "P80",
  "Mahendri Patel": "P81",
  "Veena Choudhary": "P82",
  "Ume Salma": "P83",
  "Bharti Chaturvedi": "P84",
  "Ruchi Sarthi": "P85",
  "Pooja Paikra": "P86",
  "Kusum Yadav": "P87",
  "Pratima Mahant": "P88",
  "Harshika Behra": "P89",
  "Kavita Panada": "P90",
  "Pooja Nayak": "P91",
  "Varsha Nirmalkar": "P92",
  "Kamla Mehar": "P93",
  "Manisha Sao": "P94",
  "Muskan Sahu": "P95",
  "Deepika Dewangan": "P96",
  "Masoom Sao": "P97",
  "Reena Gopal": "P98",
  "Divya Dewangan": "P99",
  "Manisha Banjara": "P100",
  "Mandvi Gupta": "P101",
  "Duleshwari Patel": "P102",
  "Kritika Yadav": "P103",
  "Minakshi Rathore": "P104",
  "Rakhi Gupta": "P105",
  "Reshmi Sao": "P106",
  "Roshni Chouhan": "P107",
  "Guruwari Sahu": "P108",
  "Bhumika Ratre": "P109",
  "Hemkumari Sahu": "P110",
  "Sanjana Yadav": "P111",
  "Riya Pradhan": "P112",
  "Aabha Gupta": "P113",
  "Prakashini Sao": "P114",
  "Vidya Sahu": "P115",
  "Laxmi Sao": "P116",
  "Khushi Sahu": "P117",
  "Tapashwani Sahu": "P118",
  "Usha Kaiwarty": "P119",
  "Reena Saral": "P120",
  "Tripti Sao": "P121",
  "Pooja Gupta": "P122",
  "Bharti Pradhan": "P123",
  "Kajal Kenvat": "P124",
  "Neha Chouhan": "P125",
  "Shilpa Gupta": "P126",
  "Rashmi Namdev": "P127",
  "Hemlata Dansena": "P128",
  "Anshika Sahu": "P129",
  "Tomeshwari Verma": "P130",
  "Ankita Gupta": "P131",
  "Seeman Bareth": "P132",
  "Varsha Pradhan": "P133",
  "Manisha Sao2": "P134",
  "Divya Sahu": "P135",
  "Archana Gupta": "P136",
  "Tisha Gupta": "P137",
  "Alisha Pradhan": "P138",
  "Nikeeta Mahant": "P139"
};

// ============================================================
// GLOBAL VARIABLE
// ============================================================
let currentUser = "";

// ============================================================
// SEARCH — shows dropdown as user types
// ============================================================
document.getElementById("searchInput").addEventListener("input", function () {
  const value = this.value.toLowerCase();
  const suggestions = document.getElementById("suggestions");
  suggestions.innerHTML = "";
  this.removeAttribute("data-selected");

  if (!value) return;

  for (let name in STUDENTS) {
    if (name.toLowerCase().includes(value)) {
      const div = document.createElement("div");
      div.className = "suggestion";
      div.textContent = name;
      div.onclick = function () {
        document.getElementById("searchInput").value = name;
        document.getElementById("searchInput").setAttribute("data-selected", name);
        suggestions.innerHTML = "";
      };
      suggestions.appendChild(div);
    }
  }
});

// ============================================================
// LOGIN
// ============================================================
function login() {
  const selectedName = document.getElementById("searchInput").getAttribute("data-selected");
  const code         = document.getElementById("codeInput").value.toUpperCase().trim();
  const errorEl      = document.getElementById("error");

  if (!selectedName) {
    errorEl.innerText = "Please select your name from the list!";
    return;
  }
  if (!code) {
    errorEl.innerText = "Please enter your code!";
    return;
  }
  if (STUDENTS[selectedName].toUpperCase().trim() !== code) {
    errorEl.innerText = "Wrong code! Please try again.";
    return;
  }

  errorEl.innerText = "";
  currentUser = selectedName;

  document.getElementById("loginPage").style.display   = "none";
  document.getElementById("penaltyPage").style.display = "flex";

  // Initialize localStorage if first time
  // if (!localStorage.getItem(currentUser)) {
  //   localStorage.setItem(currentUser, JSON.stringify({
  //     points:       1000,
  //     count:        0,
  //     monthlyTotal: 0,
  //     startDate:    new Date().getTime(),
  //     lastDate:     new Date().toLocaleDateString("en-GB")
  //   }));
  // }



fetch(`${APPS_SCRIPT_URL}?action=getStudentData&name=${encodeURIComponent(currentUser)}`)
  .then(res => res.json())
  .then(serverData => {

    localStorage.setItem(currentUser, JSON.stringify({
      points: serverData.points,
      count: serverData.count,
      monthlyTotal: serverData.monthlyTotal,
      startDate: new Date().getTime(),
      lastDate: new Date().toLocaleDateString("en-GB")
    }));

    updateDisplay();
  });

}

// ============================================================
// UPDATE DISPLAY — refreshes points + count on screen
// ============================================================
// function updateDisplay() {
//   const data = JSON.parse(localStorage.getItem(currentUser));

//   const pointsEl = document.getElementById("pointsDisplay");
//   if (pointsEl) pointsEl.innerText = data.points;

//   const countEl = document.getElementById("countDisplay");
//   if (countEl) countEl.innerText = data.count;
// }

function updateDisplay() {

  const data = JSON.parse(localStorage.getItem(currentUser));

  if (!data) return;

  document.getElementById("pointsDisplay").innerText = data.points;
  document.getElementById("countDisplay").innerText = data.count;
}

// // ============================================================
// // DEDUCT — called on every button click
// // ============================================================
// function deduct() {
//   let data = JSON.parse(localStorage.getItem(currentUser));

//   const now     = new Date();
//   const today   = now.toLocaleDateString("en-GB"); // dd/MM/yyyy
//   const nowTime = now.getTime();

//   // ── DAILY RESET ─────────────────────────────────────────
//   if (data.lastDate !== today) {
//     data.count    = 0;
//     data.lastDate = today;
//   }

//   // ── 28-DAY RESET ────────────────────────────────────────
//   const diffDays = (nowTime - data.startDate) / (1000 * 60 * 60 * 24);
//   if (diffDays >= 28) {
//     data.monthlyTotal = 0;
//     data.points       = 1000;
//     data.startDate    = nowTime;
//   }

//   // ── DEDUCT 2 POINTS ─────────────────────────────────────
//   const deductionPerClick = 2;
//   data.points             = Math.max(0, data.points - deductionPerClick);
//   data.count             += 1;
//   data.monthlyTotal      += 1;

//   localStorage.setItem(currentUser, JSON.stringify(data));

//   // Cumulative deduction for today
//   // Click 1→2, Click 2→4, Click 40→80
//   const totalDeductedToday = data.count * deductionPerClick;

//   // ── SEND TO GOOGLE SHEET ─────────────────────────────────
//   fetch(APPS_SCRIPT_URL, {
//     method:  "POST",
//     mode:    "no-cors",  
//     headers: { "Content-Type": "text/plain;charset=utf-8" },
//     body: JSON.stringify({
//       name:         currentUser,
//       deducted:     totalDeductedToday,
//       points:       data.points,
//       count:        data.count,
//       monthlyTotal: data.monthlyTotal,
//       date:         today,
//       time:         now.toLocaleTimeString("en-GB")
//     })
//   })
//   .then(() => { console.log(" Data sent!"); })
//   .catch(err => { console.error(" Error:", err); });

//   updateDisplay();
//   alert("2 Points Deducted!\nRemaining Points: " + data.points);
// }



function deduct() {
  const clickSound = new Audio("click.mp3");

  let data = JSON.parse(localStorage.getItem(currentUser));

  if (!data) {
    alert("Please wait 2 seconds after login.");
    return;
  }

  clickSound.play();
 
 // const clickSound = new Audio("click.mp3");
 //  let data = JSON.parse(localStorage.getItem(currentUser));
 //  clickSound.play();
  const now = new Date();
  const today = now.toLocaleDateString("en-GB");
  const nowTime = now.getTime();

  // ── 28-DAY RESET ────────────────────────────────────────
  const diffDays = (nowTime - data.startDate) / (1000 * 60 * 60 * 24);

  if (diffDays >= 28) {
    data.points = 1000;
    data.count = 0;
    data.monthlyTotal = 0;
    data.startDate = nowTime;
  }

  // ── DAILY DATE UPDATE ONLY ─────────────────────────────
  data.lastDate = today;

  // ── DEDUCT 2 POINTS ────────────────────────────────────
  const deductionPerClick = 2;

  data.points = Math.max(0, data.points - deductionPerClick);

  // Total clicks overall for 28 days
  data.count += 1;

  // Monthly total
  data.monthlyTotal += 1;

  localStorage.setItem(currentUser, JSON.stringify(data));

  // Total deducted till now
  const totalDeducted = data.count * deductionPerClick;

  // ── SEND TO GOOGLE SHEET ───────────────────────────────
  fetch(APPS_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify({
      name: currentUser,
      deducted: totalDeducted,
      points: data.points,
      count: data.count,
      monthlyTotal: data.monthlyTotal,
      date: today,
      time: now.toLocaleTimeString("en-GB")
    })
  })
  .then(() => {
    console.log("Data sent!");
  })
  .catch(err => {
    console.error("Error:", err);
  });

  updateDisplay();

  alert(
    "2 Points Deducted!\nRemaining Points: " + data.points
  );
}



// UPDATE UI
function updateInfo(){
  let data = JSON.parse(localStorage.getItem(currentUser));
  // document.getElementById("info").innerText =
  //   `Remaining Points: ${data.points}`;
}

// ============================================================
// LOGOUT
// ============================================================
function logout() {
  currentUser = "";
  document.getElementById("penaltyPage").style.display = "none";
  document.getElementById("loginPage").style.display   = "flex";
  document.getElementById("searchInput").value = "";
  document.getElementById("searchInput").removeAttribute("data-selected");
  document.getElementById("codeInput").value   = "";
  const errorEl = document.getElementById("error");
  if (errorEl) errorEl.innerText = "";
}

