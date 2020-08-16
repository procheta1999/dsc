webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/feed.js":
/*!***********************!*\
  !*** ./pages/feed.js ***!
  \***********************/
/*! exports provided: default, FeedLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedLink", function() { return FeedLink; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _src_contexts_UserContext__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../src/contexts/UserContext */ "./src/contexts/UserContext.js");




var _jsxFileName = "C:\\Users\\Procheta Bhattachary\\dsc_blogs\\pages\\feed.js",
    _context$user,
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





















function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["children", "value", "index"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    role: "tabpanel",
    hidden: value !== index,
    id: "scrollable-auto-tabpanel-".concat(index),
    "aria-labelledby": "scrollable-auto-tab-".concat(index)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_20__["default"], {
    p: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, children))));
}

_c = TabPanel;
TabPanel.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.node,
  index: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any.isRequired
};

function a11yProps(index) {
  return {
    id: "scrollable-auto-tab-".concat(index),
    'aria-controls': "scrollable-auto-tabpanel-".concat(index)
  };
}

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      fontSize: 50
    }
  };
});
var classes = useStyles();

var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(0),
    _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
    value = _React$useState2[0],
    setValue = _React$useState2[1];

var handleChange = function handleChange(event, newValue) {
  setValue(newValue);
};

if (!((_context$user = context.user) === null || _context$user === void 0 ? void 0 : _context$user.uid)) {
  next_router__WEBPACK_IMPORTED_MODULE_7___default()().push('/');
}

var ScrollableTabsButtonAuto = function ScrollableTabsButtonAuto() {
  return __jsx("div", {
    className: "jsx-3349606002" + " " + (classes.root || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_15__["default"], {
    position: "static",
    color: "default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_17__["default"], {
    value: value,
    onChange: handleChange,
    indicatorColor: "primary",
    textColor: "primary",
    variant: "scrollable",
    scrollButtons: "auto",
    "aria-label": "scrollable auto tabs example",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_18__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: "Drafts\uD83D\uDCDC"
  }, a11yProps(0), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_18__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: "My feed\uD83D\uDCC3"
  }, a11yProps(1), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_18__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: "Publish\uD83D\uDD8B"
  }, a11yProps(2), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_18__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: "Starred items\u2B50"
  }, a11yProps(3), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_18__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: "My account\uD83D\uDE4B\u200D\u2640\uFE0F\uD83D\uDE4B\u200D\u2642\uFE0F"
  }, a11yProps(4), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_18__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: "Notifications\uD83D\uDD14"
  }, a11yProps(5), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_18__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: "Settings\u2699"
  }, a11yProps(6), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_18__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: "Log out\uD83D\uDCE4"
  }, a11yProps(7), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  })))), __jsx(TabPanel, {
    value: value,
    index: 0,
    id: "new",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, __jsx("br", {
    className: "jsx-3349606002",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 50
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-3349606002" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, "DSC NSEC BLOGS-", __jsx("i", {
    id: "s",
    className: "jsx-3349606002",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 22
    }
  }, "Write Your Own Story!")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h4",
    gutterBottom: true,
    style: {
      textAlign: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, "Start blogging today! \u2712\uD83D\uDCDDShare your stories\uD83D\uDCDA, your experiences! \uD83D\uDE4B\u200D\u2640\uFE0FDid you get success at one throw \uD83E\uDD14or was it hard? Tell us your stories.\u2728We would love to hear them. \uD83D\uDCD6")), __jsx(TabPanel, {
    value: value,
    index: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, __jsx("br", {
    className: "jsx-3349606002",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }), __jsx("form", {
    className: "jsx-3349606002",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_21__["default"], {
    variant: "contained",
    color: "primary",
    type: "submit",
    style: {
      marginTop: "20px",
      width: "100px",
      padding: "1px 1px 1px 1px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "jsx-3349606002",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, "PUBLISH")), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_21__["default"], {
    variant: "contained",
    color: "primary",
    type: "submit",
    style: {
      "float": "right",
      marginTop: "20px",
      width: "100px",
      padding: "1px 1px 1px 1px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "jsx-3349606002",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, "Save Draft")), __jsx("br", {
    className: "jsx-3349606002",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }), __jsx("br", {
    className: "jsx-3349606002",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_19__["default"], {
    className: classes.margin,
    placeholder: "Title",
    fullWidth: true,
    inputProps: {
      style: {
        fontSize: 50
      },
      'aria-label': 'naked'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }), __jsx("br", {
    className: "jsx-3349606002",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }), __jsx("br", {
    className: "jsx-3349606002",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }), __jsx("br", {
    className: "jsx-3349606002",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
    height: "60",
    id: "filled-textarea",
    placeholder: "Write Your Story here.....",
    multiline: true,
    fullWidth: true,
    inputProps: {
      style: {
        fontSize: 30,
        height: 10000,
        lineHeight: 1
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }))), __jsx(TabPanel, {
    value: value,
    index: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "e",
    className: "jsx-3349606002",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  }, "Starred Stories \u2B50")), __jsx(TabPanel, {
    value: value,
    index: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }
  }, "Item 5"), __jsx(TabPanel, {
    value: value,
    index: 5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }
  }, "Item Six"), __jsx(TabPanel, {
    value: value,
    index: 7,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h4",
    gutterBottom: true,
    style: {
      textAlign: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }
  }, "Do you wish to log out?"), __jsx("center", {
    className: "jsx-3349606002",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: function onClick() {
      context.setUser(null);
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/signin');
    },
    className: "jsx-3349606002",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 11
    }
  }, "Logout"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2527382640",
    __self: _this
  }, ".title.jsx-3349606002{text-align:center;margin:0;line-height:1.15;font-size:4rem;padding:3rem 3rem 3rem 3rem;}#s.jsx-3349606002{-webkit-animation:pulse-jsx-3349606002 5s infinite;animation:pulse-jsx-3349606002 5s infinite;}@-webkit-keyframes pulse-jsx-3349606002{20%{color:red;}30%{color:blue;}40%{color:green;}100%{color:yellow;}}@keyframes pulse-jsx-3349606002{20%{color:red;}30%{color:blue;}40%{color:green;}100%{color:yellow;}}#e.jsx-3349606002{font-size:40px;}#pro.jsx-3349606002{color:blue;}#b.jsx-3349606002 InputBase.jsx-3349606002{font-size:100px;}textField.jsx-3349606002:{width:400;margin:100;}#but.jsx-3349606002{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUHJvY2hldGEgQmhhdHRhY2hhcnlcXGRzY19ibG9nc1xccGFnZXNcXGZlZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNExrQixBQUcwQixBQU9XLEFBSWhCLEFBR0UsQUFHQyxBQUdBLEFBSUQsQUFHSixBQUtLLEFBR0wsQUFJVSxVQTNCcEIsQUF3QlcsQ0FyQlgsQUFhRixDQVZFLENBR0EsRUFJRixDQVFBLEVBaENXLEdBb0NYLE1BbkNtQixpQkFDRixlQUNhLDRCQUM5QixNQW1DQSxDQWhDQSIsImZpbGUiOiJDOlxcVXNlcnNcXFByb2NoZXRhIEJoYXR0YWNoYXJ5XFxkc2NfYmxvZ3NcXHBhZ2VzXFxmZWVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIlxyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgcmVzcG9uc2l2ZUZvbnRTaXplcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dCc7XHJcbmltcG9ydCBUYWJzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYnMnO1xyXG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYic7XHJcbmltcG9ydCBJbnB1dEJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRCYXNlJztcclxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIlxyXG5pbXBvcnQgeyBibHVlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJztcclxuXHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL3NyYy9jb250ZXh0cy9Vc2VyQ29udGV4dFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFRhYlBhbmVsKHByb3BzKSB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgdmFsdWUsIGluZGV4LCAuLi5vdGhlciB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGRpdlxyXG4gICAgICByb2xlPVwidGFicGFuZWxcIlxyXG4gICAgICBoaWRkZW49e3ZhbHVlICE9PSBpbmRleH1cclxuICAgICAgaWQ9e2BzY3JvbGxhYmxlLWF1dG8tdGFicGFuZWwtJHtpbmRleH1gfVxyXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9e2BzY3JvbGxhYmxlLWF1dG8tdGFiLSR7aW5kZXh9YH1cclxuICAgICAgey4uLm90aGVyfVxyXG4gICAgPlxyXG4gICAgICB7dmFsdWUgPT09IGluZGV4ICYmIChcclxuICAgICAgICA8Qm94IHA9ezN9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHk+e2NoaWxkcmVufTwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuVGFiUGFuZWwucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICBpbmRleDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxyXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBhMTF5UHJvcHMoaW5kZXgpIHtcclxuICByZXR1cm4ge1xyXG4gICAgaWQ6IGBzY3JvbGxhYmxlLWF1dG8tdGFiLSR7aW5kZXh9YCxcclxuICAgICdhcmlhLWNvbnRyb2xzJzogYHNjcm9sbGFibGUtYXV0by10YWJwYW5lbC0ke2luZGV4fWAsXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbmZvbnRTaXplOjUwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbiAgXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblxyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGlmKCFjb250ZXh0LnVzZXI/LnVpZCkge1xyXG4gICAgUm91dGVyKCkucHVzaCgnLycpXHJcbiAgfVxyXG5cclxuXHJcbmNvbnN0IFNjcm9sbGFibGVUYWJzQnV0dG9uQXV0byA9ICgpID0+IHtcclxuXHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNvbG9yPVwiZGVmYXVsdFwiPlxyXG4gICAgICAgIDxUYWJzXHJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgaW5kaWNhdG9yQ29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHRleHRDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgdmFyaWFudD1cInNjcm9sbGFibGVcIlxyXG4gICAgICAgICAgc2Nyb2xsQnV0dG9ucz1cImF1dG9cIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cInNjcm9sbGFibGUgYXV0byB0YWJzIGV4YW1wbGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUYWIgbGFiZWw9XCJEcmFmdHPwn5OcXCIgey4uLmExMXlQcm9wcygwKX0gLz5cclxuICAgICAgICAgIDxUYWIgbGFiZWw9XCJNeSBmZWVk8J+Tg1wiIHsuLi5hMTF5UHJvcHMoMSl9IC8+XHJcbiAgICAgICAgICA8VGFiIGxhYmVsPVwiUHVibGlzaPCflotcIiB7Li4uYTExeVByb3BzKDIpfSAvPlxyXG4gICAgICAgICAgPFRhYiBsYWJlbD1cIlN0YXJyZWQgaXRlbXPirZBcIiB7Li4uYTExeVByb3BzKDMpfSAvPlxyXG4gICAgICAgICAgPFRhYiBsYWJlbD1cIk15IGFjY291bnTwn5mL4oCN4pmA77iP8J+Zi+KAjeKZgu+4j1wiIHsuLi5hMTF5UHJvcHMoNCl9IC8+XHJcbiAgICAgICAgICA8VGFiIGxhYmVsPVwiTm90aWZpY2F0aW9uc/CflJRcIiB7Li4uYTExeVByb3BzKDUpfSAvPlxyXG4gICAgICAgICAgPFRhYiBsYWJlbD1cIlNldHRpbmdz4pqZXCIgey4uLmExMXlQcm9wcyg2KX0gLz5cclxuICAgICAgICAgIDxUYWIgbGFiZWw9XCJMb2cgb3V08J+TpFwiIHsuLi5hMTF5UHJvcHMoNyl9IC8+XHJcbiAgICAgICAgIFxyXG4gICAgICAgIDwvVGFicz5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXswfSBpZD1cIm5ld1wiPjxicj48L2JyPlxyXG5cclxuICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezF9PlxyXG4gICAgICAgIFxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgRFNDIE5TRUMgQkxPR1MtPGkgaWQ9XCJzXCI+V3JpdGUgWW91ciBPd24gU3RvcnkhPC9pPlxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBndXR0ZXJCb3R0b20gc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgIFN0YXJ0IGJsb2dnaW5nIHRvZGF5ISDinJLwn5OdU2hhcmUgeW91ciBzdG9yaWVz8J+TmiwgeW91ciBleHBlcmllbmNlcyEg8J+Zi+KAjeKZgO+4j0RpZCB5b3UgZ2V0IHN1Y2Nlc3MgYXQgb25lIHRocm93IPCfpJRvciB3YXMgaXQgaGFyZD8gVGVsbCB1cyB5b3VyIHN0b3JpZXMu4pyoV2Ugd291bGQgbG92ZSB0byBoZWFyIHRoZW0uIPCfk5YgXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17Mn0+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjEwMHB4XCIscGFkZGluZzpcIjFweCAxcHggMXB4IDFweFwiLCB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YT5QVUJMSVNIPC9hPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6XCJyaWdodFwiLG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjEwMHB4XCIscGFkZGluZzpcIjFweCAxcHggMXB4IDFweFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhPlNhdmUgRHJhZnQ8L2E+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgPERpdmlkZXI+PC9EaXZpZGVyPlxyXG4gICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPElucHV0QmFzZVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgaW5wdXRQcm9wcz17eyBzdHlsZToge2ZvbnRTaXplOiA1MH0sJ2FyaWEtbGFiZWwnOiAnbmFrZWQnIH19XHJcbiAgICAgIC8+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGhlaWdodD1cIjYwXCJcclxuICAgICAgICAgIGlkPVwiZmlsbGVkLXRleHRhcmVhXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUgWW91ciBTdG9yeSBoZXJlLi4uLi5cIlxyXG4gICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgIGlucHV0UHJvcHM9e3tzdHlsZToge2ZvbnRTaXplOiAzMCxoZWlnaHQ6MTAwMDAsbGluZUhlaWdodDoxfX19XHJcbiAgICAgICAgLz5cclxuICAgICAgICBcclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXszfT5cclxuICAgICAgICA8ZGl2IGlkPVwiZVwiPlxyXG4gICAgICAgICBTdGFycmVkIFN0b3JpZXMg4q2QXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXs0fT5cclxuICAgICAgSXRlbSA1XHJcbiAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXs1fT5cclxuICAgICAgICBJdGVtIFNpeFxyXG4gICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17N30+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGd1dHRlckJvdHRvbSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgRG8geW91IHdpc2ggdG8gbG9nIG91dD9cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBjb250ZXh0LnNldFVzZXIobnVsbCk7XHJcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9zaWduaW4nKVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgcGFkZGluZzogM3JlbSAzcmVtIDNyZW0gM3JlbTtcclxuICAgICAgfVxyXG4gICAgICAjc3tcclxuICAgICAgICBhbmltYXRpb246IHB1bHNlIDVzIGluZmluaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgICAgIDIwJSB7XHJcbiAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAzMCV7XHJcbiAgICAgICAgICAgIGNvbG9yOmJsdWU7IFxyXG4gICAgICAgIH1cclxuICAgICAgICA0MCV7XHJcbiAgICAgICAgICAgIGNvbG9yOmdyZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICNle1xyXG4gICAgICAgIGZvbnQtc2l6ZTo0MHB4O1xyXG4gICAgICB9XHJcbiAgICAgICNwcm97XHJcbiAgICAgICAgY29sb3I6Ymx1ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgICNiIElucHV0QmFzZXtcclxuICAgICAgICBmb250LXNpemU6MTAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgdGV4dEZpZWxkOiB7XHJcbiAgICAgICAgd2lkdGg6IDQwMDtcclxuICAgICAgICBtYXJnaW46IDEwMDtcclxuICAgICAgfSBcclxuICAgICAgI2J1dHtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5jb25zdCBGZWVkTGluayA9ICgpID0+IChcclxuICAgIDxwPlxyXG4gICAgICA8TGluayBocmVmPScvZmVlZCc+XHJcbiAgICAgICAgPGE+RmVlZDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9wPlxyXG4gICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxhYmxlVGFic0J1dHRvbkF1dG9cclxuXHJcbmV4cG9ydHsgRmVlZExpbmt9XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Procheta Bhattachary\\\\dsc_blogs\\\\pages\\\\feed.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3379920139",
    __self: _this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUHJvY2hldGEgQmhhdHRhY2hhcnlcXGRzY19ibG9nc1xccGFnZXNcXGZlZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd095QixBQUlxQixBQVFZLFVBUGIsU0FHRyxHQUtkLG1JQUpBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcUHJvY2hldGEgQmhhdHRhY2hhcnlcXGRzY19ibG9nc1xccGFnZXNcXGZlZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiXHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCByZXNwb25zaXZlRm9udFNpemVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0JztcclxuaW1wb3J0IFRhYnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFicyc7XHJcbmltcG9ydCBUYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFiJztcclxuaW1wb3J0IElucHV0QmFzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEJhc2UnO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiXHJcbmltcG9ydCB7IGJsdWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnO1xyXG5cclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vc3JjL2NvbnRleHRzL1VzZXJDb250ZXh0XCI7XHJcblxyXG5cclxuZnVuY3Rpb24gVGFiUGFuZWwocHJvcHMpIHtcclxuICBjb25zdCB7IGNoaWxkcmVuLCB2YWx1ZSwgaW5kZXgsIC4uLm90aGVyIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8ZGl2XHJcbiAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXHJcbiAgICAgIGhpZGRlbj17dmFsdWUgIT09IGluZGV4fVxyXG4gICAgICBpZD17YHNjcm9sbGFibGUtYXV0by10YWJwYW5lbC0ke2luZGV4fWB9XHJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT17YHNjcm9sbGFibGUtYXV0by10YWItJHtpbmRleH1gfVxyXG4gICAgICB7Li4ub3RoZXJ9XHJcbiAgICA+XHJcbiAgICAgIHt2YWx1ZSA9PT0gaW5kZXggJiYgKFxyXG4gICAgICAgIDxCb3ggcD17M30+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeT57Y2hpbGRyZW59PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5UYWJQYW5lbC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIGluZGV4OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXHJcbiAgdmFsdWU6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGExMXlQcm9wcyhpbmRleCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBpZDogYHNjcm9sbGFibGUtYXV0by10YWItJHtpbmRleH1gLFxyXG4gICAgJ2FyaWEtY29udHJvbHMnOiBgc2Nyb2xsYWJsZS1hdXRvLXRhYnBhbmVsLSR7aW5kZXh9YCxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuZm9udFNpemU6NTAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuICBcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgaWYoIWNvbnRleHQudXNlcj8udWlkKSB7XHJcbiAgICBSb3V0ZXIoKS5wdXNoKCcvJylcclxuICB9XHJcblxyXG5cclxuY29uc3QgU2Nyb2xsYWJsZVRhYnNCdXR0b25BdXRvID0gKCkgPT4ge1xyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY29sb3I9XCJkZWZhdWx0XCI+XHJcbiAgICAgICAgPFRhYnNcclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgdGV4dENvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICB2YXJpYW50PVwic2Nyb2xsYWJsZVwiXHJcbiAgICAgICAgICBzY3JvbGxCdXR0b25zPVwiYXV0b1wiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwic2Nyb2xsYWJsZSBhdXRvIHRhYnMgZXhhbXBsZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRhYiBsYWJlbD1cIkRyYWZ0c/Cfk5xcIiB7Li4uYTExeVByb3BzKDApfSAvPlxyXG4gICAgICAgICAgPFRhYiBsYWJlbD1cIk15IGZlZWTwn5ODXCIgey4uLmExMXlQcm9wcygxKX0gLz5cclxuICAgICAgICAgIDxUYWIgbGFiZWw9XCJQdWJsaXNo8J+Wi1wiIHsuLi5hMTF5UHJvcHMoMil9IC8+XHJcbiAgICAgICAgICA8VGFiIGxhYmVsPVwiU3RhcnJlZCBpdGVtc+KtkFwiIHsuLi5hMTF5UHJvcHMoMyl9IC8+XHJcbiAgICAgICAgICA8VGFiIGxhYmVsPVwiTXkgYWNjb3VudPCfmYvigI3imYDvuI/wn5mL4oCN4pmC77iPXCIgey4uLmExMXlQcm9wcyg0KX0gLz5cclxuICAgICAgICAgIDxUYWIgbGFiZWw9XCJOb3RpZmljYXRpb25z8J+UlFwiIHsuLi5hMTF5UHJvcHMoNSl9IC8+XHJcbiAgICAgICAgICA8VGFiIGxhYmVsPVwiU2V0dGluZ3PimplcIiB7Li4uYTExeVByb3BzKDYpfSAvPlxyXG4gICAgICAgICAgPFRhYiBsYWJlbD1cIkxvZyBvdXTwn5OkXCIgey4uLmExMXlQcm9wcyg3KX0gLz5cclxuICAgICAgICAgXHJcbiAgICAgICAgPC9UYWJzPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezB9IGlkPVwibmV3XCI+PGJyPjwvYnI+XHJcblxyXG4gICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17MX0+XHJcbiAgICAgICAgXHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICBEU0MgTlNFQyBCTE9HUy08aSBpZD1cInNcIj5Xcml0ZSBZb3VyIE93biBTdG9yeSE8L2k+XHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGd1dHRlckJvdHRvbSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgU3RhcnQgYmxvZ2dpbmcgdG9kYXkhIOKckvCfk51TaGFyZSB5b3VyIHN0b3JpZXPwn5OaLCB5b3VyIGV4cGVyaWVuY2VzISDwn5mL4oCN4pmA77iPRGlkIHlvdSBnZXQgc3VjY2VzcyBhdCBvbmUgdGhyb3cg8J+klG9yIHdhcyBpdCBoYXJkPyBUZWxsIHVzIHlvdXIgc3Rvcmllcy7inKhXZSB3b3VsZCBsb3ZlIHRvIGhlYXIgdGhlbS4g8J+TliBcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXsyfT5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMTAwcHhcIixwYWRkaW5nOlwiMXB4IDFweCAxcHggMXB4XCIsIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhPlBVQkxJU0g8L2E+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBmbG9hdDpcInJpZ2h0XCIsbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMTAwcHhcIixwYWRkaW5nOlwiMXB4IDFweCAxcHggMXB4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGE+U2F2ZSBEcmFmdDwvYT5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICA8RGl2aWRlcj48L0RpdmlkZXI+XHJcbiAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8SW5wdXRCYXNlXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcclxuICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICBpbnB1dFByb3BzPXt7IHN0eWxlOiB7Zm9udFNpemU6IDUwfSwnYXJpYS1sYWJlbCc6ICduYWtlZCcgfX1cclxuICAgICAgLz5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgaGVpZ2h0PVwiNjBcIlxyXG4gICAgICAgICAgaWQ9XCJmaWxsZWQtdGV4dGFyZWFcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSBZb3VyIFN0b3J5IGhlcmUuLi4uLlwiXHJcbiAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgaW5wdXRQcm9wcz17e3N0eWxlOiB7Zm9udFNpemU6IDMwLGhlaWdodDoxMDAwMCxsaW5lSGVpZ2h0OjF9fX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezN9PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJlXCI+XHJcbiAgICAgICAgIFN0YXJyZWQgU3RvcmllcyDirZBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezR9PlxyXG4gICAgICBJdGVtIDVcclxuICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezV9PlxyXG4gICAgICAgIEl0ZW0gU2l4XHJcbiAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXs3fT5cclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgZ3V0dGVyQm90dG9tIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICBEbyB5b3Ugd2lzaCB0byBsb2cgb3V0P1xyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnRleHQuc2V0VXNlcihudWxsKTtcclxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL3NpZ25pbicpXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvY2VudGVyPlxyXG4gICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICBwYWRkaW5nOiAzcmVtIDNyZW0gM3JlbSAzcmVtO1xyXG4gICAgICB9XHJcbiAgICAgICNze1xyXG4gICAgICAgIGFuaW1hdGlvbjogcHVsc2UgNXMgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuICAgICAgQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgICAgICAgMjAlIHtcclxuICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDMwJXtcclxuICAgICAgICAgICAgY29sb3I6Ymx1ZTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDQwJXtcclxuICAgICAgICAgICAgY29sb3I6Z3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgY29sb3I6IHllbGxvdztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgI2V7XHJcbiAgICAgICAgZm9udC1zaXplOjQwcHg7XHJcbiAgICAgIH1cclxuICAgICAgI3Byb3tcclxuICAgICAgICBjb2xvcjpibHVlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgI2IgSW5wdXRCYXNle1xyXG4gICAgICAgIGZvbnQtc2l6ZToxMDBweDtcclxuICAgICAgfVxyXG4gICAgICB0ZXh0RmllbGQ6IHtcclxuICAgICAgICB3aWR0aDogNDAwO1xyXG4gICAgICAgIG1hcmdpbjogMTAwO1xyXG4gICAgICB9IFxyXG4gICAgICAjYnV0e1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmNvbnN0IEZlZWRMaW5rID0gKCkgPT4gKFxyXG4gICAgPHA+XHJcbiAgICAgIDxMaW5rIGhyZWY9Jy9mZWVkJz5cclxuICAgICAgICA8YT5GZWVkPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L3A+XHJcbiAgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbGFibGVUYWJzQnV0dG9uQXV0b1xyXG5cclxuZXhwb3J0eyBGZWVkTGlua31cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Procheta Bhattachary\\\\dsc_blogs\\\\pages\\\\feed.js */"));
};

_c2 = ScrollableTabsButtonAuto;

var FeedLink = function FeedLink() {
  return __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/feed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 9
    }
  }, "Feed")));
};

_c3 = FeedLink;
/* harmony default export */ __webpack_exports__["default"] = (ScrollableTabsButtonAuto);


var _c, _c2, _c3;

$RefreshReg$(_c, "TabPanel");
$RefreshReg$(_c2, "ScrollableTabsButtonAuto");
$RefreshReg$(_c3, "FeedLink");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmVlZC5qcyJdLCJuYW1lcyI6WyJUYWJQYW5lbCIsInByb3BzIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsImluZGV4Iiwib3RoZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiYW55IiwiaXNSZXF1aXJlZCIsImExMXlQcm9wcyIsImlkIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwiZm9udFNpemUiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsImNvbnRleHQiLCJ1c2VyIiwidWlkIiwiUm91dGVyIiwicHVzaCIsIlNjcm9sbGFibGVUYWJzQnV0dG9uQXV0byIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJtYXJnaW4iLCJzdHlsZSIsImhlaWdodCIsImxpbmVIZWlnaHQiLCJzZXRVc2VyIiwiRmVlZExpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUEsTUFDZkMsUUFEZSxHQUNzQkQsS0FEdEIsQ0FDZkMsUUFEZTtBQUFBLE1BQ0xDLEtBREssR0FDc0JGLEtBRHRCLENBQ0xFLEtBREs7QUFBQSxNQUNFQyxLQURGLEdBQ3NCSCxLQUR0QixDQUNFRyxLQURGO0FBQUEsTUFDWUMsS0FEWixzR0FDc0JKLEtBRHRCOztBQUd2QixT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QTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQURGLENBRGE7QUFBQSxDQUFqQjs7TUFBTUEsUTtBQVFTVCx1RkFBZjtBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUuYzNhMmMyNjk3YjQ3ZDY1ZDgyNjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb24nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCJcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHJlc3BvbnNpdmVGb250U2l6ZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXQnO1xyXG5pbXBvcnQgVGFicyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJzJztcclxuaW1wb3J0IFRhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWInO1xyXG5pbXBvcnQgSW5wdXRCYXNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QmFzZSc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCJcclxuaW1wb3J0IHsgYmx1ZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycyc7XHJcblxyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9zcmMvY29udGV4dHMvVXNlckNvbnRleHRcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBUYWJQYW5lbChwcm9wcykge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4sIHZhbHVlLCBpbmRleCwgLi4ub3RoZXIgfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxkaXZcclxuICAgICAgcm9sZT1cInRhYnBhbmVsXCJcclxuICAgICAgaGlkZGVuPXt2YWx1ZSAhPT0gaW5kZXh9XHJcbiAgICAgIGlkPXtgc2Nyb2xsYWJsZS1hdXRvLXRhYnBhbmVsLSR7aW5kZXh9YH1cclxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtgc2Nyb2xsYWJsZS1hdXRvLXRhYi0ke2luZGV4fWB9XHJcbiAgICAgIHsuLi5vdGhlcn1cclxuICAgID5cclxuICAgICAge3ZhbHVlID09PSBpbmRleCAmJiAoXHJcbiAgICAgICAgPEJveCBwPXszfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5PntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcblRhYlBhbmVsLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgaW5kZXg6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcclxuICB2YWx1ZTogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gYTExeVByb3BzKGluZGV4KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGlkOiBgc2Nyb2xsYWJsZS1hdXRvLXRhYi0ke2luZGV4fWAsXHJcbiAgICAnYXJpYS1jb250cm9scyc6IGBzY3JvbGxhYmxlLWF1dG8tdGFicGFuZWwtJHtpbmRleH1gLFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG5mb250U2l6ZTo1MCxcclxuICB9LFxyXG59KSk7XHJcblxyXG4gIFxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICB9O1xyXG5cclxuICBpZighY29udGV4dC51c2VyPy51aWQpIHtcclxuICAgIFJvdXRlcigpLnB1c2goJy8nKVxyXG4gIH1cclxuXHJcblxyXG5jb25zdCBTY3JvbGxhYmxlVGFic0J1dHRvbkF1dG8gPSAoKSA9PiB7XHJcblxyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjb2xvcj1cImRlZmF1bHRcIj5cclxuICAgICAgICA8VGFic1xyXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIGluZGljYXRvckNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICB0ZXh0Q29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJzY3JvbGxhYmxlXCJcclxuICAgICAgICAgIHNjcm9sbEJ1dHRvbnM9XCJhdXRvXCJcclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJzY3JvbGxhYmxlIGF1dG8gdGFicyBleGFtcGxlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VGFiIGxhYmVsPVwiRHJhZnRz8J+TnFwiIHsuLi5hMTF5UHJvcHMoMCl9IC8+XHJcbiAgICAgICAgICA8VGFiIGxhYmVsPVwiTXkgZmVlZPCfk4NcIiB7Li4uYTExeVByb3BzKDEpfSAvPlxyXG4gICAgICAgICAgPFRhYiBsYWJlbD1cIlB1Ymxpc2jwn5aLXCIgey4uLmExMXlQcm9wcygyKX0gLz5cclxuICAgICAgICAgIDxUYWIgbGFiZWw9XCJTdGFycmVkIGl0ZW1z4q2QXCIgey4uLmExMXlQcm9wcygzKX0gLz5cclxuICAgICAgICAgIDxUYWIgbGFiZWw9XCJNeSBhY2NvdW508J+Zi+KAjeKZgO+4j/CfmYvigI3imYLvuI9cIiB7Li4uYTExeVByb3BzKDQpfSAvPlxyXG4gICAgICAgICAgPFRhYiBsYWJlbD1cIk5vdGlmaWNhdGlvbnPwn5SUXCIgey4uLmExMXlQcm9wcyg1KX0gLz5cclxuICAgICAgICAgIDxUYWIgbGFiZWw9XCJTZXR0aW5nc+KamVwiIHsuLi5hMTF5UHJvcHMoNil9IC8+XHJcbiAgICAgICAgICA8VGFiIGxhYmVsPVwiTG9nIG91dPCfk6RcIiB7Li4uYTExeVByb3BzKDcpfSAvPlxyXG4gICAgICAgICBcclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17MH0gaWQ9XCJuZXdcIj48YnI+PC9icj5cclxuXHJcbiAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXsxfT5cclxuICAgICAgICBcclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgIERTQyBOU0VDIEJMT0dTLTxpIGlkPVwic1wiPldyaXRlIFlvdXIgT3duIFN0b3J5ITwvaT5cclxuICAgICAgPC9oMT5cclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgZ3V0dGVyQm90dG9tIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICBTdGFydCBibG9nZ2luZyB0b2RheSEg4pyS8J+TnVNoYXJlIHlvdXIgc3Rvcmllc/Cfk5osIHlvdXIgZXhwZXJpZW5jZXMhIPCfmYvigI3imYDvuI9EaWQgeW91IGdldCBzdWNjZXNzIGF0IG9uZSB0aHJvdyDwn6SUb3Igd2FzIGl0IGhhcmQ/IFRlbGwgdXMgeW91ciBzdG9yaWVzLuKcqFdlIHdvdWxkIGxvdmUgdG8gaGVhciB0aGVtLiDwn5OWIFxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezJ9PlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiLCB3aWR0aDogXCIxMDBweFwiLHBhZGRpbmc6XCIxcHggMXB4IDFweCAxcHhcIiwgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGE+UFVCTElTSDwvYT5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZsb2F0OlwicmlnaHRcIixtYXJnaW5Ub3A6IFwiMjBweFwiLCB3aWR0aDogXCIxMDBweFwiLHBhZGRpbmc6XCIxcHggMXB4IDFweCAxcHhcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YT5TYXZlIERyYWZ0PC9hPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgIDxEaXZpZGVyPjwvRGl2aWRlcj5cclxuICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxJbnB1dEJhc2VcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxyXG4gICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgIGlucHV0UHJvcHM9e3sgc3R5bGU6IHtmb250U2l6ZTogNTB9LCdhcmlhLWxhYmVsJzogJ25ha2VkJyB9fVxyXG4gICAgICAvPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICBoZWlnaHQ9XCI2MFwiXHJcbiAgICAgICAgICBpZD1cImZpbGxlZC10ZXh0YXJlYVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIFlvdXIgU3RvcnkgaGVyZS4uLi4uXCJcclxuICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICBpbnB1dFByb3BzPXt7c3R5bGU6IHtmb250U2l6ZTogMzAsaGVpZ2h0OjEwMDAwLGxpbmVIZWlnaHQ6MX19fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17M30+XHJcbiAgICAgICAgPGRpdiBpZD1cImVcIj5cclxuICAgICAgICAgU3RhcnJlZCBTdG9yaWVzIOKtkFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17NH0+XHJcbiAgICAgIEl0ZW0gNVxyXG4gICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17NX0+XHJcbiAgICAgICAgSXRlbSBTaXhcclxuICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezd9PlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBndXR0ZXJCb3R0b20gc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgIERvIHlvdSB3aXNoIHRvIGxvZyBvdXQ/XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29udGV4dC5zZXRVc2VyKG51bGwpO1xyXG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvc2lnbmluJylcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDNyZW0gM3JlbSAzcmVtIDNyZW07XHJcbiAgICAgIH1cclxuICAgICAgI3N7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSA1cyBpbmZpbml0ZTtcclxuICAgICAgfVxyXG4gICAgICBAa2V5ZnJhbWVzIHB1bHNlIHtcclxuICAgICAgICAyMCUge1xyXG4gICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgMzAle1xyXG4gICAgICAgICAgICBjb2xvcjpibHVlOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgNDAle1xyXG4gICAgICAgICAgICBjb2xvcjpncmVlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICBjb2xvcjogeWVsbG93O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAjZXtcclxuICAgICAgICBmb250LXNpemU6NDBweDtcclxuICAgICAgfVxyXG4gICAgICAjcHJve1xyXG4gICAgICAgIGNvbG9yOmJsdWU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAjYiBJbnB1dEJhc2V7XHJcbiAgICAgICAgZm9udC1zaXplOjEwMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIHRleHRGaWVsZDoge1xyXG4gICAgICAgIHdpZHRoOiA0MDA7XHJcbiAgICAgICAgbWFyZ2luOiAxMDA7XHJcbiAgICAgIH0gXHJcbiAgICAgICNidXR7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuY29uc3QgRmVlZExpbmsgPSAoKSA9PiAoXHJcbiAgICA8cD5cclxuICAgICAgPExpbmsgaHJlZj0nL2ZlZWQnPlxyXG4gICAgICAgIDxhPkZlZWQ8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvcD5cclxuICApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsYWJsZVRhYnNCdXR0b25BdXRvXHJcblxyXG5leHBvcnR7IEZlZWRMaW5rfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9