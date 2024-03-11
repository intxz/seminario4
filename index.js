"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    _id: { type: String },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    age: { type: Number, required: true }
});
var User = (0, mongoose_1.model)('user', UserSchema);
var PlaceSchema = new mongoose_1.Schema({
    _id: { type: String },
    title: { type: String, required: true },
    cords: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    description: { type: String, required: true },
    author: { type: String, required: true }
});
var Place = (0, mongoose_1.model)('user', PlaceSchema);
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var new_user, place, name, surname, age, title, latitude, longitude, description, name1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, mongoose_1.connect)('mongodb://localhost:27017/Seminario')];
                case 1:
                    _a.sent();
                    new_user = new User({
                        name: 'Ángel',
                        surname: 'Redodnod',
                        age: 21
                    });
                    return [4 /*yield*/, new_user.save()];
                case 2:
                    _a.sent();
                    console.log(new_user);
                    place = new Place({
                        title: 'Bankito',
                        cords: [12, 897],
                        description: 'mdwn'
                    });
                    return [4 /*yield*/, place.save()];
                case 3:
                    _a.sent();
                    console.log(place);
                    console.log('postUser()');
                    name = prompt('Insert a name;');
                    surname = prompt('Insert a surname;');
                    age = prompt('Insert your age;');
                    postUser(name, surname, age);
                    console.log('postPlace()');
                    title = prompt('Insert a title:');
                    latitude = prompt('Insert the latitude:');
                    longitude = prompt('Insert the longitude:');
                    description = prompt('Insert a description:');
                    postPlace(title, latitude, longitude, description);
                    console.log('getUsers()');
                    getUsers();
                    console.log('getUser()');
                    name1 = prompt('Insert the name: ');
                    getUser(name1);
                    console.log('getPlcaes()');
                    getPlaces();
                    return [2 /*return*/];
            }
        });
    });
}
run().catch(function (err) { return console.log(err); });
function postUser(name, surname, age) {
    return __awaiter(this, void 0, void 0, function () {
        var new_user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    new_user = new User({
                        name: name,
                        surname: surname,
                        age: age
                    });
                    return [4 /*yield*/, new_user.save()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function postPlace(title, latitude, longitude, description) {
    return __awaiter(this, void 0, void 0, function () {
        var new_place;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    new_place = new Place({
                        title: title,
                        cords: [latitude, longitude],
                        description: description
                    });
                    return [4 /*yield*/, new_place.save()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, User.find()];
                case 1:
                    users = _a.sent();
                    console.log(users);
                    return [2 /*return*/];
            }
        });
    });
}
function getUser(name) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, User.findOne({ name: name })];
                case 1:
                    user = _a.sent();
                    console.log(user);
                    return [2 /*return*/];
            }
        });
    });
}
function getPlaces() {
    return __awaiter(this, void 0, void 0, function () {
        var places;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Place.find()];
                case 1:
                    places = _a.sent();
                    console.log(places);
                    return [2 /*return*/];
            }
        });
    });
}
function getPlace(title) {
    return __awaiter(this, void 0, void 0, function () {
        var place;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Place.findOne({ title: title })];
                case 1:
                    place = _a.sent();
                    console.log(place);
                    return [2 /*return*/];
            }
        });
    });
}
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, User.findByIdAndDelete({ _id: id })];
                case 1:
                    user = _a.sent();
                    if (user) {
                        console.log('finito');
                    }
                    else {
                        console.log('no finito');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function deletePlace(id) {
    return __awaiter(this, void 0, void 0, function () {
        var place;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Place.findByIdAndDelete({ _id: id })];
                case 1:
                    place = _a.sent();
                    if (place) {
                        console.log('finito');
                    }
                    else {
                        console.log('no finito');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function updateUser(id) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, User.updateOne({ _id: id })];
                case 1:
                    user = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function updatePlace(id) {
    return __awaiter(this, void 0, void 0, function () {
        var place;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Place.updateOne({ _id: id })];
                case 1:
                    place = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function populateUP() {
    return __awaiter(this, void 0, void 0, function () {
        var place;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Place.find().populate('author')];
                case 1:
                    place = _a.sent();
                    console.log(place);
                    return [2 /*return*/];
            }
        });
    });
}
