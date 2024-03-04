let circularProgress = document.querySelector(".circular_progress_1");
  progressValue = document.querySelector(".progress_Value");

let progressStartValue = 0,
    progressEndValue = 70,
    speed = 100;

let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#003796 ${progressStartValue * 3.6}deg, #e2e7ec 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress)
    }
}, speed);



// function updateProgress(circularProgress, progress) {
//   let progressValue = circularProgress.querySelector(".progress_Value");
//   let progressCircleFill = circularProgress.querySelector(".progress-circle-fill");

//   let progressStartValue = 0,
//       progressEndValue = progress,
//       speed = 100;

//   let progressInterval = setInterval(() => {
//       progressStartValue++;

//       progressValue.textContent = `${progressStartValue}%`;
//       progressCircleFill.style.transform = `rotate(${(progressStartValue / 100) * 360}deg)`;

//       if(progressStartValue == progressEndValue){
//           clearInterval(progressInterval);
//       }
//   }, speed);
// }

// let circularProgress1 = document.querySelector(".circular_progress_1");
// let circularProgress2 = document.querySelector(".circular_progress_2");
// let circularProgress3 = document.querySelector(".circular_progress_3");
// let circularProgress4 = document.querySelector(".circular_progress_4");

// updateProgress(circularProgress1, 50); // Update progress of circular_progress_1 to 50%
// updateProgress(circularProgress2, 75); // Update progress of circular_progress_2 to 75%
// updateProgress(circularProgress3, 25); // Update progress of circular_progress_3 to 25%
// updateProgress(circularProgress4, 100); // Update progress of circular_progress_4 to 100%


