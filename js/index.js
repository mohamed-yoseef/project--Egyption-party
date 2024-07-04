///<reference types="../@types/jquery" />;

$("#xmark").on("click", function () {
  $(".sidenav").animate({ width: "0px" }, 1000, function () {
    $("#open").animate({ marginInline: "0px" }, 1000);
  });
});
$("#open").on("click", function () {
  $("#open").animate({ margin: "255px " },500);
  $(".sidenav").animate({ width: "250px"} ,500);
});

$(".one").on("click", function () {
  $("#one").slideToggle(500);
});
$(".tow").on("click", function () {
  $("#tow").slideToggle(500);
  $("#one").slideUp(500);
});
$(".three").on("click", function () {
  $("#three").slideToggle(500);
  $("#tow").slideUp(500);
});
$(".four").on("click", function () {
  $("#four").slideToggle(500);
  $("#three").slideUp(500);
});

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("meRow").innerHTML = `  <div class="col-md-3">
                        <div class="item p-sm-0 p-md-5">
                            <span class="day">${days + " d "}</span>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="item p-sm-0 p-md-5">
                            <span class="day">${hours + " h "}</span>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="item p-sm-0 p-md-5">
                            <span class="day">${minutes + " m "}</span>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="item p-sm-0 p-md-5">
                            <span class="day">${seconds + "s "}</span>
                        </div>
                    </div>`;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("meRow").innerHTML = "EXPIRED";
  }
}, 1000);

var max = 100;
var textarea = document.querySelector("textarea");
var info = document.querySelector("#info");

//Init the count for the first time
info.textContent = max - textarea.value.length;

textarea.addEventListener("input", function () {
  info.textContent = max - this.value.length;
  console.log(info.textContent);
});
