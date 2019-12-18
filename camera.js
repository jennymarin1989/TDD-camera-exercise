const sensor = require('./sensor')

class Camera {

  constructor(sensor) {
    this.sensor = sensor
  }

  powerOn() {
    // console.log("look here----->", this.sensor)
    return this.sensor.powerSensorOn()
  }

}

module.exports = Camera;