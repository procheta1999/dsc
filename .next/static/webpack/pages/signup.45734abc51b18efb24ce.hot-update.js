webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default, SignUpLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpLink", function() { return SignUpLink; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "./pages/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_contexts_UserContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/contexts/UserContext */ "./src/contexts/UserContext.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
var _this = undefined,
    _jsxFileName = "E:\\projectFolders\\nextJsProjects\\dsc\\pages\\signup.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var Signup = function Signup() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_src_contexts_UserContext__WEBPACK_IMPORTED_MODULE_7__["UserContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      password = _useState2[0],
      setPassword = _useState2[1];

  var handleSignUp = function handleSignUp() {
    firebase_app__WEBPACK_IMPORTED_MODULE_6___default.a.auth().createUserWithEmailAndPassword(email, password).then(function (res) {
      context.setCurrentUser(res.user.email, res.user.uid);
    })["catch"](function (error) {
      console.log(error);
      Object(react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"])(error.message, {
        type: "error"
      });
    });
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    handleSignUp();
  };

  if (context.user && context.user.uid) {
    return router.push("/feed");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("meta", {
    charset: "UTF-8",
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx("title", {
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "Sign Up"), __jsx("link", {
    rel: "icon",
    href: "https://raw.githubusercontent.com/procheta1999/DSC-NSEC-Blogs/master/public/favicon.ico",
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-2244943713" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/dsc.png?raw=true",
    alt: "dsc Logo",
    className: "jsx-2244943713" + " " + "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }), __jsx("b", {
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, "DSC NSEC BLOGS-", __jsx("i", {
    id: "s",
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 28
    }
  }, "Write Your Own Story!"))), __jsx("center", {
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "Sign Up To Start Your Journey Today!")), __jsx("center", {
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "https://media.giphy.com/media/MTjM7okzpQu88/giphy.gif",
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  })), __jsx("center", {
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-2244943713" + " " + "grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2244943713" + " " + "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, "Email:", __jsx("input", {
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    type: "text",
    placeholder: "Email Address",
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }), "Password:", __jsx("input", {
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    type: "password",
    placeholder: "Password",
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }), __jsx("center", {
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, __jsx("button", {
    type: "submit",
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  }, "Sign Up")), __jsx("center", {
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, "Ater creating account, go back to Login Page."), __jsx("br", {
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }), __jsx("center", {
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, __jsx("button", {
    variant: "contained",
    color: "primary",
    type: "submit",
    style: {
      marginTop: "20px",
      width: "200px"
    },
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }, __jsx(_index__WEBPACK_IMPORTED_MODULE_5__["IndexLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  })))))))), __jsx("footer", {
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://dscnsec.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-2244943713",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/dsc.png?raw=true",
    alt: "DSC Logo",
    className: "jsx-2244943713" + " " + "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3077196963",
    __self: _this
  }, "footer.jsx-2244943713{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-2244943713 img.jsx-2244943713{margin-left:0.5rem;}footer.jsx-2244943713 a.jsx-2244943713{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.grid.jsx-2244943713{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:1000px;margin-top:4rem;}.card.jsx-2244943713{margin:2rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:3rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid black;border-radius:20px;-moz-box-shadow:inset 0 0 10px #000000;-webkit-box-shadow:inset 0 0 10px #000000;box-shadow:inset 0 0 10px #000000;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}.card.jsx-2244943713:hover,.card.jsx-2244943713:focus,.card.jsx-2244943713:active{color:#0070f3;border-color:#0070f3;}.card.jsx-2244943713 h3.jsx-2244943713{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-2244943713 p.jsx-2244943713{margin:0;font-size:1.25rem;line-height:1.5;}#l.jsx-2244943713{text-align:center;}.logo.jsx-2244943713{height:1em;float:left;}.title.jsx-2244943713{margin:0;line-height:1.15;font-size:4rem;padding:5rem 0;}#s.jsx-2244943713{-webkit-animation:pulse-jsx-2244943713 5s infinite;animation:pulse-jsx-2244943713 5s infinite;}@-webkit-keyframes pulse-jsx-2244943713{20%{color:red;}30%{color:blue;}40%{color:green;}100%{color:yellow;}}@keyframes pulse-jsx-2244943713{20%{color:red;}30%{color:blue;}40%{color:green;}100%{color:yellow;}}#pro.jsx-2244943713{color:blue;}form.jsx-2244943713{font-size:30px;padding:0.0001rem 5em 5em 5em;margin:100px 100px 100px 100px;}Button.jsx-2244943713{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#new.jsx-2244943713{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxwcm9qZWN0Rm9sZGVyc1xcbmV4dEpzUHJvamVjdHNcXGRzY1xccGFnZXNcXHNpZ251cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSWtCLEFBR3NCLEFBU1EsQUFJTixBQUtBLEFBVUQsQUFpQkUsQUFLSSxBQUtULEFBS1MsQUFHUCxBQUlGLEFBTW1CLEFBSWhCLEFBR0MsQUFHQyxBQUdDLEFBSUosQUFHSSxBQUtJLEFBR0QsU0E3Q0EsQUFZRCxDQVVqQixDQTdFYSxBQStERixBQWlCWCxBQVVGLENBOURpQixBQXVEZixDQUdBLENBekNxQixDQWdEUyxHQTNDYixBQVVuQixBQXlDQSxDQTVGQSxHQXVEQSxFQS9EK0IsRUFtRWQsQ0FaQyxRQVZsQixBQUtBLE1Ba0JpQixFQVpqQixFQXFDaUMsUUE1RmxCLEdBb0VmLGtCQXpEeUIsQUFLSixFQTZFckIsRUFsRWUsYUFDRyxFQW9FbEIsQ0F6QkEsYUExQ2dCLGNBQ08sTUE3QkUsd0NBZ0JBLElBY0EsRUFuQkoscUJBb0JBLG1CQUNvQixhQS9CcEIsMEJBZ0N1QixjQXJCNUMsQUFLaUIsNEJBaUJtQix5QkFoQ3BDLElBaUJtQixLQWdCb0MsWUFmckMsZ0JBQ2xCLG9GQWVBIiwiZmlsZSI6IkU6XFxwcm9qZWN0Rm9sZGVyc1xcbmV4dEpzUHJvamVjdHNcXGRzY1xccGFnZXNcXHNpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBJbmRleExpbmsgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vc3JjL2NvbnRleHRzL1VzZXJDb250ZXh0XCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5jb25zdCBTaWdudXAgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG5cclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNpZ25VcCA9ICgpID0+IHtcclxuICAgIGZpcmViYXNlXHJcbiAgICAgIC5hdXRoKClcclxuICAgICAgLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuXHJcbiAgICAgICAgY29udGV4dC5zZXRDdXJyZW50VXNlcihyZXMudXNlci5lbWFpbCwgcmVzLnVzZXIudWlkKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB0b2FzdChlcnJvci5tZXNzYWdlLCB7XHJcbiAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBoYW5kbGVTaWduVXAoKTtcclxuICB9O1xyXG5cclxuICBpZiAoY29udGV4dC51c2VyICYmIGNvbnRleHQudXNlci51aWQpIHtcclxuICAgIHJldHVybiByb3V0ZXIucHVzaChcIi9mZWVkXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPjwvbWV0YT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCJcclxuICAgICAgICA+PC9tZXRhPlxyXG4gICAgICAgIDx0aXRsZT5TaWduIFVwPC90aXRsZT5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwiaWNvblwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3Byb2NoZXRhMTk5OS9EU0MtTlNFQy1CbG9ncy9tYXN0ZXIvcHVibGljL2Zhdmljb24uaWNvXCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL2Jsb2IvbWFzdGVyL3B1YmxpYy9kc2MucG5nP3Jhdz10cnVlXCJcclxuICAgICAgICAgICAgYWx0PVwiZHNjIExvZ29cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvXCJcclxuICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgIDxiPlxyXG4gICAgICAgICAgICBEU0MgTlNFQyBCTE9HUy08aSBpZD1cInNcIj5Xcml0ZSBZb3VyIE93biBTdG9yeSE8L2k+XHJcbiAgICAgICAgICA8L2I+XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgPGgxPlNpZ24gVXAgVG8gU3RhcnQgWW91ciBKb3VybmV5IFRvZGF5ITwvaDE+XHJcbiAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvTVRqTTdva3pwUXU4OC9naXBoeS5naWZcIj48L2ltZz5cclxuICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgRW1haWw6XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICBQYXNzd29yZDpcclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiBVcDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgICAgICAgICAgICA8Y2VudGVyPkF0ZXIgY3JlYXRpbmcgYWNjb3VudCwgZ28gYmFjayB0byBMb2dpbiBQYWdlLjwvY2VudGVyPlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiLCB3aWR0aDogXCIyMDBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5kZXhMaW5rIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvY2VudGVyPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2RzY25zZWMuY29tL1wiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL2Jsb2IvbWFzdGVyL3B1YmxpYy9kc2MucG5nP3Jhdz10cnVlXCJcclxuICAgICAgICAgICAgYWx0PVwiRFNDIExvZ29cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb290ZXIgaW1nIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb290ZXIgYSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ3JpZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgIG1hcmdpbjogMnJlbTtcclxuICAgICAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcclxuICAgICAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZDpob3ZlcixcclxuICAgICAgICAuY2FyZDpmb2N1cyxcclxuICAgICAgICAuY2FyZDphY3RpdmUge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCBoMyB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2wge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFlbTtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNzIHtcclxuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgNXMgaW5maW5pdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgICAgICAgMjAlIHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDMwJSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgNDAlIHtcclxuICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNwcm8ge1xyXG4gICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMC4wMDAxcmVtIDVlbSA1ZW0gNWVtO1xyXG4gICAgICAgICAgbWFyZ2luOiAxMDBweCAxMDBweCAxMDBweCAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQnV0dG9uIHtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNuZXcge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTaWduVXBMaW5rID0gKCkgPT4gKFxyXG4gIDxwPlxyXG4gICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50P3tcIiBcIn1cclxuICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XHJcbiAgICAgIDxhPlNpZ24gVXA8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgPC9wPlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7XHJcbmV4cG9ydCB7IFNpZ25VcExpbmsgfTtcclxuIl19 */\n/*@ sourceURL=E:\\\\projectFolders\\\\nextJsProjects\\\\dsc\\\\pages\\\\signup.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3379920139",
    __self: _this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxwcm9qZWN0Rm9sZGVyc1xcbmV4dEpzUHJvamVjdHNcXGRzY1xccGFnZXNcXHNpZ251cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyT3lCLEFBSXFCLEFBUVksVUFQYixTQUdHLEdBS2QsbUlBSkEiLCJmaWxlIjoiRTpcXHByb2plY3RGb2xkZXJzXFxuZXh0SnNQcm9qZWN0c1xcZHNjXFxwYWdlc1xcc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IEluZGV4TGluayB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9zcmMvY29udGV4dHMvVXNlckNvbnRleHRcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcbmNvbnN0IFNpZ251cCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2lnblVwID0gKCkgPT4ge1xyXG4gICAgZmlyZWJhc2VcclxuICAgICAgLmF1dGgoKVxyXG4gICAgICAuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG5cclxuICAgICAgICBjb250ZXh0LnNldEN1cnJlbnRVc2VyKHJlcy51c2VyLmVtYWlsLCByZXMudXNlci51aWQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHRvYXN0KGVycm9yLm1lc3NhZ2UsIHtcclxuICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGhhbmRsZVNpZ25VcCgpO1xyXG4gIH07XHJcblxyXG4gIGlmIChjb250ZXh0LnVzZXIgJiYgY29udGV4dC51c2VyLnVpZCkge1xyXG4gICAgcmV0dXJuIHJvdXRlci5wdXNoKFwiL2ZlZWRcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCI+PC9tZXRhPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIlxyXG4gICAgICAgID48L21ldGE+XHJcbiAgICAgICAgPHRpdGxlPlNpZ24gVXA8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJpY29uXCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL21hc3Rlci9wdWJsaWMvZmF2aWNvbi5pY29cIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvYmxvYi9tYXN0ZXIvcHVibGljL2RzYy5wbmc/cmF3PXRydWVcIlxyXG4gICAgICAgICAgICBhbHQ9XCJkc2MgTG9nb1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ29cIlxyXG4gICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgPGI+XHJcbiAgICAgICAgICAgIERTQyBOU0VDIEJMT0dTLTxpIGlkPVwic1wiPldyaXRlIFlvdXIgT3duIFN0b3J5ITwvaT5cclxuICAgICAgICAgIDwvYj5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICA8aDE+U2lnbiBVcCBUbyBTdGFydCBZb3VyIEpvdXJuZXkgVG9kYXkhPC9oMT5cclxuICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS9NVGpNN29renBRdTg4L2dpcGh5LmdpZlwiPjwvaW1nPlxyXG4gICAgICAgIDwvY2VudGVyPlxyXG4gICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICBFbWFpbDpcclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIFBhc3N3b3JkOlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIFVwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICAgICAgICAgIDxjZW50ZXI+QXRlciBjcmVhdGluZyBhY2NvdW50LCBnbyBiYWNrIHRvIExvZ2luIFBhZ2UuPC9jZW50ZXI+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmRleExpbmsgLz5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPGZvb3Rlcj5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZHNjbnNlYy5jb20vXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvYmxvYi9tYXN0ZXIvcHVibGljL2RzYy5wbmc/cmF3PXRydWVcIlxyXG4gICAgICAgICAgICBhbHQ9XCJEU0MgTG9nb1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ29cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlciBpbWcge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlciBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ncmlkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgbWFyZ2luOiAycmVtO1xyXG4gICAgICAgICAgZmxleC1iYXNpczogNDUlO1xyXG4gICAgICAgICAgcGFkZGluZzogM3JlbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggIzAwMDAwMDtcclxuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggIzAwMDAwMDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkOmhvdmVyLFxyXG4gICAgICAgIC5jYXJkOmZvY3VzLFxyXG4gICAgICAgIC5jYXJkOmFjdGl2ZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIGgzIHtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQgcCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjbCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3Mge1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSA1cyBpbmZpbml0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgICAgICAgICAyMCUge1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMzAlIHtcclxuICAgICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA0MCUge1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgY29sb3I6IHllbGxvdztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgI3BybyB7XHJcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjAwMDFyZW0gNWVtIDVlbSA1ZW07XHJcbiAgICAgICAgICBtYXJnaW46IDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBCdXR0b24ge1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgI25ldyB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFNpZ25VcExpbmsgPSAoKSA9PiAoXHJcbiAgPHA+XHJcbiAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/e1wiIFwifVxyXG4gICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgPGE+U2lnbiBVcDwvYT5cclxuICAgIDwvTGluaz5cclxuICA8L3A+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDtcclxuZXhwb3J0IHsgU2lnblVwTGluayB9O1xyXG4iXX0= */\n/*@ sourceURL=E:\\\\projectFolders\\\\nextJsProjects\\\\dsc\\\\pages\\\\signup.js */"));
};

_s(Signup, "++UFKKfRJYKj1RSd4ekGw4xU0KI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Signup;

var SignUpLink = function SignUpLink() {
  return __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 3
    }
  }, "Don't have an account?", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 5
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 7
    }
  }, "Sign Up")));
};

_c2 = SignUpLink;
/* harmony default export */ __webpack_exports__["default"] = (Signup);


var _c, _c2;

$RefreshReg$(_c, "Signup");
$RefreshReg$(_c2, "SignUpLink");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIlNpZ251cCIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlU2lnblVwIiwiZmlyZWJhc2UiLCJhdXRoIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsInJlcyIsInNldEN1cnJlbnRVc2VyIiwidXNlciIsInVpZCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInRvYXN0IiwibWVzc2FnZSIsInR5cGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwidGFyZ2V0IiwidmFsdWUiLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsIlNpZ25VcExpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHQyx3REFBVSxDQUFDQyxxRUFBRCxDQUExQjs7QUFGbUIsa0JBSU9DLHNEQUFRLENBQUMsRUFBRCxDQUpmO0FBQUEsTUFJWkMsS0FKWTtBQUFBLE1BSUxDLFFBSks7O0FBQUEsbUJBS2FGLHNEQUFRLENBQUMsRUFBRCxDQUxyQjtBQUFBLE1BS1pHLFFBTFk7QUFBQSxNQUtGQyxXQUxFOztBQU9uQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCQyx1REFBUSxDQUNMQyxJQURILEdBRUdDLDhCQUZILENBRWtDUCxLQUZsQyxFQUV5Q0UsUUFGekMsRUFHR00sSUFISCxD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QUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBREYsQ0F4QkYsQ0FERixDQURGLENBREYsQ0FqQkYsQ0FiRixFQXdFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxzQkFEUDtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsT0FBRyxFQUFDLHFCQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQ0UsT0FBRyxFQUFDLG9GQUROO0FBRUUsT0FBRyxFQUFDLFVBRk47QUFBQSx3Q0FHWSxNQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQURGLENBeEVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGl5VUFERjtBQWdORCxDQWhQRDs7R0FBTWpDLE07VUFDV0UscUQ7OztLQURYRixNOztBQWtQTixJQUFNa0MsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxTQUNqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUN5QixHQUR6QixFQUVFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBRkYsQ0FEaUI7QUFBQSxDQUFuQjs7TUFBTUEsVTtBQVFTbEMscUVBQWY7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuNDU3MzRhYmM1MWIxOGVmYjI0Y2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBJbmRleExpbmsgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vc3JjL2NvbnRleHRzL1VzZXJDb250ZXh0XCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5jb25zdCBTaWdudXAgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG5cclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNpZ25VcCA9ICgpID0+IHtcclxuICAgIGZpcmViYXNlXHJcbiAgICAgIC5hdXRoKClcclxuICAgICAgLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuXHJcbiAgICAgICAgY29udGV4dC5zZXRDdXJyZW50VXNlcihyZXMudXNlci5lbWFpbCwgcmVzLnVzZXIudWlkKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB0b2FzdChlcnJvci5tZXNzYWdlLCB7XHJcbiAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBoYW5kbGVTaWduVXAoKTtcclxuICB9O1xyXG5cclxuICBpZiAoY29udGV4dC51c2VyICYmIGNvbnRleHQudXNlci51aWQpIHtcclxuICAgIHJldHVybiByb3V0ZXIucHVzaChcIi9mZWVkXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPjwvbWV0YT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCJcclxuICAgICAgICA+PC9tZXRhPlxyXG4gICAgICAgIDx0aXRsZT5TaWduIFVwPC90aXRsZT5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwiaWNvblwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3Byb2NoZXRhMTk5OS9EU0MtTlNFQy1CbG9ncy9tYXN0ZXIvcHVibGljL2Zhdmljb24uaWNvXCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL2Jsb2IvbWFzdGVyL3B1YmxpYy9kc2MucG5nP3Jhdz10cnVlXCJcclxuICAgICAgICAgICAgYWx0PVwiZHNjIExvZ29cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvXCJcclxuICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgIDxiPlxyXG4gICAgICAgICAgICBEU0MgTlNFQyBCTE9HUy08aSBpZD1cInNcIj5Xcml0ZSBZb3VyIE93biBTdG9yeSE8L2k+XHJcbiAgICAgICAgICA8L2I+XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgPGgxPlNpZ24gVXAgVG8gU3RhcnQgWW91ciBKb3VybmV5IFRvZGF5ITwvaDE+XHJcbiAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvTVRqTTdva3pwUXU4OC9naXBoeS5naWZcIj48L2ltZz5cclxuICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgRW1haWw6XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICBQYXNzd29yZDpcclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiBVcDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgICAgICAgICAgICA8Y2VudGVyPkF0ZXIgY3JlYXRpbmcgYWNjb3VudCwgZ28gYmFjayB0byBMb2dpbiBQYWdlLjwvY2VudGVyPlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiLCB3aWR0aDogXCIyMDBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5kZXhMaW5rIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvY2VudGVyPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2RzY25zZWMuY29tL1wiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL2Jsb2IvbWFzdGVyL3B1YmxpYy9kc2MucG5nP3Jhdz10cnVlXCJcclxuICAgICAgICAgICAgYWx0PVwiRFNDIExvZ29cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb290ZXIgaW1nIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb290ZXIgYSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ3JpZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgIG1hcmdpbjogMnJlbTtcclxuICAgICAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcclxuICAgICAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZDpob3ZlcixcclxuICAgICAgICAuY2FyZDpmb2N1cyxcclxuICAgICAgICAuY2FyZDphY3RpdmUge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCBoMyB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2wge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFlbTtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNzIHtcclxuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgNXMgaW5maW5pdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgICAgICAgMjAlIHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDMwJSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgNDAlIHtcclxuICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNwcm8ge1xyXG4gICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMC4wMDAxcmVtIDVlbSA1ZW0gNWVtO1xyXG4gICAgICAgICAgbWFyZ2luOiAxMDBweCAxMDBweCAxMDBweCAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQnV0dG9uIHtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNuZXcge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTaWduVXBMaW5rID0gKCkgPT4gKFxyXG4gIDxwPlxyXG4gICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50P3tcIiBcIn1cclxuICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XHJcbiAgICAgIDxhPlNpZ24gVXA8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgPC9wPlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7XHJcbmV4cG9ydCB7IFNpZ25VcExpbmsgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==