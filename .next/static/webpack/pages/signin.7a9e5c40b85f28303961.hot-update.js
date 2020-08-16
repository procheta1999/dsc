webpackHotUpdate_N_E("pages/signin",{

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup */ "./pages/signup.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index */ "./pages/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_contexts_userContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/contexts/userContext */ "./src/contexts/userContext.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\sapta\\Documents\\ReactProjects\\dsc-firebase-master\\pages\\signin.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var SignIn = function SignIn() {
  _s();

  var _context$user;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_src_contexts_userContext__WEBPACK_IMPORTED_MODULE_8__["UserContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      password = _useState2[0],
      setPassword = _useState2[1];

  var handleSignIn = function handleSignIn() {
    firebase_app__WEBPACK_IMPORTED_MODULE_7___default.a.auth().signInWithEmailAndPassword(email, password).then(function (res) {
      console.log(res);
      context.setUser({
        email: res.user.email,
        uid: res.user.uid
      });
    })["catch"](function (error) {
      console.log(error);
      Object(react_toastify__WEBPACK_IMPORTED_MODULE_9__["toast"])(error.message, {
        type: "error"
      });
    });
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    handleSignIn();
  };

  if ((_context$user = context.user) === null || _context$user === void 0 ? void 0 : _context$user.uid) {
    return router.push('/home');
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("meta", {
    charset: "UTF-8",
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), __jsx("title", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 8
    }
  }, "Log In"), __jsx("link", {
    rel: "icon",
    href: "https://raw.githubusercontent.com/procheta1999/DSC-NSEC-Blogs/master/public/favicon.ico",
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 8
    }
  })), __jsx("main", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 6
    }
  }, __jsx("h1", {
    className: "jsx-1330015200" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/dsc.png?raw=true",
    alt: "dsc Logo",
    className: "jsx-1330015200" + " " + "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx("b", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "DSC NSEC BLOGS-", __jsx("i", {
    id: "s",
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }, "Write Your Own Story!"))), __jsx("br", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), __jsx("center", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, "Log In To Start Your Journey Today!")), __jsx("center", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "https://media.giphy.com/media/1O2BRZcDgIfDsKMTbG/giphy.gif",
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  })), __jsx("center", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1330015200" + " " + "grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1330015200" + " " + "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, "Email:", __jsx("input", {
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    type: "email",
    placeholder: "someone@example.com",
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }), __jsx("br", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }), __jsx("br", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }), "Password:", __jsx("input", {
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    type: "password",
    placeholder: "Password",
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 18
    }
  }), __jsx("br", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }), __jsx("center", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "submit",
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, "Sign In")), __jsx("br", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }), __jsx("br", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }), __jsx("center", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, __jsx(_signup__WEBPACK_IMPORTED_MODULE_3__["SignUpLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  })), __jsx("br", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }), __jsx("center", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, __jsx("button", {
    variant: "contained",
    color: "primary",
    type: "submit",
    style: {
      marginTop: "20px",
      width: "200px"
    },
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx(_index__WEBPACK_IMPORTED_MODULE_6__["IndexLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  })))))))), __jsx("footer", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://dscnsec.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/dsc.png?raw=true",
    alt: "DSC Logo",
    className: "jsx-1330015200" + " " + "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2428873762",
    __self: _this
  }, "footer.jsx-1330015200{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1330015200 img.jsx-1330015200{margin-left:0.5rem;}footer.jsx-1330015200 a.jsx-1330015200{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.grid.jsx-1330015200{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:1000px;margin-top:4rem;}.card.jsx-1330015200{margin:2rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:3rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid black;border-radius:20px;-moz-box-shadow:inset 0 0 10px #000000;-webkit-box-shadow:inset 0 0 10px #000000;box-shadow:inset 0 0 10px #000000;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}.card.jsx-1330015200:hover,.card.jsx-1330015200:focus,.card.jsx-1330015200:active{color:#0070f3;border-color:#0070f3;}.card.jsx-1330015200 h3.jsx-1330015200{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-1330015200 p.jsx-1330015200{margin:0;font-size:1.25rem;line-height:1.5;}#l.jsx-1330015200{text-align:center;}.logo.jsx-1330015200{height:1em;float:left;}.title.jsx-1330015200{margin:0;line-height:1.15;font-size:4rem;padding:5rem 0;}#s.jsx-1330015200{-webkit-animation:pulse-jsx-1330015200 5s infinite;animation:pulse-jsx-1330015200 5s infinite;}@-webkit-keyframes pulse-jsx-1330015200{20%{color:red;}30%{color:blue;}40%{color:green;}100%{color:yellow;}}@keyframes pulse-jsx-1330015200{20%{color:red;}30%{color:blue;}40%{color:green;}100%{color:yellow;}}#pro.jsx-1330015200{color:blue;}form.jsx-1330015200{font-size:30px;padding:0.00010rem 5em 5em 5em;margin:100px 100px 100px 100px;}Button.jsx-1330015200{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#new.jsx-1330015200{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2FwdGFcXERvY3VtZW50c1xcUmVhY3RQcm9qZWN0c1xcZHNjLWZpcmViYXNlLW1hc3RlclxccGFnZXNcXHNpZ25pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtSGtCLEFBR29CLEFBU1EsQUFJTixBQUtBLEFBVUQsQUFpQkUsQUFLSSxBQUtULEFBS1UsQUFHUixBQUlGLEFBTW1CLEFBSWhCLEFBR0UsQUFHQyxBQUdBLEFBSUwsQUFHSSxBQUtJLEFBR0QsU0E3Q0MsQUFZRCxDQVVqQixDQTdFYSxBQStESCxBQWlCVixBQVVGLENBOURpQixBQXVEZixDQUdBLENBekNxQixDQWdESyxHQTNDVCxBQVVuQixBQXlDQSxDQTVGQSxHQXVEQSxFQS9EK0IsRUFtRWQsQ0FaQyxRQVZsQixBQUtBLE1Ba0JpQixFQVpqQixHQXFDNkIsT0E1RmQsR0FvRWYsa0JBekR5QixBQUtKLEdBNkVyQixDQWxFZSxhQUNHLEVBb0VsQixDQXpCQSxhQTFDZ0IsY0FDTyxNQTdCRSx3Q0FnQkEsSUFjQSxFQW5CSixxQkFvQkEsbUJBQ3dCLGFBL0J4QiwwQkFnQ2tCLGNBckJ2QyxBQUtpQiw0QkFpQnNCLHlCQWhDdkMsSUFpQm1CLEtBZ0JvQyxZQWZyQyxnQkFDbEIsb0ZBZUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxzYXB0YVxcRG9jdW1lbnRzXFxSZWFjdFByb2plY3RzXFxkc2MtZmlyZWJhc2UtbWFzdGVyXFxwYWdlc1xcc2lnbmluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBTaWduVXBMaW5rIH0gZnJvbSBcIi4vc2lnbnVwXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7SW5kZXhMaW5rfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5cbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9zcmMvY29udGV4dHMvdXNlckNvbnRleHRcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5cbmNvbnN0IFNpZ25JbiA9ICgpID0+IHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG5cbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVTaWduSW4gPSAoKSA9PiB7XG4gICAgZmlyZWJhc2VcbiAgICAgIC5hdXRoKClcbiAgICAgIC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICBjb250ZXh0LnNldFVzZXIoeyBlbWFpbDogcmVzLnVzZXIuZW1haWwsIHVpZDogcmVzLnVzZXIudWlkIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgdG9hc3QoZXJyb3IubWVzc2FnZSwge1xuICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIlxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBoYW5kbGVTaWduSW4oKTtcbiAgfTtcblxuICBpZiAoY29udGV4dC51c2VyPy51aWQpIHtcbiAgICByZXR1cm4gcm91dGVyLnB1c2goJy9ob21lJyk7XG4gIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj48L21ldGE+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiPjwvbWV0YT5cbiAgICAgICA8dGl0bGU+TG9nIEluPC90aXRsZT5cbiAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvbWFzdGVyL3B1YmxpYy9mYXZpY29uLmljb1wiID48L2xpbms+XG4gICAgIDwvSGVhZD5cbiAgICAgPG1haW4+XG4gICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvYmxvYi9tYXN0ZXIvcHVibGljL2RzYy5wbmc/cmF3PXRydWVcIiBhbHQ9XCJkc2MgTG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIj48L2ltZz5cbiAgICAgICAgICA8Yj5EU0MgTlNFQyBCTE9HUy08aSBpZD1cInNcIj5Xcml0ZSBZb3VyIE93biBTdG9yeSE8L2k+PC9iPlxuICAgICAgICA8L2gxPlxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgPGNlbnRlcj48aDE+XG4gICAgICAgIExvZyBJbiBUbyBTdGFydCBZb3VyIEpvdXJuZXkgVG9kYXkhXG4gICAgICAgIDwvaDE+PC9jZW50ZXI+XG4gICAgICAgIDxjZW50ZXI+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvMU8yQlJaY0RnSWZEc0tNVGJHL2dpcGh5LmdpZlwiPjwvaW1nPjwvY2VudGVyPlxuICAgICAgICA8Y2VudGVyPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICBFbWFpbDo8aW5wdXRcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJzb21lb25lQGV4YW1wbGUuY29tXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICBQYXNzd29yZDo8aW5wdXRcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICA8Y2VudGVyPjxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgPC9idXR0b24+PC9jZW50ZXI+XG5cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIDxicj48L2JyPlxuICAgIDxjZW50ZXI+PFNpZ25VcExpbmsgLz48L2NlbnRlcj5cbiAgICA8YnI+PC9icj5cbiAgICA8Y2VudGVyPjxidXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMjAwcHhcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbmRleExpbmsvPlxuICAgICAgICAgIDwvYnV0dG9uPjwvY2VudGVyPlxuICAgIFxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgICAgIFxuICAgICAgPC9jZW50ZXI+XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2RzY25zZWMuY29tL1wiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL3Byb2NoZXRhMTk5OS9EU0MtTlNFQy1CbG9ncy9ibG9iL21hc3Rlci9wdWJsaWMvZHNjLnBuZz9yYXc9dHJ1ZVwiIGFsdD1cIkRTQyBMb2dvXCIgY2xhc3NOYW1lPVwibG9nb1wiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgZm9vdGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgZm9vdGVyIGltZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuZ3JpZCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgICB9XG5cbiAgICAgIC5jYXJkIHtcbiAgICAgICAgbWFyZ2luOiAycmVtO1xuICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XG4gICAgICAgIHBhZGRpbmc6IDNyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAgICBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xuICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xuICAgYm94LXNoYWRvdzogICAgICAgICBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcbiAgICAgIH1cblxuICAgICAgLmNhcmQ6aG92ZXIsXG4gICAgICAuY2FyZDpmb2N1cyxcbiAgICAgIC5jYXJkOmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIH1cblxuICAgICAgLmNhcmQgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgfVxuICAgICAgI2x7XG4gICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICB9XG4gICAgICAubG9nbyB7XG4gICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XG4gICAgICB9XG4gICAgICAjc3tcbiAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSA1cyBpbmZpbml0ZTtcbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xuICAgICAgICAyMCUge1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICAgICAgMzAle1xuICAgICAgICAgICAgY29sb3I6Ymx1ZTsgXG4gICAgICAgIH1cbiAgICAgICAgNDAle1xuICAgICAgICAgICAgY29sb3I6Z3JlZW47XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgY29sb3I6IHllbGxvdztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgI3Byb3tcbiAgICAgICAgY29sb3I6Ymx1ZTtcbiAgICAgIH1cbiAgICAgIGZvcm17XG4gICAgICAgIGZvbnQtc2l6ZTozMHB4O1xuICAgIHBhZGRpbmc6MC4wMDAxMHJlbSA1ZW0gNWVtIDVlbTsgICAgICAgICBcbiAgICBtYXJnaW46IDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4O1xuICAgICAgfVxuICAgICAgQnV0dG9ue1xuICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICB9XG4gICAgICAjbmV3e1xuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbkluXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\sapta\\\\Documents\\\\ReactProjects\\\\dsc-firebase-master\\\\pages\\\\signin.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3379920139",
    __self: _this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2FwdGFcXERvY3VtZW50c1xcUmVhY3RQcm9qZWN0c1xcZHNjLWZpcmViYXNlLW1hc3RlclxccGFnZXNcXHNpZ25pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2TnlCLEFBSXFCLEFBUVksVUFQYixTQUdHLEdBS2QsbUlBSkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxzYXB0YVxcRG9jdW1lbnRzXFxSZWFjdFByb2plY3RzXFxkc2MtZmlyZWJhc2UtbWFzdGVyXFxwYWdlc1xcc2lnbmluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBTaWduVXBMaW5rIH0gZnJvbSBcIi4vc2lnbnVwXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7SW5kZXhMaW5rfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5cbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9zcmMvY29udGV4dHMvdXNlckNvbnRleHRcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5cbmNvbnN0IFNpZ25JbiA9ICgpID0+IHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG5cbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVTaWduSW4gPSAoKSA9PiB7XG4gICAgZmlyZWJhc2VcbiAgICAgIC5hdXRoKClcbiAgICAgIC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICBjb250ZXh0LnNldFVzZXIoeyBlbWFpbDogcmVzLnVzZXIuZW1haWwsIHVpZDogcmVzLnVzZXIudWlkIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgdG9hc3QoZXJyb3IubWVzc2FnZSwge1xuICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIlxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBoYW5kbGVTaWduSW4oKTtcbiAgfTtcblxuICBpZiAoY29udGV4dC51c2VyPy51aWQpIHtcbiAgICByZXR1cm4gcm91dGVyLnB1c2goJy9ob21lJyk7XG4gIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj48L21ldGE+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiPjwvbWV0YT5cbiAgICAgICA8dGl0bGU+TG9nIEluPC90aXRsZT5cbiAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvbWFzdGVyL3B1YmxpYy9mYXZpY29uLmljb1wiID48L2xpbms+XG4gICAgIDwvSGVhZD5cbiAgICAgPG1haW4+XG4gICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvYmxvYi9tYXN0ZXIvcHVibGljL2RzYy5wbmc/cmF3PXRydWVcIiBhbHQ9XCJkc2MgTG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIj48L2ltZz5cbiAgICAgICAgICA8Yj5EU0MgTlNFQyBCTE9HUy08aSBpZD1cInNcIj5Xcml0ZSBZb3VyIE93biBTdG9yeSE8L2k+PC9iPlxuICAgICAgICA8L2gxPlxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgPGNlbnRlcj48aDE+XG4gICAgICAgIExvZyBJbiBUbyBTdGFydCBZb3VyIEpvdXJuZXkgVG9kYXkhXG4gICAgICAgIDwvaDE+PC9jZW50ZXI+XG4gICAgICAgIDxjZW50ZXI+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvMU8yQlJaY0RnSWZEc0tNVGJHL2dpcGh5LmdpZlwiPjwvaW1nPjwvY2VudGVyPlxuICAgICAgICA8Y2VudGVyPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICBFbWFpbDo8aW5wdXRcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJzb21lb25lQGV4YW1wbGUuY29tXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICBQYXNzd29yZDo8aW5wdXRcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICA8Y2VudGVyPjxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgPC9idXR0b24+PC9jZW50ZXI+XG5cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIDxicj48L2JyPlxuICAgIDxjZW50ZXI+PFNpZ25VcExpbmsgLz48L2NlbnRlcj5cbiAgICA8YnI+PC9icj5cbiAgICA8Y2VudGVyPjxidXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMjAwcHhcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbmRleExpbmsvPlxuICAgICAgICAgIDwvYnV0dG9uPjwvY2VudGVyPlxuICAgIFxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgICAgIFxuICAgICAgPC9jZW50ZXI+XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2RzY25zZWMuY29tL1wiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL3Byb2NoZXRhMTk5OS9EU0MtTlNFQy1CbG9ncy9ibG9iL21hc3Rlci9wdWJsaWMvZHNjLnBuZz9yYXc9dHJ1ZVwiIGFsdD1cIkRTQyBMb2dvXCIgY2xhc3NOYW1lPVwibG9nb1wiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgZm9vdGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgZm9vdGVyIGltZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuZ3JpZCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgICB9XG5cbiAgICAgIC5jYXJkIHtcbiAgICAgICAgbWFyZ2luOiAycmVtO1xuICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XG4gICAgICAgIHBhZGRpbmc6IDNyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAgICBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xuICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xuICAgYm94LXNoYWRvdzogICAgICAgICBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcbiAgICAgIH1cblxuICAgICAgLmNhcmQ6aG92ZXIsXG4gICAgICAuY2FyZDpmb2N1cyxcbiAgICAgIC5jYXJkOmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIH1cblxuICAgICAgLmNhcmQgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgfVxuICAgICAgI2x7XG4gICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICB9XG4gICAgICAubG9nbyB7XG4gICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XG4gICAgICB9XG4gICAgICAjc3tcbiAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSA1cyBpbmZpbml0ZTtcbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xuICAgICAgICAyMCUge1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICAgICAgMzAle1xuICAgICAgICAgICAgY29sb3I6Ymx1ZTsgXG4gICAgICAgIH1cbiAgICAgICAgNDAle1xuICAgICAgICAgICAgY29sb3I6Z3JlZW47XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgY29sb3I6IHllbGxvdztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgI3Byb3tcbiAgICAgICAgY29sb3I6Ymx1ZTtcbiAgICAgIH1cbiAgICAgIGZvcm17XG4gICAgICAgIGZvbnQtc2l6ZTozMHB4O1xuICAgIHBhZGRpbmc6MC4wMDAxMHJlbSA1ZW0gNWVtIDVlbTsgICAgICAgICBcbiAgICBtYXJnaW46IDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4O1xuICAgICAgfVxuICAgICAgQnV0dG9ue1xuICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICB9XG4gICAgICAjbmV3e1xuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbkluXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\sapta\\\\Documents\\\\ReactProjects\\\\dsc-firebase-master\\\\pages\\\\signin.js */"));
};

_s(SignIn, "++UFKKfRJYKj1RSd4ekGw4xU0KI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = SignIn;
/* harmony default export */ __webpack_exports__["default"] = (SignIn);

var _c;

$RefreshReg$(_c, "SignIn");

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

/***/ }),

/***/ "./src/contexts/userContext.js":
/*!*************************************!*\
  !*** ./src/contexts/userContext.js ***!
  \*************************************/
/*! exports provided: UserContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var UserContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dHMvdXNlckNvbnRleHQuanMiXSwibmFtZXMiOlsiU2lnbkluIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTaWduSW4iLCJmaXJlYmFzZSIsImF1dGgiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic2V0VXNlciIsInVzZXIiLCJ1aWQiLCJlcnJvciIsInRvYXN0IiwibWVzc2FnZSIsInR5cGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwidGFyZ2V0IiwidmFsdWUiLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsImNyZWF0ZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUE7O0FBRW5CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdDLHdEQUFVLENBQUNDLHFFQUFELENBQTFCOztBQUhtQixrQkFLT0Msc0RBQVEsQ0FBQyxFQUFELENBTGY7QUFBQSxNQUtaQyxLQUxZO0FBQUEsTUFLTEMsUUFMSzs7QUFBQSxtQkFNYUYsc0RBQVEsQ0FBQyxFQUFELENBTnJCO0FBQUEsTUFNWkcsUUFOWTtBQUFBLE1BTUZDLFdBTkU7O0FBUW5CLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJDLHVEQUFRLENBQ0xDLElBREgs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aG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgU2lnblVwTGluayB9IGZyb20gXCIuL3NpZ251cFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge0luZGV4TGlua30gZnJvbSBcIi4vaW5kZXhcIjtcblxuXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vc3JjL2NvbnRleHRzL3VzZXJDb250ZXh0XCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuXG5jb25zdCBTaWduSW4gPSAoKSA9PiB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlU2lnbkluID0gKCkgPT4ge1xuICAgIGZpcmViYXNlXG4gICAgICAuYXV0aCgpXG4gICAgICAuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgY29udGV4dC5zZXRVc2VyKHsgZW1haWw6IHJlcy51c2VyLmVtYWlsLCB1aWQ6IHJlcy51c2VyLnVpZCB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHRvYXN0KGVycm9yLm1lc3NhZ2UsIHtcbiAgICAgICAgICB0eXBlOiBcImVycm9yXCJcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaGFuZGxlU2lnbkluKCk7XG4gIH07XG5cbiAgaWYgKGNvbnRleHQudXNlcj8udWlkKSB7XG4gICAgcmV0dXJuIHJvdXRlci5wdXNoKCcvaG9tZScpO1xuICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCI+PC9tZXRhPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIj48L21ldGE+XG4gICAgICAgPHRpdGxlPkxvZyBJbjwvdGl0bGU+XG4gICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL21hc3Rlci9wdWJsaWMvZmF2aWNvbi5pY29cIiA+PC9saW5rPlxuICAgICA8L0hlYWQ+XG4gICAgIDxtYWluPlxuICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL2Jsb2IvbWFzdGVyL3B1YmxpYy9kc2MucG5nP3Jhdz10cnVlXCIgYWx0PVwiZHNjIExvZ29cIiBjbGFzc05hbWU9XCJsb2dvXCI+PC9pbWc+XG4gICAgICAgICAgPGI+RFNDIE5TRUMgQkxPR1MtPGkgaWQ9XCJzXCI+V3JpdGUgWW91ciBPd24gU3RvcnkhPC9pPjwvYj5cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIDxjZW50ZXI+PGgxPlxuICAgICAgICBMb2cgSW4gVG8gU3RhcnQgWW91ciBKb3VybmV5IFRvZGF5IVxuICAgICAgICA8L2gxPjwvY2VudGVyPlxuICAgICAgICA8Y2VudGVyPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vbWVkaWEuZ2lwaHkuY29tL21lZGlhLzFPMkJSWmNEZ0lmRHNLTVRiRy9naXBoeS5naWZcIj48L2ltZz48L2NlbnRlcj5cbiAgICAgICAgPGNlbnRlcj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgRW1haWw6PGlucHV0XG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwic29tZW9uZUBleGFtcGxlLmNvbVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgUGFzc3dvcmQ6PGlucHV0XG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAvPlxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgPGNlbnRlcj48YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICBTaWduIEluXG4gICAgICAgIDwvYnV0dG9uPjwvY2VudGVyPlxuXG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICA8YnI+PC9icj5cbiAgICA8Y2VudGVyPjxTaWduVXBMaW5rIC8+PC9jZW50ZXI+XG4gICAgPGJyPjwvYnI+XG4gICAgPGNlbnRlcj48YnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwMHB4XCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5kZXhMaW5rLz5cbiAgICAgICAgICA8L2J1dHRvbj48L2NlbnRlcj5cbiAgICBcbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICAgICBcbiAgICAgIDwvY2VudGVyPlxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kc2Nuc2VjLmNvbS9cIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvYmxvYi9tYXN0ZXIvcHVibGljL2RzYy5wbmc/cmF3PXRydWVcIiBhbHQ9XCJEU0MgTG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGZvb3RlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciBpbWcge1xuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgfVxuXG4gICAgICBmb290ZXIgYSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmdyaWQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgICAgfVxuXG4gICAgICAuY2FyZCB7XG4gICAgICAgIG1hcmdpbjogMnJlbTtcbiAgICAgICAgZmxleC1iYXNpczogNDUlO1xuICAgICAgICBwYWRkaW5nOiAzcmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgIC1tb3otYm94LXNoYWRvdzogICAgaW5zZXQgMCAwIDEwcHggIzAwMDAwMDtcbiAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggIzAwMDAwMDtcbiAgIGJveC1zaGFkb3c6ICAgICAgICAgaW5zZXQgMCAwIDEwcHggIzAwMDAwMDtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkOmhvdmVyLFxuICAgICAgLmNhcmQ6Zm9jdXMsXG4gICAgICAuY2FyZDphY3RpdmUge1xuICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xuICAgICAgfVxuXG4gICAgICAuY2FyZCBoMyB7XG4gICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9XG5cbiAgICAgIC5jYXJkIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIH1cbiAgICAgICNse1xuICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgfVxuICAgICAgLmxvZ28ge1xuICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgcGFkZGluZzogNXJlbSAwO1xuICAgICAgfVxuICAgICAgI3N7XG4gICAgICAgIGFuaW1hdGlvbjogcHVsc2UgNXMgaW5maW5pdGU7XG4gICAgICB9XG4gICAgICBAa2V5ZnJhbWVzIHB1bHNlIHtcbiAgICAgICAgMjAlIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgICAgIDMwJXtcbiAgICAgICAgICAgIGNvbG9yOmJsdWU7IFxuICAgICAgICB9XG4gICAgICAgIDQwJXtcbiAgICAgICAgICAgIGNvbG9yOmdyZWVuO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICNwcm97XG4gICAgICAgIGNvbG9yOmJsdWU7XG4gICAgICB9XG4gICAgICBmb3Jte1xuICAgICAgICBmb250LXNpemU6MzBweDtcbiAgICBwYWRkaW5nOjAuMDAwMTByZW0gNWVtIDVlbSA1ZW07ICAgICAgICAgXG4gICAgbWFyZ2luOiAxMDBweCAxMDBweCAxMDBweCAxMDBweDtcbiAgICAgIH1cbiAgICAgIEJ1dHRvbntcbiAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgICAgfVxuICAgICAgI25ld3tcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25JblxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9