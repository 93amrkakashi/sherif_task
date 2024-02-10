let bodyElement = document.querySelector("body")
let download_btn = document.querySelector(".btn")
let downloadPDF = function() {
  let opt = {
      margin: 0.3,
      filename: "Test",
      image: {
          type: 'jpeg',
          quality: 0.98
      },
      html2canvas: {
          scale: 2
      },
      jsPDF: {
          unit: 'in',
          format: 'A3',
          orientation: 'portrait'
      }
  };
  html2pdf().from(bodyElement).set(opt).save().then(() => {});
}
download_btn.addEventListener("click",downloadPDF())
window.onload = downloadPDF()
if (window.flutter_inappwebview) {
  // Send a message to the Flutter side
  window.flutter_inappwebview.callHandler('printPage');
}
if (window.flutter_inappwebview) {
  window.flutter_inappwebview.callHandler('printPage', 'your arguments here').then(function(result) {
      // You can optionally handle a response back from Flutter here
  });
}