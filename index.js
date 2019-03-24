'use strict';

let Accessory, Service, Characteristic, UUIDGen;

module.exports = function (homebridge) {
    console.log("homebridge API version: " + homebridge.version);

    // Accessory must be created from PlatformAccessory Constructor
    Accessory = homebridge.platformAccessory;

    // Service and Characteristic are from hap-nodejs
    Service = homebridge.hap.Service;
    Characteristic = homebridge.hap.Characteristic;
    UUIDGen = homebridge.hap.uuid;

    // For platform plugin to be considered as dynamic platform plugin,
    // registerPlatform(pluginName, platformName, constructor, dynamic), dynamic must be true
    homebridge.registerAccessory("homebridge-neal-dimmer", "neal-dimmer", NealimmerAccessory);
    homebridge.registerAccessory("homebridge-neal-dimmer", "neal-fireplace", NealFirePlace);
};

function NealFirePlace(log, config) {
    this.log = log;
    this.FireplaceService = new Service.HeaterCooler(this.name);

    this.FireplaceService.getCharacteristic(Characteristic.Active)
        .on('get', this.getStatus.bind(this))
        .on('set', this.setStatus.bind(this));

    this.FireplaceService.getCharacteristic(Characteristic.CurrentHeaterCoolerState)
        .on('get', this.getCurrentHeaterCoolerState.bind(this))
        .on('set', this.setCurrentHeaterCoolerState.bind(this));

    this.FireplaceService.getCharacteristic(Characteristic.TargetHeaterCoolerState)
        .on('get', this.getTargetHeaterCoolerState.bind(this))
        .on('set', this.setTargetHeaterCoolerState.bind(this));

    this.FireplaceService.getCharacteristic(Characteristic.CurrentTemperature)
        .on('get', this.getCurrentTemperature.bind(this))
        .on('set', this.setCurrentTemperature.bind(this));

    this.FireplaceService.getCharacteristic(Characteristic.HeatingThresholdTemperature)
        .on('get', this.getHeatingThresholdTemperature.bind(this))
        .on('set', this.setHeatingThresholdTemperature.bind(this));

}

NealFirePlace.prototype.getCurrentHeaterCoolerState = function (callback) {
    console.log(callback);
    callback(null, 2);
};

NealFirePlace.prototype.setCurrentHeaterCoolerState = function (status, callback, context) {
    console.log(callback);
    callback(null, 2);
};

NealFirePlace.prototype.getTargetHeaterCoolerState = function (callback) {
    console.log(callback);
    callback(null, 1);
};

NealFirePlace.prototype.setTargetHeaterCoolerState = function (status, callback, context) {
    console.log(callback);
    callback(null, 1);
};

NealFirePlace.prototype.getCurrentTemperature = function (callback) {
    console.log(callback);
    callback(null, parseFloat("22"));
};

NealFirePlace.prototype.setCurrentTemperature = function (status, callback, context) {
    console.log(callback);
    callback(null, parseFloat("22"));
};

NealFirePlace.prototype.getHeatingThresholdTemperature = function (callback) {
    console.log(callback);
    callback(null, parseFloat("22"));
};

NealFirePlace.prototype.setHeatingThresholdTemperature = function (status, callback, context) {
    callback(null, parseFloat("22"));
};

NealFirePlace.prototype.getStatus = function (callback) {
    console.log(callback);
    callback(null, 1);
};

NealFirePlace.prototype.setStatus = function (status, callback, context) {
    console.log('Status: ' + status);
    callback(null, 1);
};

function NealimmerAccessory(log, config) {
    this.log = log;
    this.service = new Service.Lightbulb(this.name);

    this.service.getCharacteristic(Characteristic.On)
        .on('get', this.getStatus.bind(this))
        .on('set', this.setStatus.bind(this));

    this.service.getCharacteristic(Characteristic.Brightness)
        .on('get', this.getBrightness.bind(this))
        .on('set', this.setBrightness.bind(this));

    this.service.getCharacteristic(Characteristic.Hue)
        .on('get', this.getHue.bind(this))
        .on('set', this.setHue.bind(this));

    this.service.getCharacteristic(Characteristic.Saturation)
        .on('get', this.getSaturation.bind(this))
        .on('set', this.setSaturation.bind(this));
}


NealimmerAccessory.prototype.getStatus = function (callback) {
    console.log(callback);
    callback(null, 1);
};

NealimmerAccessory.prototype.setStatus = function (status, callback, context) {
    console.log('Status: ' + status);
    callback(null, 50);
};

NealimmerAccessory.prototype.getBrightness = function (callback) {
    console.log(callback);
    callback(null, 50);
};

NealimmerAccessory.prototype.setBrightness = function (brightness, callback, context) {
    console.log('Brightness: ' + brightness);
    callback(null, 50);
};

NealimmerAccessory.prototype.getHue = function (callback) {
    console.log(callback);
    callback(null, 50);
};

NealimmerAccessory.prototype.setHue = function (hue, callback, context) {
    console.log('Hue: ' + hue);
    callback(null, 50);
};

NealimmerAccessory.prototype.getSaturation = function (callback) {
    console.log(callback);
    callback(null, 50);
};

NealimmerAccessory.prototype.setSaturation = function (saturation, callback, context) {
    console.log('Saturation: ' + saturation);
    callback(null, 50);
};

NealimmerAccessory.prototype.getServices = function () {
    return [this.service];
};

NealFirePlace.prototype.getServices = function () {
    return [this.FireplaceService];
};