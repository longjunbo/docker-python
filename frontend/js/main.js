function get_data() {
  var rand = document.getElementById('value').value;

  // Check that value is integer
  if (!Number.isInteger(parseFloat(rand))) {
    console.log("Not Int!")
    document.getElementById('alert').style.display = "block";
    return;
  } else {
    document.getElementById('alert').style.display = "none";
  }

  // Fetch from api
  fetch('/api/' + rand).then((response) => {
    return response.json()
  }).then((json) => {
    document.getElementById('data').innerHTML = "Random Value: " + json.value;
  });
}
