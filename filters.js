//For Fee Type

function filterFeeType() {
  var val = $("#filterFeeType").val();
  console.log(val);
  if (val === "") return;
  if (val === "all") clearFilterTerm1();
  else
    $(".term").each(function () {
      $(this)
        .parent()
        .toggle($(this).text() === val);
    });
}
function clearFilterTerm1() {
  $(".filterFeeType").val("");
  $(".rowsElement").show();
}

//For Vaccine Type

function filterVaccineType() {
  var val = $("#filterVaccineType").val();
  console.log(val);
  if (val === "") return;
  if (val === "all") clearFilterTerm2();
  else
    $(".term2").each(function () {
      $(this)
        .parent()
        .toggle($(this).text() === val);
    });
}
function clearFilterTerm2() {
  $(".filterVaccineType").val("");
  $(".rowsElement").show();
}
