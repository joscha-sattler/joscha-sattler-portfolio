(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Components/about-me/about-me.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/about-me/about-me.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutMeComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) { return new (t || AboutMeComponent)(); };
AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMeComponent, selectors: [["app-about-me"]], decls: 22, vars: 0, consts: [[1, "titel"], [1, "about-me"], [1, "bild"], ["src", "assets/mesmile.png", "alt", "Portrait"], [1, "inhalt"]], template: function AboutMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Moin, ich bin Joscha Sattler! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Aktuell studiere ich Medieninformatik an der Hochschule Bremen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Das Themengebiet der Medieninformatik ist vielseitig. Von Programmiersprachen wie z.B. Java oder C# bis hin zur Gestaltung und Umsetzung von Webseiten ist alles dabei. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Besonders mitgerissen hat mich die Frontend-Webentwicklung. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Mir gef\u00E4llt, dass es bei der Frontend Webentwicklung darum geht eine Benutzeroberfl\u00E4che zu entwerfen und umzusetzen. Logik und Funktionalit\u00E4t geh\u00F6ren zwar immer dazu, aber grade das visuelle Feedback im Browser, vom geschriebenen Code, ist eine gro\u00DFe Motivation f\u00FCr mich. Es veranlasst mich immer wieder den Blick aufs Detail zu legen und neue/weitere M\u00F6glichkeiten von Layouts zu erkunden und umzusetzen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Daher m\u00F6chte ich meinen weiteren Werdegang auf die Frontend Webentwicklung konzentrieren. Meine bevorzugten Frameworks sind dabei Angular und Vue. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about-me[_ngcontent-%COMP%] {\n  min-height: 75vh;\n  width: 75%;\n  margin: auto;\n  display: grid;\n  padding: 10px;\n  grid-column-gap: 50px;\n  justify-content: center;\n  grid-template-columns: 400px minmax(600px, 750px);\n  grid-auto-rows: auto;\n  grid-template-areas: \"bild inhalt\";\n}\n\n.titel[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.bild[_ngcontent-%COMP%] {\n  grid-area: bild;\n}\n\n.bild[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  border: 2px solid var(--cardBorder);\n  border-radius: 10px;\n}\n\n.inhalt[_ngcontent-%COMP%] {\n  grid-area: inhalt;\n  max-width: 75ch;\n  text-align: justify;\n}\n\n@media (max-width: 950px) {\n  .about-me[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(100px, 200px) minmax(100px, 350px);\n    grid-template-areas: \"titel  titel\" \"bild   bild\" \"inhalt inhalt\";\n  }\n\n  .bild[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n\n  .inhalt[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9hYm91dC1tZS9EOlxcRGVza3RvcFxcV2ViRGV2XFwyLiBBbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXGFib3V0LW1lXFxhYm91dC1tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFFQSxpREFBQTtFQUNBLG9CQUFBO0VBRUEsa0NBQUE7QUNGRjs7QURLQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBREtBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURPQTtFQUNFO0lBQ0UsZ0VBQUE7SUFFQSxpRUFDRTtFQ05KOztFRFdBO0lBQ0UsZ0JBQUE7RUNSRjs7RURVQTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7RUNQRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1tZSB7XHJcbiAgbWluLWhlaWdodDogNzV2aDtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBncmlkO1xyXG5cclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGdyaWQtY29sdW1uLWdhcDogNTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MDBweCBtaW5tYXgoNjAwcHgsIDc1MHB4KTtcclxuICBncmlkLWF1dG8tcm93czogYXV0bztcclxuXHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2JpbGQgaW5oYWx0JztcclxufVxyXG5cclxuLnRpdGVsIHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYmlsZCB7XHJcbiAgZ3JpZC1hcmVhOiBiaWxkO1xyXG59XHJcblxyXG4uYmlsZCBpbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNhcmRCb3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5pbmhhbHQge1xyXG4gIGdyaWQtYXJlYTogaW5oYWx0O1xyXG4gIG1heC13aWR0aDogNzVjaDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4vLyBCZWkga2xlaW5lcmVtIEJpbGRzY2hpcm1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gIC5hYm91dC1tZSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxMDBweCwgMjAwcHgpIG1pbm1heCgxMDBweCwgMzUwcHgpO1xyXG5cclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICd0aXRlbCAgdGl0ZWwnXHJcbiAgICAgICdiaWxkICAgYmlsZCdcclxuICAgICAgJ2luaGFsdCBpbmhhbHQnO1xyXG4gIH1cclxuXHJcbiAgLmJpbGQge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICB9XHJcbiAgLmluaGFsdCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iLCIuYWJvdXQtbWUge1xuICBtaW4taGVpZ2h0OiA3NXZoO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGdyaWQtY29sdW1uLWdhcDogNTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAwcHggbWlubWF4KDYwMHB4LCA3NTBweCk7XG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImJpbGQgaW5oYWx0XCI7XG59XG5cbi50aXRlbCB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJpbGQge1xuICBncmlkLWFyZWE6IGJpbGQ7XG59XG5cbi5iaWxkIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2FyZEJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5pbmhhbHQge1xuICBncmlkLWFyZWE6IGluaGFsdDtcbiAgbWF4LXdpZHRoOiA3NWNoO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgLmFib3V0LW1lIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxMDBweCwgMjAwcHgpIG1pbm1heCgxMDBweCwgMzUwcHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwidGl0ZWwgIHRpdGVsXCIgXCJiaWxkICAgYmlsZFwiIFwiaW5oYWx0IGluaGFsdFwiO1xuICB9XG5cbiAgLmJpbGQge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cblxuICAuaW5oYWx0IHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-me',
                templateUrl: './about-me.component.html',
                styleUrls: ['./about-me.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Components/kontakt/kontakt.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Components/kontakt/kontakt.component.ts ***!
  \*********************************************************/
/*! exports provided: KontaktComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KontaktComponent", function() { return KontaktComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class KontaktComponent {
    constructor() { }
    ngOnInit() {
    }
}
KontaktComponent.ɵfac = function KontaktComponent_Factory(t) { return new (t || KontaktComponent)(); };
KontaktComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KontaktComponent, selectors: [["app-kontakt"]], decls: 4, vars: 0, consts: [[1, "titleKontakt"], [1, "kontaktContainer"]], template: function KontaktComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Kontakt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
    } }, styles: [".titleKontakt[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.kontaktContainer[_ngcontent-%COMP%] {\n  min-height: 75vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9rb250YWt0L0Q6XFxEZXNrdG9wXFxXZWJEZXZcXDIuIEFuZ3VsYXItUHJvamVrdGVcXFBvcnRmb2xpby9zcmNcXGFwcFxcQ29tcG9uZW50c1xca29udGFrdFxca29udGFrdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9rb250YWt0L2tvbnRha3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2tvbnRha3Qva29udGFrdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZUtvbnRha3Qge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5rb250YWt0Q29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiA3NXZoO1xyXG59XHJcbiIsIi50aXRsZUtvbnRha3Qge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5rb250YWt0Q29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogNzV2aDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KontaktComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-kontakt',
                templateUrl: './kontakt.component.html',
                styleUrls: ['./kontakt.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Components/main-page/main-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Components/main-page/main-page.component.ts ***!
  \*************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/nav.service */ "./src/services/nav.service.ts");
/* harmony import */ var _thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../thumbnail/thumbnail.component */ "./src/app/Components/thumbnail/thumbnail.component.ts");
/* harmony import */ var _projekt_galerie_projekt_galerie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projekt-galerie/projekt-galerie.component */ "./src/app/Components/projekt-galerie/projekt-galerie.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../skills/skills.component */ "./src/app/Components/skills/skills.component.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../about-me/about-me.component */ "./src/app/Components/about-me/about-me.component.ts");
/* harmony import */ var _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../kontakt/kontakt.component */ "./src/app/Components/kontakt/kontakt.component.ts");








const _c0 = ["galerie"];
const _c1 = ["skills"];
const _c2 = ["about"];
const _c3 = ["kontakt"];
const _c4 = ["thumb"];
class MainPageComponent {
    constructor(navservice) {
        this.navservice = navservice;
        this.click = this.navservice.getClickEvent1().subscribe(() => {
            this.navProjekte();
        });
        this.click = this.navservice.getClickEvent2().subscribe(() => {
            this.navSkill();
        });
        this.click = this.navservice.getClickEvent3().subscribe(() => {
            this.navAbout();
        });
        this.click = this.navservice.getClickEvent4().subscribe(() => {
            this.navKontakt();
        });
        this.click = this.navservice.getClickEvent5().subscribe(() => {
            this.navThumb();
        });
    }
    navThumb() {
        this.thumb.nativeElement.scrollIntoView({
            block: 'start',
        });
    }
    navProjekte() {
        this.galerie.nativeElement.scrollIntoView({
            block: 'start',
        });
    }
    navSkill() {
        this.skills.nativeElement.scrollIntoView({
            block: 'start',
        });
    }
    navAbout() {
        this.about.nativeElement.scrollIntoView({
            block: 'start',
        });
    }
    navKontakt() {
        this.kontakt.nativeElement.scrollIntoView({
            block: 'start',
        });
    }
    ngOnInit() { }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_nav_service__WEBPACK_IMPORTED_MODULE_1__["NavService"])); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], viewQuery: function MainPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.galerie = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.skills = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.about = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.kontakt = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.thumb = _t.first);
    } }, decls: 19, vars: 0, consts: [[1, "scroll"], ["thumb", ""], ["galerie", ""], ["skills", ""], ["about", ""], ["kontakt", ""]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-thumbnail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-projekt-galerie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-about-me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-kontakt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_2__["ThumbnailComponent"], _projekt_galerie_projekt_galerie_component__WEBPACK_IMPORTED_MODULE_3__["ProjektGalerieComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__["AboutMeComponent"], _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_6__["KontaktComponent"]], styles: [".scroll[_ngcontent-%COMP%] {\n  scroll-margin-top: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9tYWluLXBhZ2UvRDpcXERlc2t0b3BcXFdlYkRldlxcMi4gQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxtYWluLXBhZ2VcXG1haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwge1xyXG4gIHNjcm9sbC1tYXJnaW4tdG9wOiAxMHJlbTtcclxufVxyXG4iLCIuc2Nyb2xsIHtcbiAgc2Nyb2xsLW1hcmdpbi10b3A6IDEwcmVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.scss'],
            }]
    }], function () { return [{ type: src_services_nav_service__WEBPACK_IMPORTED_MODULE_1__["NavService"] }]; }, { galerie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['galerie']
        }], skills: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['skills']
        }], about: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['about']
        }], kontakt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['kontakt']
        }], thumb: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['thumb']
        }] }); })();


/***/ }),

/***/ "./src/app/Components/main-page/navigation/navigation.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Components/main-page/navigation/navigation.component.ts ***!
  \*************************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/modeToggle.service */ "./src/services/modeToggle.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_services_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/nav.service */ "./src/services/nav.service.ts");








class NavigationComponent {
    constructor(document, themeToggleService, router, navservice) {
        this.document = document;
        this.themeToggleService = themeToggleService;
        this.router = router;
        this.navservice = navservice;
    }
    ngOnInit() {
        // Passt das Icon vom kleinen Nav farblich an das Theme an
        if (!this.themeToggleService.getDarkTheme()) {
            document.getElementById('navButton').classList.add('navbar-dark');
        }
        if (this.themeToggleService.getDarkTheme()) {
            document.getElementById('navButton').classList.add('navbar-light');
        }
    }
    toggleTheme() {
        this.themeToggleService.toggle();
        // Passt das Icon vom kleinen Nav farblich an das Theme an
        if (!this.themeToggleService.getDarkTheme() &&
            (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90)) {
            document.getElementById('navButton').classList.remove('navbar-dark');
            document.getElementById('navButton').classList.add('navbar-light');
        }
        else if (this.themeToggleService.getDarkTheme() &&
            (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90)) {
            document.getElementById('navButton').classList.remove('navbar-light');
            document.getElementById('navButton').classList.add('navbar-dark');
        }
        else if (!this.themeToggleService.getDarkTheme() &&
            (document.body.scrollTop < 90 || document.documentElement.scrollTop < 90)) {
            document.getElementById('navButton').classList.add('navbar-dark');
            document.getElementById('navButton').classList.remove('navbar-light');
        }
        else if (this.themeToggleService.getDarkTheme() &&
            (document.body.scrollTop < 90 || document.documentElement.scrollTop < 90)) {
            document.getElementById('navButton').classList.add('navbar-light');
            document.getElementById('navButton').classList.remove('navbar-dark');
        }
    }
    // Damit das Nav einen Hintergrund bekommt, wenn man mehr als 75 Einheiten Scrollt
    onWindowScroll() {
        if (document.body.scrollTop > 90 ||
            document.documentElement.scrollTop > 90) {
            // Passt das Icon vom kleinen Nav farblich an das Theme an
            if (!this.themeToggleService.getDarkTheme()) {
                document.getElementById('navButton').classList.remove('navbar-dark');
                document.getElementById('navButton').classList.add('navbar-light');
            }
            else if (this.themeToggleService.getDarkTheme()) {
                document.getElementById('navButton').classList.remove('navbar-light');
                document.getElementById('navButton').classList.add('navbar-dark');
            }
            // Fügt den Hintergrund des Nav hinzu, falls um 90 gescrollt wurde
            document.getElementById('bgNav').classList.add('bgNav');
            // passt die Schriftfarbe der Nav-Links an das Theme an
            const matches = document.getElementsByClassName('nav-link');
            for (let i = 0; i < matches.length; i++) {
                matches.item(i).classList.add('bgLink');
            }
            // passt den Border-Top der Nav-Links farblich ans Theme an
            const matches2 = document.getElementsByClassName('bt');
            for (let i = 0; i < matches2.length; i++) {
                matches2.item(i).classList.remove('navTopBorder');
                matches2.item(i).classList.add('navTopBorderReverse');
            }
        }
        else {
            // Passt das Icon vom kleinen Nav farblich an das Theme an
            if (!this.themeToggleService.getDarkTheme()) {
                document.getElementById('navButton').classList.add('navbar-dark');
                document.getElementById('navButton').classList.remove('navbar-light');
            }
            if (this.themeToggleService.getDarkTheme()) {
                document.getElementById('navButton').classList.add('navbar-light');
                document.getElementById('navButton').classList.remove('navbar-dark');
            }
            // Entfernt den Hintergrund des Nav, falls nicht um 90 gescrollt wurde
            document.getElementById('bgNav').classList.remove('bgNav');
            // passt die Schriftfarbe der Nav-Links an das Theme an
            const matches = document.getElementsByClassName('nav-link');
            for (let i = 0; i < matches.length; i++) {
                matches.item(i).classList.remove('bgLink');
            }
            // passt den Border-Top der Nav-Links farblich ans Theme an
            const matches2 = document.getElementsByClassName('bt');
            for (let i = 0; i < matches2.length; i++) {
                matches2.item(i).classList.add('navTopBorder');
                matches2.item(i).classList.remove('navTopBorderReverse');
            }
        }
    }
    // ScrollTo-Funktionen
    onScrollToStart() {
        this.router.navigate(['/Startseite']);
        setTimeout(() => {
            this.navservice.sendClickEvent5();
        }, 10);
    }
    onScrollToProjekte() {
        this.router.navigate(['/Startseite']);
        setTimeout(() => {
            this.navservice.sendClickEvent1();
        });
    }
    onScrollToSkills() {
        this.router.navigate(['/Startseite']);
        setTimeout(() => {
            this.navservice.sendClickEvent2();
        });
    }
    onScrollToAbout() {
        this.router.navigate(['/Startseite']);
        setTimeout(() => {
            this.navservice.sendClickEvent3();
        });
    }
    onScrollToKontakt() {
        this.router.navigate(['/Startseite']);
        setTimeout(() => {
            this.navservice.sendClickEvent4();
        });
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_2__["ModeToggleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], hostBindings: function NavigationComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function NavigationComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 33, vars: 0, consts: [["id", "bgNav", 1, "navbar", "navbar-expand-lg", "ganzeNav", "sticky-top"], ["id", "navButton", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", "data-target", "#navbarSupportedContent", "data-toggle", "collapse", "type", "button", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "fas", "fa-house-user"], [1, "nav-item", "navTopBorder", "bt"], [1, "fas", "fa-diagnoses"], [1, "fas", "fa-tv"], [1, "fas", "fa-user-circle"], [1, "fas", "fa-address-card"], [1, "nav-link"], [1, "fas", "fa-adjust", 3, "click"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_6_listener() { return ctx.onScrollToStart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Start ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_11_listener() { return ctx.onScrollToProjekte(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Projekte ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_16_listener() { return ctx.onScrollToSkills(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Skills ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_21_listener() { return ctx.onScrollToAbout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_26_listener() { return ctx.onScrollToKontakt(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Kontakt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_i_click_32_listener() { return ctx.toggleTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".ganzeNav[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n}\n.bgNav[_ngcontent-%COMP%] {\n  background-color: var(--navBackground);\n  border-bottom: 1px solid black;\n}\n\n.navbar-nav[_ngcontent-%COMP%] {\n  margin-right: 5%;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-left: 35px;\n  color: var(--text);\n}\n.nav-link[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: var(--hover);\n}\n.bgLink[_ngcontent-%COMP%] {\n  color: var(--textreverse);\n}\n.bgLink[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: var(--hoverreverse);\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  font-size: 2.6rem;\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.fa-adjust[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.navTopBorder[_ngcontent-%COMP%] {\n  border: none;\n}\n.navTopBorderReverse[_ngcontent-%COMP%] {\n  border: none;\n}\n@media (max-width: 991px) {\n  .navTopBorder[_ngcontent-%COMP%] {\n    border-top: 2px solid var(--cardBorder);\n  }\n\n  .navTopBorderReverse[_ngcontent-%COMP%] {\n    border-top: 2px solid var(--cardBorderReverse);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9tYWluLXBhZ2UvbmF2aWdhdGlvbi9EOlxcRGVza3RvcFxcV2ViRGV2XFwyLiBBbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXG1haW4tcGFnZVxcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9tYWluLXBhZ2UvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDQ0Y7QURFQTtFQUNFLHNDQUFBO0VBQ0EsOEJBQUE7QUNDRjtBREVBLHlDQUFBO0FBQ0E7RUFDRSxnQkFBQTtBQ0NGO0FER0EsYUFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREVFO0VBQ0UsbUJBQUE7QUNBSjtBRElBO0VBQ0UseUJBQUE7QUNERjtBREdFO0VBQ0UsMEJBQUE7QUNESjtBREtBO0VBQ0UsaUJBQUE7QUNGRjtBRE1BO0VBQ0UsZUFBQTtBQ0hGO0FETUE7RUFDRSxlQUFBO0FDSEY7QURNQSxjQUFBO0FBRUE7RUFDRSxZQUFBO0FDSkY7QURNQTtFQUNFLFlBQUE7QUNIRjtBRE1BO0VBQ0U7SUFDRSx1Q0FBQTtFQ0hGOztFREtBO0lBQ0UsOENBQUE7RUNGRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9tYWluLXBhZ2UvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogR2FuemUgTmF2ICovXHJcbi5nYW56ZU5hdiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJnTmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZCYWNrZ3JvdW5kKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi8qIERlciBSYWhtZW4sIHdvIGRpZSBMaW5rcyBkcmlubmUgc2luZCAqL1xyXG4ubmF2YmFyLW5hdiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuXHJcbi8qIGRlciBMaW5rICovXHJcbi5uYXYtbGluayB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ob3Zlcik7XHJcbiAgfVxyXG59XHJcblxyXG4uYmdMaW5rIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dHJldmVyc2UpO1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWhvdmVycmV2ZXJzZSk7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBmb250LXNpemU6IDIuNnJlbTtcclxufVxyXG5cclxuXHJcbmE6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZhLWFkanVzdDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBuYXYgQm9yZGVyKi9cclxuXHJcbi5uYXZUb3BCb3JkZXIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4ubmF2VG9wQm9yZGVyUmV2ZXJzZSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAubmF2VG9wQm9yZGVyIHtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyKTtcclxuICB9XHJcbiAgLm5hdlRvcEJvcmRlclJldmVyc2Uge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWNhcmRCb3JkZXJSZXZlcnNlKTtcclxuICB9XHJcbn1cclxuIiwiLyogR2FuemUgTmF2ICovXG4uZ2FuemVOYXYge1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJnTmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2QmFja2dyb3VuZCk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuLyogRGVyIFJhaG1lbiwgd28gZGllIExpbmtzIGRyaW5uZSBzaW5kICovXG4ubmF2YmFyLW5hdiB7XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG5cbi8qIGRlciBMaW5rICovXG4ubmF2LWxpbmsge1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG4ubmF2LWxpbmsgOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuLmJnTGluayB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0cmV2ZXJzZSk7XG59XG4uYmdMaW5rIDpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1ob3ZlcnJldmVyc2UpO1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgZm9udC1zaXplOiAyLjZyZW07XG59XG5cbmE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYS1hZGp1c3Q6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIG5hdiBCb3JkZXIqL1xuLm5hdlRvcEJvcmRlciB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLm5hdlRvcEJvcmRlclJldmVyc2Uge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubmF2VG9wQm9yZGVyIHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tY2FyZEJvcmRlcik7XG4gIH1cblxuICAubmF2VG9wQm9yZGVyUmV2ZXJzZSB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWNhcmRCb3JkZXJSZXZlcnNlKTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.scss'],
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }, { type: src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_2__["ModeToggleService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_services_nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:scroll', []]
        }] }); })();


/***/ }),

/***/ "./src/app/Components/projekt-galerie/projekt-galerie.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Components/projekt-galerie/projekt-galerie.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProjektGalerieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjektGalerieComponent", function() { return ProjektGalerieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ProjektGalerieComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjektGalerieComponent.ɵfac = function ProjektGalerieComponent_Factory(t) { return new (t || ProjektGalerieComponent)(); };
ProjektGalerieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjektGalerieComponent, selectors: [["app-projekt-galerie"]], decls: 24, vars: 0, consts: [[1, "titleProjekte"], [1, "parent"], ["routerLink", "/Webentwicklung", 1, "figure"], ["src", "assets/webdev.jpg", "alt", "Webentwicklung"], ["routerLink", "/Eshop", 1, "figure"], ["src", "assets/eshop.jpg", "alt", "Eshop"], ["routerLink", "/SmartFactory", 1, "figure"], ["src", "assets/smartfactory.jpg", "alt", "Industrie 4.0"], ["routerLink", "/Design", 1, "figure"], ["src", "assets/design.jpg", "alt", "Design"], ["routerLink", "/Games", 1, "figure"], ["src", "assets/games.jpg", "alt", "Games"]], template: function ProjektGalerieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Meine Projekte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Webentwicklung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "figure", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Eshop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "figure", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Industrie 4.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "figure", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "figure", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".titleProjekte[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n.parent[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  grid-gap: 20px;\n  grid-auto-flow: row;\n  max-width: 1000px;\n  margin: auto;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 300px));\n}\n.parent[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border: 1px solid var(--boxShadow);\n  border-radius: 5px;\n}\n.figure[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 4px 3px var(--boxShadow);\n  cursor: pointer;\n  color: var(--hover);\n}\n.figure[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 2.6rem;\n  text-align: center;\n  background-color: var(--cardBack);\n  color: var(--cardBackText);\n  border: 2px solid var(--cardBorder);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0LWdhbGVyaWUvRDpcXERlc2t0b3BcXFdlYkRldlxcMi4gQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxwcm9qZWt0LWdhbGVyaWVcXHByb2pla3QtZ2FsZXJpZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0LWdhbGVyaWUvcHJvamVrdC1nYWxlcmllLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFBO0FBRUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7RUFDQSxZQUFBO0VBRUEsNkRBQUE7QUNGRjtBREtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxrQ0FBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDSEY7QURNQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtFQUVBLG1DQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3QtZ2FsZXJpZS9wcm9qZWt0LWdhbGVyaWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCaWxkZXItR2FsZXJpZSAqL1xyXG5cclxuLnRpdGxlUHJvamVrdGUge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYXJlbnQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ3JpZC1nYXA6IDIwcHg7XHJcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxuXHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAzMDBweCkpO1xyXG59XHJcblxyXG4ucGFyZW50IGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3hTaGFkb3cpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmZpZ3VyZTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDRweCAzcHggdmFyKC0tYm94U2hhZG93KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLWhvdmVyKTtcclxufVxyXG5cclxuLmZpZ3VyZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgZm9udC1zaXplOiAyLjZyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmRCYWNrKTtcclxuICBjb2xvcjogdmFyKC0tY2FyZEJhY2tUZXh0KTtcclxuXHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2FyZEJvcmRlcik7XHJcbn1cclxuIiwiLyogQmlsZGVyLUdhbGVyaWUgKi9cbi50aXRsZVByb2pla3RlIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGFyZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdyaWQtZ2FwOiAyMHB4O1xuICBncmlkLWF1dG8tZmxvdzogcm93O1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAzMDBweCkpO1xufVxuXG4ucGFyZW50IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJveFNoYWRvdyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmZpZ3VyZTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggM3B4IHZhcigtLWJveFNoYWRvdyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuLmZpZ3VyZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgZm9udC1zaXplOiAyLjZyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZEJhY2spO1xuICBjb2xvcjogdmFyKC0tY2FyZEJhY2tUZXh0KTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2FyZEJvcmRlcik7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjektGalerieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projekt-galerie',
                templateUrl: './projekt-galerie.component.html',
                styleUrls: ['./projekt-galerie.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Components/projekte/design/aftereffect/aftereffect.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/Components/projekte/design/aftereffect/aftereffect.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AftereffectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AftereffectComponent", function() { return AftereffectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AftereffectComponent {
    constructor() { }
    ngOnInit() {
    }
}
AftereffectComponent.ɵfac = function AftereffectComponent_Factory(t) { return new (t || AftereffectComponent)(); };
AftereffectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AftereffectComponent, selectors: [["app-aftereffect"]], decls: 6, vars: 0, consts: [[1, "titleDesign"], [1, "all"], [1, "video"], ["src", "https://www.youtube.com/embed/nkHs4765b9g", "allowfullscreen", ""]], template: function AftereffectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Motion Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "iframe", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".titleDesign[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.all[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  margin-bottom: 50px;\n}\n\n.all[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n.all[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 75vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9kZXNpZ24vYWZ0ZXJlZmZlY3QvRDpcXERlc2t0b3BcXFdlYkRldlxcMi4gQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxwcm9qZWt0ZVxcZGVzaWduXFxhZnRlcmVmZmVjdFxcYWZ0ZXJlZmZlY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZGVzaWduL2FmdGVyZWZmZWN0L2FmdGVyZWZmZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FESUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0RGOztBREVFO0VBQ0UsVUFBQTtBQ0FKOztBRENJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZGVzaWduL2FmdGVyZWZmZWN0L2FmdGVyZWZmZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlRGVzaWduIHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vLyBWaWRlb1xyXG5cclxuLmFsbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAudmlkZW8ge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGlmcmFtZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDc1dmg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi50aXRsZURlc2lnbiB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFsbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLmFsbCAudmlkZW8ge1xuICB3aWR0aDogNzUlO1xufVxuLmFsbCAudmlkZW8gaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzV2aDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AftereffectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aftereffect',
                templateUrl: './aftereffect.component.html',
                styleUrls: ['./aftereffect.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Components/projekte/design/design.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Components/projekte/design/design.component.ts ***!
  \****************************************************************/
/*! exports provided: DesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignComponent", function() { return DesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _photoshop_photoshop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photoshop/photoshop.component */ "./src/app/Components/projekte/design/photoshop/photoshop.component.ts");
/* harmony import */ var _aftereffect_aftereffect_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aftereffect/aftereffect.component */ "./src/app/Components/projekte/design/aftereffect/aftereffect.component.ts");





const _c0 = ["goto"];
function DesignComponent_app_photoshop_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-photoshop");
} }
function DesignComponent_app_aftereffect_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-aftereffect");
} }
function DesignComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "W\u00E4hle ein Projekt aus!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DesignComponent {
    constructor() {
        this.foto = false;
        this.video = false;
    }
    ngOnInit() { }
    toggleFoto() {
        this.video = false;
        this.foto = true;
        document.getElementById('foto').classList.add('figureClick');
        document.getElementById('video').classList.remove('figureClick');
        setTimeout(() => {
            this.goto.nativeElement.scrollIntoView({
                block: 'start',
            });
        }, 50);
    }
    toggleVideo() {
        this.foto = false;
        this.video = true;
        document.getElementById('foto').classList.remove('figureClick');
        document.getElementById('video').classList.add('figureClick');
        setTimeout(() => {
            this.goto.nativeElement.scrollIntoView({
                block: 'start',
            });
        }, 50);
    }
}
DesignComponent.ɵfac = function DesignComponent_Factory(t) { return new (t || DesignComponent)(); };
DesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DesignComponent, selectors: [["app-design"]], viewQuery: function DesignComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.goto = _t.first);
    } }, decls: 21, vars: 3, consts: [[1, "titleDesign"], [1, "designContainer"], ["id", "foto", 1, "figure", 3, "click"], ["src", "assets/ps2.png", "alt", "Blog"], ["id", "video", 1, "figure", 3, "click"], ["src", "assets/motiondesign.jpg", "alt", "Verein"], [1, "projekte"], ["goto", ""], [4, "ngIf"], ["class", "pick", 4, "ngIf"], [1, "pick"]], template: function DesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Projekte ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Design ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesignComponent_Template_figure_click_6_listener() { return ctx.toggleFoto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Photoshop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "figure", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesignComponent_Template_figure_click_10_listener() { return ctx.toggleVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Motion Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DesignComponent_app_photoshop_17_Template, 1, 0, "app-photoshop", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DesignComponent_app_aftereffect_19_Template, 1, 0, "app-aftereffect", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DesignComponent_div_20_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.foto);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.video);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.foto && !ctx.video);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _photoshop_photoshop_component__WEBPACK_IMPORTED_MODULE_2__["PhotoshopComponent"], _aftereffect_aftereffect_component__WEBPACK_IMPORTED_MODULE_3__["AftereffectComponent"]], styles: [".projekte[_ngcontent-%COMP%] {\n  scroll-margin-top: 10rem;\n}\n\n.titleDesign[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.designContainer[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  grid-gap: 20px;\n  grid-auto-flow: row;\n  margin: auto;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 300px));\n}\n\n.designContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 1px solid var(--boxShadow);\n  border-radius: 5px;\n}\n\n.pick[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 25px;\n  text-align: center;\n}\n\n.figure[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 4px 3px var(--boxShadow);\n  cursor: pointer;\n  color: var(--hover);\n}\n\n.figure[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 2.6rem;\n  text-align: center;\n  background-color: var(--cardBack);\n  color: var(--cardBackText);\n  border: 2px solid var(--cardBorder);\n}\n\n.figureClick[_ngcontent-%COMP%] {\n  box-shadow: 0 0 4px 3px var(--hover);\n  border: none;\n  cursor: pointer;\n}\n\n.video[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90%;\n  margin: auto;\n  padding-bottom: 56.25%;\n  height: 0;\n}\n\n.video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 75%;\n  height: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9kZXNpZ24vRDpcXERlc2t0b3BcXFdlYkRldlxcMi4gQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxwcm9qZWt0ZVxcZGVzaWduXFxkZXNpZ24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZGVzaWduL2Rlc2lnbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSw2REFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBRUEsa0NBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0VBRUEsbUNBQUE7QUNGRjs7QURLQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNGRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9kZXNpZ24vZGVzaWduLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2pla3RlIHtcclxuICBzY3JvbGwtbWFyZ2luLXRvcDogMTByZW07XHJcbn1cclxuXHJcbi50aXRsZURlc2lnbiB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRlc2lnbkNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBncmlkLWdhcDogMjBweDtcclxuICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMzAwcHgpKTtcclxufVxyXG5cclxuLmRlc2lnbkNvbnRhaW5lciBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcblxyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJveFNoYWRvdyk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ucGljayB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZpZ3VyZTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDRweCAzcHggdmFyKC0tYm94U2hhZG93KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLWhvdmVyKTtcclxufVxyXG5cclxuLmZpZ3VyZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgZm9udC1zaXplOiAyLjZyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmRCYWNrKTtcclxuICBjb2xvcjogdmFyKC0tY2FyZEJhY2tUZXh0KTtcclxuXHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2FyZEJvcmRlcik7XHJcbn1cclxuXHJcbi5maWd1cmVDbGljayB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDRweCAzcHggdmFyKC0taG92ZXIpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8vIFZpZGVvXHJcblxyXG4udmlkZW8ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxuLnZpZGVvIGlmcmFtZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgaGVpZ2h0OiA3NSU7XHJcbn1cclxuIiwiLnByb2pla3RlIHtcbiAgc2Nyb2xsLW1hcmdpbi10b3A6IDEwcmVtO1xufVxuXG4udGl0bGVEZXNpZ24ge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZXNpZ25Db250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ3JpZC1nYXA6IDIwcHg7XG4gIGdyaWQtYXV0by1mbG93OiByb3c7XG4gIG1hcmdpbjogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMzAwcHgpKTtcbn1cblxuLmRlc2lnbkNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJveFNoYWRvdyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnBpY2sge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5maWd1cmU6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgNHB4IDNweCB2YXIoLS1ib3hTaGFkb3cpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1ob3Zlcik7XG59XG5cbi5maWd1cmUge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMi42cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmRCYWNrKTtcbiAgY29sb3I6IHZhcigtLWNhcmRCYWNrVGV4dCk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNhcmRCb3JkZXIpO1xufVxuXG4uZmlndXJlQ2xpY2sge1xuICBib3gtc2hhZG93OiAwIDAgNHB4IDNweCB2YXIoLS1ob3Zlcik7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udmlkZW8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDU2LjI1JTtcbiAgaGVpZ2h0OiAwO1xufVxuXG4udmlkZW8gaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogNzUlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DesignComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-design',
                templateUrl: './design.component.html',
                styleUrls: ['./design.component.scss'],
            }]
    }], function () { return []; }, { goto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['goto']
        }] }); })();


/***/ }),

/***/ "./src/app/Components/projekte/design/photoshop/photoshop.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/projekte/design/photoshop/photoshop.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PhotoshopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoshopComponent", function() { return PhotoshopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pslider_pslider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pslider/pslider.component */ "./src/app/Components/projekte/design/photoshop/pslider/pslider.component.ts");



class PhotoshopComponent {
    constructor() { }
    ngOnInit() {
    }
}
PhotoshopComponent.ɵfac = function PhotoshopComponent_Factory(t) { return new (t || PhotoshopComponent)(); };
PhotoshopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotoshopComponent, selectors: [["app-photoshop"]], decls: 5, vars: 0, consts: [[1, "titleDesign"], [1, "slider"]], template: function PhotoshopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Photoshop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-pslider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_pslider_pslider_component__WEBPACK_IMPORTED_MODULE_1__["PsliderComponent"]], styles: [".titleDesign[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9kZXNpZ24vcGhvdG9zaG9wL0Q6XFxEZXNrdG9wXFxXZWJEZXZcXDIuIEFuZ3VsYXItUHJvamVrdGVcXFBvcnRmb2xpby9zcmNcXGFwcFxcQ29tcG9uZW50c1xccHJvamVrdGVcXGRlc2lnblxccGhvdG9zaG9wXFxwaG90b3Nob3AuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZGVzaWduL3Bob3Rvc2hvcC9waG90b3Nob3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZGVzaWduL3Bob3Rvc2hvcC9waG90b3Nob3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVEZXNpZ24ge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiLnRpdGxlRGVzaWduIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoshopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-photoshop',
                templateUrl: './photoshop.component.html',
                styleUrls: ['./photoshop.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Components/projekte/design/photoshop/pslider/pslider.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/Components/projekte/design/photoshop/pslider/pslider.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PsliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsliderComponent", function() { return PsliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = ["slides"];
function PsliderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bild_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bild_r1.nummer + 1, " / 8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", bild_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", bild_r1.titel);
} }
class PsliderComponent {
    constructor() {
        // Bilder-Galerie zum Eshop
        this.bilder = [
            {
                img: 'assets/design/b1+b2.jpg',
                titel: 'Aufgabe: Schafskopf auf Pinguin setzen',
                nummer: 0,
            },
            { img: 'assets/design/b3.jpg', titel: 'Resultat', nummer: 1 },
            {
                img: 'assets/design/b4+b5.jpg',
                titel: 'Aufgabe: Meer begradigen, Segelboot in den Hintergrund ',
                nummer: 2,
            },
            { img: 'assets/design/b6.png', titel: 'Resultat', nummer: 3 },
            {
                img: 'assets/design/b7.png',
                titel: 'Aufgabe: Redesign eines Logo (VFL-Wolfsburg)',
                nummer: 4,
            },
            { img: 'assets/design/b8.png', titel: 'Resultat', nummer: 5 },
            {
                img: 'assets/design/b9.png',
                titel: 'Redesign Saturn Webseite',
                nummer: 6,
            },
            { img: 'assets/design/b10.png', titel: 'Resultat', nummer: 7 },
        ];
        // Slider-Einstellungen
        this.slideIndex = 1;
    }
    plusSlides(n) {
        this.showSlides((this.slideIndex += n));
    }
    currentSlide(n) {
        this.showSlides((this.slideIndex = n));
    }
    showSlides(n) {
        let i;
        const slides = document.getElementsByClassName('mySlides');
        const captionText = document.getElementById('caption');
        if (n > slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[this.slideIndex - 1].style.display = 'block';
        captionText.innerHTML = this.bilder[this.slideIndex - 1].titel;
    }
    //  onInit
    ngOnInit() { }
    ngAfterViewInit() {
        this.showSlides(this.slideIndex);
    }
}
PsliderComponent.ɵfac = function PsliderComponent_Factory(t) { return new (t || PsliderComponent)(); };
PsliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PsliderComponent, selectors: [["app-pslider"]], viewQuery: function PsliderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slides = _t.first);
    } }, decls: 8, vars: 1, consts: [[1, "container"], ["class", "mySlides", 4, "ngFor", "ngForOf"], [1, "prev", 3, "click"], [1, "next", 3, "click"], [1, "caption-container"], ["id", "caption"], [1, "mySlides"], ["slides", ""], [1, "numbertext"], [2, "max-height", "1000px", "object-fit", "contain", 3, "src", "alt"]], template: function PsliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PsliderComponent_div_1_Template, 5, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PsliderComponent_Template_a_click_2_listener() { return ctx.plusSlides(0 - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u276E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PsliderComponent_Template_a_click_4_listener() { return ctx.plusSlides(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u276F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bilder);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 75%;\n  margin-bottom: 100px;\n}\n\n\n\n.mySlides[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n}\n\n.mySlides[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 2px solid var(--cardBorder);\n}\n\n\n\n.cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -50px;\n  color: white;\n  font-weight: bold;\n  font-size: 2rem;\n  border-radius: 0 3px 3px 0;\n  -moz-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n\n\n\n.next[_ngcontent-%COMP%] {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n\n\n.numbertext[_ngcontent-%COMP%] {\n  color: var(--text);\n  font-size: 1.2rem;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n}\n\n\n\n.caption-container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n  background-color: #222;\n  color: white;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9kZXNpZ24vcGhvdG9zaG9wL3BzbGlkZXIvRDpcXERlc2t0b3BcXFdlYkRldlxcMi4gQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxwcm9qZWt0ZVxcZGVzaWduXFxwaG90b3Nob3BcXHBzbGlkZXJcXHBzbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZGVzaWduL3Bob3Rvc2hvcC9wc2xpZGVyL3BzbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBLGdGQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQSwrQkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENFO0VBQ0UsYUFBQTtFQUNBLG1DQUFBO0FDQ0o7O0FER0EsMERBQUE7O0FBQ0E7RUFDRSxlQUFBO0FDQUY7O0FER0EsNEJBQUE7O0FBRUE7O0VBRUUsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtPQUFBLGlCQUFBO0VBQ0EseUJBQUE7QUNERjs7QURJQSw0Q0FBQTs7QUFDQTtFQUNFLFFBQUE7RUFDQSwwQkFBQTtBQ0RGOztBRElBOztFQUVFLG9DQUFBO0FDREY7O0FESUEsMEJBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7QUNERjs7QURJQSw2QkFBQTs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9kZXNpZ24vcGhvdG9zaG9wL3BzbGlkZXIvcHNsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIFBvc2l0aW9uIHRoZSBpbWFnZSBjb250YWluZXIgKG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgbGVmdCBhbmQgcmlnaHQgYXJyb3dzKSAqL1xyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuLyogSGlkZSB0aGUgaW1hZ2VzIGJ5IGRlZmF1bHQgKi9cclxuLm15U2xpZGVzIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyKTtcclxuICB9XHJcbn1cclxuXHJcbi8qIEFkZCBhIHBvaW50ZXIgd2hlbiBob3ZlcmluZyBvdmVyIHRoZSB0aHVtYm5haWwgaW1hZ2VzICovXHJcbi5jdXJzb3Ige1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogTmV4dCAmIHByZXZpb3VzIGJ1dHRvbnMgKi9cclxuXHJcbi5wcmV2LFxyXG4ubmV4dCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLyogUG9zaXRpb24gdGhlIFwibmV4dCBidXR0b25cIiB0byB0aGUgcmlnaHQgKi9cclxuLm5leHQge1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xyXG59XHJcblxyXG4ucHJldixcclxuLm5leHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxufVxyXG5cclxuLyogTnVtYmVyIHRleHQgKDEvMyBldGMpICovXHJcbi5udW1iZXJ0ZXh0IHtcclxuICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLyogQ29udGFpbmVyIGZvciBpbWFnZSB0ZXh0ICovXHJcbi5jYXB0aW9uLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIFBvc2l0aW9uIHRoZSBpbWFnZSBjb250YWluZXIgKG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgbGVmdCBhbmQgcmlnaHQgYXJyb3dzKSAqL1xuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi8qIEhpZGUgdGhlIGltYWdlcyBieSBkZWZhdWx0ICovXG4ubXlTbGlkZXMge1xuICBkaXNwbGF5OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubXlTbGlkZXMgaW1nIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2FyZEJvcmRlcik7XG59XG5cbi8qIEFkZCBhIHBvaW50ZXIgd2hlbiBob3ZlcmluZyBvdmVyIHRoZSB0aHVtYm5haWwgaW1hZ2VzICovXG4uY3Vyc29yIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBOZXh0ICYgcHJldmlvdXMgYnV0dG9ucyAqL1xuLnByZXYsXG4ubmV4dCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLyogUG9zaXRpb24gdGhlIFwibmV4dCBidXR0b25cIiB0byB0aGUgcmlnaHQgKi9cbi5uZXh0IHtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xufVxuXG4ucHJldixcbi5uZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuXG4vKiBOdW1iZXIgdGV4dCAoMS8zIGV0YykgKi9cbi5udW1iZXJ0ZXh0IHtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuXG4vKiBDb250YWluZXIgZm9yIGltYWdlIHRleHQgKi9cbi5jYXB0aW9uLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PsliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pslider',
                templateUrl: './pslider.component.html',
                styleUrls: ['./pslider.component.scss'],
            }]
    }], null, { slides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['slides']
        }] }); })();


/***/ }),

/***/ "./src/app/Components/projekte/eshop/eshop.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Components/projekte/eshop/eshop.component.ts ***!
  \**************************************************************/
/*! exports provided: EshopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EshopComponent", function() { return EshopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/modeToggle.service */ "./src/services/modeToggle.service.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/Components/projekte/eshop/slider/slider.component.ts");




class EshopComponent {
    constructor(toggle) {
        this.toggle = toggle;
    }
    ngOnInit() { }
}
EshopComponent.ɵfac = function EshopComponent_Factory(t) { return new (t || EshopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"])); };
EshopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EshopComponent, selectors: [["app-eshop"]], decls: 7, vars: 1, consts: [[1, "titleEshop"], ["href", "https://github.com/joscha-sattler/Eshop-Java", "target", "_blank"], ["alt", "GitHub", 3, "src"], [1, "slider"]], template: function EshopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Eshop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toggle.gitHub, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_slider_slider_component__WEBPACK_IMPORTED_MODULE_2__["SliderComponent"]], styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 5.5rem;\n}\n\n.titleEshop[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.titleEshop[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  height: 75px;\n}\n\n.titleEshop[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.titel[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.eshopContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 75%;\n  margin: 50px auto 30px;\n  justify-content: center;\n  align-items: center;\n}\n\n.bilder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  grid-column-gap: 50px;\n  justify-content: center;\n  align-items: center;\n  background-image: url(\"https://c.wallhere.com/photos/87/c7/black_background_lines_minimalism_abstract_square_blue-1925925.jpg!d\");\n  background-size: cover;\n  background-attachment: fixed;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nfigure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.bilder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nfigcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: white;\n}\n\n.was[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.text[_ngcontent-%COMP%] {\n  max-width: 75ch;\n  margin: auto;\n  text-align: justify;\n}\n\n.seiten[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  place-items: center;\n  place-content: center;\n}\n\n.seiten[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 25px;\n  font-size: clamp(0.8rem, 4vh, 3.5rem);\n  text-align: center;\n  font-weight: bold;\n}\n\n.seiten[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9lc2hvcC9EOlxcRGVza3RvcFxcV2ViRGV2XFwyLiBBbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHByb2pla3RlXFxlc2hvcFxcZXNob3AuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZXNob3AvZXNob3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0k7RUFDRSxlQUFBO0FDQ047O0FER0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FESUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxVQUFBO0VBQ0Esc0JBQUE7RUFFQSx1QkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0VBRUEsaUlBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0FDUEY7O0FEWUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDVEY7O0FEWUE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNURjs7QURZQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNURjs7QURjQTtFQUNFLGdCQUFBO0FDWEY7O0FEYUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDVkY7O0FEYUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDVkY7O0FEWUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDVko7O0FEWUU7RUFDRSxlQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL2VzaG9wL2VzaG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIGZvbnQtc2l6ZTogNS41cmVtO1xyXG59XHJcblxyXG4udGl0bGVFc2hvcCB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi50aXRlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vIEdlc2FtdGNvbnRhaW5lclxyXG4uZXNob3BDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW46IDUwcHggYXV0byAzMHB4O1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYmlsZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogNTBweDtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9jLndhbGxoZXJlLmNvbS9waG90b3MvODcvYzcvYmxhY2tfYmFja2dyb3VuZF9saW5lc19taW5pbWFsaXNtX2Fic3RyYWN0X3NxdWFyZV9ibHVlLTE5MjU5MjUuanBnIWQnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcblxyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLy8gSW1hZ2UtU3R1ZmZcclxuXHJcbmZpZ3VyZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iaWxkZXIgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiA3NXB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG5maWdjYXB0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8vMi4gRGl2IEJsb2NrXHJcblxyXG4ud2FzIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi50ZXh0IHtcclxuICBtYXgtd2lkdGg6IDc1Y2g7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5zZWl0ZW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgaDIge1xyXG4gICAgbWFyZ2luLXRvcDogNzVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgNHZoLCAzLjVyZW0pO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiIsImgxIHtcbiAgZm9udC1zaXplOiA1LjVyZW07XG59XG5cbi50aXRsZUVzaG9wIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50aXRsZUVzaG9wIGltZyB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBoZWlnaHQ6IDc1cHg7XG59XG4udGl0bGVFc2hvcCBpbWc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50aXRlbCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVzaG9wQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMzBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iaWxkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdyaWQtY29sdW1uLWdhcDogNTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vYy53YWxsaGVyZS5jb20vcGhvdG9zLzg3L2M3L2JsYWNrX2JhY2tncm91bmRfbGluZXNfbWluaW1hbGlzbV9hYnN0cmFjdF9zcXVhcmVfYmx1ZS0xOTI1OTI1LmpwZyFkXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5maWd1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJpbGRlciBpbWcge1xuICBtYXgtaGVpZ2h0OiA3NXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuZmlnY2FwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ud2FzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnRleHQge1xuICBtYXgtd2lkdGg6IDc1Y2g7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnNlaXRlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zZWl0ZW4gaDIge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgNHZoLCAzLjVyZW0pO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlaXRlbiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EshopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-eshop',
                templateUrl: './eshop.component.html',
                styleUrls: ['./eshop.component.scss'],
            }]
    }], function () { return [{ type: _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Components/projekte/eshop/slider/slider.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Components/projekte/eshop/slider/slider.component.ts ***!
  \**********************************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function SliderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bild_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bild_r1.nummer + 1, " / 15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", bild_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", bild_r1.titel);
} }
class SliderComponent {
    constructor() {
        // Bilder-Galerie zum Eshop
        this.bilder = [
            { img: 'assets/eshop/start.png', titel: 'Startfenster', nummer: 0 },
            { img: 'assets/eshop/k1.png', titel: 'Kunden - Übersicht', nummer: 1 },
            { img: 'assets/eshop/k2.png', titel: 'Artikel suchen', nummer: 2 },
            {
                img: 'assets/eshop/k3.png',
                titel: 'Artikel in den Warenkorb legen',
                nummer: 3,
            },
            { img: 'assets/eshop/k4.png', titel: 'Warenkorb - Übersicht', nummer: 4 },
            { img: 'assets/eshop/k5.png', titel: 'Kaufbestätigung', nummer: 5 },
            { img: 'assets/eshop/k6.png', titel: 'Rechnung', nummer: 6 },
            { img: 'assets/eshop/m1.png', titel: 'Admin - Übersicht', nummer: 7 },
            { img: 'assets/eshop/m2.png', titel: 'Artikel hinzufügen', nummer: 8 },
            { img: 'assets/eshop/m3.png', titel: 'Artikel hinzugefügt', nummer: 9 },
            { img: 'assets/eshop/m4.png', titel: 'Artikel - löschen', nummer: 10 },
            { img: 'assets/eshop/m4.1.png', titel: 'Artikel - gelöscht', nummer: 11 },
            {
                img: 'assets/eshop/m5.png',
                titel: 'Artikelbestand - ändern',
                nummer: 12,
            },
            { img: 'assets/eshop/m6.png', titel: 'Admin - Artikelverlauf', nummer: 13 },
            {
                img: 'assets/eshop/m7.png',
                titel: 'Admin - Ereignis-Verlauf',
                nummer: 14,
            },
        ];
        // Slider-Einstellungen
        this.slideIndex = 1;
    }
    plusSlides(n) {
        this.showSlides((this.slideIndex += n));
    }
    currentSlide(n) {
        this.showSlides((this.slideIndex = n));
    }
    showSlides(n) {
        let i;
        const slides = document.getElementsByClassName('mySlides');
        const captionText = document.getElementById('caption');
        if (n > slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[this.slideIndex - 1].style.display = 'block';
        captionText.innerHTML = this.bilder[this.slideIndex - 1].titel;
    }
    //  onInit
    ngOnInit() { }
    ngAfterViewInit() {
        this.showSlides(this.slideIndex);
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["app-slider"]], decls: 8, vars: 1, consts: [[1, "container"], ["class", "mySlides", 4, "ngFor", "ngForOf"], [1, "prev", 3, "click"], [1, "next", 3, "click"], [1, "caption-container"], ["id", "caption"], [1, "mySlides"], [1, "numbertext"], [2, "max-height", "1000px", "object-fit", "contain", 3, "src", "alt"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SliderComponent_div_1_Template, 4, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SliderComponent_Template_a_click_2_listener() { return ctx.plusSlides(0 - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u276E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SliderComponent_Template_a_click_4_listener() { return ctx.plusSlides(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u276F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bilder);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 60%;\n}\n\n\n\n.mySlides[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n}\n\n\n\n.cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -50px;\n  color: white;\n  font-weight: bold;\n  font-size: 2rem;\n  border-radius: 0 3px 3px 0;\n  -moz-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n\n\n\n.next[_ngcontent-%COMP%] {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n\n\n.numbertext[_ngcontent-%COMP%] {\n  color: var(--text);\n  font-size: 1.2rem;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n}\n\n\n\n.caption-container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n  background-color: #222;\n  color: white;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9lc2hvcC9zbGlkZXIvRDpcXERlc2t0b3BcXFdlYkRldlxcMi4gQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxwcm9qZWt0ZVxcZXNob3BcXHNsaWRlclxcc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL2VzaG9wL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBLGdGQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUEsK0JBQUE7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQSwwREFBQTs7QUFDQTtFQUNFLGVBQUE7QUNDRjs7QURFQSw0QkFBQTs7QUFFQTs7RUFFRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO09BQUEsaUJBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREdBLDRDQUFBOztBQUNBO0VBQ0UsUUFBQTtFQUNBLDBCQUFBO0FDQUY7O0FER0E7O0VBRUUsb0NBQUE7QUNBRjs7QURHQSwwQkFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtBQ0FGOztBREdBLDZCQUFBOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL2VzaG9wL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKiBQb3NpdGlvbiB0aGUgaW1hZ2UgY29udGFpbmVyIChuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGxlZnQgYW5kIHJpZ2h0IGFycm93cykgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi8qIEhpZGUgdGhlIGltYWdlcyBieSBkZWZhdWx0ICovXHJcbi5teVNsaWRlcyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIEFkZCBhIHBvaW50ZXIgd2hlbiBob3ZlcmluZyBvdmVyIHRoZSB0aHVtYm5haWwgaW1hZ2VzICovXHJcbi5jdXJzb3Ige1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogTmV4dCAmIHByZXZpb3VzIGJ1dHRvbnMgKi9cclxuXHJcbi5wcmV2LFxyXG4ubmV4dCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLyogUG9zaXRpb24gdGhlIFwibmV4dCBidXR0b25cIiB0byB0aGUgcmlnaHQgKi9cclxuLm5leHQge1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xyXG59XHJcblxyXG4ucHJldixcclxuLm5leHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxufVxyXG5cclxuLyogTnVtYmVyIHRleHQgKDEvMyBldGMpICovXHJcbi5udW1iZXJ0ZXh0IHtcclxuICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLyogQ29udGFpbmVyIGZvciBpbWFnZSB0ZXh0ICovXHJcbi5jYXB0aW9uLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIFBvc2l0aW9uIHRoZSBpbWFnZSBjb250YWluZXIgKG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgbGVmdCBhbmQgcmlnaHQgYXJyb3dzKSAqL1xuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLyogSGlkZSB0aGUgaW1hZ2VzIGJ5IGRlZmF1bHQgKi9cbi5teVNsaWRlcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogQWRkIGEgcG9pbnRlciB3aGVuIGhvdmVyaW5nIG92ZXIgdGhlIHRodW1ibmFpbCBpbWFnZXMgKi9cbi5jdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIE5leHQgJiBwcmV2aW91cyBidXR0b25zICovXG4ucHJldixcbi5uZXh0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xufVxuXG4vKiBQb3NpdGlvbiB0aGUgXCJuZXh0IGJ1dHRvblwiIHRvIHRoZSByaWdodCAqL1xuLm5leHQge1xuICByaWdodDogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XG59XG5cbi5wcmV2LFxuLm5leHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG5cbi8qIE51bWJlciB0ZXh0ICgxLzMgZXRjKSAqL1xuLm51bWJlcnRleHQge1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG59XG5cbi8qIENvbnRhaW5lciBmb3IgaW1hZ2UgdGV4dCAqL1xuLmNhcHRpb24tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-slider',
                templateUrl: './slider.component.html',
                styleUrls: ['./slider.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Components/projekte/factory/factory.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Components/projekte/factory/factory.component.ts ***!
  \******************************************************************/
/*! exports provided: FactoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactoryComponent", function() { return FactoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/modeToggle.service */ "./src/services/modeToggle.service.ts");
/* harmony import */ var _fslider_fslider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fslider/fslider.component */ "./src/app/Components/projekte/factory/fslider/fslider.component.ts");




class FactoryComponent {
    constructor(toggle) {
        this.toggle = toggle;
    }
    ngOnInit() { }
}
FactoryComponent.ɵfac = function FactoryComponent_Factory(t) { return new (t || FactoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"])); };
FactoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FactoryComponent, selectors: [["app-factory"]], decls: 7, vars: 1, consts: [[1, "titleFactory"], ["href", "https://github.com/joscha-sattler/Smart-Factory", "target", "_blank"], ["alt", "GitHub", 3, "src"], [1, "slider"]], template: function FactoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Smart Factory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-fslider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toggle.gitHub, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_fslider_fslider_component__WEBPACK_IMPORTED_MODULE_2__["FsliderComponent"]], styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 5.5rem;\n}\n\n.titleFactory[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.titleFactory[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  height: 75px;\n}\n\n.titleFactory[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.titel[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.eshopContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 75%;\n  margin: 50px auto 30px;\n  justify-content: center;\n  align-items: center;\n}\n\n.bilder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  grid-column-gap: 50px;\n  justify-content: center;\n  align-items: center;\n  background-image: url(\"https://c.wallhere.com/photos/87/c7/black_background_lines_minimalism_abstract_square_blue-1925925.jpg!d\");\n  background-size: cover;\n  background-attachment: fixed;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nfigure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.bilder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nfigcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: white;\n}\n\n.was[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.text[_ngcontent-%COMP%] {\n  max-width: 75ch;\n  margin: auto;\n  text-align: justify;\n}\n\n.seiten[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  place-items: center;\n  place-content: center;\n}\n\n.seiten[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 25px;\n  font-size: clamp(0.8rem, 4vh, 3.5rem);\n  text-align: center;\n  font-weight: bold;\n}\n\n.seiten[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9mYWN0b3J5L0Q6XFxEZXNrdG9wXFxXZWJEZXZcXDIuIEFuZ3VsYXItUHJvamVrdGVcXFBvcnRmb2xpby9zcmNcXGFwcFxcQ29tcG9uZW50c1xccHJvamVrdGVcXGZhY3RvcnlcXGZhY3RvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZmFjdG9yeS9mYWN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENJO0VBQ0UsZUFBQTtBQ0NOOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQ0FGOztBRElBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsVUFBQTtFQUNBLHNCQUFBO0VBRUEsdUJBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBRUEsdUJBQUE7RUFFQSxtQkFBQTtFQUVBLGlJQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtBQ1BGOztBRFlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1RGOztBRFlBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDVEY7O0FEWUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDVEY7O0FEY0E7RUFDRSxnQkFBQTtBQ1hGOztBRGFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ1ZGOztBRFlFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1ZKOztBRFlFO0VBQ0UsZUFBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9mYWN0b3J5L2ZhY3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgZm9udC1zaXplOiA1LjVyZW07XHJcbn1cclxuXHJcbi50aXRsZUZhY3Rvcnkge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4udGl0ZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vLyBHZXNhbXRjb250YWluZXJcclxuLmVzaG9wQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMzBweDtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJpbGRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBncmlkLWNvbHVtbi1nYXA6IDUwcHg7XHJcblxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vYy53YWxsaGVyZS5jb20vcGhvdG9zLzg3L2M3L2JsYWNrX2JhY2tncm91bmRfbGluZXNfbWluaW1hbGlzbV9hYnN0cmFjdF9zcXVhcmVfYmx1ZS0xOTI1OTI1LmpwZyFkJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG5cclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi8vIEltYWdlLVN0dWZmXHJcblxyXG5maWd1cmUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYmlsZGVyIGltZyB7XHJcbiAgbWF4LWhlaWdodDogNzVweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuZmlnY2FwdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vLzIuIERpdiBCbG9ja1xyXG5cclxuLndhcyB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4udGV4dCB7XHJcbiAgbWF4LXdpZHRoOiA3NWNoO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4uc2VpdGVuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGgyIHtcclxuICAgIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDR2aCwgMy41cmVtKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iLCJoMSB7XG4gIGZvbnQtc2l6ZTogNS41cmVtO1xufVxuXG4udGl0bGVGYWN0b3J5IHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50aXRsZUZhY3RvcnkgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIGhlaWdodDogNzVweDtcbn1cbi50aXRsZUZhY3RvcnkgaW1nOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGl0ZWwge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lc2hvcENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogNTBweCBhdXRvIDMwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYmlsZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBncmlkLWNvbHVtbi1nYXA6IDUwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2Mud2FsbGhlcmUuY29tL3Bob3Rvcy84Ny9jNy9ibGFja19iYWNrZ3JvdW5kX2xpbmVzX21pbmltYWxpc21fYWJzdHJhY3Rfc3F1YXJlX2JsdWUtMTkyNTkyNS5qcGchZFwiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuZmlndXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iaWxkZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogNzVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbmZpZ2NhcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLndhcyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi50ZXh0IHtcbiAgbWF4LXdpZHRoOiA3NWNoO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5zZWl0ZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG59XG4uc2VpdGVuIGgyIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDR2aCwgMy41cmVtKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zZWl0ZW4gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FactoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-factory',
                templateUrl: './factory.component.html',
                styleUrls: ['./factory.component.scss'],
            }]
    }], function () { return [{ type: src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Components/projekte/factory/fslider/fslider.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Components/projekte/factory/fslider/fslider.component.ts ***!
  \**************************************************************************/
/*! exports provided: FsliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FsliderComponent", function() { return FsliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function FsliderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bild_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bild_r1.nummer + 1, " / 6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", bild_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", bild_r1.titel);
} }
class FsliderComponent {
    constructor() {
        // Bilder-Galerie zum Eshop
        this.bilder = [
            { img: 'assets/factory/f2.png', titel: 'Hauptmenü', nummer: 0 },
            { img: 'assets/factory/f1.png', titel: 'Factory Prototyp', nummer: 1 },
            { img: 'assets/factory/f4.png', titel: 'Übersicht Gebäude', nummer: 2 },
            {
                img: 'assets/factory/f3.png',
                titel: 'Übersicht Produktteile',
                nummer: 3,
            },
            {
                img: 'assets/factory/f5.png',
                titel: 'Modelle der Produktteile',
                nummer: 4,
            },
            { img: 'assets/factory/f6.png', titel: 'Beispiel-Fabrik', nummer: 5 },
        ];
        // Slider-Einstellungen
        this.slideIndex = 1;
    }
    plusSlides(n) {
        this.showSlides((this.slideIndex += n));
    }
    currentSlide(n) {
        this.showSlides((this.slideIndex = n));
    }
    showSlides(n) {
        let i;
        const slides = document.getElementsByClassName('mySlides');
        const captionText = document.getElementById('caption');
        if (n > slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[this.slideIndex - 1].style.display = 'block';
        captionText.innerHTML = this.bilder[this.slideIndex - 1].titel;
    }
    //  onInit
    ngOnInit() { }
    ngAfterViewInit() {
        this.showSlides(this.slideIndex);
    }
}
FsliderComponent.ɵfac = function FsliderComponent_Factory(t) { return new (t || FsliderComponent)(); };
FsliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FsliderComponent, selectors: [["app-fslider"]], decls: 8, vars: 1, consts: [[1, "container"], ["class", "mySlides", 4, "ngFor", "ngForOf"], [1, "prev", 3, "click"], [1, "next", 3, "click"], [1, "caption-container"], ["id", "caption"], [1, "mySlides"], [1, "numbertext"], [2, "max-height", "1000px", "object-fit", "contain", 3, "src", "alt"]], template: function FsliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FsliderComponent_div_1_Template, 4, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FsliderComponent_Template_a_click_2_listener() { return ctx.plusSlides(0 - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u276E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FsliderComponent_Template_a_click_4_listener() { return ctx.plusSlides(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u276F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bilder);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 60%;\n}\n\n\n\n.mySlides[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n}\n\n\n\n.cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -50px;\n  color: white;\n  font-weight: bold;\n  font-size: 2rem;\n  border-radius: 0 3px 3px 0;\n  -moz-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n\n\n\n.next[_ngcontent-%COMP%] {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n\n\n.numbertext[_ngcontent-%COMP%] {\n  color: var(--text);\n  font-size: 1.2rem;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n}\n\n\n\n.caption-container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n  background-color: #222;\n  color: white;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9mYWN0b3J5L2ZzbGlkZXIvRDpcXERlc2t0b3BcXFdlYkRldlxcMi4gQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxwcm9qZWt0ZVxcZmFjdG9yeVxcZnNsaWRlclxcZnNsaWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9mYWN0b3J5L2ZzbGlkZXIvZnNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUEsZ0ZBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQSwrQkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBLDBEQUFBOztBQUNBO0VBQ0UsZUFBQTtBQ0NGOztBREVBLDRCQUFBOztBQUVBOztFQUVFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7T0FBQSxpQkFBQTtFQUNBLHlCQUFBO0FDQUY7O0FER0EsNENBQUE7O0FBQ0E7RUFDRSxRQUFBO0VBQ0EsMEJBQUE7QUNBRjs7QURHQTs7RUFFRSxvQ0FBQTtBQ0FGOztBREdBLDBCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0FDQUY7O0FER0EsNkJBQUE7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZmFjdG9yeS9mc2xpZGVyL2ZzbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKiBQb3NpdGlvbiB0aGUgaW1hZ2UgY29udGFpbmVyIChuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGxlZnQgYW5kIHJpZ2h0IGFycm93cykgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi8qIEhpZGUgdGhlIGltYWdlcyBieSBkZWZhdWx0ICovXHJcbi5teVNsaWRlcyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIEFkZCBhIHBvaW50ZXIgd2hlbiBob3ZlcmluZyBvdmVyIHRoZSB0aHVtYm5haWwgaW1hZ2VzICovXHJcbi5jdXJzb3Ige1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogTmV4dCAmIHByZXZpb3VzIGJ1dHRvbnMgKi9cclxuXHJcbi5wcmV2LFxyXG4ubmV4dCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLyogUG9zaXRpb24gdGhlIFwibmV4dCBidXR0b25cIiB0byB0aGUgcmlnaHQgKi9cclxuLm5leHQge1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xyXG59XHJcblxyXG4ucHJldixcclxuLm5leHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxufVxyXG5cclxuLyogTnVtYmVyIHRleHQgKDEvMyBldGMpICovXHJcbi5udW1iZXJ0ZXh0IHtcclxuICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLyogQ29udGFpbmVyIGZvciBpbWFnZSB0ZXh0ICovXHJcbi5jYXB0aW9uLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIFBvc2l0aW9uIHRoZSBpbWFnZSBjb250YWluZXIgKG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgbGVmdCBhbmQgcmlnaHQgYXJyb3dzKSAqL1xuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLyogSGlkZSB0aGUgaW1hZ2VzIGJ5IGRlZmF1bHQgKi9cbi5teVNsaWRlcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogQWRkIGEgcG9pbnRlciB3aGVuIGhvdmVyaW5nIG92ZXIgdGhlIHRodW1ibmFpbCBpbWFnZXMgKi9cbi5jdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIE5leHQgJiBwcmV2aW91cyBidXR0b25zICovXG4ucHJldixcbi5uZXh0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xufVxuXG4vKiBQb3NpdGlvbiB0aGUgXCJuZXh0IGJ1dHRvblwiIHRvIHRoZSByaWdodCAqL1xuLm5leHQge1xuICByaWdodDogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XG59XG5cbi5wcmV2LFxuLm5leHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG5cbi8qIE51bWJlciB0ZXh0ICgxLzMgZXRjKSAqL1xuLm51bWJlcnRleHQge1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG59XG5cbi8qIENvbnRhaW5lciBmb3IgaW1hZ2UgdGV4dCAqL1xuLmNhcHRpb24tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FsliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fslider',
                templateUrl: './fslider.component.html',
                styleUrls: ['./fslider.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Components/projekte/games/games.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Components/projekte/games/games.component.ts ***!
  \**************************************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _twitch_twitch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./twitch/twitch.component */ "./src/app/Components/projekte/games/twitch/twitch.component.ts");
/* harmony import */ var _shooter_shooter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shooter/shooter.component */ "./src/app/Components/projekte/games/shooter/shooter.component.ts");





const _c0 = ["goto"];
function GamesComponent_app_twitch_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-twitch");
} }
function GamesComponent_app_shooter_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-shooter");
} }
function GamesComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "W\u00E4hle ein Projekt aus!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class GamesComponent {
    constructor() {
        this.shooter = false;
        this.twitch = false;
    }
    ngOnInit() { }
    toggleTwitch() {
        this.shooter = false;
        this.twitch = true;
        document.getElementById('twitch').classList.add('figureClick');
        document.getElementById('shooter').classList.remove('figureClick');
        setTimeout(() => {
            this.goto.nativeElement.scrollIntoView({
                block: 'start',
            });
        }, 50);
    }
    toggleShooter() {
        this.twitch = false;
        this.shooter = true;
        document.getElementById('twitch').classList.remove('figureClick');
        document.getElementById('shooter').classList.add('figureClick');
        setTimeout(() => {
            this.goto.nativeElement.scrollIntoView({
                block: 'start',
            });
        }, 50);
    }
}
GamesComponent.ɵfac = function GamesComponent_Factory(t) { return new (t || GamesComponent)(); };
GamesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GamesComponent, selectors: [["app-games"]], viewQuery: function GamesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.goto = _t.first);
    } }, decls: 21, vars: 3, consts: [[1, "titleGames"], [1, "gamesContainer"], ["id", "shooter", 1, "figure", 3, "click"], ["src", "assets/shooter/g1.png", "alt", "Shooter"], ["id", "twitch", 1, "figure", 3, "click"], ["src", "assets/shooter/twitch.png", "alt", "Twitch World"], [1, "projekte"], ["goto", ""], [4, "ngIf"], ["class", "pick", 4, "ngIf"], [1, "pick"]], template: function GamesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Projekte ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamesComponent_Template_figure_click_6_listener() { return ctx.toggleShooter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Shooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "figure", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamesComponent_Template_figure_click_10_listener() { return ctx.toggleTwitch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Twitch World");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, GamesComponent_app_twitch_17_Template, 1, 0, "app-twitch", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, GamesComponent_app_shooter_19_Template, 1, 0, "app-shooter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, GamesComponent_div_20_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.twitch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shooter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.shooter && !ctx.twitch);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _twitch_twitch_component__WEBPACK_IMPORTED_MODULE_2__["TwitchComponent"], _shooter_shooter_component__WEBPACK_IMPORTED_MODULE_3__["ShooterComponent"]], styles: [".projekte[_ngcontent-%COMP%] {\n  scroll-margin-top: 10rem;\n}\n\n.titleGames[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.gamesContainer[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  grid-gap: 20px;\n  grid-auto-flow: row;\n  margin: auto;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 300px));\n}\n\n.gamesContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 1px solid var(--boxShadow);\n  border-radius: 5px;\n}\n\n.pick[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 25px;\n  text-align: center;\n}\n\n.figure[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 4px 3px var(--boxShadow);\n  cursor: pointer;\n  color: var(--hover);\n}\n\n.figure[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 2.6rem;\n  text-align: center;\n  background-color: var(--cardBack);\n  color: var(--cardBackText);\n  border: 2px solid var(--cardBorder);\n}\n\n.figureClick[_ngcontent-%COMP%] {\n  box-shadow: 0 0 4px 3px var(--hover);\n  border: none;\n  cursor: pointer;\n}\n\n.video[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90%;\n  margin: auto;\n  padding-bottom: 56.25%;\n  height: 0;\n}\n\n.video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 75%;\n  height: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9nYW1lcy9EOlxcRGVza3RvcFxcV2ViRGV2XFwyLiBBbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHByb2pla3RlXFxnYW1lc1xcZ2FtZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZ2FtZXMvZ2FtZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEsNkRBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUVBLGtDQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0Usd0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtFQUVBLG1DQUFBO0FDRkY7O0FES0E7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRkY7O0FET0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZ2FtZXMvZ2FtZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVrdGUge1xyXG4gIHNjcm9sbC1tYXJnaW4tdG9wOiAxMHJlbTtcclxufVxyXG5cclxuLnRpdGxlR2FtZXMge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5nYW1lc0NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBncmlkLWdhcDogMjBweDtcclxuICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMzAwcHgpKTtcclxufVxyXG5cclxuLmdhbWVzQ29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuXHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm94U2hhZG93KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5waWNrIHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmlndXJlOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgNHB4IDNweCB2YXIoLS1ib3hTaGFkb3cpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogdmFyKC0taG92ZXIpO1xyXG59XHJcblxyXG4uZmlndXJlIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICBmb250LXNpemU6IDIuNnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZEJhY2spO1xyXG4gIGNvbG9yOiB2YXIoLS1jYXJkQmFja1RleHQpO1xyXG5cclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyKTtcclxufVxyXG5cclxuLmZpZ3VyZUNsaWNrIHtcclxuICBib3gtc2hhZG93OiAwIDAgNHB4IDNweCB2YXIoLS1ob3Zlcik7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLy8gVmlkZW9cclxuXHJcbi52aWRlbyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4udmlkZW8gaWZyYW1lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBoZWlnaHQ6IDc1JTtcclxufVxyXG4iLCIucHJvamVrdGUge1xuICBzY3JvbGwtbWFyZ2luLXRvcDogMTByZW07XG59XG5cbi50aXRsZUdhbWVzIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ2FtZXNDb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ3JpZC1nYXA6IDIwcHg7XG4gIGdyaWQtYXV0by1mbG93OiByb3c7XG4gIG1hcmdpbjogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMzAwcHgpKTtcbn1cblxuLmdhbWVzQ29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm94U2hhZG93KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucGljayB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZpZ3VyZTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggM3B4IHZhcigtLWJveFNoYWRvdyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuLmZpZ3VyZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgZm9udC1zaXplOiAyLjZyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZEJhY2spO1xuICBjb2xvcjogdmFyKC0tY2FyZEJhY2tUZXh0KTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2FyZEJvcmRlcik7XG59XG5cbi5maWd1cmVDbGljayB7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggM3B4IHZhcigtLWhvdmVyKTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi52aWRlbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xuICBoZWlnaHQ6IDA7XG59XG5cbi52aWRlbyBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDc1JTtcbiAgaGVpZ2h0OiA3NSU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-games',
                templateUrl: './games.component.html',
                styleUrls: ['./games.component.scss'],
            }]
    }], function () { return []; }, { goto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['goto']
        }] }); })();


/***/ }),

/***/ "./src/app/Components/projekte/games/shooter/gslides/gslides.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/Components/projekte/games/shooter/gslides/gslides.component.ts ***!
  \********************************************************************************/
/*! exports provided: GslidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GslidesComponent", function() { return GslidesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function GslidesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bild_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bild_r1.nummer + 1, " / 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", bild_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", bild_r1.titel);
} }
class GslidesComponent {
    constructor() {
        // Bilder-Galerie zum Verein
        this.bilder = [
            { img: 'assets/shooter/g1.png', titel: 'Hauptmenü', nummer: 0 },
            { img: 'assets/shooter/g2.png', titel: 'Levelauswahl', nummer: 1 },
            { img: 'assets/shooter/g3.png', titel: 'Meteoriten-Level', nummer: 2 },
            { img: 'assets/shooter/g4.png', titel: 'Natur-Level', nummer: 3 },
        ];
        // Slider-Einstellungen
        this.slideIndex = 1;
    }
    plusSlides(n) {
        this.showSlides((this.slideIndex += n));
    }
    currentSlide(n) {
        this.showSlides((this.slideIndex = n));
    }
    showSlides(n) {
        let i;
        const slides = document.getElementsByClassName('mySlides');
        const captionText = document.getElementById('caption');
        if (n > slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[this.slideIndex - 1].style.display = 'block';
        captionText.innerHTML = this.bilder[this.slideIndex - 1].titel;
    }
    //  onInit
    ngOnInit() { }
    ngAfterViewInit() {
        this.showSlides(this.slideIndex);
    }
}
GslidesComponent.ɵfac = function GslidesComponent_Factory(t) { return new (t || GslidesComponent)(); };
GslidesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GslidesComponent, selectors: [["app-gslides"]], decls: 8, vars: 1, consts: [[1, "container"], ["class", "mySlides", 4, "ngFor", "ngForOf"], [1, "prev", 3, "click"], [1, "next", 3, "click"], [1, "caption-container"], ["id", "caption"], [1, "mySlides"], [1, "numbertext"], [2, "max-height", "1000px", "object-fit", "contain", 3, "src", "alt"]], template: function GslidesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GslidesComponent_div_1_Template, 4, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GslidesComponent_Template_a_click_2_listener() { return ctx.plusSlides(0 - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u276E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GslidesComponent_Template_a_click_4_listener() { return ctx.plusSlides(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u276F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bilder);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 75%;\n  margin-bottom: 100px;\n}\n\n\n\n.mySlides[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n}\n\n.mySlides[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 15px;\n}\n\n\n\n.cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -50px;\n  color: white;\n  font-weight: bold;\n  font-size: 2rem;\n  border-radius: 0 3px 3px 0;\n  -moz-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n\n\n\n.next[_ngcontent-%COMP%] {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n\n\n.numbertext[_ngcontent-%COMP%] {\n  color: var(--text);\n  font-size: 1.2rem;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n}\n\n\n\n.caption-container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n  background-color: #222;\n  color: white;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9nYW1lcy9zaG9vdGVyL2dzbGlkZXMvRDpcXERlc2t0b3BcXFdlYkRldlxcMi4gQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxwcm9qZWt0ZVxcZ2FtZXNcXHNob290ZXJcXGdzbGlkZXNcXGdzbGlkZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZ2FtZXMvc2hvb3Rlci9nc2xpZGVzL2dzbGlkZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBLGdGQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQSwrQkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENFO0VBQ0UsbUJBQUE7QUNDSjs7QURHQSwwREFBQTs7QUFDQTtFQUNFLGVBQUE7QUNBRjs7QURHQSw0QkFBQTs7QUFFQTs7RUFFRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO09BQUEsaUJBQUE7RUFDQSx5QkFBQTtBQ0RGOztBRElBLDRDQUFBOztBQUNBO0VBQ0UsUUFBQTtFQUNBLDBCQUFBO0FDREY7O0FESUE7O0VBRUUsb0NBQUE7QUNERjs7QURJQSwwQkFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtBQ0RGOztBRElBLDZCQUFBOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL2dhbWVzL3Nob290ZXIvZ3NsaWRlcy9nc2xpZGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogUG9zaXRpb24gdGhlIGltYWdlIGNvbnRhaW5lciAobmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBsZWZ0IGFuZCByaWdodCBhcnJvd3MpICovXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4vKiBIaWRlIHRoZSBpbWFnZXMgYnkgZGVmYXVsdCAqL1xyXG4ubXlTbGlkZXMge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIEFkZCBhIHBvaW50ZXIgd2hlbiBob3ZlcmluZyBvdmVyIHRoZSB0aHVtYm5haWwgaW1hZ2VzICovXHJcbi5jdXJzb3Ige1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogTmV4dCAmIHByZXZpb3VzIGJ1dHRvbnMgKi9cclxuXHJcbi5wcmV2LFxyXG4ubmV4dCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLyogUG9zaXRpb24gdGhlIFwibmV4dCBidXR0b25cIiB0byB0aGUgcmlnaHQgKi9cclxuLm5leHQge1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xyXG59XHJcblxyXG4ucHJldixcclxuLm5leHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxufVxyXG5cclxuLyogTnVtYmVyIHRleHQgKDEvMyBldGMpICovXHJcbi5udW1iZXJ0ZXh0IHtcclxuICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLyogQ29udGFpbmVyIGZvciBpbWFnZSB0ZXh0ICovXHJcbi5jYXB0aW9uLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIFBvc2l0aW9uIHRoZSBpbWFnZSBjb250YWluZXIgKG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgbGVmdCBhbmQgcmlnaHQgYXJyb3dzKSAqL1xuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi8qIEhpZGUgdGhlIGltYWdlcyBieSBkZWZhdWx0ICovXG4ubXlTbGlkZXMge1xuICBkaXNwbGF5OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubXlTbGlkZXMgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLyogQWRkIGEgcG9pbnRlciB3aGVuIGhvdmVyaW5nIG92ZXIgdGhlIHRodW1ibmFpbCBpbWFnZXMgKi9cbi5jdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIE5leHQgJiBwcmV2aW91cyBidXR0b25zICovXG4ucHJldixcbi5uZXh0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xufVxuXG4vKiBQb3NpdGlvbiB0aGUgXCJuZXh0IGJ1dHRvblwiIHRvIHRoZSByaWdodCAqL1xuLm5leHQge1xuICByaWdodDogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XG59XG5cbi5wcmV2LFxuLm5leHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG5cbi8qIE51bWJlciB0ZXh0ICgxLzMgZXRjKSAqL1xuLm51bWJlcnRleHQge1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG59XG5cbi8qIENvbnRhaW5lciBmb3IgaW1hZ2UgdGV4dCAqL1xuLmNhcHRpb24tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GslidesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gslides',
                templateUrl: './gslides.component.html',
                styleUrls: ['./gslides.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Components/projekte/games/shooter/shooter.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/Components/projekte/games/shooter/shooter.component.ts ***!
  \************************************************************************/
/*! exports provided: ShooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShooterComponent", function() { return ShooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../services/modeToggle.service */ "./src/services/modeToggle.service.ts");
/* harmony import */ var _gslides_gslides_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gslides/gslides.component */ "./src/app/Components/projekte/games/shooter/gslides/gslides.component.ts");




class ShooterComponent {
    constructor(toggle) {
        this.toggle = toggle;
    }
    ngOnInit() { }
}
ShooterComponent.ɵfac = function ShooterComponent_Factory(t) { return new (t || ShooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"])); };
ShooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShooterComponent, selectors: [["app-shooter"]], decls: 10, vars: 1, consts: [[1, "titleShooter"], ["href", "https://github.com/joscha-sattler/Shooter", "target", "_blank"], ["alt", "GitHub", 3, "src"], [1, "slider"], [1, "all"], [1, "video"], ["src", "https://www.youtube.com/embed/Max4VWYwbOo", "allowfullscreen", ""]], template: function ShooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Shooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-gslides");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "iframe", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toggle.gitHub, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_gslides_gslides_component__WEBPACK_IMPORTED_MODULE_2__["GslidesComponent"]], styles: [".titleShooter[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.titleShooter[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  height: 75px;\n}\n.titleShooter[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.all[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  margin-bottom: 50px;\n}\n.all[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%] {\n  width: 75%;\n}\n.all[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 75vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9nYW1lcy9zaG9vdGVyL0Q6XFxEZXNrdG9wXFxXZWJEZXZcXDIuIEFuZ3VsYXItUHJvamVrdGVcXFBvcnRmb2xpby9zcmNcXGFwcFxcQ29tcG9uZW50c1xccHJvamVrdGVcXGdhbWVzXFxzaG9vdGVyXFxzaG9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL2dhbWVzL3Nob290ZXIvc2hvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7QURDSTtFQUNFLGVBQUE7QUNDTjtBRE1BO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNIRjtBRElFO0VBQ0UsVUFBQTtBQ0ZKO0FER0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0ROIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9nYW1lcy9zaG9vdGVyL3Nob290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVTaG9vdGVyIHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFZpZGVvXHJcblxyXG4uYWxsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIC52aWRlbyB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgaWZyYW1lIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNzV2aDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnRpdGxlU2hvb3RlciB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGl0bGVTaG9vdGVyIGltZyB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBoZWlnaHQ6IDc1cHg7XG59XG4udGl0bGVTaG9vdGVyIGltZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFsbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLmFsbCAudmlkZW8ge1xuICB3aWR0aDogNzUlO1xufVxuLmFsbCAudmlkZW8gaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzV2aDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shooter',
                templateUrl: './shooter.component.html',
                styleUrls: ['./shooter.component.scss'],
            }]
    }], function () { return [{ type: _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Components/projekte/games/twitch/twitch.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Components/projekte/games/twitch/twitch.component.ts ***!
  \**********************************************************************/
/*! exports provided: TwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitchComponent", function() { return TwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../services/modeToggle.service */ "./src/services/modeToggle.service.ts");



class TwitchComponent {
    constructor(toggle) {
        this.toggle = toggle;
    }
    ngOnInit() { }
}
TwitchComponent.ɵfac = function TwitchComponent_Factory(t) { return new (t || TwitchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"])); };
TwitchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TwitchComponent, selectors: [["app-twitch"]], decls: 8, vars: 1, consts: [[1, "titleTwitch"], ["href", "https://github.com/joscha-sattler/Twitch-World", "target", "_blank"], ["alt", "GitHub", 3, "src"], [1, "all"], [1, "video"], ["src", "https://www.youtube.com/embed/VsE-RG7ZwZI", "allowfullscreen", ""]], template: function TwitchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Twitch World");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "iframe", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toggle.gitHub, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".titleTwitch[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.titleTwitch[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  height: 75px;\n}\n.titleTwitch[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.all[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  margin-bottom: 50px;\n}\n.all[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%] {\n  width: 75%;\n}\n.all[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 75vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9nYW1lcy90d2l0Y2gvRDpcXERlc2t0b3BcXFdlYkRldlxcMi4gQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxwcm9qZWt0ZVxcZ2FtZXNcXHR3aXRjaFxcdHdpdGNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL2dhbWVzL3R3aXRjaC90d2l0Y2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0k7RUFDRSxlQUFBO0FDQ047QURNQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDSEY7QURJRTtFQUNFLFVBQUE7QUNGSjtBREdJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZ2FtZXMvdHdpdGNoL3R3aXRjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZVR3aXRjaCB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBWaWRlb1xyXG5cclxuLmFsbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAudmlkZW8ge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGlmcmFtZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDc1dmg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi50aXRsZVR3aXRjaCB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGl0bGVUd2l0Y2ggaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIGhlaWdodDogNzVweDtcbn1cbi50aXRsZVR3aXRjaCBpbWc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hbGwge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5hbGwgLnZpZGVvIHtcbiAgd2lkdGg6IDc1JTtcbn1cbi5hbGwgLnZpZGVvIGlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc1dmg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TwitchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-twitch',
                templateUrl: './twitch.component.html',
                styleUrls: ['./twitch.component.scss'],
            }]
    }], function () { return [{ type: _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Components/projekte/webentwicklung/blog/blog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Components/projekte/webentwicklung/blog/blog.component.ts ***!
  \***************************************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../services/modeToggle.service */ "./src/services/modeToggle.service.ts");
/* harmony import */ var _bslider_bslider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bslider/bslider.component */ "./src/app/Components/projekte/webentwicklung/blog/bslider/bslider.component.ts");




class BlogComponent {
    constructor(toggle) {
        this.toggle = toggle;
    }
    ngOnInit() { }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 7, vars: 1, consts: [[1, "titleBlog"], ["href", "https://github.com/joscha-sattler/Blog", "target", "_blank"], ["alt", "GitHub", 3, "src"], [1, "slider"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-bslider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toggle.gitHub, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_bslider_bslider_component__WEBPACK_IMPORTED_MODULE_2__["BsliderComponent"]], styles: [".titleBlog[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.titleBlog[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  height: 75px;\n}\n.titleBlog[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.titel[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  text-align: center;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 5.5rem;\n}\n.blogContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 75%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 30px;\n  justify-content: center;\n  align-items: center;\n}\n.bilder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  grid-column-gap: 50px;\n  justify-content: center;\n  align-items: center;\n  background-image: url(\"https://c.wallhere.com/photos/87/c7/black_background_lines_minimalism_abstract_square_blue-1925925.jpg!d\");\n  background-size: cover;\n  background-attachment: fixed;\n  padding: 20px;\n  border-radius: 10px;\n}\nfigure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.bilder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nfigcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: white;\n}\n.was[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.text[_ngcontent-%COMP%] {\n  max-width: 75ch;\n  margin: auto;\n  text-align: justify;\n}\n.seiten[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  place-items: center;\n  place-content: center;\n  overflow: hidden;\n}\n.seiten[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 25px;\n  font-size: clamp(0.8rem, 4vh, 3.5rem);\n  text-align: center;\n  font-weight: bold;\n}\n.seiten[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  max-width: 100%;\n  overflow: hidden;\n}\n.border[_ngcontent-%COMP%] {\n  border: 2px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS93ZWJlbnR3aWNrbHVuZy9ibG9nL0Q6XFxEZXNrdG9wXFxXZWJEZXZcXDIuIEFuZ3VsYXItUHJvamVrdGVcXFBvcnRmb2xpby9zcmNcXGFwcFxcQ29tcG9uZW50c1xccHJvamVrdGVcXHdlYmVudHdpY2tsdW5nXFxibG9nXFxibG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL3dlYmVudHdpY2tsdW5nL2Jsb2cvYmxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7QURDSTtFQUNFLGVBQUE7QUNDTjtBREdBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQ0FGO0FERUE7RUFDRSxpQkFBQTtBQ0NGO0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsdUJBQUE7RUFDQSxtQkFBQTtBQ0RGO0FESUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0VBRUEsaUlBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0FDTEY7QURVQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNQRjtBRFVBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDUEY7QURVQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNQRjtBRFlBO0VBQ0UsZ0JBQUE7QUNURjtBRFdBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ1JGO0FEV0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNSRjtBRFVFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1JKO0FEVUU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1JKO0FEWUE7RUFDRSx1QkFBQTtBQ1RGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS93ZWJlbnR3aWNrbHVuZy9ibG9nL2Jsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVCbG9nIHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnRpdGVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiA1LjVyZW07XHJcbn1cclxuLy8gR2VzYW10Y29udGFpbmVyXHJcbi5ibG9nQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iaWxkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiA1MHB4O1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2Mud2FsbGhlcmUuY29tL3Bob3Rvcy84Ny9jNy9ibGFja19iYWNrZ3JvdW5kX2xpbmVzX21pbmltYWxpc21fYWJzdHJhY3Rfc3F1YXJlX2JsdWUtMTkyNTkyNS5qcGchZCcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuXHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vLyBJbWFnZS1TdHVmZlxyXG5cclxuZmlndXJlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJpbGRlciBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbmZpZ2NhcHRpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLy8yLiBEaXYgQmxvY2tcclxuXHJcbi53YXMge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnRleHQge1xyXG4gIG1heC13aWR0aDogNzVjaDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLnNlaXRlbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIGgyIHtcclxuICAgIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDR2aCwgMy41cmVtKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG4uYm9yZGVyIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG4iLCIudGl0bGVCbG9nIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50aXRsZUJsb2cgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIGhlaWdodDogNzVweDtcbn1cbi50aXRsZUJsb2cgaW1nOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGl0ZWwge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA1LjVyZW07XG59XG5cbi5ibG9nQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iaWxkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdyaWQtY29sdW1uLWdhcDogNTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vYy53YWxsaGVyZS5jb20vcGhvdG9zLzg3L2M3L2JsYWNrX2JhY2tncm91bmRfbGluZXNfbWluaW1hbGlzbV9hYnN0cmFjdF9zcXVhcmVfYmx1ZS0xOTI1OTI1LmpwZyFkXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5maWd1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJpbGRlciBpbWcge1xuICBtYXgtaGVpZ2h0OiA3NXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuZmlnY2FwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ud2FzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnRleHQge1xuICBtYXgtd2lkdGg6IDc1Y2g7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnNlaXRlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zZWl0ZW4gaDIge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgNHZoLCAzLjVyZW0pO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlaXRlbiBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ib3JkZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.scss'],
            }]
    }], function () { return [{ type: _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Components/projekte/webentwicklung/blog/bslider/bslider.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/Components/projekte/webentwicklung/blog/bslider/bslider.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BsliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsliderComponent", function() { return BsliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = ["slides"];
function BsliderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bild_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bild_r1.nummer + 1, " / 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", bild_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", bild_r1.titel);
} }
class BsliderComponent {
    constructor() {
        // Bilder-Galerie zum Eshop
        this.bilder = [
            { img: 'assets/blog/b1.png', titel: 'Registrieren', nummer: 0 },
            { img: 'assets/blog/b2.png', titel: 'Login', nummer: 1 },
            { img: 'assets/blog/b3.png', titel: 'Storyboard', nummer: 2 },
            { img: 'assets/blog/b4.png', titel: 'Post erstellen', nummer: 3 },
            { img: 'assets/blog/b5.png', titel: 'Post ansehen', nummer: 4 },
        ];
        // Slider-Einstellungen
        this.slideIndex = 1;
    }
    plusSlides(n) {
        this.showSlides((this.slideIndex += n));
    }
    currentSlide(n) {
        this.showSlides((this.slideIndex = n));
    }
    showSlides(n) {
        let i;
        const slides = document.getElementsByClassName('mySlides');
        const captionText = document.getElementById('caption');
        if (n > slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[this.slideIndex - 1].style.display = 'block';
        captionText.innerHTML = this.bilder[this.slideIndex - 1].titel;
    }
    //  onInit
    ngOnInit() { }
    ngAfterViewInit() {
        this.showSlides(this.slideIndex);
    }
}
BsliderComponent.ɵfac = function BsliderComponent_Factory(t) { return new (t || BsliderComponent)(); };
BsliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BsliderComponent, selectors: [["app-bslider"]], viewQuery: function BsliderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slides = _t.first);
    } }, decls: 8, vars: 1, consts: [[1, "container"], ["class", "mySlides", 4, "ngFor", "ngForOf"], [1, "prev", 3, "click"], [1, "next", 3, "click"], [1, "caption-container"], ["id", "caption"], [1, "mySlides"], ["slides", ""], [1, "numbertext"], [2, "max-height", "1000px", "object-fit", "contain", 3, "src", "alt"]], template: function BsliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BsliderComponent_div_1_Template, 5, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BsliderComponent_Template_a_click_2_listener() { return ctx.plusSlides(0 - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u276E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BsliderComponent_Template_a_click_4_listener() { return ctx.plusSlides(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u276F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bilder);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 75%;\n  margin-bottom: 100px;\n}\n\n\n\n.mySlides[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n}\n\n.mySlides[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 15px;\n}\n\n\n\n.cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -50px;\n  color: white;\n  font-weight: bold;\n  font-size: 2rem;\n  border-radius: 0 3px 3px 0;\n  -moz-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n\n\n\n.next[_ngcontent-%COMP%] {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n\n\n.numbertext[_ngcontent-%COMP%] {\n  color: var(--text);\n  font-size: 1.2rem;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n}\n\n\n\n.caption-container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n  background-color: #222;\n  color: white;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS93ZWJlbnR3aWNrbHVuZy9ibG9nL2JzbGlkZXIvRDpcXERlc2t0b3BcXFdlYkRldlxcMi4gQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxwcm9qZWt0ZVxcd2ViZW50d2lja2x1bmdcXGJsb2dcXGJzbGlkZXJcXGJzbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvd2ViZW50d2lja2x1bmcvYmxvZy9ic2xpZGVyL2JzbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBLGdGQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQSwrQkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENFO0VBQ0UsbUJBQUE7QUNDSjs7QURHQSwwREFBQTs7QUFDQTtFQUNFLGVBQUE7QUNBRjs7QURHQSw0QkFBQTs7QUFFQTs7RUFFRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO09BQUEsaUJBQUE7RUFDQSx5QkFBQTtBQ0RGOztBRElBLDRDQUFBOztBQUNBO0VBQ0UsUUFBQTtFQUNBLDBCQUFBO0FDREY7O0FESUE7O0VBRUUsb0NBQUE7QUNERjs7QURJQSwwQkFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtBQ0RGOztBRElBLDZCQUFBOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL3dlYmVudHdpY2tsdW5nL2Jsb2cvYnNsaWRlci9ic2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogUG9zaXRpb24gdGhlIGltYWdlIGNvbnRhaW5lciAobmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBsZWZ0IGFuZCByaWdodCBhcnJvd3MpICovXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4vKiBIaWRlIHRoZSBpbWFnZXMgYnkgZGVmYXVsdCAqL1xyXG4ubXlTbGlkZXMge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIEFkZCBhIHBvaW50ZXIgd2hlbiBob3ZlcmluZyBvdmVyIHRoZSB0aHVtYm5haWwgaW1hZ2VzICovXHJcbi5jdXJzb3Ige1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogTmV4dCAmIHByZXZpb3VzIGJ1dHRvbnMgKi9cclxuXHJcbi5wcmV2LFxyXG4ubmV4dCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLyogUG9zaXRpb24gdGhlIFwibmV4dCBidXR0b25cIiB0byB0aGUgcmlnaHQgKi9cclxuLm5leHQge1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xyXG59XHJcblxyXG4ucHJldixcclxuLm5leHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxufVxyXG5cclxuLyogTnVtYmVyIHRleHQgKDEvMyBldGMpICovXHJcbi5udW1iZXJ0ZXh0IHtcclxuICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLyogQ29udGFpbmVyIGZvciBpbWFnZSB0ZXh0ICovXHJcbi5jYXB0aW9uLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIFBvc2l0aW9uIHRoZSBpbWFnZSBjb250YWluZXIgKG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgbGVmdCBhbmQgcmlnaHQgYXJyb3dzKSAqL1xuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi8qIEhpZGUgdGhlIGltYWdlcyBieSBkZWZhdWx0ICovXG4ubXlTbGlkZXMge1xuICBkaXNwbGF5OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubXlTbGlkZXMgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLyogQWRkIGEgcG9pbnRlciB3aGVuIGhvdmVyaW5nIG92ZXIgdGhlIHRodW1ibmFpbCBpbWFnZXMgKi9cbi5jdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIE5leHQgJiBwcmV2aW91cyBidXR0b25zICovXG4ucHJldixcbi5uZXh0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xufVxuXG4vKiBQb3NpdGlvbiB0aGUgXCJuZXh0IGJ1dHRvblwiIHRvIHRoZSByaWdodCAqL1xuLm5leHQge1xuICByaWdodDogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XG59XG5cbi5wcmV2LFxuLm5leHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG5cbi8qIE51bWJlciB0ZXh0ICgxLzMgZXRjKSAqL1xuLm51bWJlcnRleHQge1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG59XG5cbi8qIENvbnRhaW5lciBmb3IgaW1hZ2UgdGV4dCAqL1xuLmNhcHRpb24tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bslider',
                templateUrl: './bslider.component.html',
                styleUrls: ['./bslider.component.scss'],
            }]
    }], null, { slides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['slides']
        }] }); })();


/***/ }),

/***/ "./src/app/Components/projekte/webentwicklung/verein/verein.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Components/projekte/webentwicklung/verein/verein.component.ts ***!
  \*******************************************************************************/
/*! exports provided: VereinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VereinComponent", function() { return VereinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../services/modeToggle.service */ "./src/services/modeToggle.service.ts");
/* harmony import */ var _vslider_vslider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vslider/vslider.component */ "./src/app/Components/projekte/webentwicklung/verein/vslider/vslider.component.ts");




class VereinComponent {
    constructor(toggle) {
        this.toggle = toggle;
    }
    ngOnInit() { }
}
VereinComponent.ɵfac = function VereinComponent_Factory(t) { return new (t || VereinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"])); };
VereinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VereinComponent, selectors: [["app-verein"]], decls: 7, vars: 1, consts: [[1, "titleVerein"], ["href", "https://github.com/joscha-sattler/Verein", "target", "_blank"], ["alt", "GitHub", 3, "src"], [1, "slider"]], template: function VereinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Verein");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-vslider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toggle.gitHub, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_vslider_vslider_component__WEBPACK_IMPORTED_MODULE_2__["VsliderComponent"]], styles: [".titleVerein[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.titleVerein[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  height: 75px;\n}\n.titleVerein[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS93ZWJlbnR3aWNrbHVuZy92ZXJlaW4vRDpcXERlc2t0b3BcXFdlYkRldlxcMi4gQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxwcm9qZWt0ZVxcd2ViZW50d2lja2x1bmdcXHZlcmVpblxcdmVyZWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL3dlYmVudHdpY2tsdW5nL3ZlcmVpbi92ZXJlaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0k7RUFDRSxlQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL3dlYmVudHdpY2tsdW5nL3ZlcmVpbi92ZXJlaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVWZXJlaW4ge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIudGl0bGVWZXJlaW4ge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRpdGxlVmVyZWluIGltZyB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBoZWlnaHQ6IDc1cHg7XG59XG4udGl0bGVWZXJlaW4gaW1nOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VereinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-verein',
                templateUrl: './verein.component.html',
                styleUrls: ['./verein.component.scss'],
            }]
    }], function () { return [{ type: _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Components/projekte/webentwicklung/verein/vslider/vslider.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/Components/projekte/webentwicklung/verein/vslider/vslider.component.ts ***!
  \****************************************************************************************/
/*! exports provided: VsliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VsliderComponent", function() { return VsliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function VsliderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bild_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bild_r1.nummer + 1, " / 9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", bild_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", bild_r1.titel);
} }
class VsliderComponent {
    constructor() {
        // Bilder-Galerie zum Verein
        this.bilder = [
            { img: 'assets/verein/tt1.png', titel: 'Startseite', nummer: 0 },
            {
                img: 'assets/verein/tt2.png',
                titel: 'Tischtennis - Allgemein',
                nummer: 1,
            },
            {
                img: 'assets/verein/tt3.png',
                titel: 'Tischtennis - Mannschaften',
                nummer: 2,
            },
            {
                img: 'assets/verein/tt4.png',
                titel: 'Tischetennis - Spieler hinzufügen',
                nummer: 3,
            },
            { img: 'assets/verein/tt5.png', titel: 'Tischtennis - Galerie', nummer: 4 },
            { img: 'assets/verein/tt6.png', titel: 'Handball', nummer: 5 },
            { img: 'assets/verein/tt7.png', titel: 'Volleyball', nummer: 6 },
            { img: 'assets/verein/tt8.png', titel: 'Turnen - Allgemein', nummer: 7 },
            { img: 'assets/verein/tt9.jpg', titel: 'Turnen - Galerie', nummer: 8 },
        ];
        // Slider-Einstellungen
        this.slideIndex = 1;
    }
    plusSlides(n) {
        this.showSlides((this.slideIndex += n));
    }
    currentSlide(n) {
        this.showSlides((this.slideIndex = n));
    }
    showSlides(n) {
        let i;
        const slides = document.getElementsByClassName('mySlides');
        const captionText = document.getElementById('caption');
        if (n > slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[this.slideIndex - 1].style.display = 'block';
        captionText.innerHTML = this.bilder[this.slideIndex - 1].titel;
    }
    //  onInit
    ngOnInit() { }
    ngAfterViewInit() {
        this.showSlides(this.slideIndex);
    }
}
VsliderComponent.ɵfac = function VsliderComponent_Factory(t) { return new (t || VsliderComponent)(); };
VsliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VsliderComponent, selectors: [["app-vslider"]], decls: 8, vars: 1, consts: [[1, "container"], ["class", "mySlides", 4, "ngFor", "ngForOf"], [1, "prev", 3, "click"], [1, "next", 3, "click"], [1, "caption-container"], ["id", "caption"], [1, "mySlides"], [1, "numbertext"], [2, "max-height", "1000px", "object-fit", "contain", 3, "src", "alt"]], template: function VsliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VsliderComponent_div_1_Template, 4, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VsliderComponent_Template_a_click_2_listener() { return ctx.plusSlides(0 - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u276E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VsliderComponent_Template_a_click_4_listener() { return ctx.plusSlides(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u276F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bilder);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 75%;\n  margin-bottom: 100px;\n}\n\n\n\n.mySlides[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n}\n\n.mySlides[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 15px;\n}\n\n\n\n.cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -50px;\n  color: white;\n  font-weight: bold;\n  font-size: 2rem;\n  border-radius: 0 3px 3px 0;\n  -moz-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n\n\n\n.next[_ngcontent-%COMP%] {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n\n\n.numbertext[_ngcontent-%COMP%] {\n  color: var(--text);\n  font-size: 1.2rem;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n}\n\n\n\n.caption-container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n  background-color: #222;\n  color: white;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS93ZWJlbnR3aWNrbHVuZy92ZXJlaW4vdnNsaWRlci9EOlxcRGVza3RvcFxcV2ViRGV2XFwyLiBBbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHByb2pla3RlXFx3ZWJlbnR3aWNrbHVuZ1xcdmVyZWluXFx2c2xpZGVyXFx2c2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL3dlYmVudHdpY2tsdW5nL3ZlcmVpbi92c2xpZGVyL3ZzbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBLGdGQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQSwrQkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENFO0VBQ0UsbUJBQUE7QUNDSjs7QURHQSwwREFBQTs7QUFDQTtFQUNFLGVBQUE7QUNBRjs7QURHQSw0QkFBQTs7QUFFQTs7RUFFRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO09BQUEsaUJBQUE7RUFDQSx5QkFBQTtBQ0RGOztBRElBLDRDQUFBOztBQUNBO0VBQ0UsUUFBQTtFQUNBLDBCQUFBO0FDREY7O0FESUE7O0VBRUUsb0NBQUE7QUNERjs7QURJQSwwQkFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtBQ0RGOztBRElBLDZCQUFBOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL3dlYmVudHdpY2tsdW5nL3ZlcmVpbi92c2xpZGVyL3ZzbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKiBQb3NpdGlvbiB0aGUgaW1hZ2UgY29udGFpbmVyIChuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGxlZnQgYW5kIHJpZ2h0IGFycm93cykgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi8qIEhpZGUgdGhlIGltYWdlcyBieSBkZWZhdWx0ICovXHJcbi5teVNsaWRlcyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogQWRkIGEgcG9pbnRlciB3aGVuIGhvdmVyaW5nIG92ZXIgdGhlIHRodW1ibmFpbCBpbWFnZXMgKi9cclxuLmN1cnNvciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBOZXh0ICYgcHJldmlvdXMgYnV0dG9ucyAqL1xyXG5cclxuLnByZXYsXHJcbi5uZXh0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4vKiBQb3NpdGlvbiB0aGUgXCJuZXh0IGJ1dHRvblwiIHRvIHRoZSByaWdodCAqL1xyXG4ubmV4dCB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbn1cclxuXHJcbi5wcmV2LFxyXG4ubmV4dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG59XHJcblxyXG4vKiBOdW1iZXIgdGV4dCAoMS8zIGV0YykgKi9cclxuLm51bWJlcnRleHQge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4vKiBDb250YWluZXIgZm9yIGltYWdlIHRleHQgKi9cclxuLmNhcHRpb24tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogUG9zaXRpb24gdGhlIGltYWdlIGNvbnRhaW5lciAobmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBsZWZ0IGFuZCByaWdodCBhcnJvd3MpICovXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuLyogSGlkZSB0aGUgaW1hZ2VzIGJ5IGRlZmF1bHQgKi9cbi5teVNsaWRlcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5teVNsaWRlcyBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4vKiBBZGQgYSBwb2ludGVyIHdoZW4gaG92ZXJpbmcgb3ZlciB0aGUgdGh1bWJuYWlsIGltYWdlcyAqL1xuLmN1cnNvciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogTmV4dCAmIHByZXZpb3VzIGJ1dHRvbnMgKi9cbi5wcmV2LFxuLm5leHQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8qIFBvc2l0aW9uIHRoZSBcIm5leHQgYnV0dG9uXCIgdG8gdGhlIHJpZ2h0ICovXG4ubmV4dCB7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbn1cblxuLnByZXYsXG4ubmV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cblxuLyogTnVtYmVyIHRleHQgKDEvMyBldGMpICovXG4ubnVtYmVydGV4dCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLyogQ29udGFpbmVyIGZvciBpbWFnZSB0ZXh0ICovXG4uY2FwdGlvbi1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VsliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vslider',
                templateUrl: './vslider.component.html',
                styleUrls: ['./vslider.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Components/projekte/webentwicklung/webentwicklung.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/Components/projekte/webentwicklung/webentwicklung.component.ts ***!
  \********************************************************************************/
/*! exports provided: WebentwicklungComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebentwicklungComponent", function() { return WebentwicklungComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/Components/projekte/webentwicklung/blog/blog.component.ts");
/* harmony import */ var _verein_verein_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verein/verein.component */ "./src/app/Components/projekte/webentwicklung/verein/verein.component.ts");





const _c0 = ["goto"];
function WebentwicklungComponent_app_blog_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-blog");
} }
function WebentwicklungComponent_app_verein_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-verein");
} }
function WebentwicklungComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "W\u00E4hle ein Projekt aus!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WebentwicklungComponent {
    constructor() {
        this.blog = false;
        this.verein = false;
    }
    ngOnInit() { }
    toggleBlog() {
        this.verein = false;
        this.blog = true;
        document.getElementById('blog').classList.add('figureClick');
        document.getElementById('verein').classList.remove('figureClick');
        setTimeout(() => {
            this.goto.nativeElement.scrollIntoView({
                block: 'start',
            });
        }, 50);
    }
    toggleVerein() {
        this.blog = false;
        this.verein = true;
        document.getElementById('blog').classList.remove('figureClick');
        document.getElementById('verein').classList.add('figureClick');
        setTimeout(() => {
            this.goto.nativeElement.scrollIntoView({
                block: 'start',
            });
        }, 50);
    }
}
WebentwicklungComponent.ɵfac = function WebentwicklungComponent_Factory(t) { return new (t || WebentwicklungComponent)(); };
WebentwicklungComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WebentwicklungComponent, selectors: [["app-webentwicklung"]], viewQuery: function WebentwicklungComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.goto = _t.first);
    } }, decls: 21, vars: 3, consts: [[1, "titleWebdev"], [1, "WebdevContainer"], ["id", "blog", 1, "figure", 3, "click"], ["src", "assets/blog.jpg", "alt", "Blog"], ["id", "verein", 1, "figure", 3, "click"], ["src", "assets/verein.png", "alt", "Verein"], [1, "projekte"], ["goto", ""], [4, "ngIf"], ["class", "pick", 4, "ngIf"], [1, "pick"]], template: function WebentwicklungComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Projekte ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Webentwicklung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebentwicklungComponent_Template_figure_click_6_listener() { return ctx.toggleBlog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "figure", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebentwicklungComponent_Template_figure_click_10_listener() { return ctx.toggleVerein(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Verein");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WebentwicklungComponent_app_blog_17_Template, 1, 0, "app-blog", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, WebentwicklungComponent_app_verein_19_Template, 1, 0, "app-verein", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, WebentwicklungComponent_div_20_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blog);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verein);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.blog && !ctx.verein);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"], _verein_verein_component__WEBPACK_IMPORTED_MODULE_3__["VereinComponent"]], styles: [".projekte[_ngcontent-%COMP%] {\n  scroll-margin-top: 10rem;\n}\n\n.titleWebdev[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.WebdevContainer[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  grid-gap: 20px;\n  grid-auto-flow: row;\n  margin: auto;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 300px));\n}\n\n.WebdevContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 1px solid var(--boxShadow);\n  border-radius: 5px;\n}\n\n.pick[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 25px;\n  text-align: center;\n}\n\n.figure[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 4px 3px var(--boxShadow);\n  cursor: pointer;\n  color: var(--hover);\n}\n\n.figure[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 2.6rem;\n  text-align: center;\n  background-color: var(--cardBack);\n  color: var(--cardBackText);\n  border: 2px solid var(--cardBorder);\n}\n\n.figureClick[_ngcontent-%COMP%] {\n  box-shadow: 0 0 4px 3px var(--hover);\n  border: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS93ZWJlbnR3aWNrbHVuZy9EOlxcRGVza3RvcFxcV2ViRGV2XFwyLiBBbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHByb2pla3RlXFx3ZWJlbnR3aWNrbHVuZ1xcd2ViZW50d2lja2x1bmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvd2ViZW50d2lja2x1bmcvd2ViZW50d2lja2x1bmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEsNkRBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUVBLGtDQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0Usd0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtFQUVBLG1DQUFBO0FDRkY7O0FES0E7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL3dlYmVudHdpY2tsdW5nL3dlYmVudHdpY2tsdW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2pla3RlIHtcclxuICBzY3JvbGwtbWFyZ2luLXRvcDogMTByZW07XHJcbn1cclxuXHJcbi50aXRsZVdlYmRldiB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLldlYmRldkNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBncmlkLWdhcDogMjBweDtcclxuICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMzAwcHgpKTtcclxufVxyXG5cclxuLldlYmRldkNvbnRhaW5lciBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcblxyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJveFNoYWRvdyk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ucGljayB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZpZ3VyZTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDRweCAzcHggdmFyKC0tYm94U2hhZG93KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLWhvdmVyKTtcclxufVxyXG5cclxuLmZpZ3VyZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgZm9udC1zaXplOiAyLjZyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmRCYWNrKTtcclxuICBjb2xvcjogdmFyKC0tY2FyZEJhY2tUZXh0KTtcclxuXHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2FyZEJvcmRlcik7XHJcbn1cclxuXHJcbi5maWd1cmVDbGljayB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDRweCAzcHggdmFyKC0taG92ZXIpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiLnByb2pla3RlIHtcbiAgc2Nyb2xsLW1hcmdpbi10b3A6IDEwcmVtO1xufVxuXG4udGl0bGVXZWJkZXYge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5XZWJkZXZDb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ3JpZC1nYXA6IDIwcHg7XG4gIGdyaWQtYXV0by1mbG93OiByb3c7XG4gIG1hcmdpbjogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMzAwcHgpKTtcbn1cblxuLldlYmRldkNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJveFNoYWRvdyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnBpY2sge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5maWd1cmU6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgNHB4IDNweCB2YXIoLS1ib3hTaGFkb3cpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1ob3Zlcik7XG59XG5cbi5maWd1cmUge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMi42cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmRCYWNrKTtcbiAgY29sb3I6IHZhcigtLWNhcmRCYWNrVGV4dCk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNhcmRCb3JkZXIpO1xufVxuXG4uZmlndXJlQ2xpY2sge1xuICBib3gtc2hhZG93OiAwIDAgNHB4IDNweCB2YXIoLS1ob3Zlcik7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebentwicklungComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-webentwicklung',
                templateUrl: './webentwicklung.component.html',
                styleUrls: ['./webentwicklung.component.scss'],
            }]
    }], function () { return []; }, { goto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['goto']
        }] }); })();


/***/ }),

/***/ "./src/app/Components/skills/skills.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/skills/skills.component.ts ***!
  \*******************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SkillsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 147, vars: 0, consts: [[1, "titleSkills"], [1, "skillscontainer"], ["id", "frontend", 1, "elementImElternContainer"], [1, "title"], [1, "content"], ["src", "assets/logoHTML.png", "alt", "html"], ["src", "assets/logoCSS.png", "alt", "css"], ["src", "assets/logoJS.png", "alt", "js"], ["id", "frameworks", 1, "elementImElternContainer"], ["src", "assets/angular.png", "alt", "Angular"], ["src", "assets/vue.png", "alt", "Vue"], ["src", "assets/bootstrap.png", "alt", "Bootstrap"], ["id", "backend", 1, "elementImElternContainer"], ["src", "assets/csharp.png", "alt", "CSharp"], ["src", "assets/java.png", "alt", "Java"], ["src", "assets/mysql_PNG23.png", "alt", "MySql"], ["src", "assets/mongodb-logo.png", "alt", "MongoDB"], ["src", "assets/node.png", "alt", "Nodejs"], ["id", "ide", 1, "elementImElternContainer"], ["src", "assets/jetbrains.png", "alt", "JetBrains"], ["src", "assets/vscode.png", "alt", "VSCode"], ["src", "assets/vs.png", "alt", "VS"], ["src", "assets/eclipse.png", "alt", "Eclipse"], ["id", "adobe", 1, "elementImElternContainer"], ["src", "assets/ps.png", "alt", "Photoshop"], ["src", "assets/lr.png", "alt", "Lightroom"], ["src", "assets/pr.png", "alt", "Premiere"], ["src", "assets/ae.png", "alt", "After Effects"], ["src", "assets/xd.png", "alt", "Adobe Xd"], ["id", "office", 1, "elementImElternContainer"], ["src", "assets/excel.png", "alt", "Excel"], ["src", "assets/pp.png", "alt", "Powerpoint"], ["src", "assets/word.png", "alt", "Word"], ["id", "sonstige", 1, "elementImElternContainer"], ["src", "assets/git.png", "alt", "Git"], ["src", "assets/logoGithub.png", "alt", "Github"], ["src", "assets/Typescript.png", "alt", "TypeScript"], ["src", "assets/scrum.png", "alt", "Scrum"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Frontend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HTML 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "CSS 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Frameworks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Vue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Backend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "C# / CSharp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "MySQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "MongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Node js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "IDE's");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "JetBrains");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "VS Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Visual Studio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Eclipse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Adobe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Photoshop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Lightroom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Premiere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "After Effects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Xd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Microsoft Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Powerpoint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Word");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Sonstige");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Git");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "TypeScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Scrum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".titleSkills[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.skillscontainer[_ngcontent-%COMP%] {\n  display: grid;\n  width: 75%;\n  margin: auto;\n  grid-gap: 2rem;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  grid-template-areas: \" frontend    frameworks \" \" backend   backend \" \" ide       ide \" \" adobe    adobe \" \" office  sonstige\";\n}\n\nfigure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nfigcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n}\n\n.title[_ngcontent-%COMP%] {\n  grid-area: titel;\n  color: white;\n  text-align: center;\n  padding: 15px;\n}\n\n.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n#frontend[_ngcontent-%COMP%] {\n  grid-area: frontend;\n}\n\n#frameworks[_ngcontent-%COMP%] {\n  grid-area: frameworks;\n}\n\n#backend[_ngcontent-%COMP%] {\n  grid-area: backend;\n}\n\n#ide[_ngcontent-%COMP%] {\n  grid-area: ide;\n}\n\n#adobe[_ngcontent-%COMP%] {\n  grid-area: adobe;\n}\n\n#office[_ngcontent-%COMP%] {\n  grid-area: office;\n}\n\n#sonstige[_ngcontent-%COMP%] {\n  grid-area: sonstige;\n}\n\n.elementImElternContainer[_ngcontent-%COMP%] {\n  background-image: url(\"https://www.heilig-schwab.de/media/6112f995-0484-415e-a843-ecd489c3c866/Hintergrundbilder/automatisierungstechnik-heilig-schwab.jpg\");\n  background-size: cover;\n  background-attachment: fixed;\n  border-radius: 15px;\n}\n\n@media (max-width: 950px) {\n  .skillscontainer[_ngcontent-%COMP%] {\n    grid-template-areas: \" frontend    frontend \" \" frameworks  frameworks\" \" backend     backend \" \" ide         ide \" \" adobe       adobe \" \" office      office\" \" sonstige    sonstige \";\n  }\n\n  figure[_ngcontent-%COMP%] {\n    width: 125px;\n  }\n\n  img[_ngcontent-%COMP%] {\n    max-height: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9za2lsbHMvRDpcXERlc2t0b3BcXFdlYkRldlxcMi4gQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxza2lsbHNcXHNraWxscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBRUEsMkRBQUE7RUFFQSw4SEFDRTtBQ0pKOztBRGVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7QUNiRjs7QURnQkE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNiRjs7QURnQkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUNiRjs7QURrQkE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNmRjs7QURpQkU7RUFDRSxpQkFBQTtBQ2ZKOztBRG1CQTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0VBRUEsbUJBQUE7RUFDQSw2QkFBQTtBQ25CRjs7QUQwQkE7RUFDRSxtQkFBQTtBQ3ZCRjs7QUQyQkE7RUFDRSxxQkFBQTtBQ3hCRjs7QUQ0QkE7RUFDRSxrQkFBQTtBQ3pCRjs7QUQ2QkE7RUFDRSxjQUFBO0FDMUJGOztBRDhCQTtFQUNFLGdCQUFBO0FDM0JGOztBRCtCQTtFQUNFLGlCQUFBO0FDNUJGOztBRGdDQTtFQUNFLG1CQUFBO0FDN0JGOztBRGlDQTtFQUNFLDRKQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDOUJGOztBRGtDQTtFQUNFO0lBQ0Usd0xBQ0E7RUNoQ0Y7O0VEeUNBO0lBQ0UsWUFBQTtFQ3RDRjs7RUR3Q0E7SUFDRSxnQkFBQTtFQ3JDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGl0ZWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG4udGl0bGVTa2lsbHMge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vIEdlc2FtdC1Db250YWluZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG4uc2tpbGxzY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGdyaWQtZ2FwOiAycmVtO1xyXG5cclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcclxuXHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICcgZnJvbnRlbmQgICAgZnJhbWV3b3JrcyAnXHJcbiAgICAnIGJhY2tlbmQgICBiYWNrZW5kICdcclxuICAgICcgaWRlICAgICAgIGlkZSAnXHJcbiAgICAnIGFkb2JlICAgIGFkb2JlICdcclxuICAgICcgb2ZmaWNlICBzb25zdGlnZSc7XHJcblxyXG59XHJcblxyXG5cclxuLy8gSW1hZ2UtU3R1ZmYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuZmlndXJlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgd2lkdGg6IDE3NXB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbmZpZ2NhcHRpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4vLyBUaXRlbCArIENvbnRlbnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuLnRpdGxlIHtcclxuICBncmlkLWFyZWE6IHRpdGVsO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTVweDtcclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVudCB7XHJcblxyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHJcbn1cclxuXHJcbi8vIEdyaWQtQXJlYXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuLy8gSXRlbSAxXHJcbiNmcm9udGVuZCB7XHJcbiAgZ3JpZC1hcmVhOiBmcm9udGVuZDtcclxufVxyXG5cclxuLy8gSXRlbSAyXHJcbiNmcmFtZXdvcmtzIHtcclxuICBncmlkLWFyZWE6IGZyYW1ld29ya3M7XHJcbn1cclxuXHJcbi8vIEl0ZW0gM1xyXG4jYmFja2VuZCB7XHJcbiAgZ3JpZC1hcmVhOiBiYWNrZW5kO1xyXG59XHJcblxyXG4vLyBJdGVtIDRcclxuI2lkZSB7XHJcbiAgZ3JpZC1hcmVhOiBpZGU7XHJcbn1cclxuXHJcbi8vIEl0ZW0gNVxyXG4jYWRvYmUge1xyXG4gIGdyaWQtYXJlYTogYWRvYmU7XHJcbn1cclxuXHJcbi8vIEl0ZW0gNlxyXG4jb2ZmaWNlIHtcclxuICBncmlkLWFyZWE6IG9mZmljZTtcclxufVxyXG5cclxuLy8gSXRlbSA3XHJcbiNzb25zdGlnZSB7XHJcbiAgZ3JpZC1hcmVhOiBzb25zdGlnZTtcclxufVxyXG5cclxuLy8gSGludGVyZ3J1bmQgZXRjLiBmw7xyIGFsbGUgS2luZC1FbGVtZW50ZVxyXG4uZWxlbWVudEltRWx0ZXJuQ29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3d3dy5oZWlsaWctc2Nod2FiLmRlL21lZGlhLzYxMTJmOTk1LTA0ODQtNDE1ZS1hODQzLWVjZDQ4OWMzYzg2Ni9IaW50ZXJncnVuZGJpbGRlci9hdXRvbWF0aXNpZXJ1bmdzdGVjaG5pay1oZWlsaWctc2Nod2FiLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLy8gQW5wYXNzZW4gYmVpIGtsZWluZXIgU2NyZWVuZ3LDtsOfZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gIC5za2lsbHNjb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICcgZnJvbnRlbmQgICAgZnJvbnRlbmQgJ1xyXG4gICAgJyBmcmFtZXdvcmtzICBmcmFtZXdvcmtzJ1xyXG4gICAgJyBiYWNrZW5kICAgICBiYWNrZW5kICdcclxuICAgICcgaWRlICAgICAgICAgaWRlICdcclxuICAgICcgYWRvYmUgICAgICAgYWRvYmUgJ1xyXG4gICAgJyBvZmZpY2UgICAgICBvZmZpY2UnXHJcbiAgICAnIHNvbnN0aWdlICAgIHNvbnN0aWdlICc7XHJcbiAgfVxyXG5cclxuICBmaWd1cmUge1xyXG4gICAgd2lkdGg6IDEyNXB4O1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogNTBweDtcclxuICB9XHJcbn1cclxuIiwiLnRpdGxlU2tpbGxzIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2tpbGxzY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBncmlkLWdhcDogMnJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiIGZyb250ZW5kICAgIGZyYW1ld29ya3MgXCIgXCIgYmFja2VuZCAgIGJhY2tlbmQgXCIgXCIgaWRlICAgICAgIGlkZSBcIiBcIiBhZG9iZSAgICBhZG9iZSBcIiBcIiBvZmZpY2UgIHNvbnN0aWdlXCI7XG59XG5cbmZpZ3VyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTc1cHg7XG59XG5cbmltZyB7XG4gIG1heC1oZWlnaHQ6IDc1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5maWdjYXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4udGl0bGUge1xuICBncmlkLWFyZWE6IHRpdGVsO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbn1cbi50aXRsZSBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuI2Zyb250ZW5kIHtcbiAgZ3JpZC1hcmVhOiBmcm9udGVuZDtcbn1cblxuI2ZyYW1ld29ya3Mge1xuICBncmlkLWFyZWE6IGZyYW1ld29ya3M7XG59XG5cbiNiYWNrZW5kIHtcbiAgZ3JpZC1hcmVhOiBiYWNrZW5kO1xufVxuXG4jaWRlIHtcbiAgZ3JpZC1hcmVhOiBpZGU7XG59XG5cbiNhZG9iZSB7XG4gIGdyaWQtYXJlYTogYWRvYmU7XG59XG5cbiNvZmZpY2Uge1xuICBncmlkLWFyZWE6IG9mZmljZTtcbn1cblxuI3NvbnN0aWdlIHtcbiAgZ3JpZC1hcmVhOiBzb25zdGlnZTtcbn1cblxuLmVsZW1lbnRJbUVsdGVybkNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vd3d3LmhlaWxpZy1zY2h3YWIuZGUvbWVkaWEvNjExMmY5OTUtMDQ4NC00MTVlLWE4NDMtZWNkNDg5YzNjODY2L0hpbnRlcmdydW5kYmlsZGVyL2F1dG9tYXRpc2llcnVuZ3N0ZWNobmlrLWhlaWxpZy1zY2h3YWIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgLnNraWxsc2NvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCIgZnJvbnRlbmQgICAgZnJvbnRlbmQgXCIgXCIgZnJhbWV3b3JrcyAgZnJhbWV3b3Jrc1wiIFwiIGJhY2tlbmQgICAgIGJhY2tlbmQgXCIgXCIgaWRlICAgICAgICAgaWRlIFwiIFwiIGFkb2JlICAgICAgIGFkb2JlIFwiIFwiIG9mZmljZSAgICAgIG9mZmljZVwiIFwiIHNvbnN0aWdlICAgIHNvbnN0aWdlIFwiO1xuICB9XG5cbiAgZmlndXJlIHtcbiAgICB3aWR0aDogMTI1cHg7XG4gIH1cblxuICBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDUwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Components/thumbnail/thumbnail.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Components/thumbnail/thumbnail.component.ts ***!
  \*************************************************************/
/*! exports provided: ThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailComponent", function() { return ThumbnailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/modeToggle.service */ "./src/services/modeToggle.service.ts");



class ThumbnailComponent {
    constructor(imgToggleService) {
        this.imgToggleService = imgToggleService;
    }
    ngOnInit() { }
}
ThumbnailComponent.ɵfac = function ThumbnailComponent_Factory(t) { return new (t || ThumbnailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"])); };
ThumbnailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThumbnailComponent, selectors: [["app-thumbnail"]], decls: 17, vars: 4, consts: [[1, "grid"], [1, "figure1"], ["alt", "Portrait", 3, "src"], [1, "rechts"], [1, "titel"], [1, "icons"], [1, "figure"], ["alt", "Design", 3, "src"], ["alt", "Programmieren", 3, "src"], ["alt", "Webdentwicklung", 3, "src"]], template: function ThumbnailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Design, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Software, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Webentwicklung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "figure", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "figure", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "figure", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgToggleService.mePng, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgToggleService.design, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgToggleService.proggen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgToggleService.webdev, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".grid[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-auto-flow: row;\n  min-height: 100vh;\n  max-width: 1500px;\n  margin: auto;\n  grid-template-columns: repeat(auto-fit, minmax(50px, 700px));\n}\n\n.grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.figure1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.rechts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.titel[_ngcontent-%COMP%] {\n  font-size: clamp(4rem, 4vw, 6rem);\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n}\n\n.icons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 175px));\n  justify-content: center;\n}\n\n.icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n}\n\n@media (max-width: 1415px) {\n  .titel[_ngcontent-%COMP%] {\n    word-wrap: break-word;\n    word-break: break-all;\n  }\n\n  .icons[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy90aHVtYm5haWwvRDpcXERlc2t0b3BcXFdlYkRldlxcMi4gQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFx0aHVtYm5haWxcXHRodW1ibmFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy90aHVtYm5haWwvdGh1bWJuYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBRUEsNERBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0RGOztBREdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURFQTtFQUNFLGlDQUFBO0VBQ0EsaUJBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSw2REFBQTtFQUNBLHVCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUVFO0lBQ0UscUJBQUE7SUFDQSxxQkFBQTtFQ0RGOztFREdBO0lBQ0UsYUFBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3RodW1ibmFpbC90aHVtYm5haWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIG1heC13aWR0aDogMTUwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MHB4LCA3MDBweCkpO1xyXG59XHJcblxyXG4uZ3JpZCBpbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZpZ3VyZTEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnJlY2h0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi50aXRlbCB7XHJcbiAgZm9udC1zaXplOiBjbGFtcCg0cmVtLCA0dncgLCA2cmVtKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmljb25zIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDE3NXB4KSk7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pY29ucyBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTQxNXB4KSB7XHJcblxyXG4gIC50aXRlbCB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgfVxyXG4gIC5pY29ucyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiLmdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1heC13aWR0aDogMTUwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgNzAwcHgpKTtcbn1cblxuLmdyaWQgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uZmlndXJlMSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucmVjaHRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50aXRlbCB7XG4gIGZvbnQtc2l6ZTogY2xhbXAoNHJlbSwgNHZ3LCA2cmVtKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaWNvbnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxNzVweCkpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmljb25zIGltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0MTVweCkge1xuICAudGl0ZWwge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIH1cblxuICAuaWNvbnMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThumbnailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-thumbnail',
                templateUrl: './thumbnail.component.html',
                styleUrls: ['./thumbnail.component.scss'],
            }]
    }], function () { return [{ type: src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _Components_projekte_factory_factory_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/projekte/factory/factory.component */ "./src/app/Components/projekte/factory/factory.component.ts");
/* harmony import */ var _Components_projekte_design_design_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/projekte/design/design.component */ "./src/app/Components/projekte/design/design.component.ts");
/* harmony import */ var _Components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/main-page/main-page.component */ "./src/app/Components/main-page/main-page.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Components_projekte_webentwicklung_webentwicklung_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/projekte/webentwicklung/webentwicklung.component */ "./src/app/Components/projekte/webentwicklung/webentwicklung.component.ts");
/* harmony import */ var _Components_projekte_eshop_eshop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/projekte/eshop/eshop.component */ "./src/app/Components/projekte/eshop/eshop.component.ts");
/* harmony import */ var _Components_projekte_games_games_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/projekte/games/games.component */ "./src/app/Components/projekte/games/games.component.ts");










const routes = [
    { path: '', redirectTo: '/Startseite', pathMatch: 'full' },
    { path: 'Startseite', component: _Components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"] },
    { path: 'Webentwicklung', component: _Components_projekte_webentwicklung_webentwicklung_component__WEBPACK_IMPORTED_MODULE_5__["WebentwicklungComponent"] },
    { path: 'Eshop', component: _Components_projekte_eshop_eshop_component__WEBPACK_IMPORTED_MODULE_6__["EshopComponent"] },
    { path: 'Design', component: _Components_projekte_design_design_component__WEBPACK_IMPORTED_MODULE_1__["DesignComponent"] },
    { path: 'Games', component: _Components_projekte_games_games_component__WEBPACK_IMPORTED_MODULE_7__["GamesComponent"] },
    { path: 'SmartFactory', component: _Components_projekte_factory_factory_component__WEBPACK_IMPORTED_MODULE_0__["FactoryComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Components_main_page_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/main-page/navigation/navigation.component */ "./src/app/Components/main-page/navigation/navigation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'Angular-SCSS';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_Components_main_page_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: themeFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeFactory", function() { return themeFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _Components_projekte_factory_fslider_fslider_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/projekte/factory/fslider/fslider.component */ "./src/app/Components/projekte/factory/fslider/fslider.component.ts");
/* harmony import */ var _Components_projekte_factory_factory_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/projekte/factory/factory.component */ "./src/app/Components/projekte/factory/factory.component.ts");
/* harmony import */ var _Components_projekte_games_twitch_twitch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/projekte/games/twitch/twitch.component */ "./src/app/Components/projekte/games/twitch/twitch.component.ts");
/* harmony import */ var _Components_projekte_games_shooter_shooter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/projekte/games/shooter/shooter.component */ "./src/app/Components/projekte/games/shooter/shooter.component.ts");
/* harmony import */ var _Components_projekte_games_games_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/projekte/games/games.component */ "./src/app/Components/projekte/games/games.component.ts");
/* harmony import */ var _Components_projekte_games_shooter_gslides_gslides_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/projekte/games/shooter/gslides/gslides.component */ "./src/app/Components/projekte/games/shooter/gslides/gslides.component.ts");
/* harmony import */ var _Components_projekte_design_photoshop_pslider_pslider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/projekte/design/photoshop/pslider/pslider.component */ "./src/app/Components/projekte/design/photoshop/pslider/pslider.component.ts");
/* harmony import */ var _Components_projekte_design_aftereffect_aftereffect_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/projekte/design/aftereffect/aftereffect.component */ "./src/app/Components/projekte/design/aftereffect/aftereffect.component.ts");
/* harmony import */ var _Components_projekte_design_photoshop_photoshop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/projekte/design/photoshop/photoshop.component */ "./src/app/Components/projekte/design/photoshop/photoshop.component.ts");
/* harmony import */ var _Components_projekte_design_design_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/projekte/design/design.component */ "./src/app/Components/projekte/design/design.component.ts");
/* harmony import */ var _Components_projekte_webentwicklung_blog_bslider_bslider_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/projekte/webentwicklung/blog/bslider/bslider.component */ "./src/app/Components/projekte/webentwicklung/blog/bslider/bslider.component.ts");
/* harmony import */ var _Components_projekte_webentwicklung_verein_vslider_vslider_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/projekte/webentwicklung/verein/vslider/vslider.component */ "./src/app/Components/projekte/webentwicklung/verein/vslider/vslider.component.ts");
/* harmony import */ var _Components_projekte_eshop_slider_slider_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/projekte/eshop/slider/slider.component */ "./src/app/Components/projekte/eshop/slider/slider.component.ts");
/* harmony import */ var _Components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/main-page/main-page.component */ "./src/app/Components/main-page/main-page.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_main_page_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/main-page/navigation/navigation.component */ "./src/app/Components/main-page/navigation/navigation.component.ts");
/* harmony import */ var src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/services/modeToggle.service */ "./src/services/modeToggle.service.ts");
/* harmony import */ var src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/services/local-storage.service */ "./src/services/local-storage.service.ts");
/* harmony import */ var _Components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Components/about-me/about-me.component */ "./src/app/Components/about-me/about-me.component.ts");
/* harmony import */ var _Components_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Components/kontakt/kontakt.component */ "./src/app/Components/kontakt/kontakt.component.ts");
/* harmony import */ var _Components_projekt_galerie_projekt_galerie_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Components/projekt-galerie/projekt-galerie.component */ "./src/app/Components/projekt-galerie/projekt-galerie.component.ts");
/* harmony import */ var _Components_projekte_webentwicklung_webentwicklung_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Components/projekte/webentwicklung/webentwicklung.component */ "./src/app/Components/projekte/webentwicklung/webentwicklung.component.ts");
/* harmony import */ var _Components_projekte_webentwicklung_verein_verein_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Components/projekte/webentwicklung/verein/verein.component */ "./src/app/Components/projekte/webentwicklung/verein/verein.component.ts");
/* harmony import */ var _Components_projekte_webentwicklung_blog_blog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Components/projekte/webentwicklung/blog/blog.component */ "./src/app/Components/projekte/webentwicklung/blog/blog.component.ts");
/* harmony import */ var _Components_skills_skills_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Components/skills/skills.component */ "./src/app/Components/skills/skills.component.ts");
/* harmony import */ var _Components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Components/thumbnail/thumbnail.component */ "./src/app/Components/thumbnail/thumbnail.component.ts");
/* harmony import */ var _Components_projekte_eshop_eshop_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Components/projekte/eshop/eshop.component */ "./src/app/Components/projekte/eshop/eshop.component.ts");
































function themeFactory(themeService) {
    return () => themeService.setThemeOnStart();
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_19__["ModeToggleService"],
        src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_20__["StorageService"],
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_15__["APP_INITIALIZER"],
            useFactory: themeFactory,
            deps: [src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_19__["ModeToggleService"]],
            multi: true,
        },
    ], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
        _Components_main_page_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_18__["NavigationComponent"],
        _Components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_13__["MainPageComponent"],
        _Components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_21__["AboutMeComponent"],
        _Components_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_22__["KontaktComponent"],
        _Components_projekt_galerie_projekt_galerie_component__WEBPACK_IMPORTED_MODULE_23__["ProjektGalerieComponent"],
        _Components_projekte_webentwicklung_webentwicklung_component__WEBPACK_IMPORTED_MODULE_24__["WebentwicklungComponent"],
        _Components_projekte_webentwicklung_verein_verein_component__WEBPACK_IMPORTED_MODULE_25__["VereinComponent"],
        _Components_projekte_webentwicklung_blog_blog_component__WEBPACK_IMPORTED_MODULE_26__["BlogComponent"],
        _Components_skills_skills_component__WEBPACK_IMPORTED_MODULE_27__["SkillsComponent"],
        _Components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_28__["ThumbnailComponent"],
        _Components_projekte_eshop_eshop_component__WEBPACK_IMPORTED_MODULE_29__["EshopComponent"],
        _Components_projekte_eshop_slider_slider_component__WEBPACK_IMPORTED_MODULE_12__["SliderComponent"],
        _Components_projekte_webentwicklung_verein_vslider_vslider_component__WEBPACK_IMPORTED_MODULE_11__["VsliderComponent"],
        _Components_projekte_webentwicklung_blog_bslider_bslider_component__WEBPACK_IMPORTED_MODULE_10__["BsliderComponent"],
        _Components_projekte_design_design_component__WEBPACK_IMPORTED_MODULE_9__["DesignComponent"],
        _Components_projekte_design_photoshop_photoshop_component__WEBPACK_IMPORTED_MODULE_8__["PhotoshopComponent"],
        _Components_projekte_design_aftereffect_aftereffect_component__WEBPACK_IMPORTED_MODULE_7__["AftereffectComponent"],
        _Components_projekte_design_photoshop_pslider_pslider_component__WEBPACK_IMPORTED_MODULE_6__["PsliderComponent"],
        _Components_projekte_games_shooter_gslides_gslides_component__WEBPACK_IMPORTED_MODULE_5__["GslidesComponent"],
        _Components_projekte_games_games_component__WEBPACK_IMPORTED_MODULE_4__["GamesComponent"],
        _Components_projekte_games_shooter_shooter_component__WEBPACK_IMPORTED_MODULE_3__["ShooterComponent"],
        _Components_projekte_games_twitch_twitch_component__WEBPACK_IMPORTED_MODULE_2__["TwitchComponent"],
        _Components_projekte_factory_factory_component__WEBPACK_IMPORTED_MODULE_1__["FactoryComponent"],
        _Components_projekte_factory_fslider_fslider_component__WEBPACK_IMPORTED_MODULE_0__["FsliderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_15__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
                    _Components_main_page_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_18__["NavigationComponent"],
                    _Components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_13__["MainPageComponent"],
                    _Components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_21__["AboutMeComponent"],
                    _Components_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_22__["KontaktComponent"],
                    _Components_projekt_galerie_projekt_galerie_component__WEBPACK_IMPORTED_MODULE_23__["ProjektGalerieComponent"],
                    _Components_projekte_webentwicklung_webentwicklung_component__WEBPACK_IMPORTED_MODULE_24__["WebentwicklungComponent"],
                    _Components_projekte_webentwicklung_verein_verein_component__WEBPACK_IMPORTED_MODULE_25__["VereinComponent"],
                    _Components_projekte_webentwicklung_blog_blog_component__WEBPACK_IMPORTED_MODULE_26__["BlogComponent"],
                    _Components_skills_skills_component__WEBPACK_IMPORTED_MODULE_27__["SkillsComponent"],
                    _Components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_28__["ThumbnailComponent"],
                    _Components_projekte_eshop_eshop_component__WEBPACK_IMPORTED_MODULE_29__["EshopComponent"],
                    _Components_projekte_eshop_slider_slider_component__WEBPACK_IMPORTED_MODULE_12__["SliderComponent"],
                    _Components_projekte_webentwicklung_verein_vslider_vslider_component__WEBPACK_IMPORTED_MODULE_11__["VsliderComponent"],
                    _Components_projekte_webentwicklung_blog_bslider_bslider_component__WEBPACK_IMPORTED_MODULE_10__["BsliderComponent"],
                    _Components_projekte_design_design_component__WEBPACK_IMPORTED_MODULE_9__["DesignComponent"],
                    _Components_projekte_design_photoshop_photoshop_component__WEBPACK_IMPORTED_MODULE_8__["PhotoshopComponent"],
                    _Components_projekte_design_aftereffect_aftereffect_component__WEBPACK_IMPORTED_MODULE_7__["AftereffectComponent"],
                    _Components_projekte_design_photoshop_pslider_pslider_component__WEBPACK_IMPORTED_MODULE_6__["PsliderComponent"],
                    _Components_projekte_games_shooter_gslides_gslides_component__WEBPACK_IMPORTED_MODULE_5__["GslidesComponent"],
                    _Components_projekte_games_games_component__WEBPACK_IMPORTED_MODULE_4__["GamesComponent"],
                    _Components_projekte_games_shooter_shooter_component__WEBPACK_IMPORTED_MODULE_3__["ShooterComponent"],
                    _Components_projekte_games_twitch_twitch_component__WEBPACK_IMPORTED_MODULE_2__["TwitchComponent"],
                    _Components_projekte_factory_factory_component__WEBPACK_IMPORTED_MODULE_1__["FactoryComponent"],
                    _Components_projekte_factory_fslider_fslider_component__WEBPACK_IMPORTED_MODULE_0__["FsliderComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"]],
                providers: [
                    src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_19__["ModeToggleService"],
                    src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_20__["StorageService"],
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_15__["APP_INITIALIZER"],
                        useFactory: themeFactory,
                        deps: [src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_19__["ModeToggleService"]],
                        multi: true,
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/services/local-storage.service.ts":
/*!***********************************************!*\
  !*** ./src/services/local-storage.service.ts ***!
  \***********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StorageService {
    get(key) {
        return localStorage ? localStorage.getItem(key) : null;
    }
    set(key, value) {
        if (localStorage) {
            localStorage.setItem(key, value);
        }
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/services/modeToggle.service.ts":
/*!********************************************!*\
  !*** ./src/services/modeToggle.service.ts ***!
  \********************************************/
/*! exports provided: ThemeMode, ModeToggleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeMode", function() { return ThemeMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeToggleService", function() { return ModeToggleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage.service */ "./src/services/local-storage.service.ts");




var ThemeMode;
(function (ThemeMode) {
    ThemeMode[ThemeMode["DARK"] = 0] = "DARK";
    ThemeMode[ThemeMode["LIGHT"] = 1] = "LIGHT";
})(ThemeMode || (ThemeMode = {}));
class ModeToggleService {
    constructor(storage) {
        this.storage = storage;
        this.theme$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](ThemeMode.LIGHT);
        this.THEME_KEY = 'THEME';
        this.DARK_THEME_VALUE = 'DARK';
        this.LIGHT_THEME_VALUE = 'LIGHT';
        this.DARK_THEME_CLASS_NAME = 'theme-dark';
        this.darkThemeSelected = false;
    }
    setThemeOnStart() {
        if (this.isDarkThemeSelected()) {
            this.setDarkTheme();
        }
        else {
            this.setLightTheme();
        }
        setTimeout(() => {
            document.body.classList.add('animate-colors-transition');
        }, 500);
    }
    toggle() {
        if (this.darkThemeSelected) {
            this.setLightTheme();
        }
        else {
            this.setDarkTheme();
        }
    }
    isDarkThemeSelected() {
        this.darkThemeSelected =
            this.storage.get(this.THEME_KEY) === this.DARK_THEME_VALUE;
        return this.darkThemeSelected;
    }
    setLightTheme() {
        this.design = 'assets/designlight.png';
        this.proggen = 'assets/proggenlight.png';
        this.webdev = 'assets/webtwicklunglight.png';
        this.mePng = 'assets/triangleportraitlight.png';
        this.gitHub = 'assets/logoGithubClick.png';
        this.storage.set(this.THEME_KEY, this.LIGHT_THEME_VALUE);
        document.body.classList.remove(this.DARK_THEME_CLASS_NAME);
        this.darkThemeSelected = false;
        this.theme$.next(ThemeMode.LIGHT);
    }
    setDarkTheme() {
        this.design = 'assets/designdark.png';
        this.proggen = 'assets/proggendark.png';
        this.webdev = 'assets/webentwicklungdark.png';
        this.mePng = 'assets/triangleportraitdark.png';
        this.gitHub = 'assets/logoGithubClickLight.png';
        this.storage.set(this.THEME_KEY, this.DARK_THEME_VALUE);
        document.body.classList.add(this.DARK_THEME_CLASS_NAME);
        this.darkThemeSelected = true;
        this.theme$.next(ThemeMode.DARK);
    }
    getDarkTheme() {
        return this.darkThemeSelected;
    }
}
ModeToggleService.ɵfac = function ModeToggleService_Factory(t) { return new (t || ModeToggleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"])); };
ModeToggleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModeToggleService, factory: ModeToggleService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModeToggleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _local_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/services/nav.service.ts":
/*!*************************************!*\
  !*** ./src/services/nav.service.ts ***!
  \*************************************/
/*! exports provided: NavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavService", function() { return NavService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class NavService {
    constructor() {
        // Verantwortlich dafür, dass die main-page mit der Navigation kommunizieren kann und Methoden austauscht
        this.subject1 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subject2 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subject3 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subject4 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subject5 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    sendClickEvent1() {
        this.subject1.next();
    }
    sendClickEvent2() {
        this.subject2.next();
    }
    sendClickEvent3() {
        this.subject3.next();
    }
    sendClickEvent4() {
        this.subject4.next();
    }
    sendClickEvent5() {
        this.subject5.next();
    }
    getClickEvent1() {
        return this.subject1.asObservable();
    }
    getClickEvent2() {
        return this.subject2.asObservable();
    }
    getClickEvent3() {
        return this.subject3.asObservable();
    }
    getClickEvent4() {
        return this.subject4.asObservable();
    }
    getClickEvent5() {
        return this.subject5.asObservable();
    }
}
NavService.ɵfac = function NavService_Factory(t) { return new (t || NavService)(); };
NavService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavService, factory: NavService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Desktop\WebDev\2. Angular-Projekte\Portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map