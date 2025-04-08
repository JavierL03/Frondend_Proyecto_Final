"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStore = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var habitSlice_1 = require("../features/habit/habitSlice");
var userSlice_1 = require("../features/user/userSlice");
var makeStore = function () {
    return (0, toolkit_1.configureStore)({
        reducer: {
            habits: habitSlice_1.default,
            user: userSlice_1.default
        },
    });
};
exports.makeStore = makeStore;
