// 電卓の関数
function appendToCalculator(value) {
  const display = document.getElementById("calculatorDisplay");
  display.value += value;
}

function clearCalculator() {
  const display = document.getElementById("calculatorDisplay");
  display.value = "";
}

function calculateResult() {
  const display = document.getElementById("calculatorDisplay");
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "エラー";
  }
}

// タイマーの関数
let timerInterval;
function startTimer() {
  let seconds = document.getElementById("timerInput").value;
  const display = document.getElementById("timerDisplay");

  timerInterval = setInterval(function () {
    if (seconds > 0) {
      seconds--;
      const min = Math.floor(seconds / 60);
      const sec = seconds % 60;
      display.textContent = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
    } else {
      clearInterval(timerInterval);
    }
  }, 1000);
}

// ストップウォッチの関数
let stopwatchTimer;
let stopwatchHours = 0, stopwatchMinutes = 0, stopwatchSeconds = 0;
function startStopwatch() {
  stopwatchTimer = setInterval(function () {
    stopwatchSeconds++;
    if (stopwatchSeconds === 60) {
      stopwatchSeconds = 0;
      stopwatchMinutes++;
    }
    if (stopwatchMinutes === 60) {
      stopwatchMinutes = 0;
      stopwatchHours++;
    }
    document.getElementById("stopwatchDisplay").textContent =
      `${stopwatchHours < 10 ? '0' : ''}${stopwatchHours}:${stopwatchMinutes < 10 ? '0' : ''}${stopwatchMinutes}:${stopwatchSeconds < 10 ? '0' : ''}${stopwatchSeconds}`;
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchTimer);
}

function resetStopwatch() {
  clearInterval(stopwatchTimer);
  stopwatchHours = stopwatchMinutes = stopwatchSeconds = 0;
  document.getElementById("stopwatchDisplay").textContent = "00:00:00";
}

// 世界時計の関数
function updateWorldClock() {
  const date = new Date();
  let hours = date.getUTCHours();
  let minutes = date.getUTCMinutes();
  let seconds = date.getUTCSeconds();
  
  // 現在のタイムゾーンに基づく表示
  const country = "UTC";
  document.getElementById("worldClockCountry").textContent = `国名: ${country}`;
  document.getElementById("worldClockDisplay").textContent =
    `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
setInterval(updateWorldClock, 1000);

// 管理者ツールの関数
function loginAdmin() {
  const password = document.getElementById("adminPassword").value;
  if (password === "201307") {
    document.getElementById("adminTools").style.display = "block";
  } else {
    alert("パスワードが間違っています");
  }
}

function encryptText() {
  const text = document.getElementById("textToEncrypt").value;
  const encrypted = btoa(text);
  document.getElementById("encryptedText").textContent = encrypted;
}

function decryptText() {
  const encrypted = document.getElementById("textToDecrypt").value;
  const decrypted = atob(encrypted);
  document.getElementById("decryptedText").textContent = decrypted;
}

function generateRandomName() {
  const names = ["佐藤", "鈴木", "高橋", "田中", "伊藤"];
  const randomName = names[Math.floor(Math.random() * names.length)];
  document.getElementById("randomName").textContent = randomName;
}

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 10000);
  document.getElementById("randomNumber").textContent = randomNumber;
}

// 色選択ツール
document.getElementById("colorPicker").addEventListener("input", function () {
  const color = this.value;
  document.getElementById("selectedColor").textContent = color;
});

// 通貨換算
function convertCurrency() {
  const amount = document.getElementById("currencyInput").value;
  const rate = document.getElementById("currencySelect").value;
  const convertedAmount = amount * rate;
  document.getElementById("convertedCurrency").textContent = convertedAmount.toFixed(2);
}

// 画像エディタ
document.getElementById("imageUpload").addEventListener("change", function (e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  
  reader.onload = function (event) {
    const img = new Image();
    img.src = event.target.result;
    img.onload = function () {
      const canvas = document.getElementById("imageCanvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
  };
  reader.readAsDataURL(file);
});

// QRコード生成
function generateQRCode() {
  const text = document.getElementById("qrText").value;
  const qrCode = new QRCode(document.getElementById("qrCode"), {
    text: text,
    width: 128,
    height: 128
  });
}
