async function displayReinitRepartition(entete, msg) {
  $("#enteteReinitRepartition").text(entete);
  $("#msgReinitRepartition").text(msg);

  $("#divReinitRepartition").show();
  $("#divReinitRepartition").click(function() {
    $(this).data("clicked", true);
  });

  await reinitRepartition();
}

function reinitRepartition() {
  return new Promise(resolve => {
    if ($("#divReinitRepartition").data("clicked") == true) {
      $("#divReinitRepartition").hide();
    console.log('true');
    resolve('true');
    }
  }).then((err) => console.log('true'));
  //eval(reinitRepartitionToDo);
}

function annulerReinitRepartition() {
  $("#divReinitRepartition").hide();
}
console.log(displayReinitRepartition("", ""));
