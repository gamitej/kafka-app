## Kafka App

1. Run zookeeper container

   ```
   docker run -p 2181:2181 zookeeper
   ```

2. Run kafka container

   ```
   docker run -p 9092:9092 \
   -e KAFKA_ZOOKEEPER_CONNECT=<IP_ADD>:2181 \
   -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<IP_ADD>:9092 \
   -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
   confluentinc/cp-kafka
   ```

3. Setup 'admin' config in nodejs server run it
   ```
   node admin.js
   ```
4. Setup 'producers' config in nodejs server run it
   ```
   node producers.js
   ```
5. Setup 'consumer' config in nodejs server run it
   ```
   node consumer.js
   ```

## Your kafka setup is done
