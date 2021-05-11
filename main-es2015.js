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
    } }, styles: [".about-me[_ngcontent-%COMP%] {\n  min-height: 75vh;\n  width: 75%;\n  margin: auto;\n  display: grid;\n  padding: 10px;\n  grid-column-gap: 50px;\n  justify-content: center;\n  grid-template-columns: 400px minmax(600px, 750px);\n  grid-auto-rows: auto;\n  grid-template-areas: \"bild inhalt\";\n}\n\n.titel[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.bild[_ngcontent-%COMP%] {\n  grid-area: bild;\n}\n\n.bild[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  border: 2px solid var(--cardBorder);\n  border-radius: 10px;\n}\n\n.inhalt[_ngcontent-%COMP%] {\n  grid-area: inhalt;\n  max-width: 75ch;\n  text-align: justify;\n}\n\n@media (max-width: 950px) {\n  .about-me[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(100px, 200px) minmax(100px, 350px);\n    grid-template-areas: \"titel  titel\" \"bild   bild\" \"inhalt inhalt\";\n  }\n\n  .bild[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n\n  .inhalt[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9hYm91dC1tZS9EOlxcRGVza3RvcFxcV2ViRGV2XFwyX0FuZ3VsYXItUHJvamVrdGVcXFBvcnRmb2xpby9zcmNcXGFwcFxcQ29tcG9uZW50c1xcYWJvdXQtbWVcXGFib3V0LW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUVBLGlEQUFBO0VBQ0Esb0JBQUE7RUFFQSxrQ0FBQTtBQ0ZGOztBREtBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBRE9BO0VBQ0U7SUFDRSxnRUFBQTtJQUVBLGlFQUNFO0VDTko7O0VEV0E7SUFDRSxnQkFBQTtFQ1JGOztFRFVBO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtFQ1BGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LW1lIHtcclxuICBtaW4taGVpZ2h0OiA3NXZoO1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcblxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiA1MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwMHB4IG1pbm1heCg2MDBweCwgNzUwcHgpO1xyXG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xyXG5cclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnYmlsZCBpbmhhbHQnO1xyXG59XHJcblxyXG4udGl0ZWwge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iaWxkIHtcclxuICBncmlkLWFyZWE6IGJpbGQ7XHJcbn1cclxuXHJcbi5iaWxkIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2FyZEJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmluaGFsdCB7XHJcbiAgZ3JpZC1hcmVhOiBpbmhhbHQ7XHJcbiAgbWF4LXdpZHRoOiA3NWNoO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi8vIEJlaSBrbGVpbmVyZW0gQmlsZHNjaGlybVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgLmFib3V0LW1lIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDEwMHB4LCAyMDBweCkgbWlubWF4KDEwMHB4LCAzNTBweCk7XHJcblxyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgJ3RpdGVsICB0aXRlbCdcclxuICAgICAgJ2JpbGQgICBiaWxkJ1xyXG4gICAgICAnaW5oYWx0IGluaGFsdCc7XHJcbiAgfVxyXG5cclxuICAuYmlsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIH1cclxuICAuaW5oYWx0IHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiIsIi5hYm91dC1tZSB7XG4gIG1pbi1oZWlnaHQ6IDc1dmg7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMTBweDtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiA1MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MDBweCBtaW5tYXgoNjAwcHgsIDc1MHB4KTtcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYmlsZCBpbmhhbHRcIjtcbn1cblxuLnRpdGVsIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmlsZCB7XG4gIGdyaWQtYXJlYTogYmlsZDtcbn1cblxuLmJpbGQgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmluaGFsdCB7XG4gIGdyaWQtYXJlYTogaW5oYWx0O1xuICBtYXgtd2lkdGg6IDc1Y2g7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuICAuYWJvdXQtbWUge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDEwMHB4LCAyMDBweCkgbWlubWF4KDEwMHB4LCAzNTBweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJ0aXRlbCAgdGl0ZWxcIiBcImJpbGQgICBiaWxkXCIgXCJpbmhhbHQgaW5oYWx0XCI7XG4gIH1cblxuICAuYmlsZCB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuXG4gIC5pbmhhbHQge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59Il19 */"] });
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
KontaktComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KontaktComponent, selectors: [["app-kontakt"]], decls: 12, vars: 0, consts: [[1, "titleKontakt"], [1, "kontaktContainer"], [1, "email"], [1, "btn"], ["href", "mailto:joscha.sattler@outlook.de"], [1, "fas", "fa-envelope"], [1, "phone"], [1, "fas", "fa-mobile-alt"]], template: function KontaktComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Kontakt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Email Senden ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " : 0151 59169322 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".titleKontakt[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.kontaktContainer[_ngcontent-%COMP%] {\n  min-height: 10vh;\n  display: flex;\n  font-size: 2.4rem;\n  align-items: center;\n  flex-direction: column;\n  gap: 5rem;\n  margin-bottom: 2rem;\n}\n\n.email[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.email[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: bold;\n  border: 2px solid var(--text);\n  color: var(--text);\n  min-width: 15vw;\n}\n\n.email[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9rb250YWt0L0Q6XFxEZXNrdG9wXFxXZWJEZXZcXDJfQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxrb250YWt0XFxrb250YWt0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL2tvbnRha3Qva29udGFrdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDSTtFQUNFLGtCQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2tvbnRha3Qva29udGFrdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZUtvbnRha3Qge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5rb250YWt0Q29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiAxMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1zaXplOiAyLjRyZW07XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4uZW1haWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRleHQpO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xyXG4gICAgbWluLXdpZHRoOiAxNXZ3O1xyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCIudGl0bGVLb250YWt0IHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ua29udGFrdENvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDVyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5lbWFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmVtYWlsIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgbWluLXdpZHRoOiAxNXZ3O1xufVxuLmVtYWlsIGJ1dHRvbiBhIHtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufSJdfQ== */"] });
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
    } }, directives: [_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_2__["ThumbnailComponent"], _projekt_galerie_projekt_galerie_component__WEBPACK_IMPORTED_MODULE_3__["ProjektGalerieComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__["AboutMeComponent"], _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_6__["KontaktComponent"]], styles: [".scroll[_ngcontent-%COMP%] {\n  scroll-margin-top: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9tYWluLXBhZ2UvRDpcXERlc2t0b3BcXFdlYkRldlxcMl9Bbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXG1haW4tcGFnZVxcbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbCB7XHJcbiAgc2Nyb2xsLW1hcmdpbi10b3A6IDEwcmVtO1xyXG59XHJcbiIsIi5zY3JvbGwge1xuICBzY3JvbGwtbWFyZ2luLXRvcDogMTByZW07XG59Il19 */"] });
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
    } }, styles: [".ganzeNav[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n}\n.bgNav[_ngcontent-%COMP%] {\n  background-color: var(--navBackground);\n  border-bottom: 1px solid black;\n}\n\n.navbar-nav[_ngcontent-%COMP%] {\n  margin-right: 5%;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-left: 35px;\n  color: var(--text);\n}\n.nav-link[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: var(--hover);\n}\n.bgLink[_ngcontent-%COMP%] {\n  color: var(--textreverse);\n}\n.bgLink[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: var(--hoverreverse);\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  font-size: 2.6rem;\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.fa-adjust[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.navTopBorder[_ngcontent-%COMP%] {\n  border: none;\n}\n.navTopBorderReverse[_ngcontent-%COMP%] {\n  border: none;\n}\n@media (max-width: 991px) {\n  .navTopBorder[_ngcontent-%COMP%] {\n    border-top: 2px solid var(--cardBorder);\n  }\n\n  .navTopBorderReverse[_ngcontent-%COMP%] {\n    border-top: 2px solid var(--cardBorderReverse);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9tYWluLXBhZ2UvbmF2aWdhdGlvbi9EOlxcRGVza3RvcFxcV2ViRGV2XFwyX0FuZ3VsYXItUHJvamVrdGVcXFBvcnRmb2xpby9zcmNcXGFwcFxcQ29tcG9uZW50c1xcbWFpbi1wYWdlXFxuYXZpZ2F0aW9uXFxuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL21haW4tcGFnZS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNDRjtBREVBO0VBQ0Usc0NBQUE7RUFDQSw4QkFBQTtBQ0NGO0FERUEseUNBQUE7QUFDQTtFQUNFLGdCQUFBO0FDQ0Y7QURHQSxhQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FGO0FERUU7RUFDRSxtQkFBQTtBQ0FKO0FESUE7RUFDRSx5QkFBQTtBQ0RGO0FER0U7RUFDRSwwQkFBQTtBQ0RKO0FES0E7RUFDRSxpQkFBQTtBQ0ZGO0FETUE7RUFDRSxlQUFBO0FDSEY7QURNQTtFQUNFLGVBQUE7QUNIRjtBRE1BLGNBQUE7QUFFQTtFQUNFLFlBQUE7QUNKRjtBRE1BO0VBQ0UsWUFBQTtBQ0hGO0FETUE7RUFDRTtJQUNFLHVDQUFBO0VDSEY7O0VES0E7SUFDRSw4Q0FBQTtFQ0ZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL21haW4tcGFnZS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHYW56ZSBOYXYgKi9cclxuLmdhbnplTmF2IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYmdOYXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdkJhY2tncm91bmQpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLyogRGVyIFJhaG1lbiwgd28gZGllIExpbmtzIGRyaW5uZSBzaW5kICovXHJcbi5uYXZiYXItbmF2IHtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG5cclxuLyogZGVyIExpbmsgKi9cclxuLm5hdi1saW5rIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgY29sb3I6IHZhcigtLXRleHQpO1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWhvdmVyKTtcclxuICB9XHJcbn1cclxuXHJcbi5iZ0xpbmsge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0cmV2ZXJzZSk7XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0taG92ZXJyZXZlcnNlKTtcclxuICB9XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xyXG59XHJcblxyXG5cclxuYTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZmEtYWRqdXN0OmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIG5hdiBCb3JkZXIqL1xyXG5cclxuLm5hdlRvcEJvcmRlciB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5uYXZUb3BCb3JkZXJSZXZlcnNlIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC5uYXZUb3BCb3JkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWNhcmRCb3JkZXIpO1xyXG4gIH1cclxuICAubmF2VG9wQm9yZGVyUmV2ZXJzZSB7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tY2FyZEJvcmRlclJldmVyc2UpO1xyXG4gIH1cclxufVxyXG4iLCIvKiBHYW56ZSBOYXYgKi9cbi5nYW56ZU5hdiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmdOYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZCYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4vKiBEZXIgUmFobWVuLCB3byBkaWUgTGlua3MgZHJpbm5lIHNpbmQgKi9cbi5uYXZiYXItbmF2IHtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuLyogZGVyIExpbmsgKi9cbi5uYXYtbGluayB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cbi5uYXYtbGluayA6aG92ZXIge1xuICBjb2xvcjogdmFyKC0taG92ZXIpO1xufVxuXG4uYmdMaW5rIHtcbiAgY29sb3I6IHZhcigtLXRleHRyZXZlcnNlKTtcbn1cbi5iZ0xpbmsgOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWhvdmVycmV2ZXJzZSk7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBmb250LXNpemU6IDIuNnJlbTtcbn1cblxuYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLWFkanVzdDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogbmF2IEJvcmRlciovXG4ubmF2VG9wQm9yZGVyIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubmF2VG9wQm9yZGVyUmV2ZXJzZSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5uYXZUb3BCb3JkZXIge1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyKTtcbiAgfVxuXG4gIC5uYXZUb3BCb3JkZXJSZXZlcnNlIHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tY2FyZEJvcmRlclJldmVyc2UpO1xuICB9XG59Il19 */"] });
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".titleProjekte[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n.parent[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  grid-gap: 20px;\n  grid-auto-flow: row;\n  max-width: 1000px;\n  margin: auto;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 300px));\n}\n.parent[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border: 1px solid var(--boxShadow);\n  border-radius: 5px;\n}\n.figure[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 4px 3px var(--boxShadow);\n  cursor: pointer;\n  color: var(--hover);\n}\n.figure[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 2.6rem;\n  text-align: center;\n  background-color: var(--cardBack);\n  color: var(--cardBackText);\n  border: 2px solid var(--cardBorder);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0LWdhbGVyaWUvRDpcXERlc2t0b3BcXFdlYkRldlxcMl9Bbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHByb2pla3QtZ2FsZXJpZVxccHJvamVrdC1nYWxlcmllLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3QtZ2FsZXJpZS9wcm9qZWt0LWdhbGVyaWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQUE7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FGO0FER0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSw2REFBQTtBQ0ZGO0FES0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtDQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE1BO0VBQ0Usd0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNIRjtBRE1BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0VBRUEsbUNBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdC1nYWxlcmllL3Byb2pla3QtZ2FsZXJpZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJpbGRlci1HYWxlcmllICovXHJcblxyXG4udGl0bGVQcm9qZWt0ZSB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBhcmVudCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBncmlkLWdhcDogMjBweDtcclxuICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG5cclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDMwMHB4KSk7XHJcbn1cclxuXHJcbi5wYXJlbnQgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJveFNoYWRvdyk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uZmlndXJlOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgNHB4IDNweCB2YXIoLS1ib3hTaGFkb3cpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogdmFyKC0taG92ZXIpO1xyXG59XHJcblxyXG4uZmlndXJlIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICBmb250LXNpemU6IDIuNnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZEJhY2spO1xyXG4gIGNvbG9yOiB2YXIoLS1jYXJkQmFja1RleHQpO1xyXG5cclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyKTtcclxufVxyXG4iLCIvKiBCaWxkZXItR2FsZXJpZSAqL1xuLnRpdGxlUHJvamVrdGUge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wYXJlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ3JpZC1nYXA6IDIwcHg7XG4gIGdyaWQtYXV0by1mbG93OiByb3c7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDMwMHB4KSk7XG59XG5cbi5wYXJlbnQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm94U2hhZG93KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZmlndXJlOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDRweCAzcHggdmFyKC0tYm94U2hhZG93KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0taG92ZXIpO1xufVxuXG4uZmlndXJlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBmb250LXNpemU6IDIuNnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkQmFjayk7XG4gIGNvbG9yOiB2YXIoLS1jYXJkQmFja1RleHQpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyKTtcbn0iXX0= */"] });
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
AftereffectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AftereffectComponent, selectors: [["app-aftereffect"]], decls: 25, vars: 0, consts: [[1, "titleDesign"], [1, "all"], [1, "video"], ["src", "https://www.youtube.com/embed/nkHs4765b9g", "allowfullscreen", ""], [1, "info"], [1, "skillscontainer"], ["id", "frameworks", 1, "elementImElternContainer"], [1, "content"], ["src", "assets/ae.png", "alt", "After Effect"], ["src", "assets/pr.png", "alt", "Premiere"], ["src", "assets/ps.png", "alt", "Photoshop"]], template: function AftereffectComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Genutzte Tools ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "After Effect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Premiere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Photoshop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".titleDesign[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.all[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  margin-bottom: 50px;\n}\n\n.all[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n.all[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 75vh;\n}\n\n.skillscontainer[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n\n.skillscontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.skillscontainer[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: var(--text);\n}\n\n.skillscontainer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9kZXNpZ24vYWZ0ZXJlZmZlY3QvRDpcXERlc2t0b3BcXFdlYkRldlxcMl9Bbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHByb2pla3RlXFxkZXNpZ25cXGFmdGVyZWZmZWN0XFxhZnRlcmVmZmVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9kZXNpZ24vYWZ0ZXJlZmZlY3QvYWZ0ZXJlZmZlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURJQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDREY7O0FER0U7RUFDRSxVQUFBO0FDREo7O0FER0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0ROOztBRFNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7QUNQSjs7QURVRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ1JKOztBRFdFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNUSjs7QURjRTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0VBRUEsbUJBQUE7RUFDQSx1QkFBQTtBQ2ZKOztBRG9CQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNqQkYiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL2Rlc2lnbi9hZnRlcmVmZmVjdC9hZnRlcmVmZmVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZURlc2lnbiB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLy8gVmlkZW9cclxuXHJcbi5hbGwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcblxyXG4gIC52aWRlbyB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG5cclxuICAgIGlmcmFtZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDc1dmg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2tpbGxzY29udGFpbmVyIHtcclxuICAvLyBJbWFnZS1TdHVmZiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4gIGZpZ3VyZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogNzVweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgZmlnY2FwdGlvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29udGVudCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4gIC5jb250ZW50IHtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG59XHJcbiIsIi50aXRsZURlc2lnbiB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFsbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLmFsbCAudmlkZW8ge1xuICB3aWR0aDogNzUlO1xufVxuLmFsbCAudmlkZW8gaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzV2aDtcbn1cblxuLnNraWxsc2NvbnRhaW5lciBmaWd1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDE3NXB4O1xufVxuLnNraWxsc2NvbnRhaW5lciBpbWcge1xuICBtYXgtaGVpZ2h0OiA3NXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5za2lsbHNjb250YWluZXIgZmlnY2FwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuLnNraWxsc2NvbnRhaW5lciAuY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufSJdfQ== */"] });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _photoshop_photoshop_component__WEBPACK_IMPORTED_MODULE_2__["PhotoshopComponent"], _aftereffect_aftereffect_component__WEBPACK_IMPORTED_MODULE_3__["AftereffectComponent"]], styles: [".projekte[_ngcontent-%COMP%] {\n  scroll-margin-top: 10rem;\n}\n\n.titleDesign[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.designContainer[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  grid-gap: 20px;\n  grid-auto-flow: row;\n  margin: auto;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 300px));\n}\n\n.designContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 1px solid var(--boxShadow);\n  border-radius: 5px;\n}\n\n.pick[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 25px;\n  text-align: center;\n}\n\n.figure[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 4px 3px var(--boxShadow);\n  cursor: pointer;\n  color: var(--hover);\n}\n\n.figure[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 2.6rem;\n  text-align: center;\n  background-color: var(--cardBack);\n  color: var(--cardBackText);\n  border: 2px solid var(--cardBorder);\n}\n\n.figureClick[_ngcontent-%COMP%] {\n  box-shadow: 0 0 4px 3px var(--hover);\n  border: none;\n  cursor: pointer;\n}\n\n.video[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90%;\n  margin: auto;\n  padding-bottom: 56.25%;\n  height: 0;\n}\n\n.video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 75%;\n  height: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9kZXNpZ24vRDpcXERlc2t0b3BcXFdlYkRldlxcMl9Bbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHByb2pla3RlXFxkZXNpZ25cXGRlc2lnbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9kZXNpZ24vZGVzaWduLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLDZEQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFFQSxrQ0FBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMEJBQUE7RUFFQSxtQ0FBQTtBQ0ZGOztBREtBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBRE9BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL2Rlc2lnbi9kZXNpZ24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVrdGUge1xyXG4gIHNjcm9sbC1tYXJnaW4tdG9wOiAxMHJlbTtcclxufVxyXG5cclxuLnRpdGxlRGVzaWduIHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGVzaWduQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdyaWQtZ2FwOiAyMHB4O1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAzMDBweCkpO1xyXG59XHJcblxyXG4uZGVzaWduQ29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuXHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm94U2hhZG93KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5waWNrIHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmlndXJlOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgNHB4IDNweCB2YXIoLS1ib3hTaGFkb3cpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogdmFyKC0taG92ZXIpO1xyXG59XHJcblxyXG4uZmlndXJlIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICBmb250LXNpemU6IDIuNnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZEJhY2spO1xyXG4gIGNvbG9yOiB2YXIoLS1jYXJkQmFja1RleHQpO1xyXG5cclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyKTtcclxufVxyXG5cclxuLmZpZ3VyZUNsaWNrIHtcclxuICBib3gtc2hhZG93OiAwIDAgNHB4IDNweCB2YXIoLS1ob3Zlcik7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLy8gVmlkZW9cclxuXHJcbi52aWRlbyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4udmlkZW8gaWZyYW1lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBoZWlnaHQ6IDc1JTtcclxufVxyXG4iLCIucHJvamVrdGUge1xuICBzY3JvbGwtbWFyZ2luLXRvcDogMTByZW07XG59XG5cbi50aXRsZURlc2lnbiB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRlc2lnbkNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLWdhcDogMjBweDtcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgbWFyZ2luOiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAzMDBweCkpO1xufVxuXG4uZGVzaWduQ29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm94U2hhZG93KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucGljayB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZpZ3VyZTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggM3B4IHZhcigtLWJveFNoYWRvdyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuLmZpZ3VyZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgZm9udC1zaXplOiAyLjZyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZEJhY2spO1xuICBjb2xvcjogdmFyKC0tY2FyZEJhY2tUZXh0KTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2FyZEJvcmRlcik7XG59XG5cbi5maWd1cmVDbGljayB7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggM3B4IHZhcigtLWhvdmVyKTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi52aWRlbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xuICBoZWlnaHQ6IDA7XG59XG5cbi52aWRlbyBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDc1JTtcbiAgaGVpZ2h0OiA3NSU7XG59Il19 */"] });
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
PhotoshopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotoshopComponent, selectors: [["app-photoshop"]], decls: 16, vars: 0, consts: [[1, "titleDesign"], [1, "slider"], [1, "info"], [1, "skillscontainer"], ["id", "frameworks", 1, "elementImElternContainer"], [1, "content"], ["src", "assets/ps.png", "alt", "Pohotoshop"]], template: function PhotoshopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Photoshop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-pslider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Genutzte Tools ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Pohotoshop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_pslider_pslider_component__WEBPACK_IMPORTED_MODULE_1__["PsliderComponent"]], styles: [".titleDesign[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.skillscontainer[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n\n.skillscontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.skillscontainer[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: var(--text);\n}\n\n.skillscontainer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9kZXNpZ24vcGhvdG9zaG9wL0Q6XFxEZXNrdG9wXFxXZWJEZXZcXDJfQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxwcm9qZWt0ZVxcZGVzaWduXFxwaG90b3Nob3BcXHBob3Rvc2hvcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9kZXNpZ24vcGhvdG9zaG9wL3Bob3Rvc2hvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREtFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7QUNISjs7QURNRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0pKOztBRE9FO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURVRTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0VBRUEsbUJBQUE7RUFDQSx1QkFBQTtBQ1hKOztBRGdCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNiRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZGVzaWduL3Bob3Rvc2hvcC9waG90b3Nob3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVEZXNpZ24ge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5za2lsbHNjb250YWluZXIge1xyXG4gIC8vIEltYWdlLVN0dWZmIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbiAgZmlndXJlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOiAxNzVweDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA3NXB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5cclxuICBmaWdjYXB0aW9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgfVxyXG5cclxuICAvLyBDb250ZW50IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbiAgLmNvbnRlbnQge1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbn1cclxuIiwiLnRpdGxlRGVzaWduIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2tpbGxzY29udGFpbmVyIGZpZ3VyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTc1cHg7XG59XG4uc2tpbGxzY29udGFpbmVyIGltZyB7XG4gIG1heC1oZWlnaHQ6IDc1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnNraWxsc2NvbnRhaW5lciBmaWdjYXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG4uc2tpbGxzY29udGFpbmVyIC5jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59Il19 */"] });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 75%;\n  margin-bottom: 100px;\n}\n\n\n\n.mySlides[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n}\n\n.mySlides[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 2px solid var(--cardBorder);\n}\n\n\n\n.cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -50px;\n  color: white;\n  font-weight: bold;\n  font-size: 2rem;\n  border-radius: 0 3px 3px 0;\n  -moz-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n\n\n\n.next[_ngcontent-%COMP%] {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n\n\n.numbertext[_ngcontent-%COMP%] {\n  color: var(--text);\n  font-size: 1.2rem;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n}\n\n\n\n.caption-container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n  background-color: #222;\n  color: white;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9kZXNpZ24vcGhvdG9zaG9wL3BzbGlkZXIvRDpcXERlc2t0b3BcXFdlYkRldlxcMl9Bbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHByb2pla3RlXFxkZXNpZ25cXHBob3Rvc2hvcFxccHNsaWRlclxccHNsaWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9kZXNpZ24vcGhvdG9zaG9wL3BzbGlkZXIvcHNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUEsZ0ZBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBLCtCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxhQUFBO0VBQ0EsbUNBQUE7QUNDSjs7QURHQSwwREFBQTs7QUFDQTtFQUNFLGVBQUE7QUNBRjs7QURHQSw0QkFBQTs7QUFFQTs7RUFFRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO09BQUEsaUJBQUE7RUFDQSx5QkFBQTtBQ0RGOztBRElBLDRDQUFBOztBQUNBO0VBQ0UsUUFBQTtFQUNBLDBCQUFBO0FDREY7O0FESUE7O0VBRUUsb0NBQUE7QUNERjs7QURJQSwwQkFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtBQ0RGOztBRElBLDZCQUFBOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL2Rlc2lnbi9waG90b3Nob3AvcHNsaWRlci9wc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogUG9zaXRpb24gdGhlIGltYWdlIGNvbnRhaW5lciAobmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBsZWZ0IGFuZCByaWdodCBhcnJvd3MpICovXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4vKiBIaWRlIHRoZSBpbWFnZXMgYnkgZGVmYXVsdCAqL1xyXG4ubXlTbGlkZXMge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNhcmRCb3JkZXIpO1xyXG4gIH1cclxufVxyXG5cclxuLyogQWRkIGEgcG9pbnRlciB3aGVuIGhvdmVyaW5nIG92ZXIgdGhlIHRodW1ibmFpbCBpbWFnZXMgKi9cclxuLmN1cnNvciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBOZXh0ICYgcHJldmlvdXMgYnV0dG9ucyAqL1xyXG5cclxuLnByZXYsXHJcbi5uZXh0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4vKiBQb3NpdGlvbiB0aGUgXCJuZXh0IGJ1dHRvblwiIHRvIHRoZSByaWdodCAqL1xyXG4ubmV4dCB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbn1cclxuXHJcbi5wcmV2LFxyXG4ubmV4dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG59XHJcblxyXG4vKiBOdW1iZXIgdGV4dCAoMS8zIGV0YykgKi9cclxuLm51bWJlcnRleHQge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4vKiBDb250YWluZXIgZm9yIGltYWdlIHRleHQgKi9cclxuLmNhcHRpb24tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogUG9zaXRpb24gdGhlIGltYWdlIGNvbnRhaW5lciAobmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBsZWZ0IGFuZCByaWdodCBhcnJvd3MpICovXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuLyogSGlkZSB0aGUgaW1hZ2VzIGJ5IGRlZmF1bHQgKi9cbi5teVNsaWRlcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5teVNsaWRlcyBpbWcge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyKTtcbn1cblxuLyogQWRkIGEgcG9pbnRlciB3aGVuIGhvdmVyaW5nIG92ZXIgdGhlIHRodW1ibmFpbCBpbWFnZXMgKi9cbi5jdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIE5leHQgJiBwcmV2aW91cyBidXR0b25zICovXG4ucHJldixcbi5uZXh0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xufVxuXG4vKiBQb3NpdGlvbiB0aGUgXCJuZXh0IGJ1dHRvblwiIHRvIHRoZSByaWdodCAqL1xuLm5leHQge1xuICByaWdodDogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XG59XG5cbi5wcmV2LFxuLm5leHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG5cbi8qIE51bWJlciB0ZXh0ICgxLzMgZXRjKSAqL1xuLm51bWJlcnRleHQge1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG59XG5cbi8qIENvbnRhaW5lciBmb3IgaW1hZ2UgdGV4dCAqL1xuLmNhcHRpb24tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn0iXX0= */"] });
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
EshopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EshopComponent, selectors: [["app-eshop"]], decls: 18, vars: 1, consts: [[1, "titleEshop"], ["href", "https://github.com/joscha-sattler/Eshop-Java", "target", "_blank"], ["alt", "GitHub", 3, "src"], [1, "slider"], [1, "info"], [1, "skillscontainer"], ["id", "frameworks", 1, "elementImElternContainer"], [1, "content"], ["src", "assets/java.png", "alt", "Java"]], template: function EshopComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Genutzte Tools ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toggle.gitHub, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_slider_slider_component__WEBPACK_IMPORTED_MODULE_2__["SliderComponent"]], styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 5.5rem;\n}\n\n.titleEshop[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.titleEshop[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  height: 75px;\n}\n\n.titleEshop[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.titel[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.eshopContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 75%;\n  margin: 50px auto 30px;\n  justify-content: center;\n  align-items: center;\n}\n\n.skillscontainer[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n\n.skillscontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.skillscontainer[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: var(--text);\n}\n\n.skillscontainer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n.info[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9lc2hvcC9EOlxcRGVza3RvcFxcV2ViRGV2XFwyX0FuZ3VsYXItUHJvamVrdGVcXFBvcnRmb2xpby9zcmNcXGFwcFxcQ29tcG9uZW50c1xccHJvamVrdGVcXGVzaG9wXFxlc2hvcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9lc2hvcC9lc2hvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDSTtFQUNFLGVBQUE7QUNDTjs7QURJQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUVBLFVBQUE7RUFDQSxzQkFBQTtFQUVBLHVCQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURXRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0FDVEo7O0FEWUU7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNWSjs7QURhRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDWEo7O0FEZ0JFO0VBRUUsZ0JBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7RUFFQSxtQkFBQTtFQUNBLHVCQUFBO0FDakJKOztBRHNCQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ25CRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZXNob3AvZXNob3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgZm9udC1zaXplOiA1LjVyZW07XHJcbn1cclxuXHJcbi50aXRsZUVzaG9wIHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50aXRlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vIEdlc2FtdGNvbnRhaW5lclxyXG4uZXNob3BDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW46IDUwcHggYXV0byAzMHB4O1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLnNraWxsc2NvbnRhaW5lciB7XHJcbiAgLy8gSW1hZ2UtU3R1ZmYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICBmaWd1cmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIGZpZ2NhcHRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICB9XHJcblxyXG4gIC8vIENvbnRlbnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICAuY29udGVudCB7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbn1cclxuIiwiaDEge1xuICBmb250LXNpemU6IDUuNXJlbTtcbn1cblxuLnRpdGxlRXNob3Age1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRpdGxlRXNob3AgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIGhlaWdodDogNzVweDtcbn1cbi50aXRsZUVzaG9wIGltZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRpdGVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZXNob3BDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDUwcHggYXV0byAzMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNraWxsc2NvbnRhaW5lciBmaWd1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDE3NXB4O1xufVxuLnNraWxsc2NvbnRhaW5lciBpbWcge1xuICBtYXgtaGVpZ2h0OiA3NXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5za2lsbHNjb250YWluZXIgZmlnY2FwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuLnNraWxsc2NvbnRhaW5lciAuY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmluZm8ge1xuICBtYXJnaW4tdG9wOiAyLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59Il19 */"] });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 60%;\n}\n\n\n\n.mySlides[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n}\n\n\n\n.cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -50px;\n  color: white;\n  font-weight: bold;\n  font-size: 2rem;\n  border-radius: 0 3px 3px 0;\n  -moz-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n\n\n\n.next[_ngcontent-%COMP%] {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n\n\n.numbertext[_ngcontent-%COMP%] {\n  color: var(--text);\n  font-size: 1.2rem;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n}\n\n\n\n.caption-container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n  background-color: #222;\n  color: white;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9lc2hvcC9zbGlkZXIvRDpcXERlc2t0b3BcXFdlYkRldlxcMl9Bbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHByb2pla3RlXFxlc2hvcFxcc2xpZGVyXFxzbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZXNob3Avc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUEsZ0ZBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQSwrQkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBLDBEQUFBOztBQUNBO0VBQ0UsZUFBQTtBQ0NGOztBREVBLDRCQUFBOztBQUVBOztFQUVFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7T0FBQSxpQkFBQTtFQUNBLHlCQUFBO0FDQUY7O0FER0EsNENBQUE7O0FBQ0E7RUFDRSxRQUFBO0VBQ0EsMEJBQUE7QUNBRjs7QURHQTs7RUFFRSxvQ0FBQTtBQ0FGOztBREdBLDBCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0FDQUY7O0FER0EsNkJBQUE7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZXNob3Avc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIFBvc2l0aW9uIHRoZSBpbWFnZSBjb250YWluZXIgKG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgbGVmdCBhbmQgcmlnaHQgYXJyb3dzKSAqL1xyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLyogSGlkZSB0aGUgaW1hZ2VzIGJ5IGRlZmF1bHQgKi9cclxuLm15U2xpZGVzIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogQWRkIGEgcG9pbnRlciB3aGVuIGhvdmVyaW5nIG92ZXIgdGhlIHRodW1ibmFpbCBpbWFnZXMgKi9cclxuLmN1cnNvciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBOZXh0ICYgcHJldmlvdXMgYnV0dG9ucyAqL1xyXG5cclxuLnByZXYsXHJcbi5uZXh0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4vKiBQb3NpdGlvbiB0aGUgXCJuZXh0IGJ1dHRvblwiIHRvIHRoZSByaWdodCAqL1xyXG4ubmV4dCB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbn1cclxuXHJcbi5wcmV2LFxyXG4ubmV4dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG59XHJcblxyXG4vKiBOdW1iZXIgdGV4dCAoMS8zIGV0YykgKi9cclxuLm51bWJlcnRleHQge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4vKiBDb250YWluZXIgZm9yIGltYWdlIHRleHQgKi9cclxuLmNhcHRpb24tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogUG9zaXRpb24gdGhlIGltYWdlIGNvbnRhaW5lciAobmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBsZWZ0IGFuZCByaWdodCBhcnJvd3MpICovXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjAlO1xufVxuXG4vKiBIaWRlIHRoZSBpbWFnZXMgYnkgZGVmYXVsdCAqL1xuLm15U2xpZGVzIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBBZGQgYSBwb2ludGVyIHdoZW4gaG92ZXJpbmcgb3ZlciB0aGUgdGh1bWJuYWlsIGltYWdlcyAqL1xuLmN1cnNvciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogTmV4dCAmIHByZXZpb3VzIGJ1dHRvbnMgKi9cbi5wcmV2LFxuLm5leHQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8qIFBvc2l0aW9uIHRoZSBcIm5leHQgYnV0dG9uXCIgdG8gdGhlIHJpZ2h0ICovXG4ubmV4dCB7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbn1cblxuLnByZXYsXG4ubmV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cblxuLyogTnVtYmVyIHRleHQgKDEvMyBldGMpICovXG4ubnVtYmVydGV4dCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLyogQ29udGFpbmVyIGZvciBpbWFnZSB0ZXh0ICovXG4uY2FwdGlvbi1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufSJdfQ== */"] });
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
FactoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FactoryComponent, selectors: [["app-factory"]], decls: 22, vars: 1, consts: [[1, "titleFactory"], ["href", "https://github.com/joscha-sattler/Smart-Factory", "target", "_blank"], ["alt", "GitHub", 3, "src"], [1, "slider"], [1, "info"], [1, "skillscontainer"], ["id", "frameworks", 1, "elementImElternContainer"], [1, "content"], ["src", "assets/unity.png", "alt", "Unity"], ["src", "assets/csharp.png", "alt", "CSharp"]], template: function FactoryComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Genutzte Tools ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Unity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "C#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toggle.gitHub, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_fslider_fslider_component__WEBPACK_IMPORTED_MODULE_2__["FsliderComponent"]], styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 5.5rem;\n}\n\n.titleFactory[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.titleFactory[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  height: 75px;\n}\n\n.titleFactory[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.titel[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.eshopContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 75%;\n  margin: 50px auto 30px;\n  justify-content: center;\n  align-items: center;\n}\n\n.bilder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  grid-column-gap: 50px;\n  justify-content: center;\n  align-items: center;\n  background-image: url(\"https://c.wallhere.com/photos/87/c7/black_background_lines_minimalism_abstract_square_blue-1925925.jpg!d\");\n  background-size: cover;\n  background-attachment: fixed;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.skillscontainer[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n\n.skillscontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.skillscontainer[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: var(--text);\n}\n\n.skillscontainer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n.info[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9mYWN0b3J5L0Q6XFxEZXNrdG9wXFxXZWJEZXZcXDJfQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxwcm9qZWt0ZVxcZmFjdG9yeVxcZmFjdG9yeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9mYWN0b3J5L2ZhY3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0k7RUFDRSxlQUFBO0FDQ047O0FESUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FES0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxVQUFBO0VBQ0Esc0JBQUE7RUFFQSx1QkFBQTtFQUNBLG1CQUFBO0FDSkY7O0FET0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0VBRUEsaUlBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0FDUkY7O0FEY0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtBQ1pKOztBRGVFO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDYko7O0FEZ0JFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNkSjs7QURtQkU7RUFFRSxnQkFBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtFQUVBLG1CQUFBO0VBQ0EsdUJBQUE7QUNwQko7O0FEeUJBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDdEJGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9mYWN0b3J5L2ZhY3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgZm9udC1zaXplOiA1LjVyZW07XHJcbn1cclxuXHJcbi50aXRsZUZhY3Rvcnkge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRpdGVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLy8gR2VzYW10Y29udGFpbmVyXHJcbi5lc2hvcENvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbjogNTBweCBhdXRvIDMwcHg7XHJcblxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iaWxkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiA1MHB4O1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2Mud2FsbGhlcmUuY29tL3Bob3Rvcy84Ny9jNy9ibGFja19iYWNrZ3JvdW5kX2xpbmVzX21pbmltYWxpc21fYWJzdHJhY3Rfc3F1YXJlX2JsdWUtMTkyNTkyNS5qcGchZCcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuXHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uc2tpbGxzY29udGFpbmVyIHtcclxuICAvLyBJbWFnZS1TdHVmZiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4gIGZpZ3VyZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogNzVweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgZmlnY2FwdGlvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29udGVudCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4gIC5jb250ZW50IHtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBtYXJnaW4tdG9wOiAyLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxufVxyXG4iLCJoMSB7XG4gIGZvbnQtc2l6ZTogNS41cmVtO1xufVxuXG4udGl0bGVGYWN0b3J5IHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50aXRsZUZhY3RvcnkgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIGhlaWdodDogNzVweDtcbn1cbi50aXRsZUZhY3RvcnkgaW1nOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGl0ZWwge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lc2hvcENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogNTBweCBhdXRvIDMwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYmlsZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBncmlkLWNvbHVtbi1nYXA6IDUwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2Mud2FsbGhlcmUuY29tL3Bob3Rvcy84Ny9jNy9ibGFja19iYWNrZ3JvdW5kX2xpbmVzX21pbmltYWxpc21fYWJzdHJhY3Rfc3F1YXJlX2JsdWUtMTkyNTkyNS5qcGchZFwiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnNraWxsc2NvbnRhaW5lciBmaWd1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDE3NXB4O1xufVxuLnNraWxsc2NvbnRhaW5lciBpbWcge1xuICBtYXgtaGVpZ2h0OiA3NXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5za2lsbHNjb250YWluZXIgZmlnY2FwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuLnNraWxsc2NvbnRhaW5lciAuY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmluZm8ge1xuICBtYXJnaW4tdG9wOiAyLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59Il19 */"] });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 60%;\n}\n\n\n\n.mySlides[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n}\n\n\n\n.cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -50px;\n  color: white;\n  font-weight: bold;\n  font-size: 2rem;\n  border-radius: 0 3px 3px 0;\n  -moz-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n\n\n\n.next[_ngcontent-%COMP%] {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n\n\n.numbertext[_ngcontent-%COMP%] {\n  color: var(--text);\n  font-size: 1.2rem;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n}\n\n\n\n.caption-container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n  background-color: #222;\n  color: white;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9mYWN0b3J5L2ZzbGlkZXIvRDpcXERlc2t0b3BcXFdlYkRldlxcMl9Bbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHByb2pla3RlXFxmYWN0b3J5XFxmc2xpZGVyXFxmc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL2ZhY3RvcnkvZnNsaWRlci9mc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQSxnRkFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBLCtCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUEsMERBQUE7O0FBQ0E7RUFDRSxlQUFBO0FDQ0Y7O0FERUEsNEJBQUE7O0FBRUE7O0VBRUUsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtPQUFBLGlCQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURHQSw0Q0FBQTs7QUFDQTtFQUNFLFFBQUE7RUFDQSwwQkFBQTtBQ0FGOztBREdBOztFQUVFLG9DQUFBO0FDQUY7O0FER0EsMEJBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7QUNBRjs7QURHQSw2QkFBQTs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9mYWN0b3J5L2ZzbGlkZXIvZnNsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIFBvc2l0aW9uIHRoZSBpbWFnZSBjb250YWluZXIgKG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgbGVmdCBhbmQgcmlnaHQgYXJyb3dzKSAqL1xyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLyogSGlkZSB0aGUgaW1hZ2VzIGJ5IGRlZmF1bHQgKi9cclxuLm15U2xpZGVzIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogQWRkIGEgcG9pbnRlciB3aGVuIGhvdmVyaW5nIG92ZXIgdGhlIHRodW1ibmFpbCBpbWFnZXMgKi9cclxuLmN1cnNvciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBOZXh0ICYgcHJldmlvdXMgYnV0dG9ucyAqL1xyXG5cclxuLnByZXYsXHJcbi5uZXh0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4vKiBQb3NpdGlvbiB0aGUgXCJuZXh0IGJ1dHRvblwiIHRvIHRoZSByaWdodCAqL1xyXG4ubmV4dCB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbn1cclxuXHJcbi5wcmV2LFxyXG4ubmV4dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG59XHJcblxyXG4vKiBOdW1iZXIgdGV4dCAoMS8zIGV0YykgKi9cclxuLm51bWJlcnRleHQge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4vKiBDb250YWluZXIgZm9yIGltYWdlIHRleHQgKi9cclxuLmNhcHRpb24tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogUG9zaXRpb24gdGhlIGltYWdlIGNvbnRhaW5lciAobmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBsZWZ0IGFuZCByaWdodCBhcnJvd3MpICovXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjAlO1xufVxuXG4vKiBIaWRlIHRoZSBpbWFnZXMgYnkgZGVmYXVsdCAqL1xuLm15U2xpZGVzIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBBZGQgYSBwb2ludGVyIHdoZW4gaG92ZXJpbmcgb3ZlciB0aGUgdGh1bWJuYWlsIGltYWdlcyAqL1xuLmN1cnNvciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogTmV4dCAmIHByZXZpb3VzIGJ1dHRvbnMgKi9cbi5wcmV2LFxuLm5leHQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8qIFBvc2l0aW9uIHRoZSBcIm5leHQgYnV0dG9uXCIgdG8gdGhlIHJpZ2h0ICovXG4ubmV4dCB7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbn1cblxuLnByZXYsXG4ubmV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cblxuLyogTnVtYmVyIHRleHQgKDEvMyBldGMpICovXG4ubnVtYmVydGV4dCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLyogQ29udGFpbmVyIGZvciBpbWFnZSB0ZXh0ICovXG4uY2FwdGlvbi1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufSJdfQ== */"] });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _twitch_twitch_component__WEBPACK_IMPORTED_MODULE_2__["TwitchComponent"], _shooter_shooter_component__WEBPACK_IMPORTED_MODULE_3__["ShooterComponent"]], styles: [".projekte[_ngcontent-%COMP%] {\n  scroll-margin-top: 10rem;\n}\n\n.titleGames[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.gamesContainer[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  grid-gap: 20px;\n  grid-auto-flow: row;\n  margin: auto;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 300px));\n}\n\n.gamesContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 1px solid var(--boxShadow);\n  border-radius: 5px;\n}\n\n.pick[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 25px;\n  text-align: center;\n}\n\n.figure[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 4px 3px var(--boxShadow);\n  cursor: pointer;\n  color: var(--hover);\n}\n\n.figure[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 2.6rem;\n  text-align: center;\n  background-color: var(--cardBack);\n  color: var(--cardBackText);\n  border: 2px solid var(--cardBorder);\n}\n\n.figureClick[_ngcontent-%COMP%] {\n  box-shadow: 0 0 4px 3px var(--hover);\n  border: none;\n  cursor: pointer;\n}\n\n.video[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90%;\n  margin: auto;\n  padding-bottom: 56.25%;\n  height: 0;\n}\n\n.video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 75%;\n  height: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9nYW1lcy9EOlxcRGVza3RvcFxcV2ViRGV2XFwyX0FuZ3VsYXItUHJvamVrdGVcXFBvcnRmb2xpby9zcmNcXGFwcFxcQ29tcG9uZW50c1xccHJvamVrdGVcXGdhbWVzXFxnYW1lcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9nYW1lcy9nYW1lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSw2REFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBRUEsa0NBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0VBRUEsbUNBQUE7QUNGRjs7QURLQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNGRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9nYW1lcy9nYW1lcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWt0ZSB7XHJcbiAgc2Nyb2xsLW1hcmdpbi10b3A6IDEwcmVtO1xyXG59XHJcblxyXG4udGl0bGVHYW1lcyB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdhbWVzQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdyaWQtZ2FwOiAyMHB4O1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAzMDBweCkpO1xyXG59XHJcblxyXG4uZ2FtZXNDb250YWluZXIgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3hTaGFkb3cpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnBpY2sge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5maWd1cmU6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggM3B4IHZhcigtLWJveFNoYWRvdyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1ob3Zlcik7XHJcbn1cclxuXHJcbi5maWd1cmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkQmFjayk7XHJcbiAgY29sb3I6IHZhcigtLWNhcmRCYWNrVGV4dCk7XHJcblxyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNhcmRCb3JkZXIpO1xyXG59XHJcblxyXG4uZmlndXJlQ2xpY2sge1xyXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggM3B4IHZhcigtLWhvdmVyKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vLyBWaWRlb1xyXG5cclxuLnZpZGVvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZy1ib3R0b206IDU2LjI1JTtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi52aWRlbyBpZnJhbWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogNzUlO1xyXG4gIGhlaWdodDogNzUlO1xyXG59XHJcbiIsIi5wcm9qZWt0ZSB7XG4gIHNjcm9sbC1tYXJnaW4tdG9wOiAxMHJlbTtcbn1cblxuLnRpdGxlR2FtZXMge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5nYW1lc0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLWdhcDogMjBweDtcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgbWFyZ2luOiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAzMDBweCkpO1xufVxuXG4uZ2FtZXNDb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3hTaGFkb3cpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5waWNrIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZmlndXJlOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDRweCAzcHggdmFyKC0tYm94U2hhZG93KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0taG92ZXIpO1xufVxuXG4uZmlndXJlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBmb250LXNpemU6IDIuNnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkQmFjayk7XG4gIGNvbG9yOiB2YXIoLS1jYXJkQmFja1RleHQpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyKTtcbn1cblxuLmZpZ3VyZUNsaWNrIHtcbiAgYm94LXNoYWRvdzogMCAwIDRweCAzcHggdmFyKC0taG92ZXIpO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnZpZGVvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XG4gIGhlaWdodDogMDtcbn1cblxuLnZpZGVvIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNzUlO1xuICBoZWlnaHQ6IDc1JTtcbn0iXX0= */"] });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 75%;\n  margin-bottom: 100px;\n}\n\n\n\n.mySlides[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n}\n\n.mySlides[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 15px;\n}\n\n\n\n.cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -50px;\n  color: white;\n  font-weight: bold;\n  font-size: 2rem;\n  border-radius: 0 3px 3px 0;\n  -moz-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n\n\n\n.next[_ngcontent-%COMP%] {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n\n\n.numbertext[_ngcontent-%COMP%] {\n  color: var(--text);\n  font-size: 1.2rem;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n}\n\n\n\n.caption-container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n  background-color: #222;\n  color: white;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9nYW1lcy9zaG9vdGVyL2dzbGlkZXMvRDpcXERlc2t0b3BcXFdlYkRldlxcMl9Bbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHByb2pla3RlXFxnYW1lc1xcc2hvb3RlclxcZ3NsaWRlc1xcZ3NsaWRlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9nYW1lcy9zaG9vdGVyL2dzbGlkZXMvZ3NsaWRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUEsZ0ZBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBLCtCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxtQkFBQTtBQ0NKOztBREdBLDBEQUFBOztBQUNBO0VBQ0UsZUFBQTtBQ0FGOztBREdBLDRCQUFBOztBQUVBOztFQUVFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7T0FBQSxpQkFBQTtFQUNBLHlCQUFBO0FDREY7O0FESUEsNENBQUE7O0FBQ0E7RUFDRSxRQUFBO0VBQ0EsMEJBQUE7QUNERjs7QURJQTs7RUFFRSxvQ0FBQTtBQ0RGOztBRElBLDBCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0FDREY7O0FESUEsNkJBQUE7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZ2FtZXMvc2hvb3Rlci9nc2xpZGVzL2dzbGlkZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKiBQb3NpdGlvbiB0aGUgaW1hZ2UgY29udGFpbmVyIChuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGxlZnQgYW5kIHJpZ2h0IGFycm93cykgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi8qIEhpZGUgdGhlIGltYWdlcyBieSBkZWZhdWx0ICovXHJcbi5teVNsaWRlcyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogQWRkIGEgcG9pbnRlciB3aGVuIGhvdmVyaW5nIG92ZXIgdGhlIHRodW1ibmFpbCBpbWFnZXMgKi9cclxuLmN1cnNvciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBOZXh0ICYgcHJldmlvdXMgYnV0dG9ucyAqL1xyXG5cclxuLnByZXYsXHJcbi5uZXh0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4vKiBQb3NpdGlvbiB0aGUgXCJuZXh0IGJ1dHRvblwiIHRvIHRoZSByaWdodCAqL1xyXG4ubmV4dCB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbn1cclxuXHJcbi5wcmV2LFxyXG4ubmV4dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG59XHJcblxyXG4vKiBOdW1iZXIgdGV4dCAoMS8zIGV0YykgKi9cclxuLm51bWJlcnRleHQge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4vKiBDb250YWluZXIgZm9yIGltYWdlIHRleHQgKi9cclxuLmNhcHRpb24tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogUG9zaXRpb24gdGhlIGltYWdlIGNvbnRhaW5lciAobmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBsZWZ0IGFuZCByaWdodCBhcnJvd3MpICovXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuLyogSGlkZSB0aGUgaW1hZ2VzIGJ5IGRlZmF1bHQgKi9cbi5teVNsaWRlcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5teVNsaWRlcyBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4vKiBBZGQgYSBwb2ludGVyIHdoZW4gaG92ZXJpbmcgb3ZlciB0aGUgdGh1bWJuYWlsIGltYWdlcyAqL1xuLmN1cnNvciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogTmV4dCAmIHByZXZpb3VzIGJ1dHRvbnMgKi9cbi5wcmV2LFxuLm5leHQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8qIFBvc2l0aW9uIHRoZSBcIm5leHQgYnV0dG9uXCIgdG8gdGhlIHJpZ2h0ICovXG4ubmV4dCB7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbn1cblxuLnByZXYsXG4ubmV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cblxuLyogTnVtYmVyIHRleHQgKDEvMyBldGMpICovXG4ubnVtYmVydGV4dCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLyogQ29udGFpbmVyIGZvciBpbWFnZSB0ZXh0ICovXG4uY2FwdGlvbi1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufSJdfQ== */"] });
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
ShooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShooterComponent, selectors: [["app-shooter"]], decls: 21, vars: 1, consts: [[1, "titleShooter"], ["href", "https://github.com/joscha-sattler/Shooter", "target", "_blank"], ["alt", "GitHub", 3, "src"], [1, "slider"], [1, "info"], [1, "skillscontainer"], ["id", "frameworks", 1, "elementImElternContainer"], [1, "content"], ["src", "assets/logoJS.png", "alt", "JavaScript"], [1, "all"], [1, "video"], ["src", "https://www.youtube.com/embed/Max4VWYwbOo", "allowfullscreen", ""]], template: function ShooterComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Genutzte Tools ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "iframe", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toggle.gitHub, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_gslides_gslides_component__WEBPACK_IMPORTED_MODULE_2__["GslidesComponent"]], styles: [".titleShooter[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.titleShooter[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  height: 75px;\n}\n.titleShooter[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.skillscontainer[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n.skillscontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.skillscontainer[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: var(--text);\n}\n.skillscontainer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2.5rem;\n}\n.all[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  margin-bottom: 50px;\n}\n.all[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%] {\n  width: 75%;\n}\n.all[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 75vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9nYW1lcy9zaG9vdGVyL0Q6XFxEZXNrdG9wXFxXZWJEZXZcXDJfQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxwcm9qZWt0ZVxcZ2FtZXNcXHNob290ZXJcXHNob290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZ2FtZXMvc2hvb3Rlci9zaG9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDSjtBRENJO0VBQ0UsZUFBQTtBQ0NOO0FET0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtBQ0xKO0FEUUU7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNOSjtBRFNFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNQSjtBRFlFO0VBRUUsZ0JBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7RUFFQSxtQkFBQTtFQUNBLHVCQUFBO0FDYko7QURrQkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDZkY7QURzQkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ25CRjtBRHFCRTtFQUNFLFVBQUE7QUNuQko7QURxQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ25CTiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZ2FtZXMvc2hvb3Rlci9zaG9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlU2hvb3RlciB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2tpbGxzY29udGFpbmVyIHtcclxuICAvLyBJbWFnZS1TdHVmZiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4gIGZpZ3VyZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogNzVweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgZmlnY2FwdGlvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29udGVudCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4gIC5jb250ZW50IHtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFZpZGVvXHJcblxyXG4uYWxsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5cclxuICAudmlkZW8ge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuXHJcbiAgICBpZnJhbWUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA3NXZoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIudGl0bGVTaG9vdGVyIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50aXRsZVNob290ZXIgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIGhlaWdodDogNzVweDtcbn1cbi50aXRsZVNob290ZXIgaW1nOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2tpbGxzY29udGFpbmVyIGZpZ3VyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTc1cHg7XG59XG4uc2tpbGxzY29udGFpbmVyIGltZyB7XG4gIG1heC1oZWlnaHQ6IDc1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnNraWxsc2NvbnRhaW5lciBmaWdjYXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG4uc2tpbGxzY29udGFpbmVyIC5jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59XG5cbi5hbGwge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5hbGwgLnZpZGVvIHtcbiAgd2lkdGg6IDc1JTtcbn1cbi5hbGwgLnZpZGVvIGlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc1dmg7XG59Il19 */"] });
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
TwitchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TwitchComponent, selectors: [["app-twitch"]], decls: 27, vars: 1, consts: [[1, "titleTwitch"], ["href", "https://github.com/joscha-sattler/Twitch-World", "target", "_blank"], ["alt", "GitHub", 3, "src"], [1, "all"], [1, "video"], ["src", "https://www.youtube.com/embed/VsE-RG7ZwZI", "allowfullscreen", ""], [1, "info"], [1, "skillscontainer"], ["id", "frameworks", 1, "elementImElternContainer"], [1, "content"], ["src", "assets/logoJS.png", "alt", "JavaScript"], ["src", "assets/phaser.png", "alt", "Phaser"], ["src", "assets/aseprite.png", "alt", "Aseprite"]], template: function TwitchComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Genutzte Tools ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Phaser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Aseprite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toggle.gitHub, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".titleTwitch[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.titleTwitch[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  height: 75px;\n}\n.titleTwitch[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.skillscontainer[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n.skillscontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.skillscontainer[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: var(--text);\n}\n.skillscontainer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2.5rem;\n}\n.all[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  margin-bottom: 50px;\n}\n.all[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%] {\n  width: 75%;\n}\n.all[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 75vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9nYW1lcy90d2l0Y2gvRDpcXERlc2t0b3BcXFdlYkRldlxcMl9Bbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHByb2pla3RlXFxnYW1lc1xcdHdpdGNoXFx0d2l0Y2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZ2FtZXMvdHdpdGNoL3R3aXRjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7QURDSTtFQUNFLGVBQUE7QUNDTjtBRE9FO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7QUNMSjtBRFFFO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDTko7QURTRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDUEo7QURZRTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0VBRUEsbUJBQUE7RUFDQSx1QkFBQTtBQ2JKO0FEa0JBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ2ZGO0FEc0JBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNuQkY7QURxQkU7RUFDRSxVQUFBO0FDbkJKO0FEcUJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNuQk4iLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL2dhbWVzL3R3aXRjaC90d2l0Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVUd2l0Y2gge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNraWxsc2NvbnRhaW5lciB7XHJcbiAgLy8gSW1hZ2UtU3R1ZmYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICBmaWd1cmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIGZpZ2NhcHRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICB9XHJcblxyXG4gIC8vIENvbnRlbnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICAuY29udGVudCB7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBWaWRlb1xyXG5cclxuLmFsbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuXHJcbiAgLnZpZGVvIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcblxyXG4gICAgaWZyYW1lIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNzV2aDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnRpdGxlVHdpdGNoIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50aXRsZVR3aXRjaCBpbWcge1xuICBtYXJnaW4tbGVmdDogMjVweDtcbiAgaGVpZ2h0OiA3NXB4O1xufVxuLnRpdGxlVHdpdGNoIGltZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNraWxsc2NvbnRhaW5lciBmaWd1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDE3NXB4O1xufVxuLnNraWxsc2NvbnRhaW5lciBpbWcge1xuICBtYXgtaGVpZ2h0OiA3NXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5za2lsbHNjb250YWluZXIgZmlnY2FwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuLnNraWxsc2NvbnRhaW5lciAuY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuXG4uYWxsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uYWxsIC52aWRlbyB7XG4gIHdpZHRoOiA3NSU7XG59XG4uYWxsIC52aWRlbyBpZnJhbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3NXZoO1xufSJdfQ== */"] });
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
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 34, vars: 1, consts: [[1, "titleBlog"], ["href", "https://github.com/joscha-sattler/Blog", "target", "_blank"], ["alt", "GitHub", 3, "src"], [1, "slider"], [1, "info"], [1, "skillscontainer"], ["id", "frameworks", 1, "elementImElternContainer"], [1, "content"], ["src", "assets/angular.png", "alt", "Angular"], ["src", "assets/typescript.png", "alt", "TypeScript"], ["src", "assets/scss.jpg", "alt", "SCSS"], ["src", "assets/mongodb-logo.png", "alt", "MongoDB"], ["src", "assets/bootstrap.png", "alt", "Bootstrap"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Genutzte Tools ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Typescript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "SCSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "MongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toggle.gitHub, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_bslider_bslider_component__WEBPACK_IMPORTED_MODULE_2__["BsliderComponent"]], styles: [".titleBlog[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.titleBlog[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  height: 75px;\n}\n.titleBlog[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.titel[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.blogContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 75%;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n  align-items: center;\n}\n.bilder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  grid-column-gap: 50px;\n  justify-content: center;\n  align-items: center;\n  background-image: url(\"https://c.wallhere.com/photos/87/c7/black_background_lines_minimalism_abstract_square_blue-1925925.jpg!d\");\n  background-size: cover;\n  background-attachment: fixed;\n  padding: 20px;\n  border-radius: 10px;\n}\nfigure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.bilder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nfigcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: white;\n}\n.skillscontainer[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n.skillscontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.skillscontainer[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: var(--text);\n}\n.skillscontainer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n.info[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2.5rem;\n}\n.skillscontainer[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n.skillscontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.skillscontainer[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: var(--text);\n}\n.skillscontainer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS93ZWJlbnR3aWNrbHVuZy9ibG9nL0Q6XFxEZXNrdG9wXFxXZWJEZXZcXDJfQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxwcm9qZWt0ZVxcd2ViZW50d2lja2x1bmdcXGJsb2dcXGJsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvd2ViZW50d2lja2x1bmcvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDSjtBRENJO0VBQ0UsZUFBQTtBQ0NOO0FESUE7RUFDRSxrQkFBQTtBQ0RGO0FES0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLHVCQUFBO0VBQ0EsbUJBQUE7QUNKRjtBRE9BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBRUEsdUJBQUE7RUFFQSxtQkFBQTtFQUVBLGlJQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtBQ1JGO0FEYUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDVkY7QURhQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ1ZGO0FEYUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDVkY7QURrQkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtBQ2hCSjtBRG1CRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ2pCSjtBRG9CRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDbEJKO0FEdUJFO0VBRUUsZ0JBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7RUFFQSxtQkFBQTtFQUNBLHVCQUFBO0FDeEJKO0FENkJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUMxQkY7QURnQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtBQzlCSjtBRGlDRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQy9CSjtBRGtDRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDaENKO0FEcUNFO0VBRUUsZ0JBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7RUFFQSxtQkFBQTtFQUNBLHVCQUFBO0FDdENKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS93ZWJlbnR3aWNrbHVuZy9ibG9nL2Jsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVCbG9nIHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50aXRlbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vLyBHZXNhbXRjb250YWluZXJcclxuLmJsb2dDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iaWxkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiA1MHB4O1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2Mud2FsbGhlcmUuY29tL3Bob3Rvcy84Ny9jNy9ibGFja19iYWNrZ3JvdW5kX2xpbmVzX21pbmltYWxpc21fYWJzdHJhY3Rfc3F1YXJlX2JsdWUtMTkyNTkyNS5qcGchZCcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuXHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vLyBJbWFnZS1TdHVmZlxyXG5cclxuZmlndXJlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJpbGRlciBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbmZpZ2NhcHRpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG4uc2tpbGxzY29udGFpbmVyIHtcclxuICAvLyBJbWFnZS1TdHVmZiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4gIGZpZ3VyZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogNzVweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgZmlnY2FwdGlvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29udGVudCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4gIC5jb250ZW50IHtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxufVxyXG5cclxuLnNraWxsc2NvbnRhaW5lciB7XHJcbiAgLy8gSW1hZ2UtU3R1ZmYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICBmaWd1cmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIGZpZ2NhcHRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICB9XHJcblxyXG4gIC8vIENvbnRlbnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICAuY29udGVudCB7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgfVxyXG59XHJcbiIsIi50aXRsZUJsb2cge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRpdGxlQmxvZyBpbWcge1xuICBtYXJnaW4tbGVmdDogMjVweDtcbiAgaGVpZ2h0OiA3NXB4O1xufVxuLnRpdGxlQmxvZyBpbWc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50aXRlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJsb2dDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJpbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiA1MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9jLndhbGxoZXJlLmNvbS9waG90b3MvODcvYzcvYmxhY2tfYmFja2dyb3VuZF9saW5lc19taW5pbWFsaXNtX2Fic3RyYWN0X3NxdWFyZV9ibHVlLTE5MjU5MjUuanBnIWRcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmZpZ3VyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYmlsZGVyIGltZyB7XG4gIG1heC1oZWlnaHQ6IDc1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5maWdjYXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5za2lsbHNjb250YWluZXIgZmlndXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxNzVweDtcbn1cbi5za2lsbHNjb250YWluZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogNzVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uc2tpbGxzY29udGFpbmVyIGZpZ2NhcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cbi5za2lsbHNjb250YWluZXIgLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuXG4uc2tpbGxzY29udGFpbmVyIGZpZ3VyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTc1cHg7XG59XG4uc2tpbGxzY29udGFpbmVyIGltZyB7XG4gIG1heC1oZWlnaHQ6IDc1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnNraWxsc2NvbnRhaW5lciBmaWdjYXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG4uc2tpbGxzY29udGFpbmVyIC5jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"] });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 75%;\n  margin-bottom: 100px;\n}\n\n\n\n.mySlides[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n}\n\n.mySlides[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 15px;\n}\n\n\n\n.cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -50px;\n  color: white;\n  font-weight: bold;\n  font-size: 2rem;\n  border-radius: 0 3px 3px 0;\n  -moz-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n\n\n\n.next[_ngcontent-%COMP%] {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n\n\n.numbertext[_ngcontent-%COMP%] {\n  color: var(--text);\n  font-size: 1.2rem;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n}\n\n\n\n.caption-container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n  background-color: #222;\n  color: white;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS93ZWJlbnR3aWNrbHVuZy9ibG9nL2JzbGlkZXIvRDpcXERlc2t0b3BcXFdlYkRldlxcMl9Bbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHByb2pla3RlXFx3ZWJlbnR3aWNrbHVuZ1xcYmxvZ1xcYnNsaWRlclxcYnNsaWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS93ZWJlbnR3aWNrbHVuZy9ibG9nL2JzbGlkZXIvYnNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUEsZ0ZBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBLCtCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxtQkFBQTtBQ0NKOztBREdBLDBEQUFBOztBQUNBO0VBQ0UsZUFBQTtBQ0FGOztBREdBLDRCQUFBOztBQUVBOztFQUVFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7T0FBQSxpQkFBQTtFQUNBLHlCQUFBO0FDREY7O0FESUEsNENBQUE7O0FBQ0E7RUFDRSxRQUFBO0VBQ0EsMEJBQUE7QUNERjs7QURJQTs7RUFFRSxvQ0FBQTtBQ0RGOztBRElBLDBCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0FDREY7O0FESUEsNkJBQUE7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvd2ViZW50d2lja2x1bmcvYmxvZy9ic2xpZGVyL2JzbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKiBQb3NpdGlvbiB0aGUgaW1hZ2UgY29udGFpbmVyIChuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGxlZnQgYW5kIHJpZ2h0IGFycm93cykgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi8qIEhpZGUgdGhlIGltYWdlcyBieSBkZWZhdWx0ICovXHJcbi5teVNsaWRlcyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogQWRkIGEgcG9pbnRlciB3aGVuIGhvdmVyaW5nIG92ZXIgdGhlIHRodW1ibmFpbCBpbWFnZXMgKi9cclxuLmN1cnNvciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBOZXh0ICYgcHJldmlvdXMgYnV0dG9ucyAqL1xyXG5cclxuLnByZXYsXHJcbi5uZXh0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4vKiBQb3NpdGlvbiB0aGUgXCJuZXh0IGJ1dHRvblwiIHRvIHRoZSByaWdodCAqL1xyXG4ubmV4dCB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbn1cclxuXHJcbi5wcmV2LFxyXG4ubmV4dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG59XHJcblxyXG4vKiBOdW1iZXIgdGV4dCAoMS8zIGV0YykgKi9cclxuLm51bWJlcnRleHQge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4vKiBDb250YWluZXIgZm9yIGltYWdlIHRleHQgKi9cclxuLmNhcHRpb24tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogUG9zaXRpb24gdGhlIGltYWdlIGNvbnRhaW5lciAobmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBsZWZ0IGFuZCByaWdodCBhcnJvd3MpICovXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuLyogSGlkZSB0aGUgaW1hZ2VzIGJ5IGRlZmF1bHQgKi9cbi5teVNsaWRlcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5teVNsaWRlcyBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4vKiBBZGQgYSBwb2ludGVyIHdoZW4gaG92ZXJpbmcgb3ZlciB0aGUgdGh1bWJuYWlsIGltYWdlcyAqL1xuLmN1cnNvciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogTmV4dCAmIHByZXZpb3VzIGJ1dHRvbnMgKi9cbi5wcmV2LFxuLm5leHQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8qIFBvc2l0aW9uIHRoZSBcIm5leHQgYnV0dG9uXCIgdG8gdGhlIHJpZ2h0ICovXG4ubmV4dCB7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbn1cblxuLnByZXYsXG4ubmV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cblxuLyogTnVtYmVyIHRleHQgKDEvMyBldGMpICovXG4ubnVtYmVydGV4dCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLyogQ29udGFpbmVyIGZvciBpbWFnZSB0ZXh0ICovXG4uY2FwdGlvbi1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufSJdfQ== */"] });
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
VereinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VereinComponent, selectors: [["app-verein"]], decls: 34, vars: 1, consts: [[1, "titleVerein"], ["href", "https://github.com/joscha-sattler/Verein", "target", "_blank"], ["alt", "GitHub", 3, "src"], [1, "slider"], [1, "info"], [1, "skillscontainer"], ["id", "frameworks", 1, "elementImElternContainer"], [1, "content"], ["src", "assets/angular.png", "alt", "Angular"], ["src", "assets/typescript.png", "alt", "TypeScript"], ["src", "assets/scss.jpg", "alt", "SCSS"], ["src", "assets/mysql_PNG23.png", "alt", "MySQL"], ["src", "assets/bootstrap.png", "alt", "Bootstrap"]], template: function VereinComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Genutzte Tools ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Typescript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "SCSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "MySQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toggle.gitHub, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_vslider_vslider_component__WEBPACK_IMPORTED_MODULE_2__["VsliderComponent"]], styles: [".titleVerein[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.titleVerein[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  height: 75px;\n}\n.titleVerein[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\nfigure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.bilder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nfigcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: white;\n}\n.skillscontainer[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n.skillscontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.skillscontainer[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: var(--text);\n}\n.skillscontainer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n.info[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2.5rem;\n}\n.skillscontainer[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n.skillscontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.skillscontainer[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: var(--text);\n}\n.skillscontainer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS93ZWJlbnR3aWNrbHVuZy92ZXJlaW4vRDpcXERlc2t0b3BcXFdlYkRldlxcMl9Bbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHByb2pla3RlXFx3ZWJlbnR3aWNrbHVuZ1xcdmVyZWluXFx2ZXJlaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvd2ViZW50d2lja2x1bmcvdmVyZWluL3ZlcmVpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7QURDSTtFQUNFLGVBQUE7QUNDTjtBRE1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0hGO0FETUE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNIRjtBRE1BO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0hGO0FEV0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtBQ1RKO0FEWUU7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNWSjtBRGFFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNYSjtBRGdCRTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0VBRUEsbUJBQUE7RUFDQSx1QkFBQTtBQ2pCSjtBRHNCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDbkJGO0FEeUJFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7QUN2Qko7QUQwQkU7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUN4Qko7QUQyQkU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ3pCSjtBRDhCRTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0VBRUEsbUJBQUE7RUFDQSx1QkFBQTtBQy9CSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvd2ViZW50d2lja2x1bmcvdmVyZWluL3ZlcmVpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZVZlcmVpbiB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBJbWFnZS1TdHVmZlxyXG5cclxuZmlndXJlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJpbGRlciBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbmZpZ2NhcHRpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG4uc2tpbGxzY29udGFpbmVyIHtcclxuICAvLyBJbWFnZS1TdHVmZiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4gIGZpZ3VyZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogNzVweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgZmlnY2FwdGlvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29udGVudCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4gIC5jb250ZW50IHtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxufVxyXG5cclxuLnNraWxsc2NvbnRhaW5lciB7XHJcbiAgLy8gSW1hZ2UtU3R1ZmYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICBmaWd1cmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIGZpZ2NhcHRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICB9XHJcblxyXG4gIC8vIENvbnRlbnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICAuY29udGVudCB7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgfVxyXG59XHJcbiIsIi50aXRsZVZlcmVpbiB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGl0bGVWZXJlaW4gaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIGhlaWdodDogNzVweDtcbn1cbi50aXRsZVZlcmVpbiBpbWc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmZpZ3VyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYmlsZGVyIGltZyB7XG4gIG1heC1oZWlnaHQ6IDc1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5maWdjYXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5za2lsbHNjb250YWluZXIgZmlndXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxNzVweDtcbn1cbi5za2lsbHNjb250YWluZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogNzVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uc2tpbGxzY29udGFpbmVyIGZpZ2NhcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cbi5za2lsbHNjb250YWluZXIgLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuXG4uc2tpbGxzY29udGFpbmVyIGZpZ3VyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTc1cHg7XG59XG4uc2tpbGxzY29udGFpbmVyIGltZyB7XG4gIG1heC1oZWlnaHQ6IDc1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnNraWxsc2NvbnRhaW5lciBmaWdjYXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG4uc2tpbGxzY29udGFpbmVyIC5jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"] });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 75%;\n  margin-bottom: 100px;\n}\n\n\n\n.mySlides[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n}\n\n.mySlides[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 15px;\n}\n\n\n\n.cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -50px;\n  color: white;\n  font-weight: bold;\n  font-size: 2rem;\n  border-radius: 0 3px 3px 0;\n  -moz-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n\n\n\n.next[_ngcontent-%COMP%] {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n\n\n.numbertext[_ngcontent-%COMP%] {\n  color: var(--text);\n  font-size: 1.2rem;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n}\n\n\n\n.caption-container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n  background-color: #222;\n  color: white;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS93ZWJlbnR3aWNrbHVuZy92ZXJlaW4vdnNsaWRlci9EOlxcRGVza3RvcFxcV2ViRGV2XFwyX0FuZ3VsYXItUHJvamVrdGVcXFBvcnRmb2xpby9zcmNcXGFwcFxcQ29tcG9uZW50c1xccHJvamVrdGVcXHdlYmVudHdpY2tsdW5nXFx2ZXJlaW5cXHZzbGlkZXJcXHZzbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvd2ViZW50d2lja2x1bmcvdmVyZWluL3ZzbGlkZXIvdnNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUEsZ0ZBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBLCtCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxtQkFBQTtBQ0NKOztBREdBLDBEQUFBOztBQUNBO0VBQ0UsZUFBQTtBQ0FGOztBREdBLDRCQUFBOztBQUVBOztFQUVFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7T0FBQSxpQkFBQTtFQUNBLHlCQUFBO0FDREY7O0FESUEsNENBQUE7O0FBQ0E7RUFDRSxRQUFBO0VBQ0EsMEJBQUE7QUNERjs7QURJQTs7RUFFRSxvQ0FBQTtBQ0RGOztBRElBLDBCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0FDREY7O0FESUEsNkJBQUE7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvd2ViZW50d2lja2x1bmcvdmVyZWluL3ZzbGlkZXIvdnNsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIFBvc2l0aW9uIHRoZSBpbWFnZSBjb250YWluZXIgKG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgbGVmdCBhbmQgcmlnaHQgYXJyb3dzKSAqL1xyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuLyogSGlkZSB0aGUgaW1hZ2VzIGJ5IGRlZmF1bHQgKi9cclxuLm15U2xpZGVzIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBBZGQgYSBwb2ludGVyIHdoZW4gaG92ZXJpbmcgb3ZlciB0aGUgdGh1bWJuYWlsIGltYWdlcyAqL1xyXG4uY3Vyc29yIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIE5leHQgJiBwcmV2aW91cyBidXR0b25zICovXHJcblxyXG4ucHJldixcclxuLm5leHQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFBvc2l0aW9uIHRoZSBcIm5leHQgYnV0dG9uXCIgdG8gdGhlIHJpZ2h0ICovXHJcbi5uZXh0IHtcclxuICByaWdodDogMDtcclxuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcclxufVxyXG5cclxuLnByZXYsXHJcbi5uZXh0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbn1cclxuXHJcbi8qIE51bWJlciB0ZXh0ICgxLzMgZXRjKSAqL1xyXG4ubnVtYmVydGV4dCB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQpO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi8qIENvbnRhaW5lciBmb3IgaW1hZ2UgdGV4dCAqL1xyXG4uY2FwdGlvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBQb3NpdGlvbiB0aGUgaW1hZ2UgY29udGFpbmVyIChuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGxlZnQgYW5kIHJpZ2h0IGFycm93cykgKi9cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4vKiBIaWRlIHRoZSBpbWFnZXMgYnkgZGVmYXVsdCAqL1xuLm15U2xpZGVzIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm15U2xpZGVzIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi8qIEFkZCBhIHBvaW50ZXIgd2hlbiBob3ZlcmluZyBvdmVyIHRoZSB0aHVtYm5haWwgaW1hZ2VzICovXG4uY3Vyc29yIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBOZXh0ICYgcHJldmlvdXMgYnV0dG9ucyAqL1xuLnByZXYsXG4ubmV4dCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLyogUG9zaXRpb24gdGhlIFwibmV4dCBidXR0b25cIiB0byB0aGUgcmlnaHQgKi9cbi5uZXh0IHtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xufVxuXG4ucHJldixcbi5uZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuXG4vKiBOdW1iZXIgdGV4dCAoMS8zIGV0YykgKi9cbi5udW1iZXJ0ZXh0IHtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuXG4vKiBDb250YWluZXIgZm9yIGltYWdlIHRleHQgKi9cbi5jYXB0aW9uLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59Il19 */"] });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"], _verein_verein_component__WEBPACK_IMPORTED_MODULE_3__["VereinComponent"]], styles: [".projekte[_ngcontent-%COMP%] {\n  scroll-margin-top: 10rem;\n}\n\n.titleWebdev[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.WebdevContainer[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  grid-gap: 20px;\n  grid-auto-flow: row;\n  margin: auto;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 300px));\n}\n\n.WebdevContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 1px solid var(--boxShadow);\n  border-radius: 5px;\n}\n\n.pick[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 25px;\n  text-align: center;\n}\n\n.figure[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 4px 3px var(--boxShadow);\n  cursor: pointer;\n  color: var(--hover);\n}\n\n.figure[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 2.6rem;\n  text-align: center;\n  background-color: var(--cardBack);\n  color: var(--cardBackText);\n  border: 2px solid var(--cardBorder);\n}\n\n.figureClick[_ngcontent-%COMP%] {\n  box-shadow: 0 0 4px 3px var(--hover);\n  border: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS93ZWJlbnR3aWNrbHVuZy9EOlxcRGVza3RvcFxcV2ViRGV2XFwyX0FuZ3VsYXItUHJvamVrdGVcXFBvcnRmb2xpby9zcmNcXGFwcFxcQ29tcG9uZW50c1xccHJvamVrdGVcXHdlYmVudHdpY2tsdW5nXFx3ZWJlbnR3aWNrbHVuZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS93ZWJlbnR3aWNrbHVuZy93ZWJlbnR3aWNrbHVuZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSw2REFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBRUEsa0NBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0VBRUEsbUNBQUE7QUNGRjs7QURLQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvd2ViZW50d2lja2x1bmcvd2ViZW50d2lja2x1bmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVrdGUge1xyXG4gIHNjcm9sbC1tYXJnaW4tdG9wOiAxMHJlbTtcclxufVxyXG5cclxuLnRpdGxlV2ViZGV2IHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uV2ViZGV2Q29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdyaWQtZ2FwOiAyMHB4O1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAzMDBweCkpO1xyXG59XHJcblxyXG4uV2ViZGV2Q29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuXHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm94U2hhZG93KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5waWNrIHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmlndXJlOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgNHB4IDNweCB2YXIoLS1ib3hTaGFkb3cpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogdmFyKC0taG92ZXIpO1xyXG59XHJcblxyXG4uZmlndXJlIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICBmb250LXNpemU6IDIuNnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZEJhY2spO1xyXG4gIGNvbG9yOiB2YXIoLS1jYXJkQmFja1RleHQpO1xyXG5cclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyKTtcclxufVxyXG5cclxuLmZpZ3VyZUNsaWNrIHtcclxuICBib3gtc2hhZG93OiAwIDAgNHB4IDNweCB2YXIoLS1ob3Zlcik7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCIucHJvamVrdGUge1xuICBzY3JvbGwtbWFyZ2luLXRvcDogMTByZW07XG59XG5cbi50aXRsZVdlYmRldiB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLldlYmRldkNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLWdhcDogMjBweDtcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgbWFyZ2luOiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAzMDBweCkpO1xufVxuXG4uV2ViZGV2Q29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm94U2hhZG93KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucGljayB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZpZ3VyZTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggM3B4IHZhcigtLWJveFNoYWRvdyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuLmZpZ3VyZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgZm9udC1zaXplOiAyLjZyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZEJhY2spO1xuICBjb2xvcjogdmFyKC0tY2FyZEJhY2tUZXh0KTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2FyZEJvcmRlcik7XG59XG5cbi5maWd1cmVDbGljayB7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggM3B4IHZhcigtLWhvdmVyKTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });
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
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 147, vars: 0, consts: [[1, "titleSkills"], [1, "skillscontainer"], ["id", "frontend", 1, "elementImElternContainer"], [1, "title"], [1, "content"], ["src", "assets/logoHTML.png", "alt", "html"], ["src", "assets/logoCSS.png", "alt", "css"], ["src", "assets/logoJS.png", "alt", "js"], ["id", "frameworks", 1, "elementImElternContainer"], ["src", "assets/angular.png", "alt", "Angular"], ["src", "assets/vue.png", "alt", "Vue"], ["src", "assets/bootstrap.png", "alt", "Bootstrap"], ["src", "assets/bulma.png", "alt", "Bulma"], ["id", "backend", 1, "elementImElternContainer"], ["src", "assets/csharp.png", "alt", "CSharp"], ["src", "assets/java.png", "alt", "Java"], ["src", "assets/mysql_PNG23.png", "alt", "MySql"], ["src", "assets/mongodb-logo.png", "alt", "MongoDB"], ["id", "ide", 1, "elementImElternContainer"], ["src", "assets/jetbrains.png", "alt", "JetBrains"], ["src", "assets/vscode.png", "alt", "VSCode"], ["src", "assets/vs.png", "alt", "VS"], ["src", "assets/eclipse.png", "alt", "Eclipse"], ["id", "adobe", 1, "elementImElternContainer"], ["src", "assets/ps.png", "alt", "Photoshop"], ["src", "assets/lr.png", "alt", "Lightroom"], ["src", "assets/pr.png", "alt", "Premiere"], ["src", "assets/ae.png", "alt", "After Effects"], ["src", "assets/xd.png", "alt", "Adobe Xd"], ["id", "office", 1, "elementImElternContainer"], ["src", "assets/excel.png", "alt", "Excel"], ["src", "assets/pp.png", "alt", "Powerpoint"], ["src", "assets/word.png", "alt", "Word"], ["id", "sonstige", 1, "elementImElternContainer"], ["src", "assets/git.png", "alt", "Git"], ["src", "assets/logoGithub.png", "alt", "Github"], ["src", "assets/typescript.png", "alt", "TypeScript"], ["src", "assets/scrum.png", "alt", "Scrum"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Bulma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Backend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "C# / CSharp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "MySQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "MongoDB");
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
    } }, styles: [".titleSkills[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.skillscontainer[_ngcontent-%COMP%] {\n  display: grid;\n  width: 75%;\n  margin: auto;\n  grid-gap: 2rem;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  grid-template-areas: \" frontend    frameworks \" \" backend   backend \" \" ide       ide \" \" adobe    adobe \" \" office  sonstige\";\n}\n\nfigure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nfigcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n}\n\n.title[_ngcontent-%COMP%] {\n  grid-area: titel;\n  color: white;\n  text-align: center;\n  padding: 15px;\n}\n\n.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n#frontend[_ngcontent-%COMP%] {\n  grid-area: frontend;\n}\n\n#frameworks[_ngcontent-%COMP%] {\n  grid-area: frameworks;\n}\n\n#backend[_ngcontent-%COMP%] {\n  grid-area: backend;\n}\n\n#ide[_ngcontent-%COMP%] {\n  grid-area: ide;\n}\n\n#adobe[_ngcontent-%COMP%] {\n  grid-area: adobe;\n}\n\n#office[_ngcontent-%COMP%] {\n  grid-area: office;\n}\n\n#sonstige[_ngcontent-%COMP%] {\n  grid-area: sonstige;\n}\n\n.elementImElternContainer[_ngcontent-%COMP%] {\n  background-image: url(\"https://www.heilig-schwab.de/media/6112f995-0484-415e-a843-ecd489c3c866/Hintergrundbilder/automatisierungstechnik-heilig-schwab.jpg\");\n  background-size: cover;\n  background-attachment: fixed;\n  border-radius: 15px;\n}\n\n@media (max-width: 950px) {\n  .skillscontainer[_ngcontent-%COMP%] {\n    grid-template-areas: \" frontend    frontend \" \" frameworks  frameworks\" \" backend     backend \" \" ide         ide \" \" adobe       adobe \" \" office      office\" \" sonstige    sonstige \";\n  }\n\n  figure[_ngcontent-%COMP%] {\n    width: 125px;\n  }\n\n  img[_ngcontent-%COMP%] {\n    max-height: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9za2lsbHMvRDpcXERlc2t0b3BcXFdlYkRldlxcMl9Bbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHNraWxsc1xcc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURJQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFFQSwyREFBQTtFQUVBLDhIQUNFO0FDSko7O0FEZUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtBQ2JGOztBRGdCQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ2JGOztBRGdCQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQ2JGOztBRGtCQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ2ZGOztBRGlCRTtFQUNFLGlCQUFBO0FDZko7O0FEbUJBO0VBRUUsZ0JBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7RUFFQSxtQkFBQTtFQUNBLDZCQUFBO0FDbkJGOztBRDBCQTtFQUNFLG1CQUFBO0FDdkJGOztBRDJCQTtFQUNFLHFCQUFBO0FDeEJGOztBRDRCQTtFQUNFLGtCQUFBO0FDekJGOztBRDZCQTtFQUNFLGNBQUE7QUMxQkY7O0FEOEJBO0VBQ0UsZ0JBQUE7QUMzQkY7O0FEK0JBO0VBQ0UsaUJBQUE7QUM1QkY7O0FEZ0NBO0VBQ0UsbUJBQUE7QUM3QkY7O0FEaUNBO0VBQ0UsNEpBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUM5QkY7O0FEa0NBO0VBQ0U7SUFDRSx3TEFDQTtFQ2hDRjs7RUR5Q0E7SUFDRSxZQUFBO0VDdENGOztFRHdDQTtJQUNFLGdCQUFBO0VDckNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaXRlbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcbi50aXRsZVNraWxscyB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLy8gR2VzYW10LUNvbnRhaW5lciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcbi5za2lsbHNjb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZ3JpZC1nYXA6IDJyZW07XHJcblxyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xyXG5cclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgJyBmcm9udGVuZCAgICBmcmFtZXdvcmtzICdcclxuICAgICcgYmFja2VuZCAgIGJhY2tlbmQgJ1xyXG4gICAgJyBpZGUgICAgICAgaWRlICdcclxuICAgICcgYWRvYmUgICAgYWRvYmUgJ1xyXG4gICAgJyBvZmZpY2UgIHNvbnN0aWdlJztcclxuXHJcbn1cclxuXHJcblxyXG4vLyBJbWFnZS1TdHVmZiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG5maWd1cmUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICB3aWR0aDogMTc1cHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LWhlaWdodDogNzVweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuZmlnY2FwdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi8vIFRpdGVsICsgQ29udGVudCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4udGl0bGUge1xyXG4gIGdyaWQtYXJlYTogdGl0ZWw7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuXHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cclxufVxyXG5cclxuLy8gR3JpZC1BcmVhcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4vLyBJdGVtIDFcclxuI2Zyb250ZW5kIHtcclxuICBncmlkLWFyZWE6IGZyb250ZW5kO1xyXG59XHJcblxyXG4vLyBJdGVtIDJcclxuI2ZyYW1ld29ya3Mge1xyXG4gIGdyaWQtYXJlYTogZnJhbWV3b3JrcztcclxufVxyXG5cclxuLy8gSXRlbSAzXHJcbiNiYWNrZW5kIHtcclxuICBncmlkLWFyZWE6IGJhY2tlbmQ7XHJcbn1cclxuXHJcbi8vIEl0ZW0gNFxyXG4jaWRlIHtcclxuICBncmlkLWFyZWE6IGlkZTtcclxufVxyXG5cclxuLy8gSXRlbSA1XHJcbiNhZG9iZSB7XHJcbiAgZ3JpZC1hcmVhOiBhZG9iZTtcclxufVxyXG5cclxuLy8gSXRlbSA2XHJcbiNvZmZpY2Uge1xyXG4gIGdyaWQtYXJlYTogb2ZmaWNlO1xyXG59XHJcblxyXG4vLyBJdGVtIDdcclxuI3NvbnN0aWdlIHtcclxuICBncmlkLWFyZWE6IHNvbnN0aWdlO1xyXG59XHJcblxyXG4vLyBIaW50ZXJncnVuZCBldGMuIGbDvHIgYWxsZSBLaW5kLUVsZW1lbnRlXHJcbi5lbGVtZW50SW1FbHRlcm5Db250YWluZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vd3d3LmhlaWxpZy1zY2h3YWIuZGUvbWVkaWEvNjExMmY5OTUtMDQ4NC00MTVlLWE4NDMtZWNkNDg5YzNjODY2L0hpbnRlcmdydW5kYmlsZGVyL2F1dG9tYXRpc2llcnVuZ3N0ZWNobmlrLWhlaWxpZy1zY2h3YWIuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4vLyBBbnBhc3NlbiBiZWkga2xlaW5lciBTY3JlZW5ncsO2w59lIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgLnNraWxsc2NvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgJyBmcm9udGVuZCAgICBmcm9udGVuZCAnXHJcbiAgICAnIGZyYW1ld29ya3MgIGZyYW1ld29ya3MnXHJcbiAgICAnIGJhY2tlbmQgICAgIGJhY2tlbmQgJ1xyXG4gICAgJyBpZGUgICAgICAgICBpZGUgJ1xyXG4gICAgJyBhZG9iZSAgICAgICBhZG9iZSAnXHJcbiAgICAnIG9mZmljZSAgICAgIG9mZmljZSdcclxuICAgICcgc29uc3RpZ2UgICAgc29uc3RpZ2UgJztcclxuICB9XHJcblxyXG4gIGZpZ3VyZSB7XHJcbiAgICB3aWR0aDogMTI1cHg7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxufVxyXG4iLCIudGl0bGVTa2lsbHMge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5za2lsbHNjb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IGF1dG87XG4gIGdyaWQtZ2FwOiAycmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCIgZnJvbnRlbmQgICAgZnJhbWV3b3JrcyBcIiBcIiBiYWNrZW5kICAgYmFja2VuZCBcIiBcIiBpZGUgICAgICAgaWRlIFwiIFwiIGFkb2JlICAgIGFkb2JlIFwiIFwiIG9mZmljZSAgc29uc3RpZ2VcIjtcbn1cblxuZmlndXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxNzVweDtcbn1cblxuaW1nIHtcbiAgbWF4LWhlaWdodDogNzVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbmZpZ2NhcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi50aXRsZSB7XG4gIGdyaWQtYXJlYTogdGl0ZWw7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLnRpdGxlIGgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4jZnJvbnRlbmQge1xuICBncmlkLWFyZWE6IGZyb250ZW5kO1xufVxuXG4jZnJhbWV3b3JrcyB7XG4gIGdyaWQtYXJlYTogZnJhbWV3b3Jrcztcbn1cblxuI2JhY2tlbmQge1xuICBncmlkLWFyZWE6IGJhY2tlbmQ7XG59XG5cbiNpZGUge1xuICBncmlkLWFyZWE6IGlkZTtcbn1cblxuI2Fkb2JlIHtcbiAgZ3JpZC1hcmVhOiBhZG9iZTtcbn1cblxuI29mZmljZSB7XG4gIGdyaWQtYXJlYTogb2ZmaWNlO1xufVxuXG4jc29uc3RpZ2Uge1xuICBncmlkLWFyZWE6IHNvbnN0aWdlO1xufVxuXG4uZWxlbWVudEltRWx0ZXJuQ29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly93d3cuaGVpbGlnLXNjaHdhYi5kZS9tZWRpYS82MTEyZjk5NS0wNDg0LTQxNWUtYTg0My1lY2Q0ODljM2M4NjYvSGludGVyZ3J1bmRiaWxkZXIvYXV0b21hdGlzaWVydW5nc3RlY2huaWstaGVpbGlnLXNjaHdhYi5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuICAuc2tpbGxzY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIiBmcm9udGVuZCAgICBmcm9udGVuZCBcIiBcIiBmcmFtZXdvcmtzICBmcmFtZXdvcmtzXCIgXCIgYmFja2VuZCAgICAgYmFja2VuZCBcIiBcIiBpZGUgICAgICAgICBpZGUgXCIgXCIgYWRvYmUgICAgICAgYWRvYmUgXCIgXCIgb2ZmaWNlICAgICAgb2ZmaWNlXCIgXCIgc29uc3RpZ2UgICAgc29uc3RpZ2UgXCI7XG4gIH1cblxuICBmaWd1cmUge1xuICAgIHdpZHRoOiAxMjVweDtcbiAgfVxuXG4gIGltZyB7XG4gICAgbWF4LWhlaWdodDogNTBweDtcbiAgfVxufSJdfQ== */"] });
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
    } }, styles: [".grid[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-auto-flow: row;\n  min-height: 100vh;\n  max-width: 1500px;\n  margin: auto;\n  grid-template-columns: repeat(auto-fit, minmax(50px, 700px));\n}\n\n.grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.figure1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.rechts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.titel[_ngcontent-%COMP%] {\n  font-size: clamp(4rem, 4vw, 6rem);\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n}\n\n.icons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 175px));\n  justify-content: center;\n}\n\n.icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n}\n\n@media (max-width: 1415px) {\n  .titel[_ngcontent-%COMP%] {\n    word-wrap: break-word;\n    word-break: break-all;\n  }\n\n  .icons[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy90aHVtYm5haWwvRDpcXERlc2t0b3BcXFdlYkRldlxcMl9Bbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHRodW1ibmFpbFxcdGh1bWJuYWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL3RodW1ibmFpbC90aHVtYm5haWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSw0REFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDREY7O0FER0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0FGOztBREVBO0VBQ0UsaUNBQUE7RUFDQSxpQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLDZEQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBRUU7SUFDRSxxQkFBQTtJQUNBLHFCQUFBO0VDREY7O0VER0E7SUFDRSxhQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvdGh1bWJuYWlsL3RodW1ibmFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxuXHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWF4LXdpZHRoOiAxNTAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwcHgsIDcwMHB4KSk7XHJcbn1cclxuXHJcbi5ncmlkIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZmlndXJlMSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucmVjaHRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnRpdGVsIHtcclxuICBmb250LXNpemU6IGNsYW1wKDRyZW0sIDR2dyAsIDZyZW0pO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaWNvbnMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMTc1cHgpKTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmljb25zIGltZyB7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDE1cHgpIHtcclxuXHJcbiAgLnRpdGVsIHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICB9XHJcbiAgLmljb25zIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIuZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLWF1dG8tZmxvdzogcm93O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWF4LXdpZHRoOiAxNTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MHB4LCA3MDBweCkpO1xufVxuXG4uZ3JpZCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5maWd1cmUxIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yZWNodHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRpdGVsIHtcbiAgZm9udC1zaXplOiBjbGFtcCg0cmVtLCA0dncsIDZyZW0pO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pY29ucyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDE3NXB4KSk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaWNvbnMgaW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTQxNXB4KSB7XG4gIC50aXRlbCB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgfVxuXG4gIC5pY29ucyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"] });
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

module.exports = __webpack_require__(/*! D:\Desktop\WebDev\2_Angular-Projekte\Portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map