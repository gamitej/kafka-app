require("dotenv").config();
const { Kafka } = require("kafkajs");

const broker = process.env.BROKER_URL || "http://localhost:9092";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: [broker],
});

async function init() {
  const admin = kafka.admin();
  console.log("Admin Connecting...");
  admin.connect();
  console.log("Admin Connection Success...");

  admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
      },
    ],
  });
}
