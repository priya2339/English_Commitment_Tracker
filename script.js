// // // 🔗 YOUR APPS SCRIPT URL
// // const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwWkP102D1Ory7BJMz_z5eTNDKGcJ8MdDXyI56HpnnEZWHCYxWh-EmwlvJteYbmjKRZ/exec";

// // // 🔐 STUDENTS DATA
// // const STUDENTS = {
// //   "Aarav Sharma": "A",
// //   "Priya Patel": "PRIYA002",
// //   "Aanchal Gupta": "A01",
// //   "Aanchal Mahant": "A02",
// //   "Aarti Sarthi": "A03",
// //   "Akanksha Prajapati": "A04",
// //   "Akriti Sa": "A05",
// //   "Alisha Yadav": "A06",
// //   "Anita Sao": "A07",
// //   "Anjali Chouhan": "A08",
// //   "Anshika Sahu": "A09",
// //   "Anupama Mehar": "A10",
// //   "Anurekha Nishad": "A11",
// //   "Babli Sidar": "B01",
// //   "Bharti Chaturvedi": "B02",
// //   "Bharti Pradhan": "B03",
// //   "Bhawna Chouhan": "B04",
// //   "Bhumika Ratre": "B05",
// //   "Chanchal Sao": "C01",
// //   "Deepika Dewangan": "D01",
// //   "Divya Dewangan": "D02",
// //   "Divya Sahu": "D03",
// //   "Doleshwari Sao": "D04",
// //   "Duleshwari Patel": "D05",
// //   "Fulkumari Chauhan": "F01",
// //   "Guruwari Sahu": "G01",
// //   "Hemkumari Sahu": "H01",
// //   "Hemlata Dansena": "H02",
// //   "Hemlata Sahu": "H03",
// //   "Jyoti Sao": "J01",
// //   "Kajal Kenvat": "K01",
// //   "Karina Yadav": "K02",
// //   "Kativa Panda": "K03",
// //   "Kavita Sahu": "K04",
// //   "Kavyanjali Dewangan": "K05",
// //   "Khushboo Nishad": "K06",
// //   "Khushi Kumari": "K07",
// //   "Khushi Sahu": "K08",
// //   "Kritika Yadav": "K09",
// //   "Kusum Yadav": "K10",
// //   "Lata Patel": "L01",
// //   "Laxmi Sao": "L02",
// //   "Madhuri": "M01",
// //   "Madhuri Yadav": "M02",
// //   "Mamta Nishad": "M03",
// //   "Mandvi Gupta": "M04",
// //   "Mangleshwari Rathia": "M05",
// //   "Manisha Banjara": "M06",
// //   "Manisha Sao Cohort 2": "M07",
// //   "Manju Sahu": "M08",
// //   "Masum Sao": "M09",
// //   "Minakshi Rathore": "M10",
// //   "Monika Srivas": "M11",
// //   "Muskan Choudhary": "M12",
// //   "Muskan Namdev": "M13",
// //   "Muskan Sahu": "M14",
// //   "Nandini Rathia": "N01",
// //   "Navnita Patail": "N02",
// //   "Neha Chauhan": "N03",
// //   "Nikeeta": "N04",
// //   "Nilkumari Tirki": "N05",
// //   "Pallavi Pal": "P01",
// //   "Pallavi Pathak": "P02",
// //   "Payal Kewat": "P03",
// //   "Payal Nagwanshi": "P04",
// //   "Pooja Dehri": "P05",
// //   "Pooja Gupta": "P06",
// //   "Pooja Nayak": "P07",
// //   "Pooja Painkra": "P08",
// //   "Prabha": "P09",
// //   "Prakashini": "P10",
// //   "Pratima Mahant": "P11",
// //   "Priti Patel": "P12",
// //   "Priti Pradhan": "P13",
// //   "Rakhi Gupta": "R01",
// //   "Rani Singh": "R02",
// //   "Rashmi Jaiswal": "R03",
// //   "Rashmi Namdev": "R04",
// //   "Reena Gopal": "R05",
// //   "Reena Saral": "R06",
// //   "Renu Patel": "R07",
// //   "Reshma": "R08",
// //   "Reshmi Sao": "R09",
// //   "Riya": "R10",
// //   "Roshni Chauhan": "R11",
// //   "Ruchi Sarthi": "R12",
// //   "Rupeshani": "R13",
// //   "Sakshi Singh": "S01",
// //   "Sandhya Sao": "S02",
// //   "Sanjana": "S03",
// //   "Sanjana Nishad..": "S04",
// //   "Satyabhama Mahant": "S05",
// //   "Seema Chandra": "S06",
// //   "Seeman": "S07",
// //   "Shaili Nayak": "S08",
// //   "Shanaj Khatun": "S09",
// //   "Shilpa Gupta": "S10",
// //   "Shradha Kerketta": "S11",
// //   "Shreya Patkar": "S12",
// //   "Shruti Talukdar": "S13",
// //   "Snehalata Ekka": "S14",
// //   "Sunita Sarthi": "S15",
// //   "Surajmati Gupta": "S16",
// //   "Tanu Sarthi": "T01",
// //   "Tanuja Sahu": "T02",
// //   "Tapshwani Sahu": "T03",
// //   "Tara Bhagat": "T04",
// //   "Tikeshwari Sanwara": "T05",
// //   "Tisha": "T06",
// //   "Tomeshwari Verma": "T07",
// //   "Tripti": "T08",
// //   "Twinkal Chouhan": "T09",
// //   "Uma Nishad": "U01",
// //   "Ume Salma": "U02",
// //   "Usha Pradhan": "U03",
// //   "Usha Kaiwartya": "U04",
// //   "Vanshika Ratre": "V01",
// //   "Varsha Nirmalkar": "V02",
// //   "Varsha Singh Rajput": "V03",
// //   "Veena Choudhary": "V04",
// //   "Vidya Sahu": "V05",
// //   "Yashika Bhowmick": "Y01"
// // };

// // let currentUser = "";

// // // SEARCH
// // document.getElementById("searchInput").addEventListener("input", function () {
// //   let value = this.value.toLowerCase();
// //   let suggestions = document.getElementById("suggestions");
// //   suggestions.innerHTML = "";

// //   if (!value) return;

// //   for (let name in STUDENTS) {
// //     if (name.toLowerCase().includes(value)) {
// //       let div = document.createElement("div");
// //       div.className = "suggestion";
// //       div.textContent = name;

// //       div.onclick = function () {
// //         document.getElementById("searchInput").value = name;
// //         document.getElementById("searchInput").setAttribute("data-selected", name);
// //         suggestions.innerHTML = "";
// //       };

// //       suggestions.appendChild(div);
// //     }
// //   }
// // });

// // // LOGIN
// // function login() {

// //   let selectedName = document.getElementById("searchInput").getAttribute("data-selected");
// //   let code = document.getElementById("codeInput").value.toUpperCase().trim();

// //   if (!selectedName) {
// //     document.getElementById("error").innerText = "Select name!";
// //     return;
// //   }

// //   // 🔥 FIX: normalize both sides
// //   if (STUDENTS[selectedName].toUpperCase().trim() !== code) {
// //     document.getElementById("error").innerText = "Wrong code!";
// //     return;
// //   }

// //   currentUser = selectedName;

// //   document.getElementById("loginPage").style.display = "none";
// //   document.getElementById("penaltyPage").style.display = "flex";

// //   // INIT USER
// //   if (!localStorage.getItem(currentUser)) {
// //     localStorage.setItem(currentUser, JSON.stringify({
// //       points: 1000,
// //       count: 0,
// //       monthlyTotal: 0,
// //       startDate: new Date().getTime(),
// //       lastDate: new Date().toLocaleDateString("en-GB")
// //     }));
// //   }
// // }



// // // DEDUCT
// // function deduct() {
// //   let data = JSON.parse(localStorage.getItem(currentUser));

// //   let now = new Date();
// //   let today = now.toLocaleDateString("en-GB");
// //   let todayTime = now.getTime();

// //   // DAILY RESET
// //   if (data.lastDate !== today) {
// //     data.count = 0;
// //     data.lastDate = today;
// //   }

// //   // 28 DAY RESET
// //   let diff = (todayTime - data.startDate) / (1000 * 60 * 60 * 24);

// //   if (diff >= 28) {
// //     data.monthlyTotal = 0;
// //     data.points = 1000;
// //     data.startDate = todayTime;
// //   }

// //   // Each click deducts 2 points
// //   const deductionValue = 2;

// //   // Update local values
// //   data.points = Math.max(0, data.points - deductionValue);
// //   data.count += 1;
// //   data.monthlyTotal += 1;

// //   // Save updated data to localStorage
// //   localStorage.setItem(currentUser, JSON.stringify(data));

// //   // IMPORTANT:
// //   // Send cumulative deduction for the current day.
// //   // Example:
// //   // Count = 1 → Deducted = 2
// //   // Count = 2 → Deducted = 4
// //   // Count = 3 → Deducted = 6
// //   // Count = 40 → Deducted = 80
// //   const totalDeductionToday = data.count * deductionValue;

// //   // SEND TO GOOGLE SHEET
// //  fetch(APPS_SCRIPT_URL, {
// //   method: "POST",
// //   headers: {
// //     "Content-Type": "text/plain;charset=utf-8"
// //   },
// //   body: JSON.stringify({
// //     name: currentUser,
// //     deducted: deductionValue,
// //     points: data.points,
// //     count: data.count,
// //     monthlyTotal: data.monthlyTotal,
// //     date: today,
// //     time: now.toLocaleTimeString("en-GB")
// //   })
// // })
// // .then(response => response.text())
// // .then(result => {
// //   console.log("Sheet Response:", result);
// // })
// // .catch(error => {
// //   console.error("Error sending data:", error);
// // });

// //   alert("2 Points Deducted!");
// // }





























// // // ============================================================
// // // ENGLISH COMMITMENT TRACKER - FRONTEND CODE (tracker_frontend.js)
// // // ============================================================
// // // HOW TO USE:
// // // 1. Paste this entire code in your HTML <script> tag
// // //    OR link it as <script src="tracker_frontend.js"></script>
// // // 2. Make sure your HTML has these elements:
// // //    - id="searchInput"     → text input for name search
// // //    - id="codeInput"       → text input for code
// // //    - id="suggestions"     → div for dropdown suggestions
// // //    - id="error"           → div/p for error messages
// // //    - id="loginPage"       → div for login screen
// // //    - id="penaltyPage"     → div for penalty screen
// // // ============================================================

// // // ============================================================
// // // 🔗 YOUR APPS SCRIPT URL
// // // ============================================================
// // const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbycqCfgBXiGKxS_hYeRzO79cw6jrRwyeBG-ANlAF-tH4AwV1WgdXeGV8X7au0G-fT5k/exec";

// // // ============================================================
// // // 🔐 STUDENTS DATA  (Name → Login Code)
// // // ============================================================
// // const STUDENTS = {
// //   "Aarav Sharma": "A",
// //   "Priya Patel": "PRIYA002",
// //   "Aanchal Gupta": "A01",
// //   "Aanchal Mahant": "A02",
// //   "Aarti Sarthi": "A03",
// //   "Akanksha Prajapati": "A04",
// //   "Akriti Sa": "A05",
// //   "Alisha Yadav": "A06",
// //   "Anita Sao": "A07",
// //   "Anjali Chouhan": "A08",
// //   "Anshika Sahu": "A09",
// //   "Anupama Mehar": "A10",
// //   "Anurekha Nishad": "A11",
// //   "Babli Sidar": "B01",
// //   "Bharti Chaturvedi": "B02",
// //   "Bharti Pradhan": "B03",
// //   "Bhawna Chouhan": "B04",
// //   "Bhumika Ratre": "B05",
// //   "Chanchal Sao": "C01",
// //   "Deepika Dewangan": "D01",
// //   "Divya Dewangan": "D02",
// //   "Divya Sahu": "D03",
// //   "Doleshwari Sao": "D04",
// //   "Duleshwari Patel": "D05",
// //   "Fulkumari Chauhan": "F01",
// //   "Guruwari Sahu": "G01",
// //   "Hemkumari Sahu": "H01",
// //   "Hemlata Dansena": "H02",
// //   "Hemlata Sahu": "H03",
// //   "Jyoti Sao": "J01",
// //   "Kajal Kenvat": "K01",
// //   "Karina Yadav": "K02",
// //   "Kativa Panda": "K03",
// //   "Kavita Sahu": "K04",
// //   "Kavyanjali Dewangan": "K05",
// //   "Khushboo Nishad": "K06",
// //   "Khushi Kumari": "K07",
// //   "Khushi Sahu": "K08",
// //   "Kritika Yadav": "K09",
// //   "Kusum Yadav": "K10",
// //   "Lata Patel": "L01",
// //   "Laxmi Sao": "L02",
// //   "Madhuri": "M01",
// //   "Madhuri Yadav": "M02",
// //   "Mamta Nishad": "M03",
// //   "Mandvi Gupta": "M04",
// //   "Mangleshwari Rathia": "M05",
// //   "Manisha Banjara": "M06",
// //   "Manisha Sao Cohort 2": "M07",
// //   "Manju Sahu": "M08",
// //   "Masum Sao": "M09",
// //   "Minakshi Rathore": "M10",
// //   "Monika Srivas": "M11",
// //   "Muskan Choudhary": "M12",
// //   "Muskan Namdev": "M13",
// //   "Muskan Sahu": "M14",
// //   "Nandini Rathia": "N01",
// //   "Navnita Patail": "N02",
// //   "Neha Chauhan": "N03",
// //   "Nikeeta": "N04",
// //   "Nilkumari Tirki": "N05",
// //   "Pallavi Pal": "P01",
// //   "Pallavi Pathak": "P02",
// //   "Payal Kewat": "P03",
// //   "Payal Nagwanshi": "P04",
// //   "Pooja Dehri": "P05",
// //   "Pooja Gupta": "P06",
// //   "Pooja Nayak": "P07",
// //   "Pooja Painkra": "P08",
// //   "Prabha": "P09",
// //   "Prakashini": "P10",
// //   "Pratima Mahant": "P11",
// //   "Priti Patel": "P12",
// //   "Priti Pradhan": "P13",
// //   "Rakhi Gupta": "R01",
// //   "Rani Singh": "R02",
// //   "Rashmi Jaiswal": "R03",
// //   "Rashmi Namdev": "R04",
// //   "Reena Gopal": "R05",
// //   "Reena Saral": "R06",
// //   "Renu Patel": "R07",
// //   "Reshma": "R08",
// //   "Reshmi Sao": "R09",
// //   "Riya": "R10",
// //   "Roshni Chauhan": "R11",
// //   "Ruchi Sarthi": "R12",
// //   "Rupeshani": "R13",
// //   "Sakshi Singh": "S01",
// //   "Sandhya Sao": "S02",
// //   "Sanjana": "S03",
// //   "Sanjana Nishad..": "S04",
// //   "Satyabhama Mahant": "S05",
// //   "Seema Chandra": "S06",
// //   "Seeman": "S07",
// //   "Shaili Nayak": "S08",
// //   "Shanaj Khatun": "S09",
// //   "Shilpa Gupta": "S10",
// //   "Shradha Kerketta": "S11",
// //   "Shreya Patkar": "S12",
// //   "Shruti Talukdar": "S13",
// //   "Snehalata Ekka": "S14",
// //   "Sunita Sarthi": "S15",
// //   "Surajmati Gupta": "S16",
// //   "Tanu Sarthi": "T01",
// //   "Tanuja Sahu": "T02",
// //   "Tapshwani Sahu": "T03",
// //   "Tara Bhagat": "T04",
// //   "Tikeshwari Sanwara": "T05",
// //   "Tisha": "T06",
// //   "Tomeshwari Verma": "T07",
// //   "Tripti": "T08",
// //   "Twinkal Chouhan": "T09",
// //   "Uma Nishad": "U01",
// //   "Ume Salma": "U02",
// //   "Usha Pradhan": "U03",
// //   "Usha Kaiwartya": "U04",
// //   "Vanshika Ratre": "V01",
// //   "Varsha Nirmalkar": "V02",
// //   "Varsha Singh Rajput": "V03",
// //   "Veena Choudhary": "V04",
// //   "Vidya Sahu": "V05",
// //   "Yashika Bhowmick": "Y01"
// // };

// // // ============================================================
// // // GLOBAL VARIABLE
// // // ============================================================
// // let currentUser = "";

// // // ============================================================
// // // SEARCH - Shows name suggestions as user types
// // // ============================================================
// // document.getElementById("searchInput").addEventListener("input", function () {
// //   const value = this.value.toLowerCase();
// //   const suggestions = document.getElementById("suggestions");
// //   suggestions.innerHTML = "";

// //   // Clear selected name if user is typing again
// //   this.removeAttribute("data-selected");

// //   if (!value) return;

// //   for (let name in STUDENTS) {
// //     if (name.toLowerCase().includes(value)) {
// //       const div = document.createElement("div");
// //       div.className = "suggestion";
// //       div.textContent = name;

// //       div.onclick = function () {
// //         document.getElementById("searchInput").value = name;
// //         document.getElementById("searchInput").setAttribute("data-selected", name);
// //         suggestions.innerHTML = "";
// //       };

// //       suggestions.appendChild(div);
// //     }
// //   }
// // });

// // // ============================================================
// // // LOGIN - Validates name + code and opens penalty page
// // // ============================================================
// // function login() {
// //   const selectedName = document.getElementById("searchInput").getAttribute("data-selected");
// //   const code = document.getElementById("codeInput").value.toUpperCase().trim();
// //   const errorEl = document.getElementById("error");

// //   // Validation
// //   if (!selectedName) {
// //     errorEl.innerText = "Please select your name from the list!";
// //     return;
// //   }

// //   if (!code) {
// //     errorEl.innerText = "Please enter your code!";
// //     return;
// //   }

// //   if (STUDENTS[selectedName].toUpperCase().trim() !== code) {
// //     errorEl.innerText = "Wrong code! Please try again.";
// //     return;
// //   }

// //   // Clear error
// //   errorEl.innerText = "";

// //   // Set current user
// //   currentUser = selectedName;

// //   // Switch pages
// //   document.getElementById("loginPage").style.display = "none";
// //   document.getElementById("penaltyPage").style.display = "flex";

// //   // --------------------------------------------------------
// //   // INITIALIZE user data in localStorage if first time
// //   // --------------------------------------------------------
// //   if (!localStorage.getItem(currentUser)) {
// //     localStorage.setItem(currentUser, JSON.stringify({
// //       points: 1000,
// //       count: 0,
// //       monthlyTotal: 0,
// //       startDate: new Date().getTime(),
// //       lastDate: new Date().toLocaleDateString("en-GB")
// //     }));
// //   }

// //   // Show current points on penalty page
// //   updateDisplay();
// // }

// // // ============================================================
// // // UPDATE DISPLAY - Shows current points and count on screen
// // // ============================================================
// // function updateDisplay() {
// //   const data = JSON.parse(localStorage.getItem(currentUser));

// //   // Update points display if element exists
// //   const pointsEl = document.getElementById("pointsDisplay");
// //   if (pointsEl) pointsEl.innerText = data.points;

// //   // Update count display if element exists
// //   const countEl = document.getElementById("countDisplay");
// //   if (countEl) countEl.innerText = data.count;
// // }

// // // ============================================================
// // // DEDUCT - Called when deduct button is clicked
// // // ============================================================
// // function deduct() {
// //   let data = JSON.parse(localStorage.getItem(currentUser));

// //   const now = new Date();
// //   const today = now.toLocaleDateString("en-GB"); // dd/MM/yyyy
// //   const todayTime = now.getTime();

// //   // --------------------------------------------------------
// //   // DAILY RESET: if new day, reset daily count
// //   // --------------------------------------------------------
// //   if (data.lastDate !== today) {
// //     data.count = 0;
// //     data.lastDate = today;
// //   }

// //   // --------------------------------------------------------
// //   // 28-DAY RESET: if 28 days passed, reset points & monthly
// //   // --------------------------------------------------------
// //   const diffDays = (todayTime - data.startDate) / (1000 * 60 * 60 * 24);

// //   if (diffDays >= 28) {
// //     data.monthlyTotal = 0;
// //     data.points = 1000;
// //     data.startDate = todayTime;
// //   }

// //   // --------------------------------------------------------
// //   // DEDUCT 2 POINTS PER CLICK
// //   // --------------------------------------------------------
// //   const deductionPerClick = 2;

// //   data.points       = Math.max(0, data.points - deductionPerClick);
// //   data.count        += 1;
// //   data.monthlyTotal += 1;

// //   // Save to localStorage
// //   localStorage.setItem(currentUser, JSON.stringify(data));

// //   // --------------------------------------------------------
// //   // CALCULATE TOTAL DEDUCTION FOR TODAY
// //   // Example:
// //   //   1st click  → count=1  → totalDeductedToday = 2
// //   //   2nd click  → count=2  → totalDeductedToday = 4
// //   //   10th click → count=10 → totalDeductedToday = 20
// //   //   40th click → count=40 → totalDeductedToday = 80
// //   // --------------------------------------------------------
// //   const totalDeductedToday = data.count * deductionPerClick;

// //   // --------------------------------------------------------
// //   // SEND DATA TO GOOGLE SHEET
// //   // We send totalDeductedToday (cumulative) so Apps Script
// //   // can simply OVERWRITE column B with this value.
// //   // No addition needed on Apps Script side.
// //   // --------------------------------------------------------
// //   fetch(APPS_SCRIPT_URL, {
// //     method: "POST",
// //     headers: {
// //       "Content-Type": "text/plain;charset=utf-8"
// //     },
// //     body: JSON.stringify({
// //       name:         currentUser,
// //       deducted:     totalDeductedToday,  // ← cumulative total for today
// //       points:       data.points,
// //       count:        data.count,
// //       monthlyTotal: data.monthlyTotal,
// //       date:         today,
// //       time:         now.toLocaleTimeString("en-GB")
// //     })
// //   })
// //   .then(response => response.text())
// //   .then(result => {
// //     console.log("Sheet Response:", result);
// //   })
// //   .catch(error => {
// //     console.error("Error sending to sheet:", error);
// //   });

// //   // Update display
// //   updateDisplay();

// //   // Show confirmation
// //   alert(`2 Points Deducted!\nRemaining Points: ${data.points}`);
// // }

// // // ============================================================
// // // LOGOUT - Goes back to login page
// // // ============================================================
// // function logout() {
// //   currentUser = "";
// //   document.getElementById("penaltyPage").style.display = "none";
// //   document.getElementById("loginPage").style.display = "flex";

// //   // Clear inputs
// //   document.getElementById("searchInput").value = "";
// //   document.getElementById("searchInput").removeAttribute("data-selected");
// //   document.getElementById("codeInput").value = "";
// // }























































// // ============================================================
// // ENGLISH COMMITMENT TRACKER - SCRIPT.JS
// // FINAL COMPLETE VERSION
// // ============================================================

// // ============================================================
// // 🔗 YOUR APPS SCRIPT URL — Update this if URL changes
// // ============================================================
// const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbycqCfgBXiGKxS_hYeRzO79cw6jrRwyeBG-ANlAF-tH4AwV1WgdXeGV8X7au0G-fT5k/exec";

// // ============================================================
// // 🔐 STUDENTS DATA (Name → Login Code)
// // ============================================================
// const STUDENTS = {
//   "Aarav Sharma": "A",
//   "Priya Patel": "PRIYA002",
//   "Aanchal Gupta": "A01",
//   "Aanchal Mahant": "A02",
//   "Aarti Sarthi": "A03",
//   "Akanksha Prajapati": "A04",
//   "Akriti Sa": "A05",
//   "Alisha Yadav": "A06",
//   "Anita Sao": "A07",
//   "Anjali Chouhan": "A08",
//   "Anshika Sahu": "A09",
//   "Anupama Mehar": "A10",
//   "Anurekha Nishad": "A11",
//   "Babli Sidar": "B01",
//   "Bharti Chaturvedi": "B02",
//   "Bharti Pradhan": "B03",
//   "Bhawna Chouhan": "B04",
//   "Bhumika Ratre": "B05",
//   "Chanchal Sao": "C01",
//   "Deepika Dewangan": "D01",
//   "Divya Dewangan": "D02",
//   "Divya Sahu": "D03",
//   "Doleshwari Sao": "D04",
//   "Duleshwari Patel": "D05",
//   "Fulkumari Chauhan": "F01",
//   "Guruwari Sahu": "G01",
//   "Hemkumari Sahu": "H01",
//   "Hemlata Dansena": "H02",
//   "Hemlata Sahu": "H03",
//   "Jyoti Sao": "J01",
//   "Kajal Kenvat": "K01",
//   "Karina Yadav": "K02",
//   "Kativa Panda": "K03",
//   "Kavita Sahu": "K04",
//   "Kavyanjali Dewangan": "K05",
//   "Khushboo Nishad": "K06",
//   "Khushi Kumari": "K07",
//   "Khushi Sahu": "K08",
//   "Kritika Yadav": "K09",
//   "Kusum Yadav": "K10",
//   "Lata Patel": "L01",
//   "Laxmi Sao": "L02",
//   "Madhuri": "M01",
//   "Madhuri Yadav": "M02",
//   "Mamta Nishad": "M03",
//   "Mandvi Gupta": "M04",
//   "Mangleshwari Rathia": "M05",
//   "Manisha Banjara": "M06",
//   "Manisha Sao Cohort 2": "M07",
//   "Manju Sahu": "M08",
//   "Masum Sao": "M09",
//   "Minakshi Rathore": "M10",
//   "Monika Srivas": "M11",
//   "Muskan Choudhary": "M12",
//   "Muskan Namdev": "M13",
//   "Muskan Sahu": "M14",
//   "Nandini Rathia": "N01",
//   "Navnita Patail": "N02",
//   "Neha Chauhan": "N03",
//   "Nikeeta": "N04",
//   "Nilkumari Tirki": "N05",
//   "Pallavi Pal": "P01",
//   "Pallavi Pathak": "P02",
//   "Payal Kewat": "P03",
//   "Payal Nagwanshi": "P04",
//   "Pooja Dehri": "P05",
//   "Pooja Gupta": "P06",
//   "Pooja Nayak": "P07",
//   "Pooja Painkra": "P08",
//   "Prabha": "P09",
//   "Prakashini": "P10",
//   "Pratima Mahant": "P11",
//   "Priti Patel": "P12",
//   "Priti Pradhan": "P13",
//   "Rakhi Gupta": "R01",
//   "Rani Singh": "R02",
//   "Rashmi Jaiswal": "R03",
//   "Rashmi Namdev": "R04",
//   "Reena Gopal": "R05",
//   "Reena Saral": "R06",
//   "Renu Patel": "R07",
//   "Reshma": "R08",
//   "Reshmi Sao": "R09",
//   "Riya": "R10",
//   "Roshni Chauhan": "R11",
//   "Ruchi Sarthi": "R12",
//   "Rupeshani": "R13",
//   "Sakshi Singh": "S01",
//   "Sandhya Sao": "S02",
//   "Sanjana": "S03",
//   "Sanjana Nishad..": "S04",
//   "Satyabhama Mahant": "S05",
//   "Seema Chandra": "S06",
//   "Seeman": "S07",
//   "Shaili Nayak": "S08",
//   "Shanaj Khatun": "S09",
//   "Shilpa Gupta": "S10",
//   "Shradha Kerketta": "S11",
//   "Shreya Patkar": "S12",
//   "Shruti Talukdar": "S13",
//   "Snehalata Ekka": "S14",
//   "Sunita Sarthi": "S15",
//   "Surajmati Gupta": "S16",
//   "Tanu Sarthi": "T01",
//   "Tanuja Sahu": "T02",
//   "Tapshwani Sahu": "T03",
//   "Tara Bhagat": "T04",
//   "Tikeshwari Sanwara": "T05",
//   "Tisha": "T06",
//   "Tomeshwari Verma": "T07",
//   "Tripti": "T08",
//   "Twinkal Chouhan": "T09",
//   "Uma Nishad": "U01",
//   "Ume Salma": "U02",
//   "Usha Pradhan": "U03",
//   "Usha Kaiwartya": "U04",
//   "Vanshika Ratre": "V01",
//   "Varsha Nirmalkar": "V02",
//   "Varsha Singh Rajput": "V03",
//   "Veena Choudhary": "V04",
//   "Vidya Sahu": "V05",
//   "Yashika Bhowmick": "Y01"
// };

// // ============================================================
// // GLOBAL VARIABLE
// // ============================================================
// let currentUser = "";

// // ============================================================
// // SEARCH — shows dropdown suggestions as user types
// // ============================================================
// document.getElementById("searchInput").addEventListener("input", function () {
//   const value = this.value.toLowerCase();
//   const suggestions = document.getElementById("suggestions");
//   suggestions.innerHTML = "";

//   // Clear previously selected name if user is typing again
//   this.removeAttribute("data-selected");

//   if (!value) return;

//   for (let name in STUDENTS) {
//     if (name.toLowerCase().includes(value)) {
//       const div = document.createElement("div");
//       div.className = "suggestion";
//       div.textContent = name;

//       div.onclick = function () {
//         document.getElementById("searchInput").value = name;
//         document.getElementById("searchInput").setAttribute("data-selected", name);
//         suggestions.innerHTML = "";
//       };

//       suggestions.appendChild(div);
//     }
//   }
// });

// // ============================================================
// // LOGIN — validates name + code, opens penalty page
// // ============================================================
// function login() {
//   const selectedName = document.getElementById("searchInput").getAttribute("data-selected");
//   const code         = document.getElementById("codeInput").value.toUpperCase().trim();
//   const errorEl      = document.getElementById("error");

//   // Validations
//   if (!selectedName) {
//     errorEl.innerText = "Please select your name from the list!";
//     return;
//   }

//   if (!code) {
//     errorEl.innerText = "Please enter your code!";
//     return;
//   }

//   if (STUDENTS[selectedName].toUpperCase().trim() !== code) {
//     errorEl.innerText = "Wrong code! Please try again.";
//     return;
//   }

//   // Clear error
//   errorEl.innerText = "";

//   // Set current user
//   currentUser = selectedName;

//   // Switch pages
//   document.getElementById("loginPage").style.display  = "none";
//   document.getElementById("penaltyPage").style.display = "flex";

//   // Initialize user data in localStorage if first time
//   if (!localStorage.getItem(currentUser)) {
//     localStorage.setItem(currentUser, JSON.stringify({
//       points:       1000,
//       count:        0,
//       monthlyTotal: 0,
//       startDate:    new Date().getTime(),
//       lastDate:     new Date().toLocaleDateString("en-GB")
//     }));
//   }

//   // Show current points on screen
//   updateDisplay();
// }

// // ============================================================
// // UPDATE DISPLAY — refreshes points + count on screen
// // ============================================================
// function updateDisplay() {
//   const data = JSON.parse(localStorage.getItem(currentUser));

//   const pointsEl = document.getElementById("pointsDisplay");
//   if (pointsEl) pointsEl.innerText = data.points;

//   const countEl = document.getElementById("countDisplay");
//   if (countEl) countEl.innerText = data.count;
// }

// // ============================================================
// // DEDUCT — called when Deduct button is clicked
// // ============================================================
// function deduct() {
//   let data = JSON.parse(localStorage.getItem(currentUser));

//   const now     = new Date();
//   const today   = now.toLocaleDateString("en-GB"); // dd/MM/yyyy
//   const nowTime = now.getTime();

//   // ----------------------------------------------------------
//   // DAILY RESET — if new day, reset daily count to 0
//   // ----------------------------------------------------------
//   if (data.lastDate !== today) {
//     data.count    = 0;
//     data.lastDate = today;
//   }

//   // ----------------------------------------------------------
//   // 28-DAY RESET — if 28 days passed, reset everything
//   // ----------------------------------------------------------
//   const diffDays = (nowTime - data.startDate) / (1000 * 60 * 60 * 24);

//   if (diffDays >= 28) {
//     data.monthlyTotal = 0;
//     data.points       = 1000;
//     data.startDate    = nowTime;
//   }

//   // ----------------------------------------------------------
//   // DEDUCT 2 POINTS
//   // ----------------------------------------------------------
//   const deductionPerClick = 2;

//   data.points       = Math.max(0, data.points - deductionPerClick);
//   data.count        += 1;
//   data.monthlyTotal += 1;

//   // Save updated data to localStorage
//   localStorage.setItem(currentUser, JSON.stringify(data));

//   // ----------------------------------------------------------
//   // CALCULATE CUMULATIVE DEDUCTION FOR TODAY
//   // Click 1  → totalDeductedToday = 2
//   // Click 2  → totalDeductedToday = 4
//   // Click 10 → totalDeductedToday = 20
//   // Click 40 → totalDeductedToday = 80
//   // Apps Script will OVERWRITE (not add) with this value
//   // ----------------------------------------------------------
//   const totalDeductedToday = data.count * deductionPerClick;

//   // ----------------------------------------------------------
//   // SEND DATA TO GOOGLE SHEET
//   // mode: "no-cors" fixes the CORS error from localhost
//   // ----------------------------------------------------------
//   fetch(APPS_SCRIPT_URL, {
//     method:  "POST",
//     mode:    "no-cors",   // ← FIXES CORS ERROR
//     headers: {
//       "Content-Type": "text/plain;charset=utf-8"
//     },
//     body: JSON.stringify({
//       name:         currentUser,
//       deducted:     totalDeductedToday,  // cumulative total for today
//       points:       data.points,
//       count:        data.count,
//       monthlyTotal: data.monthlyTotal,
//       date:         today,
//       time:         now.toLocaleTimeString("en-GB")
//     })
//   })
//   .then(() => {
//     console.log("✅ Data sent to sheet successfully!");
//   })
//   .catch(error => {
//     console.error("❌ Error sending to sheet:", error);
//   });

//   // Update points/count display on screen
//   updateDisplay();

//   // Show confirmation alert
//   alert("2 Points Deducted!\nRemaining Points: " + data.points);
// }

// // ============================================================
// // LOGOUT — goes back to login page
// // ============================================================
// function logout() {
//   currentUser = "";

//   document.getElementById("penaltyPage").style.display = "none";
//   document.getElementById("loginPage").style.display   = "flex";

//   // Clear inputs
//   document.getElementById("searchInput").value = "";
//   document.getElementById("searchInput").removeAttribute("data-selected");
//   document.getElementById("codeInput").value   = "";

//   const errorEl = document.getElementById("error");
//   if (errorEl) errorEl.innerText = "";
// }







































// ============================================================
// ENGLISH COMMITMENT TRACKER - SCRIPT.JS
// FINAL COMPLETE VERSION
// ✅ CORS fix (mode: no-cors)
// ✅ Cumulative deduction sent to sheet
// ✅ Daily reset + 28-day reset logic
// ✅ Login + Logout
// ============================================================

// ============================================================
// 🔗 YOUR APPS SCRIPT URL
// ============================================================
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbycqCfgBXiGKxS_hYeRzO79cw6jrRwyeBG-ANlAF-tH4AwV1WgdXeGV8X7au0G-fT5k/exec";

// ============================================================
// 🔐 STUDENTS DATA (Name → Login Code)
// ============================================================
const STUDENTS = {
  "Aarav Sharma": "A",
<<<<<<< HEAD
  "Priya Patel" : "priya002",
=======
  "Priya Patel": "PRIYA002",
>>>>>>> 36bbbf1 (Added new feature)
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
<<<<<<< HEAD

=======
>>>>>>> 36bbbf1 (Added new feature)
  "Babli Sidar": "B01",
  "Bharti Chaturvedi": "B02",
  "Bharti Pradhan": "B03",
  "Bhawna Chouhan": "B04",
  "Bhumika Ratre": "B05",
<<<<<<< HEAD

  "Chanchal Sao": "C01",

=======
  "Chanchal Sao": "C01",
>>>>>>> 36bbbf1 (Added new feature)
  "Deepika Dewangan": "D01",
  "Divya Dewangan": "D02",
  "Divya Sahu": "D03",
  "Doleshwari Sao": "D04",
  "Duleshwari Patel": "D05",
<<<<<<< HEAD

  "Fulkumari Chauhan": "F01",

  "Guruwari Sahu": "G01",

  "Hemkumari Sahu": "H01",
  "Hemlata Dansena": "H02",
  "Hemlata Sahu": "H03",

  "Jyoti Sao": "J01",

=======
  "Fulkumari Chauhan": "F01",
  "Guruwari Sahu": "G01",
  "Hemkumari Sahu": "H01",
  "Hemlata Dansena": "H02",
  "Hemlata Sahu": "H03",
  "Jyoti Sao": "J01",
>>>>>>> 36bbbf1 (Added new feature)
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
<<<<<<< HEAD

  "Lata Patel": "L01",
  "Laxmi Sao": "L02",

=======
  "Lata Patel": "L01",
  "Laxmi Sao": "L02",
>>>>>>> 36bbbf1 (Added new feature)
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
<<<<<<< HEAD

=======
>>>>>>> 36bbbf1 (Added new feature)
  "Nandini Rathia": "N01",
  "Navnita Patail": "N02",
  "Neha Chauhan": "N03",
  "Nikeeta": "N04",
  "Nilkumari Tirki": "N05",
<<<<<<< HEAD

=======
>>>>>>> 36bbbf1 (Added new feature)
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
<<<<<<< HEAD

=======
>>>>>>> 36bbbf1 (Added new feature)
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
<<<<<<< HEAD

=======
>>>>>>> 36bbbf1 (Added new feature)
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
<<<<<<< HEAD

=======
>>>>>>> 36bbbf1 (Added new feature)
  "Tanu Sarthi": "T01",
  "Tanuja Sahu": "T02",
  "Tapshwani Sahu": "T03",
  "Tara Bhagat": "T04",
  "Tikeshwari Sanwara": "T05",
  "Tisha": "T06",
  "Tomeshwari Verma": "T07",
  "Tripti": "T08",
  "Twinkal Chouhan": "T09",
<<<<<<< HEAD

=======
>>>>>>> 36bbbf1 (Added new feature)
  "Uma Nishad": "U01",
  "Ume Salma": "U02",
  "Usha Pradhan": "U03",
  "Usha Kaiwartya": "U04",
<<<<<<< HEAD

=======
>>>>>>> 36bbbf1 (Added new feature)
  "Vanshika Ratre": "V01",
  "Varsha Nirmalkar": "V02",
  "Varsha Singh Rajput": "V03",
  "Veena Choudhary": "V04",
  "Vidya Sahu": "V05",
<<<<<<< HEAD

=======
>>>>>>> 36bbbf1 (Added new feature)
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

<<<<<<< HEAD
// UPDATE UI
function updateInfo(){
  let data = JSON.parse(localStorage.getItem(currentUser));
  // document.getElementById("info").innerText =
  //   `Remaining Points: ${data.points}`;
}
=======
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
>>>>>>> 36bbbf1 (Added new feature)
