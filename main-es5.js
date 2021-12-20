function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

    var AboutMeComponent = function AboutMeComponent() {
      _classCallCheck(this, AboutMeComponent);
    };

    AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) {
      return new (t || AboutMeComponent)();
    };

    AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutMeComponent,
      selectors: [["app-about-me"]],
      decls: 22,
      vars: 0,
      consts: [[1, "titel"], [1, "about-me"], [1, "bild"], ["src", "assets/mesmile.png", "alt", "Portrait"], [1, "inhalt"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Mir gef\xE4llt, dass es bei der Frontend Webentwicklung darum geht eine Benutzeroberfl\xE4che zu entwerfen und umzusetzen. Logik und Funktionalit\xE4t geh\xF6ren zwar immer dazu, aber grade das visuelle Feedback im Browser, vom geschriebenen Code, ist eine gro\xDFe Motivation f\xFCr mich. Es veranlasst mich immer wieder den Blick aufs Detail zu legen und neue/weitere M\xF6glichkeiten von Layouts zu erkunden und umzusetzen. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Daher m\xF6chte ich meinen weiteren Werdegang auf die Frontend Webentwicklung konzentrieren. Meine bevorzugten Frameworks sind dabei Angular und Vue. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".about-me[_ngcontent-%COMP%] {\n  min-height: 30vh;\n  width: 75%;\n  margin: auto;\n  display: grid;\n  padding: 10px;\n  grid-column-gap: 50px;\n  justify-content: center;\n  grid-template-columns: 400px minmax(600px, 750px);\n  grid-auto-rows: auto;\n  grid-template-areas: \"bild inhalt\";\n}\n\n.titel[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.bild[_ngcontent-%COMP%] {\n  grid-area: bild;\n}\n\n.bild[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  border: 2px solid var(--cardBorder);\n  border-radius: 10px;\n}\n\n.inhalt[_ngcontent-%COMP%] {\n  grid-area: inhalt;\n  max-width: 75ch;\n  text-align: justify;\n}\n\n@media (max-width: 950px) {\n  .about-me[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(100px, 200px) minmax(100px, 350px);\n    grid-template-areas: \"titel  titel\" \"bild   bild\" \"inhalt inhalt\";\n  }\n\n  .bild[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n\n  .inhalt[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9hYm91dC1tZS9EOlxcRGVza3RvcFxcV2ViRGV2XFwyX0FuZ3VsYXItUHJvamVrdGVcXFBvcnRmb2xpby9zcmNcXGFwcFxcQ29tcG9uZW50c1xcYWJvdXQtbWVcXGFib3V0LW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUVBLGlEQUFBO0VBQ0Esb0JBQUE7RUFFQSxrQ0FBQTtBQ0ZGOztBREtBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBRE9BO0VBQ0U7SUFDRSxnRUFBQTtJQUVBLGlFQUNFO0VDTko7O0VEV0E7SUFDRSxnQkFBQTtFQ1JGOztFRFVBO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtFQ1BGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LW1lIHtcbiAgbWluLWhlaWdodDogMzB2aDtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBncmlkO1xuXG4gIHBhZGRpbmc6IDEwcHg7XG4gIGdyaWQtY29sdW1uLWdhcDogNTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MDBweCBtaW5tYXgoNjAwcHgsIDc1MHB4KTtcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XG5cbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2JpbGQgaW5oYWx0Jztcbn1cblxuLnRpdGVsIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmlsZCB7XG4gIGdyaWQtYXJlYTogYmlsZDtcbn1cblxuLmJpbGQgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmluaGFsdCB7XG4gIGdyaWQtYXJlYTogaW5oYWx0O1xuICBtYXgtd2lkdGg6IDc1Y2g7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi8vIEJlaSBrbGVpbmVyZW0gQmlsZHNjaGlybVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgLmFib3V0LW1lIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxMDBweCwgMjAwcHgpIG1pbm1heCgxMDBweCwgMzUwcHgpO1xuXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICd0aXRlbCAgdGl0ZWwnXG4gICAgICAnYmlsZCAgIGJpbGQnXG4gICAgICAnaW5oYWx0IGluaGFsdCc7XG4gIH1cblxuICAuYmlsZCB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuICAuaW5oYWx0IHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuIiwiLmFib3V0LW1lIHtcbiAgbWluLWhlaWdodDogMzB2aDtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiAxMHB4O1xuICBncmlkLWNvbHVtbi1nYXA6IDUwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwMHB4IG1pbm1heCg2MDBweCwgNzUwcHgpO1xuICBncmlkLWF1dG8tcm93czogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJiaWxkIGluaGFsdFwiO1xufVxuXG4udGl0ZWwge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iaWxkIHtcbiAgZ3JpZC1hcmVhOiBiaWxkO1xufVxuXG4uYmlsZCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNhcmRCb3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaW5oYWx0IHtcbiAgZ3JpZC1hcmVhOiBpbmhhbHQ7XG4gIG1heC13aWR0aDogNzVjaDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gIC5hYm91dC1tZSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTAwcHgsIDIwMHB4KSBtaW5tYXgoMTAwcHgsIDM1MHB4KTtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInRpdGVsICB0aXRlbFwiIFwiYmlsZCAgIGJpbGRcIiBcImluaGFsdCBpbmhhbHRcIjtcbiAgfVxuXG4gIC5iaWxkIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG5cbiAgLmluaGFsdCB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn0iXX0= */"]
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
      }], null, null);
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
      decls: 13,
      vars: 0,
      consts: [[1, "titleKontakt"], [1, "kontaktContainer"], [1, "fas", "fa-envelope"], ["href", "mailto:joscha.sattler@outlook.de"], [1, "phone"], [1, "fas", "fa-mobile-alt"]],
      template: function KontaktComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Kontakt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " joscha.sattler@outlook.de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " : 0151 59169322 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".titleKontakt[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 35px;\n  text-align: center;\n}\n\n.kontaktContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  font-size: 2.4rem;\n  align-items: center;\n  justify-content: center;\n  gap: 5rem;\n  margin-bottom: 2rem;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n@media (max-width: 950px) {\n  .kontaktContainer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 2rem;\n  }\n\n  .titleKontakt[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9rb250YWt0L0Q6XFxEZXNrdG9wXFxXZWJEZXZcXDJfQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxrb250YWt0XFxrb250YWt0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL2tvbnRha3Qva29udGFrdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0FDQ0Y7O0FESUE7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsU0FBQTtFQ0RGOztFREdBO0lBQ0UsbUJBQUE7RUNBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9rb250YWt0L2tvbnRha3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVLb250YWt0IHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ua29udGFrdENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLy8gQmVpIGtsZWluZXJlbSBCaWxkc2NoaXJtXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuICAua29udGFrdENvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJyZW07XG4gIH1cbiAgLnRpdGxlS29udGFrdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuIiwiLnRpdGxlS29udGFrdCB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmtvbnRha3RDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuICAua29udGFrdENvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJyZW07XG4gIH1cblxuICAudGl0bGVLb250YWt0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59Il19 */"]
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
      decls: 15,
      vars: 0,
      consts: [[1, "scroll"], ["thumb", ""], ["galerie", ""], ["skills", ""], ["about", ""], ["kontakt", ""]],
      template: function MainPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-thumbnail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-projekt-galerie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-about-me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-kontakt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_2__["ThumbnailComponent"], _projekt_galerie_projekt_galerie_component__WEBPACK_IMPORTED_MODULE_3__["ProjektGalerieComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__["AboutMeComponent"], _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_6__["KontaktComponent"]],
      styles: [".scroll[_ngcontent-%COMP%] {\n  scroll-margin-top: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9tYWluLXBhZ2UvRDpcXERlc2t0b3BcXFdlYkRldlxcMl9Bbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXG1haW4tcGFnZVxcbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbCB7XHJcbiAgc2Nyb2xsLW1hcmdpbi10b3A6IDEwcmVtO1xyXG59XHJcbiIsIi5zY3JvbGwge1xuICBzY3JvbGwtbWFyZ2luLXRvcDogMTByZW07XG59Il19 */"]
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
      styles: [".ganzeNav[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n}\n.bgNav[_ngcontent-%COMP%] {\n  background-color: var(--navBackground);\n  border-bottom: 1px solid black;\n}\n\n.navbar-nav[_ngcontent-%COMP%] {\n  margin-right: 5%;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-left: 35px;\n  color: var(--text);\n}\n.nav-link[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: var(--hover);\n}\n.bgLink[_ngcontent-%COMP%] {\n  color: var(--textreverse);\n}\n.bgLink[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: var(--hoverreverse);\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  font-size: 2.6rem;\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.fa-adjust[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.navTopBorder[_ngcontent-%COMP%] {\n  border: none;\n}\n.navTopBorderReverse[_ngcontent-%COMP%] {\n  border: none;\n}\n@media (max-width: 991px) {\n  .navTopBorder[_ngcontent-%COMP%] {\n    border-top: 2px solid var(--cardBorder);\n  }\n\n  .navTopBorderReverse[_ngcontent-%COMP%] {\n    border-top: 2px solid var(--cardBorderReverse);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9tYWluLXBhZ2UvbmF2aWdhdGlvbi9EOlxcRGVza3RvcFxcV2ViRGV2XFwyX0FuZ3VsYXItUHJvamVrdGVcXFBvcnRmb2xpby9zcmNcXGFwcFxcQ29tcG9uZW50c1xcbWFpbi1wYWdlXFxuYXZpZ2F0aW9uXFxuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL21haW4tcGFnZS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNDRjtBREVBO0VBQ0Usc0NBQUE7RUFDQSw4QkFBQTtBQ0NGO0FERUEseUNBQUE7QUFDQTtFQUNFLGdCQUFBO0FDQ0Y7QURHQSxhQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FGO0FERUU7RUFDRSxtQkFBQTtBQ0FKO0FESUE7RUFDRSx5QkFBQTtBQ0RGO0FER0U7RUFDRSwwQkFBQTtBQ0RKO0FES0E7RUFDRSxpQkFBQTtBQ0ZGO0FETUE7RUFDRSxlQUFBO0FDSEY7QURNQTtFQUNFLGVBQUE7QUNIRjtBRE1BLGNBQUE7QUFFQTtFQUNFLFlBQUE7QUNKRjtBRE1BO0VBQ0UsWUFBQTtBQ0hGO0FETUE7RUFDRTtJQUNFLHVDQUFBO0VDSEY7O0VES0E7SUFDRSw4Q0FBQTtFQ0ZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL21haW4tcGFnZS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHYW56ZSBOYXYgKi9cclxuLmdhbnplTmF2IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYmdOYXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdkJhY2tncm91bmQpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLyogRGVyIFJhaG1lbiwgd28gZGllIExpbmtzIGRyaW5uZSBzaW5kICovXHJcbi5uYXZiYXItbmF2IHtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG5cclxuLyogZGVyIExpbmsgKi9cclxuLm5hdi1saW5rIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgY29sb3I6IHZhcigtLXRleHQpO1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWhvdmVyKTtcclxuICB9XHJcbn1cclxuXHJcbi5iZ0xpbmsge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0cmV2ZXJzZSk7XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0taG92ZXJyZXZlcnNlKTtcclxuICB9XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xyXG59XHJcblxyXG5cclxuYTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZmEtYWRqdXN0OmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIG5hdiBCb3JkZXIqL1xyXG5cclxuLm5hdlRvcEJvcmRlciB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5uYXZUb3BCb3JkZXJSZXZlcnNlIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC5uYXZUb3BCb3JkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWNhcmRCb3JkZXIpO1xyXG4gIH1cclxuICAubmF2VG9wQm9yZGVyUmV2ZXJzZSB7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tY2FyZEJvcmRlclJldmVyc2UpO1xyXG4gIH1cclxufVxyXG4iLCIvKiBHYW56ZSBOYXYgKi9cbi5nYW56ZU5hdiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmdOYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZCYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4vKiBEZXIgUmFobWVuLCB3byBkaWUgTGlua3MgZHJpbm5lIHNpbmQgKi9cbi5uYXZiYXItbmF2IHtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuLyogZGVyIExpbmsgKi9cbi5uYXYtbGluayB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cbi5uYXYtbGluayA6aG92ZXIge1xuICBjb2xvcjogdmFyKC0taG92ZXIpO1xufVxuXG4uYmdMaW5rIHtcbiAgY29sb3I6IHZhcigtLXRleHRyZXZlcnNlKTtcbn1cbi5iZ0xpbmsgOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWhvdmVycmV2ZXJzZSk7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBmb250LXNpemU6IDIuNnJlbTtcbn1cblxuYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLWFkanVzdDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogbmF2IEJvcmRlciovXG4ubmF2VG9wQm9yZGVyIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubmF2VG9wQm9yZGVyUmV2ZXJzZSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5uYXZUb3BCb3JkZXIge1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyKTtcbiAgfVxuXG4gIC5uYXZUb3BCb3JkZXJSZXZlcnNlIHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tY2FyZEJvcmRlclJldmVyc2UpO1xuICB9XG59Il19 */"]
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
  "./src/app/Components/my-slider/my-slider.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Components/my-slider/my-slider.component.ts ***!
    \*************************************************************/

  /*! exports provided: MySliderComponent */

  /***/
  function srcAppComponentsMySliderMySliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MySliderComponent", function () {
      return MySliderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MySliderComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 15);
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-slide-to", item_r2.nummer);
      }
    }

    function MySliderComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r3.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r3.titel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.titel);
      }
    }

    var MySliderComponent = function MySliderComponent() {
      _classCallCheck(this, MySliderComponent);
    };

    MySliderComponent.ɵfac = function MySliderComponent_Factory(t) {
      return new (t || MySliderComponent)();
    };

    MySliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MySliderComponent,
      selectors: [["app-my-slider"]],
      inputs: {
        collection: "collection",
        startbild: "startbild"
      },
      decls: 20,
      vars: 5,
      consts: [[1, "container"], ["id", "carouselExampleCaptions", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleCaptions", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleCaptions", 4, "ngFor", "ngForOf"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "d-block", "w-100", 3, "src", "alt"], [1, "untertitel"], ["class", "carousel-item", 4, "ngFor", "ngForOf"], ["href", "#carouselExampleCaptions", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleCaptions", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["data-target", "#carouselExampleCaptions"], [1, "carousel-item"]],
      template: function MySliderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MySliderComponent_li_4_Template, 1, 1, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MySliderComponent_div_11_Template, 5, 3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.collection);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.startbild.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.startbild.titel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.startbild.titel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.collection);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".carousel-control-prev-icon[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23077867' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\");\n}\n\n.carousel-control-next-icon[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23077867' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\");\n}\n\n.carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: var(--text);\n}\n\n.untertitel[_ngcontent-%COMP%] {\n  padding: 5rem;\n  text-align: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n  max-height: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9teS1zbGlkZXIvRDpcXERlc2t0b3BcXFdlYkRldlxcMl9Bbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXG15LXNsaWRlclxcbXktc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL215LXNsaWRlci9teS1zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtTkFBQTtBQ0NGOztBREVBO0VBQ0UsbU5BQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9teS1zbGlkZXIvbXktc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyUyMzA3Nzg2Nycgdmlld0JveD0nMCAwIDggOCclM0UlM0NwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNS0yLjUtMi41IDIuNS0yLjUtMS41LTEuNXonLyUzRSUzQy9zdmclM0VcIik7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPSclMjMwNzc4NjcnIHZpZXdCb3g9JzAgMCA4IDgnJTNFJTNDcGF0aCBkPSdNMi43NSAwbC0xLjUgMS41IDIuNSAyLjUtMi41IDIuNSAxLjUgMS41IDQtNC00LTR6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdGV4dCk7XHJcbn1cclxuXHJcbi51bnRlcnRpdGVsIHtcclxuICBwYWRkaW5nOiA1cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG59XHJcbiIsIi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nJTIzMDc3ODY3JyB2aWV3Qm94PScwIDAgOCA4JyUzRSUzQ3BhdGggZD0nTTUuMjUgMGwtNCA0IDQgNCAxLjUtMS41LTIuNS0yLjUgMi41LTIuNS0xLjUtMS41eicvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPSclMjMwNzc4NjcnIHZpZXdCb3g9JzAgMCA4IDgnJTNFJTNDcGF0aCBkPSdNMi43NSAwbC0xLjUgMS41IDIuNSAyLjUtMi41IDIuNSAxLjUgMS41IDQtNC00LTR6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xufVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQpO1xufVxuXG4udW50ZXJ0aXRlbCB7XG4gIHBhZGRpbmc6IDVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW1nIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgbWF4LWhlaWdodDogNjAwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MySliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-my-slider',
          templateUrl: './my-slider.component.html',
          styleUrls: ['./my-slider.component.scss']
        }]
      }], null, {
        collection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        startbild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
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
      consts: [[1, "titleProjekte"], [1, "parent"], ["routerLink", "/Webentwicklung", 1, "figure"], ["src", "assets/webdev.jpg", "alt", "Webentwicklung"], ["routerLink", "/Eshop", 1, "figure"], ["src", "assets/eshop.jpg", "alt", "Eshop"], ["routerLink", "/SmartFactory", 1, "figure"], ["src", "assets/smartfactory.jpg", "alt", "Industrie 4.0"], ["routerLink", "/Design", 1, "figure"], ["src", "assets/design.jpg", "alt", "Design"], ["routerLink", "/Games", 1, "figure"], ["src", "assets/games.jpg", "alt", "Games"]],
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
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: [".titleProjekte[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n.parent[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  grid-gap: 20px;\n  grid-auto-flow: row;\n  max-width: 1000px;\n  margin: auto;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 300px));\n}\n.parent[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border: 1px solid var(--boxShadow);\n  border-radius: 5px;\n}\n.figure[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 4px 3px var(--boxShadow);\n  cursor: pointer;\n  color: var(--hover);\n}\n.figure[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 2.6rem;\n  text-align: center;\n  background-color: var(--cardBack);\n  color: var(--cardBackText);\n  border: 2px solid var(--cardBorder);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0LWdhbGVyaWUvRDpcXERlc2t0b3BcXFdlYkRldlxcMl9Bbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHByb2pla3QtZ2FsZXJpZVxccHJvamVrdC1nYWxlcmllLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3QtZ2FsZXJpZS9wcm9qZWt0LWdhbGVyaWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQUE7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FGO0FER0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSw2REFBQTtBQ0ZGO0FES0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtDQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE1BO0VBQ0Usd0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNIRjtBRE1BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0VBRUEsbUNBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdC1nYWxlcmllL3Byb2pla3QtZ2FsZXJpZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJpbGRlci1HYWxlcmllICovXHJcblxyXG4udGl0bGVQcm9qZWt0ZSB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBhcmVudCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBncmlkLWdhcDogMjBweDtcclxuICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG5cclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDMwMHB4KSk7XHJcbn1cclxuXHJcbi5wYXJlbnQgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJveFNoYWRvdyk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uZmlndXJlOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgNHB4IDNweCB2YXIoLS1ib3hTaGFkb3cpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogdmFyKC0taG92ZXIpO1xyXG59XHJcblxyXG4uZmlndXJlIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICBmb250LXNpemU6IDIuNnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZEJhY2spO1xyXG4gIGNvbG9yOiB2YXIoLS1jYXJkQmFja1RleHQpO1xyXG5cclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyKTtcclxufVxyXG4iLCIvKiBCaWxkZXItR2FsZXJpZSAqL1xuLnRpdGxlUHJvamVrdGUge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wYXJlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ3JpZC1nYXA6IDIwcHg7XG4gIGdyaWQtYXV0by1mbG93OiByb3c7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDMwMHB4KSk7XG59XG5cbi5wYXJlbnQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm94U2hhZG93KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZmlndXJlOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDRweCAzcHggdmFyKC0tYm94U2hhZG93KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0taG92ZXIpO1xufVxuXG4uZmlndXJlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBmb250LXNpemU6IDIuNnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkQmFjayk7XG4gIGNvbG9yOiB2YXIoLS1jYXJkQmFja1RleHQpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyKTtcbn0iXX0= */"]
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
  "./src/app/Components/projekte/design/aftereffect/aftereffect.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/Components/projekte/design/aftereffect/aftereffect.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: AftereffectComponent */

  /***/
  function srcAppComponentsProjekteDesignAftereffectAftereffectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AftereffectComponent", function () {
      return AftereffectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AftereffectComponent = /*#__PURE__*/function () {
      function AftereffectComponent() {
        _classCallCheck(this, AftereffectComponent);
      }

      _createClass(AftereffectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AftereffectComponent;
    }();

    AftereffectComponent.ɵfac = function AftereffectComponent_Factory(t) {
      return new (t || AftereffectComponent)();
    };

    AftereffectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AftereffectComponent,
      selectors: [["app-aftereffect"]],
      decls: 25,
      vars: 0,
      consts: [[1, "titleDesign"], [1, "all"], [1, "video"], ["src", "https://www.youtube.com/embed/nkHs4765b9g", "allowfullscreen", ""], [1, "info"], [1, "skillscontainer"], ["id", "frameworks", 1, "elementImElternContainer"], [1, "content"], ["src", "assets/ae.png", "alt", "After Effect"], ["src", "assets/pr.png", "alt", "Premiere"], ["src", "assets/ps.png", "alt", "Photoshop"]],
      template: function AftereffectComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      styles: [".titleDesign[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.all[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  margin-bottom: 50px;\n}\n\n.all[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n.all[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 75vh;\n}\n\n.skillscontainer[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n\n.skillscontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.skillscontainer[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: var(--text);\n}\n\n.skillscontainer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9kZXNpZ24vYWZ0ZXJlZmZlY3QvRDpcXERlc2t0b3BcXFdlYkRldlxcMl9Bbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHByb2pla3RlXFxkZXNpZ25cXGFmdGVyZWZmZWN0XFxhZnRlcmVmZmVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9kZXNpZ24vYWZ0ZXJlZmZlY3QvYWZ0ZXJlZmZlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURJQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDREY7O0FER0U7RUFDRSxVQUFBO0FDREo7O0FER0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0ROOztBRFNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7QUNQSjs7QURVRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ1JKOztBRFdFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNUSjs7QURjRTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0VBRUEsbUJBQUE7RUFDQSx1QkFBQTtBQ2ZKOztBRG9CQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNqQkYiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL2Rlc2lnbi9hZnRlcmVmZmVjdC9hZnRlcmVmZmVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZURlc2lnbiB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLy8gVmlkZW9cclxuXHJcbi5hbGwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcblxyXG4gIC52aWRlbyB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG5cclxuICAgIGlmcmFtZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDc1dmg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2tpbGxzY29udGFpbmVyIHtcclxuICAvLyBJbWFnZS1TdHVmZiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4gIGZpZ3VyZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogNzVweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgZmlnY2FwdGlvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29udGVudCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4gIC5jb250ZW50IHtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG59XHJcbiIsIi50aXRsZURlc2lnbiB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFsbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLmFsbCAudmlkZW8ge1xuICB3aWR0aDogNzUlO1xufVxuLmFsbCAudmlkZW8gaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzV2aDtcbn1cblxuLnNraWxsc2NvbnRhaW5lciBmaWd1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDE3NXB4O1xufVxuLnNraWxsc2NvbnRhaW5lciBpbWcge1xuICBtYXgtaGVpZ2h0OiA3NXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5za2lsbHNjb250YWluZXIgZmlnY2FwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuLnNraWxsc2NvbnRhaW5lciAuY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AftereffectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-aftereffect',
          templateUrl: './aftereffect.component.html',
          styleUrls: ['./aftereffect.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Components/projekte/design/design.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Components/projekte/design/design.component.ts ***!
    \****************************************************************/

  /*! exports provided: DesignComponent */

  /***/
  function srcAppComponentsProjekteDesignDesignComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DesignComponent", function () {
      return DesignComponent;
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


    var _photoshop_photoshop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./photoshop/photoshop.component */
    "./src/app/Components/projekte/design/photoshop/photoshop.component.ts");
    /* harmony import */


    var _aftereffect_aftereffect_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./aftereffect/aftereffect.component */
    "./src/app/Components/projekte/design/aftereffect/aftereffect.component.ts");

    var _c0 = ["goto"];

    function DesignComponent_app_photoshop_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-photoshop");
      }
    }

    function DesignComponent_app_aftereffect_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-aftereffect");
      }
    }

    function DesignComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "W\xE4hle ein Projekt aus!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DesignComponent = /*#__PURE__*/function () {
      function DesignComponent() {
        _classCallCheck(this, DesignComponent);

        this.foto = false;
        this.video = false;
      }

      _createClass(DesignComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleFoto",
        value: function toggleFoto() {
          var _this7 = this;

          this.video = false;
          this.foto = true;
          document.getElementById('foto').classList.add('figureClick');
          document.getElementById('video').classList.remove('figureClick');
          setTimeout(function () {
            _this7["goto"].nativeElement.scrollIntoView({
              block: 'start'
            });
          }, 200);
        }
      }, {
        key: "toggleVideo",
        value: function toggleVideo() {
          var _this8 = this;

          this.foto = false;
          this.video = true;
          document.getElementById('foto').classList.remove('figureClick');
          document.getElementById('video').classList.add('figureClick');
          setTimeout(function () {
            _this8["goto"].nativeElement.scrollIntoView({
              block: 'start'
            });
          }, 200);
        }
      }]);

      return DesignComponent;
    }();

    DesignComponent.ɵfac = function DesignComponent_Factory(t) {
      return new (t || DesignComponent)();
    };

    DesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DesignComponent,
      selectors: [["app-design"]],
      viewQuery: function DesignComponent_Query(rf, ctx) {
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
      consts: [[1, "titleDesign"], [1, "designContainer"], ["id", "foto", 1, "figure", 3, "click"], ["src", "assets/ps2.png", "alt", "Blog"], ["id", "video", 1, "figure", 3, "click"], ["src", "assets/motiondesign.jpg", "alt", "Verein"], [1, "projekte"], ["goto", ""], [4, "ngIf"], ["class", "pick", 4, "ngIf"], [1, "pick"]],
      template: function DesignComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Projekte ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Design ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "figure", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesignComponent_Template_figure_click_6_listener() {
            return ctx.toggleFoto();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Photoshop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "figure", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesignComponent_Template_figure_click_10_listener() {
            return ctx.toggleVideo();
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.foto);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.video);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.foto && !ctx.video);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _photoshop_photoshop_component__WEBPACK_IMPORTED_MODULE_2__["PhotoshopComponent"], _aftereffect_aftereffect_component__WEBPACK_IMPORTED_MODULE_3__["AftereffectComponent"]],
      styles: [".projekte[_ngcontent-%COMP%] {\n  scroll-margin-top: 10rem;\n}\n\n.titleDesign[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.designContainer[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  grid-gap: 20px;\n  grid-auto-flow: row;\n  margin: auto;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 300px));\n}\n\n.designContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 1px solid var(--boxShadow);\n  border-radius: 5px;\n}\n\n.pick[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 25px;\n  text-align: center;\n}\n\n.figure[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 4px 3px var(--boxShadow);\n  cursor: pointer;\n  color: var(--hover);\n}\n\n.figure[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 2.6rem;\n  text-align: center;\n  background-color: var(--cardBack);\n  color: var(--cardBackText);\n  border: 2px solid var(--cardBorder);\n}\n\n.figureClick[_ngcontent-%COMP%] {\n  box-shadow: 0 0 4px 3px var(--hover);\n  border: none;\n  cursor: pointer;\n}\n\n.video[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90%;\n  margin: auto;\n  padding-bottom: 56.25%;\n  height: 0;\n}\n\n.video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 75%;\n  height: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9kZXNpZ24vRDpcXERlc2t0b3BcXFdlYkRldlxcMl9Bbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHByb2pla3RlXFxkZXNpZ25cXGRlc2lnbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9kZXNpZ24vZGVzaWduLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLDZEQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFFQSxrQ0FBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMEJBQUE7RUFFQSxtQ0FBQTtBQ0ZGOztBREtBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBRE9BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL2Rlc2lnbi9kZXNpZ24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVrdGUge1xyXG4gIHNjcm9sbC1tYXJnaW4tdG9wOiAxMHJlbTtcclxufVxyXG5cclxuLnRpdGxlRGVzaWduIHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGVzaWduQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdyaWQtZ2FwOiAyMHB4O1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAzMDBweCkpO1xyXG59XHJcblxyXG4uZGVzaWduQ29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuXHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm94U2hhZG93KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5waWNrIHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmlndXJlOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgNHB4IDNweCB2YXIoLS1ib3hTaGFkb3cpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogdmFyKC0taG92ZXIpO1xyXG59XHJcblxyXG4uZmlndXJlIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICBmb250LXNpemU6IDIuNnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZEJhY2spO1xyXG4gIGNvbG9yOiB2YXIoLS1jYXJkQmFja1RleHQpO1xyXG5cclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyKTtcclxufVxyXG5cclxuLmZpZ3VyZUNsaWNrIHtcclxuICBib3gtc2hhZG93OiAwIDAgNHB4IDNweCB2YXIoLS1ob3Zlcik7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLy8gVmlkZW9cclxuXHJcbi52aWRlbyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4udmlkZW8gaWZyYW1lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBoZWlnaHQ6IDc1JTtcclxufVxyXG4iLCIucHJvamVrdGUge1xuICBzY3JvbGwtbWFyZ2luLXRvcDogMTByZW07XG59XG5cbi50aXRsZURlc2lnbiB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRlc2lnbkNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLWdhcDogMjBweDtcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgbWFyZ2luOiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAzMDBweCkpO1xufVxuXG4uZGVzaWduQ29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm94U2hhZG93KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucGljayB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZpZ3VyZTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggM3B4IHZhcigtLWJveFNoYWRvdyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuLmZpZ3VyZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgZm9udC1zaXplOiAyLjZyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZEJhY2spO1xuICBjb2xvcjogdmFyKC0tY2FyZEJhY2tUZXh0KTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2FyZEJvcmRlcik7XG59XG5cbi5maWd1cmVDbGljayB7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggM3B4IHZhcigtLWhvdmVyKTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi52aWRlbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xuICBoZWlnaHQ6IDA7XG59XG5cbi52aWRlbyBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDc1JTtcbiAgaGVpZ2h0OiA3NSU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DesignComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-design',
          templateUrl: './design.component.html',
          styleUrls: ['./design.component.scss']
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
  "./src/app/Components/projekte/design/photoshop/photoshop.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/Components/projekte/design/photoshop/photoshop.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: PhotoshopComponent */

  /***/
  function srcAppComponentsProjekteDesignPhotoshopPhotoshopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoshopComponent", function () {
      return PhotoshopComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _my_slider_my_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../my-slider/my-slider.component */
    "./src/app/Components/my-slider/my-slider.component.ts");

    var PhotoshopComponent = /*#__PURE__*/function () {
      function PhotoshopComponent() {
        _classCallCheck(this, PhotoshopComponent);

        // Bilder-Galerie zum Eshop
        this.startbild = {
          img: 'assets/design/b1+b2.jpg',
          titel: 'Aufgabe: Schafskopf auf Pinguin setzen',
          nummer: 0
        };
        this.bilder = [{
          img: 'assets/design/b3.jpg',
          titel: 'Resultat',
          nummer: 1
        }, {
          img: 'assets/design/b4+b5.jpg',
          titel: 'Aufgabe: Meer begradigen, Segelboot in den Hintergrund ',
          nummer: 2
        }, {
          img: 'assets/design/b6.png',
          titel: 'Resultat',
          nummer: 3
        }, {
          img: 'assets/design/b7.png',
          titel: 'Aufgabe: Redesign eines Logo (VFL-Wolfsburg)',
          nummer: 4
        }, {
          img: 'assets/design/b8.png',
          titel: 'Resultat',
          nummer: 5
        }, {
          img: 'assets/design/b9.png',
          titel: 'Redesign Saturn Webseite',
          nummer: 6
        }, {
          img: 'assets/design/b10.png',
          titel: 'Resultat',
          nummer: 7
        }];
      }

      _createClass(PhotoshopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PhotoshopComponent;
    }();

    PhotoshopComponent.ɵfac = function PhotoshopComponent_Factory(t) {
      return new (t || PhotoshopComponent)();
    };

    PhotoshopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PhotoshopComponent,
      selectors: [["app-photoshop"]],
      decls: 16,
      vars: 2,
      consts: [[1, "titleDesign"], [1, "slider"], [3, "startbild", "collection"], [1, "info"], [1, "skillscontainer"], ["id", "frameworks", 1, "elementImElternContainer"], [1, "content"], ["src", "assets/ps.png", "alt", "Pohotoshop"]],
      template: function PhotoshopComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Photoshop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-my-slider", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Genutzte Tools ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Pohotoshop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("startbild", ctx.startbild)("collection", ctx.bilder);
        }
      },
      directives: [_my_slider_my_slider_component__WEBPACK_IMPORTED_MODULE_1__["MySliderComponent"]],
      styles: [".titleDesign[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.skillscontainer[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n\n.skillscontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.skillscontainer[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: var(--text);\n}\n\n.skillscontainer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9kZXNpZ24vcGhvdG9zaG9wL0Q6XFxEZXNrdG9wXFxXZWJEZXZcXDJfQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxwcm9qZWt0ZVxcZGVzaWduXFxwaG90b3Nob3BcXHBob3Rvc2hvcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9kZXNpZ24vcGhvdG9zaG9wL3Bob3Rvc2hvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREtFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7QUNISjs7QURNRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0pKOztBRE9FO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURVRTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0VBRUEsbUJBQUE7RUFDQSx1QkFBQTtBQ1hKOztBRGdCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNiRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZGVzaWduL3Bob3Rvc2hvcC9waG90b3Nob3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVEZXNpZ24ge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5za2lsbHNjb250YWluZXIge1xyXG4gIC8vIEltYWdlLVN0dWZmIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbiAgZmlndXJlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOiAxNzVweDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA3NXB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5cclxuICBmaWdjYXB0aW9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgfVxyXG5cclxuICAvLyBDb250ZW50IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbiAgLmNvbnRlbnQge1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbn1cclxuIiwiLnRpdGxlRGVzaWduIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2tpbGxzY29udGFpbmVyIGZpZ3VyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTc1cHg7XG59XG4uc2tpbGxzY29udGFpbmVyIGltZyB7XG4gIG1heC1oZWlnaHQ6IDc1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnNraWxsc2NvbnRhaW5lciBmaWdjYXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG4uc2tpbGxzY29udGFpbmVyIC5jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoshopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-photoshop',
          templateUrl: './photoshop.component.html',
          styleUrls: ['./photoshop.component.scss']
        }]
      }], null, null);
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


    var _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../services/modeToggle.service */
    "./src/services/modeToggle.service.ts");
    /* harmony import */


    var _my_slider_my_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../my-slider/my-slider.component */
    "./src/app/Components/my-slider/my-slider.component.ts");

    var EshopComponent = /*#__PURE__*/function () {
      function EshopComponent(toggle) {
        _classCallCheck(this, EshopComponent);

        this.toggle = toggle; // Bilder-Galerie zum Eshop

        this.startbild = {
          img: 'assets/eshop/start.png',
          titel: 'Startfenster',
          nummer: 0
        };
        this.bilder = [{
          img: 'assets/eshop/k1.png',
          titel: 'Kunden - Übersicht',
          nummer: 1
        }, {
          img: 'assets/eshop/k2.png',
          titel: 'Artikel suchen',
          nummer: 2
        }, {
          img: 'assets/eshop/k3.png',
          titel: 'Artikel in den Warenkorb legen',
          nummer: 3
        }, {
          img: 'assets/eshop/k4.png',
          titel: 'Warenkorb - Übersicht',
          nummer: 4
        }, {
          img: 'assets/eshop/k5.png',
          titel: 'Kaufbestätigung',
          nummer: 5
        }, {
          img: 'assets/eshop/k6.png',
          titel: 'Rechnung',
          nummer: 6
        }, {
          img: 'assets/eshop/m1.png',
          titel: 'Admin - Übersicht',
          nummer: 7
        }, {
          img: 'assets/eshop/m2.png',
          titel: 'Artikel hinzufügen',
          nummer: 8
        }, {
          img: 'assets/eshop/m3.png',
          titel: 'Artikel hinzugefügt',
          nummer: 9
        }, {
          img: 'assets/eshop/m4.png',
          titel: 'Artikel - löschen',
          nummer: 10
        }, {
          img: 'assets/eshop/m4.1.png',
          titel: 'Artikel - gelöscht',
          nummer: 11
        }, {
          img: 'assets/eshop/m5.png',
          titel: 'Artikelbestand - ändern',
          nummer: 12
        }, {
          img: 'assets/eshop/m6.png',
          titel: 'Admin - Artikelverlauf',
          nummer: 13
        }, {
          img: 'assets/eshop/m7.png',
          titel: 'Admin - Ereignis-Verlauf',
          nummer: 14
        }];
      }

      _createClass(EshopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EshopComponent;
    }();

    EshopComponent.ɵfac = function EshopComponent_Factory(t) {
      return new (t || EshopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"]));
    };

    EshopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EshopComponent,
      selectors: [["app-eshop"]],
      decls: 18,
      vars: 3,
      consts: [[1, "titleEshop"], ["href", "https://github.com/joscha-sattler/Eshop-Java", "target", "_blank"], ["alt", "GitHub", 3, "src"], [1, "slider"], [3, "startbild", "collection"], [1, "info"], [1, "skillscontainer"], ["id", "frameworks", 1, "elementImElternContainer"], [1, "content"], ["src", "assets/java.png", "alt", "Java"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-my-slider", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Genutzte Tools ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Java");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toggle.gitHub, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("startbild", ctx.startbild)("collection", ctx.bilder);
        }
      },
      directives: [_my_slider_my_slider_component__WEBPACK_IMPORTED_MODULE_2__["MySliderComponent"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 5.5rem;\n}\n\n.titleEshop[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.titleEshop[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  height: 75px;\n}\n\n.titleEshop[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.titel[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.eshopContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 75%;\n  margin: 50px auto 30px;\n  justify-content: center;\n  align-items: center;\n}\n\n.skillscontainer[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n\n.skillscontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.skillscontainer[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: var(--text);\n}\n\n.skillscontainer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n.info[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9lc2hvcC9EOlxcRGVza3RvcFxcV2ViRGV2XFwyX0FuZ3VsYXItUHJvamVrdGVcXFBvcnRmb2xpby9zcmNcXGFwcFxcQ29tcG9uZW50c1xccHJvamVrdGVcXGVzaG9wXFxlc2hvcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9lc2hvcC9lc2hvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDSTtFQUNFLGVBQUE7QUNDTjs7QURJQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUVBLFVBQUE7RUFDQSxzQkFBQTtFQUVBLHVCQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURXRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0FDVEo7O0FEWUU7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNWSjs7QURhRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDWEo7O0FEZ0JFO0VBRUUsZ0JBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7RUFFQSxtQkFBQTtFQUNBLHVCQUFBO0FDakJKOztBRHNCQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ25CRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZXNob3AvZXNob3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgZm9udC1zaXplOiA1LjVyZW07XHJcbn1cclxuXHJcbi50aXRsZUVzaG9wIHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50aXRlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vIEdlc2FtdGNvbnRhaW5lclxyXG4uZXNob3BDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW46IDUwcHggYXV0byAzMHB4O1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLnNraWxsc2NvbnRhaW5lciB7XHJcbiAgLy8gSW1hZ2UtU3R1ZmYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICBmaWd1cmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIGZpZ2NhcHRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICB9XHJcblxyXG4gIC8vIENvbnRlbnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICAuY29udGVudCB7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbn1cclxuIiwiaDEge1xuICBmb250LXNpemU6IDUuNXJlbTtcbn1cblxuLnRpdGxlRXNob3Age1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRpdGxlRXNob3AgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIGhlaWdodDogNzVweDtcbn1cbi50aXRsZUVzaG9wIGltZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRpdGVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZXNob3BDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDUwcHggYXV0byAzMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNraWxsc2NvbnRhaW5lciBmaWd1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDE3NXB4O1xufVxuLnNraWxsc2NvbnRhaW5lciBpbWcge1xuICBtYXgtaGVpZ2h0OiA3NXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5za2lsbHNjb250YWluZXIgZmlnY2FwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuLnNraWxsc2NvbnRhaW5lciAuY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmluZm8ge1xuICBtYXJnaW4tdG9wOiAyLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59Il19 */"]
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
        return [{
          type: _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Components/projekte/factory/factory.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/Components/projekte/factory/factory.component.ts ***!
    \******************************************************************/

  /*! exports provided: FactoryComponent */

  /***/
  function srcAppComponentsProjekteFactoryFactoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FactoryComponent", function () {
      return FactoryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/services/modeToggle.service */
    "./src/services/modeToggle.service.ts");
    /* harmony import */


    var _my_slider_my_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../my-slider/my-slider.component */
    "./src/app/Components/my-slider/my-slider.component.ts");

    var FactoryComponent = /*#__PURE__*/function () {
      function FactoryComponent(toggle) {
        _classCallCheck(this, FactoryComponent);

        this.toggle = toggle; // Bilder-Galerie zum Eshop

        this.startbild = {
          img: 'assets/factory/f2.png',
          titel: 'Hauptmenü',
          nummer: 0
        };
        this.bilder = [{
          img: 'assets/factory/f1.png',
          titel: 'Factory Prototyp',
          nummer: 1
        }, {
          img: 'assets/factory/f4.png',
          titel: 'Übersicht Gebäude',
          nummer: 2
        }, {
          img: 'assets/factory/f3.png',
          titel: 'Übersicht Produktteile',
          nummer: 3
        }, {
          img: 'assets/factory/f5.png',
          titel: 'Modelle der Produktteile',
          nummer: 4
        }, {
          img: 'assets/factory/f6.png',
          titel: 'Beispiel-Fabrik',
          nummer: 5
        }];
      }

      _createClass(FactoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FactoryComponent;
    }();

    FactoryComponent.ɵfac = function FactoryComponent_Factory(t) {
      return new (t || FactoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"]));
    };

    FactoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FactoryComponent,
      selectors: [["app-factory"]],
      decls: 28,
      vars: 3,
      consts: [[1, "titleFactory"], ["href", "https://github.com/joscha-sattler/Smart-Factory", "target", "_blank"], ["alt", "GitHub", 3, "src"], [1, "slider"], [3, "startbild", "collection"], [1, "info"], [1, "skillscontainer"], ["id", "frameworks", 1, "elementImElternContainer"], [1, "content"], ["src", "assets/unity.png", "alt", "Unity"], ["src", "assets/csharp.png", "alt", "CSharp"], [1, "all"], [1, "video"], ["src", "https://www.youtube.com/embed/jEuUOqOnUfw", "allowfullscreen", ""], ["src", "https://www.youtube.com/embed/5L3OIYvFL1A", "allowfullscreen", ""]],
      template: function FactoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Smart Factory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-my-slider", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Genutzte Tools ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Unity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "C#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "iframe", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "iframe", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toggle.gitHub, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("startbild", ctx.startbild)("collection", ctx.bilder);
        }
      },
      directives: [_my_slider_my_slider_component__WEBPACK_IMPORTED_MODULE_2__["MySliderComponent"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 5.5rem;\n}\n\n.titleFactory[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.titleFactory[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  height: 75px;\n}\n\n.titleFactory[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.titel[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.eshopContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 75%;\n  margin: 50px auto 30px;\n  justify-content: center;\n  align-items: center;\n}\n\n.bilder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  grid-column-gap: 50px;\n  justify-content: center;\n  align-items: center;\n  background-image: url(\"https://c.wallhere.com/photos/87/c7/black_background_lines_minimalism_abstract_square_blue-1925925.jpg!d\");\n  background-size: cover;\n  background-attachment: fixed;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.skillscontainer[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n\n.skillscontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.skillscontainer[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: var(--text);\n}\n\n.skillscontainer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n.info[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2.5rem;\n}\n\n.all[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  margin-bottom: 50px;\n}\n\n.all[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n.all[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 75vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9mYWN0b3J5L0Q6XFxEZXNrdG9wXFxXZWJEZXZcXDJfQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxwcm9qZWt0ZVxcZmFjdG9yeVxcZmFjdG9yeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9mYWN0b3J5L2ZhY3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0k7RUFDRSxlQUFBO0FDQ047O0FESUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FES0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxVQUFBO0VBQ0Esc0JBQUE7RUFFQSx1QkFBQTtFQUNBLG1CQUFBO0FDSkY7O0FET0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0VBRUEsaUlBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0FDUkY7O0FEY0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtBQ1pKOztBRGVFO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDYko7O0FEZ0JFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNkSjs7QURtQkU7RUFFRSxnQkFBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtFQUVBLG1CQUFBO0VBQ0EsdUJBQUE7QUNwQko7O0FEeUJBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDdEJGOztBRDJCQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDeEJGOztBRDBCRTtFQUNFLFVBQUE7QUN4Qko7O0FEMEJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUN4Qk4iLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL2ZhY3RvcnkvZmFjdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICBmb250LXNpemU6IDUuNXJlbTtcclxufVxyXG5cclxuLnRpdGxlRmFjdG9yeSB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udGl0ZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vLyBHZXNhbXRjb250YWluZXJcclxuLmVzaG9wQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMzBweDtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJpbGRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBncmlkLWNvbHVtbi1nYXA6IDUwcHg7XHJcblxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vYy53YWxsaGVyZS5jb20vcGhvdG9zLzg3L2M3L2JsYWNrX2JhY2tncm91bmRfbGluZXNfbWluaW1hbGlzbV9hYnN0cmFjdF9zcXVhcmVfYmx1ZS0xOTI1OTI1LmpwZyFkJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG5cclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5za2lsbHNjb250YWluZXIge1xyXG4gIC8vIEltYWdlLVN0dWZmIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbiAgZmlndXJlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOiAxNzVweDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA3NXB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5cclxuICBmaWdjYXB0aW9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgfVxyXG5cclxuICAvLyBDb250ZW50IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbiAgLmNvbnRlbnQge1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLmluZm8ge1xyXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG59XHJcblxyXG4vLyBWaWRlb1xyXG5cclxuLmFsbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuXHJcbiAgLnZpZGVvIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcblxyXG4gICAgaWZyYW1lIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNzV2aDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaDEge1xuICBmb250LXNpemU6IDUuNXJlbTtcbn1cblxuLnRpdGxlRmFjdG9yeSB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGl0bGVGYWN0b3J5IGltZyB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBoZWlnaHQ6IDc1cHg7XG59XG4udGl0bGVGYWN0b3J5IGltZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRpdGVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZXNob3BDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDUwcHggYXV0byAzMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJpbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiA1MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9jLndhbGxoZXJlLmNvbS9waG90b3MvODcvYzcvYmxhY2tfYmFja2dyb3VuZF9saW5lc19taW5pbWFsaXNtX2Fic3RyYWN0X3NxdWFyZV9ibHVlLTE5MjU5MjUuanBnIWRcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5za2lsbHNjb250YWluZXIgZmlndXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxNzVweDtcbn1cbi5za2lsbHNjb250YWluZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogNzVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uc2tpbGxzY29udGFpbmVyIGZpZ2NhcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cbi5za2lsbHNjb250YWluZXIgLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuXG4uYWxsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uYWxsIC52aWRlbyB7XG4gIHdpZHRoOiA3NSU7XG59XG4uYWxsIC52aWRlbyBpZnJhbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3NXZoO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FactoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-factory',
          templateUrl: './factory.component.html',
          styleUrls: ['./factory.component.scss']
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
  "./src/app/Components/projekte/games/games.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/Components/projekte/games/games.component.ts ***!
    \**************************************************************/

  /*! exports provided: GamesComponent */

  /***/
  function srcAppComponentsProjekteGamesGamesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamesComponent", function () {
      return GamesComponent;
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


    var _twitch_twitch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./twitch/twitch.component */
    "./src/app/Components/projekte/games/twitch/twitch.component.ts");
    /* harmony import */


    var _shooter_shooter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shooter/shooter.component */
    "./src/app/Components/projekte/games/shooter/shooter.component.ts");

    var _c0 = ["goto"];

    function GamesComponent_app_twitch_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-twitch");
      }
    }

    function GamesComponent_app_shooter_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-shooter");
      }
    }

    function GamesComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "W\xE4hle ein Projekt aus!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var GamesComponent = /*#__PURE__*/function () {
      function GamesComponent() {
        _classCallCheck(this, GamesComponent);

        this.shooter = false;
        this.twitch = false;
      }

      _createClass(GamesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleTwitch",
        value: function toggleTwitch() {
          var _this9 = this;

          this.shooter = false;
          this.twitch = true;
          document.getElementById('twitch').classList.add('figureClick');
          document.getElementById('shooter').classList.remove('figureClick');
          setTimeout(function () {
            _this9["goto"].nativeElement.scrollIntoView({
              block: 'start'
            });
          }, 200);
        }
      }, {
        key: "toggleShooter",
        value: function toggleShooter() {
          var _this10 = this;

          this.twitch = false;
          this.shooter = true;
          document.getElementById('twitch').classList.remove('figureClick');
          document.getElementById('shooter').classList.add('figureClick');
          setTimeout(function () {
            _this10["goto"].nativeElement.scrollIntoView({
              block: 'start'
            });
          }, 200);
        }
      }]);

      return GamesComponent;
    }();

    GamesComponent.ɵfac = function GamesComponent_Factory(t) {
      return new (t || GamesComponent)();
    };

    GamesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GamesComponent,
      selectors: [["app-games"]],
      viewQuery: function GamesComponent_Query(rf, ctx) {
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
      consts: [[1, "titleGames"], [1, "gamesContainer"], ["id", "shooter", 1, "figure", 3, "click"], ["src", "assets/shooter/g1.png", "alt", "Shooter"], ["id", "twitch", 1, "figure", 3, "click"], ["src", "assets/shooter/twitch.png", "alt", "Twitch World"], [1, "projekte"], ["goto", ""], [4, "ngIf"], ["class", "pick", 4, "ngIf"], [1, "pick"]],
      template: function GamesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Projekte ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Games");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "figure", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamesComponent_Template_figure_click_6_listener() {
            return ctx.toggleShooter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Shooter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "figure", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamesComponent_Template_figure_click_10_listener() {
            return ctx.toggleTwitch();
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.twitch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shooter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.shooter && !ctx.twitch);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _twitch_twitch_component__WEBPACK_IMPORTED_MODULE_2__["TwitchComponent"], _shooter_shooter_component__WEBPACK_IMPORTED_MODULE_3__["ShooterComponent"]],
      styles: [".projekte[_ngcontent-%COMP%] {\n  scroll-margin-top: 10rem;\n}\n\n.titleGames[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.gamesContainer[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  grid-gap: 20px;\n  grid-auto-flow: row;\n  margin: auto;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 300px));\n}\n\n.gamesContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 1px solid var(--boxShadow);\n  border-radius: 5px;\n}\n\n.pick[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 25px;\n  text-align: center;\n}\n\n.figure[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 4px 3px var(--boxShadow);\n  cursor: pointer;\n  color: var(--hover);\n}\n\n.figure[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 2.6rem;\n  text-align: center;\n  background-color: var(--cardBack);\n  color: var(--cardBackText);\n  border: 2px solid var(--cardBorder);\n}\n\n.figureClick[_ngcontent-%COMP%] {\n  box-shadow: 0 0 4px 3px var(--hover);\n  border: none;\n  cursor: pointer;\n}\n\n.video[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90%;\n  margin: auto;\n  padding-bottom: 56.25%;\n  height: 0;\n}\n\n.video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 75%;\n  height: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9nYW1lcy9EOlxcRGVza3RvcFxcV2ViRGV2XFwyX0FuZ3VsYXItUHJvamVrdGVcXFBvcnRmb2xpby9zcmNcXGFwcFxcQ29tcG9uZW50c1xccHJvamVrdGVcXGdhbWVzXFxnYW1lcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9nYW1lcy9nYW1lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSw2REFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBRUEsa0NBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0VBRUEsbUNBQUE7QUNGRjs7QURLQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNGRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9nYW1lcy9nYW1lcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWt0ZSB7XHJcbiAgc2Nyb2xsLW1hcmdpbi10b3A6IDEwcmVtO1xyXG59XHJcblxyXG4udGl0bGVHYW1lcyB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdhbWVzQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdyaWQtZ2FwOiAyMHB4O1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAzMDBweCkpO1xyXG59XHJcblxyXG4uZ2FtZXNDb250YWluZXIgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3hTaGFkb3cpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnBpY2sge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5maWd1cmU6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggM3B4IHZhcigtLWJveFNoYWRvdyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1ob3Zlcik7XHJcbn1cclxuXHJcbi5maWd1cmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkQmFjayk7XHJcbiAgY29sb3I6IHZhcigtLWNhcmRCYWNrVGV4dCk7XHJcblxyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNhcmRCb3JkZXIpO1xyXG59XHJcblxyXG4uZmlndXJlQ2xpY2sge1xyXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggM3B4IHZhcigtLWhvdmVyKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vLyBWaWRlb1xyXG5cclxuLnZpZGVvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZy1ib3R0b206IDU2LjI1JTtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi52aWRlbyBpZnJhbWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogNzUlO1xyXG4gIGhlaWdodDogNzUlO1xyXG59XHJcbiIsIi5wcm9qZWt0ZSB7XG4gIHNjcm9sbC1tYXJnaW4tdG9wOiAxMHJlbTtcbn1cblxuLnRpdGxlR2FtZXMge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5nYW1lc0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLWdhcDogMjBweDtcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgbWFyZ2luOiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAzMDBweCkpO1xufVxuXG4uZ2FtZXNDb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3hTaGFkb3cpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5waWNrIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZmlndXJlOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDRweCAzcHggdmFyKC0tYm94U2hhZG93KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0taG92ZXIpO1xufVxuXG4uZmlndXJlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBmb250LXNpemU6IDIuNnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkQmFjayk7XG4gIGNvbG9yOiB2YXIoLS1jYXJkQmFja1RleHQpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyKTtcbn1cblxuLmZpZ3VyZUNsaWNrIHtcbiAgYm94LXNoYWRvdzogMCAwIDRweCAzcHggdmFyKC0taG92ZXIpO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnZpZGVvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XG4gIGhlaWdodDogMDtcbn1cblxuLnZpZGVvIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNzUlO1xuICBoZWlnaHQ6IDc1JTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-games',
          templateUrl: './games.component.html',
          styleUrls: ['./games.component.scss']
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
  "./src/app/Components/projekte/games/shooter/shooter.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/Components/projekte/games/shooter/shooter.component.ts ***!
    \************************************************************************/

  /*! exports provided: ShooterComponent */

  /***/
  function srcAppComponentsProjekteGamesShooterShooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShooterComponent", function () {
      return ShooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../../services/modeToggle.service */
    "./src/services/modeToggle.service.ts");
    /* harmony import */


    var _my_slider_my_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../my-slider/my-slider.component */
    "./src/app/Components/my-slider/my-slider.component.ts");

    var ShooterComponent = /*#__PURE__*/function () {
      function ShooterComponent(toggle) {
        _classCallCheck(this, ShooterComponent);

        this.toggle = toggle; // Bilder-Galerie zum Verein

        this.startbild = {
          img: 'assets/shooter/g1.png',
          titel: 'Hauptmenü',
          nummer: 0
        };
        this.bilder = [{
          img: 'assets/shooter/g2.png',
          titel: 'Levelauswahl',
          nummer: 1
        }, {
          img: 'assets/shooter/g3.png',
          titel: 'Meteoriten-Level',
          nummer: 2
        }, {
          img: 'assets/shooter/g4.png',
          titel: 'Natur-Level',
          nummer: 3
        }];
      }

      _createClass(ShooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShooterComponent;
    }();

    ShooterComponent.ɵfac = function ShooterComponent_Factory(t) {
      return new (t || ShooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"]));
    };

    ShooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShooterComponent,
      selectors: [["app-shooter"]],
      decls: 21,
      vars: 3,
      consts: [[1, "titleShooter"], ["href", "https://github.com/joscha-sattler/Shooter", "target", "_blank"], ["alt", "GitHub", 3, "src"], [1, "slider"], [3, "startbild", "collection"], [1, "info"], [1, "skillscontainer"], ["id", "frameworks", 1, "elementImElternContainer"], [1, "content"], ["src", "assets/logoJS.png", "alt", "JavaScript"], [1, "all"], [1, "video"], ["src", "https://www.youtube.com/embed/Max4VWYwbOo", "allowfullscreen", ""]],
      template: function ShooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Shooter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-my-slider", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Genutzte Tools ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "JavaScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "iframe", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toggle.gitHub, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("startbild", ctx.startbild)("collection", ctx.bilder);
        }
      },
      directives: [_my_slider_my_slider_component__WEBPACK_IMPORTED_MODULE_2__["MySliderComponent"]],
      styles: [".titleShooter[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.titleShooter[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  height: 75px;\n}\n.titleShooter[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.skillscontainer[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n.skillscontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.skillscontainer[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: var(--text);\n}\n.skillscontainer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2.5rem;\n}\n.all[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  margin-bottom: 50px;\n}\n.all[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%] {\n  width: 75%;\n}\n.all[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 75vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9nYW1lcy9zaG9vdGVyL0Q6XFxEZXNrdG9wXFxXZWJEZXZcXDJfQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxwcm9qZWt0ZVxcZ2FtZXNcXHNob290ZXJcXHNob290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZ2FtZXMvc2hvb3Rlci9zaG9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDSjtBRENJO0VBQ0UsZUFBQTtBQ0NOO0FET0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtBQ0xKO0FEUUU7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNOSjtBRFNFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNQSjtBRFlFO0VBRUUsZ0JBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7RUFFQSxtQkFBQTtFQUNBLHVCQUFBO0FDYko7QURrQkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDZkY7QURzQkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ25CRjtBRHFCRTtFQUNFLFVBQUE7QUNuQko7QURxQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ25CTiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZ2FtZXMvc2hvb3Rlci9zaG9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlU2hvb3RlciB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2tpbGxzY29udGFpbmVyIHtcclxuICAvLyBJbWFnZS1TdHVmZiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4gIGZpZ3VyZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogNzVweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgZmlnY2FwdGlvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29udGVudCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4gIC5jb250ZW50IHtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFZpZGVvXHJcblxyXG4uYWxsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5cclxuICAudmlkZW8ge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuXHJcbiAgICBpZnJhbWUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA3NXZoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIudGl0bGVTaG9vdGVyIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50aXRsZVNob290ZXIgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIGhlaWdodDogNzVweDtcbn1cbi50aXRsZVNob290ZXIgaW1nOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2tpbGxzY29udGFpbmVyIGZpZ3VyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTc1cHg7XG59XG4uc2tpbGxzY29udGFpbmVyIGltZyB7XG4gIG1heC1oZWlnaHQ6IDc1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnNraWxsc2NvbnRhaW5lciBmaWdjYXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG4uc2tpbGxzY29udGFpbmVyIC5jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59XG5cbi5hbGwge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5hbGwgLnZpZGVvIHtcbiAgd2lkdGg6IDc1JTtcbn1cbi5hbGwgLnZpZGVvIGlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc1dmg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-shooter',
          templateUrl: './shooter.component.html',
          styleUrls: ['./shooter.component.scss']
        }]
      }], function () {
        return [{
          type: _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Components/projekte/games/twitch/twitch.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/Components/projekte/games/twitch/twitch.component.ts ***!
    \**********************************************************************/

  /*! exports provided: TwitchComponent */

  /***/
  function srcAppComponentsProjekteGamesTwitchTwitchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TwitchComponent", function () {
      return TwitchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../../services/modeToggle.service */
    "./src/services/modeToggle.service.ts");

    var TwitchComponent = /*#__PURE__*/function () {
      function TwitchComponent(toggle) {
        _classCallCheck(this, TwitchComponent);

        this.toggle = toggle;
      }

      _createClass(TwitchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TwitchComponent;
    }();

    TwitchComponent.ɵfac = function TwitchComponent_Factory(t) {
      return new (t || TwitchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"]));
    };

    TwitchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TwitchComponent,
      selectors: [["app-twitch"]],
      decls: 27,
      vars: 1,
      consts: [[1, "titleTwitch"], ["href", "https://github.com/joscha-sattler/Twitch-World", "target", "_blank"], ["alt", "GitHub", 3, "src"], [1, "all"], [1, "video"], ["src", "https://www.youtube.com/embed/VsE-RG7ZwZI", "allowfullscreen", ""], [1, "info"], [1, "skillscontainer"], ["id", "frameworks", 1, "elementImElternContainer"], [1, "content"], ["src", "assets/logoJS.png", "alt", "JavaScript"], ["src", "assets/phaser.png", "alt", "Phaser"], ["src", "assets/aseprite.png", "alt", "Aseprite"]],
      template: function TwitchComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toggle.gitHub, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: [".titleTwitch[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.titleTwitch[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  height: 75px;\n}\n.titleTwitch[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.skillscontainer[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n.skillscontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.skillscontainer[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: var(--text);\n}\n.skillscontainer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2.5rem;\n}\n.all[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  margin-bottom: 50px;\n}\n.all[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%] {\n  width: 75%;\n}\n.all[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 75vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS9nYW1lcy90d2l0Y2gvRDpcXERlc2t0b3BcXFdlYkRldlxcMl9Bbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHByb2pla3RlXFxnYW1lc1xcdHdpdGNoXFx0d2l0Y2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvZ2FtZXMvdHdpdGNoL3R3aXRjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7QURDSTtFQUNFLGVBQUE7QUNDTjtBRE9FO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7QUNMSjtBRFFFO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDTko7QURTRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDUEo7QURZRTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0VBRUEsbUJBQUE7RUFDQSx1QkFBQTtBQ2JKO0FEa0JBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ2ZGO0FEc0JBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNuQkY7QURxQkU7RUFDRSxVQUFBO0FDbkJKO0FEcUJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNuQk4iLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Byb2pla3RlL2dhbWVzL3R3aXRjaC90d2l0Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVUd2l0Y2gge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNraWxsc2NvbnRhaW5lciB7XHJcbiAgLy8gSW1hZ2UtU3R1ZmYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICBmaWd1cmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIGZpZ2NhcHRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICB9XHJcblxyXG4gIC8vIENvbnRlbnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICAuY29udGVudCB7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBWaWRlb1xyXG5cclxuLmFsbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuXHJcbiAgLnZpZGVvIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcblxyXG4gICAgaWZyYW1lIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNzV2aDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnRpdGxlVHdpdGNoIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50aXRsZVR3aXRjaCBpbWcge1xuICBtYXJnaW4tbGVmdDogMjVweDtcbiAgaGVpZ2h0OiA3NXB4O1xufVxuLnRpdGxlVHdpdGNoIGltZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNraWxsc2NvbnRhaW5lciBmaWd1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDE3NXB4O1xufVxuLnNraWxsc2NvbnRhaW5lciBpbWcge1xuICBtYXgtaGVpZ2h0OiA3NXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5za2lsbHNjb250YWluZXIgZmlnY2FwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuLnNraWxsc2NvbnRhaW5lciAuY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuXG4uYWxsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uYWxsIC52aWRlbyB7XG4gIHdpZHRoOiA3NSU7XG59XG4uYWxsIC52aWRlbyBpZnJhbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3NXZoO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TwitchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-twitch',
          templateUrl: './twitch.component.html',
          styleUrls: ['./twitch.component.scss']
        }]
      }], function () {
        return [{
          type: _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"]
        }];
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


    var _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../../services/modeToggle.service */
    "./src/services/modeToggle.service.ts");
    /* harmony import */


    var _my_slider_my_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../my-slider/my-slider.component */
    "./src/app/Components/my-slider/my-slider.component.ts");

    var BlogComponent = /*#__PURE__*/function () {
      function BlogComponent(toggle) {
        _classCallCheck(this, BlogComponent);

        this.toggle = toggle; // Bilder-Galerie zum Eshop

        this.startbild = {
          img: 'assets/blog/b1.png',
          titel: 'Registrieren',
          nummer: 0
        };
        this.bilder = [{
          img: 'assets/blog/b2.png',
          titel: 'Login',
          nummer: 1
        }, {
          img: 'assets/blog/b3.png',
          titel: 'Storyboard',
          nummer: 2
        }, {
          img: 'assets/blog/b4.png',
          titel: 'Post erstellen',
          nummer: 3
        }, {
          img: 'assets/blog/b5.png',
          titel: 'Post ansehen',
          nummer: 4
        }];
      }

      _createClass(BlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogComponent;
    }();

    BlogComponent.ɵfac = function BlogComponent_Factory(t) {
      return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"]));
    };

    BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogComponent,
      selectors: [["app-blog"]],
      decls: 34,
      vars: 3,
      consts: [[1, "titleBlog"], ["href", "https://github.com/joscha-sattler/Blog", "target", "_blank"], ["alt", "GitHub", 3, "src"], [1, "slider"], [3, "collection", "startbild"], [1, "info"], [1, "skillscontainer"], ["id", "frameworks", 1, "elementImElternContainer"], [1, "content"], ["src", "assets/angular.png", "alt", "Angular"], ["src", "assets/typescript.png", "alt", "TypeScript"], ["src", "assets/logoCSS.png", "alt", "CSS3"], ["src", "assets/mongodb-logo.png", "alt", "MongoDB"], ["src", "assets/bootstrap.png", "alt", "Bootstrap"]],
      template: function BlogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-my-slider", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Genutzte Tools ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Typescript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "CSS3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "MongoDB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toggle.gitHub, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collection", ctx.bilder)("startbild", ctx.startbild);
        }
      },
      directives: [_my_slider_my_slider_component__WEBPACK_IMPORTED_MODULE_2__["MySliderComponent"]],
      styles: [".titleBlog[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.titleBlog[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  height: 75px;\n}\n.titleBlog[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.titel[_ngcontent-%COMP%] {\n  text-align: center;\n}\nfigure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.bilder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nfigcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: white;\n}\n.skillscontainer[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n.skillscontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.skillscontainer[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: var(--text);\n}\n.skillscontainer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n.info[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2.5rem;\n  margin-top: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS93ZWJlbnR3aWNrbHVuZy9ibG9nL0Q6XFxEZXNrdG9wXFxXZWJEZXZcXDJfQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxwcm9qZWt0ZVxcd2ViZW50d2lja2x1bmdcXGJsb2dcXGJsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvd2ViZW50d2lja2x1bmcvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDSjtBRENJO0VBQ0UsZUFBQTtBQ0NOO0FESUE7RUFDRSxrQkFBQTtBQ0RGO0FETUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSEY7QURNQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0hGO0FETUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDSEY7QURXRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0FDVEo7QURZRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ1ZKO0FEYUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ1hKO0FEZ0JFO0VBRUUsZ0JBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7RUFFQSxtQkFBQTtFQUNBLHVCQUFBO0FDakJKO0FEc0JBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ25CRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvd2ViZW50d2lja2x1bmcvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlQmxvZyB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udGl0ZWwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLy8gSW1hZ2UtU3R1ZmZcclxuXHJcbmZpZ3VyZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iaWxkZXIgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiA3NXB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG5maWdjYXB0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuLnNraWxsc2NvbnRhaW5lciB7XHJcbiAgLy8gSW1hZ2UtU3R1ZmYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICBmaWd1cmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIGZpZ2NhcHRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICB9XHJcblxyXG4gIC8vIENvbnRlbnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICAuY29udGVudCB7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG59XHJcbiIsIi50aXRsZUJsb2cge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRpdGxlQmxvZyBpbWcge1xuICBtYXJnaW4tbGVmdDogMjVweDtcbiAgaGVpZ2h0OiA3NXB4O1xufVxuLnRpdGxlQmxvZyBpbWc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50aXRlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZmlndXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iaWxkZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogNzVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbmZpZ2NhcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNraWxsc2NvbnRhaW5lciBmaWd1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDE3NXB4O1xufVxuLnNraWxsc2NvbnRhaW5lciBpbWcge1xuICBtYXgtaGVpZ2h0OiA3NXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5za2lsbHNjb250YWluZXIgZmlnY2FwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuLnNraWxsc2NvbnRhaW5lciAuY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmluZm8ge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbn0iXX0= */"]
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
        return [{
          type: _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Components/projekte/webentwicklung/kino/kino.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/Components/projekte/webentwicklung/kino/kino.component.ts ***!
    \***************************************************************************/

  /*! exports provided: KinoComponent */

  /***/
  function srcAppComponentsProjekteWebentwicklungKinoKinoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KinoComponent", function () {
      return KinoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../services/modeToggle.service */
    "./src/services/modeToggle.service.ts");
    /* harmony import */


    var _my_slider_my_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../my-slider/my-slider.component */
    "./src/app/Components/my-slider/my-slider.component.ts");

    var KinoComponent = /*#__PURE__*/function () {
      function KinoComponent(toggle) {
        _classCallCheck(this, KinoComponent);

        this.toggle = toggle; // Bilder-Galerie zum Verein

        this.startbild = {
          img: 'assets/kino/01_startseite.png',
          titel: 'Kino - Startseite',
          nummer: 0
        };
        this.bilder = [{
          img: 'assets/kino/02_filtered_filme.png',
          titel: 'Filtert nach Fantasy',
          nummer: 1
        }, {
          img: 'assets/kino/03_account_kunde.png',
          titel: 'Kunden-Account erstellen',
          nummer: 2
        }, {
          img: 'assets/kino/05_edit_account.png',
          titel: 'Account bearbeiten',
          nummer: 3
        }, {
          img: 'assets/kino/06_url_sicher.png',
          titel: 'URL manipulation - sicher',
          nummer: 4
        }, {
          img: 'assets/kino/07_zu_jung.png',
          titel: 'User zu jung für Django',
          nummer: 5
        }, {
          img: 'assets/kino/08_film_details_1.1.png',
          titel: 'Film Details 1/2',
          nummer: 6
        }, {
          img: 'assets/kino/09_film_details_1.2.png',
          titel: 'Film Details 2/2',
          nummer: 7
        }, {
          img: 'assets/kino/13_ticket_kaufen.png',
          titel: 'Ticket kaufen',
          nummer: 8
        }, {
          img: 'assets/kino/14_ticket_erfolgreich.png',
          titel: 'Ticketkauf bestätigung',
          nummer: 9
        }, {
          img: 'assets/kino/15_ticket_verlauf.png',
          titel: 'Ticketverlauf',
          nummer: 10
        }, {
          img: 'assets/kino/04_account_mitarbeiter.png',
          titel: 'Mitarbeiter Account erstellen',
          nummer: 11
        }, {
          img: 'assets/kino/10_admin_view.png',
          titel: 'Mitarbeiter Startseite',
          nummer: 12
        }, {
          img: 'assets/kino/11_film_hinzufuegen.png',
          titel: 'Film hinzufügen',
          nummer: 13
        }, {
          img: 'assets/kino/12_film_bearbeiten.png',
          titel: 'Film bearbeiten, aktuelle Daten bereits in Form',
          nummer: 14
        }];
      }

      _createClass(KinoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return KinoComponent;
    }();

    KinoComponent.ɵfac = function KinoComponent_Factory(t) {
      return new (t || KinoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"]));
    };

    KinoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: KinoComponent,
      selectors: [["app-kino"]],
      decls: 34,
      vars: 3,
      consts: [[1, "titleKino"], ["href", "https://github.com/joscha-sat/DB-Webdev", "target", "_blank"], ["alt", "GitHub", 3, "src"], [1, "slider"], [3, "collection", "startbild"], [1, "info"], [1, "skillscontainer"], ["id", "frameworks", 1, "elementImElternContainer"], [1, "content"], ["alt", "Angular", "src", "assets/angular.png"], ["alt", "TypeScript", "src", "assets/typescript.png"], ["alt", "SCSS", "src", "assets/scss.png"], ["alt", "MySQL", "src", "assets/mysql_PNG23.png"], ["alt", "Bootstrap", "src", "assets/bulma.png"]],
      template: function KinoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Kino");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-my-slider", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Genutzte Tools");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Typescript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "SCSS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "MySQL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Bulma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toggle.gitHub, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collection", ctx.bilder)("startbild", ctx.startbild);
        }
      },
      directives: [_my_slider_my_slider_component__WEBPACK_IMPORTED_MODULE_2__["MySliderComponent"]],
      styles: [".titleKino[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.titleKino[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  height: 75px;\n}\n.titleKino[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\nfigure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.bilder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nfigcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: white;\n}\n.skillscontainer[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n.skillscontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.skillscontainer[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: var(--text);\n}\n.skillscontainer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n.info[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2.5rem;\n}\n.skillscontainer[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n.skillscontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.skillscontainer[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: var(--text);\n}\n.skillscontainer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS93ZWJlbnR3aWNrbHVuZy9raW5vL0Q6XFxEZXNrdG9wXFxXZWJEZXZcXDJfQW5ndWxhci1Qcm9qZWt0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxDb21wb25lbnRzXFxwcm9qZWt0ZVxcd2ViZW50d2lja2x1bmdcXGtpbm9cXGtpbm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvd2ViZW50d2lja2x1bmcva2luby9raW5vLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDSjtBRENJO0VBQ0UsZUFBQTtBQ0NOO0FETUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSEY7QURNQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0hGO0FETUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDSEY7QURTRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0FDUEo7QURVRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ1JKO0FEV0U7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ1RKO0FEY0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtFQUVBLG1CQUFBO0VBQ0EsdUJBQUE7QUNkSjtBRGtCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDZkY7QURxQkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtBQ25CSjtBRHNCRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ3BCSjtBRHVCRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDckJKO0FEMEJFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7RUFFQSxtQkFBQTtFQUNBLHVCQUFBO0FDMUJKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS93ZWJlbnR3aWNrbHVuZy9raW5vL2tpbm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVLaW5vIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIGhlaWdodDogNzVweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuXG4vLyBJbWFnZS1TdHVmZlxuXG5maWd1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJpbGRlciBpbWcge1xuICBtYXgtaGVpZ2h0OiA3NXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuZmlnY2FwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2tpbGxzY29udGFpbmVyIHtcbiAgLy8gSW1hZ2UtU3R1ZmYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIGZpZ3VyZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICB3aWR0aDogMTc1cHg7XG4gIH1cblxuICBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDc1cHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cblxuICBmaWdjYXB0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIH1cblxuICAvLyBDb250ZW50IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAuY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuLmluZm8ge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59XG5cbi5za2lsbHNjb250YWluZXIge1xuICAvLyBJbWFnZS1TdHVmZiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgZmlndXJlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIHdpZHRoOiAxNzVweDtcbiAgfVxuXG4gIGltZyB7XG4gICAgbWF4LWhlaWdodDogNzVweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuXG4gIGZpZ2NhcHRpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgfVxuXG4gIC8vIENvbnRlbnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIC5jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuIiwiLnRpdGxlS2lubyB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGl0bGVLaW5vIGltZyB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBoZWlnaHQ6IDc1cHg7XG59XG4udGl0bGVLaW5vIGltZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZmlndXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iaWxkZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogNzVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbmZpZ2NhcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNraWxsc2NvbnRhaW5lciBmaWd1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDE3NXB4O1xufVxuLnNraWxsc2NvbnRhaW5lciBpbWcge1xuICBtYXgtaGVpZ2h0OiA3NXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5za2lsbHNjb250YWluZXIgZmlnY2FwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuLnNraWxsc2NvbnRhaW5lciAuY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmluZm8ge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59XG5cbi5za2lsbHNjb250YWluZXIgZmlndXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxNzVweDtcbn1cbi5za2lsbHNjb250YWluZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogNzVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uc2tpbGxzY29udGFpbmVyIGZpZ2NhcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cbi5za2lsbHNjb250YWluZXIgLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KinoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kino',
          templateUrl: './kino.component.html',
          styleUrls: ['./kino.component.scss']
        }]
      }], function () {
        return [{
          type: _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"]
        }];
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


    var _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../../services/modeToggle.service */
    "./src/services/modeToggle.service.ts");
    /* harmony import */


    var _my_slider_my_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../my-slider/my-slider.component */
    "./src/app/Components/my-slider/my-slider.component.ts");

    var VereinComponent = /*#__PURE__*/function () {
      function VereinComponent(toggle) {
        _classCallCheck(this, VereinComponent);

        this.toggle = toggle; // Bilder-Galerie zum Verein

        this.startbild = {
          img: 'assets/verein/tt1.png',
          titel: 'Startseite',
          nummer: 0
        };
        this.bilder = [{
          img: 'assets/verein/tt2.png',
          titel: 'Tischtennis - Allgemein',
          nummer: 1
        }, {
          img: 'assets/verein/tt3.png',
          titel: 'Tischtennis - Mannschaften',
          nummer: 2
        }, {
          img: 'assets/verein/tt4.png',
          titel: 'Tischetennis - Spieler hinzufügen',
          nummer: 3
        }, {
          img: 'assets/verein/tt5.png',
          titel: 'Tischtennis - Galerie',
          nummer: 4
        }, {
          img: 'assets/verein/tt6.png',
          titel: 'Handball',
          nummer: 5
        }, {
          img: 'assets/verein/tt7.png',
          titel: 'Volleyball',
          nummer: 6
        }, {
          img: 'assets/verein/tt8.png',
          titel: 'Turnen - Allgemein',
          nummer: 7
        }, {
          img: 'assets/verein/tt9.jpg',
          titel: 'Turnen - Galerie',
          nummer: 8
        }];
      }

      _createClass(VereinComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VereinComponent;
    }();

    VereinComponent.ɵfac = function VereinComponent_Factory(t) {
      return new (t || VereinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"]));
    };

    VereinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VereinComponent,
      selectors: [["app-verein"]],
      decls: 34,
      vars: 3,
      consts: [[1, "titleVerein"], ["href", "https://github.com/joscha-sattler/Verein", "target", "_blank"], ["alt", "GitHub", 3, "src"], [1, "slider"], [3, "startbild", "collection"], [1, "info"], [1, "skillscontainer"], ["id", "frameworks", 1, "elementImElternContainer"], [1, "content"], ["src", "assets/angular.png", "alt", "Angular"], ["src", "assets/typescript.png", "alt", "TypeScript"], ["src", "assets/scss.png", "alt", "SCSS"], ["src", "assets/mysql_PNG23.png", "alt", "MySQL"], ["src", "assets/bootstrap.png", "alt", "Bootstrap"]],
      template: function VereinComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Verein");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-my-slider", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Genutzte Tools");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Typescript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "SCSS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "MySQL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toggle.gitHub, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("startbild", ctx.startbild)("collection", ctx.bilder);
        }
      },
      directives: [_my_slider_my_slider_component__WEBPACK_IMPORTED_MODULE_2__["MySliderComponent"]],
      styles: [".titleVerein[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.titleVerein[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  height: 75px;\n}\n.titleVerein[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\nfigure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.bilder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nfigcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: white;\n}\n.skillscontainer[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n.skillscontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.skillscontainer[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: var(--text);\n}\n.skillscontainer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n.info[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2.5rem;\n}\n.skillscontainer[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n.skillscontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.skillscontainer[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: var(--text);\n}\n.skillscontainer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS93ZWJlbnR3aWNrbHVuZy92ZXJlaW4vRDpcXERlc2t0b3BcXFdlYkRldlxcMl9Bbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHByb2pla3RlXFx3ZWJlbnR3aWNrbHVuZ1xcdmVyZWluXFx2ZXJlaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvd2ViZW50d2lja2x1bmcvdmVyZWluL3ZlcmVpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7QURDSTtFQUNFLGVBQUE7QUNDTjtBRE1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0hGO0FETUE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNIRjtBRE1BO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0hGO0FEV0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtBQ1RKO0FEWUU7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNWSjtBRGFFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNYSjtBRGdCRTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0VBRUEsbUJBQUE7RUFDQSx1QkFBQTtBQ2pCSjtBRHNCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDbkJGO0FEeUJFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7QUN2Qko7QUQwQkU7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUN4Qko7QUQyQkU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ3pCSjtBRDhCRTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0VBRUEsbUJBQUE7RUFDQSx1QkFBQTtBQy9CSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvd2ViZW50d2lja2x1bmcvdmVyZWluL3ZlcmVpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZVZlcmVpbiB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBJbWFnZS1TdHVmZlxyXG5cclxuZmlndXJlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJpbGRlciBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbmZpZ2NhcHRpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG4uc2tpbGxzY29udGFpbmVyIHtcclxuICAvLyBJbWFnZS1TdHVmZiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4gIGZpZ3VyZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogNzVweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgZmlnY2FwdGlvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29udGVudCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4gIC5jb250ZW50IHtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxufVxyXG5cclxuLnNraWxsc2NvbnRhaW5lciB7XHJcbiAgLy8gSW1hZ2UtU3R1ZmYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICBmaWd1cmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIGZpZ2NhcHRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICB9XHJcblxyXG4gIC8vIENvbnRlbnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICAuY29udGVudCB7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgfVxyXG59XHJcbiIsIi50aXRsZVZlcmVpbiB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGl0bGVWZXJlaW4gaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIGhlaWdodDogNzVweDtcbn1cbi50aXRsZVZlcmVpbiBpbWc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmZpZ3VyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYmlsZGVyIGltZyB7XG4gIG1heC1oZWlnaHQ6IDc1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5maWdjYXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5za2lsbHNjb250YWluZXIgZmlndXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxNzVweDtcbn1cbi5za2lsbHNjb250YWluZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogNzVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uc2tpbGxzY29udGFpbmVyIGZpZ2NhcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cbi5za2lsbHNjb250YWluZXIgLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuXG4uc2tpbGxzY29udGFpbmVyIGZpZ3VyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTc1cHg7XG59XG4uc2tpbGxzY29udGFpbmVyIGltZyB7XG4gIG1heC1oZWlnaHQ6IDc1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnNraWxsc2NvbnRhaW5lciBmaWdjYXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG4uc2tpbGxzY29udGFpbmVyIC5jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"]
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
        return [{
          type: _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"]
        }];
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
    /* harmony import */


    var _kino_kino_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./kino/kino.component */
    "./src/app/Components/projekte/webentwicklung/kino/kino.component.ts");

    var _c0 = ["goto"];

    function WebentwicklungComponent_app_blog_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-blog");
      }
    }

    function WebentwicklungComponent_app_verein_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-verein");
      }
    }

    function WebentwicklungComponent_app_kino_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-kino");
      }
    }

    function WebentwicklungComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

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
        this.kino = false;
      }

      _createClass(WebentwicklungComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleBlog",
        value: function toggleBlog() {
          var _this11 = this;

          this.verein = false;
          this.kino = false;
          this.blog = true;
          document.getElementById('blog').classList.add('figureClick');
          document.getElementById('verein').classList.remove('figureClick');
          document.getElementById('kino').classList.remove('figureClick');
          setTimeout(function () {
            _this11["goto"].nativeElement.scrollIntoView({
              block: 'start'
            });
          }, 200);
        }
      }, {
        key: "toggleVerein",
        value: function toggleVerein() {
          var _this12 = this;

          this.blog = false;
          this.kino = false;
          this.verein = true;
          document.getElementById('verein').classList.add('figureClick');
          document.getElementById('blog').classList.remove('figureClick');
          document.getElementById('kino').classList.remove('figureClick');
          setTimeout(function () {
            _this12["goto"].nativeElement.scrollIntoView({
              block: 'start'
            });
          }, 200);
        }
      }, {
        key: "toggleKino",
        value: function toggleKino() {
          var _this13 = this;

          this.blog = false;
          this.kino = true;
          this.verein = false;
          document.getElementById('kino').classList.add('figureClick');
          document.getElementById('verein').classList.remove('figureClick');
          document.getElementById('blog').classList.remove('figureClick');
          setTimeout(function () {
            _this13["goto"].nativeElement.scrollIntoView({
              block: 'start'
            });
          }, 200);
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
      decls: 27,
      vars: 4,
      consts: [[1, "titleWebdev"], [1, "WebdevContainer"], ["id", "blog", 1, "figure", 3, "click"], ["alt", "Blog", "src", "assets/blog.jpg"], ["id", "verein", 1, "figure", 3, "click"], ["alt", "Verein", "src", "assets/verein.png"], ["id", "kino", 1, "figure", 3, "click"], ["alt", "Verein", "src", "assets/kino/kino_wallpaper.jpg"], [1, "projekte"], ["goto", ""], [4, "ngIf"], ["class", "pick", 4, "ngIf"], [1, "pick"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "figure", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebentwicklungComponent_Template_figure_click_14_listener() {
            return ctx.toggleKino();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Kino");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, WebentwicklungComponent_app_blog_21_Template, 1, 0, "app-blog", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, WebentwicklungComponent_app_verein_23_Template, 1, 0, "app-verein", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, WebentwicklungComponent_app_kino_25_Template, 1, 0, "app-kino", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, WebentwicklungComponent_div_26_Template, 3, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blog);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verein);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.kino);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.blog && !ctx.verein && !ctx.kino);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"], _verein_verein_component__WEBPACK_IMPORTED_MODULE_3__["VereinComponent"], _kino_kino_component__WEBPACK_IMPORTED_MODULE_4__["KinoComponent"]],
      styles: [".projekte[_ngcontent-%COMP%] {\n  scroll-margin-top: 10rem;\n}\n\n.titleWebdev[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.WebdevContainer[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  grid-gap: 20px;\n  grid-auto-flow: row;\n  margin: auto;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 300px));\n}\n\n.WebdevContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 1px solid var(--boxShadow);\n  border-radius: 5px;\n}\n\n.pick[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 25px;\n  text-align: center;\n}\n\n.figure[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 4px 3px var(--boxShadow);\n  cursor: pointer;\n  color: var(--hover);\n}\n\n.figure[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 2.6rem;\n  text-align: center;\n  background-color: var(--cardBack);\n  color: var(--cardBackText);\n  border: 2px solid var(--cardBorder);\n}\n\n.figureClick[_ngcontent-%COMP%] {\n  box-shadow: 0 0 4px 3px var(--hover);\n  border: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS93ZWJlbnR3aWNrbHVuZy9EOlxcRGVza3RvcFxcV2ViRGV2XFwyX0FuZ3VsYXItUHJvamVrdGVcXFBvcnRmb2xpby9zcmNcXGFwcFxcQ29tcG9uZW50c1xccHJvamVrdGVcXHdlYmVudHdpY2tsdW5nXFx3ZWJlbnR3aWNrbHVuZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9wcm9qZWt0ZS93ZWJlbnR3aWNrbHVuZy93ZWJlbnR3aWNrbHVuZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSw2REFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBRUEsa0NBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0VBRUEsbUNBQUE7QUNGRjs7QURLQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvamVrdGUvd2ViZW50d2lja2x1bmcvd2ViZW50d2lja2x1bmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVrdGUge1xyXG4gIHNjcm9sbC1tYXJnaW4tdG9wOiAxMHJlbTtcclxufVxyXG5cclxuLnRpdGxlV2ViZGV2IHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uV2ViZGV2Q29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdyaWQtZ2FwOiAyMHB4O1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAzMDBweCkpO1xyXG59XHJcblxyXG4uV2ViZGV2Q29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuXHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm94U2hhZG93KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5waWNrIHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmlndXJlOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgNHB4IDNweCB2YXIoLS1ib3hTaGFkb3cpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogdmFyKC0taG92ZXIpO1xyXG59XHJcblxyXG4uZmlndXJlIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICBmb250LXNpemU6IDIuNnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZEJhY2spO1xyXG4gIGNvbG9yOiB2YXIoLS1jYXJkQmFja1RleHQpO1xyXG5cclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyKTtcclxufVxyXG5cclxuLmZpZ3VyZUNsaWNrIHtcclxuICBib3gtc2hhZG93OiAwIDAgNHB4IDNweCB2YXIoLS1ob3Zlcik7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCIucHJvamVrdGUge1xuICBzY3JvbGwtbWFyZ2luLXRvcDogMTByZW07XG59XG5cbi50aXRsZVdlYmRldiB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLldlYmRldkNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLWdhcDogMjBweDtcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgbWFyZ2luOiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAzMDBweCkpO1xufVxuXG4uV2ViZGV2Q29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm94U2hhZG93KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucGljayB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZpZ3VyZTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggM3B4IHZhcigtLWJveFNoYWRvdyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuLmZpZ3VyZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgZm9udC1zaXplOiAyLjZyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZEJhY2spO1xuICBjb2xvcjogdmFyKC0tY2FyZEJhY2tUZXh0KTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2FyZEJvcmRlcik7XG59XG5cbi5maWd1cmVDbGljayB7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggM3B4IHZhcigtLWhvdmVyKTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"]
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
      consts: [[1, "titleSkills"], [1, "skillscontainer"], ["id", "frontend", 1, "elementImElternContainer"], [1, "title"], [1, "content"], ["alt", "html", "src", "assets/logoHTML.png"], ["alt", "css", "src", "assets/logoCSS.png"], ["alt", "scss", "src", "assets/scss.png"], ["alt", "js", "src", "assets/logoJS.png"], ["alt", "TypeScript", "src", "assets/typescript.png"], ["id", "frameworks", 1, "elementImElternContainer"], ["alt", "Angular", "src", "assets/angular.png"], ["alt", "Vue", "src", "assets/vue.png"], ["alt", "React", "src", "assets/react.png"], ["id", "backend", 1, "elementImElternContainer"], ["alt", "CSharp", "src", "assets/csharp.png"], ["alt", "Java", "src", "assets/java.png"], ["alt", "MySql", "src", "assets/mysql_PNG23.png"], ["alt", "NodeJs", "src", "assets/node.png"], ["id", "ide", 1, "elementImElternContainer"], ["alt", "JetBrains", "src", "assets/jetbrains.png"], ["alt", "VSCode", "src", "assets/vscode.png"], ["alt", "VS", "src", "assets/vs.png"], ["alt", "Eclipse", "src", "assets/eclipse.png"], ["id", "adobe", 1, "elementImElternContainer"], ["alt", "Photoshop", "src", "assets/ps.png"], ["alt", "Lightroom", "src", "assets/lr.png"], ["alt", "Premiere", "src", "assets/pr.png"], ["alt", "After Effects", "src", "assets/ae.png"], ["alt", "Adobe Xd", "src", "assets/xd.png"], ["id", "office", 1, "elementImElternContainer"], ["alt", "Powerpoint", "src", "assets/pp.png"], ["alt", "Word", "src", "assets/word.png"], ["id", "sonstige", 1, "elementImElternContainer"], ["alt", "Git", "src", "assets/git.png"], ["alt", "Github", "src", "assets/logoGithub.png"], ["alt", "Scrum", "src", "assets/scrum.png"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "SCSS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "JavaScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "TypeScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Frameworks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Vue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "React");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Backend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "C# / CSharp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Java");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "MySQL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "NodeJs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "IDE's");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "JetBrains");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "VS Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Visual Studio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Eclipse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Adobe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Photoshop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Lightroom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Premiere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "After Effects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Xd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Microsoft Office");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 4);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Scrum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".titleSkills[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.skillscontainer[_ngcontent-%COMP%] {\n  display: grid;\n  width: 75%;\n  margin: auto;\n  grid-gap: 2rem;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  grid-template-areas: \" frontend    frontend \" \" frameworks  backend   \" \" ide         ide \" \" adobe       adobe \" \" office      sonstige\";\n}\n\nfigure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nfigcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n}\n\n.title[_ngcontent-%COMP%] {\n  grid-area: titel;\n  color: white;\n  text-align: center;\n  padding: 15px;\n}\n\n.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n#frontend[_ngcontent-%COMP%] {\n  grid-area: frontend;\n}\n\n#frameworks[_ngcontent-%COMP%] {\n  grid-area: frameworks;\n}\n\n#backend[_ngcontent-%COMP%] {\n  grid-area: backend;\n}\n\n#ide[_ngcontent-%COMP%] {\n  grid-area: ide;\n}\n\n#adobe[_ngcontent-%COMP%] {\n  grid-area: adobe;\n}\n\n#office[_ngcontent-%COMP%] {\n  grid-area: office;\n}\n\n#sonstige[_ngcontent-%COMP%] {\n  grid-area: sonstige;\n}\n\n.elementImElternContainer[_ngcontent-%COMP%] {\n  background-image: url(\"https://www.heilig-schwab.de/media/6112f995-0484-415e-a843-ecd489c3c866/Hintergrundbilder/automatisierungstechnik-heilig-schwab.jpg\");\n  background-size: cover;\n  background-attachment: fixed;\n  border-radius: 15px;\n}\n\n@media (max-width: 950px) {\n  .skillscontainer[_ngcontent-%COMP%] {\n    grid-template-areas: \" frontend    frontend \" \" frameworks  frameworks\" \" backend     backend \" \" ide         ide \" \" adobe       adobe \" \" office      office\" \" sonstige    sonstige \";\n  }\n\n  figure[_ngcontent-%COMP%] {\n    width: 125px;\n  }\n\n  img[_ngcontent-%COMP%] {\n    max-height: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9za2lsbHMvRDpcXERlc2t0b3BcXFdlYkRldlxcMl9Bbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHNraWxsc1xcc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURJQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFFQSwyREFBQTtFQUVBLHlJQUNFO0FDSko7O0FEYUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtBQ1hGOztBRGNBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDWEY7O0FEY0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUNYRjs7QURnQkE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNiRjs7QURlRTtFQUNFLGlCQUFBO0FDYko7O0FEaUJBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7RUFFQSxtQkFBQTtFQUNBLDZCQUFBO0FDaEJGOztBRHNCQTtFQUNFLG1CQUFBO0FDbkJGOztBRHVCQTtFQUNFLHFCQUFBO0FDcEJGOztBRHdCQTtFQUNFLGtCQUFBO0FDckJGOztBRHlCQTtFQUNFLGNBQUE7QUN0QkY7O0FEMEJBO0VBQ0UsZ0JBQUE7QUN2QkY7O0FEMkJBO0VBQ0UsaUJBQUE7QUN4QkY7O0FENEJBO0VBQ0UsbUJBQUE7QUN6QkY7O0FENkJBO0VBQ0UsNEpBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUMxQkY7O0FEOEJBO0VBQ0U7SUFDRSx3TEFDRTtFQzVCSjs7RURxQ0E7SUFDRSxZQUFBO0VDbENGOztFRG9DQTtJQUNFLGdCQUFBO0VDakNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaXRlbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4udGl0bGVTa2lsbHMge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8vIEdlc2FtdC1Db250YWluZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLnNraWxsc2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogYXV0bztcbiAgZ3JpZC1nYXA6IDJyZW07XG5cbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XG5cbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAnIGZyb250ZW5kICAgIGZyb250ZW5kICdcbiAgICAnIGZyYW1ld29ya3MgIGJhY2tlbmQgICAnXG4gICAgJyBpZGUgICAgICAgICBpZGUgJ1xuICAgICcgYWRvYmUgICAgICAgYWRvYmUgJ1xuICAgICcgb2ZmaWNlICAgICAgc29uc3RpZ2UnO1xufVxuXG4vLyBJbWFnZS1TdHVmZiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZpZ3VyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIHdpZHRoOiAxNzVweDtcbn1cblxuaW1nIHtcbiAgbWF4LWhlaWdodDogNzVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbmZpZ2NhcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi8vIFRpdGVsICsgQ29udGVudCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi50aXRsZSB7XG4gIGdyaWQtYXJlYTogdGl0ZWw7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xuXG4gIGgyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi8vIEdyaWQtQXJlYXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBJdGVtIDFcbiNmcm9udGVuZCB7XG4gIGdyaWQtYXJlYTogZnJvbnRlbmQ7XG59XG5cbi8vIEl0ZW0gMlxuI2ZyYW1ld29ya3Mge1xuICBncmlkLWFyZWE6IGZyYW1ld29ya3M7XG59XG5cbi8vIEl0ZW0gM1xuI2JhY2tlbmQge1xuICBncmlkLWFyZWE6IGJhY2tlbmQ7XG59XG5cbi8vIEl0ZW0gNFxuI2lkZSB7XG4gIGdyaWQtYXJlYTogaWRlO1xufVxuXG4vLyBJdGVtIDVcbiNhZG9iZSB7XG4gIGdyaWQtYXJlYTogYWRvYmU7XG59XG5cbi8vIEl0ZW0gNlxuI29mZmljZSB7XG4gIGdyaWQtYXJlYTogb2ZmaWNlO1xufVxuXG4vLyBJdGVtIDdcbiNzb25zdGlnZSB7XG4gIGdyaWQtYXJlYTogc29uc3RpZ2U7XG59XG5cbi8vIEhpbnRlcmdydW5kIGV0Yy4gZsO8ciBhbGxlIEtpbmQtRWxlbWVudGVcbi5lbGVtZW50SW1FbHRlcm5Db250YWluZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vd3d3LmhlaWxpZy1zY2h3YWIuZGUvbWVkaWEvNjExMmY5OTUtMDQ4NC00MTVlLWE4NDMtZWNkNDg5YzNjODY2L0hpbnRlcmdydW5kYmlsZGVyL2F1dG9tYXRpc2llcnVuZ3N0ZWNobmlrLWhlaWxpZy1zY2h3YWIuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi8vIEFucGFzc2VuIGJlaSBrbGVpbmVyIFNjcmVlbmdyw7bDn2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gIC5za2lsbHNjb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAnIGZyb250ZW5kICAgIGZyb250ZW5kICdcbiAgICAgICcgZnJhbWV3b3JrcyAgZnJhbWV3b3JrcydcbiAgICAgICcgYmFja2VuZCAgICAgYmFja2VuZCAnXG4gICAgICAnIGlkZSAgICAgICAgIGlkZSAnXG4gICAgICAnIGFkb2JlICAgICAgIGFkb2JlICdcbiAgICAgICcgb2ZmaWNlICAgICAgb2ZmaWNlJ1xuICAgICAgJyBzb25zdGlnZSAgICBzb25zdGlnZSAnO1xuICB9XG5cbiAgZmlndXJlIHtcbiAgICB3aWR0aDogMTI1cHg7XG4gIH1cbiAgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xuICB9XG59XG4iLCIudGl0bGVTa2lsbHMge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5za2lsbHNjb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IGF1dG87XG4gIGdyaWQtZ2FwOiAycmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCIgZnJvbnRlbmQgICAgZnJvbnRlbmQgXCIgXCIgZnJhbWV3b3JrcyAgYmFja2VuZCAgIFwiIFwiIGlkZSAgICAgICAgIGlkZSBcIiBcIiBhZG9iZSAgICAgICBhZG9iZSBcIiBcIiBvZmZpY2UgICAgICBzb25zdGlnZVwiO1xufVxuXG5maWd1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDE3NXB4O1xufVxuXG5pbWcge1xuICBtYXgtaGVpZ2h0OiA3NXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuZmlnY2FwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnRpdGxlIHtcbiAgZ3JpZC1hcmVhOiB0aXRlbDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4udGl0bGUgaDIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbiNmcm9udGVuZCB7XG4gIGdyaWQtYXJlYTogZnJvbnRlbmQ7XG59XG5cbiNmcmFtZXdvcmtzIHtcbiAgZ3JpZC1hcmVhOiBmcmFtZXdvcmtzO1xufVxuXG4jYmFja2VuZCB7XG4gIGdyaWQtYXJlYTogYmFja2VuZDtcbn1cblxuI2lkZSB7XG4gIGdyaWQtYXJlYTogaWRlO1xufVxuXG4jYWRvYmUge1xuICBncmlkLWFyZWE6IGFkb2JlO1xufVxuXG4jb2ZmaWNlIHtcbiAgZ3JpZC1hcmVhOiBvZmZpY2U7XG59XG5cbiNzb25zdGlnZSB7XG4gIGdyaWQtYXJlYTogc29uc3RpZ2U7XG59XG5cbi5lbGVtZW50SW1FbHRlcm5Db250YWluZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3d3dy5oZWlsaWctc2Nod2FiLmRlL21lZGlhLzYxMTJmOTk1LTA0ODQtNDE1ZS1hODQzLWVjZDQ4OWMzYzg2Ni9IaW50ZXJncnVuZGJpbGRlci9hdXRvbWF0aXNpZXJ1bmdzdGVjaG5pay1oZWlsaWctc2Nod2FiLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gIC5za2lsbHNjb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiIGZyb250ZW5kICAgIGZyb250ZW5kIFwiIFwiIGZyYW1ld29ya3MgIGZyYW1ld29ya3NcIiBcIiBiYWNrZW5kICAgICBiYWNrZW5kIFwiIFwiIGlkZSAgICAgICAgIGlkZSBcIiBcIiBhZG9iZSAgICAgICBhZG9iZSBcIiBcIiBvZmZpY2UgICAgICBvZmZpY2VcIiBcIiBzb25zdGlnZSAgICBzb25zdGlnZSBcIjtcbiAgfVxuXG4gIGZpZ3VyZSB7XG4gICAgd2lkdGg6IDEyNXB4O1xuICB9XG5cbiAgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xuICB9XG59Il19 */"]
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

    var ThumbnailComponent = function ThumbnailComponent(imgToggleService) {
      _classCallCheck(this, ThumbnailComponent);

      this.imgToggleService = imgToggleService;
      this.startbild = {
        img: 'assets/eshop/start.png',
        titel: 'Startfenster',
        nummer: 0
      }; // Bilder-Galerie zum Eshop

      this.bilder = [{
        img: 'assets/eshop/k1.png',
        titel: 'Kunden - Übersicht',
        nummer: 1
      }, {
        img: 'assets/eshop/k2.png',
        titel: 'Artikel suchen',
        nummer: 2
      }, {
        img: 'assets/eshop/k3.png',
        titel: 'Artikel in den Warenkorb legen',
        nummer: 3
      }, {
        img: 'assets/eshop/k4.png',
        titel: 'Warenkorb - Übersicht',
        nummer: 4
      }, {
        img: 'assets/eshop/k5.png',
        titel: 'Kaufbestätigung',
        nummer: 5
      }, {
        img: 'assets/eshop/k6.png',
        titel: 'Rechnung',
        nummer: 6
      }, {
        img: 'assets/eshop/m1.png',
        titel: 'Admin - Übersicht',
        nummer: 7
      }, {
        img: 'assets/eshop/m2.png',
        titel: 'Artikel hinzufügen',
        nummer: 8
      }, {
        img: 'assets/eshop/m3.png',
        titel: 'Artikel hinzugefügt',
        nummer: 9
      }, {
        img: 'assets/eshop/m4.png',
        titel: 'Artikel - löschen',
        nummer: 10
      }, {
        img: 'assets/eshop/m4.1.png',
        titel: 'Artikel - gelöscht',
        nummer: 11
      }, {
        img: 'assets/eshop/m5.png',
        titel: 'Artikelbestand - ändern',
        nummer: 12
      }, {
        img: 'assets/eshop/m6.png',
        titel: 'Admin - Artikelverlauf',
        nummer: 13
      }, {
        img: 'assets/eshop/m7.png',
        titel: 'Admin - Ereignis-Verlauf',
        nummer: 14
      }];
    };

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgToggleService.mePng, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgToggleService.design, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgToggleService.proggen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgToggleService.webdev, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: [".grid[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-auto-flow: row;\n  min-height: 100vh;\n  max-width: 1500px;\n  margin: auto;\n  grid-template-columns: repeat(auto-fit, minmax(50px, 700px));\n}\n\n.grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.figure1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.rechts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.titel[_ngcontent-%COMP%] {\n  font-size: clamp(4rem, 4vw, 6rem);\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n}\n\n.icons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 175px));\n  justify-content: center;\n}\n\n.icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n}\n\n@media (max-width: 1415px) {\n  .titel[_ngcontent-%COMP%] {\n    word-wrap: break-word;\n    word-break: break-all;\n  }\n\n  .icons[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy90aHVtYm5haWwvRDpcXERlc2t0b3BcXFdlYkRldlxcMl9Bbmd1bGFyLVByb2pla3RlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXENvbXBvbmVudHNcXHRodW1ibmFpbFxcdGh1bWJuYWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL3RodW1ibmFpbC90aHVtYm5haWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSw0REFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDREY7O0FER0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0FGOztBREVBO0VBQ0UsaUNBQUE7RUFDQSxpQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLDZEQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBRUU7SUFDRSxxQkFBQTtJQUNBLHFCQUFBO0VDREY7O0VER0E7SUFDRSxhQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvdGh1bWJuYWlsL3RodW1ibmFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxuXHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWF4LXdpZHRoOiAxNTAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwcHgsIDcwMHB4KSk7XHJcbn1cclxuXHJcbi5ncmlkIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZmlndXJlMSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucmVjaHRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnRpdGVsIHtcclxuICBmb250LXNpemU6IGNsYW1wKDRyZW0sIDR2dyAsIDZyZW0pO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaWNvbnMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMTc1cHgpKTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmljb25zIGltZyB7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDE1cHgpIHtcclxuXHJcbiAgLnRpdGVsIHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICB9XHJcbiAgLmljb25zIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIuZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLWF1dG8tZmxvdzogcm93O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWF4LXdpZHRoOiAxNTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MHB4LCA3MDBweCkpO1xufVxuXG4uZ3JpZCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5maWd1cmUxIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yZWNodHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRpdGVsIHtcbiAgZm9udC1zaXplOiBjbGFtcCg0cmVtLCA0dncsIDZyZW0pO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pY29ucyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDE3NXB4KSk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaWNvbnMgaW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTQxNXB4KSB7XG4gIC50aXRlbCB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgfVxuXG4gIC5pY29ucyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"]
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


    var _Components_projekte_factory_factory_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Components/projekte/factory/factory.component */
    "./src/app/Components/projekte/factory/factory.component.ts");
    /* harmony import */


    var _Components_projekte_design_design_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Components/projekte/design/design.component */
    "./src/app/Components/projekte/design/design.component.ts");
    /* harmony import */


    var _Components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Components/main-page/main-page.component */
    "./src/app/Components/main-page/main-page.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Components_projekte_webentwicklung_webentwicklung_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Components/projekte/webentwicklung/webentwicklung.component */
    "./src/app/Components/projekte/webentwicklung/webentwicklung.component.ts");
    /* harmony import */


    var _Components_projekte_eshop_eshop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Components/projekte/eshop/eshop.component */
    "./src/app/Components/projekte/eshop/eshop.component.ts");
    /* harmony import */


    var _Components_projekte_games_games_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Components/projekte/games/games.component */
    "./src/app/Components/projekte/games/games.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/Startseite',
      pathMatch: 'full'
    }, {
      path: 'Startseite',
      component: _Components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"]
    }, {
      path: 'Webentwicklung',
      component: _Components_projekte_webentwicklung_webentwicklung_component__WEBPACK_IMPORTED_MODULE_5__["WebentwicklungComponent"]
    }, {
      path: 'Eshop',
      component: _Components_projekte_eshop_eshop_component__WEBPACK_IMPORTED_MODULE_6__["EshopComponent"]
    }, {
      path: 'Design',
      component: _Components_projekte_design_design_component__WEBPACK_IMPORTED_MODULE_1__["DesignComponent"]
    }, {
      path: 'Games',
      component: _Components_projekte_games_games_component__WEBPACK_IMPORTED_MODULE_7__["GamesComponent"]
    }, {
      path: 'SmartFactory',
      component: _Components_projekte_factory_factory_component__WEBPACK_IMPORTED_MODULE_0__["FactoryComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
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

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Angular-Portfolio';
      }

      _createClass(AppComponent, [{
        key: "onActivate",
        value: function onActivate(event) {
          window.scroll(0, 0);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      consts: [[3, "activate"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "router-outlet", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_1_listener($event) {
            return ctx.onActivate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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


    var _Components_projekte_factory_factory_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Components/projekte/factory/factory.component */
    "./src/app/Components/projekte/factory/factory.component.ts");
    /* harmony import */


    var _Components_projekte_games_twitch_twitch_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Components/projekte/games/twitch/twitch.component */
    "./src/app/Components/projekte/games/twitch/twitch.component.ts");
    /* harmony import */


    var _Components_projekte_games_shooter_shooter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Components/projekte/games/shooter/shooter.component */
    "./src/app/Components/projekte/games/shooter/shooter.component.ts");
    /* harmony import */


    var _Components_projekte_games_games_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Components/projekte/games/games.component */
    "./src/app/Components/projekte/games/games.component.ts");
    /* harmony import */


    var _Components_projekte_design_aftereffect_aftereffect_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Components/projekte/design/aftereffect/aftereffect.component */
    "./src/app/Components/projekte/design/aftereffect/aftereffect.component.ts");
    /* harmony import */


    var _Components_projekte_design_photoshop_photoshop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Components/projekte/design/photoshop/photoshop.component */
    "./src/app/Components/projekte/design/photoshop/photoshop.component.ts");
    /* harmony import */


    var _Components_projekte_design_design_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Components/projekte/design/design.component */
    "./src/app/Components/projekte/design/design.component.ts");
    /* harmony import */


    var _Components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Components/main-page/main-page.component */
    "./src/app/Components/main-page/main-page.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _Components_main_page_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./Components/main-page/navigation/navigation.component */
    "./src/app/Components/main-page/navigation/navigation.component.ts");
    /* harmony import */


    var src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/services/modeToggle.service */
    "./src/services/modeToggle.service.ts");
    /* harmony import */


    var src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/services/local-storage.service */
    "./src/services/local-storage.service.ts");
    /* harmony import */


    var _Components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./Components/about-me/about-me.component */
    "./src/app/Components/about-me/about-me.component.ts");
    /* harmony import */


    var _Components_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./Components/kontakt/kontakt.component */
    "./src/app/Components/kontakt/kontakt.component.ts");
    /* harmony import */


    var _Components_projekt_galerie_projekt_galerie_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./Components/projekt-galerie/projekt-galerie.component */
    "./src/app/Components/projekt-galerie/projekt-galerie.component.ts");
    /* harmony import */


    var _Components_projekte_webentwicklung_webentwicklung_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./Components/projekte/webentwicklung/webentwicklung.component */
    "./src/app/Components/projekte/webentwicklung/webentwicklung.component.ts");
    /* harmony import */


    var _Components_projekte_webentwicklung_verein_verein_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./Components/projekte/webentwicklung/verein/verein.component */
    "./src/app/Components/projekte/webentwicklung/verein/verein.component.ts");
    /* harmony import */


    var _Components_projekte_webentwicklung_blog_blog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./Components/projekte/webentwicklung/blog/blog.component */
    "./src/app/Components/projekte/webentwicklung/blog/blog.component.ts");
    /* harmony import */


    var _Components_skills_skills_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./Components/skills/skills.component */
    "./src/app/Components/skills/skills.component.ts");
    /* harmony import */


    var _Components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./Components/thumbnail/thumbnail.component */
    "./src/app/Components/thumbnail/thumbnail.component.ts");
    /* harmony import */


    var _Components_projekte_eshop_eshop_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./Components/projekte/eshop/eshop.component */
    "./src/app/Components/projekte/eshop/eshop.component.ts");
    /* harmony import */


    var _Components_my_slider_my_slider_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./Components/my-slider/my-slider.component */
    "./src/app/Components/my-slider/my-slider.component.ts");
    /* harmony import */


    var _Components_projekte_webentwicklung_kino_kino_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./Components/projekte/webentwicklung/kino/kino.component */
    "./src/app/Components/projekte/webentwicklung/kino/kino.component.ts");

    function themeFactory(themeService) {
      return function () {
        return themeService.setThemeOnStart();
      };
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_13__["ModeToggleService"], src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_14__["StorageService"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__["APP_INITIALIZER"],
        useFactory: themeFactory,
        deps: [src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_13__["ModeToggleService"]],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _Components_main_page_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__["NavigationComponent"], _Components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__["MainPageComponent"], _Components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_15__["AboutMeComponent"], _Components_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_16__["KontaktComponent"], _Components_projekt_galerie_projekt_galerie_component__WEBPACK_IMPORTED_MODULE_17__["ProjektGalerieComponent"], _Components_projekte_webentwicklung_webentwicklung_component__WEBPACK_IMPORTED_MODULE_18__["WebentwicklungComponent"], _Components_projekte_webentwicklung_verein_verein_component__WEBPACK_IMPORTED_MODULE_19__["VereinComponent"], _Components_projekte_webentwicklung_blog_blog_component__WEBPACK_IMPORTED_MODULE_20__["BlogComponent"], _Components_skills_skills_component__WEBPACK_IMPORTED_MODULE_21__["SkillsComponent"], _Components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_22__["ThumbnailComponent"], _Components_projekte_eshop_eshop_component__WEBPACK_IMPORTED_MODULE_23__["EshopComponent"], _Components_projekte_design_design_component__WEBPACK_IMPORTED_MODULE_6__["DesignComponent"], _Components_projekte_design_photoshop_photoshop_component__WEBPACK_IMPORTED_MODULE_5__["PhotoshopComponent"], _Components_projekte_design_aftereffect_aftereffect_component__WEBPACK_IMPORTED_MODULE_4__["AftereffectComponent"], _Components_projekte_games_games_component__WEBPACK_IMPORTED_MODULE_3__["GamesComponent"], _Components_projekte_games_shooter_shooter_component__WEBPACK_IMPORTED_MODULE_2__["ShooterComponent"], _Components_projekte_games_twitch_twitch_component__WEBPACK_IMPORTED_MODULE_1__["TwitchComponent"], _Components_projekte_factory_factory_component__WEBPACK_IMPORTED_MODULE_0__["FactoryComponent"], _Components_my_slider_my_slider_component__WEBPACK_IMPORTED_MODULE_24__["MySliderComponent"], _Components_projekte_webentwicklung_kino_kino_component__WEBPACK_IMPORTED_MODULE_25__["KinoComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _Components_main_page_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__["NavigationComponent"], _Components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__["MainPageComponent"], _Components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_15__["AboutMeComponent"], _Components_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_16__["KontaktComponent"], _Components_projekt_galerie_projekt_galerie_component__WEBPACK_IMPORTED_MODULE_17__["ProjektGalerieComponent"], _Components_projekte_webentwicklung_webentwicklung_component__WEBPACK_IMPORTED_MODULE_18__["WebentwicklungComponent"], _Components_projekte_webentwicklung_verein_verein_component__WEBPACK_IMPORTED_MODULE_19__["VereinComponent"], _Components_projekte_webentwicklung_blog_blog_component__WEBPACK_IMPORTED_MODULE_20__["BlogComponent"], _Components_skills_skills_component__WEBPACK_IMPORTED_MODULE_21__["SkillsComponent"], _Components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_22__["ThumbnailComponent"], _Components_projekte_eshop_eshop_component__WEBPACK_IMPORTED_MODULE_23__["EshopComponent"], _Components_projekte_design_design_component__WEBPACK_IMPORTED_MODULE_6__["DesignComponent"], _Components_projekte_design_photoshop_photoshop_component__WEBPACK_IMPORTED_MODULE_5__["PhotoshopComponent"], _Components_projekte_design_aftereffect_aftereffect_component__WEBPACK_IMPORTED_MODULE_4__["AftereffectComponent"], _Components_projekte_games_games_component__WEBPACK_IMPORTED_MODULE_3__["GamesComponent"], _Components_projekte_games_shooter_shooter_component__WEBPACK_IMPORTED_MODULE_2__["ShooterComponent"], _Components_projekte_games_twitch_twitch_component__WEBPACK_IMPORTED_MODULE_1__["TwitchComponent"], _Components_projekte_factory_factory_component__WEBPACK_IMPORTED_MODULE_0__["FactoryComponent"], _Components_my_slider_my_slider_component__WEBPACK_IMPORTED_MODULE_24__["MySliderComponent"], _Components_projekte_webentwicklung_kino_kino_component__WEBPACK_IMPORTED_MODULE_25__["KinoComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]],
          providers: [src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_13__["ModeToggleService"], src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_14__["StorageService"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__["APP_INITIALIZER"],
            useFactory: themeFactory,
            deps: [src_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_13__["ModeToggleService"]],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
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
          this.gitHub = 'assets/logoGithubClick.png';
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
          this.gitHub = 'assets/logoGithubClickLight.png';
          this.storage.set(this.THEME_KEY, this.DARK_THEME_VALUE);
          document.body.classList.add(this.DARK_THEME_CLASS_NAME);
          this.darkThemeSelected = true;
          this.theme$.next(ThemeMode.DARK);
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
    /*! D:\Desktop\WebDev\2_Angular-Projekte\Portfolio\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map