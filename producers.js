const { kafka } = require("./client");

async function init() {
  const prodcuer = kafka.producer();

  console.log("Connecting Producer...");
  await prodcuer.connect();
  console.log("Prodcuer Connected Successfully");

  await prodcuer.send({
    topic: "rider-updates",
    messages: [
      {
        partition: 0,
        key: "location-update",
        value: JSON.stringify({ name: "Tony", location: "Hyd" }),
      },
    ],
  });

  await prodcuer.disconnect();
}

init();
