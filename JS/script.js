// script.js
document.getElementById("generateButton").addEventListener("click", function() {
    const qrText = document.getElementById("qrText").value;
  
    if (!qrText) {
      alert("Please enter text to generate QR code.");
      return;
    }
  
    // Generate the QR code using the qrcode-generator library
    const qrcode = new QRCode(document.getElementById("qrcode"), qrText);
  
    // Enable the download button and save the QR code image as data URL
    const qrCodeImage = document.getElementById("qrcode").getElementsByTagName("img")[0];
    document.getElementById("downloadButton").disabled = false;
    document.getElementById("downloadButton").addEventListener("click", function() {
      const anchor = document.createElement("a");
      anchor.href = qrCodeImage.src;
      anchor.download = "qrcode.png"; // You can change the file name and extension if needed
  
      // Append the anchor element to the DOM and trigger the click event
      document.body.appendChild(anchor);
      anchor.click();
  
      // Remove the anchor from the DOM after the download has started
      document.body.removeChild(anchor);
    });
  });
  