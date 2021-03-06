const firebaseConfig = {
  apiKey: "AIzaSyB3l5FyimzjqiOmVAPw19LAx5_KfSYBSn0",
  authDomain: "stack-image-view-icon.firebaseapp.com",
  databaseURL: "https://stack-image-view-icon-default-rtdb.firebaseio.com",
  projectId: "stack-image-view-icon",
  storageBucket: "stack-image-view-icon.appspot.com",
  messagingSenderId: "778495915058",
  appId: "1:778495915058:web:94648703f91be867a9b82b",
  measurementId: "G-7WTW9YGFZR"
     };
     firebase.initializeApp(firebaseConfig);
     
     const hitCounter = document.getElementById("hit-counter");
     hitCounter.style.display = "none";
     
     const db = firebase.database().ref("View Icon-Instagram");
     db.on("value", (snapshot) => {
       hitCounter.textContent = snapshot.val();  
     });
     
     db.transaction(
       (totalHits) => totalHits + 1,
       (error) => {
         if (error) {
           console.log(error);
         } else {
           hitCounter.style.display = "inline-block";
         }
       }
     );
     
     const userCookieName = "returningVisitor";
     checkUserCookie(userCookieName);
     
     function checkUserCookie(userCookieName) {
       const regEx = new RegExp(userCookieName, "g");
       const cookieExists = document.cookie.match(regEx);
       if (cookieExists != null) {
         hitCounter.style.display = "inline-block";
       } else {
         createUserCookie(userCookieName);
         db.transaction(
           (totalHits) => totalHits + 1,
           (error) => {
             if (error) {
               console.log(error);
             } else {
               hitCounter.style.display = "inline-block";
             }
           }
         );
       }
     }
     
     function createUserCookie(userCookieName) {
       const userCookieValue = "Yes";
       const userCookieDays = 7;
       let expiryDate = new Date();
       expiryDate.setDate(expiryDate.getDate() + userCookieDays);
       document.cookie =
         userCookieName +
         "=" +
         userCookieValue +
         "; expires=" +
         expiryDate.toGMTString() +
         "path=/";
     }

var swiper = new Swiper( '.swiper-container.two', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		effect: 'coverflow',
		loop: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflow: {
			rotate: 0,
			stretch: 100,
			depth: 150,
			modifier: 1.5,
			slideShadows : false,
		}
} );

var timeleft = 20;
const downloadButton = document.querySelector(".down-btn");
const countdown = document.querySelector(".countdown")
const waitText = document.querySelector(".waiting-text")
const downloadText = document.querySelector(".download-text")
const downloadLink = document.querySelector(".download-link")

downloadButton.addEventListener("click", () => {
    downloadButton.style.display = "none";
    countdown.innerHTML = "Download will begin automatically in <span>" + timeleft + " </span> seconds."; // For Fast Start

    var downloadtimer = setInterval(function timecount() {
        timeleft -= 1;
        countdown.innerHTML = "Download will begin automatically in <span>" + timeleft + " </span> seconds.";
        if (timeleft <= 0) {
            clearInterval(downloadtimer);
            waitText.style.display = "block";
            let download_href = "Design Yoga App - Stack Image.rar";
            window.location.href = download_href;
            downloadLink.href = download_href;

            setTimeout(() => {
                waitText.style.display = "none";
                downloadText.style.display = "block";
            }, 4000);
        }
    }, 1000);
});

function clicked() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/hit/Icon-Instagram/awesomeclick");
    xhr.responseType = "json";
    xhr.onload = function() {
        alert(`This button has been clicked ${this.response.value} times!`);
    }
    xhr.send();
}