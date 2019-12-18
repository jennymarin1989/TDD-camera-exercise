const Sensor = require("./sensor");
const Camera = require("./camera");

const mockCameraSensor = jest.fn();
jest.mock('./sensor', () => {
  return jest.fn().mockImplementation(() => {
    return { powerOn: mockCameraSensor };
  });
});

beforeEach(() => {
  Sensor.mockClear();
  mockCameraSensor.mockClear();
});



test("Powering camera on powers up the sensor", () => {
  const camera = new Camera(Sensor)
  console.log("CAMERA--->", camera);
  console.log("Sensor--->", Sensor);

  camera.powerOn()
  expect(Sensor.powerSensorOn()).toHaveBeenCalledTimes(1)
})