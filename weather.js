console.log("Hello there!");

async function handle(event) {
  event.preventDefault();

  var phone = document.getElementById("phone-input").value;
  var emotion = document.getElementById("emotion-input").value;

  console.log(emotion);

  const resp = await fetch(
    "https://testing4ta.azurewebsites.net/api/HttpTrigger2?emotion=" +
      emotion,
    {
      method: "POST",
    }
  );

  var data = resp;
  console.log(data);

  var weatherRegular = `

      <p>
      <center>
      <h3>Gif link:</h3>
      </center>
      </p>
      <p>Gif Link:${data}</p>
      <img src = "${data}">
      `;

  $("#weather-result").html(weatherRegular);
}
