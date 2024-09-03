const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("Admin Connecting...");
  admin.connect();
  console.log("Admin Connection Success...");

  console.log("Creating Topic [rider-updates]");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic Creates [rider-updates]");

  console.log("Admin Disconnecting...");
  await admin.disconnect();
  console.log("Admin Disconnected Successfully...");
}

init();
