webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Flower.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Flower = (function () {
    function Flower() {
    }
    return Flower;
}());
exports.Flower = Flower;


/***/ }),

/***/ "./src/app/about-page/about-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns is-mobile about-page-container\" [@aboutState]=\"state\">\n    <div class=\"column\"></div>\n    <div class=\"column is-two-thirds\">\n        <!-- <div class=\"columns\">\n            <div class=\"column\">\n                <div class=\"title-text has-text-centered\">\n                    <span>About the Business!</span>\n                </div>\n            </div>\n        </div> -->\n        \n        <div class=\"columns about-info\">\n            <div class=\"column about-me-picture\">\n                <img class=\"fullhd\" src=\"../../assets/images/zenaAboutImage.jpeg\">\n            </div>\n            <div class=\"column has-text-left\">\n                <div class=\"title-text has-text-centered\">\n                    <span>About the Business!</span>\n                </div>\n                <span class=\"about-message-text\">{{aboutText}}</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"column\"></div>\n</div>"

/***/ }),

/***/ "./src/app/about-page/about-page.component.scss":
/***/ (function(module, exports) {

module.exports = ".about-info {\n  background-size: 100% 100%;\n  border-radius: 5px; }\n\n.about-message-text {\n  font-size: 1.5em;\n  text-align: center;\n  color: white; }\n\n.about-me-picture {\n  padding-top: 2em; }\n"

/***/ }),

/***/ "./src/app/about-page/about-page.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var animations_1 = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var AboutPageComponent = (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
        this.state = 'active';
        this.aboutText = "My name is Zena Ledoux and I first started making floral arrangements for my family and friends back home in Guyana, South America."
            + "Starting with real flowers and eventually gravitating to silk arrangements, I have formed my craft to meet all needs."
            + "If you have any questions about any of my products or if you would like to request a unique arrange please see my contact page"
            + "Thank you everybody and enjoy Zena Flowers!";
    };
    AboutPageComponent = __decorate([
        core_1.Component({
            selector: 'app-about-page',
            template: __webpack_require__("./src/app/about-page/about-page.component.html"),
            styles: [__webpack_require__("./src/app/about-page/about-page.component.scss")],
            animations: [
                animations_1.trigger('aboutState', [
                    animations_1.transition('void => active', [
                        animations_1.style({ transform: 'translateX(100%) scale(1)' }),
                        animations_1.animate(300)
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());
exports.AboutPageComponent = AboutPageComponent;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-layout></app-layout>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var ngx_bootstrap_1 = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var layout_component_1 = __webpack_require__("./src/app/layout/layout.component.ts");
var nav_bar_component_1 = __webpack_require__("./src/app/nav-bar/nav-bar.component.ts");
var main_page_details_component_1 = __webpack_require__("./src/app/main-page-details/main-page-details.component.ts");
var main_slide_show_component_1 = __webpack_require__("./src/app/main-slide-show/main-slide-show.component.ts");
var image_service_1 = __webpack_require__("./src/app/services/image.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var http_2 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var about_page_component_1 = __webpack_require__("./src/app/about-page/about-page.component.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var shop_page_component_1 = __webpack_require__("./src/app/shop-page/shop-page.component.ts");
var shop_item_component_1 = __webpack_require__("./src/app/shop-item/shop-item.component.ts");
var footer_component_1 = __webpack_require__("./src/app/footer/footer.component.ts");
var contact_page_component_1 = __webpack_require__("./src/app/contact-page/contact-page.component.ts");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var appRoutes = [
    { path: 'home', component: main_page_details_component_1.MainPageDetailsComponent },
    { path: 'about', component: about_page_component_1.AboutPageComponent },
    { path: 'shop', component: shop_page_component_1.ShopPageComponent },
    { path: 'contact', component: contact_page_component_1.ContactPageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                layout_component_1.LayoutComponent,
                nav_bar_component_1.NavBarComponent,
                main_page_details_component_1.MainPageDetailsComponent,
                main_slide_show_component_1.MainSlideShowComponent,
                about_page_component_1.AboutPageComponent,
                shop_page_component_1.ShopPageComponent,
                shop_item_component_1.ShopItemComponent,
                footer_component_1.FooterComponent,
                contact_page_component_1.ContactPageComponent
            ],
            imports: [
                http_1.HttpModule,
                http_2.HttpClientModule,
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                ngx_bootstrap_1.CarouselModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            providers: [image_service_1.ImageService, http_2.HttpClientModule],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/contact-page/contact-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\"  [@contactState]=\"state\">\n  <div class=\"column is-hidden-mobile\"></div>\n  <div class=\"column is-two-thirds\">\n    <div class=\"columns\">\n      <div class=\"column\">\n          <div class=\"has-text-centered contact-message\">\n            <div class=\"has-text-centered\">\n                <span class=\"contact-title-text\">Contact Zena Flowers</span>\n                <br><br>\n            </div>            \n            <div class=\"has-text-left\">\n              If you are interested in buying one of the available floral arrangements in shop,\n              send your name, email, number to reach you at and best time to reach you, and the\n              ID of the flower you are interested in purchasing (ID located at the top of the photos). \n              If you would like to customize your own unique flower arrangements you can leave\n              a brief description in the message box below.\n              <br><br>\n              You can also give Zena a call at (573) 808-6568\n            </div>\n          </div>\n      </div>\n      <div class=\"column\" *ngIf=\"!sent\">\n        <div class=\"contact-form\">\n          <div class=\"field\">\n            <label class=\"label\">Name</label>\n            <div class=\"control\">\n              <input class=\"input\" type=\"text\" placeholder=\"Name input\" [(ngModel)]=\"contactInfo.name\">\n            </div>\n          </div>\n          <div class=\"field\">\n            <label class=\"label\">Email</label>\n            <div class=\"control has-icons-left has-icons-right\">\n              <input class=\"input\" type=\"email\" placeholder=\"Email input\" [(ngModel)]=\"contactInfo.email\">\n              <span class=\"icon is-small is-left\">\n                <i class=\"mdi mdi-email\"></i>\n              </span>\n            </div>\n          </div>\n          <div class=\"field\">\n            <label class=\"label\">Subject</label>\n            <div class=\"control\">\n              <div class=\"select\">\n                <select name=\"Subject\" [(ngModel)]=\"contactInfo.subject\">\n                  <option [value]=\"null\">Select A Subject</option>\n                  <option *ngFor=\"let subject of subjects\" [ngValue]=\"subject\">{{subject}}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"field\">\n            <label class=\"label\">Message</label>\n            <div class=\"control\">\n              <textarea class=\"textarea\" placeholder=\"Textarea\" [(ngModel)]=\"contactInfo.message\"></textarea>\n            </div>\n          </div>\n          <div class=\"field is-grouped\">\n            <div class=\"control\">\n              <button class=\"button is-link\" [disabled]=\"!isValid()\" (click)=\"sendContactInfo()\">Submit</button>\n            </div>\n            <div class=\"control\">\n              <button class=\"button is-text\">Cancel</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"column email-message\" *ngIf=\"sent\">\n        <div class=\"columns\">\n          <div class=\"column sent-message\">\n            <div class=\"sent-message-text\">Thank you for <br/> your email!</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"column is-hidden-mobile\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact-page/contact-page.component.scss":
/***/ (function(module, exports) {

module.exports = ".textarea {\n  min-height: 10em; }\n\n.contact-message {\n  font-size: 1.6em;\n  padding: .5em;\n  color: white; }\n\n.contact-title-text {\n  font-size: 2em;\n  font-family: 'Great Vibes', cursive; }\n\n.sent-message {\n  min-height: 10em;\n  font-family: 'Marcellus SC', serif;\n  font-size: 3em;\n  color: white;\n  text-align: center; }\n\n.sent-message-text {\n  margin-top: 2em; }\n\n.email-message {\n  margin-top: 3em; }\n"

/***/ }),

/***/ "./src/app/contact-page/contact-page.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var contactInfo_1 = __webpack_require__("./src/app/contact-page/models/contactInfo.ts");
var image_service_1 = __webpack_require__("./src/app/services/image.service.ts");
var animations_1 = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var ContactPageComponent = (function () {
    function ContactPageComponent(imageServcie) {
        this.imageServcie = imageServcie;
        this.sent = false;
    }
    ContactPageComponent.prototype.ngOnInit = function () {
        this.state = 'active';
        this.contactInfo = new contactInfo_1.ContactInfo();
        this.subjects = ['Buy Flowers', 'Order Custom', 'Returns', 'Other'];
        this.contactInfo.subject = null;
    };
    ContactPageComponent.prototype.sendContactInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.sent = true;
                        return [4 /*yield*/, this.imageServcie.sendEmail(this.contactInfo)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactPageComponent.prototype.isValid = function () {
        if (this.contactInfo
            && this.contactInfo.name
            && this.contactInfo.subject
            && this.contactInfo.email
            && this.contactInfo.message) {
            return true;
        }
        else {
            return false;
        }
    };
    ContactPageComponent = __decorate([
        core_1.Component({
            selector: 'app-contact-page',
            template: __webpack_require__("./src/app/contact-page/contact-page.component.html"),
            styles: [__webpack_require__("./src/app/contact-page/contact-page.component.scss")],
            animations: [
                animations_1.trigger('contactState', [
                    animations_1.transition('void => active', [
                        animations_1.style({ transform: 'translateX(100%) scale(1)' }),
                        animations_1.animate(300)
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [image_service_1.ImageService])
    ], ContactPageComponent);
    return ContactPageComponent;
}());
exports.ContactPageComponent = ContactPageComponent;


/***/ }),

/***/ "./src/app/contact-page/models/contactInfo.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContactInfo = (function () {
    function ContactInfo() {
    }
    return ContactInfo;
}());
exports.ContactInfo = ContactInfo;


/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns fixed-footer\">\n  <div class=\"column is-hidden-mobile\"></div>\n  <div class=\"column is-two-thirds is-hidden-mobile\">\n    <div class=\"columns mid-col-margin is-mobile\">\n      <div class=\"column has-text-left is-paddingless\">\n        <span class=\"white-font\">Zena Flowers Incorporated</span>\n      </div>\n      <div class=\"column has-text-right is-paddingless white-font\">\n        Zena Flowers produced and designed by \n        <a href=\"https://github.com/bjmccotter7192\">Beej</a>  \n      </div>\n    </div>\n  </div>\n  <div class=\"column is-hidden-mobile\"></div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ".mid-col-margin {\n  margin: 0; }\n\n.white-font {\n  color: black; }\n\n.fixed-footer {\n  background-color: #c0afc6;\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  min-height: 3em; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns is-marginless\">\n    <div class=\"column\">\n        <nav-bar></nav-bar>\n    </div>\n</div>\n<div class=\"router-outlet-margin-top\">\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/***/ (function(module, exports) {

module.exports = ".router-outlet-margin-top {\n  margin-top: 1em;\n  margin-bottom: 2em; }\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-layout',
            template: __webpack_require__("./src/app/layout/layout.component.html"),
            styles: [__webpack_require__("./src/app/layout/layout.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());
exports.LayoutComponent = LayoutComponent;


/***/ }),

/***/ "./src/app/main-page-details/main-page-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\" [@mainState]=\"state\">\n    <div class=\"column\"></div>\n    <div class=\"column is-two-thirds remove-side-padding\">\n        <div class=\"columns\">\n            <div class=\"column\">\n                <main-slide-show></main-slide-show>\n            </div>\n        </div>\n        <div class=\"columns\">\n            <div class=\"column\">\n                <div class=\"main-page-opening\">\n                    <span class=\"main-page-opening-text\">\n                        Welcome to Zena Flowers!\n                        <br>\n                        Browse through our fine selection of floral arrangements or, \n                        customize your own floral arrangement today!\n                        <br>\n                        We have floral arrangements for weddings, \n                        anniversaries, parties, receptions, and in home decoration,\n                        <br>\n                         Zena flowers can do it all!\n                    </span>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"columns is-multiline\">\n            <div class=\"column is-one-third\" *ngFor=\"let flower of flowers\">\n                <div class=\"has-text-centered box\">\n                    <app-shop-item [flower]=\"flower\"></app-shop-item>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"column\"></div>\n</div>"

/***/ }),

/***/ "./src/app/main-page-details/main-page-details.component.scss":
/***/ (function(module, exports) {

module.exports = ".add-footer-margin {\n  margin-top: 4em; }\n\n.slide-show-edges {\n  border-radius: 5px; }\n\n.main-page-opening {\n  min-height: 16em;\n  text-align: center; }\n\n.main-page-opening-text {\n  font-size: 2em;\n  font-family: 'Marcellus SC', serif;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/main-page-details/main-page-details.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var animations_1 = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var image_service_1 = __webpack_require__("./src/app/services/image.service.ts");
var MainPageDetailsComponent = (function () {
    function MainPageDetailsComponent(imageService) {
        this.imageService = imageService;
    }
    MainPageDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.state = 'active';
        this.imageService.getData().subscribe(function (res) {
            _this.flowers = res;
            _this.flowers = _this.flowers.filter(function (x) { return x.Id == "Z6" || x.Id == "Z11" || x.Id == "Z20"; });
        });
    };
    MainPageDetailsComponent.prototype.scroll = function (event) {
        console.log(event);
        window.scrollTo(0, 1000);
    };
    __decorate([
        core_1.ViewChild("target"),
        __metadata("design:type", core_1.ElementRef)
    ], MainPageDetailsComponent.prototype, "target", void 0);
    MainPageDetailsComponent = __decorate([
        core_1.Component({
            selector: 'main-page-details',
            template: __webpack_require__("./src/app/main-page-details/main-page-details.component.html"),
            styles: [__webpack_require__("./src/app/main-page-details/main-page-details.component.scss")],
            animations: [
                animations_1.trigger('mainState', [
                    animations_1.transition('void => active', [
                        animations_1.style({ transform: 'translateX(-100%) scale(1)' }),
                        animations_1.animate(300)
                    ])
                ])
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [image_service_1.ImageService])
    ], MainPageDetailsComponent);
    return MainPageDetailsComponent;
}());
exports.MainPageDetailsComponent = MainPageDetailsComponent;


/***/ }),

/***/ "./src/app/main-slide-show/main-slide-show.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"round-corners\">\n  <!-- <carousel>\n    <slide *ngFor=\"let flowerUrl of flowerUrls\">\n      <div class=\"resizePhotos fullhd\" [ngStyle]=\"{'background-image': flowerUrl}\">\n        <div class=\"carousel-caption\">\n          <div class=\"home-caption\" *ngIf=\"!hovered\">\n            <span class=\"home-caption-text\">Welcome to Zena Flowers</span>\n          </div>\n        </div>\n      </div>\n    </slide>\n  </carousel> -->\n\n  <div class=\"columns\">\n    <div class=\"column\"></div>\n    <div class=\"column is-three-fifths\">\n      <carousel>\n        <slide *ngFor=\"let flowerUrl of flowerUrls\">\n          <img class=\"resizePhotos fullhd\" src=\"{{flowerUrl}}\">\n        </slide>\n      </carousel>\n    </div>\n    <div class=\"column\"></div>\n  </div>  \n</div>\n\n"

/***/ }),

/***/ "./src/app/main-slide-show/main-slide-show.component.scss":
/***/ (function(module, exports) {

module.exports = ".resizePhotos {\n  padding-left: 2em;\n  padding-right: 2em; }\n\n.round-corners {\n  border-radius: 5px; }\n\n.sr-only {\n  display: none; }\n\n.carousel-inner {\n  border-radius: 5px; }\n\n.carousel-control {\n  border-radius: 5px; }\n\n.carousel-control.left {\n  background-image: none; }\n\n.carousel-control.right {\n  background-image: none; }\n"

/***/ }),

/***/ "./src/app/main-slide-show/main-slide-show.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var image_service_1 = __webpack_require__("./src/app/services/image.service.ts");
var MainSlideShowComponent = (function () {
    function MainSlideShowComponent(imageService) {
        this.imageService = imageService;
        this.hovered = false;
    }
    MainSlideShowComponent.prototype.ngOnInit = function () {
        // this.imageService.getData().subscribe(res => {
        //   this.flowers = res;
        //   this.flowerUrls = this.getFlowerUrls();
        // });
        this.flowerUrls = [
            "../../assets/images/homepic1.png",
            "../../assets/images/homepic2.png",
            "../../assets/images/homepic3.png"
        ];
    };
    // toggle(){
    //   this.hovered = !this.hovered;
    // }
    MainSlideShowComponent.prototype.getFlowerUrls = function () {
        var flowerUrls = [];
        this.flowers.forEach(function (f) {
            flowerUrls.push("url(" + f.Url + ")");
        });
        return flowerUrls;
    };
    MainSlideShowComponent = __decorate([
        core_1.Component({
            selector: 'main-slide-show',
            template: __webpack_require__("./src/app/main-slide-show/main-slide-show.component.html"),
            styles: [__webpack_require__("./src/app/main-slide-show/main-slide-show.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [image_service_1.ImageService])
    ], MainSlideShowComponent);
    return MainSlideShowComponent;
}());
exports.MainSlideShowComponent = MainSlideShowComponent;


/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns zena-flowers-header\">\n  <div class=\"column\"></div>\n  <div class=\"column is-two-thirds is-paddingless\">\n    <div class=\"columns\">\n      <div class=\"column\">\n        <div class=\"has-text-left\">\n          <span class=\"phone-number\"><i class=\"mdi mdi-phone\"></i>{{phoneNumber}}</span>\n          <a href=\"https://www.facebook.com/zena.ledoux1\"><i class=\"mdi mdi-facebook-box\"></i></a>\n          <br>\n          <span class=\"email-address\"><i class=\"mdi mdi-email\"></i>{{emailAddress}}</span>\n        </div>\n      </div>\n      <div class=\"column is-half\">\n        <div class=\"has-text-center zena-logo-container\">\n          <a routerLink=\"/home\" routerLinkActive=\"active\">\n            <img class=\"zena-logo\" src=\"../../assets/images/Zenaflowersheadercomplete.png\"/>\n          </a>\n        </div>\n      </div>\n      <div class=\"column\">\n        <div class=\"has-text-right\">\n          <span class=\"right-icons\">\n            <!-- <i class=\"mdi mdi-twitter-box\"></i>\n            <i class=\"mdi mdi-github-box\"></i>\n            <i class=\"mdi mdi-instagram\"></i> -->\n          </span>\n        </div>\n      </div>\n    </div>    \n  </div>\n  <div class=\"column\"></div>\n</div> \n<div class=\"columns zena-flowers-nav\">\n  <div class=\"column\"></div>\n  <div class=\"column is-two-thirds is-paddingless\">\n    <div class=\"columns\">\n      <div class=\"column is-hidden-mobile\"></div>\n      <div class=\"column\">\n        <div class=\"columns is-mobile\">\n          <div class=\"column\">\n            <a class=\"navbar-item\" routerLink=\"/home\" routerLinkActive=\"active\">\n              <span class=\"zena-nav-links\">Home</span>\n            </a>\n          </div>\n          <div class=\"column\">\n            <a class=\"navbar-item\" routerLink=\"/about\" routerLinkActive=\"active\">\n              <span class=\"zena-nav-links\">About</span>\n            </a>\n          </div>\n          <div class=\"column\">\n            <a class=\"navbar-item\" routerLink=\"/shop\" routerLinkActive=\"active\">\n              <span class=\"zena-nav-links\">Shop</span>\n            </a>\n          </div>\n          <div class=\"column\">\n            <a class=\"navbar-item\" routerLink=\"/contact\" routerLinkActive=\"active\">\n              <span class=\"zena-nav-links\">Contact</span>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"column is-hidden-mobile\"></div>\n    </div>\n  </div>\n  <div class=\"column\"></div>\n</div> \n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.scss":
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: transparent;\n  font-family: Brush Script Std; }\n\n.zena-flowers-nav {\n  background-color: #c0afc6;\n  margin-bottom: 1em; }\n\n.zena-flowers-header {\n  background-color: #c0afc6; }\n\n.navbar-item {\n  color: whitesmoke;\n  font-size: 2em;\n  font-family: 'Great Vibes', cursive; }\n\na.navbar-item:hover {\n  background-color: #c0afc6;\n  color: lightpink; }\n\n.rbp {\n  padding-bottom: 0; }\n\n.rrp {\n  padding-right: 0; }\n\n.rlp {\n  padding-left: 0; }\n\n.rtp {\n  padding-top: 0; }\n\n.zena-logo-container {\n  width: 100%;\n  background-color: #c0afc6; }\n\n.zena-logo {\n  display: block;\n  margin: auto auto auto auto;\n  height: 12em; }\n\n.phone-number {\n  font-size: 1em; }\n\n.email-address {\n  font-size: 1em; }\n\n.right-icons {\n  font-size: 1.5em; }\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this.phoneNumber = " (573) 808-6568";
        this.emailAddress = " ledouxzena@gmail.com";
    };
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'nav-bar',
            template: __webpack_require__("./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("./src/app/nav-bar/nav-bar.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;


/***/ }),

/***/ "./src/app/services/image.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var ImageService = (function () {
    function ImageService(http) {
        this.http = http;
        this.url = '/api/flowers';
    }
    ImageService.prototype.getData = function () {
        return this.http.get(this.url);
    };
    ImageService.prototype.sendEmail = function (contactInfo) {
        var headers = new http_1.HttpHeaders()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post('/api/send', contactInfo, {
            headers: headers
        })
            .subscribe(function (data) {
            console.log(data);
        });
    };
    ImageService.prototype.loadAll = function () {
        var _this = this;
        this.getData().subscribe(function (data) {
            _this.dataStore.flowers = data;
        }, function (error) { return console.log('Could not load flowers.'); });
    };
    ImageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ImageService);
    return ImageService;
}());
exports.ImageService = ImageService;


/***/ }),

/***/ "./src/app/shop-item/shop-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\n  <div class=\"column\">\n    <div class=\"item-id has-text-centered\">\n      {{flower.Id}}\n      <br><br>\n    </div>\n    <div class=\"shop-item-size\">\n      <img class=\"flower-image-size\" src=\"{{flowerUrl}}\"/>\n    </div>\n    <div>\n      <strong>{{flower.Description}}</strong>\n    </div>\n    <div>\n      <span class=\"flower-dimension\">Dimensions: {{flower.Dimensions}}</span>\n    </div>\n    <div>\n      <span class=\"flower-price\"><strong>Price: </strong>{{flowerPrice}}</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shop-item/shop-item.component.scss":
/***/ (function(module, exports) {

module.exports = ".shop-item-size {\n  margin: auto; }\n\n.flower-image-size {\n  height: auto;\n  width: auto; }\n\n.flower-dimension {\n  font-size: .8em;\n  font-style: italic; }\n\n.flower-price {\n  font-size: .9em; }\n"

/***/ }),

/***/ "./src/app/shop-item/shop-item.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Flower_1 = __webpack_require__("./src/app/Flower.ts");
var ShopItemComponent = (function () {
    function ShopItemComponent() {
    }
    ShopItemComponent.prototype.ngOnInit = function () {
        this.flowerUrl = this.flower.Url;
        this.flowerPrice = this.setPriceDisplay();
    };
    ShopItemComponent.prototype.setPriceDisplay = function () {
        if (this.flower.Price <= 0.00) {
            return "Price Negotiable";
        }
        else {
            return "$" + this.flower.Price.toString();
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Flower_1.Flower)
    ], ShopItemComponent.prototype, "flower", void 0);
    ShopItemComponent = __decorate([
        core_1.Component({
            selector: 'app-shop-item',
            template: __webpack_require__("./src/app/shop-item/shop-item.component.html"),
            styles: [__webpack_require__("./src/app/shop-item/shop-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShopItemComponent);
    return ShopItemComponent;
}());
exports.ShopItemComponent = ShopItemComponent;


/***/ }),

/***/ "./src/app/shop-page/shop-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\" [@shopState]=\"state\">\n    <div class=\"column is-hidden-mobile\"></div>\n    <div class=\"column is-two-thirds add-margin-top\">\n      <div class=\"columns\">\n        <div class=\"column\">\n          <div class=\"has-text-centered shop-page-message\">\n              All flower arrangements are available as is below (unless otherwise stated). \n              Customized flower arrangements can be requested. Prices vary depending on the\n              quality of flowers used, vases/containers that the flower arrangements are in, \n              and the duration of creation.  Live flowers can be used. \n              If you are interested in buying one of the flowers below or want to customize something special\n              and unique to you, contact Zena buy filling out this \n              \n              <a class=\"form-contact-link\" routerLink=\"/contact\" routerLinkActive=\"active\">\n                <span>form</span>\n              </a>\n              <br><br>\n              You can also give Zena a call at 573-555-555\n          </div>\n        </div>\n      </div>\n\n      <div class=\"columns is-multiline\">\n        <div class=\"column is-one-third\" *ngFor=\"let flower of flowers\">\n          <div class=\"has-text-centered box\">\n            <app-shop-item [flower]=\"flower\"></app-shop-item>\n          </div>\n        </div>\n      </div>\n      <div class=\"columns\">\n        <div class=\"column spacer\">\n          \n        </div>\n      </div>\n    </div>      \n    <div class=\"column is-hidden-mobile\"></div>\n</div>"

/***/ }),

/***/ "./src/app/shop-page/shop-page.component.scss":
/***/ (function(module, exports) {

module.exports = ".spacer {\n  min-height: 4em; }\n\n.shop-page-message {\n  font-size: 1.7em;\n  padding: 0 1em 1em 1em;\n  color: white; }\n\na.form-contact-link {\n  color: black; }\n\na.form-contact-link :hover {\n    color: pink; }\n"

/***/ }),

/***/ "./src/app/shop-page/shop-page.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var animations_1 = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var image_service_1 = __webpack_require__("./src/app/services/image.service.ts");
var ShopPageComponent = (function () {
    function ShopPageComponent(imageService) {
        this.imageService = imageService;
    }
    ShopPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imageService.getData().subscribe(function (res) {
            _this.flowers = res;
        });
        this.state = 'active';
    };
    ShopPageComponent = __decorate([
        core_1.Component({
            selector: 'app-shop-page',
            template: __webpack_require__("./src/app/shop-page/shop-page.component.html"),
            styles: [__webpack_require__("./src/app/shop-page/shop-page.component.scss")],
            animations: [
                animations_1.trigger('shopState', [
                    animations_1.transition('void => active', [
                        animations_1.style({ transform: 'translateX(100%) scale(1)' }),
                        animations_1.animate(300)
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [image_service_1.ImageService])
    ], ShopPageComponent);
    return ShopPageComponent;
}());
exports.ShopPageComponent = ShopPageComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map