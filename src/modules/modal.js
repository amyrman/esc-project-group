export default function modalFunc(roomID,h1title, minParticipants, maxParticipants) {

  //===TODO==================================
    // - STYLE

  // OPTIONAL:
  // Stop "set"-processes after alert -- i.e. don't let user go to modal page 3

  // IN PROGRESS:
  //

  // DONE:
  // - DO THIRD PAGE (from Anders modals?)
  // - CLEAR MODAL AFTER CLOSE
  // - CONNECTING MODAL FROM DIFFERENT REPO TO MAIN GITHUB
  // - ADD CLASS NAME TO BOOKING BUTTON -- DONE? BUTTON WORKING? SEE "const btn" above
  // - INTEGRATE INTO MAIN BRANCH -- THAT IS, ADD THE .JS SEPARATELY -- SEPARATE FUNCTIONS. CLASSES AND MAKE THE CODE READABLE IS SECONDARY
  // - THE BOOKING BUTTON IS ROOM SPECIFIC AND THUS SENDS ROOM TITLE AS WELL AS PARTICIPANTS (arguments with class name, like calling function -> send set value for arguments (min maxtitle room))
  // - copy style.css -> main.css
  // - CHECK GITLOG -- HISTORY IS CLEARED ON THIS BRANCH?
  // - DATE - MIN MAX
  // - Merge with main (pull request)
  // - Fix removeChild that resets on Back to challenges
  // - Get everything working on GitHub Pages
  //========================================================

  //  create the Modal
  const modal = document.createElement("dialog");
  modal.className = "modal";
  modal.id = "myModal";
  document.body.appendChild(modal);
  modal.style.display = "block";

  // create Modal content for step 1
  const div1 = document.createElement("div");
  div1.className = "modal-content";
  modal.append(div1);

  // create h1 in Modal step 1
  const h1_1 = document.createElement("h1");
  h1_1.class = "modal1h1";
  h1_1.id = "modal1h1";
  h1_1.innerHTML = 'Book room "' + h1title + '" (step 1)';
  div1.append(h1_1);

  // create p in Modal step 1
  const p = document.createElement("p");
  p.textContent = "What date would you like to come?";
  p.classList.add('modal-content-text')
  div1.append(p);

  // create the date input in Modal step 1
  const inp1 = document.createElement("input");
  const lab1 = document.createElement("label");
  const br = document.createElement("br");
  inp1.name = "inpDate";
  inp1.id = "date";
  inp1.type = "date";
  inp1.name = "date";
  lab1.textContent = "Date";
  div1.append(lab1);
  div1.append(inp1);

  // Set input options to min = today, max = 1 year from now
  const d = new Date();
  d.setYear(d.getFullYear() + 1);
  date.max = d.toISOString().split("T")[0]; //this simply converts it to the correct format

  const c = new Date();
  date.min = c.toISOString().split("T")[0];

  // create search times button in Modal step 1
  const btnSearch = document.createElement("button");
  btnSearch.innerText = "Search available times";
  btnSearch.className = "btnSearch btnModal";
  div1.append(btnSearch);

  // create new div in Modal for the step 2 booking process
  const div2 = document.createElement("div");
  div2.className = "modal-content";
  div2.id = "divstep2";
  modal.append(div2);

  // create h1 in Modal step 2
  const h1_2 = document.createElement("h1");
  h1_2.class = "modal2h1";
  h1_2.id = "modal2h1";
  div2.append(h1_2);

  // create input for the name in Modal step 2
  const inp2 = document.createElement("input");
  const lab2 = document.createElement("label");
  inp2.name = "inpName";
  inp2.type = "text";
  lab2.textContent = "Name";
  div2.append(lab2);
  div2.append(inp2);

  // create input for telephone number
  const inp4 = document.createElement("input");
  const lab6 = document.createElement("label");
  inp4.name = "inpPhone";
  inp4.type = "text";
  lab6.textContent = "Phone Number";
  div2.append(lab6);
  div2.append(inp4);

  // create input for the email in Modal step 2
  const inp3 = document.createElement("input");
  const lab3 = document.createElement("label");
  inp3.name = "inpEmail";
  inp3.type = "email";
  lab3.textContent = "E-mail";
  div2.append(lab3);
  div2.append(inp3);

  // create select element for the available times in Modal step 2
  const selectTime = document.createElement("select");
  selectTime.name = "timeList";
  selectTime.id = "availableTimeList";
  const lab4 = document.createElement("label");
  lab4.textContent = "What time?";
  div2.append(lab4);
  div2.append(selectTime);

  // create select element for the participants in Modal step 2
  const selectPart = document.createElement("select");
  selectPart.name = "participantsList";
  selectPart.id = "availableParticipantsList";
  const lab5 = document.createElement("label");
  lab5.textContent = "How many participants?";
  div2.append(lab5);
  div2.append(selectPart);

  // create submit booking button in Modal step 2
  const btnSubmit = document.createElement("button");
  btnSubmit.innerText = "Submit booking";
  btnSubmit.className = "btnSubmit btnModal";
  div2.append(btnSubmit);

  // create new div in Modal for the step 3 booking process
  const div3 = document.createElement("div");
  div3.className = "modal-content";
  div3.id = "divstep3";
  modal.append(div3);

  // create h1 in Modal step 3
  const h1_3 = document.createElement("h1");
  h1_3.class = "modal3h1";
  h1_3.textContent = "Thank you!";
  div3.append(h1_3);

  const modal3link = document.createElement("a");
  div3.append(modal3link);
  modal3link.classList.add('challenges-link');
  modal3link.setAttribute("href", "#");
  modal3link.textContent = "Back to challenges";

  // Add same class to modal content items to style them
  inp1.className = 'modal-content-text';
  inp2.className = 'modal-content-text';
  inp3.className = 'modal-content-text';
  lab1.className = 'modal-content-text';
  lab2.className = 'modal-content-text';
  lab3.className = 'modal-content-text';
  lab4.className = 'modal-content-text';
  lab5.className = 'modal-content-text';


  // clicking on the leaving link on Modal step 3
  modal3link.onclick = function () {
    document.body.removeChild(modal);
  };

  // When the user clicks the button, open the modal

  // const m1h1 = document.getElementById("modal1h1");

  // m1h1.textContent = 'Book room "' + h1title + '" (step 1)';

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      //modal.style.display = "none";
      document.body.removeChild(modal);
    }
  };

  function setBookingDate() {
    // if (inp1.value == "") {
    //   alert("Error, no selected date.");
    //   // stop the process here until the date is selected
    // }
    return inp1.value;
  }

  // Clicking on the search botton function
  btnSearch.onclick = function () {
    const reqDate = setBookingDate();
    let date = new Date();
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    const lastDate = `${year + 1}-${month}-${day}`
    if (inp1.value == "") {
      alert("Error, no selected date.");
      // stop the process here until the date is selected

    } else if (Date.parse(inp1.value) > Date.parse(lastDate)) {
      alert('Please select a new date, date over a year in the future')
    } else {

        const availableTimes = searchAvailableTimes(roomID,reqDate);
        // if (availableTimes.booking.date != reqDate) {
        // alert('No matching available date, please choose again.\nThe available date is ' + availableTimes.booking.date)
        // }

        async function searchAvailableTimes(roomID,reqDate) {
          const response = await fetch(
            "https://lernia-sjj-assignments.vercel.app/api/booking/available-times?challenge="+roomID+"&date=" +
              reqDate,
            {
              method: "GET",
              mode: "cors",
              headers: { "Content-Type": "application/json" },
            }
          ).then(function (response) {
            if (response.ok) {
              response.json().then(function (data) {
                const gatheredTimes = data.slots;
                // console.log(data);// remove after test

                // call a function to switch the booking process to the next step
                bookingNextStep(gatheredTimes);
              });
            }
          });
        };
    }

  };

  function bookingNextStep(gatheredTimes) {
    // forming the title header for step 2
    const m2h1 = document.getElementById("modal2h1");
    m2h1.textContent = 'Book room "' + h1title + '" (step 2)';

    // adding available time options to the time list
    let option;
    for (let i = 0; i < gatheredTimes.length; i++) {
      option = document.createElement("option");
      option.text = gatheredTimes[i];
      option.value = gatheredTimes[i];
      selectTime.add(option);
    }

    // adding available participants to the participants list
    let option2;
    for (let i = minParticipants; i <= maxParticipants; i++) {
      option2 = document.createElement("option");
      option2.text = i + " participants";
      option2.value = i;
      selectPart.add(option2);
    }

    // changing from step 1 to step 2
    div1.style.display = "none";
    div2.style.display = "flex";
  }

  function setParticipantName() {
    if (inp2.value == "") {
      alert("Error, no entered participant name.");
    }
    return inp2.value;
  }

  // add function to check phone number
  function setPhoneNumber() {
    if (inp4.value == "") {
      alert("Error, no entered phone number.");
    }
  }

  function setEmail() {
    var pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
    if (inp3.value == "") {
      alert("Error, no entered e-mail.");
    } else if (!inp3.value.match(pattern)) {
      alert("Error, the entered email is invalid.");
    } else {
      return inp3.value;
    }
  }

  function setBookingTime() {
    if (selectTime.value == "") {
      alert("Error, no selected time.");
     }
    return selectTime.value;
  }

  function setParticipantsNumber() {
    if (selectPart.value == "") {
      alert("Error, no selected participants number.");
    }
    return selectPart.value;
  }

  // Clicking on the submit botton function
  btnSubmit.onclick = function (event) {

    // set booking date
    const reqDate = setBookingDate();

    // set participant name
    const reqName = setParticipantName();

    // set phone number
    const reqPhone = inp4.value;
        
    // set participant email
    const reqEmail = setEmail();

    // set time period
    const reqTime = setBookingTime();

    // set number of participants
    const reqPart = setParticipantsNumber();
    if (reqDate && reqName && reqEmail && reqTime && reqPart) {

      postBookingData(roomID,reqName, reqPhone, reqEmail, reqDate, reqTime, reqPart);

      // build the post object to the server
      async function postBookingData(
        roomID,
        reqName,
        reqPhone,
        reqEmail,
        reqDate,
        reqTime,
        reqPart
      ) {
        const res = await fetch(
          "https://lernia-sjj-assignments.vercel.app/api/booking/reservations",
          {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              challenge:parseInt(roomID),
              name: reqName,
              phone: reqPhone,
              email: reqEmail,
              date: reqDate,
              time: reqTime,
              participants: parseInt(reqPart),
            }),
          }
        );
        const bookingstatus = await res.json();
        console.log(bookingstatus);
      }

      div2.style.display = "none";
      div3.style.display = "flex";
    }
  };
}