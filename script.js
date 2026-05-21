












const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbycqCfgBXiGKxS_hYeRzO79cw6jrRwyeBG-ANlAF-tH4AwV1WgdXeGV8X7au0G-fT5k/exec";

// ============================================================
// 🔐 STUDENTS DATA (Name → Login Code)
// ============================================================
const STUDENTS = {
  "Aarav Sharma": "A",
   "Fanija": "fanija",
    "Samiksha": "samiksha",
    "Pooja": "pooja",
    "Prerna": "prerna",
    "Raman": "raman",
    "Tanzil": "tanzil",
    "Bhavna": "bhavna",
  "Priya Patel" : "priya002",
  "Aanchal Gupta": "A01",
  "Aanchal Mahant": "A02",
  "Aarti Sarthi": "A03",
  "Akanksha Prajapati": "A04",
  "Akriti Sa": "A05",
  "Alisha Yadav": "A06",
  "Anita Sao": "A07",
  "Anjali Chouhan": "A08",
  "Anshika Sahu": "A09",
  "Anupama Mehar": "A10",
  "Anurekha Nishad": "A11",

  "Babli Sidar": "B01",
  "Bharti Chaturvedi": "B02",
  "Bharti Pradhan": "B03",
  "Bhawna Chouhan": "B04",
  "Bhumika Ratre": "B05",


  "Chanchal Sao": "C01",


  "Chanchal Sao": "C01",

  "Deepika Dewangan": "D01",
  "Divya Dewangan": "D02",
  "Divya Sahu": "D03",
  "Doleshwari Sao": "D04",
  "Duleshwari Patel": "D05",


  "Fulkumari Chauhan": "F01",

  "Guruwari Sahu": "G01",

  "Hemkumari Sahu": "H01",
  "Hemlata Dansena": "H02",
  "Hemlata Sahu": "H03",

  "Jyoti Sao": "J01",


  "Fulkumari Chauhan": "F01",
  "Guruwari Sahu": "G01",
  "Hemkumari Sahu": "H01",
  "Hemlata Dansena": "H02",
  "Hemlata Sahu": "H03",
  "Jyoti Sao": "J01",

  "Kajal Kenvat": "K01",
  "Karina Yadav": "K02",
  "Kativa Panda": "K03",
  "Kavita Sahu": "K04",
  "Kavyanjali Dewangan": "K05",
  "Khushboo Nishad": "K06",
  "Khushi Kumari": "K07",
  "Khushi Sahu": "K08",
  "Kritika Yadav": "K09",
  "Kusum Yadav": "K10",


  "Lata Patel": "L01",
  "Laxmi Sao": "L02",

  "Lata Patel": "L01",
  "Laxmi Sao": "L02",

  "Madhuri": "M01",
  "Madhuri Yadav": "M02",
  "Mamta Nishad": "M03",
  "Mandvi Gupta": "M04",
  "Mangleshwari Rathia": "M05",
  "Manisha Banjara": "M06",
  "Manisha Sao Cohort 2": "M07",
  "Manju Sahu": "M08",
  "Masum Sao": "M09",
  "Minakshi Rathore": "M10",
  "Monika Srivas": "M11",
  "Muskan Choudhary": "M12",
  "Muskan Namdev": "M13",
  "Muskan Sahu": "M14",

  "Nandini Rathia": "N01",
  "Navnita Patail": "N02",
  "Neha Chauhan": "N03",
  "Nikeeta": "N04",
  "Nilkumari Tirki": "N05",

  "Pallavi Pal": "P01",
  "Pallavi Pathak": "P02",
  "Payal Kewat": "P03",
  "Payal Nagwanshi": "P04",
  "Pooja Dehri": "P05",
  "Pooja Gupta": "P06",
  "Pooja Nayak": "P07",
  "Pooja Painkra": "P08",
  "Prabha": "P09",
  "Prakashini": "P10",
  "Pratima Mahant": "P11",
  "Priti Patel": "P12",
  "Priti Pradhan": "P13",

  "Rakhi Gupta": "R01",
  "Rani Singh": "R02",
  "Rashmi Jaiswal": "R03",
  "Rashmi Namdev": "R04",
  "Reena Gopal": "R05",
  "Reena Saral": "R06",
  "Renu Patel": "R07",
  "Reshma": "R08",
  "Reshmi Sao": "R09",
  "Riya": "R10",
  "Roshni Chauhan": "R11",
  "Ruchi Sarthi": "R12",
  "Rupeshani": "R13",


  "Sakshi Singh": "S01",
  "Sandhya Sao": "S02",
  "Sanjana": "S03",
  "Sanjana Nishad..": "S04",
  "Satyabhama Mahant": "S05",
  "Seema Chandra": "S06",
  "Seeman": "S07",
  "Shaili Nayak": "S08",
  "Shanaj Khatun": "S09",
  "Shilpa Gupta": "S10",
  "Shradha Kerketta": "S11",
  "Shreya Patkar": "S12",
  "Shruti Talukdar": "S13",
  "Snehalata Ekka": "S14",
  "Sunita Sarthi": "S15",
  "Surajmati Gupta": "S16",


  "Tanu Sarthi": "T01",
  "Tanuja Sahu": "T02",
  "Tapshwani Sahu": "T03",
  "Tara Bhagat": "T04",
  "Tikeshwari Sanwara": "T05",
  "Tisha": "T06",
  "Tomeshwari Verma": "T07",
  "Tripti": "T08",
  "Twinkal Chouhan": "T09",


  "Uma Nishad": "U01",
  "Ume Salma": "U02",
  "Usha Pradhan": "U03",
  "Usha Kaiwartya": "U04",



  "Vanshika Ratre": "V01",
  "Varsha Nirmalkar": "V02",
  "Varsha Singh Rajput": "V03",
  "Veena Choudhary": "V04",
  "Vidya Sahu": "V05",



  "Yashika Bhowmick": "Y01"
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
  if (!localStorage.getItem(currentUser)) {
    localStorage.setItem(currentUser, JSON.stringify({
      points:       1000,
      count:        0,
      monthlyTotal: 0,
      startDate:    new Date().getTime(),
      lastDate:     new Date().toLocaleDateString("en-GB")
    }));
  }

  updateDisplay();
}

// ============================================================
// UPDATE DISPLAY — refreshes points + count on screen
// ============================================================
function updateDisplay() {
  const data = JSON.parse(localStorage.getItem(currentUser));

  const pointsEl = document.getElementById("pointsDisplay");
  if (pointsEl) pointsEl.innerText = data.points;

  const countEl = document.getElementById("countDisplay");
  if (countEl) countEl.innerText = data.count;
}

// ============================================================
// DEDUCT — called on every button click
// ============================================================
function deduct() {
  let data = JSON.parse(localStorage.getItem(currentUser));

  const now     = new Date();
  const today   = now.toLocaleDateString("en-GB"); // dd/MM/yyyy
  const nowTime = now.getTime();

  // ── DAILY RESET ─────────────────────────────────────────
  if (data.lastDate !== today) {
    data.count    = 0;
    data.lastDate = today;
  }

  // ── 28-DAY RESET ────────────────────────────────────────
  const diffDays = (nowTime - data.startDate) / (1000 * 60 * 60 * 24);
  if (diffDays >= 28) {
    data.monthlyTotal = 0;
    data.points       = 1000;
    data.startDate    = nowTime;
  }

  // ── DEDUCT 2 POINTS ─────────────────────────────────────
  const deductionPerClick = 2;
  data.points             = Math.max(0, data.points - deductionPerClick);
  data.count             += 1;
  data.monthlyTotal      += 1;

  localStorage.setItem(currentUser, JSON.stringify(data));

  // Cumulative deduction for today
  // Click 1→2, Click 2→4, Click 40→80
  const totalDeductedToday = data.count * deductionPerClick;

  // ── SEND TO GOOGLE SHEET ─────────────────────────────────
  fetch(APPS_SCRIPT_URL, {
    method:  "POST",
    mode:    "no-cors",   // ✅ Fixes CORS error
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      name:         currentUser,
      deducted:     totalDeductedToday,
      points:       data.points,
      count:        data.count,
      monthlyTotal: data.monthlyTotal,
      date:         today,
      time:         now.toLocaleTimeString("en-GB")
    })
  })
  .then(() => { console.log("✅ Data sent!"); })
  .catch(err => { console.error("❌ Error:", err); });

  updateDisplay();
  alert("2 Points Deducted!\nRemaining Points: " + data.points);
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

