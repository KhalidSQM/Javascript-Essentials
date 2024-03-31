let count = 0;

function increaseCount() {
  count++;
  displayCount();
  checkCountValue();
}

function displayCount() {
  document.getElementById("countDisplay").innerHTML = count;
}

function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! congratulations");
  } else if (count === 20) {
    alert("Your Instagram gained 20 followers! keep it up");
  }
}

function resetCount() {
    document.getElementById("countDisplay").innerHTML = 0;
    alert("Followers count has been reset")
};