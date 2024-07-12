"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var axiosParameter_exports = {};
__export(axiosParameter_exports, {
  getAxiosUpdateDevicePowerParams: () => getAxiosUpdateDevicePowerParams,
  getAxiosUpdateDeviceSetTempParams: () => getAxiosUpdateDeviceSetTempParams,
  getProtocolCodes: () => getProtocolCodes
});
module.exports = __toCommonJS(axiosParameter_exports);
const getProtocolCodes = (deviceCode) => {
  return {
    device_code: deviceCode,
    deviceCode,
    protocal_codes: [
      "Power",
      "Mode",
      "Manual-mute",
      "T01",
      "T02",
      "2074",
      "2075",
      "2076",
      "2077",
      "H03",
      "Set_Temp",
      "R08",
      "R09",
      "R10",
      "R11",
      "R01",
      "R02",
      "R03",
      "T03",
      "1158",
      "1159",
      "F17",
      "H02",
      "T04",
      "T05",
      "T06",
      "T07",
      "T14",
      "T17",
      "T1",
      "T2",
      "T3",
      "T4",
      "T5",
      "T6",
      "T7"
    ],
    protocalCodes: [
      "Power",
      "Mode",
      "Manual-mute",
      "T01",
      "T02",
      "2074",
      "2075",
      "2076",
      "2077",
      "H03",
      "Set_Temp",
      "R08",
      "R09",
      "R10",
      "R11",
      "R01",
      "R02",
      "R03",
      "T03",
      "1158",
      "1159",
      "F17",
      "H02",
      "T04",
      "T05",
      "T06",
      "T07",
      "T14",
      "T17",
      "T1",
      "T2",
      "T3",
      "T4",
      "T5",
      "T6",
      "T7"
    ]
  };
};
const getAxiosUpdateDevicePowerParams = ({
  deviceCode,
  value,
  protocolCode
}) => {
  return {
    param: [
      {
        device_code: deviceCode,
        deviceCode,
        protocol_code: protocolCode,
        protocolCode,
        value
      }
    ]
  };
};
const getAxiosUpdateDeviceSetTempParams = ({
  deviceCode,
  sTemperature
}) => {
  return {
    param: [
      {
        device_code: deviceCode,
        deviceCode,
        protocol_code: "R01",
        protocolCode: "R01",
        value: sTemperature
      },
      {
        device_code: deviceCode,
        deviceCode,
        protocol_code: "R02",
        protocolCode: "R02",
        value: sTemperature
      },
      {
        device_code: deviceCode,
        deviceCode,
        protocol_code: "R03",
        protocolCode: "R03",
        value: sTemperature
      },
      {
        device_code: deviceCode,
        deviceCode,
        protocol_code: "Set_Temp",
        protocolCode: "Set_Temp",
        value: sTemperature
      }
    ]
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getAxiosUpdateDevicePowerParams,
  getAxiosUpdateDeviceSetTempParams,
  getProtocolCodes
});
//# sourceMappingURL=axiosParameter.js.map