# BS-project-backend
Backend of ZJU B/S project 2021.

See [the frontend](https://github.com/famishedfish/BS-project-frontend).

## Environment Prepare

Install `node_modules`:

```bash
npm install
```

Install `mongodb`:

```bash
brew install mongodb-community@4.2
```

Install `mosquitto`:

```bash
brew install mosquitto
```

## Getting start


### Start database

```bash
brew services start mongodb-community@4.2
```

### Start MQTT server

```bash
brew install mosquitto
```


### Start project

```bash
node bin/www
```

### start analog iot devices

```bash
java -jar analog_terminal/target/iotclient-1.0.0.jar
```
