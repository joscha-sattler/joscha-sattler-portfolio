function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/Components/about-me/about-me.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Components/about-me/about-me.component.ts ***!
    \***********************************************************/

  /*! exports provided: AboutMeComponent */

  /***/
  function srcAppComponentsAboutMeAboutMeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function () {
      return AboutMeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutMeComponent = /*#__PURE__*/function () {
      function AboutMeComponent() {
        _classCallCheck(this, AboutMeComponent);
      }

      _createClass(AboutMeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutMeComponent;
    }();

    AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) {
      return new (t || AboutMeComponent)();
    };

    AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutMeComponent,
      selectors: [["app-about-me"]],
      decls: 25,
      vars: 0,
      consts: [[1, "titel"], [1, "about-me"], [1, "bild"], ["src", "assets/Smile.jpg", "alt", "Portrait"], [1, "inhalt"]],
      template: function AboutMeComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Beim Lernen von Programmiersprachen geht es meist nur um die Logik und Funktionalit\xE4t. Die Benutzeroberfl\xE4che spielt zun\xE4chst kaum eine Rolle und die meisten Ergebnisse im Studium waren lediglich mathematische L\xF6sungen auf einer langweiligen Konsole. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Mir gef\xE4llt, dass das bei der Frontend Webentwicklung nicht so ist. Logik und Funktionalit\xE4t geh\xF6ren zwar immer dazu, dennoch geht es hier sehr schnell um die Ausarbeitung und Umsetzung von grafischen Benutzeroberfl\xE4chen. Der Code l\xE4sst sich nahezu sofort im Browser \xF6ffnen und bietet damit ein super Feedback. Das veranlasst mich immer wieder den Blick aufs Detail zu legen und neue M\xF6glichkeiten zur Umsetzung von Layouts zu erkunden. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Daher m\xF6chte ich meinen weiteren Werdegang auf die Frontend Webentwicklung konzentrieren. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".about-me[_ngcontent-%COMP%] {\n  min-height: 75vh;\n  width: 75%;\n  margin: auto;\n  display: grid;\n  padding: 10px;\n  grid-column-gap: 50px;\n  justify-content: center;\n  grid-template-columns: 400px minmax(600px, 750px);\n  grid-auto-rows: auto;\n  grid-template-areas: \"bild inhalt\";\n}\n\n.titel[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.bild[_ngcontent-%COMP%] {\n  grid-area: bild;\n}\n\n.bild[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  border: 2px solid var(--cardBorder);\n  border-radius: 5px;\n}\n\n.inhalt[_ngcontent-%COMP%] {\n  grid-area: inhalt;\n  max-width: 75ch;\n  text-align: justify;\n}\n\n@media (max-width: 950px) {\n  .about-me[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(100px, 200px) minmax(100px, 350px);\n    grid-template-areas: \"titel  titel\" \"bild   bild\" \"inhalt inhalt\";\n  }\n\n  .bild[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n\n  .inhalt[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9hYm91dC1tZS9EOlxcRGVza3RvcFxcV2ViRGV2XFwyLiBBbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXGFib3V0LW1lXFxhYm91dC1tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFFQSxpREFBQTtFQUNBLG9CQUFBO0VBRUEsa0NBQ0E7QUNIRjs7QURNQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0hKOztBRE1BO0VBQ0UsZUFBQTtBQ0hGOztBRE9BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURTQTtFQUVFO0lBRUUsZ0VBQUE7SUFFQSxpRUFDQTtFQ1ZGOztFRGVBO0lBQ0UsZ0JBQUE7RUNaRjs7RURjQTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7RUNYRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1tZSB7XHJcbiAgbWluLWhlaWdodDogNzV2aDtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBncmlkO1xyXG5cclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGdyaWQtY29sdW1uLWdhcDogNTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MDBweCBtaW5tYXgoNjAwcHgsIDc1MHB4KTtcclxuICBncmlkLWF1dG8tcm93czogYXV0bztcclxuXHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAnYmlsZCBpbmhhbHQnO1xyXG59XHJcblxyXG4udGl0ZWwge1xyXG4gICAgbWFyZ2luLXRvcDogNzVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iaWxkIHtcclxuICBncmlkLWFyZWE6IGJpbGQ7XHJcblxyXG59XHJcblxyXG4uYmlsZCBpbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNhcmRCb3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmluaGFsdCB7XHJcbiAgZ3JpZC1hcmVhOiBpbmhhbHQ7XHJcbiAgbWF4LXdpZHRoOiA3NWNoO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi8vIEJlaSBrbGVpbmVyZW0gQmlsZHNjaGlybVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcblxyXG4gIC5hYm91dC1tZSB7XHJcblxyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTAwcHgsIDIwMHB4KSBtaW5tYXgoMTAwcHgsIDM1MHB4KTtcclxuXHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgJ3RpdGVsICB0aXRlbCdcclxuICAgICdiaWxkICAgYmlsZCdcclxuICAgICdpbmhhbHQgaW5oYWx0JztcclxuICB9XHJcblxyXG4gIC5iaWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgfVxyXG4gIC5pbmhhbHQge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG59XHJcbiIsIi5hYm91dC1tZSB7XG4gIG1pbi1oZWlnaHQ6IDc1dmg7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMTBweDtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiA1MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MDBweCBtaW5tYXgoNjAwcHgsIDc1MHB4KTtcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYmlsZCBpbmhhbHRcIjtcbn1cblxuLnRpdGVsIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmlsZCB7XG4gIGdyaWQtYXJlYTogYmlsZDtcbn1cblxuLmJpbGQgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaW5oYWx0IHtcbiAgZ3JpZC1hcmVhOiBpbmhhbHQ7XG4gIG1heC13aWR0aDogNzVjaDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gIC5hYm91dC1tZSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTAwcHgsIDIwMHB4KSBtaW5tYXgoMTAwcHgsIDM1MHB4KTtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInRpdGVsICB0aXRlbFwiIFwiYmlsZCAgIGJpbGRcIiBcImluaGFsdCBpbmhhbHRcIjtcbiAgfVxuXG4gIC5iaWxkIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG5cbiAgLmluaGFsdCB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about-me',
          templateUrl: './about-me.component.html',
          styleUrls: ['./about-me.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Components/kontakt/kontakt.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/Components/kontakt/kontakt.component.ts ***!
    \*********************************************************/

  /*! exports provided: KontaktComponent */

  /***/
  function srcAppComponentsKontaktKontaktComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KontaktComponent", function () {
      return KontaktComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var KontaktComponent = /*#__PURE__*/function () {
      function KontaktComponent() {
        _classCallCheck(this, KontaktComponent);
      }

      _createClass(KontaktComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return KontaktComponent;
    }();

    KontaktComponent.ɵfac = function KontaktComponent_Factory(t) {
      return new (t || KontaktComponent)();
    };

    KontaktComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: KontaktComponent,
      selectors: [["app-kontakt"]],
      decls: 4,
      vars: 0,
      consts: [[1, "titleKontakt"], [1, "kontaktContainer"]],
      template: function KontaktComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Kontakt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        }
      },
      styles: [".titleKontakt[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.kontaktContainer[_ngcontent-%COMP%] {\n  min-height: 75vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9rb250YWt0L0Q6XFxEZXNrdG9wXFxXZWJEZXZcXDIuIEFuZ3VsYXItUHJvamVrdGVcXFBvcnRmb2xpby9zcmNcXGFwcFxcQ29tcG9uZW50c1xca29udGFrdFxca29udGFrdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9rb250YWt0L2tvbnRha3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2tvbnRha3Qva29udGFrdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZUtvbnRha3Qge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5rb250YWt0Q29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiA3NXZoO1xyXG59XHJcbiIsIi50aXRsZUtvbnRha3Qge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5rb250YWt0Q29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogNzV2aDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KontaktComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kontakt',
          templateUrl: './kontakt.component.html',
          styleUrls: ['./kontakt.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Components/main-page/main-page.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Components/main-page/main-page.component.ts ***!
    \*************************************************************/

  /*! exports provided: MainPageComponent */

  /***/
  function srcAppComponentsMainPageMainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageComponent", function () {
      return MainPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_services_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/services/nav.service */
    "./src/services/nav.service.ts");
    /* harmony import */


    var _thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../thumbnail/thumbnail.component */
    "./src/app/Components/thumbnail/thumbnail.component.ts");
    /* harmony import */


    var _projekt_galerie_projekt_galerie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../projekt-galerie/projekt-galerie.component */
    "./src/app/Components/projekt-galerie/projekt-galerie.component.ts");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../skills/skills.component */
    "./src/app/Components/skills/skills.component.ts");
    /* harmony import */


    var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../about-me/about-me.component */
    "./src/app/Components/about-me/about-me.component.ts");
    /* harmony import */


    var _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../kontakt/kontakt.component */
    "./src/app/Components/kontakt/kontakt.component.ts");

    var _c0 = ["galerie"];
    var _c1 = ["skills"];
    var _c2 = ["about"];
    var _c3 = ["kontakt"];
    var _c4 = ["thumb"];

    var MainPageComponent = /*#__PURE__*/function () {
      function MainPageComponent(navservice) {
        var _this = this;

        _classCallCheck(this, MainPageComponent);

        this.navservice = navservice;
        this.click = this.navservice.getClickEvent1().subscribe(function () {
          _this.navProjekte();
        });
        this.click = this.navservice.getClickEvent2().subscribe(function () {
          _this.navSkill();
        });
        this.click = this.navservice.getClickEvent3().subscribe(function () {
          _this.navAbout();
        });
        this.click = this.navservice.getClickEvent4().subscribe(function () {
          _this.navKontakt();
        });
        this.click = this.navservice.getClickEvent5().subscribe(function () {
          _this.navThumb();
        });
      }

      _createClass(MainPageComponent, [{
        key: "navThumb",
        value: function navThumb() {
          this.thumb.nativeElement.scrollIntoView({
            block: 'start'
          });
        }
      }, {
        key: "navProjekte",
        value: function navProjekte() {
          this.galerie.nativeElement.scrollIntoView({
            block: 'start'
          });
        }
      }, {
        key: "navSkill",
        value: function navSkill() {
          this.skills.nativeElement.scrollIntoView({
            block: 'start'
          });
        }
      }, {
        key: "navAbout",
        value: function navAbout() {
          this.about.nativeElement.scrollIntoView({
            block: 'start'
          });
        }
      }, {
        key: "navKontakt",
        value: function navKontakt() {
          this.kontakt.nativeElement.scrollIntoView({
            block: 'start'
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainPageComponent;
    }();

    MainPageComponent.ɵfac = function MainPageComponent_Factory(t) {
      return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_nav_service__WEBPACK_IMPORTED_MODULE_1__["NavService"]));
    };

    MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainPageComponent,
      selectors: [["app-main-page"]],
      viewQuery: function MainPageComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.galerie = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.skills = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.about = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.kontakt = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.thumb = _t.first);
        }
      },
      decls: 19,
      vars: 0,
      consts: [[1, "scroll"], ["thumb", ""], ["galerie", ""], ["skills", ""], ["about", ""], ["kontakt", ""]],
      template: function MainPageComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      directives: [_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_2__["ThumbnailComponent"], _projekt_galerie_projekt_galerie_component__WEBPACK_IMPORTED_MODULE_3__["ProjektGalerieComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__["AboutMeComponent"], _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_6__["KontaktComponent"]],
      styles: [".scroll[_ngcontent-%COMP%] {\n  scroll-margin-top: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9tYWluLXBhZ2UvRDpcXERlc2t0b3BcXFdlYkRldlxcMi4gQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxtYWluLXBhZ2VcXG1haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwge1xyXG4gIHNjcm9sbC1tYXJnaW4tdG9wOiAxMHJlbTtcclxufVxyXG4iLCIuc2Nyb2xsIHtcbiAgc2Nyb2xsLW1hcmdpbi10b3A6IDEwcmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-page',
          templateUrl: './main-page.component.html',
          styleUrls: ['./main-page.component.scss']
        }]
      }], function () {
        return [{
          type: src_services_nav_service__WEBPACK_IMPORTED_MODULE_1__["NavService"]
        }];
      }, {
        galerie: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['galerie']
        }],
        skills: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['skills']
        }],
        about: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['about']
        }],
        kontakt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['kontakt']
        }],
        thumb: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['thumb']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Components/main-page/navigation/navigation.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/Components/main-page/navigation/navigation.component.ts ***!
    \*************************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppComponentsMainPageNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/services/modeToggle.service */
    "./src/services/modeToggle.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_services_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/services/nav.service */
    "./src/services/nav.service.ts");

    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent(document, themeToggleService, router, navservice) {
        _classCallCheck(this, NavigationComponent);

        this.document = document;
        this.themeToggleService = themeToggleService;
        this.router = router;
        this.navservice = navservice;
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Passt das Icon vom kleinen Nav farblich an das Theme an
          if (!this.themeToggleService.getDarkTheme()) {
            document.getElementById('navButton').classList.add('navbar-dark');
          }

          if (this.themeToggleService.getDarkTheme()) {
            document.getElementById('navButton').classList.add('navbar-light');
          }
        }
      }, {
        key: "toggleTheme",
        value: function toggleTheme() {
          this.themeToggleService.toggle(); // Passt das Icon vom kleinen Nav farblich an das Theme an

          if (!this.themeToggleService.getDarkTheme() && (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90)) {
            document.getElementById('navButton').classList.remove('navbar-dark');
            document.getElementById('navButton').classList.add('navbar-light');
          } else if (this.themeToggleService.getDarkTheme() && (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90)) {
            document.getElementById('navButton').classList.remove('navbar-light');
            document.getElementById('navButton').classList.add('navbar-dark');
          } else if (!this.themeToggleService.getDarkTheme() && (document.body.scrollTop < 90 || document.documentElement.scrollTop < 90)) {
            document.getElementById('navButton').classList.add('navbar-dark');
            document.getElementById('navButton').classList.remove('navbar-light');
          } else if (this.themeToggleService.getDarkTheme() && (document.body.scrollTop < 90 || document.documentElement.scrollTop < 90)) {
            document.getElementById('navButton').classList.add('navbar-light');
            document.getElementById('navButton').classList.remove('navbar-dark');
          }
        } // Damit das Nav einen Hintergrund bekommt, wenn man mehr als 75 Einheiten Scrollt

      }, {
        key: "onWindowScroll",
        value: function onWindowScroll() {
          if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
            // Passt das Icon vom kleinen Nav farblich an das Theme an
            if (!this.themeToggleService.getDarkTheme()) {
              document.getElementById('navButton').classList.remove('navbar-dark');
              document.getElementById('navButton').classList.add('navbar-light');
            } else if (this.themeToggleService.getDarkTheme()) {
              document.getElementById('navButton').classList.remove('navbar-light');
              document.getElementById('navButton').classList.add('navbar-dark');
            } // Fügt den Hintergrund des Nav hinzu, falls um 90 gescrollt wurde


            document.getElementById('bgNav').classList.add('bgNav'); // passt die Schriftfarbe der Nav-Links an das Theme an

            var matches = document.getElementsByClassName('nav-link');

            for (var i = 0; i < matches.length; i++) {
              matches.item(i).classList.add('bgLink');
            } // passt den Border-Top der Nav-Links farblich ans Theme an


            var matches2 = document.getElementsByClassName('bt');

            for (var _i = 0; _i < matches2.length; _i++) {
              matches2.item(_i).classList.remove('navTopBorder');
              matches2.item(_i).classList.add('navTopBorderReverse');
            }
          } else {
            // Passt das Icon vom kleinen Nav farblich an das Theme an
            if (!this.themeToggleService.getDarkTheme()) {
              document.getElementById('navButton').classList.add('navbar-dark');
              document.getElementById('navButton').classList.remove('navbar-light');
            }

            if (this.themeToggleService.getDarkTheme()) {
              document.getElementById('navButton').classList.add('navbar-light');
              document.getElementById('navButton').classList.remove('navbar-dark');
            } // Entfernt den Hintergrund des Nav, falls nicht um 90 gescrollt wurde


            document.getElementById('bgNav').classList.remove('bgNav'); // passt die Schriftfarbe der Nav-Links an das Theme an

            var _matches = document.getElementsByClassName('nav-link');

            for (var _i2 = 0; _i2 < _matches.length; _i2++) {
              _matches.item(_i2).classList.remove('bgLink');
            } // passt den Border-Top der Nav-Links farblich ans Theme an


            var _matches2 = document.getElementsByClassName('bt');

            for (var _i3 = 0; _i3 < _matches2.length; _i3++) {
              _matches2.item(_i3).classList.add('navTopBorder');

              _matches2.item(_i3).classList.remove('navTopBorderReverse');
            }
          }
        } // ScrollTo-Funktionen

      }, {
        key: "onScrollToStart",
        value: function onScrollToStart() {
          var _this2 = this;

          this.router.navigate(['/Startseite']);
          setTimeout(function () {
            _this2.navservice.sendClickEvent5();
          }, 10);
        }
      }, {
        key: "onScrollToProjekte",
        value: function onScrollToProjekte() {
          var _this3 = this;

          this.router.navigate(['/Startseite']);
          setTimeout(function () {
            _this3.navservice.sendClickEvent1();
          });
        }
      }, {
        key: "onScrollToSkills",
        value: function onScrollToSkills() {
          var _this4 = this;

          this.router.navigate(['/Startseite']);
          setTimeout(function () {
            _this4.navservice.sendClickEvent2();
          });
        }
      }, {
        key: "onScrollToAbout",
        value: function onScrollToAbout() {
          var _this5 = this;

          this.router.navigate(['/Startseite']);
          setTimeout(function () {
            _this5.navservice.sendClickEvent3();
          });
        }
      }, {
        key: "onScrollToKontakt",
        value: function onScrollToKontakt() {
          var _this6 = this;

          this.router.navigate(['/Startseite']);
          setTimeout(function () {
            _this6.navservice.sendClickEvent4();
          });
        }
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
      return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_2__["ModeToggleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"]));
    };

    NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NavigationComponent,
      selectors: [["app-navigation"]],
      hostBindings: function NavigationComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function NavigationComponent_scroll_HostBindingHandler() {
            return ctx.onWindowScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        }
      },
      decls: 33,
      vars: 0,
      consts: [["id", "bgNav", 1, "navbar", "navbar-expand-lg", "ganzeNav", "sticky-top"], ["id", "navButton", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", "data-target", "#navbarSupportedContent", "data-toggle", "collapse", "type", "button", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "fas", "fa-house-user"], [1, "nav-item", "navTopBorder", "bt"], [1, "fas", "fa-diagnoses"], [1, "fas", "fa-tv"], [1, "fas", "fa-user-circle"], [1, "fas", "fa-address-card"], [1, "nav-link"], [1, "fas", "fa-adjust", 3, "click"]],
      template: function NavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_6_listener() {
            return ctx.onScrollToStart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Start ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_11_listener() {
            return ctx.onScrollToProjekte();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Projekte ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_16_listener() {
            return ctx.onScrollToSkills();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Skills ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_21_listener() {
            return ctx.onScrollToAbout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " About ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_26_listener() {
            return ctx.onScrollToKontakt();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Kontakt ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_i_click_32_listener() {
            return ctx.toggleTheme();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      styles: [".ganzeNav[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n}\n.bgNav[_ngcontent-%COMP%] {\n  background-color: var(--navBackground);\n  border-bottom: 1px solid black;\n}\n\n.navbar-nav[_ngcontent-%COMP%] {\n  margin-right: 5%;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-left: 35px;\n  color: var(--text);\n}\n.nav-link[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: var(--hover);\n}\n.bgLink[_ngcontent-%COMP%] {\n  color: var(--textreverse);\n}\n.bgLink[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: var(--hoverreverse);\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  font-size: 2.6rem;\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.fa-adjust[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.navTopBorder[_ngcontent-%COMP%] {\n  border: none;\n}\n.navTopBorderReverse[_ngcontent-%COMP%] {\n  border: none;\n}\n@media (max-width: 991px) {\n  .navTopBorder[_ngcontent-%COMP%] {\n    border-top: 2px solid var(--cardBorder);\n  }\n\n  .navTopBorderReverse[_ngcontent-%COMP%] {\n    border-top: 2px solid var(--cardBorderReverse);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9tYWluLXBhZ2UvbmF2aWdhdGlvbi9EOlxcRGVza3RvcFxcV2ViRGV2XFwyLiBBbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXG1haW4tcGFnZVxcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9tYWluLXBhZ2UvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDQ0Y7QURFQTtFQUNFLHNDQUFBO0VBQ0EsOEJBQUE7QUNDRjtBREVBLHlDQUFBO0FBQ0E7RUFDRSxnQkFBQTtBQ0NGO0FER0EsYUFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREVFO0VBQ0UsbUJBQUE7QUNBSjtBRElBO0VBQ0UseUJBQUE7QUNERjtBREdFO0VBQ0UsMEJBQUE7QUNESjtBREtBO0VBQ0UsaUJBQUE7QUNGRjtBRE1BO0VBQ0UsZUFBQTtBQ0hGO0FETUE7RUFDRSxlQUFBO0FDSEY7QURNQSxjQUFBO0FBRUE7RUFDRSxZQUFBO0FDSkY7QURNQTtFQUNFLFlBQUE7QUNIRjtBRE1BO0VBQ0U7SUFDRSx1Q0FBQTtFQ0hGOztFREtBO0lBQ0UsOENBQUE7RUNGRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9tYWluLXBhZ2UvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogR2FuemUgTmF2ICovXHJcbi5nYW56ZU5hdiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJnTmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZCYWNrZ3JvdW5kKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi8qIERlciBSYWhtZW4sIHdvIGRpZSBMaW5rcyBkcmlubmUgc2luZCAqL1xyXG4ubmF2YmFyLW5hdiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuXHJcbi8qIGRlciBMaW5rICovXHJcbi5uYXYtbGluayB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ob3Zlcik7XHJcbiAgfVxyXG59XHJcblxyXG4uYmdMaW5rIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dHJldmVyc2UpO1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWhvdmVycmV2ZXJzZSk7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBmb250LXNpemU6IDIuNnJlbTtcclxufVxyXG5cclxuXHJcbmE6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZhLWFkanVzdDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBuYXYgQm9yZGVyKi9cclxuXHJcbi5uYXZUb3BCb3JkZXIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4ubmF2VG9wQm9yZGVyUmV2ZXJzZSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAubmF2VG9wQm9yZGVyIHtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyKTtcclxuICB9XHJcbiAgLm5hdlRvcEJvcmRlclJldmVyc2Uge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWNhcmRCb3JkZXJSZXZlcnNlKTtcclxuICB9XHJcbn1cclxuIiwiLyogR2FuemUgTmF2ICovXG4uZ2FuemVOYXYge1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJnTmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2QmFja2dyb3VuZCk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuLyogRGVyIFJhaG1lbiwgd28gZGllIExpbmtzIGRyaW5uZSBzaW5kICovXG4ubmF2YmFyLW5hdiB7XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG5cbi8qIGRlciBMaW5rICovXG4ubmF2LWxpbmsge1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG4ubmF2LWxpbmsgOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuLmJnTGluayB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0cmV2ZXJzZSk7XG59XG4uYmdMaW5rIDpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1ob3ZlcnJldmVyc2UpO1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgZm9udC1zaXplOiAyLjZyZW07XG59XG5cbmE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYS1hZGp1c3Q6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIG5hdiBCb3JkZXIqL1xuLm5hdlRvcEJvcmRlciB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLm5hdlRvcEJvcmRlclJldmVyc2Uge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubmF2VG9wQm9yZGVyIHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tY2FyZEJvcmRlcik7XG4gIH1cblxuICAubmF2VG9wQm9yZGVyUmV2ZXJzZSB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWNhcmRCb3JkZXJSZXZlcnNlKTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-navigation',
          templateUrl: './navigation.component.html',
          styleUrls: ['./navigation.component.scss']
        }]
      }], function () {
        return [{
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_2__["ModeToggleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_services_nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"]
        }];
      }, {
        onWindowScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:scroll', []]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Components/projekt-galerie/projekt-galerie.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/Components/projekt-galerie/projekt-galerie.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ProjektGalerieComponent */

  /***/
  function srcAppComponentsProjektGalerieProjektGalerieComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjektGalerieComponent", function () {
      return ProjektGalerieComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProjektGalerieComponent = /*#__PURE__*/function () {
      function ProjektGalerieComponent() {
        _classCallCheck(this, ProjektGalerieComponent);
      }

      _createClass(ProjektGalerieComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjektGalerieComponent;
    }();

    ProjektGalerieComponent.ɵfac = function ProjektGalerieComponent_Factory(t) {
      return new (t || ProjektGalerieComponent)();
    };

    ProjektGalerieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjektGalerieComponent,
      selectors: [["app-projekt-galerie"]],
      decls: 24,
      vars: 0,
      consts: [[1, "titleProjekte"], [1, "parent"], ["routerLink", "/Webentwicklung", 1, "figure"], ["src", "assets/webdev.jpg", "alt", "Webentwicklung"], ["routerLink", "/Eshop", 1, "figure"], ["src", "assets/eshop.jpg", "alt", "Eshop"], [1, "figure"], ["src", "assets/smartfactory.jpg", "alt", "Industrie 4.0"], ["src", "assets/design.jpg", "alt", "Design"], ["src", "assets/games.jpg", "alt", "Games"]],
      template: function ProjektGalerieComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "figure", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "figure", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Games");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: [".titleProjekte[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n.parent[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  grid-gap: 20px;\n  grid-auto-flow: row;\n  max-width: 1000px;\n  margin: auto;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 300px));\n}\n.parent[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border: 1px solid var(--boxShadow);\n  border-radius: 5px;\n}\n.figure[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 4px 3px var(--boxShadow);\n  cursor: pointer;\n  color: var(--hover);\n}\n.figure[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 2.6rem;\n  text-align: center;\n  background-color: var(--cardBack);\n  color: var(--cardBackText);\n  border: 2px solid var(--cardBorder);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0LWdhbGVyaWUvRDpcXERlc2t0b3BcXFdlYkRldlxcMi4gQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxwcm9qZWt0LWdhbGVyaWVcXHByb2pla3QtZ2FsZXJpZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0LWdhbGVyaWUvcHJvamVrdC1nYWxlcmllLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFBO0FBRUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7RUFDQSxZQUFBO0VBRUEsNkRBQUE7QUNGRjtBREtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxrQ0FBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDSEY7QURNQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtFQUVBLG1DQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3QtZ2FsZXJpZS9wcm9qZWt0LWdhbGVyaWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCaWxkZXItR2FsZXJpZSAqL1xyXG5cclxuLnRpdGxlUHJvamVrdGUge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYXJlbnQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ3JpZC1nYXA6IDIwcHg7XHJcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxuXHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAzMDBweCkpO1xyXG59XHJcblxyXG4ucGFyZW50IGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3hTaGFkb3cpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmZpZ3VyZTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDRweCAzcHggdmFyKC0tYm94U2hhZG93KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLWhvdmVyKTtcclxufVxyXG5cclxuLmZpZ3VyZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgZm9udC1zaXplOiAyLjZyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmRCYWNrKTtcclxuICBjb2xvcjogdmFyKC0tY2FyZEJhY2tUZXh0KTtcclxuXHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2FyZEJvcmRlcik7XHJcbn1cclxuIiwiLyogQmlsZGVyLUdhbGVyaWUgKi9cbi50aXRsZVByb2pla3RlIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGFyZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdyaWQtZ2FwOiAyMHB4O1xuICBncmlkLWF1dG8tZmxvdzogcm93O1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAzMDBweCkpO1xufVxuXG4ucGFyZW50IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJveFNoYWRvdyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmZpZ3VyZTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggM3B4IHZhcigtLWJveFNoYWRvdyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuLmZpZ3VyZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgZm9udC1zaXplOiAyLjZyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZEJhY2spO1xuICBjb2xvcjogdmFyKC0tY2FyZEJhY2tUZXh0KTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2FyZEJvcmRlcik7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjektGalerieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projekt-galerie',
          templateUrl: './projekt-galerie.component.html',
          styleUrls: ['./projekt-galerie.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Components/projekte/eshop/eshop.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/Components/projekte/eshop/eshop.component.ts ***!
    \**************************************************************/

  /*! exports provided: EshopComponent */

  /***/
  function srcAppComponentsProjekteEshopEshopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EshopComponent", function () {
      return EshopComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EshopComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var bild_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bild_r1.titel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", bild_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", bild_r1.titel);
      }
    }

    var EshopComponent = /*#__PURE__*/function () {
      function EshopComponent() {
        _classCallCheck(this, EshopComponent);

        this.bilder = [{
          img: 'assets/eshop/start.png',
          titel: 'Startfenster'
        }, {
          img: 'assets/eshop/k1.png',
          titel: 'Kunden - Übersicht'
        }, {
          img: 'assets/eshop/k2.png',
          titel: 'Artikel suchen'
        }, {
          img: 'assets/eshop/k3.png',
          titel: 'Artikel in den Warenkorb legen'
        }, {
          img: 'assets/eshop/k4.png',
          titel: 'Warenkorb - Übersicht'
        }, {
          img: 'assets/eshop/k5.png',
          titel: 'Kaufbestätigung'
        }, {
          img: 'assets/eshop/k6.png',
          titel: 'Rechnung'
        }, {
          img: 'assets/eshop/m1.png',
          titel: 'Admin - Übersicht'
        }, {
          img: 'assets/eshop/m2_m3.png',
          titel: 'Artikel hinzufügen'
        }, {
          img: 'assets/eshop/m4_m4.png',
          titel: 'Artikel - löschen'
        }, {
          img: 'assets/eshop/m5.png',
          titel: 'Artikelbestand - ändern'
        }, {
          img: 'assets/eshop/m6.png',
          titel: 'Admin - Artikelverlauf'
        }, {
          img: 'assets/eshop/m7.png',
          titel: 'Admin - Ereignis-Verlauf'
        }];
      }

      _createClass(EshopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EshopComponent;
    }();

    EshopComponent.ɵfac = function EshopComponent_Factory(t) {
      return new (t || EshopComponent)();
    };

    EshopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EshopComponent,
      selectors: [["app-eshop"]],
      decls: 26,
      vars: 1,
      consts: [[1, "titleEshop"], ["href", "https://github.com/joscha-sattler/Eshop-Java", "target", "_blank"], ["src", "assets/logoGithubClick.png", "alt", "GitHub"], [1, "eshopContainer"], [1, "tools"], [1, "titel"], [1, "bilder"], ["src", "assets/java.png", "alt", "Java"], ["src", "assets/eshop/layout.png", "alt", "Bootstrap"], [1, "was"], [1, "text"], ["class", "seiten", 4, "ngFor", "ngForOf"], [1, "seiten"], [3, "src", "alt"]],
      template: function EshopComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Eshop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "genutzte Tools:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Java");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Miglayout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Was:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Im 2. Semester des Studiengangs Medieninformatik habe ich zusammen mit zwei Kommilitonen einen Eshop in Java entworfen. Dabei k\xF6nnen sich Kunden registrieren und einloggen, um Waren zu begutachten und einzukaufen. Dazu k\xF6nnen sich Mitarbeiten mit Admin-Accounts einloggen und den Artikelbestand nach belieben anpassen. Obendrein kann der Mitarbeiter Aktionen von z.B. gekauften Artikeln nachverfolgen. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, EshopComponent_div_25_Template, 4, 3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bilder);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 5.5rem;\n}\n\n.titleEshop[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.titleEshop[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  height: 75px;\n}\n\n.titleEshop[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.titel[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.eshopContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 75%;\n  margin: 50px auto 30px;\n  justify-content: center;\n  align-items: center;\n}\n\n.bilder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  grid-column-gap: 50px;\n  justify-content: center;\n  align-items: center;\n  background-image: url(\"https://c.wallhere.com/photos/87/c7/black_background_lines_minimalism_abstract_square_blue-1925925.jpg!d\");\n  background-size: cover;\n  background-attachment: fixed;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nfigure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.bilder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nfigcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: white;\n}\n\n.was[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.text[_ngcontent-%COMP%] {\n  max-width: 75ch;\n  margin: auto;\n  text-align: justify;\n}\n\n.seiten[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  place-items: center;\n  place-content: center;\n}\n\n.seiten[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 25px;\n  font-size: clamp(0.8rem, 4vh, 3.5rem);\n  text-align: center;\n  font-weight: bold;\n}\n\n.seiten[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9lc2hvcC9EOlxcRGVza3RvcFxcV2ViRGV2XFwyLiBBbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHByb2pla3RlXFxlc2hvcFxcZXNob3AuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZXNob3AvZXNob3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0k7RUFDRSxlQUFBO0FDQ047O0FER0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FESUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxVQUFBO0VBQ0Esc0JBQUE7RUFFQSx1QkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0VBRUEsaUlBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0FDUEY7O0FEWUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDVEY7O0FEWUE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNURjs7QURZQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNURjs7QURjQTtFQUNFLGdCQUFBO0FDWEY7O0FEYUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDVkY7O0FEYUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDVkY7O0FEWUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDVko7O0FEWUU7RUFDRSxlQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL2VzaG9wL2VzaG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIGZvbnQtc2l6ZTogNS41cmVtO1xyXG59XHJcblxyXG4udGl0bGVFc2hvcCB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi50aXRlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vIEdlc2FtdGNvbnRhaW5lclxyXG4uZXNob3BDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW46IDUwcHggYXV0byAzMHB4O1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYmlsZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogNTBweDtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vYy53YWxsaGVyZS5jb20vcGhvdG9zLzg3L2M3L2JsYWNrX2JhY2tncm91bmRfbGluZXNfbWluaW1hbGlzbV9hYnN0cmFjdF9zcXVhcmVfYmx1ZS0xOTI1OTI1LmpwZyFkXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuXHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vLyBJbWFnZS1TdHVmZlxyXG5cclxuZmlndXJlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJpbGRlciBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbmZpZ2NhcHRpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLy8yLiBEaXYgQmxvY2tcclxuXHJcbi53YXMge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnRleHQge1xyXG4gIG1heC13aWR0aDogNzVjaDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLnNlaXRlbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG5cclxuICBoMiB7XHJcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCA0dmgsIDMuNXJlbSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIiwiaDEge1xuICBmb250LXNpemU6IDUuNXJlbTtcbn1cblxuLnRpdGxlRXNob3Age1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRpdGxlRXNob3AgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIGhlaWdodDogNzVweDtcbn1cbi50aXRsZUVzaG9wIGltZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRpdGVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZXNob3BDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDUwcHggYXV0byAzMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJpbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiA1MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9jLndhbGxoZXJlLmNvbS9waG90b3MvODcvYzcvYmxhY2tfYmFja2dyb3VuZF9saW5lc19taW5pbWFsaXNtX2Fic3RyYWN0X3NxdWFyZV9ibHVlLTE5MjU5MjUuanBnIWRcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmZpZ3VyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYmlsZGVyIGltZyB7XG4gIG1heC1oZWlnaHQ6IDc1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5maWdjYXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi53YXMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udGV4dCB7XG4gIG1heC13aWR0aDogNzVjaDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uc2VpdGVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xufVxuLnNlaXRlbiBoMiB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCA0dmgsIDMuNXJlbSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VpdGVuIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EshopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-eshop',
          templateUrl: './eshop.component.html',
          styleUrls: ['./eshop.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Components/projekte/webentwicklung/blog/blog.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/Components/projekte/webentwicklung/blog/blog.component.ts ***!
    \***************************************************************************/

  /*! exports provided: BlogComponent */

  /***/
  function srcAppComponentsProjekteWebentwicklungBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BlogComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13, 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var bild_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bild_r1.titel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", bild_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", bild_r1.titel);
      }
    }

    var BlogComponent = /*#__PURE__*/function () {
      function BlogComponent() {
        _classCallCheck(this, BlogComponent);

        this.bilder = [{
          img: 'assets/blog/b1.png',
          titel: 'Registrieren'
        }, {
          img: 'assets/blog/b2.png',
          titel: 'Login'
        }, {
          img: 'assets/blog/b3.png',
          titel: 'Storyboard'
        }, {
          img: 'assets/blog/b4.png',
          titel: 'Post erstellen'
        }, {
          img: 'assets/blog/b5.png',
          titel: 'Post ansehen'
        }];
      }

      _createClass(BlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogComponent;
    }();

    BlogComponent.ɵfac = function BlogComponent_Factory(t) {
      return new (t || BlogComponent)();
    };

    BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogComponent,
      selectors: [["app-blog"]],
      decls: 32,
      vars: 1,
      consts: [[1, "titleBlog"], [1, "blogContainer"], [1, "tools"], [1, "titel"], [1, "bilder"], ["src", "assets/angular.png", "alt", "Angular"], ["src", "assets/bootstrap.png", "alt", "Bootstrap"], ["src", "assets/mongodb-logo.png", "alt", "MongoDB"], ["src", "assets/node.png", "alt", "Nodejs"], [1, "was"], [1, "text"], ["class", "seiten", 4, "ngFor", "ngForOf"], [1, "seiten"], ["id", "bilder", 3, "src", "alt"], ["bilder", ""]],
      template: function BlogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "genutzte Tools:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "MongoDB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Node js");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Was:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Das war mein erstes Angular Projekt. Ich habe einen simplen Blog erstellt, bei dem sich ein User registrieren und anmelden kann. Anschlie\xDFend kann er selbst einen Post erstellen und/oder Posts von anderen Nutzern auf der Storyboard-Seite anschauen. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, BlogComponent_div_31_Template, 5, 3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bilder);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".titleBlog[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.titel[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  text-align: center;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 5.5rem;\n}\n\n.blogContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 75%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 30px;\n  justify-content: center;\n  align-items: center;\n}\n\n.bilder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  grid-column-gap: 50px;\n  justify-content: center;\n  align-items: center;\n  background-image: url(\"https://c.wallhere.com/photos/87/c7/black_background_lines_minimalism_abstract_square_blue-1925925.jpg!d\");\n  background-size: cover;\n  background-attachment: fixed;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nfigure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.bilder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nfigcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: white;\n}\n\n.was[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.text[_ngcontent-%COMP%] {\n  max-width: 75ch;\n  margin: auto;\n  text-align: justify;\n}\n\n.seiten[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  place-items: center;\n  place-content: center;\n  overflow: hidden;\n}\n\n.seiten[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 25px;\n  font-size: clamp(0.8rem, 4vh, 3.5rem);\n  text-align: center;\n  font-weight: bold;\n}\n\n.seiten[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  max-width: 100%;\n  overflow: hidden;\n}\n\n.border[_ngcontent-%COMP%] {\n  border: 2px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS93ZWJlbnR3aWNrbHVuZy9ibG9nL0Q6XFxEZXNrdG9wXFxXZWJEZXZcXDIuIEFuZ3VsYXItUHJvamVrdGVcXFBvcnRmb2xpby9zcmNcXGFwcFxcQ29tcG9uZW50c1xccHJvamVrdGVcXHdlYmVudHdpY2tsdW5nXFxibG9nXFxibG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL3dlYmVudHdpY2tsdW5nL2Jsb2cvYmxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UsaUJBQUE7QUNHRjs7QURBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUVBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0VBRUEsaUlBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0FDSEY7O0FEUUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDTEY7O0FEUUE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNMRjs7QURRQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNMRjs7QURVQTtFQUNFLGdCQUFBO0FDUEY7O0FEU0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDTkY7O0FEU0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNORjs7QURRRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNOSjs7QURRRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTko7O0FEVUE7RUFDRSx1QkFBQTtBQ1BGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS93ZWJlbnR3aWNrbHVuZy9ibG9nL2Jsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVCbG9nIHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50aXRlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogNS41cmVtO1xyXG59XHJcbi8vIEdlc2FtdGNvbnRhaW5lclxyXG4uYmxvZ0NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYmlsZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogNTBweDtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vYy53YWxsaGVyZS5jb20vcGhvdG9zLzg3L2M3L2JsYWNrX2JhY2tncm91bmRfbGluZXNfbWluaW1hbGlzbV9hYnN0cmFjdF9zcXVhcmVfYmx1ZS0xOTI1OTI1LmpwZyFkXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuXHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vLyBJbWFnZS1TdHVmZlxyXG5cclxuZmlndXJlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJpbGRlciBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbmZpZ2NhcHRpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLy8yLiBEaXYgQmxvY2tcclxuXHJcbi53YXMge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnRleHQge1xyXG4gIG1heC13aWR0aDogNzVjaDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLnNlaXRlbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIGgyIHtcclxuICAgIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDR2aCwgMy41cmVtKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG4uYm9yZGVyIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG4iLCIudGl0bGVCbG9nIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0ZWwge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA1LjVyZW07XG59XG5cbi5ibG9nQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iaWxkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdyaWQtY29sdW1uLWdhcDogNTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vYy53YWxsaGVyZS5jb20vcGhvdG9zLzg3L2M3L2JsYWNrX2JhY2tncm91bmRfbGluZXNfbWluaW1hbGlzbV9hYnN0cmFjdF9zcXVhcmVfYmx1ZS0xOTI1OTI1LmpwZyFkXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5maWd1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJpbGRlciBpbWcge1xuICBtYXgtaGVpZ2h0OiA3NXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuZmlnY2FwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ud2FzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnRleHQge1xuICBtYXgtd2lkdGg6IDc1Y2g7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnNlaXRlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zZWl0ZW4gaDIge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgNHZoLCAzLjVyZW0pO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlaXRlbiBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ib3JkZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog',
          templateUrl: './blog.component.html',
          styleUrls: ['./blog.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Components/projekte/webentwicklung/verein/verein.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/Components/projekte/webentwicklung/verein/verein.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: VereinComponent */

  /***/
  function srcAppComponentsProjekteWebentwicklungVereinVereinComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VereinComponent", function () {
      return VereinComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function VereinComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var bild_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bild_r1.titel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", bild_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", bild_r1.titel);
      }
    }

    var VereinComponent = /*#__PURE__*/function () {
      function VereinComponent() {
        _classCallCheck(this, VereinComponent);

        this.bilder = [{
          img: 'assets/verein/tt1.png',
          titel: 'Startseite'
        }, {
          img: 'assets/verein/tt2.png',
          titel: 'Tischtennis - Allgemein'
        }, {
          img: 'assets/verein/tt3.png',
          titel: 'Tischtennis - Mannschaften'
        }, {
          img: 'assets/verein/tt4.png',
          titel: 'Tischetennis - Spieler hinzufügen'
        }, {
          img: 'assets/verein/tt5.png',
          titel: 'Tischtennis - Galerie'
        }, {
          img: 'assets/verein/tt6.png',
          titel: 'Handball'
        }, {
          img: 'assets/verein/tt7.png',
          titel: 'Volleyball'
        }, {
          img: 'assets/verein/tt8.png',
          titel: 'Turnen - Allgemein'
        }, {
          img: 'assets/verein/tt9.jpg',
          titel: 'Turnen - Galerie'
        }];
      }

      _createClass(VereinComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VereinComponent;
    }();

    VereinComponent.ɵfac = function VereinComponent_Factory(t) {
      return new (t || VereinComponent)();
    };

    VereinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VereinComponent,
      selectors: [["app-verein"]],
      decls: 32,
      vars: 1,
      consts: [[1, "titleVerein"], [1, "vereinContainer"], [1, "tools"], [1, "titel"], [1, "bilder"], ["src", "assets/angular.png", "alt", "Angular"], ["src", "assets/bootstrap.png", "alt", "Bootstrap"], ["src", "assets/mysql_PNG23.png", "alt", "MySQL"], ["src", "assets/node.png", "alt", "Nodejs"], [1, "was"], [1, "text"], ["class", "seiten", 4, "ngFor", "ngForOf"], [1, "seiten"], [3, "src", "alt"]],
      template: function VereinComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Verein");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "genutzte Tools:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "MySQL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Node js");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Was:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Ich habe ein Angular Projekt angelegt f\xFCr eine Vereins-Webseite meines Tischtennisvereins. Ich wollte einfach mal ausprobieren wie ich eine solche Seite gestalten und umsetzen w\xFCrde. Gespeichert sind die Daten in einer lokalen MySQL Datenbank. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, VereinComponent_div_31_Template, 4, 3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bilder);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".titleVerein[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.titel[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  text-align: center;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 5.5rem;\n}\n\n.vereinContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 75%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 30px;\n  justify-content: center;\n  align-items: center;\n}\n\n.bilder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  grid-column-gap: 50px;\n  justify-content: center;\n  align-items: center;\n  background-image: url(\"https://c.wallhere.com/photos/87/c7/black_background_lines_minimalism_abstract_square_blue-1925925.jpg!d\");\n  background-size: cover;\n  background-attachment: fixed;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nfigure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.bilder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nfigcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: white;\n}\n\n.was[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.text[_ngcontent-%COMP%] {\n  max-width: 75ch;\n  margin: auto;\n  text-align: justify;\n}\n\n.seiten[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  place-items: center;\n  place-content: center;\n}\n\n.seiten[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 25px;\n  font-size: clamp(0.8rem, 4vh, 3.5rem);\n  text-align: center;\n  font-weight: bold;\n}\n\n.seiten[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS93ZWJlbnR3aWNrbHVuZy92ZXJlaW4vRDpcXERlc2t0b3BcXFdlYkRldlxcMi4gQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxwcm9qZWt0ZVxcd2ViZW50d2lja2x1bmdcXHZlcmVpblxcdmVyZWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL3dlYmVudHdpY2tsdW5nL3ZlcmVpbi92ZXJlaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURDQTtFQUNFLGlCQUFBO0FDRUY7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsdUJBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBRUEsdUJBQUE7RUFFQSxtQkFBQTtFQUVBLGlJQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtBQ0xGOztBRFVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1BGOztBRFVBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDUEY7O0FEVUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDUEY7O0FEWUE7RUFDRSxnQkFBQTtBQ1RGOztBRFdBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ1JGOztBRFdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ1JGOztBRFVFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1JKOztBRFVFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL3dlYmVudHdpY2tsdW5nL3ZlcmVpbi92ZXJlaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVWZXJlaW4ge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRpdGVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogNS41cmVtO1xyXG59XHJcblxyXG4vLyBHZXNhbXRjb250YWluZXJcclxuLnZlcmVpbkNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYmlsZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogNTBweDtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vYy53YWxsaGVyZS5jb20vcGhvdG9zLzg3L2M3L2JsYWNrX2JhY2tncm91bmRfbGluZXNfbWluaW1hbGlzbV9hYnN0cmFjdF9zcXVhcmVfYmx1ZS0xOTI1OTI1LmpwZyFkXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuXHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vLyBJbWFnZS1TdHVmZlxyXG5cclxuZmlndXJlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJpbGRlciBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbmZpZ2NhcHRpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLy8yLiBEaXYgQmxvY2tcclxuXHJcbi53YXMge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnRleHQge1xyXG4gIG1heC13aWR0aDogNzVjaDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLnNlaXRlbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG5cclxuICBoMiB7XHJcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCA0dmgsIDMuNXJlbSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiIsIi50aXRsZVZlcmVpbiB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdGVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNS41cmVtO1xufVxuXG4udmVyZWluQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iaWxkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdyaWQtY29sdW1uLWdhcDogNTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vYy53YWxsaGVyZS5jb20vcGhvdG9zLzg3L2M3L2JsYWNrX2JhY2tncm91bmRfbGluZXNfbWluaW1hbGlzbV9hYnN0cmFjdF9zcXVhcmVfYmx1ZS0xOTI1OTI1LmpwZyFkXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5maWd1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJpbGRlciBpbWcge1xuICBtYXgtaGVpZ2h0OiA3NXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuZmlnY2FwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ud2FzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnRleHQge1xuICBtYXgtd2lkdGg6IDc1Y2g7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnNlaXRlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zZWl0ZW4gaDIge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgNHZoLCAzLjVyZW0pO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlaXRlbiBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VereinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-verein',
          templateUrl: './verein.component.html',
          styleUrls: ['./verein.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Components/projekte/webentwicklung/webentwicklung.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/Components/projekte/webentwicklung/webentwicklung.component.ts ***!
    \********************************************************************************/

  /*! exports provided: WebentwicklungComponent */

  /***/
  function srcAppComponentsProjekteWebentwicklungWebentwicklungComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebentwicklungComponent", function () {
      return WebentwicklungComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/Components/projekte/webentwicklung/blog/blog.component.ts");
    /* harmony import */


    var _verein_verein_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./verein/verein.component */
    "./src/app/Components/projekte/webentwicklung/verein/verein.component.ts");

    var _c0 = ["goto"];

    function WebentwicklungComponent_app_blog_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-blog");
      }
    }

    function WebentwicklungComponent_app_verein_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-verein");
      }
    }

    function WebentwicklungComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "W\xE4hle ein Projekt aus!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var WebentwicklungComponent = /*#__PURE__*/function () {
      function WebentwicklungComponent() {
        _classCallCheck(this, WebentwicklungComponent);

        this.blog = false;
        this.verein = false;
      }

      _createClass(WebentwicklungComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleBlog",
        value: function toggleBlog() {
          var _this7 = this;

          this.verein = false;
          this.blog = true;
          document.getElementById('blog').classList.add('figureClick');
          document.getElementById('verein').classList.remove('figureClick');
          setTimeout(function () {
            _this7["goto"].nativeElement.scrollIntoView({
              block: 'start'
            });
          }, 10);
        }
      }, {
        key: "toggleVerein",
        value: function toggleVerein() {
          var _this8 = this;

          this.blog = false;
          this.verein = true;
          document.getElementById('blog').classList.remove('figureClick');
          document.getElementById('verein').classList.add('figureClick');
          setTimeout(function () {
            _this8["goto"].nativeElement.scrollIntoView({
              block: 'start'
            });
          }, 10);
        }
      }]);

      return WebentwicklungComponent;
    }();

    WebentwicklungComponent.ɵfac = function WebentwicklungComponent_Factory(t) {
      return new (t || WebentwicklungComponent)();
    };

    WebentwicklungComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WebentwicklungComponent,
      selectors: [["app-webentwicklung"]],
      viewQuery: function WebentwicklungComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx["goto"] = _t.first);
        }
      },
      decls: 21,
      vars: 3,
      consts: [[1, "titleWebdev"], [1, "WebdevContainer"], ["id", "blog", 1, "figure", 3, "click"], ["src", "assets/blog.jpg", "alt", "Blog"], ["id", "verein", 1, "figure", 3, "click"], ["src", "assets/verein.png", "alt", "Verein"], [1, "projekte"], ["goto", ""], [4, "ngIf"], ["class", "pick", 4, "ngIf"], [1, "pick"]],
      template: function WebentwicklungComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Projekte ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Webentwicklung ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "figure", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebentwicklungComponent_Template_figure_click_6_listener() {
            return ctx.toggleBlog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "figure", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebentwicklungComponent_Template_figure_click_10_listener() {
            return ctx.toggleVerein();
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blog);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verein);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.blog && !ctx.verein);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"], _verein_verein_component__WEBPACK_IMPORTED_MODULE_3__["VereinComponent"]],
      styles: [".projekte[_ngcontent-%COMP%] {\n  scroll-margin-top: 10rem;\n}\n\n.titleWebdev[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.WebdevContainer[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  grid-gap: 20px;\n  grid-auto-flow: row;\n  margin: auto;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 300px));\n}\n\n.WebdevContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 1px solid var(--boxShadow);\n  border-radius: 5px;\n}\n\n.pick[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 25px;\n  text-align: center;\n}\n\n.figure[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 4px 3px var(--boxShadow);\n  cursor: pointer;\n  color: var(--hover);\n}\n\n.figure[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 2.6rem;\n  text-align: center;\n  background-color: var(--cardBack);\n  color: var(--cardBackText);\n  border: 2px solid var(--cardBorder);\n}\n\n.figureClick[_ngcontent-%COMP%] {\n  box-shadow: 0 0 4px 3px var(--hover);\n  border: none;\n  cursor: pointer;\n}\n\n.video[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90%;\n  margin: auto;\n  padding-bottom: 56.25%;\n  height: 0;\n}\n\n.video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 75%;\n  height: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS93ZWJlbnR3aWNrbHVuZy9EOlxcRGVza3RvcFxcV2ViRGV2XFwyLiBBbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHByb2pla3RlXFx3ZWJlbnR3aWNrbHVuZ1xcd2ViZW50d2lja2x1bmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvd2ViZW50d2lja2x1bmcvd2ViZW50d2lja2x1bmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEsNkRBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUVBLGtDQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0Usd0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtFQUVBLG1DQUFBO0FDRkY7O0FES0E7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRkY7O0FET0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvd2ViZW50d2lja2x1bmcvd2ViZW50d2lja2x1bmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVrdGUge1xyXG4gIHNjcm9sbC1tYXJnaW4tdG9wOiAxMHJlbTtcclxufVxyXG5cclxuLnRpdGxlV2ViZGV2IHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uV2ViZGV2Q29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdyaWQtZ2FwOiAyMHB4O1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAzMDBweCkpO1xyXG59XHJcblxyXG4uV2ViZGV2Q29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuXHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm94U2hhZG93KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5waWNrIHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmlndXJlOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgNHB4IDNweCB2YXIoLS1ib3hTaGFkb3cpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogdmFyKC0taG92ZXIpO1xyXG59XHJcblxyXG4uZmlndXJlIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICBmb250LXNpemU6IDIuNnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZEJhY2spO1xyXG4gIGNvbG9yOiB2YXIoLS1jYXJkQmFja1RleHQpO1xyXG5cclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyKTtcclxufVxyXG5cclxuLmZpZ3VyZUNsaWNrIHtcclxuICBib3gtc2hhZG93OiAwIDAgNHB4IDNweCB2YXIoLS1ob3Zlcik7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLy8gVmlkZW9cclxuXHJcbi52aWRlbyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4udmlkZW8gaWZyYW1lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBoZWlnaHQ6IDc1JTtcclxufVxyXG4iLCIucHJvamVrdGUge1xuICBzY3JvbGwtbWFyZ2luLXRvcDogMTByZW07XG59XG5cbi50aXRsZVdlYmRldiB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLldlYmRldkNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLWdhcDogMjBweDtcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgbWFyZ2luOiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAzMDBweCkpO1xufVxuXG4uV2ViZGV2Q29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm94U2hhZG93KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucGljayB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZpZ3VyZTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggM3B4IHZhcigtLWJveFNoYWRvdyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuLmZpZ3VyZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgZm9udC1zaXplOiAyLjZyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZEJhY2spO1xuICBjb2xvcjogdmFyKC0tY2FyZEJhY2tUZXh0KTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2FyZEJvcmRlcik7XG59XG5cbi5maWd1cmVDbGljayB7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggM3B4IHZhcigtLWhvdmVyKTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi52aWRlbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xuICBoZWlnaHQ6IDA7XG59XG5cbi52aWRlbyBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDc1JTtcbiAgaGVpZ2h0OiA3NSU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebentwicklungComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-webentwicklung',
          templateUrl: './webentwicklung.component.html',
          styleUrls: ['./webentwicklung.component.scss']
        }]
      }], function () {
        return [];
      }, {
        "goto": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['goto']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Components/skills/skills.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Components/skills/skills.component.ts ***!
    \*******************************************************/

  /*! exports provided: SkillsComponent */

  /***/
  function srcAppComponentsSkillsSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
      return SkillsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SkillsComponent = /*#__PURE__*/function () {
      function SkillsComponent() {
        _classCallCheck(this, SkillsComponent);
      }

      _createClass(SkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SkillsComponent;
    }();

    SkillsComponent.ɵfac = function SkillsComponent_Factory(t) {
      return new (t || SkillsComponent)();
    };

    SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkillsComponent,
      selectors: [["app-skills"]],
      decls: 143,
      vars: 0,
      consts: [[1, "titleSkills"], [1, "skillscontainer"], ["id", "frontend", 1, "elementImElternContainer"], [1, "title"], [1, "content"], ["src", "assets/logoHTML.png", "alt", "html"], ["src", "assets/logoCSS.png", "alt", "css"], ["src", "assets/logoJS.png", "alt", "js"], ["id", "frameworks", 1, "elementImElternContainer"], ["src", "assets/angular.png", "alt", "Angular"], ["src", "assets/bootstrap.png", "alt", "Bootstrap"], ["id", "backend", 1, "elementImElternContainer"], ["src", "assets/csharp.png", "alt", "CSharp"], ["src", "assets/java.png", "alt", "Java"], ["src", "assets/mysql_PNG23.png", "alt", "MySql"], ["src", "assets/mongodb-logo.png", "alt", "MongoDB"], ["src", "assets/node.png", "alt", "Nodejs"], ["id", "ide", 1, "elementImElternContainer"], ["src", "assets/jetbrains.png", "alt", "JetBrains"], ["src", "assets/vscode.png", "alt", "VSCode"], ["src", "assets/vs.png", "alt", "VS"], ["src", "assets/eclipse.png", "alt", "Eclipse"], ["id", "adobe", 1, "elementImElternContainer"], ["src", "assets/ps.png", "alt", "Photoshop"], ["src", "assets/lr.png", "alt", "Lightroom"], ["src", "assets/pr.png", "alt", "Premiere"], ["src", "assets/ae.png", "alt", "After Effects"], ["src", "assets/xd.png", "alt", "Adobe Xd"], ["id", "office", 1, "elementImElternContainer"], ["src", "assets/excel.png", "alt", "Excel"], ["src", "assets/pp.png", "alt", "Powerpoint"], ["src", "assets/word.png", "alt", "Word"], ["id", "sonstige", 1, "elementImElternContainer"], ["src", "assets/git.png", "alt", "Git"], ["src", "assets/logoGithub.png", "alt", "Github"], ["src", "assets/Typescript.png", "alt", "TypeScript"], ["src", "assets/scrum.png", "alt", "Scrum"]],
      template: function SkillsComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Backend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "C# / CSharp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Java");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "MySQL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "MongoDB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Node js");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "IDE's");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "JetBrains");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "VS Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Visual Studio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Eclipse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Adobe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Photoshop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Lightroom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Premiere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "After Effects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Xd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Microsoft Office");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Powerpoint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Word");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Sonstige");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Git");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "GitHub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "TypeScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Scrum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".titleSkills[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.skillscontainer[_ngcontent-%COMP%] {\n  display: grid;\n  width: 75%;\n  margin: auto;\n  grid-gap: 2rem;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  grid-template-areas: \" frontend    frameworks \" \" backend   backend \" \" ide       ide \" \" adobe    adobe \" \" office  sonstige\";\n}\n\nfigure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nfigcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n}\n\n.title[_ngcontent-%COMP%] {\n  grid-area: titel;\n  color: white;\n  text-align: center;\n  padding: 15px;\n}\n\n.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n#frontend[_ngcontent-%COMP%] {\n  grid-area: frontend;\n}\n\n#frameworks[_ngcontent-%COMP%] {\n  grid-area: frameworks;\n}\n\n#backend[_ngcontent-%COMP%] {\n  grid-area: backend;\n}\n\n#ide[_ngcontent-%COMP%] {\n  grid-area: ide;\n}\n\n#adobe[_ngcontent-%COMP%] {\n  grid-area: adobe;\n}\n\n#office[_ngcontent-%COMP%] {\n  grid-area: office;\n}\n\n#sonstige[_ngcontent-%COMP%] {\n  grid-area: sonstige;\n}\n\n.elementImElternContainer[_ngcontent-%COMP%] {\n  background-image: url(\"https://www.heilig-schwab.de/media/6112f995-0484-415e-a843-ecd489c3c866/Hintergrundbilder/automatisierungstechnik-heilig-schwab.jpg\");\n  background-size: cover;\n  background-attachment: fixed;\n  border-radius: 15px;\n}\n\n@media (max-width: 950px) {\n  .skillscontainer[_ngcontent-%COMP%] {\n    grid-template-areas: \" frontend    frontend \" \" frameworks  frameworks\" \" backend     backend \" \" ide         ide \" \" adobe       adobe \" \" office      office\" \" sonstige    sonstige \";\n  }\n\n  figure[_ngcontent-%COMP%] {\n    width: 125px;\n  }\n\n  img[_ngcontent-%COMP%] {\n    max-height: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9za2lsbHMvRDpcXERlc2t0b3BcXFdlYkRldlxcMi4gQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxza2lsbHNcXHNraWxscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBRUEsMkRBQUE7RUFFQSw4SEFDRTtBQ0pKOztBRGVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7QUNiRjs7QURnQkE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNiRjs7QURnQkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUNiRjs7QURrQkE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNmRjs7QURpQkU7RUFDRSxpQkFBQTtBQ2ZKOztBRG1CQTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0VBRUEsbUJBQUE7RUFDQSw2QkFBQTtBQ25CRjs7QUQwQkE7RUFDRSxtQkFBQTtBQ3ZCRjs7QUQyQkE7RUFDRSxxQkFBQTtBQ3hCRjs7QUQ0QkE7RUFDRSxrQkFBQTtBQ3pCRjs7QUQ2QkE7RUFDRSxjQUFBO0FDMUJGOztBRDhCQTtFQUNFLGdCQUFBO0FDM0JGOztBRCtCQTtFQUNFLGlCQUFBO0FDNUJGOztBRGdDQTtFQUNFLG1CQUFBO0FDN0JGOztBRGlDQTtFQUNFLDRKQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDOUJGOztBRGtDQTtFQUNFO0lBQ0Usd0xBQ0E7RUNoQ0Y7O0VEeUNBO0lBQ0UsWUFBQTtFQ3RDRjs7RUR3Q0E7SUFDRSxnQkFBQTtFQ3JDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGl0ZWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG4udGl0bGVTa2lsbHMge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vIEdlc2FtdC1Db250YWluZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG4uc2tpbGxzY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGdyaWQtZ2FwOiAycmVtO1xyXG5cclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcclxuXHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICcgZnJvbnRlbmQgICAgZnJhbWV3b3JrcyAnXHJcbiAgICAnIGJhY2tlbmQgICBiYWNrZW5kICdcclxuICAgICcgaWRlICAgICAgIGlkZSAnXHJcbiAgICAnIGFkb2JlICAgIGFkb2JlICdcclxuICAgICcgb2ZmaWNlICBzb25zdGlnZSc7XHJcblxyXG59XHJcblxyXG5cclxuLy8gSW1hZ2UtU3R1ZmYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuZmlndXJlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgd2lkdGg6IDE3NXB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbmZpZ2NhcHRpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4vLyBUaXRlbCArIENvbnRlbnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuLnRpdGxlIHtcclxuICBncmlkLWFyZWE6IHRpdGVsO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTVweDtcclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVudCB7XHJcblxyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHJcbn1cclxuXHJcbi8vIEdyaWQtQXJlYXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuLy8gSXRlbSAxXHJcbiNmcm9udGVuZCB7XHJcbiAgZ3JpZC1hcmVhOiBmcm9udGVuZDtcclxufVxyXG5cclxuLy8gSXRlbSAyXHJcbiNmcmFtZXdvcmtzIHtcclxuICBncmlkLWFyZWE6IGZyYW1ld29ya3M7XHJcbn1cclxuXHJcbi8vIEl0ZW0gM1xyXG4jYmFja2VuZCB7XHJcbiAgZ3JpZC1hcmVhOiBiYWNrZW5kO1xyXG59XHJcblxyXG4vLyBJdGVtIDRcclxuI2lkZSB7XHJcbiAgZ3JpZC1hcmVhOiBpZGU7XHJcbn1cclxuXHJcbi8vIEl0ZW0gNVxyXG4jYWRvYmUge1xyXG4gIGdyaWQtYXJlYTogYWRvYmU7XHJcbn1cclxuXHJcbi8vIEl0ZW0gNlxyXG4jb2ZmaWNlIHtcclxuICBncmlkLWFyZWE6IG9mZmljZTtcclxufVxyXG5cclxuLy8gSXRlbSA3XHJcbiNzb25zdGlnZSB7XHJcbiAgZ3JpZC1hcmVhOiBzb25zdGlnZTtcclxufVxyXG5cclxuLy8gSGludGVyZ3J1bmQgZXRjLiBmw7xyIGFsbGUgS2luZC1FbGVtZW50ZVxyXG4uZWxlbWVudEltRWx0ZXJuQ29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3d3dy5oZWlsaWctc2Nod2FiLmRlL21lZGlhLzYxMTJmOTk1LTA0ODQtNDE1ZS1hODQzLWVjZDQ4OWMzYzg2Ni9IaW50ZXJncnVuZGJpbGRlci9hdXRvbWF0aXNpZXJ1bmdzdGVjaG5pay1oZWlsaWctc2Nod2FiLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLy8gQW5wYXNzZW4gYmVpIGtsZWluZXIgU2NyZWVuZ3LDtsOfZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gIC5za2lsbHNjb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICcgZnJvbnRlbmQgICAgZnJvbnRlbmQgJ1xyXG4gICAgJyBmcmFtZXdvcmtzICBmcmFtZXdvcmtzJ1xyXG4gICAgJyBiYWNrZW5kICAgICBiYWNrZW5kICdcclxuICAgICcgaWRlICAgICAgICAgaWRlICdcclxuICAgICcgYWRvYmUgICAgICAgYWRvYmUgJ1xyXG4gICAgJyBvZmZpY2UgICAgICBvZmZpY2UnXHJcbiAgICAnIHNvbnN0aWdlICAgIHNvbnN0aWdlICc7XHJcbiAgfVxyXG5cclxuICBmaWd1cmUge1xyXG4gICAgd2lkdGg6IDEyNXB4O1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogNTBweDtcclxuICB9XHJcbn1cclxuIiwiLnRpdGxlU2tpbGxzIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2tpbGxzY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBncmlkLWdhcDogMnJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiIGZyb250ZW5kICAgIGZyYW1ld29ya3MgXCIgXCIgYmFja2VuZCAgIGJhY2tlbmQgXCIgXCIgaWRlICAgICAgIGlkZSBcIiBcIiBhZG9iZSAgICBhZG9iZSBcIiBcIiBvZmZpY2UgIHNvbnN0aWdlXCI7XG59XG5cbmZpZ3VyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTc1cHg7XG59XG5cbmltZyB7XG4gIG1heC1oZWlnaHQ6IDc1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5maWdjYXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4udGl0bGUge1xuICBncmlkLWFyZWE6IHRpdGVsO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbn1cbi50aXRsZSBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuI2Zyb250ZW5kIHtcbiAgZ3JpZC1hcmVhOiBmcm9udGVuZDtcbn1cblxuI2ZyYW1ld29ya3Mge1xuICBncmlkLWFyZWE6IGZyYW1ld29ya3M7XG59XG5cbiNiYWNrZW5kIHtcbiAgZ3JpZC1hcmVhOiBiYWNrZW5kO1xufVxuXG4jaWRlIHtcbiAgZ3JpZC1hcmVhOiBpZGU7XG59XG5cbiNhZG9iZSB7XG4gIGdyaWQtYXJlYTogYWRvYmU7XG59XG5cbiNvZmZpY2Uge1xuICBncmlkLWFyZWE6IG9mZmljZTtcbn1cblxuI3NvbnN0aWdlIHtcbiAgZ3JpZC1hcmVhOiBzb25zdGlnZTtcbn1cblxuLmVsZW1lbnRJbUVsdGVybkNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vd3d3LmhlaWxpZy1zY2h3YWIuZGUvbWVkaWEvNjExMmY5OTUtMDQ4NC00MTVlLWE4NDMtZWNkNDg5YzNjODY2L0hpbnRlcmdydW5kYmlsZGVyL2F1dG9tYXRpc2llcnVuZ3N0ZWNobmlrLWhlaWxpZy1zY2h3YWIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgLnNraWxsc2NvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCIgZnJvbnRlbmQgICAgZnJvbnRlbmQgXCIgXCIgZnJhbWV3b3JrcyAgZnJhbWV3b3Jrc1wiIFwiIGJhY2tlbmQgICAgIGJhY2tlbmQgXCIgXCIgaWRlICAgICAgICAgaWRlIFwiIFwiIGFkb2JlICAgICAgIGFkb2JlIFwiIFwiIG9mZmljZSAgICAgIG9mZmljZVwiIFwiIHNvbnN0aWdlICAgIHNvbnN0aWdlIFwiO1xuICB9XG5cbiAgZmlndXJlIHtcbiAgICB3aWR0aDogMTI1cHg7XG4gIH1cblxuICBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDUwcHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-skills',
          templateUrl: './skills.component.html',
          styleUrls: ['./skills.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Components/thumbnail/thumbnail.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Components/thumbnail/thumbnail.component.ts ***!
    \*************************************************************/

  /*! exports provided: ThumbnailComponent */

  /***/
  function srcAppComponentsThumbnailThumbnailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThumbnailComponent", function () {
      return ThumbnailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/services/modeToggle.service */
    "./src/services/modeToggle.service.ts");

    var ThumbnailComponent = /*#__PURE__*/function () {
      function ThumbnailComponent(imgToggleService) {
        _classCallCheck(this, ThumbnailComponent);

        this.imgToggleService = imgToggleService;
      }

      _createClass(ThumbnailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ThumbnailComponent;
    }();

    ThumbnailComponent.ɵfac = function ThumbnailComponent_Factory(t) {
      return new (t || ThumbnailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"]));
    };

    ThumbnailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ThumbnailComponent,
      selectors: [["app-thumbnail"]],
      decls: 17,
      vars: 4,
      consts: [[1, "grid"], [1, "figure1"], ["alt", "Portrait", 3, "src"], [1, "rechts"], [1, "titel"], [1, "icons"], [1, "figure"], ["alt", "Design", 3, "src"], ["alt", "Programmieren", 3, "src"], ["alt", "Webdentwicklung", 3, "src"]],
      template: function ThumbnailComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgToggleService.getMe(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgToggleService.getdesign(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgToggleService.getproggen(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgToggleService.getwebdev(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: [".grid[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-auto-flow: row;\n  min-height: 100vh;\n  max-width: 1500px;\n  margin: auto;\n  grid-template-columns: repeat(auto-fit, minmax(50px, 700px));\n}\n\n.grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.figure1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.rechts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.titel[_ngcontent-%COMP%] {\n  font-size: clamp(4rem, 4vw, 6rem);\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n}\n\n.icons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 175px));\n  justify-content: center;\n}\n\n.icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n}\n\n@media (max-width: 1415px) {\n  .titel[_ngcontent-%COMP%] {\n    word-wrap: break-word;\n    word-break: break-all;\n  }\n\n  .icons[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy90aHVtYm5haWwvRDpcXERlc2t0b3BcXFdlYkRldlxcMi4gQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFx0aHVtYm5haWxcXHRodW1ibmFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy90aHVtYm5haWwvdGh1bWJuYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBRUEsNERBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0RGOztBREdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURFQTtFQUNFLGlDQUFBO0VBQ0EsaUJBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSw2REFBQTtFQUNBLHVCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUVFO0lBQ0UscUJBQUE7SUFDQSxxQkFBQTtFQ0RGOztFREdBO0lBQ0UsYUFBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3RodW1ibmFpbC90aHVtYm5haWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIG1heC13aWR0aDogMTUwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MHB4LCA3MDBweCkpO1xyXG59XHJcblxyXG4uZ3JpZCBpbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZpZ3VyZTEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnJlY2h0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi50aXRlbCB7XHJcbiAgZm9udC1zaXplOiBjbGFtcCg0cmVtLCA0dncgLCA2cmVtKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmljb25zIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDE3NXB4KSk7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pY29ucyBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTQxNXB4KSB7XHJcblxyXG4gIC50aXRlbCB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgfVxyXG4gIC5pY29ucyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiLmdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1heC13aWR0aDogMTUwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgNzAwcHgpKTtcbn1cblxuLmdyaWQgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uZmlndXJlMSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucmVjaHRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50aXRlbCB7XG4gIGZvbnQtc2l6ZTogY2xhbXAoNHJlbSwgNHZ3LCA2cmVtKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaWNvbnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxNzVweCkpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmljb25zIGltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0MTVweCkge1xuICAudGl0ZWwge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIH1cblxuICAuaWNvbnMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThumbnailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-thumbnail',
          templateUrl: './thumbnail.component.html',
          styleUrls: ['./thumbnail.component.scss']
        }]
      }], function () {
        return [{
          type: src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _Components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Components/main-page/main-page.component */
    "./src/app/Components/main-page/main-page.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Components_projekte_webentwicklung_webentwicklung_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Components/projekte/webentwicklung/webentwicklung.component */
    "./src/app/Components/projekte/webentwicklung/webentwicklung.component.ts");
    /* harmony import */


    var _Components_projekte_eshop_eshop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Components/projekte/eshop/eshop.component */
    "./src/app/Components/projekte/eshop/eshop.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/Startseite',
      pathMatch: 'full'
    }, {
      path: 'Startseite',
      component: _Components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__["MainPageComponent"]
    }, {
      path: 'Webentwicklung',
      component: _Components_projekte_webentwicklung_webentwicklung_component__WEBPACK_IMPORTED_MODULE_3__["WebentwicklungComponent"]
    }, {
      path: 'Eshop',
      component: _Components_projekte_eshop_eshop_component__WEBPACK_IMPORTED_MODULE_4__["EshopComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Components_main_page_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Components/main-page/navigation/navigation.component */
    "./src/app/Components/main-page/navigation/navigation.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Angular-SCSS';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_Components_main_page_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: themeFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "themeFactory", function () {
      return themeFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _Components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Components/main-page/main-page.component */
    "./src/app/Components/main-page/main-page.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _Components_main_page_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Components/main-page/navigation/navigation.component */
    "./src/app/Components/main-page/navigation/navigation.component.ts");
    /* harmony import */


    var src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/services/modeToggle.service */
    "./src/services/modeToggle.service.ts");
    /* harmony import */


    var src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/services/local-storage.service */
    "./src/services/local-storage.service.ts");
    /* harmony import */


    var _Components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./Components/about-me/about-me.component */
    "./src/app/Components/about-me/about-me.component.ts");
    /* harmony import */


    var _Components_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./Components/kontakt/kontakt.component */
    "./src/app/Components/kontakt/kontakt.component.ts");
    /* harmony import */


    var _Components_projekt_galerie_projekt_galerie_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./Components/projekt-galerie/projekt-galerie.component */
    "./src/app/Components/projekt-galerie/projekt-galerie.component.ts");
    /* harmony import */


    var _Components_projekte_webentwicklung_webentwicklung_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./Components/projekte/webentwicklung/webentwicklung.component */
    "./src/app/Components/projekte/webentwicklung/webentwicklung.component.ts");
    /* harmony import */


    var _Components_projekte_webentwicklung_verein_verein_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./Components/projekte/webentwicklung/verein/verein.component */
    "./src/app/Components/projekte/webentwicklung/verein/verein.component.ts");
    /* harmony import */


    var _Components_projekte_webentwicklung_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./Components/projekte/webentwicklung/blog/blog.component */
    "./src/app/Components/projekte/webentwicklung/blog/blog.component.ts");
    /* harmony import */


    var _Components_skills_skills_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./Components/skills/skills.component */
    "./src/app/Components/skills/skills.component.ts");
    /* harmony import */


    var _Components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./Components/thumbnail/thumbnail.component */
    "./src/app/Components/thumbnail/thumbnail.component.ts");
    /* harmony import */


    var _Components_projekte_eshop_eshop_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./Components/projekte/eshop/eshop.component */
    "./src/app/Components/projekte/eshop/eshop.component.ts");

    function themeFactory(themeService) {
      return function () {
        return themeService.setThemeOnStart();
      };
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_6__["ModeToggleService"], src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
        useFactory: themeFactory,
        deps: [src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_6__["ModeToggleService"]],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _Components_main_page_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _Components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__["MainPageComponent"], _Components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_8__["AboutMeComponent"], _Components_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_9__["KontaktComponent"], _Components_projekt_galerie_projekt_galerie_component__WEBPACK_IMPORTED_MODULE_10__["ProjektGalerieComponent"], _Components_projekte_webentwicklung_webentwicklung_component__WEBPACK_IMPORTED_MODULE_11__["WebentwicklungComponent"], _Components_projekte_webentwicklung_verein_verein_component__WEBPACK_IMPORTED_MODULE_12__["VereinComponent"], _Components_projekte_webentwicklung_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__["BlogComponent"], _Components_skills_skills_component__WEBPACK_IMPORTED_MODULE_14__["SkillsComponent"], _Components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_15__["ThumbnailComponent"], _Components_projekte_eshop_eshop_component__WEBPACK_IMPORTED_MODULE_16__["EshopComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _Components_main_page_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _Components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__["MainPageComponent"], _Components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_8__["AboutMeComponent"], _Components_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_9__["KontaktComponent"], _Components_projekt_galerie_projekt_galerie_component__WEBPACK_IMPORTED_MODULE_10__["ProjektGalerieComponent"], _Components_projekte_webentwicklung_webentwicklung_component__WEBPACK_IMPORTED_MODULE_11__["WebentwicklungComponent"], _Components_projekte_webentwicklung_verein_verein_component__WEBPACK_IMPORTED_MODULE_12__["VereinComponent"], _Components_projekte_webentwicklung_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__["BlogComponent"], _Components_skills_skills_component__WEBPACK_IMPORTED_MODULE_14__["SkillsComponent"], _Components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_15__["ThumbnailComponent"], _Components_projekte_eshop_eshop_component__WEBPACK_IMPORTED_MODULE_16__["EshopComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
          providers: [src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_6__["ModeToggleService"], src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
            useFactory: themeFactory,
            deps: [src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_6__["ModeToggleService"]],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  "./src/services/local-storage.service.ts":
  /*!***********************************************!*\
    !*** ./src/services/local-storage.service.ts ***!
    \***********************************************/

  /*! exports provided: StorageService */

  /***/
  function srcServicesLocalStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StorageService = /*#__PURE__*/function () {
      function StorageService() {
        _classCallCheck(this, StorageService);
      }

      _createClass(StorageService, [{
        key: "get",
        value: function get(key) {
          return localStorage ? localStorage.getItem(key) : null;
        }
      }, {
        key: "set",
        value: function set(key, value) {
          if (localStorage) {
            localStorage.setItem(key, value);
          }
        }
      }]);

      return StorageService;
    }();

    StorageService.ɵfac = function StorageService_Factory(t) {
      return new (t || StorageService)();
    };

    StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StorageService,
      factory: StorageService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/services/modeToggle.service.ts":
  /*!********************************************!*\
    !*** ./src/services/modeToggle.service.ts ***!
    \********************************************/

  /*! exports provided: ThemeMode, ModeToggleService */

  /***/
  function srcServicesModeToggleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeMode", function () {
      return ThemeMode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModeToggleService", function () {
      return ModeToggleService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./local-storage.service */
    "./src/services/local-storage.service.ts");

    var ThemeMode;

    (function (ThemeMode) {
      ThemeMode[ThemeMode["DARK"] = 0] = "DARK";
      ThemeMode[ThemeMode["LIGHT"] = 1] = "LIGHT";
    })(ThemeMode || (ThemeMode = {}));

    var ModeToggleService = /*#__PURE__*/function () {
      function ModeToggleService(storage) {
        _classCallCheck(this, ModeToggleService);

        this.storage = storage;
        this.theme$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](ThemeMode.LIGHT);
        this.THEME_KEY = 'THEME';
        this.DARK_THEME_VALUE = 'DARK';
        this.LIGHT_THEME_VALUE = 'LIGHT';
        this.DARK_THEME_CLASS_NAME = 'theme-dark';
        this.darkThemeSelected = false;
      }

      _createClass(ModeToggleService, [{
        key: "setThemeOnStart",
        value: function setThemeOnStart() {
          if (this.isDarkThemeSelected()) {
            this.setDarkTheme();
          } else {
            this.setLightTheme();
          }

          setTimeout(function () {
            document.body.classList.add('animate-colors-transition');
          }, 500);
        }
      }, {
        key: "toggle",
        value: function toggle() {
          if (this.darkThemeSelected) {
            this.setLightTheme();
          } else {
            this.setDarkTheme();
          }
        }
      }, {
        key: "isDarkThemeSelected",
        value: function isDarkThemeSelected() {
          this.darkThemeSelected = this.storage.get(this.THEME_KEY) === this.DARK_THEME_VALUE;
          return this.darkThemeSelected;
        }
      }, {
        key: "setLightTheme",
        value: function setLightTheme() {
          this.design = 'assets/designlight.png';
          this.proggen = 'assets/proggenlight.png';
          this.webdev = 'assets/webtwicklunglight.png';
          this.mePng = 'assets/triangleportraitlight.png';
          this.storage.set(this.THEME_KEY, this.LIGHT_THEME_VALUE);
          document.body.classList.remove(this.DARK_THEME_CLASS_NAME);
          this.darkThemeSelected = false;
          this.theme$.next(ThemeMode.LIGHT);
        }
      }, {
        key: "setDarkTheme",
        value: function setDarkTheme() {
          this.design = 'assets/designdark.png';
          this.proggen = 'assets/proggendark.png';
          this.webdev = 'assets/webentwicklungdark.png';
          this.mePng = 'assets/triangleportraitdark.png';
          this.storage.set(this.THEME_KEY, this.DARK_THEME_VALUE);
          document.body.classList.add(this.DARK_THEME_CLASS_NAME);
          this.darkThemeSelected = true;
          this.theme$.next(ThemeMode.DARK);
        }
      }, {
        key: "getdesign",
        value: function getdesign() {
          return this.design;
        }
      }, {
        key: "getproggen",
        value: function getproggen() {
          return this.proggen;
        }
      }, {
        key: "getwebdev",
        value: function getwebdev() {
          return this.webdev;
        }
      }, {
        key: "getMe",
        value: function getMe() {
          return this.mePng;
        }
      }, {
        key: "getDarkTheme",
        value: function getDarkTheme() {
          return this.darkThemeSelected;
        }
      }]);

      return ModeToggleService;
    }();

    ModeToggleService.ɵfac = function ModeToggleService_Factory(t) {
      return new (t || ModeToggleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]));
    };

    ModeToggleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ModeToggleService,
      factory: ModeToggleService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModeToggleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _local_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/services/nav.service.ts":
  /*!*************************************!*\
    !*** ./src/services/nav.service.ts ***!
    \*************************************/

  /*! exports provided: NavService */

  /***/
  function srcServicesNavServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavService", function () {
      return NavService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var NavService = /*#__PURE__*/function () {
      function NavService() {
        _classCallCheck(this, NavService);

        // Verantwortlich dafür, dass die main-page mit der Navigation kommunizieren kann und Methoden austauscht
        this.subject1 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subject2 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subject3 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subject4 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subject5 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(NavService, [{
        key: "sendClickEvent1",
        value: function sendClickEvent1() {
          this.subject1.next();
        }
      }, {
        key: "sendClickEvent2",
        value: function sendClickEvent2() {
          this.subject2.next();
        }
      }, {
        key: "sendClickEvent3",
        value: function sendClickEvent3() {
          this.subject3.next();
        }
      }, {
        key: "sendClickEvent4",
        value: function sendClickEvent4() {
          this.subject4.next();
        }
      }, {
        key: "sendClickEvent5",
        value: function sendClickEvent5() {
          this.subject5.next();
        }
      }, {
        key: "getClickEvent1",
        value: function getClickEvent1() {
          return this.subject1.asObservable();
        }
      }, {
        key: "getClickEvent2",
        value: function getClickEvent2() {
          return this.subject2.asObservable();
        }
      }, {
        key: "getClickEvent3",
        value: function getClickEvent3() {
          return this.subject3.asObservable();
        }
      }, {
        key: "getClickEvent4",
        value: function getClickEvent4() {
          return this.subject4.asObservable();
        }
      }, {
        key: "getClickEvent5",
        value: function getClickEvent5() {
          return this.subject5.asObservable();
        }
      }]);

      return NavService;
    }();

    NavService.ɵfac = function NavService_Factory(t) {
      return new (t || NavService)();
    };

    NavService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NavService,
      factory: NavService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Desktop\WebDev\2. Angular-Projekte\Portfolio\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map