//To fetch districts

fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/17`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });
function appendData(data) {
  var mainContainer = document.getElementById("district");
  for (var i = 0; i < data.districts.length; i++) {
    var optionContainer = document.createElement("option");
    optionContainer.value = data.districts[i].district_id;
    optionContainer.innerHTML = data.districts[i].district_name;
    mainContainer.appendChild(optionContainer);
  }
}
