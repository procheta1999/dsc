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
/* harmony import */ var _src_contexts_UserContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/contexts/UserContext */ "./src/contexts/UserContext.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Procheta Bhattachary\\dsc_blogs\\pages\\signin.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var SignIn = function SignIn() {
  _s();

  var _context$user;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_src_contexts_UserContext__WEBPACK_IMPORTED_MODULE_8__["UserContext"]);

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
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("meta", {
    charset: "UTF-8",
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), __jsx("title", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 8
    }
  }, "Log In"), __jsx("link", {
    rel: "icon",
    href: "https://raw.githubusercontent.com/procheta1999/DSC-NSEC-Blogs/master/public/favicon.ico",
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 8
    }
  })), __jsx("main", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 6
    }
  }, __jsx("h1", {
    className: "jsx-1330015200" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/dsc.png?raw=true",
    alt: "dsc Logo",
    className: "jsx-1330015200" + " " + "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }), __jsx("b", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "DSC NSEC BLOGS-", __jsx("i", {
    id: "s",
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }, "Write Your Own Story!"))), __jsx("br", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }), __jsx("center", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, "Log In To Start Your Journey Today!")), __jsx("center", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "https://media.giphy.com/media/1O2BRZcDgIfDsKMTbG/giphy.gif",
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  })), __jsx("center", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1330015200" + " " + "grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1330015200" + " " + "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
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
      lineNumber: 70,
      columnNumber: 15
    }
  }), __jsx("br", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }), __jsx("br", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
      lineNumber: 78,
      columnNumber: 18
    }
  }), __jsx("br", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }), __jsx("center", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "submit",
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, "Sign In")), __jsx("br", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }), __jsx("br", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }), __jsx("center", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, __jsx(_signup__WEBPACK_IMPORTED_MODULE_3__["SignUpLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  })), __jsx("br", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }), __jsx("center", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
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
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx(_index__WEBPACK_IMPORTED_MODULE_6__["IndexLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  })))))))), __jsx("footer", {
    className: "jsx-1330015200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/dsc.png?raw=true",
    alt: "DSC Logo",
    className: "jsx-1330015200" + " " + "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2428873762",
    __self: _this
  }, "footer.jsx-1330015200{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1330015200 img.jsx-1330015200{margin-left:0.5rem;}footer.jsx-1330015200 a.jsx-1330015200{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.grid.jsx-1330015200{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:1000px;margin-top:4rem;}.card.jsx-1330015200{margin:2rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:3rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid black;border-radius:20px;-moz-box-shadow:inset 0 0 10px #000000;-webkit-box-shadow:inset 0 0 10px #000000;box-shadow:inset 0 0 10px #000000;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}.card.jsx-1330015200:hover,.card.jsx-1330015200:focus,.card.jsx-1330015200:active{color:#0070f3;border-color:#0070f3;}.card.jsx-1330015200 h3.jsx-1330015200{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-1330015200 p.jsx-1330015200{margin:0;font-size:1.25rem;line-height:1.5;}#l.jsx-1330015200{text-align:center;}.logo.jsx-1330015200{height:1em;float:left;}.title.jsx-1330015200{margin:0;line-height:1.15;font-size:4rem;padding:5rem 0;}#s.jsx-1330015200{-webkit-animation:pulse-jsx-1330015200 5s infinite;animation:pulse-jsx-1330015200 5s infinite;}@-webkit-keyframes pulse-jsx-1330015200{20%{color:red;}30%{color:blue;}40%{color:green;}100%{color:yellow;}}@keyframes pulse-jsx-1330015200{20%{color:red;}30%{color:blue;}40%{color:green;}100%{color:yellow;}}#pro.jsx-1330015200{color:blue;}form.jsx-1330015200{font-size:30px;padding:0.00010rem 5em 5em 5em;margin:100px 100px 100px 100px;}Button.jsx-1330015200{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#new.jsx-1330015200{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUHJvY2hldGEgQmhhdHRhY2hhcnlcXGRzY19ibG9nc1xccGFnZXNcXHNpZ25pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvSGtCLEFBR29CLEFBU1EsQUFJTixBQUtBLEFBVUQsQUFpQkUsQUFLSSxBQUtULEFBS1UsQUFHUixBQUlGLEFBTW1CLEFBSWhCLEFBR0UsQUFHQyxBQUdBLEFBSUwsQUFHSSxBQUtJLEFBR0QsU0E3Q0MsQUFZRCxDQVVqQixDQTdFYSxBQStESCxBQWlCVixBQVVGLENBOURpQixBQXVEZixDQUdBLENBekNxQixDQWdESyxHQTNDVCxBQVVuQixBQXlDQSxDQTVGQSxHQXVEQSxFQS9EK0IsRUFtRWQsQ0FaQyxRQVZsQixBQUtBLE1Ba0JpQixFQVpqQixHQXFDNkIsT0E1RmQsR0FvRWYsa0JBekR5QixBQUtKLEdBNkVyQixDQWxFZSxhQUNHLEVBb0VsQixDQXpCQSxhQTFDZ0IsY0FDTyxNQTdCRSx3Q0FnQkEsSUFjQSxFQW5CSixxQkFvQkEsbUJBQ3dCLGFBL0J4QiwwQkFnQ2tCLGNBckJ2QyxBQUtpQiw0QkFpQnNCLHlCQWhDdkMsSUFpQm1CLEtBZ0JvQyxZQWZyQyxnQkFDbEIsb0ZBZUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxQcm9jaGV0YSBCaGF0dGFjaGFyeVxcZHNjX2Jsb2dzXFxwYWdlc1xcc2lnbmluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU2lnblVwTGluayB9IGZyb20gXCIuL3NpZ251cFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge0luZGV4TGlua30gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcblxyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9zcmMvY29udGV4dHMvVXNlckNvbnRleHRcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcbmNvbnN0IFNpZ25JbiA9ICgpID0+IHtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2lnbkluID0gKCkgPT4ge1xyXG4gICAgZmlyZWJhc2VcclxuICAgICAgLmF1dGgoKVxyXG4gICAgICAuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgY29udGV4dC5zZXRVc2VyKHsgZW1haWw6IHJlcy51c2VyLmVtYWlsLCB1aWQ6IHJlcy51c2VyLnVpZCB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgdG9hc3QoZXJyb3IubWVzc2FnZSwge1xyXG4gICAgICAgICAgdHlwZTogXCJlcnJvclwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaGFuZGxlU2lnbkluKCk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGNvbnRleHQudXNlcj8udWlkKSB7XHJcbiAgICByZXR1cm4gcm91dGVyLnB1c2goJy9ob21lJyk7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj48L21ldGE+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+PC9tZXRhPlxyXG4gICAgICAgPHRpdGxlPkxvZyBJbjwvdGl0bGU+XHJcbiAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvbWFzdGVyL3B1YmxpYy9mYXZpY29uLmljb1wiID48L2xpbms+XHJcbiAgICAgPC9IZWFkPlxyXG4gICAgIDxtYWluPlxyXG4gICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL3Byb2NoZXRhMTk5OS9EU0MtTlNFQy1CbG9ncy9ibG9iL21hc3Rlci9wdWJsaWMvZHNjLnBuZz9yYXc9dHJ1ZVwiIGFsdD1cImRzYyBMb2dvXCIgY2xhc3NOYW1lPVwibG9nb1wiPjwvaW1nPlxyXG4gICAgICAgICAgPGI+RFNDIE5TRUMgQkxPR1MtPGkgaWQ9XCJzXCI+V3JpdGUgWW91ciBPd24gU3RvcnkhPC9pPjwvYj5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxjZW50ZXI+PGgxPlxyXG4gICAgICAgIExvZyBJbiBUbyBTdGFydCBZb3VyIEpvdXJuZXkgVG9kYXkhXHJcbiAgICAgICAgPC9oMT48L2NlbnRlcj5cclxuICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvMU8yQlJaY0RnSWZEc0tNVGJHL2dpcGh5LmdpZlwiPjwvaW1nPjwvY2VudGVyPlxyXG4gICAgICAgIDxjZW50ZXI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgRW1haWw6PGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJzb21lb25lQGV4YW1wbGUuY29tXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIFBhc3N3b3JkOjxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGNlbnRlcj48YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgIFNpZ24gSW5cclxuICAgICAgICA8L2J1dHRvbj48L2NlbnRlcj5cclxuXHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICA8Y2VudGVyPjxTaWduVXBMaW5rIC8+PC9jZW50ZXI+XHJcbiAgICA8YnI+PC9icj5cclxuICAgIDxjZW50ZXI+PGJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwMHB4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEluZGV4TGluay8+XHJcbiAgICAgICAgICA8L2J1dHRvbj48L2NlbnRlcj5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICAgICAgXHJcbiAgICAgIDwvY2VudGVyPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2RzY25zZWMuY29tL1wiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL2Jsb2IvbWFzdGVyL3B1YmxpYy9kc2MucG5nP3Jhdz10cnVlXCIgYWx0PVwiRFNDIExvZ29cIiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvb3RlciBpbWcge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvb3RlciBhIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmdyaWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJkIHtcclxuICAgICAgICBtYXJnaW46IDJyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczogNDUlO1xyXG4gICAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAgICBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xyXG4gICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XHJcbiAgIGJveC1zaGFkb3c6ICAgICAgICAgaW5zZXQgMCAwIDEwcHggIzAwMDAwMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQ6aG92ZXIsXHJcbiAgICAgIC5jYXJkOmZvY3VzLFxyXG4gICAgICAuY2FyZDphY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQgaDMge1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICB9XHJcbiAgICAgICNse1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmxvZ28ge1xyXG4gICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcclxuICAgICAgfVxyXG4gICAgICAjc3tcclxuICAgICAgICBhbmltYXRpb246IHB1bHNlIDVzIGluZmluaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgICAgIDIwJSB7XHJcbiAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAzMCV7XHJcbiAgICAgICAgICAgIGNvbG9yOmJsdWU7IFxyXG4gICAgICAgIH1cclxuICAgICAgICA0MCV7XHJcbiAgICAgICAgICAgIGNvbG9yOmdyZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICNwcm97XHJcbiAgICAgICAgY29sb3I6Ymx1ZTtcclxuICAgICAgfVxyXG4gICAgICBmb3Jte1xyXG4gICAgICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgcGFkZGluZzowLjAwMDEwcmVtIDVlbSA1ZW0gNWVtOyAgICAgICAgIFxyXG4gICAgbWFyZ2luOiAxMDBweCAxMDBweCAxMDBweCAxMDBweDtcclxuICAgICAgfVxyXG4gICAgICBCdXR0b257XHJcbiAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgICNuZXd7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JblxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Procheta Bhattachary\\\\dsc_blogs\\\\pages\\\\signin.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3379920139",
    __self: _this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUHJvY2hldGEgQmhhdHRhY2hhcnlcXGRzY19ibG9nc1xccGFnZXNcXHNpZ25pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4TnlCLEFBSXFCLEFBUVksVUFQYixTQUdHLEdBS2QsbUlBSkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxQcm9jaGV0YSBCaGF0dGFjaGFyeVxcZHNjX2Jsb2dzXFxwYWdlc1xcc2lnbmluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU2lnblVwTGluayB9IGZyb20gXCIuL3NpZ251cFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge0luZGV4TGlua30gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcblxyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9zcmMvY29udGV4dHMvVXNlckNvbnRleHRcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcbmNvbnN0IFNpZ25JbiA9ICgpID0+IHtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2lnbkluID0gKCkgPT4ge1xyXG4gICAgZmlyZWJhc2VcclxuICAgICAgLmF1dGgoKVxyXG4gICAgICAuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgY29udGV4dC5zZXRVc2VyKHsgZW1haWw6IHJlcy51c2VyLmVtYWlsLCB1aWQ6IHJlcy51c2VyLnVpZCB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgdG9hc3QoZXJyb3IubWVzc2FnZSwge1xyXG4gICAgICAgICAgdHlwZTogXCJlcnJvclwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaGFuZGxlU2lnbkluKCk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGNvbnRleHQudXNlcj8udWlkKSB7XHJcbiAgICByZXR1cm4gcm91dGVyLnB1c2goJy9ob21lJyk7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj48L21ldGE+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+PC9tZXRhPlxyXG4gICAgICAgPHRpdGxlPkxvZyBJbjwvdGl0bGU+XHJcbiAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvbWFzdGVyL3B1YmxpYy9mYXZpY29uLmljb1wiID48L2xpbms+XHJcbiAgICAgPC9IZWFkPlxyXG4gICAgIDxtYWluPlxyXG4gICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL3Byb2NoZXRhMTk5OS9EU0MtTlNFQy1CbG9ncy9ibG9iL21hc3Rlci9wdWJsaWMvZHNjLnBuZz9yYXc9dHJ1ZVwiIGFsdD1cImRzYyBMb2dvXCIgY2xhc3NOYW1lPVwibG9nb1wiPjwvaW1nPlxyXG4gICAgICAgICAgPGI+RFNDIE5TRUMgQkxPR1MtPGkgaWQ9XCJzXCI+V3JpdGUgWW91ciBPd24gU3RvcnkhPC9pPjwvYj5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxjZW50ZXI+PGgxPlxyXG4gICAgICAgIExvZyBJbiBUbyBTdGFydCBZb3VyIEpvdXJuZXkgVG9kYXkhXHJcbiAgICAgICAgPC9oMT48L2NlbnRlcj5cclxuICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvMU8yQlJaY0RnSWZEc0tNVGJHL2dpcGh5LmdpZlwiPjwvaW1nPjwvY2VudGVyPlxyXG4gICAgICAgIDxjZW50ZXI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgRW1haWw6PGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJzb21lb25lQGV4YW1wbGUuY29tXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIFBhc3N3b3JkOjxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGNlbnRlcj48YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgIFNpZ24gSW5cclxuICAgICAgICA8L2J1dHRvbj48L2NlbnRlcj5cclxuXHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICA8Y2VudGVyPjxTaWduVXBMaW5rIC8+PC9jZW50ZXI+XHJcbiAgICA8YnI+PC9icj5cclxuICAgIDxjZW50ZXI+PGJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwMHB4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEluZGV4TGluay8+XHJcbiAgICAgICAgICA8L2J1dHRvbj48L2NlbnRlcj5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICAgICAgXHJcbiAgICAgIDwvY2VudGVyPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2RzY25zZWMuY29tL1wiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL2Jsb2IvbWFzdGVyL3B1YmxpYy9kc2MucG5nP3Jhdz10cnVlXCIgYWx0PVwiRFNDIExvZ29cIiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvb3RlciBpbWcge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvb3RlciBhIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmdyaWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJkIHtcclxuICAgICAgICBtYXJnaW46IDJyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczogNDUlO1xyXG4gICAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAgICBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xyXG4gICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XHJcbiAgIGJveC1zaGFkb3c6ICAgICAgICAgaW5zZXQgMCAwIDEwcHggIzAwMDAwMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQ6aG92ZXIsXHJcbiAgICAgIC5jYXJkOmZvY3VzLFxyXG4gICAgICAuY2FyZDphY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQgaDMge1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICB9XHJcbiAgICAgICNse1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmxvZ28ge1xyXG4gICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcclxuICAgICAgfVxyXG4gICAgICAjc3tcclxuICAgICAgICBhbmltYXRpb246IHB1bHNlIDVzIGluZmluaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgICAgIDIwJSB7XHJcbiAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAzMCV7XHJcbiAgICAgICAgICAgIGNvbG9yOmJsdWU7IFxyXG4gICAgICAgIH1cclxuICAgICAgICA0MCV7XHJcbiAgICAgICAgICAgIGNvbG9yOmdyZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICNwcm97XHJcbiAgICAgICAgY29sb3I6Ymx1ZTtcclxuICAgICAgfVxyXG4gICAgICBmb3Jte1xyXG4gICAgICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgcGFkZGluZzowLjAwMDEwcmVtIDVlbSA1ZW0gNWVtOyAgICAgICAgIFxyXG4gICAgbWFyZ2luOiAxMDBweCAxMDBweCAxMDBweCAxMDBweDtcclxuICAgICAgfVxyXG4gICAgICBCdXR0b257XHJcbiAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgICNuZXd7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JblxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Procheta Bhattachary\\\\dsc_blogs\\\\pages\\\\signin.js */"));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLmpzIl0sIm5hbWVzIjpbIlNpZ25JbiIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlU2lnbkluIiwiZmlyZWJhc2UiLCJhdXRoIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsInNldFVzZXIiLCJ1c2VyIiwidWlkIiwiZXJyb3IiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJ0eXBlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luVG9wIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUE7O0FBRW5CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdDLHdEQUFVLENBQUNDLHFFQUFELENBQTFCOztBQUhtQixrQkFLT0Msc0RBQVEsQ0FBQyxFQUFELENBTGY7QUFBQSxNQUtaQyxLQUxZO0FBQUEsTUFLTEMsUUFMSzs7QUFBQSxtQkFNYUYsc0RBQVEsQ0FBQyxFQUFELENBTnJCO0FBQUEsTUFNWkcsUUFOWTtBQUFBLE1BTUZDLFdBTkU7O0FBUW5CLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJDLHVEQUFRLENBQ0xDLElBREgsR0FFR0MsMEJBRkgsQ0FFOEJQLEtBRjlCLEVBRXFDRSxRQUZyQyxFQUdHTSxJQUhILENBR1EsVUFBQUMsR0FB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUTtBQUNBLFdBQU8sRUFBQyxXQURSO0FBRUEsU0FBSyxFQUFDLFNBRk47QUFHQSxRQUFJLEVBQUMsUUFITDtBQUlBLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUUsTUFBYjtBQUFxQkMsV0FBSyxFQUFFO0FBQTVCLEtBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUEsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkEsQ0FBUixDQXhCRSxDQURBLENBREEsQ0FERSxDQVhILENBUEMsRUE0REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsc0JBRFA7QUFFRSxVQUFNLEVBQUMsUUFGVDtBQUdFLE9BQUcsRUFBQyxxQkFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFLLE9BQUcsRUFBQyxvRkFBVDtBQUE4RixPQUFHLEVBQUMsVUFBbEc7QUFBQSx3Q0FBdUgsTUFBdkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBREYsQ0E1REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNG1TQURGO0FBZ01ELENBbE9IOztHQUFNakMsTTtVQUVXRSxxRDs7O0tBRlhGLE07QUFvT1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi43MWQ1Zjk0NzQ0ZmU4NDU4NTdiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU2lnblVwTGluayB9IGZyb20gXCIuL3NpZ251cFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge0luZGV4TGlua30gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcblxyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9zcmMvY29udGV4dHMvVXNlckNvbnRleHRcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcbmNvbnN0IFNpZ25JbiA9ICgpID0+IHtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2lnbkluID0gKCkgPT4ge1xyXG4gICAgZmlyZWJhc2VcclxuICAgICAgLmF1dGgoKVxyXG4gICAgICAuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgY29udGV4dC5zZXRVc2VyKHsgZW1haWw6IHJlcy51c2VyLmVtYWlsLCB1aWQ6IHJlcy51c2VyLnVpZCB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgdG9hc3QoZXJyb3IubWVzc2FnZSwge1xyXG4gICAgICAgICAgdHlwZTogXCJlcnJvclwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaGFuZGxlU2lnbkluKCk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGNvbnRleHQudXNlcj8udWlkKSB7XHJcbiAgICByZXR1cm4gcm91dGVyLnB1c2goJy9ob21lJyk7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj48L21ldGE+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+PC9tZXRhPlxyXG4gICAgICAgPHRpdGxlPkxvZyBJbjwvdGl0bGU+XHJcbiAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvbWFzdGVyL3B1YmxpYy9mYXZpY29uLmljb1wiID48L2xpbms+XHJcbiAgICAgPC9IZWFkPlxyXG4gICAgIDxtYWluPlxyXG4gICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL3Byb2NoZXRhMTk5OS9EU0MtTlNFQy1CbG9ncy9ibG9iL21hc3Rlci9wdWJsaWMvZHNjLnBuZz9yYXc9dHJ1ZVwiIGFsdD1cImRzYyBMb2dvXCIgY2xhc3NOYW1lPVwibG9nb1wiPjwvaW1nPlxyXG4gICAgICAgICAgPGI+RFNDIE5TRUMgQkxPR1MtPGkgaWQ9XCJzXCI+V3JpdGUgWW91ciBPd24gU3RvcnkhPC9pPjwvYj5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxjZW50ZXI+PGgxPlxyXG4gICAgICAgIExvZyBJbiBUbyBTdGFydCBZb3VyIEpvdXJuZXkgVG9kYXkhXHJcbiAgICAgICAgPC9oMT48L2NlbnRlcj5cclxuICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvMU8yQlJaY0RnSWZEc0tNVGJHL2dpcGh5LmdpZlwiPjwvaW1nPjwvY2VudGVyPlxyXG4gICAgICAgIDxjZW50ZXI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgRW1haWw6PGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJzb21lb25lQGV4YW1wbGUuY29tXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIFBhc3N3b3JkOjxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGNlbnRlcj48YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgIFNpZ24gSW5cclxuICAgICAgICA8L2J1dHRvbj48L2NlbnRlcj5cclxuXHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICA8Y2VudGVyPjxTaWduVXBMaW5rIC8+PC9jZW50ZXI+XHJcbiAgICA8YnI+PC9icj5cclxuICAgIDxjZW50ZXI+PGJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwMHB4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEluZGV4TGluay8+XHJcbiAgICAgICAgICA8L2J1dHRvbj48L2NlbnRlcj5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICAgICAgXHJcbiAgICAgIDwvY2VudGVyPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2RzY25zZWMuY29tL1wiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL2Jsb2IvbWFzdGVyL3B1YmxpYy9kc2MucG5nP3Jhdz10cnVlXCIgYWx0PVwiRFNDIExvZ29cIiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvb3RlciBpbWcge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvb3RlciBhIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmdyaWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJkIHtcclxuICAgICAgICBtYXJnaW46IDJyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczogNDUlO1xyXG4gICAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAgICBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xyXG4gICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XHJcbiAgIGJveC1zaGFkb3c6ICAgICAgICAgaW5zZXQgMCAwIDEwcHggIzAwMDAwMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQ6aG92ZXIsXHJcbiAgICAgIC5jYXJkOmZvY3VzLFxyXG4gICAgICAuY2FyZDphY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQgaDMge1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICB9XHJcbiAgICAgICNse1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmxvZ28ge1xyXG4gICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcclxuICAgICAgfVxyXG4gICAgICAjc3tcclxuICAgICAgICBhbmltYXRpb246IHB1bHNlIDVzIGluZmluaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgICAgIDIwJSB7XHJcbiAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAzMCV7XHJcbiAgICAgICAgICAgIGNvbG9yOmJsdWU7IFxyXG4gICAgICAgIH1cclxuICAgICAgICA0MCV7XHJcbiAgICAgICAgICAgIGNvbG9yOmdyZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICNwcm97XHJcbiAgICAgICAgY29sb3I6Ymx1ZTtcclxuICAgICAgfVxyXG4gICAgICBmb3Jte1xyXG4gICAgICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgcGFkZGluZzowLjAwMDEwcmVtIDVlbSA1ZW0gNWVtOyAgICAgICAgIFxyXG4gICAgbWFyZ2luOiAxMDBweCAxMDBweCAxMDBweCAxMDBweDtcclxuICAgICAgfVxyXG4gICAgICBCdXR0b257XHJcbiAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgICNuZXd7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JblxyXG4iXSwic291cmNlUm9vdCI6IiJ9