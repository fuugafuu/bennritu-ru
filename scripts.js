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
  const encrypted = btoa(text); // Base64暗号化
  document.getElementById("encryptedText").textContent = "暗号化されたテキスト: " + encrypted;
}

function decryptText() {
  const encryptedText = document.getElementById("textToDecrypt").value;
  const decrypted = atob(encryptedText); // Base64復号化
  document.getElementById("decryptedText").textContent = "復元されたテキスト: " + decrypted;
}

// 色の選択ツール
document.getElementById("colorPicker").addEventListener("input", function(event) {
  document.getElementById("selectedColor").textContent = event.target.value;
});

// 文字数カウント
function countCharacters() {
  const text = document.getElementById("textForCounting").value;
  document.getElementById("charCount").textContent = text.length;
}

// 画像エディタ (サンプル)
document.getElementById("imageUpload").addEventListener("change", function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = new Image();
      img.src = e.target.result;
      img.onload = function() {
        const canvas = document.getElementById("imageCanvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
      };
    };
    reader.readAsDataURL(file);
  }
});

// 時間計算
function calculateTimeDifference() {
  const startTime = document.getElementById("startTime").value;
  const endTime = document.getElementById("endTime").value;
  
  const start = new Date(`1970-01-01T${startTime}:00`);
  const end = new Date(`1970-01-01T${endTime}:00`);
  
  const diff = new Date(end - start);
  const hours = diff.getUTCHours();
  const minutes = diff.getUTCMinutes();
  document.getElementById("timeDifference").textContent = `${hours}時間 ${minutes}分`;
}

// 文字列置換
function replaceString() {
  const originalText = document.getElementById("stringToReplace").value;
  const replaceWith = document.getElementById("replaceString").value;
  const replacedText = originalText.replace(/example/g, replaceWith);
  document.getElementById("replacedString").textContent = replacedText;
}

// ユーザー名生成ツール
function generateUsername() {
  const username = "user" + Math.floor(Math.random() * 1000);
  document.getElementById("generatedUsername").textContent = username;
}

// ランダムな数字生成ツール
function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 1000);
  document.getElementById("randomNumber").textContent = randomNumber;
}

// QRコード生成
function generateQRCode() {
  const text = document.getElementById("qrText").value;
  const qrCode = new QRCode(document.getElementById("qrCode"), {
    text: text,
    width: 128,
    height: 128
  });
}

// ヘックスカラーからRGBへの変換
function hexToRgb() {
  const hex = document.getElementById("hexColor").value;
  const rgb = /^#([A-Fa-f0-9]{6})$/.exec(hex);
  if (rgb) {
    const r = parseInt(rgb[1].substring(0, 2), 16);
    const g = parseInt(rgb[1].substring(2, 4), 16);
    const b = parseInt(rgb[1].substring(4, 6), 16);
    document.getElementById("rgbColor").textContent = `RGB: (${r}, ${g}, ${b})`;
  } else {
    document.getElementById("rgbColor").textContent = "無効なカラーコード";
  }
}

// テキストサイズ変更
function changeTextSize() {
  const size = document.getElementById("textSize").value;
  document.getElementById("textToResize").style.fontSize = size + "px";
}

// 時間帯変換ツール
function convertTimezone() {
  const timeInZone = document.getElementById("timeInCurrentZone").value;
  const offset = parseInt(document.getElementById("timezoneOffset").value);
  const convertedTime = new Date(new Date(`1970-01-01T${timeInZone}:00`).getTime() + offset * 3600000);
  document.getElementById("convertedTime").textContent = `変換後の時間: ${convertedTime.getUTCHours()}:${convertedTime.getUTCMinutes()}:${convertedTime.getUTCSeconds()}`;
}
