webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Quien es POST?\n  En el mundo hay miles de millones de personas quienes viven con agua contaminada\n   y saneamiento inadecuado. Los proyectos de desarrollo que tienen como objetivo\n   solucionar este problema generalmente son muy costosos, logran muy poco y no están\n   siendo documentados. Siempre estamos buscando mejorar el acceso universal al\n   agua y saneamiento mediante herramientas que permitan mostrar y ubicar las\n   necesidades, quienes y cómo están trabajando para solventarlas y donde se\n   están alcanzando las metas.\n</p>\n"

/***/ }),

/***/ "../../../../../src/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-about',
            template: __webpack_require__("../../../../../src/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plant_plant_component__ = __webpack_require__("../../../../../src/plant/plant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("../../../../../src/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__installation_installation_component__ = __webpack_require__("../../../../../src/installation/installation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_plant_selector_plant_selector_component__ = __webpack_require__("../../../../../src/app/plant-selector/plant-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__subscribed_subscribed_component__ = __webpack_require__("../../../../../src/subscribed/subscribed.component.ts");







var router = [
    { path: '', redirectTo: 'plant', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'plant', component: __WEBPACK_IMPORTED_MODULE_2__plant_plant_component__["a" /* PlantComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'installation', component: __WEBPACK_IMPORTED_MODULE_4__installation_installation_component__["a" /* InstallationComponent */] },
    { path: 'plant-selector', component: __WEBPACK_IMPORTED_MODULE_5__app_plant_selector_plant_selector_component__["a" /* PlantSelectorComponent */] },
    { path: 'my-subscribed', component: __WEBPACK_IMPORTED_MODULE_6__subscribed_subscribed_component__["a" /* SubscribedComponent */] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(router);


/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<clr-main-container>\n    <navigation> </navigation>\n    <div class=\"content-container\">\n        <sidenav></sidenav>\n        <main class=\"content-area\">\n          <router-outlet></router-outlet>\n            <!-- <content></content> -->\n        </main>\n    </div>\n</clr-main-container>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-size: 1.2em;\n  color: #999;\n  color: #555;\n  margin-bottom: 0; }\n\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0; }\n\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px; }\n\nnav a:visited, a:link {\n  color: #607D8B; }\n\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC; }\n\nnav a.router-link-active {\n  color: #039be5; }\n\n.header-bar {\n  background-color: #0078d7;\n  height: 4px;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = __WEBPACK_IMPORTED_MODULE_1_environments_environment__["a" /* environment */].title;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "root",
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_module__ = __webpack_require__("../../../../../src/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_clarity_angular__ = __webpack_require__("../../../../clarity-angular/clarity-angular.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__ = __webpack_require__("../../../../../src/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__signup_signup_component__ = __webpack_require__("../../../../../src/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__members_members_component__ = __webpack_require__("../../../../../src/members/members.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sidenav_sidenav_component__ = __webpack_require__("../../../../../src/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__plant_plant_component__ = __webpack_require__("../../../../../src/plant/plant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__downloads_downloads_component__ = __webpack_require__("../../../../../src/downloads/downloads.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__graph_graph_component__ = __webpack_require__("../../../../../src/graph/graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_router__ = __webpack_require__("../../../../../src/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__about_about_component__ = __webpack_require__("../../../../../src/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__installation_installation_component__ = __webpack_require__("../../../../../src/installation/installation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__plant_selector_plant_selector_component__ = __webpack_require__("../../../../../src/app/plant-selector/plant-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__table_table_component__ = __webpack_require__("../../../../../src/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__subscribed_subscribed_component__ = __webpack_require__("../../../../../src/subscribed/subscribed.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { AppRoutingModule } from './app-routing.module';////////////////
















 //////////////////
var firebaseConfig = __WEBPACK_IMPORTED_MODULE_12__environments_environment__["a" /* environment */].firebaseConfig;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_clarity_angular__["a" /* ClarityModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                //AppRoutingModule,////////////////////////////////////
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_18__app_router__["a" /* routes */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_11__members_members_component__["a" /* MembersComponent */],
                __WEBPACK_IMPORTED_MODULE_13__user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_14__sidenav_sidenav_component__["a" /* SidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_15__plant_plant_component__["a" /* PlantComponent */],
                __WEBPACK_IMPORTED_MODULE_16__downloads_downloads_component__["a" /* DownloadsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__graph_graph_component__["a" /* GraphComponent */],
                __WEBPACK_IMPORTED_MODULE_19__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_20__installation_installation_component__["a" /* InstallationComponent */],
                __WEBPACK_IMPORTED_MODULE_21__plant_selector_plant_selector_component__["a" /* PlantSelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_22__table_table_component__["a" /* TableComponent */],
                __WEBPACK_IMPORTED_MODULE_23__subscribed_subscribed_component__["a" /* SubscribedComponent */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_plotly_js_dist_plotly_js__ = __webpack_require__("../../../../plotly.js/dist/plotly.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_plotly_js_dist_plotly_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_plotly_js_dist_plotly_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.changeChart = function () {
        var element = 0; // this.el;
        __WEBPACK_IMPORTED_MODULE_1_plotly_js_dist_plotly_js__["d3"].json("https://www.googleapis.com/fusiontables/v2/query?sql=SELECT%20*%20FROM%201lgxjPxZ8_V6OyA0Wa19iGpuZKKn1mBf1chJOgkqU%20WHERE%20plant%3D%27" + localStorage.getItem("plantName") + "%27%20AND%20rawWaterTurbidity%20>%200%20ORDER%20BY%20timeFinished%20DESC%20LIMIT%20100&key=AIzaSyB4fY4TPsWMhqifu68GFq1aWREjiiAYZmo", function (err, data) {
            function unpack_data(data, key) {
                var rows = data["rows"];
                var columns = data["columns"];
                return rows.map(function (row) { return row[columns.indexOf(key)]; });
            }
            function unpack_time(data, key) {
                var times = unpack_data(data, key);
                return times.map(function (time) { return time.replace(/(\d*)?\/(\d*)?\/(\d*)?/g, '$3-$1-$2'); });
            }
            var trace1 = {
                type: "scatter",
                mode: "lines",
                name: 'Turbiedad de agua cruda',
                x: unpack_time(data, 'timeFinished'),
                y: unpack_data(data, 'rawWaterTurbidity'),
                line: { color: '#17BECF' }
            };
            var trace2 = {
                type: "scatter",
                mode: "lines",
                name: 'Turbiedad de agua decantada',
                x: unpack_time(data, 'timeFinished'),
                y: unpack_data(data, 'settledWaterTurbidity'),
                line: { color: '#7F7F7F' }
            };
            var trace3 = {
                type: "scatter",
                mode: "lines",
                name: 'Turbiedad de agua filtrada',
                x: unpack_time(data, 'timeFinished'),
                y: unpack_data(data, 'filteredWaterTurbidity1'),
                line: { color: '#66ff66' }
            };
            var trace4 = {
                type: "scatter",
                mode: "lines",
                name: 'Dosis de coagulantes',
                yaxis: "y2",
                x: unpack_time(data, 'timeFinished'),
                y: unpack_data(data, 'coagulantDose'),
                line: { color: '#CCFF66' }
            };
            var data1 = [trace1, trace2, trace3, trace4];
            var layout1 = {
                "title": localStorage.getItem("plantName"),
                "autosize": true,
                "yaxis": {
                    "title": "Turbiedad (UTN)",
                    "type": "linear",
                    "autorange": true,
                    "side": "left"
                },
                "yaxis2": {
                    "title": "mg/L",
                    "overlaying": "y",
                    "anchor": "x",
                    "type": "linear",
                    "autorange": true,
                    "side": "right"
                },
                "xaxis": {
                    "title": "Fecha",
                    "type": "date",
                    "autorange": true,
                    "rangeslider": {
                        "bordercolor": "#444",
                        "thickness": 0.15,
                        "bgcolor": "white",
                        "borderwidth": 0,
                        "autorange": true
                    }
                },
                "legend": {
                    "y": 1,
                    "x": 1.1266666666666667
                },
            };
            __WEBPACK_IMPORTED_MODULE_1_plotly_js_dist_plotly_js__["newPlot"](element, data1, layout1);
        });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/plant-selector/plant-selector.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/plant-selector/plant-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<body>\n  <form id=\"selectorForm\">\n  <input type=\"checkbox\" class=\"plant\" id=\"Agalteca\" value=\"Agalteca\" checked> Agalteca<br>\n  <input type=\"checkbox\" class=\"plant\" id=\"Alauca\" value=\"Alauca\"> Alauca<br>\n  <input type=\"checkbox\" class=\"plant\" id=\"Atima\" value=\"Atima\"> Atima<br>\n  <input type=\"checkbox\" class=\"plant\" id=\"Cuatro Comunidades\" value=\"Cuatro Comunidades\"> Cuatro Comunidades<br>\n  <input type=\"checkbox\" class=\"plant\" id=\"Otoro\" value=\"Otoro\"> Otoro<br>\n  <input type=\"checkbox\" class=\"plant\" id=\"Marcala\" value=\"Marcala\"> Marcala<br>\n  <input type=\"checkbox\" class=\"plant\" id=\"Moroceli\" value=\"Moroceli\"> Moroceli<br>\n  <input type=\"checkbox\" class=\"plant\" id=\"Matias\" value=\"Matias\"> Matias<br>\n  <input type=\"checkbox\" class=\"plant\" id=\"San Nicolas\" value=\"San Nicolas\"> San Nicolas<br>\n  <input type=\"checkbox\" class=\"plant\" id=\"Tamara\" value=\"Tamara\"> Tamara<br>\n  <input type=\"checkbox\" class=\"plant\" id=\"Las Vegas\" value=\"Las Vegas\"> Las Vegas<br>\n  <input type=\"checkbox\" class=\"plant\" id=\"San Juan Guarita\" value=\"San Juan Guarita\"> San Juan Guarita<br>\n  <!-- Correo Electronico: <input #mail type=\"text\" value=\"ejemplo@gmail.com\"><br> -->\n</form>\n\n<button (click)=\"sendPlantData()\">Submit</button>\n</body>\n</html>\n\n<!-- after login, user redirected to this page, submits plant info, and is redirected\nto page of the first selected plant-->\n"

/***/ }),

/***/ "../../../../../src/app/plant-selector/plant-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlantSelectorComponent = (function () {
    function PlantSelectorComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    PlantSelectorComponent.prototype.sendPlantData = function () {
        var firebase = __webpack_require__("../../../../firebase/app/index.js"); // <-- use this to see emailVerified == true
        var user = firebase.auth().currentUser;
        var form = document.getElementsByTagName("FORM")[0];
        var plantBoxes = form.getElementsByTagName("INPUT");
        var plants = [];
        // fill plants with the checked plants
        for (var _i = 0, _a = Array.from(plantBoxes); _i < _a.length; _i++) {
            var plant = _a[_i];
            if (document.getElementById(plant.value).checked) {
                plants.push(plant.value);
            }
        }
        this.auth.updateUserData(user, plants);
        alert('Se han actualizado sus preferencias!');
        this.auth.signOut();
        this.router.navigate(['my-subscribed']);
    };
    PlantSelectorComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('mail'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], PlantSelectorComponent.prototype, "email", void 0);
    PlantSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-plant-selector',
            template: __webpack_require__("../../../../../src/app/plant-selector/plant-selector.component.html"),
            styles: [__webpack_require__("../../../../../src/app/plant-selector/plant-selector.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], PlantSelectorComponent);
    return PlantSelectorComponent;
}());



/***/ }),

/***/ "../../../../../src/core/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(afAuth, afs, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        //// Get auth data, then get firestore user document || null
        this.user = this.afAuth.authState
            .switchMap(function (user) {
            if (user) {
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].of(null);
            }
        });
    }
    AuthService.prototype.googleLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider();
        // this.router.navigate(['plant-selector']);  //<--ge this to happen after google authenticates user
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credential) {
            _this.updateUserData(credential.user, []); //Need to remember this could erase plant data for user
        }).then(function () { _this.router.navigate(['plant-selector']); });
    };
    AuthService.prototype.updateUserData = function (user, userPlants) {
        // Sets user data to firestore on login
        var userRef = this.afs.doc("users/" + user.uid);
        var data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            plants: userPlants
        };
        return userRef.set(data);
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['my-subscribed']); //(['/']);
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["b" /* AngularFirestoreModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/downloads/downloads.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/downloads/downloads.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n\n</p>\n\n<p>\n  Click the button below to download all recorded data for this plant:\n</p>\n<p></p>\n<input type=\"submit\" value=\"Download All Data for this Plant\" (click)='getData()'>\n"

/***/ }),

/***/ "../../../../../src/downloads/downloads.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_request_promise_native__ = __webpack_require__("../../../../request-promise-native/lib/rp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_request_promise_native___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_request_promise_native__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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


var DownloadsComponent = (function () {
    function DownloadsComponent() {
        this.content = new Array();
    }
    DownloadsComponent.prototype.ngOnInit = function () {
        //this.getData();
    };
    DownloadsComponent.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, result, data, columns, data_rows, timeIndex, rwtIndex, swtIndex, fwtIndex, cdIndex, i, row, csv_row, csvContent, j, entry, encoded, link;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "https://www.googleapis.com/fusiontables/v2/query?sql=SELECT%20*%20FROM%201lgxjPxZ8_V6OyA0Wa19iGpuZKKn1mBf1chJOgkqU%20WHERE%20plant%3D%27" + localStorage.getItem("plantName") + "%27%20AND%20rawWaterTurbidity%20>%200%20ORDER%20BY%20timeFinished%20DESC&key=AIzaSyB4fY4TPsWMhqifu68GFq1aWREjiiAYZmo";
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1_request_promise_native__["get"](url)];
                    case 1:
                        result = _a.sent();
                        data = JSON.parse(result);
                        columns = data.columns;
                        data_rows = data.rows;
                        timeIndex = columns.indexOf("timeFinished");
                        rwtIndex = columns.indexOf("rawWaterTurbidity");
                        swtIndex = columns.indexOf("settledWaterTurbidity");
                        fwtIndex = columns.indexOf("filteredWaterTurbidity1");
                        cdIndex = columns.indexOf("coagulantDose");
                        for (i = 0; i < data_rows.length; i++) {
                            row = data_rows[i];
                            csv_row = new Array([row[timeIndex], row[rwtIndex], row[swtIndex], row[fwtIndex], row[cdIndex]]);
                            this.content.push(csv_row);
                        }
                        csvContent = "data:text/csv;charset=utf-8";
                        csvContent += "filler, Time Finished,Raw Water Turbidity (NTU),Settled Water Turbidity (NTU), Filtered Water Turbidity (NTU), Coagulant Dose (mg/L)\n";
                        for (j = 0; j < this.content.length; j++) {
                            entry = this.content[j].join(",");
                            csvContent += entry + "\n";
                        }
                        encoded = encodeURI(csvContent);
                        link = document.createElement("a");
                        link.setAttribute("href", encoded);
                        link.setAttribute("download", localStorage.getItem("plantName") + "_Data.csv");
                        document.body.appendChild(link);
                        link.click();
                        return [2 /*return*/];
                }
            });
        });
    };
    DownloadsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-downloads',
            template: __webpack_require__("../../../../../src/downloads/downloads.component.html"),
            styles: [__webpack_require__("../../../../../src/downloads/downloads.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DownloadsComponent);
    return DownloadsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    title: "post-visualize-devolopment",
    firebaseConfig: {
        apiKey: "AIzaSyAXe0rjDTHgcoUSsP9u5NtiwNf92VL_oI4",
        authDomain: "post-visualize-development.firebaseapp.com",
        databaseURL: "https://post-visualize-development.firebaseio.com",
        projectId: "post-visualize-development",
        storageBucket: "post-visualize-development.appspot.com",
        messagingSenderId: "114314763008"
    }
};


/***/ }),

/***/ "../../../../../src/graph/graph.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div #chart>\n    <!-- Chart will appear here -->\n  </div>\n"

/***/ }),

/***/ "../../../../../src/graph/graph.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/graph/graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_plotly_js_dist_plotly_js__ = __webpack_require__("../../../../plotly.js/dist/plotly.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_plotly_js_dist_plotly_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_plotly_js_dist_plotly_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import * as Plotly from 'plotly.js'

var GraphComponent = (function () {
    function GraphComponent() {
    }
    GraphComponent.prototype.ngOnInit = function () {
        this.basicChart();
    };
    GraphComponent.prototype.basicChart = function () {
        var element = this.el.nativeElement;
        __WEBPACK_IMPORTED_MODULE_1_plotly_js_dist_plotly_js__["d3"].json("https://www.googleapis.com/fusiontables/v2/query?sql=SELECT%20*%20FROM%201lgxjPxZ8_V6OyA0Wa19iGpuZKKn1mBf1chJOgkqU%20WHERE%20plant%3D%27" + localStorage.getItem("plantName") + "%27%20AND%20rawWaterTurbidity%20>%200%20ORDER%20BY%20timeFinished%20DESC%20LIMIT%20100&key=AIzaSyB4fY4TPsWMhqifu68GFq1aWREjiiAYZmo", function (err, data) {
            function unpack_data(data, key) {
                var rows = data["rows"];
                var columns = data["columns"];
                return rows.map(function (row) { return row[columns.indexOf(key)]; });
            }
            function unpack_time(data, key) {
                var times = unpack_data(data, key);
                return times.map(function (time) { return time.replace(/(\d*)?\/(\d*)?\/(\d*)?/g, '$3-$1-$2'); });
            }
            var trace1 = {
                type: "scatter",
                mode: "lines",
                name: 'Turbiedad de agua cruda',
                x: unpack_time(data, 'timeFinished'),
                y: unpack_data(data, 'rawWaterTurbidity'),
                line: { color: '#17BECF' }
            };
            var trace2 = {
                type: "scatter",
                mode: "lines",
                name: 'Turbiedad de agua decantada',
                x: unpack_time(data, 'timeFinished'),
                y: unpack_data(data, 'settledWaterTurbidity'),
                line: { color: '#7F7F7F' }
            };
            var trace3 = {
                type: "scatter",
                mode: "lines",
                name: 'Turbiedad de agua filtrada',
                x: unpack_time(data, 'timeFinished'),
                y: unpack_data(data, 'filteredWaterTurbidity1'),
                line: { color: '#66ff66' }
            };
            var trace4 = {
                type: "scatter",
                mode: "lines",
                name: 'Dosis de coagulantes',
                yaxis: "y2",
                x: unpack_time(data, 'timeFinished'),
                y: unpack_data(data, 'coagulantDose'),
                line: { color: '#CCFF66' }
            };
            var data1 = [trace1, trace2, trace3, trace4];
            var layout1 = {
                "title": localStorage.getItem("plantName"),
                "autosize": true,
                "yaxis": {
                    "title": "Turbiedad (UTN)",
                    "type": "linear",
                    "autorange": true,
                    "side": "left"
                },
                "yaxis2": {
                    "title": "mg/L",
                    "overlaying": "y",
                    "anchor": "x",
                    "type": "linear",
                    "autorange": true,
                    "side": "right"
                },
                "xaxis": {
                    "title": "Fecha",
                    "type": "date",
                    "autorange": true,
                    "rangeslider": {
                        "bordercolor": "#444",
                        "thickness": 0.15,
                        "bgcolor": "white",
                        "borderwidth": 0,
                        "autorange": true
                    }
                },
                "legend": {
                    "y": 1,
                    "x": 1.1266666666666667
                },
            };
            __WEBPACK_IMPORTED_MODULE_1_plotly_js_dist_plotly_js__["newPlot"](element, data1, layout1);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('chart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], GraphComponent.prototype, "el", void 0);
    GraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'plant-graph',
            template: __webpack_require__("../../../../../src/graph/graph.component.html"),
            styles: [__webpack_require__("../../../../../src/graph/graph.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GraphComponent);
    return GraphComponent;
}());



/***/ }),

/***/ "../../../../../src/installation/installation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/installation/installation.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n\n\nPlant Listarrow_drop_down\nEstando en un lugar con wifi u otra conexión al internet, baje tres aplicaciónes de “POST Datos,” “POST Dosis” y “POST Graficos.” Encontrarlos Buscando “AguaClara” en la tienda de Google Play.\nSiempre con internet, abra la aplicación POST Datos, y entre en el menú de ajustes (haga click en los tres puntos en la esquina superior derecha o en el botón al fondo del celular). Haga click en “Cambiar la configuración”, luego “Configurar Ajustes de Plataforma”.\nToque “URL” y asegura tiene: https://post-aguaclara.appspot.com\nToque “Nombre del Usuario” y entre la nombre de tu planta de este lista\nToque “Contraseña” y entre la contraseña para tu planta en la misma lista de antes.\nAhora vuelva a la página principal (tocando el boton de atras dos veces) y haga click en “Obtener Formulario en Blanco”. Si está direccionado al servidor correcto, deberían de aparecer formularios. (Si no, está direccionado al servidor incorrecto y tiene que comprobar que entró el “URL” correctamente en el paso 2.) Haga click en las cajitas a la par de los formularios queridos, en este caso el actual se llama “”. Luego haga click en “Obtener los Seleccionados”. Debería de aparecer una notificación que el formulario se bajó correctamente.\nEn el futuro, será necesario bajar nuevas versiones de los formularios por este procedimiento. Siempre usaremos las versiones más recientes.\nListo para guardar datos! Este paso no requiere internet. Vuelva a la página principal (tocando el boton de atras), y haga click en “Llenar Nuevo Formulario”. Deberían de aparecer los dos formularios obtenidos.\nSi quiere registrar datos o monitoreo, haga click en el nombre de el formulario, y toque las flechas de la pantalla.\nSi el formulario aparece en inglés, entre al menú de ajustes, seleccione “Cambiar el idioma”, y seleccione la lengua preferida.\nUna vez que el formulario ha sido finalizado y guardado, aún tiene que mandarlo por la opción “Enviar Formulario Finalizado” en un lugar con wifi. De la lista de los formularios guardados, seleccione el formulario, o los múltiples formularios, que quiere enviar, y haga click en “Enviar Seleccionado”. Si la aplicación entregó los formularios correctamente al servidor, debería de aparecer una notificación que lo refleje. Felicidades! Ha entregado datos de la calidad de agua!\n</p>\n"

/***/ }),

/***/ "../../../../../src/installation/installation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstallationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InstallationComponent = (function () {
    function InstallationComponent() {
    }
    InstallationComponent.prototype.ngOnInit = function () {
    };
    InstallationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-installation',
            template: __webpack_require__("../../../../../src/installation/installation.component.html"),
            styles: [__webpack_require__("../../../../../src/installation/installation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InstallationComponent);
    return InstallationComponent;
}());



/***/ }),

/***/ "../../../../../src/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#lock {\n    width:40%;\n    margin: 1.5em auto 4em auto;\n    display:block;\n}\n\n#fb {\n    background:#3B5998 url('https://gpacenza.github.io/post-site/assets/images/facebook.svg') no-repeat 14px 6px;\n    background-size: 47px;\n    color:#fff;\n}\n\n#google {\n    border: 1px solid #95989A;\n    background: #fff  url('https://gpacenza.github.io/post-site/assets/images/google.svg') no-repeat 25px;\n    background-size: 25px;\n}\n\n#email {\n    background: #ECECEC  url('https://gpacenza.github.io/post-site/assets/images/email.svg') no-repeat 25px;\n    background-size: 25px;\n}\n\n@media (max-width: 600px) {\n    #page {\n        padding:1em;\n    }\n    #toolbar {\n        width:90%;\n        margin-left: -45%;\n    }\n    #fb {\n        background:#3B5998;\n    }\n\n    #google {\n        background: #fff;\n    }\n\n    #email {\n        background: #ECECEC;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <img src=\"assets/images/lock.svg\" id=\"lock\">\n\n  <!-- <button (click)=\"loginGoogle()\" id=\"google\">Login With Google</button> -->\n  <button (click)=\"loginGoogle()\" id=\"loginout\">Suscribase con Gmail</button>\n  <!--<button (click)=\"logout()\">Logout</button>-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(auth, router) {
        // if (auth.user){
        // console.log("you're already logged in!", auth.user)
        // alert("You're already logged in!")
        // }
        this.auth = auth;
        this.router = router;
    }
    // loginGoogle() {
    //   this.auth.googleLogin()
    // }
    LoginComponent.prototype.loginGoogle = function () {
        var firebase = __webpack_require__("../../../../firebase/app/index.js");
        if (firebase.auth().currentUser) {
            this.auth.signOut();
            document.getElementById("loginout").innerHTML = "Suscribase con Gmail";
        }
        else {
            this.auth.googleLogin();
            if (firebase.auth().currentUser) {
                document.getElementById("loginout").innerHTML = "Suscribase con Gmail";
            }
        }
        // We want to log in with google
        // get information from firebase on whether or not user has registered plants
        // if not, immediately redirect the user by calling some redirect function
        //}
    };
    LoginComponent.prototype.ngOnInit = function () {
        // var firebase = require("firebase/app")
        // if (firebase.auth().currentUser){
        //   document.getElementById("loginout").innerHTML = "Logout";//"Login with Google"
        // }else{
        //   document.getElementById("loginout").innerHTML = "Suscribase con Gmail";//"Logout"
        // }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());

//after login, user redirected to this page, submits plant info, and is redirected
//to page of the first selected plant
// Do we want user to have to do this every time?
// Create new field in DB to keep track of whether or not user has done this
// When user first submits data, set field to true
// Every subsequent login, check the value of this field before having the user
// submit the form
// Add a component/form for the user to update their preferences
// Link for this component should only be accessible if user is logged in


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "../../../../../src/members/members.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/members/members.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  members works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/members/members.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MembersComponent = (function () {
    function MembersComponent() {
    }
    MembersComponent.prototype.ngOnInit = function () {
    };
    MembersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-members',
            template: __webpack_require__("../../../../../src/members/members.component.html"),
            styles: [__webpack_require__("../../../../../src/members/members.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MembersComponent);
    return MembersComponent;
}());



/***/ }),

/***/ "../../../../../src/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n}\n\nli {\n    float: left;\n}\n\nli a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n} */\n\n/* Change the link color to #111 (black) on hover */\nli a:hover {\n    background-color: #111;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<clr-header class=\"header-6\">\n    <div class=\"branding\">\n        <a href=\"#\" class=\"nav-link nav-text\">\n            <span class=\"title\">POST</span>\n        </a>\n    </div>\n    <div class=\"header-nav\" [clr-nav-level]=\"1\">\n    \t<!-- <a href=\"./index.html\" class=\"nav-link nav-text\">Plants</a> -->\n      <a [routerLink]=\"['./plant']\" class=\"nav-link nav-text\">Plants</a>\n    \t<a [routerLink]=\"['./about']\" class=\"nav-link nav-text\">About</a>\n    \t<!--<a [routerLink]=\"['./installation']\" class=\"nav-link nav-text\">Installations</a>-->\n      <a [routerLink]=\"['./login']\" class=\"pull-right nav-link nav-text \">Suscribir</a>\n      <!-- <a id='selector' [routerLink]=\"['./plant-selector']\" class=\"pull-right nav-link nav-text\">Selector</a> -->\n    </div>\n</clr-header>\n"

/***/ }),

/***/ "../../../../../src/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { ClarityIcons } from 'clarity-icons';
//import 'clarity-icons/shapes/all-shapes';
var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
        //	ClarityIcons.add({"post-icon": `
        //`});
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'navigation',
            template: __webpack_require__("../../../../../src/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/plant/plant.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/plant/plant.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{plant}}</h2>\n<p></p>\n\n<clr-tabs>\n    <clr-tab>\n        <button clrTabLink id=\"link1\">Graphs</button>\n        <clr-tab-content *clrIfActive=\"true\">\n        <plant-graph></plant-graph>\n        </clr-tab-content>\n    </clr-tab>\n    <clr-tab>\n        <button clrTabLink>Tables</button>\n        <clr-tab-content *clrIfActive=\"false\">\n          <my-table></my-table>\n        </clr-tab-content>\n    </clr-tab>\n    <clr-tab>\n        <button clrTabLink>Downloads</button>\n        <clr-tab-content *clrIfActive=\"false\">\n          <my-downloads></my-downloads>\n        </clr-tab-content>\n    </clr-tab>\n</clr-tabs>\n"

/***/ }),

/***/ "../../../../../src/plant/plant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlantComponent = (function () {
    function PlantComponent() {
        this.plant = localStorage.getItem("plantName");
    }
    PlantComponent.prototype.ngOnInit = function () {
    };
    PlantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'content',
            template: __webpack_require__("../../../../../src/plant/plant.component.html"),
            styles: [__webpack_require__("../../../../../src/plant/plant.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlantComponent);
    return PlantComponent;
}());



/***/ }),

/***/ "../../../../../src/sidenav/sidenav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".unstyled-button {\n  border: none;\n  padding: 0;\n  background: none;\n}\n\ndiv {\n  margin: 20px 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<nav class=\"sidenav\" [clr-nav-level]=\"2\">\n\t<section class=\"sidenav-content\">\n\t\t<section class=\"nav-group\">\n\t\t\t<input id=\"tabexample2\" type=\"checkbox\">\n\t\t\t<label for=\"tabexample2\">Plant List</label>\n\t\t\t<ul class=\"nav-list\">\n\t\t\t\t<br><a href=\"./plant\"><button class = \"unstyled-button\" (click) = \"onClickMe('Agalteca')\">Agalteca</button></a>\n\t\t\t\t<!-- <br><button class=\"unstyled-button\" (click) = \"onClickMe('Agalteca')\">Agalteca</button></a> -->\n\t\t\t\t<br><a href=\"./plant\"><button class = \"unstyled-button\" (click) = \"onClickMe('Alauca')\">Alauca</button></a>\n\t\t\t\t<br><a href=\"./plant\"><button class = \"unstyled-button\" (click) = \"onClickMe('Atima')\">Atima</button></a>\n\t\t\t\t<br><a href=\"./plant\"><button class = \"unstyled-button\" (click) = \"onClickMe('Cautro Comunidades')\">Cuatro Comunidades</button></a>\n\t\t\t\t<br><a href=\"./plant\"><button class = \"unstyled-button\" (click) = \"onClickMe('Otoro')\">Otoro</button></a>\n\t\t\t\t<br><a href=\"./plant\"><button class = \"unstyled-button\" (click) = \"onClickMe('Marcala')\">Marcala</button></a>\n\t\t\t\t<br><a href=\"./plant\"><button class = \"unstyled-button\" (click) = \"onClickMe('Moroceli')\">Moroceli</button></a>\n\t\t\t\t<!-- <br><button class=\"unstyled-button\" (click) = \"onClickMe('Moroceli')\">Moroceli</button> -->\n\t\t\t\t<br><a href=\"./plant\"><button class = \"unstyled-button\" (click) = \"onClickMe('Matias')\">Matias</button></a>\n\t\t\t\t<br><a href=\"./plant\"><button class = \"unstyled-button\" (click) = \"onClickMe('San Nicolas')\">San Nicolas</button></a>\n\t\t\t\t<br><a href=\"./plant\"><button class = \"unstyled-button\" (click) = \"onClickMe('Tamara')\">Tamara</button></a>\n\t\t\t  <br><a href=\"./plant\"><button class = \"unstyled-button\" (click) = \"onClickMe('Las Vegas')\">Las Vegas</button></a>\n\t\t\t\t<br><a href=\"./plant\"><button class = \"unstyled-button\" (click) = \"onClickMe('San Juan Guarita')\">San Juan Guarita</button></a>\n\t\t\t</ul>\n\t\t</section>\n\t</section>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidenavComponent = (function () {
    function SidenavComponent(datService) {
        this.datService = datService;
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent.prototype.onClickMe = function (plantName) {
        localStorage.setItem("plantName", plantName);
        //this.datService.changeChart();
        window.location.reload();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__app_data_service__["a" /* DataService */])
    ], SidenavComponent.prototype, "serv", void 0);
    SidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sidenav',
            template: __webpack_require__("../../../../../src/sidenav/sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/sidenav/sidenav.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__app_data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_data_service__["a" /* DataService */]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  signup works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-signup',
            template: __webpack_require__("../../../../../src/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/subscribed/subscribed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/subscribed/subscribed.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Ahora usted está suscrito a la pagina de POST! \n</p>\n"

/***/ }),

/***/ "../../../../../src/subscribed/subscribed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubscribedComponent = (function () {
    function SubscribedComponent() {
    }
    SubscribedComponent.prototype.ngOnInit = function () {
    };
    SubscribedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-subscribed',
            template: __webpack_require__("../../../../../src/subscribed/subscribed.component.html"),
            styles: [__webpack_require__("../../../../../src/subscribed/subscribed.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubscribedComponent);
    return SubscribedComponent;
}());



/***/ }),

/***/ "../../../../../src/table/table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table, th , td {\n  border: 1px solid grey;\n  border-collapse: collapse;\n  padding: 5px;\n}\n\ntable tr:nth-child(odd) {\n  background-color: #f1f1f1;\n}\n\ntable tr:nth-child(even) {\n  background-color: #ffffff;\n}\n\ntable.center {\n    margin-left:auto;\n    margin-right:auto;\n    margin-top: 50px;\n  }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<div ng-app=\"myApp\" ng-controller=\"customersCtrl\">\n\n<table class='center' style='text-align:center' >\n  <td>TimeStamp</td>\n  <td>Raw Water Turbidity (NTU)</td>\n  <td>Settled Water Turbidity (NTU)</td>\n  <td>Filtered Water Turbidity (NTU)</td>\n  <td>Coagulant Dose (mg/L)</td>\n  <tr *ngFor=\"let d of rows\">\n    <td>{{ d.timeStamp }}</td>\n    <td>{{ d.rawWaterTurbidity}}</td>\n    <td>{{ d.settledWaterTurbidity }}</td>\n    <td>{{ d.filteredWaterTurbidity }}</td>\n    <td>{{ d.coagulantDose }}</td>\n  </tr>\n</table>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_request_promise_native__ = __webpack_require__("../../../../request-promise-native/lib/rp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_request_promise_native___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_request_promise_native__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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


var TableComponent = (function () {
    function TableComponent() {
        this.rows = new Array();
    }
    TableComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    TableComponent.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, result, data, columns, data_rows, timeIndex, rwtIndex, swtIndex, fwtIndex, cdIndex, i, row, obj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "https://www.googleapis.com/fusiontables/v2/query?sql=SELECT%20*%20FROM%201lgxjPxZ8_V6OyA0Wa19iGpuZKKn1mBf1chJOgkqU%20WHERE%20plant%3D%27" + localStorage.getItem("plantName") + "%27%20AND%20rawWaterTurbidity%20>%200%20ORDER%20BY%20timeFinished%20DESC%20LIMIT%20100&key=AIzaSyB4fY4TPsWMhqifu68GFq1aWREjiiAYZmo";
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1_request_promise_native__["get"](url)];
                    case 1:
                        result = _a.sent();
                        data = JSON.parse(result);
                        columns = data.columns;
                        data_rows = data.rows;
                        console.log(data.columns);
                        console.log(columns.indexOf("timeFinished"));
                        timeIndex = columns.indexOf("timeFinished");
                        rwtIndex = columns.indexOf("rawWaterTurbidity");
                        swtIndex = columns.indexOf("settledWaterTurbidity");
                        fwtIndex = columns.indexOf("filteredWaterTurbidity1");
                        cdIndex = columns.indexOf("coagulantDose");
                        for (i = 0; i < data_rows.length; i++) {
                            row = data_rows[i];
                            obj = { "timeStamp": row[timeIndex], "rawWaterTurbidity": row[rwtIndex], "settledWaterTurbidity": row[swtIndex], "filteredWaterTurbidity": row[fwtIndex], "coagulantDose": row[cdIndex] };
                            this.rows.push(obj);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-table',
            template: __webpack_require__("../../../../../src/table/table.component.html"),
            styles: [__webpack_require__("../../../../../src/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "../../../../../src/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"auth.user | async; then authenticated else guest\">\n        <!-- template will replace this div -->\n</div>\n<!-- User NOT logged in -->\n<ng-template #guest>\n    <h3>Howdy, GUEST</h3>\n    <p>Login to get started...</p>\n\n    <button (click)=\"auth.googleLogin()\">\n        <i class=\"fa fa-google\"></i> Connect Google\n    </button>\n</ng-template>\n<!-- User logged in -->\n<ng-template #authenticated>\n    <div *ngIf=\"auth.user | async as user\">\n        <h3>Howdy, {{ user.displayName }}</h3>\n        <img  [src]=\"user.photoURL\">\n        <p>UID: {{ user.uid }}</p>\n        <p>Favorite Color: {{ user?.favoriteColor }} </p>\n        <button (click)=\"auth.signOut()\">Logout</button>\n    </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileComponent = (function () {
    function UserProfileComponent(auth) {
        this.auth = auth;
    }
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-profile',
            template: __webpack_require__("../../../../../src/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map