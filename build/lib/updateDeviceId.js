"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var updateDeviceId_exports = {};
__export(updateDeviceId_exports, {
  updateDeviceID: () => updateDeviceID
});
module.exports = __toCommonJS(updateDeviceId_exports);
var import_axios = __toESM(require("axios"));
var import_main = require("../main");
var import_axiosParameter = require("./axiosParameter");
var import_endPoints = require("./endPoints");
var import_saveValue = require("./saveValue");
var import_store = require("./store");
var import_updateDeviceStatus = require("./updateDeviceStatus");
let _this;
async function updateDeviceID() {
  var _a, _b, _c, _d, _e, _f;
  const store = (0, import_store.initStore)();
  try {
    if (!_this) {
      _this = import_main.MidasAquatemp.getInstance();
    }
    const { token, apiLevel } = store;
    if (!token) {
      return;
    }
    const { sURL } = (0, import_endPoints.getUpdateDeviceIdSUrl)();
    const response = await import_axios.default.post(sURL, (0, import_axiosParameter.getAxiosGetUpdateDeviceIdParams)(), {
      headers: { "x-token": token }
    });
    if (!response || response.status !== 200) {
      (0, import_saveValue.saveValue)("info.connection", false, "boolean");
      return;
    }
    if (response.data.error_code !== "0") {
      (0, import_saveValue.saveValue)("info.connection", false, "boolean");
      store.token = "", store.device = "", store.reachable = false;
      return;
    }
    if (apiLevel < 3) {
      store.device = (_a = response.data.object_result[0]) == null ? void 0 : _a.device_code;
      store.product = (_b = response.data.object_result[0]) == null ? void 0 : _b.product_id;
      store.reachable = ((_c = response.data.object_result[0]) == null ? void 0 : _c.device_status) == "ONLINE";
    } else {
      store.device = (_d = response.data.objectResult[0]) == null ? void 0 : _d.deviceCode;
      store.product = (_e = response.data.objectResult[0]) == null ? void 0 : _e.productId;
      store.reachable = ((_f = response.data.objectResult[0]) == null ? void 0 : _f.deviceStatus) == "ONLINE";
    }
    (0, import_saveValue.saveValue)("DeviceCode", store.device, "string");
    (0, import_saveValue.saveValue)("ProductCode", store.product, "string");
    if (store.reachable && store.device) {
      (0, import_saveValue.saveValue)("info.connection", true, "boolean");
      if (store.device != "" && store.product) {
        await (0, import_updateDeviceStatus.updateDeviceStatus)();
      }
      return;
    }
    store.device = "";
    (0, import_saveValue.saveValue)("info.connection", false, "boolean");
  } catch (error) {
    _this.log.error("Error in updateDeviceID(): " + JSON.stringify(error));
    _this.log.error("Error in updateDeviceID(): " + JSON.stringify(error.stack));
    store.token = "", store.device = "", store.reachable = false;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  updateDeviceID
});
//# sourceMappingURL=updateDeviceId.js.map
