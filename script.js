// 🔗 PUT YOUR DEPLOYED SCRIPT URL
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwf6MXypWT7Z4K6vEd3ebtlya9PdxoYMOGTR_gn2-JhPK1AvrngQ06ByO1eT5xaXt8X/exec";

const STUDENTS = {
  "Aarav Sharma": "A",
  "Priya Patel" : "priya002"
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
