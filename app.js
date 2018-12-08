var map
var stateList
var selectedNewState = [];
var allStateListed = [];
var secondPageStateName 

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 23.5937, lng: 78.9629},
        zoom: 5,
        disableDefaultUI: true,
    });
}
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
    document.getElementById("srhState").style.display = "none";
    document.getElementById("myDropdown").classList.remove("show");
    closeBottomNav();
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("srhState").style.display = "block";
}

function openBottomNav() {
    document.getElementById("myNav").style.height = "240px";

}

function closeBottomNav() {
    document.getElementById("myNav").style.height = "0%";
  }

function changeFoc(){
    document.getElementById("srhState").blur();
    document.getElementById("myDropdown").classList.remove("show");
    closeBottomNav();

}

// function loadJSON(path, success, error){
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function()
//     {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//             if (xhr.status === 200) {
//                 if (success)
//                     statelist = JSON.parse(xhr.responseText);                    
//             } else {
//                 if (error)
//                     error(xhr);
//             }
//         }
//     };
//     xhr.open("GET", path, true);
//     xhr.send();
// }

myObj = [
    {
      "State": "India",
      "Population": "1,210,854,977",
      "Increase": "17.64%",
      "Area": "3,287,240",
      "Density": "382",
      "Sex_Ratio": 940,
      "Literacy": 74.04,
      "Led Bulb Distributed": 307806940
    },
    {
      "State": "Andaman and Nicobar Islands",
      "Population": "380,581",
      "Increase": "6.86%",
      "Area": "8,249",
      "Density": "46",
      "Sex_Ratio": 876,
      "Literacy": 86.63,
      "Led Bulb Distributed": 400000
    },
    {
      "State": "Andhra Pradesh",
      "Population": "84580,777",
      "Increase": "10.98%",
      "Area": "275,045",
      "Density": "308",
      "Sex_Ratio": 993,
      "Literacy": 67.02,
      "Led Bulb Distributed": 21979697
    },
    {
      "State": "Arunachal Pradesh",
      "Population": "1,383,727",
      "Increase": "26.03%",
      "Area": "83,743",
      "Density": "17",
      "Sex_Ratio": 938,
      "Literacy": 65.38,
      "Led Bulb Distributed": 407952
    },
    {
      "State": "Assam",
      "Population": "31,205,576",
      "Increase": "17.07%",
      "Area": "78,438",
      "Density": "398",
      "Sex_Ratio": 958,
      "Literacy": 72.19,
      "Led Bulb Distributed": 1962158
    },
    {
      "State": "Bihar",
      "Population": "104,099,452",
      "Increase": "25.42%",
      "Area": "94,163",
      "Density": "1,106",
      "Sex_Ratio": 918,
      "Literacy": 61.8,
      "Led Bulb Distributed": 18956641
    },
    {
      "State": "Chandigarh",
      "Population": "1,055,450",
      "Increase": "17.19%",
      "Area": "114",
      "Density": "9,258",
      "Sex_Ratio": 818,
      "Literacy": 86.05,
      "Led Bulb Distributed": 513978
    },
    {
      "State": "Chhattisgarh",
      "Population": "25,545,198",
      "Increase": "22.61%",
      "Area": "135,192",
      "Density": "189",
      "Sex_Ratio": 991,
      "Literacy": 70.28,
      "Led Bulb Distributed": 10598452
    },
    {
      "State": "Dadra and Nagar Haveli",
      "Population": "343,709",
      "Increase": "55.88%",
      "Area": "491",
      "Density": "700",
      "Sex_Ratio": 774,
      "Literacy": 76.24,
      "Led Bulb Distributed": 163808
    },
    {
      "State": "Daman and Diu",
      "Population": "243,247",
      "Increase": "53.76%",
      "Area": "111",
      "Density": "2,191",
      "Sex_Ratio": 618,
      "Literacy": 87.1,
      "Led Bulb Distributed": 142623
    },
    {
      "State": "Delhi",
      "Population": "16,787,941",
      "Increase": "21.21%",
      "Area": "1,483",
      "Density": "11,320",
      "Sex_Ratio": 868,
      "Literacy": 86.21,
      "Led Bulb Distributed": 12773476
    },
    {
      "State": "Goa",
      "Population": "1,458,545",
      "Increase": "8.23%",
      "Area": "3,702",
      "Density": "394",
      "Sex_Ratio": 973,
      "Literacy": 88.7,
      "Led Bulb Distributed": 851063
    },
    {
      "State": "Gujarat",
      "Population": "60,439,692",
      "Increase": "19.28%",
      "Area": "196,244",
      "Density": "308",
      "Sex_Ratio": 919,
      "Literacy": 78.03,
      "Led Bulb Distributed": 40142538
    },
    {
      "State": "Haryana",
      "Population": "25,351,462",
      "Increase": "19.90%",
      "Area": "44,212",
      "Density": "573",
      "Sex_Ratio": 879,
      "Literacy": 75.55,
      "Led Bulb Distributed": 15498112
    },
    {
      "State": "Himachal Pradesh",
      "Population": "6,864,602",
      "Increase": "12.94%",
      "Area": "55,673",
      "Density": "123",
      "Sex_Ratio": 972,
      "Literacy": 82.8,
      "Led Bulb Distributed": 8084864
    },
    {
      "State": "Jammu and Kashmir",
      "Population": "12,541,302",
      "Increase": "23.64%",
      "Area": "222,236",
      "Density": "56",
      "Sex_Ratio": 889,
      "Literacy": 67.16,
      "Led Bulb Distributed": 7954364
    },
    {
      "State": "Jharkhand",
      "Population": "32,988,134",
      "Increase": "22.42%",
      "Area": "79,716",
      "Density": "414",
      "Sex_Ratio": 948,
      "Literacy": 66.41,
      "Led Bulb Distributed": 13140495
    },
    {
      "State": "Karnataka",
      "Population": "61,095,297",
      "Increase": "15.60%",
      "Area": "191,791",
      "Density": "319",
      "Sex_Ratio": 973,
      "Literacy": 75.36,
      "Led Bulb Distributed": 20873842
    },
    {
      "State": "Kerala",
      "Population": "33,406,061",
      "Increase": "4.91%",
      "Area": "38,852",
      "Density": "860",
      "Sex_Ratio": 1084,
      "Literacy": 94,
      "Led Bulb Distributed": 15150200
    },
    {
      "State": "Lakshadweep",
      "Population": "64,473",
      "Increase": "6.30%",
      "Area": "30",
      "Density": "2,149",
      "Sex_Ratio": 946,
      "Literacy": 91.85,
      "Led Bulb Distributed": 100000
    },
    {
      "State": "Madhya Pradesh",
      "Population": "72,626,809",
      "Increase": "20.35%",
      "Area": "308,252",
      "Density": "236",
      "Sex_Ratio": 931,
      "Literacy": 69.32,
      "Led Bulb Distributed": 17197105
    },
    {
      "State": "Maharashtra",
      "Population": "112,374,333",
      "Increase": "15.99%",
      "Area": "307,713",
      "Density": "365",
      "Sex_Ratio": 929,
      "Literacy": 82.34,
      "Led Bulb Distributed": 21878683
    },
    {
      "State": "Manipur",
      "Population": "2,855,794",
      "Increase": "24.50%",
      "Area": "22,327",
      "Density": "128",
      "Sex_Ratio": 985,
      "Literacy": 76.94,
      "Led Bulb Distributed": 299934
    },
    {
      "State": "Meghalaya",
      "Population": "2,966,889",
      "Increase": "27.95%",
      "Area": "22,429",
      "Density": "132",
      "Sex_Ratio": 989,
      "Literacy": 74.43,
      "Led Bulb Distributed": 427022
    },
    {
      "State": "Mizoram",
      "Population": "1,097,206",
      "Increase": "23.48%",
      "Area": "21,081",
      "Density": "52",
      "Sex_Ratio": 976,
      "Literacy": 91.33,
      "Led Bulb Distributed": 615225
    },
    {
      "State": "Nagaland",
      "Population": "1,978,502",
      "Increase": "-0.58%",
      "Area": "16,579",
      "Density": "119",
      "Sex_Ratio": 931,
      "Literacy": 79.55,
      "Led Bulb Distributed": 1098938
    },
    {
      "State": "Orissa",
      "Population": "41,974,218",
      "Increase": "14.05%",
      "Area": "155,707",
      "Density": "270",
      "Sex_Ratio": 979,
      "Literacy": 72.87,
      "Led Bulb Distributed": 13624119
    },
    {
      "State": "Puducherry",
      "Population": "1,247,953",
      "Increase": "28.08%",
      "Area": "490",
      "Density": "2,547",
      "Sex_Ratio": 1037,
      "Literacy": 85.85,
      "Led Bulb Distributed": 609251
    },
    {
      "State": "Punjab",
      "Population": "27,743,338",
      "Increase": "13.89%",
      "Area": "50,362",
      "Density": "551",
      "Sex_Ratio": 895,
      "Literacy": 75.84,
      "Led Bulb Distributed": 1258341
    },
    {
      "State": "Rajasthan",
      "Population": "68,548,437",
      "Increase": "21.31%",
      "Area": "342,239",
      "Density": "200",
      "Sex_Ratio": 928,
      "Literacy": 66.11,
      "Led Bulb Distributed": 15705852
    },
    {
      "State": "Sikkim",
      "Population": "610,577",
      "Increase": "12.89%",
      "Area": "7,096",
      "Density": "86",
      "Sex_Ratio": 890,
      "Literacy": 81.42,
      "Led Bulb Distributed": 164000
    },
    {
      "State": "Tamil Nadu",
      "Population": "72,147,030",
      "Increase": "15.61%",
      "Area": "130,060",
      "Density": "555",
      "Sex_Ratio": 996,
      "Literacy": 80.09,
      "Led Bulb Distributed": 3176735
    },
    {
      "State": "Telangana",
      "Population": "35,193,978",
      "Increase": "17.09%",
      "Area": "112,077",
      "Density": "307",
      "Sex_Ratio": 932,
      "Literacy": 66.5,
      "Led Bulb Distributed": 1996915
    },
    {
      "State": "Tripura",
      "Population": "3,673,917",
      "Increase": "14.84%",
      "Area": "10,486",
      "Density": "350",
      "Sex_Ratio": 960,
      "Literacy": 87.22,
      "Led Bulb Distributed": 994856
    },
    {
      "State": "Uttar Pradesh",
      "Population": "199,812,341",
      "Increase": "20.23%",
      "Area": "240,928",
      "Density": "829",
      "Sex_Ratio": 912,
      "Literacy": 67.68,
      "Led Bulb Distributed": 25003856
    },
    {
      "State": "Uttarakhand",
      "Population": "10,086,292",
      "Increase": "18.81%",
      "Area": "53,483",
      "Density": "189",
      "Sex_Ratio": 963,
      "Literacy": 78.82,
      "Led Bulb Distributed": 5034423
    },
    {
      "State": "West Bengal",
      "Population": "91,276,115",
      "Increase": "13.84%",
      "Area": "88,752",
      "Density": "1,028",
      "Sex_Ratio": 950,
      "Literacy": 76.26,
      "Led Bulb Distributed": 9027422
    }
   ]


function checkStateName(){    
    closeBottomNav();
    selectedNewState = [];
    var searchText = document.getElementById("srhState").value.toUpperCase()
    var length = searchText.length
    if(length !=0){
        document.getElementById("myDropdown").innerHTML = '';
    for(var i in myObj)
    {
        var currentState = myObj[i].State.toUpperCase()
        if(currentState.substring(0,length).match(searchText)){
            selectedNewState.push(myObj[i].State);
        }
    }

    for (var j in selectedNewState){
        var node = document.createElement("a");
        node.className="dropdown-content-clickable"
        var textnode = document.createTextNode(selectedNewState[j]);
        node.appendChild(textnode);
        document.getElementById("myDropdown").appendChild(node);
        if(j != selectedNewState.length-1){
            addHrTag();
        }
        showDropDown();
    }

    allStateListed = document.querySelectorAll('a.dropdown-content-clickable');

    for (var i = 0; i < allStateListed.length; i++) {
        if (window.addEventListener) {
            allStateListed[i].addEventListener('click', getSelectedStateName, false);

        } else if (window.attachEvent) { 
            allStateListed[i].attachEvent('click', getSelectedStateName); 
        }
    }
    }
    else{
        document.getElementById("myDropdown").innerHTML = '';
    }
    

   
}

function getSelectedStateName(){
    openBottomNav()
    document.getElementById("myDropdown").innerHTML = '';
    document.getElementById("srhState").value = this.text;

    for(var i in myObj)
    {
        if(myObj[i].State == this.text){
          secondPageStateName = myObj[i].State
          document.getElementById("less-pop").innerHTML=myObj[i].Population;
          document.getElementById("less-sex").innerText=myObj[i].Sex_Ratio+"/1000";
          document.getElementById("less-lit").textContent=myObj[i].Literacy+" %";
        }
    }  
}

function addHrTag(){
    var node = document.createElement("hr");
    document.getElementById("myDropdown").appendChild(node);
}

function showDropDown(){
    document.getElementById("myDropdown").classList.add("show");
}

document.getElementById("srhState").addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        if(allStateListed.length<2){   
            var testObj1 = allStateListed[0].text.toUpperCase()
            var testObj2 = document.getElementById("srhState").value.toUpperCase()
            console.log(testObj1);
            console.log(testObj2);
            if(testObj1.toUpperCase() == testObj2.toUpperCase()){
                console.log(allStateListed[0]);
                openBottomNav()
                document.getElementById("srhState").value = allStateListed[0].text
                document.getElementById("myDropdown").classList.remove("show");
                for(var i in myObj){
                    if(myObj[i].State == this.text){
                      secondPageStateName = myObj[i].State
                        document.getElementById("less-pop").innerHTML=myObj[i].Population;
                        document.getElementById("less-sex").innerText=myObj[i].Sex_Ratio+"/1000";
                        document.getElementById("less-lit").textContent=myObj[i].Literacy+" %";
                      }
                    }
                  }
                }
              }
});

function showNewPage(){
  document.getElementById("page1").style.display = 'none';
  document.getElementById("page2").style.display = 'block';

  for(var i in myObj){
    if(myObj[i].State == secondPageStateName){
        console.log(myObj[i].Population);
        document.getElementById("secondPageStateName").innerHTML= myObj[i].State
        document.getElementById("more-pop").innerHTML=myObj[i].Population;
        document.getElementById("more-inc").innerHTML=myObj[i].Increase;
        document.getElementById("more-area").innerHTML=myObj[i].Area+" km²";
        document.getElementById("more-den").innerHTML=myObj[i].Density;
        document.getElementById("more-sex").innerText=myObj[i].Sex_Ratio+" / 1000";
        document.getElementById("more-lit").textContent=myObj[i].Literacy+" %";
      }
    }
}

// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("state-image");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//     navbar.style.height="15%";
//   } else {
//     navbar.classList.remove("sticky");
//     navbar.style.height="35%";
//   }
// }
    

