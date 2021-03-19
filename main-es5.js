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
  "./src/app/about-me/about-me.component.ts":
  /*!************************************************!*\
    !*** ./src/app/about-me/about-me.component.ts ***!
    \************************************************/

  /*! exports provided: AboutMeComponent */

  /***/
  function srcAppAboutMeAboutMeComponentTs(module, __webpack_exports__, __webpack_require__) {
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
      decls: 28,
      vars: 0,
      consts: [[1, "about-me"], [1, "titel"], [1, "bild"], ["src", "assets/Smile.jpg", "alt", "Portrait"], [1, "inhalt"]],
      template: function AboutMeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Im Portfolio k\xF6nnen Sie sich Projekte und erlernte F\xE4higkeiten von mir anschauen. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".about-me[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 75%;\n  margin: auto;\n  display: grid;\n  padding: 10px;\n  grid-column-gap: 50px;\n  justify-content: center;\n  grid-template-columns: 400px minmax(600px, 750px);\n  grid-auto-rows: auto;\n  grid-template-areas: \"titel titel\" \"bild inhalt\";\n}\n\n.titel[_ngcontent-%COMP%] {\n  grid-area: titel;\n  text-align: center;\n  align-self: center;\n}\n\n.bild[_ngcontent-%COMP%] {\n  grid-area: bild;\n}\n\n.bild[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  border: 2px solid var(--cardBorder);\n  border-radius: 5px;\n}\n\n.inhalt[_ngcontent-%COMP%] {\n  grid-area: inhalt;\n  text-align: justify;\n}\n\n@media (max-width: 950px) {\n  .about-me[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(100px, 200px) minmax(100px, 350px);\n    grid-template-areas: \"titel  titel\" \"bild   bild\" \"inhalt inhalt\";\n  }\n\n  .bild[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n\n  .inhalt[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtbWUvRDpcXERlc2t0b3BcXFdlYkRldlxcMi4gQW5ndWxhci1Qcm9qZWt0ZVxcTWVpblBvcnRmb2xpby9zcmNcXGFwcFxcYWJvdXQtbWVcXGFib3V0LW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsYUFBQTtFQUNBLHFCQUFBO0VBRUEsdUJBQUE7RUFHQSxpREFBQTtFQUVBLG9CQUFBO0VBRUEsZ0RBQ0E7QUNSRjs7QURZQTtFQUNFLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsZUFBQTtBQ1ZGOztBRGNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtBQ1hGOztBRGNBO0VBQ0UsaUJBQUE7RUFFQSxtQkFBQTtBQ1pGOztBRGlCQTtFQUVFO0lBRUUsZ0VBQUE7SUFFQSxpRUFDQTtFQ2xCRjs7RUR1QkE7SUFDRSxnQkFBQTtFQ3BCRjs7RURzQkE7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0VDbkJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmFib3V0LW1lIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBncmlkO1xyXG5cclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGdyaWQtY29sdW1uLWdhcDogNTBweDtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG5cclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwMHB4IG1pbm1heCg2MDBweCwgNzUwcHgpO1xyXG5cclxuICBncmlkLWF1dG8tcm93czogYXV0bztcclxuXHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAndGl0ZWwgdGl0ZWwnXHJcbiAgJ2JpbGQgaW5oYWx0JztcclxufVxyXG5cclxuLnRpdGVsIHtcclxuICBncmlkLWFyZWE6IHRpdGVsO1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uYmlsZCB7XHJcbiAgZ3JpZC1hcmVhOiBiaWxkO1xyXG5cclxufVxyXG5cclxuLmJpbGQgaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5pbmhhbHQge1xyXG4gIGdyaWQtYXJlYTogaW5oYWx0O1xyXG5cclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4vLyBCZWkga2xlaW5lcmVtIEJpbGRzY2hpcm1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xyXG5cclxuICAuYWJvdXQtbWUge1xyXG5cclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDEwMHB4LCAyMDBweCkgbWlubWF4KDEwMHB4LCAzNTBweCk7XHJcblxyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICd0aXRlbCAgdGl0ZWwnXHJcbiAgICAnYmlsZCAgIGJpbGQnXHJcbiAgICAnaW5oYWx0IGluaGFsdCc7XHJcbiAgfVxyXG5cclxuICAuYmlsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIH1cclxuICAuaW5oYWx0IHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIuYWJvdXQtbWUge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiAxMHB4O1xuICBncmlkLWNvbHVtbi1nYXA6IDUwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwMHB4IG1pbm1heCg2MDBweCwgNzUwcHgpO1xuICBncmlkLWF1dG8tcm93czogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJ0aXRlbCB0aXRlbFwiIFwiYmlsZCBpbmhhbHRcIjtcbn1cblxuLnRpdGVsIHtcbiAgZ3JpZC1hcmVhOiB0aXRlbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5iaWxkIHtcbiAgZ3JpZC1hcmVhOiBiaWxkO1xufVxuXG4uYmlsZCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNhcmRCb3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pbmhhbHQge1xuICBncmlkLWFyZWE6IGluaGFsdDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gIC5hYm91dC1tZSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTAwcHgsIDIwMHB4KSBtaW5tYXgoMTAwcHgsIDM1MHB4KTtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInRpdGVsICB0aXRlbFwiIFwiYmlsZCAgIGJpbGRcIiBcImluaGFsdCBpbmhhbHRcIjtcbiAgfVxuXG4gIC5iaWxkIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG5cbiAgLmluaGFsdCB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn0iXX0= */"]
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main-page/main-page.component */
    "./src/app/main-page/main-page.component.ts");
    /* harmony import */


    var _projekte_webentwicklung_webentwicklung_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./projekte/webentwicklung/webentwicklung.component */
    "./src/app/projekte/webentwicklung/webentwicklung.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/startseite',
      pathMatch: 'full'
    }, {
      path: 'startseite',
      component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"]
    }, {
      path: 'webentwicklung',
      component: _projekte_webentwicklung_webentwicklung_component__WEBPACK_IMPORTED_MODULE_3__["WebentwicklungComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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


    var _main_page_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./main-page/navigation/navigation.component */
    "./src/app/main-page/navigation/navigation.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'PortfolioScss';
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
      directives: [_main_page_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_router_testing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router/testing */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/testing.js");
    /* harmony import */


    var _main_page_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./main-page/navigation/navigation.component */
    "./src/app/main-page/navigation/navigation.component.ts");
    /* harmony import */


    var _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/modeToggle.service */
    "./src/services/modeToggle.service.ts");
    /* harmony import */


    var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/local-storage.service */
    "./src/services/local-storage.service.ts");
    /* harmony import */


    var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./main-page/main-page.component */
    "./src/app/main-page/main-page.component.ts");
    /* harmony import */


    var _thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./thumbnail/thumbnail.component */
    "./src/app/thumbnail/thumbnail.component.ts");
    /* harmony import */


    var _projekt_galerie_projekt_galerie_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./projekt-galerie/projekt-galerie.component */
    "./src/app/projekt-galerie/projekt-galerie.component.ts");
    /* harmony import */


    var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./about-me/about-me.component */
    "./src/app/about-me/about-me.component.ts");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./skills/skills.component */
    "./src/app/skills/skills.component.ts");
    /* harmony import */


    var _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./kontakt/kontakt.component */
    "./src/app/kontakt/kontakt.component.ts");
    /* harmony import */


    var _projekte_webentwicklung_webentwicklung_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./projekte/webentwicklung/webentwicklung.component */
    "./src/app/projekte/webentwicklung/webentwicklung.component.ts");
    /* harmony import */


    var _projekte_webentwicklung_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./projekte/webentwicklung/blog/blog.component */
    "./src/app/projekte/webentwicklung/blog/blog.component.ts");
    /* harmony import */


    var _projekte_webentwicklung_verein_verein_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./projekte/webentwicklung/verein/verein.component */
    "./src/app/projekte/webentwicklung/verein/verein.component.ts");

    function themeFactory(themeService) {
      return function () {
        return themeService.setThemeOnStart();
      };
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_6__["ModeToggleService"], _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
        useFactory: themeFactory,
        deps: [_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_6__["ModeToggleService"]],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_router_testing__WEBPACK_IMPORTED_MODULE_4__["RouterTestingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _main_page_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"], _thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_9__["ThumbnailComponent"], _projekt_galerie_projekt_galerie_component__WEBPACK_IMPORTED_MODULE_10__["ProjektGalerieComponent"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_11__["AboutMeComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_12__["SkillsComponent"], _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_13__["KontaktComponent"], _projekte_webentwicklung_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__["BlogComponent"], _projekte_webentwicklung_verein_verein_component__WEBPACK_IMPORTED_MODULE_16__["VereinComponent"], _projekte_webentwicklung_webentwicklung_component__WEBPACK_IMPORTED_MODULE_14__["WebentwicklungComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_router_testing__WEBPACK_IMPORTED_MODULE_4__["RouterTestingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _main_page_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"], _thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_9__["ThumbnailComponent"], _projekt_galerie_projekt_galerie_component__WEBPACK_IMPORTED_MODULE_10__["ProjektGalerieComponent"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_11__["AboutMeComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_12__["SkillsComponent"], _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_13__["KontaktComponent"], _projekte_webentwicklung_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__["BlogComponent"], _projekte_webentwicklung_verein_verein_component__WEBPACK_IMPORTED_MODULE_16__["VereinComponent"], _projekte_webentwicklung_webentwicklung_component__WEBPACK_IMPORTED_MODULE_14__["WebentwicklungComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_router_testing__WEBPACK_IMPORTED_MODULE_4__["RouterTestingModule"]],
          providers: [_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_6__["ModeToggleService"], _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
            useFactory: themeFactory,
            deps: [_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_6__["ModeToggleService"]],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/kontakt/kontakt.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/kontakt/kontakt.component.ts ***!
    \**********************************************/

  /*! exports provided: KontaktComponent */

  /***/
  function srcAppKontaktKontaktComponentTs(module, __webpack_exports__, __webpack_require__) {
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
      styles: [".titleKontakt[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.kontaktContainer[_ngcontent-%COMP%] {\n  min-height: 75vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva29udGFrdC9EOlxcRGVza3RvcFxcV2ViRGV2XFwyLiBBbmd1bGFyLVByb2pla3RlXFxNZWluUG9ydGZvbGlvL3NyY1xcYXBwXFxrb250YWt0XFxrb250YWt0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9rb250YWt0L2tvbnRha3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9rb250YWt0L2tvbnRha3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVLb250YWt0IHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ua29udGFrdENvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogNzV2aDtcclxufVxyXG4iLCIudGl0bGVLb250YWt0IHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ua29udGFrdENvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDc1dmg7XG59Il19 */"]
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
  "./src/app/main-page/main-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/main-page/main-page.component.ts ***!
    \**************************************************/

  /*! exports provided: MainPageComponent */

  /***/
  function srcAppMainPageMainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/thumbnail/thumbnail.component.ts");
    /* harmony import */


    var _projekt_galerie_projekt_galerie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../projekt-galerie/projekt-galerie.component */
    "./src/app/projekt-galerie/projekt-galerie.component.ts");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../skills/skills.component */
    "./src/app/skills/skills.component.ts");
    /* harmony import */


    var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../about-me/about-me.component */
    "./src/app/about-me/about-me.component.ts");
    /* harmony import */


    var _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../kontakt/kontakt.component */
    "./src/app/kontakt/kontakt.component.ts");

    var _c0 = ["galerie"];
    var _c1 = ["skills"];
    var _c2 = ["about"];
    var _c3 = ["kontakt"];

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
      }

      _createClass(MainPageComponent, [{
        key: "navProjekte",
        value: function navProjekte() {
          this.galerie.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, {
        key: "navSkill",
        value: function navSkill() {
          this.skills.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, {
        key: "navAbout",
        value: function navAbout() {
          this.about.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, {
        key: "navKontakt",
        value: function navKontakt() {
          this.kontakt.nativeElement.scrollIntoView({
            behavior: 'smooth',
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
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.galerie = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.skills = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.about = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.kontakt = _t.first);
        }
      },
      decls: 18,
      vars: 0,
      consts: [[1, "scroll"], ["galerie", ""], ["skills", ""], ["about", ""], ["kontakt", ""]],
      template: function MainPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-thumbnail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-projekt-galerie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-about-me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-kontakt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_2__["ThumbnailComponent"], _projekt_galerie_projekt_galerie_component__WEBPACK_IMPORTED_MODULE_3__["ProjektGalerieComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__["AboutMeComponent"], _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_6__["KontaktComponent"]],
      styles: [".scroll[_ngcontent-%COMP%] {\n  scroll-margin-top: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL0Q6XFxEZXNrdG9wXFxXZWJEZXZcXDIuIEFuZ3VsYXItUHJvamVrdGVcXE1laW5Qb3J0Zm9saW8vc3JjXFxhcHBcXG1haW4tcGFnZVxcbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsIHtcclxuICBzY3JvbGwtbWFyZ2luLXRvcDogNXJlbTtcclxufVxyXG4iLCIuc2Nyb2xsIHtcbiAgc2Nyb2xsLW1hcmdpbi10b3A6IDVyZW07XG59Il19 */"]
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
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main-page/navigation/navigation.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/main-page/navigation/navigation.component.ts ***!
    \**************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppMainPageNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/modeToggle.service */
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
          window.scrollTo(0, 0);
        }
      }, {
        key: "onScrollToProjekte",
        value: function onScrollToProjekte() {
          this.navservice.sendClickEvent1();
        }
      }, {
        key: "onScrollToSkills",
        value: function onScrollToSkills() {
          this.navservice.sendClickEvent2();
        }
      }, {
        key: "onScrollToAbout",
        value: function onScrollToAbout() {
          this.navservice.sendClickEvent3();
        }
      }, {
        key: "onScrollToKontakt",
        value: function onScrollToKontakt() {
          this.navservice.sendClickEvent4();
        }
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
      return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_2__["ModeToggleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"]));
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
      consts: [["id", "bgNav", 1, "navbar", "navbar-expand-lg", "ganzeNav", "sticky-top"], ["id", "navButton", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", "data-target", "#navbarSupportedContent", "data-toggle", "collapse", "type", "button", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["routerLink", "/startseite", 1, "nav-link", 3, "click"], [1, "fas", "fa-house-user"], [1, "nav-item", "navTopBorder", "bt"], [1, "fas", "fa-diagnoses"], [1, "fas", "fa-tv"], [1, "fas", "fa-user-circle"], [1, "fas", "fa-address-card"], [1, "nav-link"], [1, "fas", "fa-adjust", 3, "click"]],
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
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: [".ganzeNav[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n}\n.bgNav[_ngcontent-%COMP%] {\n  background-color: var(--navBackground);\n  border-bottom: 1px solid black;\n}\n\n.navbar-nav[_ngcontent-%COMP%] {\n  margin-right: 5%;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-left: 35px;\n  color: var(--text);\n}\n.nav-link[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: var(--hover);\n}\n.bgLink[_ngcontent-%COMP%] {\n  color: var(--textreverse);\n}\n.bgLink[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: var(--hoverreverse);\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  font-size: 2.6rem;\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.fa-adjust[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.navTopBorder[_ngcontent-%COMP%] {\n  border: none;\n}\n.navTopBorderReverse[_ngcontent-%COMP%] {\n  border: none;\n}\n@media (max-width: 991px) {\n  .navTopBorder[_ngcontent-%COMP%] {\n    border-top: 2px solid var(--cardBorder);\n  }\n\n  .navTopBorderReverse[_ngcontent-%COMP%] {\n    border-top: 2px solid var(--cardBorderReverse);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL25hdmlnYXRpb24vRDpcXERlc2t0b3BcXFdlYkRldlxcMi4gQW5ndWxhci1Qcm9qZWt0ZVxcTWVpblBvcnRmb2xpby9zcmNcXGFwcFxcbWFpbi1wYWdlXFxuYXZpZ2F0aW9uXFxuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluLXBhZ2UvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDQ0Y7QURFQTtFQUNFLHNDQUFBO0VBQ0EsOEJBQUE7QUNDRjtBREVBLHlDQUFBO0FBQ0E7RUFDRSxnQkFBQTtBQ0NGO0FER0EsYUFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREVFO0VBQ0UsbUJBQUE7QUNBSjtBRElBO0VBQ0UseUJBQUE7QUNERjtBREdFO0VBQ0UsMEJBQUE7QUNESjtBREtBO0VBQ0UsaUJBQUE7QUNGRjtBRE1BO0VBQ0UsZUFBQTtBQ0hGO0FETUE7RUFDRSxlQUFBO0FDSEY7QURNQSxjQUFBO0FBRUE7RUFDRSxZQUFBO0FDSkY7QURNQTtFQUNFLFlBQUE7QUNIRjtBRE1BO0VBQ0U7SUFDRSx1Q0FBQTtFQ0hGOztFREtBO0lBQ0UsOENBQUE7RUNGRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1wYWdlL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdhbnplIE5hdiAqL1xyXG4uZ2FuemVOYXYge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5iZ05hdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2QmFja2dyb3VuZCk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4vKiBEZXIgUmFobWVuLCB3byBkaWUgTGlua3MgZHJpbm5lIHNpbmQgKi9cclxuLm5hdmJhci1uYXYge1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcblxyXG4vKiBkZXIgTGluayAqL1xyXG4ubmF2LWxpbmsge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBtYXJnaW4tbGVmdDogMzVweDtcclxuICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0taG92ZXIpO1xyXG4gIH1cclxufVxyXG5cclxuLmJnTGluayB7XHJcbiAgY29sb3I6IHZhcigtLXRleHRyZXZlcnNlKTtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ob3ZlcnJldmVyc2UpO1xyXG4gIH1cclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgZm9udC1zaXplOiAyLjZyZW07XHJcbn1cclxuXHJcblxyXG5hOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mYS1hZGp1c3Q6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogbmF2IEJvcmRlciovXHJcblxyXG4ubmF2VG9wQm9yZGVyIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLm5hdlRvcEJvcmRlclJldmVyc2Uge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLm5hdlRvcEJvcmRlciB7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tY2FyZEJvcmRlcik7XHJcbiAgfVxyXG4gIC5uYXZUb3BCb3JkZXJSZXZlcnNlIHtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyUmV2ZXJzZSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qIEdhbnplIE5hdiAqL1xuLmdhbnplTmF2IHtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5iZ05hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdkJhY2tncm91bmQpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi8qIERlciBSYWhtZW4sIHdvIGRpZSBMaW5rcyBkcmlubmUgc2luZCAqL1xuLm5hdmJhci1uYXYge1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuXG4vKiBkZXIgTGluayAqL1xuLm5hdi1saW5rIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tbGVmdDogMzVweDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuLm5hdi1saW5rIDpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1ob3Zlcik7XG59XG5cbi5iZ0xpbmsge1xuICBjb2xvcjogdmFyKC0tdGV4dHJldmVyc2UpO1xufVxuLmJnTGluayA6aG92ZXIge1xuICBjb2xvcjogdmFyKC0taG92ZXJyZXZlcnNlKTtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIGZvbnQtc2l6ZTogMi42cmVtO1xufVxuXG5hOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmEtYWRqdXN0OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBuYXYgQm9yZGVyKi9cbi5uYXZUb3BCb3JkZXIge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5uYXZUb3BCb3JkZXJSZXZlcnNlIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLm5hdlRvcEJvcmRlciB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWNhcmRCb3JkZXIpO1xuICB9XG5cbiAgLm5hdlRvcEJvcmRlclJldmVyc2Uge1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyUmV2ZXJzZSk7XG4gIH1cbn0iXX0= */"]
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
          type: _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_2__["ModeToggleService"]
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
  "./src/app/projekt-galerie/projekt-galerie.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/projekt-galerie/projekt-galerie.component.ts ***!
    \**************************************************************/

  /*! exports provided: ProjektGalerieComponent */

  /***/
  function srcAppProjektGalerieProjektGalerieComponentTs(module, __webpack_exports__, __webpack_require__) {
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
      consts: [[1, "titleProjekte"], [1, "parent"], ["routerLink", "/webentwicklung", 1, "figure"], ["src", "assets/webdev.jpg", "alt", "Webentwicklung"], [1, "figure"], ["src", "assets/design.jpg", "alt", "Design"], ["src", "assets/smartfactory.jpg", "alt", "Industrie 4.0"], ["src", "assets/eshop.jpg", "alt", "Eshop"], ["src", "assets/games.jpg", "alt", "Games"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "figure", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Industrie 4.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "figure", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Eshop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "figure", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Games");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: [".titleProjekte[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n.parent[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  grid-gap: 20px;\n  grid-auto-flow: row;\n  max-width: 1000px;\n  margin: auto;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 300px));\n}\n.parent[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border: 1px solid var(--boxShadow);\n  border-radius: 5px;\n}\n.figure[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 4px 3px var(--boxShadow);\n  cursor: pointer;\n  color: var(--hover);\n}\n.figure[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 2.6rem;\n  text-align: center;\n  background-color: var(--cardBack);\n  color: var(--cardBackText);\n  border: 2px solid var(--cardBorder);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVrdC1nYWxlcmllL0Q6XFxEZXNrdG9wXFxXZWJEZXZcXDIuIEFuZ3VsYXItUHJvamVrdGVcXE1laW5Qb3J0Zm9saW8vc3JjXFxhcHBcXHByb2pla3QtZ2FsZXJpZVxccHJvamVrdC1nYWxlcmllLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWt0LWdhbGVyaWUvcHJvamVrdC1nYWxlcmllLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFBO0FBRUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7RUFDQSxZQUFBO0VBRUEsNkRBQUE7QUNGRjtBREtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxrQ0FBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDSEY7QURNQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtFQUVBLG1DQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWt0LWdhbGVyaWUvcHJvamVrdC1nYWxlcmllLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQmlsZGVyLUdhbGVyaWUgKi9cclxuXHJcbi50aXRsZVByb2pla3RlIHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGFyZW50IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdyaWQtZ2FwOiAyMHB4O1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcblxyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMzAwcHgpKTtcclxufVxyXG5cclxuLnBhcmVudCBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuXHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm94U2hhZG93KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5maWd1cmU6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggM3B4IHZhcigtLWJveFNoYWRvdyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1ob3Zlcik7XHJcbn1cclxuXHJcbi5maWd1cmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkQmFjayk7XHJcbiAgY29sb3I6IHZhcigtLWNhcmRCYWNrVGV4dCk7XHJcblxyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNhcmRCb3JkZXIpO1xyXG59XHJcbiIsIi8qIEJpbGRlci1HYWxlcmllICovXG4udGl0bGVQcm9qZWt0ZSB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBhcmVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLWdhcDogMjBweDtcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMzAwcHgpKTtcbn1cblxuLnBhcmVudCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3hTaGFkb3cpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5maWd1cmU6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgNHB4IDNweCB2YXIoLS1ib3hTaGFkb3cpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1ob3Zlcik7XG59XG5cbi5maWd1cmUge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMi42cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmRCYWNrKTtcbiAgY29sb3I6IHZhcigtLWNhcmRCYWNrVGV4dCk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNhcmRCb3JkZXIpO1xufSJdfQ== */"]
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
  "./src/app/projekte/webentwicklung/blog/blog.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/projekte/webentwicklung/blog/blog.component.ts ***!
    \****************************************************************/

  /*! exports provided: BlogComponent */

  /***/
  function srcAppProjekteWebentwicklungBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    var BlogComponent = /*#__PURE__*/function () {
      function BlogComponent() {
        _classCallCheck(this, BlogComponent);
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
      decls: 3,
      vars: 0,
      consts: [[1, "titleBlog"]],
      template: function BlogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".titleBlog[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVrdGUvd2ViZW50d2lja2x1bmcvYmxvZy9EOlxcRGVza3RvcFxcV2ViRGV2XFwyLiBBbmd1bGFyLVByb2pla3RlXFxNZWluUG9ydGZvbGlvL3NyY1xcYXBwXFxwcm9qZWt0ZVxcd2ViZW50d2lja2x1bmdcXGJsb2dcXGJsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2pla3RlL3dlYmVudHdpY2tsdW5nL2Jsb2cvYmxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVrdGUvd2ViZW50d2lja2x1bmcvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlQmxvZyB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iLCIudGl0bGVCbG9nIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"]
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
  "./src/app/projekte/webentwicklung/verein/verein.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/projekte/webentwicklung/verein/verein.component.ts ***!
    \********************************************************************/

  /*! exports provided: VereinComponent */

  /***/
  function srcAppProjekteWebentwicklungVereinVereinComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    var VereinComponent = /*#__PURE__*/function () {
      function VereinComponent() {
        _classCallCheck(this, VereinComponent);
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
      decls: 58,
      vars: 0,
      consts: [[1, "titleVerein"], [1, "vereinContainer"], [1, "tools"], [1, "titel"], [1, "bilder"], ["src", "assets/Angular.png", "alt", "Angular"], ["src", "assets/bootstrap.png", "alt", "Bootstrap"], ["src", "assets/mysql_PNG23.png", "alt", "MySQL"], ["src", "assets/node.png", "alt", "Nodejs"], [1, "was"], [1, "text"], [1, "bilder2"], [1, "titelbild"], ["src", "assets/verein/start.png", "alt", "Startseite"], ["src", "assets/verein/allgemein.png", "alt", "Tischtennis_Allgemein"], ["src", "assets/verein/mannschaften.png", "alt", "Tischtennis_Mannschaften"], ["src", "assets/verein/hinzufuegen.png", "alt", "Tischtennisspieler_Hinzufuegen"], ["src", "assets/verein/galerie.png", "alt", "Tischtennis_Galerie"], [1, "video"], [1, "iframe-container"], ["src", "https://www.youtube.com/embed/WU0DUuMX2-Q", "allow", "accelerometer;\n              autoplay;\n              clipboard-write;\n              encrypted-media;\n              gyroscope;\n               picture-in-picture", "allowfullscreen", ""]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Startseite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Allgemein");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Mannschaften");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Spieler hinzuf\xFCgen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Galerie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Video");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "iframe", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".titleVerein[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.titel[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.vereinContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 75%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 30px;\n  justify-content: center;\n  align-items: center;\n}\n\n.bilder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  grid-column-gap: 50px;\n  justify-content: center;\n  align-items: center;\n  background-image: url(\"https://c.wallhere.com/photos/87/c7/black_background_lines_minimalism_abstract_square_blue-1925925.jpg!d\");\n  background-size: cover;\n  background-attachment: fixed;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nfigure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.bilder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nfigcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: white;\n}\n\n.was[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.text[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: auto;\n  text-align: justify;\n}\n\n.bilder2[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: column;\n  max-width: 1000px;\n}\n\n.bilder2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  border-radius: 10px;\n}\n\n.titelbild[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  text-align: center;\n  border-radius: 10px;\n}\n\n.video[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.iframe-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding-bottom: 56.25%;\n  height: 0;\n}\n\n.iframe-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVrdGUvd2ViZW50d2lja2x1bmcvdmVyZWluL0Q6XFxEZXNrdG9wXFxXZWJEZXZcXDIuIEFuZ3VsYXItUHJvamVrdGVcXE1laW5Qb3J0Zm9saW8vc3JjXFxhcHBcXHByb2pla3RlXFx3ZWJlbnR3aWNrbHVuZ1xcdmVyZWluXFx2ZXJlaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2pla3RlL3dlYmVudHdpY2tsdW5nL3ZlcmVpbi92ZXJlaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUdBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSx1QkFBQTtFQUNBLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0VBR0EsaUlBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0FDUEY7O0FEWUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDVEY7O0FEWUE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNURjs7QURZQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNURjs7QURnQkE7RUFDRSxnQkFBQTtBQ2JGOztBRGVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNaRjs7QURjQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0FDWkY7O0FEZ0JBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDYkY7O0FEZ0JBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNiRjs7QURpQkE7RUFDRSxXQUFBO0FDZEY7O0FEZ0JBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDYkY7O0FEZUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ1pGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVrdGUvd2ViZW50d2lja2x1bmcvdmVyZWluL3ZlcmVpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZVZlcmVpbiB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGl0ZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vLyBHZXNhbXRjb250YWluZXJcclxuLnZlcmVpbkNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuXHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJpbGRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBncmlkLWNvbHVtbi1nYXA6IDUwcHg7XHJcblxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9jLndhbGxoZXJlLmNvbS9waG90b3MvODcvYzcvYmxhY2tfYmFja2dyb3VuZF9saW5lc19taW5pbWFsaXNtX2Fic3RyYWN0X3NxdWFyZV9ibHVlLTE5MjU5MjUuanBnIWRcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG5cclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi8vIEltYWdlLVN0dWZmXHJcblxyXG5maWd1cmUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYmlsZGVyIGltZyB7XHJcbiAgbWF4LWhlaWdodDogNzVweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuZmlnY2FwdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi8vIDEuIERpdiBCbG9ja1xyXG4udG9vbHMge31cclxuXHJcbi8vMi4gRGl2IEJsb2NrXHJcblxyXG4ud2FzIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi50ZXh0IHtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcbi5iaWxkZXIyIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG5cclxufVxyXG5cclxuLmJpbGRlcjIgaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnRpdGVsYmlsZCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vLyBWaWRlb1xyXG4udmlkZW8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pZnJhbWUtY29udGFpbmVyLCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcbi5pZnJhbWUtY29udGFpbmVyIGlmcmFtZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4iLCIudGl0bGVWZXJlaW4ge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRlbCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnZlcmVpbkNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYmlsZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBncmlkLWNvbHVtbi1nYXA6IDUwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2Mud2FsbGhlcmUuY29tL3Bob3Rvcy84Ny9jNy9ibGFja19iYWNrZ3JvdW5kX2xpbmVzX21pbmltYWxpc21fYWJzdHJhY3Rfc3F1YXJlX2JsdWUtMTkyNTkyNS5qcGchZFwiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuZmlndXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iaWxkZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogNzVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbmZpZ2NhcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLndhcyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi50ZXh0IHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uYmlsZGVyMiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogMTAwMHB4O1xufVxuXG4uYmlsZGVyMiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi50aXRlbGJpbGQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi52aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaWZyYW1lLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XG4gIGhlaWdodDogMDtcbn1cblxuLmlmcmFtZS1jb250YWluZXIgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */"]
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
  "./src/app/projekte/webentwicklung/webentwicklung.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/projekte/webentwicklung/webentwicklung.component.ts ***!
    \*********************************************************************/

  /*! exports provided: WebentwicklungComponent */

  /***/
  function srcAppProjekteWebentwicklungWebentwicklungComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/projekte/webentwicklung/blog/blog.component.ts");
    /* harmony import */


    var _verein_verein_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./verein/verein.component */
    "./src/app/projekte/webentwicklung/verein/verein.component.ts");

    var _c0 = ["pick"];

    function WebentwicklungComponent_app_blog_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-blog", null, 8);
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
          this.verein = false;
          this.blog = true;
          document.getElementById('blog').classList.add('figureClick');
          document.getElementById('verein').classList.remove('figureClick');
          this.pick.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, {
        key: "toggleVerein",
        value: function toggleVerein() {
          this.blog = false;
          this.verein = true;
          document.getElementById('blog').classList.remove('figureClick');
          document.getElementById('verein').classList.add('figureClick');
          window.scrollTo(0, 675);
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pick = _t.first);
        }
      },
      decls: 21,
      vars: 3,
      consts: [[1, "all"], [1, "titleWebdev"], [1, "WebdevContainer"], ["id", "blog", 1, "figure", 3, "click"], ["src", "assets/blog.jpg", "alt", "Blog"], ["id", "verein", 1, "figure", 3, "click"], ["src", "assets/verein.png", "alt", "Verein"], [4, "ngIf"], ["pick", ""], ["class", "pick", 4, "ngIf"], [1, "pick"]],
      template: function WebentwicklungComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Projekte ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Webentwicklung ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "figure", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebentwicklungComponent_Template_figure_click_7_listener() {
            return ctx.toggleBlog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "figure", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebentwicklungComponent_Template_figure_click_11_listener() {
            return ctx.toggleVerein();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Verein");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, WebentwicklungComponent_app_blog_16_Template, 2, 0, "app-blog", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", null, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, WebentwicklungComponent_app_verein_19_Template, 1, 0, "app-verein", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, WebentwicklungComponent_div_20_Template, 3, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blog);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verein);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.blog && !ctx.verein);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"], _verein_verein_component__WEBPACK_IMPORTED_MODULE_3__["VereinComponent"]],
      styles: [".all[_ngcontent-%COMP%] {\n  min-height: 155vh;\n}\n\n.titleWebdev[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.WebdevContainer[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  grid-gap: 20px;\n  grid-auto-flow: row;\n  margin: auto;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 300px));\n}\n\n.WebdevContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 1px solid var(--boxShadow);\n  border-radius: 5px;\n}\n\n.pick[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.figure[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 4px 3px var(--boxShadow);\n  cursor: pointer;\n  color: var(--hover);\n}\n\n.figure[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 2.6rem;\n  text-align: center;\n  background-color: var(--cardBack);\n  color: var(--cardBackText);\n  border: 2px solid var(--cardBorder);\n}\n\n.figureClick[_ngcontent-%COMP%] {\n  box-shadow: 0 0 4px 3px var(--hover);\n  border: none;\n  cursor: pointer;\n}\n\n.video[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90%;\n  margin: auto;\n  padding-bottom: 56.25%;\n  height: 0;\n}\n\n.video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 75%;\n  height: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVrdGUvd2ViZW50d2lja2x1bmcvRDpcXERlc2t0b3BcXFdlYkRldlxcMi4gQW5ndWxhci1Qcm9qZWt0ZVxcTWVpblBvcnRmb2xpby9zcmNcXGFwcFxccHJvamVrdGVcXHdlYmVudHdpY2tsdW5nXFx3ZWJlbnR3aWNrbHVuZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVrdGUvd2ViZW50d2lja2x1bmcvd2ViZW50d2lja2x1bmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEsNkRBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUVBLGtDQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0Usd0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtFQUVBLG1DQUFBO0FDRkY7O0FES0E7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRkY7O0FET0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL3Byb2pla3RlL3dlYmVudHdpY2tsdW5nL3dlYmVudHdpY2tsdW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsbCB7XHJcbiAgbWluLWhlaWdodDogMTU1dmg7XHJcbn1cclxuXHJcbi50aXRsZVdlYmRldiB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLldlYmRldkNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBncmlkLWdhcDogMjBweDtcclxuICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMzAwcHgpKTtcclxufVxyXG5cclxuLldlYmRldkNvbnRhaW5lciBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcblxyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJveFNoYWRvdyk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ucGljayB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZpZ3VyZTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDRweCAzcHggdmFyKC0tYm94U2hhZG93KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLWhvdmVyKTtcclxufVxyXG5cclxuLmZpZ3VyZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IC43NXJlbTtcclxuICBmb250LXNpemU6IDIuNnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZEJhY2spO1xyXG4gIGNvbG9yOiB2YXIoLS1jYXJkQmFja1RleHQpO1xyXG5cclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jYXJkQm9yZGVyKTtcclxufVxyXG5cclxuLmZpZ3VyZUNsaWNrIHtcclxuICBib3gtc2hhZG93OiAwIDAgNHB4IDNweCB2YXIoLS1ob3Zlcik7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLy8gVmlkZW9cclxuXHJcbi52aWRlbyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4udmlkZW8gaWZyYW1lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBoZWlnaHQ6IDc1JTtcclxufVxyXG4iLCIuYWxsIHtcbiAgbWluLWhlaWdodDogMTU1dmg7XG59XG5cbi50aXRsZVdlYmRldiB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLldlYmRldkNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLWdhcDogMjBweDtcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgbWFyZ2luOiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAzMDBweCkpO1xufVxuXG4uV2ViZGV2Q29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm94U2hhZG93KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucGljayB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZpZ3VyZTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggM3B4IHZhcigtLWJveFNoYWRvdyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuLmZpZ3VyZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgZm9udC1zaXplOiAyLjZyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZEJhY2spO1xuICBjb2xvcjogdmFyKC0tY2FyZEJhY2tUZXh0KTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2FyZEJvcmRlcik7XG59XG5cbi5maWd1cmVDbGljayB7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggM3B4IHZhcigtLWhvdmVyKTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi52aWRlbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xuICBoZWlnaHQ6IDA7XG59XG5cbi52aWRlbyBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDc1JTtcbiAgaGVpZ2h0OiA3NSU7XG59Il19 */"]
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
        pick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['pick']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/skills/skills.component.ts":
  /*!********************************************!*\
    !*** ./src/app/skills/skills.component.ts ***!
    \********************************************/

  /*! exports provided: SkillsComponent */

  /***/
  function srcAppSkillsSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
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
      decls: 151,
      vars: 0,
      consts: [[1, "titleSkills"], [1, "skillscontainer"], ["id", "frontend", 1, "elementImElternContainer"], [1, "title"], [1, "content"], ["src", "assets/LogoHTML.png", "alt", "html"], ["src", "assets/LogoCSS.png", "alt", "css"], ["src", "assets/LogoJS.png", "alt", "js"], ["id", "frameworks", 1, "elementImElternContainer"], ["src", "assets/Angular.png", "alt", "Angular"], ["src", "assets/vue.png", "alt", "Vue"], ["src", "assets/react-logo.png", "alt", "React"], ["src", "assets/bootstrap.png", "alt", "Bootstrap"], ["id", "backend", 1, "elementImElternContainer"], ["src", "assets/csharp.png", "alt", "CSharp"], ["src", "assets/java.png", "alt", "Java"], ["src", "assets/mysql_PNG23.png", "alt", "MySql"], ["src", "assets/mongodb-logo.png", "alt", "MongoDB"], ["src", "assets/node.png", "alt", "Nodejs"], ["id", "ide", 1, "elementImElternContainer"], ["src", "assets/jetbrains.png", "alt", "JetBrains"], ["src", "assets/vscode.png", "alt", "VSCode"], ["src", "assets/vs.png", "alt", "VS"], ["src", "assets/eclipse.png", "alt", "Eclipse"], ["id", "adobe", 1, "elementImElternContainer"], ["src", "assets/ps.png", "alt", "Photoshop"], ["src", "assets/Lr.png", "alt", "Lightroom"], ["src", "assets/pr.png", "alt", "Premiere"], ["src", "assets/ae.png", "alt", "After Effects"], ["src", "assets/xd.png", "alt", "Adobe Xd"], ["id", "office", 1, "elementImElternContainer"], ["src", "assets/excel.png", "alt", "Excel"], ["src", "assets/pp.png", "alt", "Powerpoint"], ["src", "assets/word.png", "alt", "Word"], ["id", "sonstige", 1, "elementImElternContainer"], ["src", "assets/git.png", "alt", "Git"], ["src", "assets/LogoGithub.png", "alt", "Github"], ["src", "assets/Typescript.png", "alt", "TypeScript"], ["src", "assets/scrum.png", "alt", "Scrum"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Vue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "React");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Bootstrap");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Node js");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Powerpoint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Word");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Sonstige");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Git");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "GitHub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "TypeScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Scrum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".titleSkills[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.skillscontainer[_ngcontent-%COMP%] {\n  display: grid;\n  width: 75%;\n  margin: auto;\n  grid-gap: 2rem;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  grid-template-areas: \" frontend    frameworks \" \" backend   backend \" \" ide       ide \" \" adobe    adobe \" \" office  sonstige\";\n}\n\nfigure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 175px;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nfigcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n}\n\n.title[_ngcontent-%COMP%] {\n  grid-area: titel;\n  color: white;\n  text-align: center;\n  padding: 15px;\n}\n\n.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n#frontend[_ngcontent-%COMP%] {\n  grid-area: frontend;\n}\n\n#frameworks[_ngcontent-%COMP%] {\n  grid-area: frameworks;\n}\n\n#backend[_ngcontent-%COMP%] {\n  grid-area: backend;\n}\n\n#ide[_ngcontent-%COMP%] {\n  grid-area: ide;\n}\n\n#adobe[_ngcontent-%COMP%] {\n  grid-area: adobe;\n}\n\n#office[_ngcontent-%COMP%] {\n  grid-area: office;\n}\n\n#sonstige[_ngcontent-%COMP%] {\n  grid-area: sonstige;\n}\n\n.elementImElternContainer[_ngcontent-%COMP%] {\n  background-image: url(\"https://www.heilig-schwab.de/media/6112f995-0484-415e-a843-ecd489c3c866/Hintergrundbilder/automatisierungstechnik-heilig-schwab.jpg\");\n  background-size: cover;\n  background-attachment: fixed;\n  border-radius: 15px;\n}\n\n@media (max-width: 950px) {\n  .skillscontainer[_ngcontent-%COMP%] {\n    grid-template-areas: \" frontend    frontend \" \" frameworks  frameworks\" \" backend     backend \" \" ide         ide \" \" adobe       adobe \" \" office      office\" \" sonstige    sonstige \";\n  }\n\n  figure[_ngcontent-%COMP%] {\n    width: 125px;\n  }\n\n  img[_ngcontent-%COMP%] {\n    max-height: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL0Q6XFxEZXNrdG9wXFxXZWJEZXZcXDIuIEFuZ3VsYXItUHJvamVrdGVcXE1laW5Qb3J0Zm9saW8vc3JjXFxhcHBcXHNraWxsc1xcc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBRUEsMkRBQUE7RUFFQSw4SEFDRTtBQ0pKOztBRGVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7QUNiRjs7QURnQkE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNiRjs7QURnQkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUNiRjs7QURrQkE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNmRjs7QURpQkU7RUFDRSxpQkFBQTtBQ2ZKOztBRG1CQTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0VBRUEsbUJBQUE7RUFDQSw2QkFBQTtBQ25CRjs7QUQwQkE7RUFDRSxtQkFBQTtBQ3ZCRjs7QUQyQkE7RUFDRSxxQkFBQTtBQ3hCRjs7QUQ0QkE7RUFDRSxrQkFBQTtBQ3pCRjs7QUQ2QkE7RUFDRSxjQUFBO0FDMUJGOztBRDhCQTtFQUNFLGdCQUFBO0FDM0JGOztBRCtCQTtFQUNFLGlCQUFBO0FDNUJGOztBRGdDQTtFQUNFLG1CQUFBO0FDN0JGOztBRGlDQTtFQUNFLDRKQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDOUJGOztBRGtDQTtFQUNFO0lBQ0Usd0xBQ0E7RUNoQ0Y7O0VEeUNBO0lBQ0UsWUFBQTtFQ3RDRjs7RUR3Q0E7SUFDRSxnQkFBQTtFQ3JDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRpdGVsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuLnRpdGxlU2tpbGxzIHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vLyBHZXNhbXQtQ29udGFpbmVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuLnNraWxsc2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBncmlkLWdhcDogMnJlbTtcclxuXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XHJcblxyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAnIGZyb250ZW5kICAgIGZyYW1ld29ya3MgJ1xyXG4gICAgJyBiYWNrZW5kICAgYmFja2VuZCAnXHJcbiAgICAnIGlkZSAgICAgICBpZGUgJ1xyXG4gICAgJyBhZG9iZSAgICBhZG9iZSAnXHJcbiAgICAnIG9mZmljZSAgc29uc3RpZ2UnO1xyXG5cclxufVxyXG5cclxuXHJcbi8vIEltYWdlLVN0dWZmIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbmZpZ3VyZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIHdpZHRoOiAxNzVweDtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXgtaGVpZ2h0OiA3NXB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG5maWdjYXB0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLy8gVGl0ZWwgKyBDb250ZW50IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbi50aXRsZSB7XHJcbiAgZ3JpZC1hcmVhOiB0aXRlbDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG5cclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblxyXG59XHJcblxyXG4vLyBHcmlkLUFyZWFzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbi8vIEl0ZW0gMVxyXG4jZnJvbnRlbmQge1xyXG4gIGdyaWQtYXJlYTogZnJvbnRlbmQ7XHJcbn1cclxuXHJcbi8vIEl0ZW0gMlxyXG4jZnJhbWV3b3JrcyB7XHJcbiAgZ3JpZC1hcmVhOiBmcmFtZXdvcmtzO1xyXG59XHJcblxyXG4vLyBJdGVtIDNcclxuI2JhY2tlbmQge1xyXG4gIGdyaWQtYXJlYTogYmFja2VuZDtcclxufVxyXG5cclxuLy8gSXRlbSA0XHJcbiNpZGUge1xyXG4gIGdyaWQtYXJlYTogaWRlO1xyXG59XHJcblxyXG4vLyBJdGVtIDVcclxuI2Fkb2JlIHtcclxuICBncmlkLWFyZWE6IGFkb2JlO1xyXG59XHJcblxyXG4vLyBJdGVtIDZcclxuI29mZmljZSB7XHJcbiAgZ3JpZC1hcmVhOiBvZmZpY2U7XHJcbn1cclxuXHJcbi8vIEl0ZW0gN1xyXG4jc29uc3RpZ2Uge1xyXG4gIGdyaWQtYXJlYTogc29uc3RpZ2U7XHJcbn1cclxuXHJcbi8vIEhpbnRlcmdydW5kIGV0Yy4gZsO8ciBhbGxlIEtpbmQtRWxlbWVudGVcclxuLmVsZW1lbnRJbUVsdGVybkNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly93d3cuaGVpbGlnLXNjaHdhYi5kZS9tZWRpYS82MTEyZjk5NS0wNDg0LTQxNWUtYTg0My1lY2Q0ODljM2M4NjYvSGludGVyZ3J1bmRiaWxkZXIvYXV0b21hdGlzaWVydW5nc3RlY2huaWstaGVpbGlnLXNjaHdhYi5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi8vIEFucGFzc2VuIGJlaSBrbGVpbmVyIFNjcmVlbmdyw7bDn2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAuc2tpbGxzY29udGFpbmVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAnIGZyb250ZW5kICAgIGZyb250ZW5kICdcclxuICAgICcgZnJhbWV3b3JrcyAgZnJhbWV3b3JrcydcclxuICAgICcgYmFja2VuZCAgICAgYmFja2VuZCAnXHJcbiAgICAnIGlkZSAgICAgICAgIGlkZSAnXHJcbiAgICAnIGFkb2JlICAgICAgIGFkb2JlICdcclxuICAgICcgb2ZmaWNlICAgICAgb2ZmaWNlJ1xyXG4gICAgJyBzb25zdGlnZSAgICBzb25zdGlnZSAnO1xyXG4gIH1cclxuXHJcbiAgZmlndXJlIHtcclxuICAgIHdpZHRoOiAxMjVweDtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG59XHJcbiIsIi50aXRsZVNraWxscyB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNraWxsc2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogYXV0bztcbiAgZ3JpZC1nYXA6IDJyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIiBmcm9udGVuZCAgICBmcmFtZXdvcmtzIFwiIFwiIGJhY2tlbmQgICBiYWNrZW5kIFwiIFwiIGlkZSAgICAgICBpZGUgXCIgXCIgYWRvYmUgICAgYWRvYmUgXCIgXCIgb2ZmaWNlICBzb25zdGlnZVwiO1xufVxuXG5maWd1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDE3NXB4O1xufVxuXG5pbWcge1xuICBtYXgtaGVpZ2h0OiA3NXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuZmlnY2FwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnRpdGxlIHtcbiAgZ3JpZC1hcmVhOiB0aXRlbDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4udGl0bGUgaDIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbiNmcm9udGVuZCB7XG4gIGdyaWQtYXJlYTogZnJvbnRlbmQ7XG59XG5cbiNmcmFtZXdvcmtzIHtcbiAgZ3JpZC1hcmVhOiBmcmFtZXdvcmtzO1xufVxuXG4jYmFja2VuZCB7XG4gIGdyaWQtYXJlYTogYmFja2VuZDtcbn1cblxuI2lkZSB7XG4gIGdyaWQtYXJlYTogaWRlO1xufVxuXG4jYWRvYmUge1xuICBncmlkLWFyZWE6IGFkb2JlO1xufVxuXG4jb2ZmaWNlIHtcbiAgZ3JpZC1hcmVhOiBvZmZpY2U7XG59XG5cbiNzb25zdGlnZSB7XG4gIGdyaWQtYXJlYTogc29uc3RpZ2U7XG59XG5cbi5lbGVtZW50SW1FbHRlcm5Db250YWluZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3d3dy5oZWlsaWctc2Nod2FiLmRlL21lZGlhLzYxMTJmOTk1LTA0ODQtNDE1ZS1hODQzLWVjZDQ4OWMzYzg2Ni9IaW50ZXJncnVuZGJpbGRlci9hdXRvbWF0aXNpZXJ1bmdzdGVjaG5pay1oZWlsaWctc2Nod2FiLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gIC5za2lsbHNjb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiIGZyb250ZW5kICAgIGZyb250ZW5kIFwiIFwiIGZyYW1ld29ya3MgIGZyYW1ld29ya3NcIiBcIiBiYWNrZW5kICAgICBiYWNrZW5kIFwiIFwiIGlkZSAgICAgICAgIGlkZSBcIiBcIiBhZG9iZSAgICAgICBhZG9iZSBcIiBcIiBvZmZpY2UgICAgICBvZmZpY2VcIiBcIiBzb25zdGlnZSAgICBzb25zdGlnZSBcIjtcbiAgfVxuXG4gIGZpZ3VyZSB7XG4gICAgd2lkdGg6IDEyNXB4O1xuICB9XG5cbiAgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xuICB9XG59Il19 */"]
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
  "./src/app/thumbnail/thumbnail.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/thumbnail/thumbnail.component.ts ***!
    \**************************************************/

  /*! exports provided: ThumbnailComponent */

  /***/
  function srcAppThumbnailThumbnailComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/modeToggle.service */
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
      return new (t || ThumbnailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"]));
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
      styles: [".grid[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-auto-flow: row;\n  min-height: 100vh;\n  max-width: 1500px;\n  margin: auto;\n  grid-template-columns: repeat(auto-fit, minmax(50px, 700px));\n}\n\n.grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.figure1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.rechts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.titel[_ngcontent-%COMP%] {\n  font-size: 6rem;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n}\n\n.icons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 175px));\n  justify-content: center;\n}\n\n.icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n}\n\n@media (max-width: 1415px) {\n  .titel[_ngcontent-%COMP%] {\n    font-size: 4rem;\n    word-wrap: break-word;\n    word-break: break-all;\n  }\n\n  .icons[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGh1bWJuYWlsL0Q6XFxEZXNrdG9wXFxXZWJEZXZcXDIuIEFuZ3VsYXItUHJvamVrdGVcXE1laW5Qb3J0Zm9saW8vc3JjXFxhcHBcXHRodW1ibmFpbFxcdGh1bWJuYWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aHVtYm5haWwvdGh1bWJuYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBRUEsNERBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0RGOztBREdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLDZEQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBRUU7SUFDRSxlQUFBO0lBQ0EscUJBQUE7SUFDQSxxQkFBQTtFQ0RGOztFREdBO0lBQ0UsYUFBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90aHVtYm5haWwvdGh1bWJuYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG5cclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBtYXgtd2lkdGg6IDE1MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgNzAwcHgpKTtcclxufVxyXG5cclxuLmdyaWQgaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5maWd1cmUxIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5yZWNodHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4udGl0ZWwge1xyXG4gIGZvbnQtc2l6ZTogNnJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmljb25zIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDE3NXB4KSk7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pY29ucyBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTQxNXB4KSB7XHJcblxyXG4gIC50aXRlbCB7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgfVxyXG4gIC5pY29ucyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiLmdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1heC13aWR0aDogMTUwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgNzAwcHgpKTtcbn1cblxuLmdyaWQgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uZmlndXJlMSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucmVjaHRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50aXRlbCB7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaWNvbnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxNzVweCkpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmljb25zIGltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0MTVweCkge1xuICAudGl0ZWwge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICB9XG5cbiAgLmljb25zIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */"]
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
          type: _services_modeToggle_service__WEBPACK_IMPORTED_MODULE_1__["ModeToggleService"]
        }];
      }, null);
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
            console.log(this.getproggen());
          } else {
            this.setDarkTheme();
            console.log(this.getproggen());
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
    /*! D:\Desktop\WebDev\2. Angular-Projekte\MeinPortfolio\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map