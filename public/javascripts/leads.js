

function deleteLead(leadId) {
  $.ajax({
      url: '/lead/' + leadId + '/delete_json', //By Efe: this is where the router is invoked. It passes the id to the controller. Ajax speaks to the server (or the controller)
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      data: JSON.stringify({leadId}),
      type: 'POST',
      success: ((res) => {
          // Replace follow button with unfollow.
          console.log("Result: ", res)
          $("#"+leadId).remove();
      }),
      error: ((error) => {
          console.log("Error:", error);
      })
  });
}