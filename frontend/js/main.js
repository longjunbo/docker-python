function get_data() {
  var rand = document.getElementById('value').value;

  fetch('/api/' + rand).then((response) => {
    return response.json()
  }).then((json) => {
    document.getElementById('data').innerHTML = "Random Value: " + json.value;
  });
}
