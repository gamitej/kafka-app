require("dotenv").config();
const { Kafka } = require("kafkajs");

const broker = process.env.BROKER_URL || "localhost:9092";

exports.kafka = new Kafka({
  clientId: "my-app",
  brokers: [broker],
});
